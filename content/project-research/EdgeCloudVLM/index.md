---
title: "Edge-Cloud VLM: Vision Encoder Quantization for On-Device Deployment"
date: 2026-08-28
draft: false
tags:
  - Quantization
  - Vision-Language Models
  - Edge-Cloud Architecture
  - On-Device Deployment
  - Model Compression
  - NPU
featured: true
page_type: projects

summary: Quantizing a VLM vision encoder for a Qualcomm QCS8550 NPU. Eleven configurations were evaluated on GPU; four execute on target. The finding is less about what quantization costs than about which measurements survive the move from development to deployment.
---
<div style="text-align: justify;">

> **Evaluating Vision Encoder Quantization for Edge-Cloud VLMs: Where Evaluation Breaks When Moving from Development to Deployment.** *Manuscript to be submitted.*

## Development and deployment are two different problems

I spent the last few months quantizing the vision encoder of a vision-language model for an edge-cloud split, and the thing that surprised me was not how much fidelity quantization costs. It was how few of the configurations I had carefully evaluated could be run at all.

Eleven configurations, built and measured on a GPU. Four of them execute on the Qualcomm QCS8550 HTP target I was compiling for. The other seven are stopped by three separate walls, and none of the three is visible from the environment where the configuration was chosen.

## The three walls

The first closes before anything is compiled. TorchAO's dynamic activation quantization derives its scales from the current input, and that operation has no ONNX representation. Its INT4 weight packing depends on a CUDA-only kernel with the same problem. Those configurations cannot be exported, so the question of whether the device would accept them never gets asked.

The second closes at the context binary. AIMET exports an INT4-weight QDQ ONNX, AI Hub's quantize job accepts it, and then the compile and link step fails with `QAIRT converter failed with exit code 1`, an error naming neither the bit-width nor the operator responsible. Two vendor documents disagree about whether this should happen. The NPU white paper states that this Hexagon generation natively supports INT4 and that AIMET provides the tooling for it. The AI Hub quantization page lists INT8 as the only supported weight precision for every runtime and places INT4 among long-term goals. Both are accurate. Only the second governs what compiles.

The third closes later still. AIMET's mixed-precision export passes export, passes quantize, passes compile, each stage reporting success, and fails when the profiling job composes the graph from the DLC. The feature is in beta, so there is no supported-configuration list to check the export against beforehand, and nothing earlier in the pipeline signals that the route does not exist.

There is a fourth that I did clear, and it is instructive because the error points at the wrong thing. Compilation was rejected at a `Slice` operator whose bounds could not be resolved as constants. The operator was not the problem. `grid_thw` was being passed through `forward()`, so ONNX traced it as a graph input, and ahead-of-time compilation requires any value fixing an operator's extent to be constant. Baking it into the module as a buffer fixes it. That only works because every image enters at the same resolution, so one constant is correct for the whole evaluation. Video cannot use it: clips differ in frame count and spatial size, so an on-device video route would need one pre-compiled binary per clip.

## Why I was looking here

My PhD came out of a list like this one.

For two years I worked on a [5000-hour deployment of context-aware acoustic surveillance](../sensecity/) across Ghent and Rotterdam, with an industrial partner and real uncurated street audio. What that collaboration produced was not a model. It was an inventory of ways a system that had passed in the lab stops behaving once it meets a street. Two structural problems came out of that inventory: context drifts between sites in ways nobody enumerates in advance, and the events actually worth detecting are recurrent but unpredictable, so you cannot build the label set before you deploy. Three research lines followed. One of them ended in a way to judge whether a model fits a target deployment without labels and without retraining, which is the only version of that question that survives contact with a company that will not hand over its source data. The dissertation was called [*From Lab to Street*](../phd/).

The modality has changed here. The question has not. There the field was a street; here it is an NPU. What carries across is the instinct to measure before a label or a trained head exists, because by the time you have either, you have already committed to something. What is new is the direction. The PhD asked whether the model transfers from where it is built to where it runs. This asks whether the measurement does.

The setting is an edge-cloud vision-language system. The vision encoder runs on the device continuously, turning frames into embeddings that lightweight heads consume locally. When a head flags something, the embedding goes to the cloud, where a frozen decoder reasons over it. Only the encoder is always on, so the encoder is what you compress, and it is the only thing quantized in this work.

## A configuration is not a bit-width

The label a result gets reported under carries the weight precision and the activation precision. It leaves out the backend, the scheme that backend thereby fixes, and the calibration set, which is three of the five factors that actually determine behaviour.

Two configurations both called W8A8 sit at 0.9990 and 0.5039 cosine against the same reference, and 0.9189 against 0.6368 in macro AUC across CelebA's 40 attributes on the full 19962-image test partition. That is 28.2 percentage points between two rows that a results table would put under one name.

The obvious first hypothesis is that the collapsed one is under-calibrated, and it is cheap to test, so I tested it three ways. Raising the calibration set from 32 to 512 images moves the cosine the wrong way, by 0.017. Calibrating on every vision token the target clip produces, rather than on face images, is no better, and on the short clip it is worse. Pooling three in-domain clips from the same category is also no better. Out-of-domain face images remain the best of the three sources on the short clip. Whatever is failing, coverage of the input distribution is not it.

## The two environments disagree about what quantization costs

The same W8A16 configuration reports 56.59 dB PSNR in simulation and 39.88 dB on device, while the two cosines differ by 0.0067. AIMET version drift does not explain it: 2.34.0 and 2.35.0 produce output identical to four decimal places under identical inputs.

Cosine is scale-invariant, so agreement in cosine is equally consistent with a single global offset between the environments as with distributed rounding. To separate those, I fit the scalar that best aligns one output onto the other. The offset tracks the environment boundary rather than the precision. Within the local environment, an activation-quantized configuration aligns with the baseline to within 0.2%. Across environments, a floating-point configuration is off by just over 1% and an activation-quantized one by close to 9%, at INT16 and INT8 alike, which makes it behave like a switch rather than a bit-width-dependent drift. Removing the offset recovers at most 2.62 dB and leaves the ordering unchanged, and the top 1% of the residual carries 3.9 to 5.1% of it, close to what a Gaussian residual would give. So it is neither one broken channel nor the dominant term.

Simulation orders configurations. It does not estimate them. Those are different affordances and nothing in the number tells you which one you are holding.

Cost is worse than that, because in one environment it is not a cost at all. On the GPU, the AIMET pass being timed is a fake-quant simulation with every tensor in FP32, so peak memory is identical to within 0.3 MB across every bit-width and the latency is that of an FP32 pass with quantize-dequantize nodes added. On device the mechanism differs but the effect rhymes: a configuration that leaves activations in floating point computes its weights at the activation precision, so the INT8 datapath the accelerator exists to run is never entered, and latency moves by under 1%. A flat cost curve reads as a failed quantization. It is a measurement taken where the accelerator was never engaged.

## The two consumers do not share a threshold

This is the part I did not anticipate, and it is the reason the paper has three measurement points rather than one.

On the edge, the linear head is refit for every configuration. It therefore absorbs whatever the encoder does, and every configuration above 0.90 cosine lands within 0.51 AUC percentage points of the unquantized baseline. Read on its own, that says the encoder has a wide tolerance and you should spend your remaining budget on latency.

In the cloud, the decoder is frozen. It receives an input drawn from a distribution it was never adapted to, and it has no opportunity to recover any of the shift. Configurations that were indistinguishable at the head span from 1.00 down to 0.08 in per-factor agreement with the unquantized model's own reasoning. Two of them, within 0.39 and 0.51 points at the head, fail on video: one consistently, holding a low but stable level across all three partitions, and one erratically, ranging across half the scale with no stable level at all.

So the refit-ability of the consumer, not the fidelity of the embedding, decides which measurement is admissible. A gate that may miss a trigger and a decoder that has to reproduce an answer do not tolerate the same quantization, and the head is the more dangerous of the two to trust, because it is the one that will tell you everything is fine.

The failure is also not what a coverage check would catch. The collapsed configurations parse cleanly: on one video partition every configuration parses at 65 of 65, and on the image set the collapsed ones parse more of their output than the baseline does. What separates them is how many distinct answers they give. One produced 3 different score vectors across 13 clips and 13 across 46 images, against 8 and 31 for the baseline. The output has stopped depending on the input, and every metric that counts well-formed answers rates that highly. On one partition, that configuration scores a higher ground-truth AUC than the unquantized model and matches its recall exactly.

## The one I got wrong

Before any of the above, I had a set of numbers that were wrong and consistent with each other, which is the harder kind to catch.

Simulating this target requires an HTP-aware quantization configuration, and `aimet-torch` ships one. It is not the API default. `QuantizationSimModel` takes it through `config_file`, which defaults to `None`, and under that default every operator is quantized per tensor, including the MatMul and Gemm operators this vision tower is built from. Nothing in the API reports the substitution.

Under that default, W8A8 and W8A16 measured 0.5699 and 0.5716. A near-tie, which reads as clean evidence that activation bit-width does not matter for this architecture. That reading is the exact opposite of what the correctly configured runs show, and it survived several rounds of experiments before I went back and inspected the invocation.

Changing one setting at a time afterwards was informative in its own right. The range search accounts for most of the cosine recovery, from 0.5716 to 0.9532. The configuration file accounts for most of the PSNR recovery, from 33.14 to 56.59 dB. The two metrics disagree about which setting mattered, because the per-tensor fallback is a magnitude error that leaves direction almost intact, and that is precisely the case a scale-invariant metric cannot see.

## What this rests on

One encoder, one toolchain, one target. Whether the simulation-to-execution gap takes the same shape under a different toolchain or a different NPU is untested, and a second target is the first thing I would want. The fidelity numbers are measured against a single reference and on the input distributions used, and the reasoning results assume error-free heads, which makes them an upper bound with respect to a deployed system.

What generalizes is not the numbers. It is that a measurement carries an environment and a consumer inside it, and neither of those is visible in the number itself.

---

**Paper:** manuscript to be submitted.

**Code, the 14-entry failure catalog and the complete measurement set:** [github.com/WangWeiCheng-TJ/Evaluating-Quantization-for-VLMs](https://github.com/WangWeiCheng-TJ/Evaluating-Quantization-for-VLMs)

**Archived and citable:** [doi.org/10.5281/zenodo.22147149](https://doi.org/10.5281/zenodo.22147149)

</div>
<!--more-->
