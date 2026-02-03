---
title: From Lab to Street：Transferable and Privacy-friendly Deep Learning for Urban Surveillance
date: 2025-06-30
tags:
  - Lab To Street
  - Data Scarcity 
  - Privacy Preserving 
  - Multimodal Learning
  - Domain Adaptation
---
<div style="text-align: justify;">

"_AI is here they say._" <br>
We have witnessed how artificial intelligence has reshaped our perception of the world in the past years. 
AlphaFold 2 achieved decades of work within a few weeks on predicting protein structures to accelerate medical breakthroughs. Meanwhile, GNoME discovered 380k new structures within a few months, which is equivalent to 800 years of work using the traditional way. However, we have also seen some domains struggle to apply state-of-the-art research to real-world applications. Surveillance, the chaotic, unscripted environment of our streets, constrained by privacy, scarcity, and unpredictability, is one of them.

My Ph.D. research tackles the critical bottlenecks and bridges the gap between academic research and real-world deployment on different aspects: privacy risks, data scarcity, and environmental domain shifts. This project is not merely a collection of frameworks designed to extract marginal accuracy gains on scripted datasets; it is about how we can adapt advanced models to handle the chaotic, constrained, and unscripted disorder of the real world.

The dissertation is built upon three core technical pillars:
* [Privacy-Friendly Sensing Framework](#privacy-friendly-sensing-framework) <br>
* [Audio-Visual Representation Learning](#audio-visual-representation-learning) <br>
* [Source-Free Unsupervised Transferability Assessment](#transferability-assessment) <br>
(This research culminated in a Ph.D. degree from Ghent University.)
---


### Privacy-Friendly Sensing Framework
> The "**Opt-in**" Mechanism: From Audio to Visual

Traditional privacy protection is fundamentally reactive (Opt-out). Users are forced to play an infinite game of _whack-a-mole_, trying to list every sensitive attribute they want to hide.
However, raw data is inherently **"bundled"**: a simple voice command carries not just the semantic content, but also speaker's gender, emotion, and identity. In the real world, it is impossible to exhaustively list and block every potential leakage. This "collect first, sanitize later" approach violates the core principle of **GDPR**, leaving users vulnerable to future, unforeseen extraction techniques.


Addressing the trade-off between utility and privacy. I proposed a fundamental inversion of this paradigm. Instead of asking "what should we hide?", my framework asks "what is strictly necessary?".
Using **adversarial learning**, I trained an on-edge **obfuscator** adapted from a generative architecture (**CycleGAN-VC2**), designed to protect attributes like speaker identity, emotion, and gender while maintaining compatibility with downstream models (e.g., **DeepSpeech2**).This model acts as a digital sieve that actively strips away the "bundled" sensitive attributes (like identity) at the signal level, while selectively preserving only the features required for the authorized task (e.g., speech recognition). It transforms privacy from a passive policy into an active, mathematical constraint.

Crucially, this framework solves the deployment bottleneck. The obfuscated data remains mathematically compatible with **off-the-shelf models**.
This means service providers can "plug-in" this privacy module at the edge without needing to retrain their massive backend models. It offers a **source-free**, scalable path to GDPR compliance that protects users without dismantling the existing AI infrastructure.


Experiments on four speech datasets demonstrate that the framework suppresses unauthorized attribute recognition to **near-random chance levels**, while incurring a **minimal performance drop (only 2-6%)** on authorized tasks. 
* **Audio Domain:** <br>
  Published in [_IEEE Pervasive Computing (1st author)_](/publication/2022-pc/).
* **Visual Domain:** <br>
  The core "opt-in" logic proved robust enough to be adapted to the visual domain, validating its cross-modal universality. Published in [_Applied Intelligence (2nd author)_](/publication/de-2024-privacy/).
---

### Audio-Visual Representation Learning: <br>
> The Paradox of Misalignment: Turning False Negatives into Semantic Anchors

Contrastive learning is an effective way to learn representation without labels. Yet, conventional contrastive learning on multimodal data, such as surveillance, suffers from false negatives.

When two ambulance cars occur at different times during the night, the temporal coherence constraint used by traditional contrastive learning treats them as unrelated events. These **false negatives** lead to inefficient and ineffective representation learning. In urban surveillance, **spatiotemporal discontinuity** is the norm, not the exception. A siren is often heard before the ambulance appears; a crash sound precedes the visual collision. By rigidly enforcing temporal alignment, traditional models discard these meaningful but asynchronous correlations as **false negatives**, actively unlearning the causal structure of reality.

Furthermore, traditional methods suffer from an **information bottleneck**: by relying on a single positive pair (the exact timestamp), the model learns only the **minimal sufficient** features needed to match that pair, discarding rich semantic details essential for generalization. 

Instead of treating asynchronous signals as errors to be filtered, I utilized them as **semantic anchors**. I developed the **Embedding-based Pair Generation** (EPG) mechanism, which operates on a simple premise: if two signals share high similarity in the latent space, they belong to the same event regardless of their timestamp.
 - **Dynamic Pair Re-evaluation**: EPG actively retrieves these "misaligned" samples from the memory bank and re-labels them as positive pairs.
 - **Multi-Positive Contrastive Loss**: By forcing the model to recognize multiple, time-scattered instances of the same event, we break the information bottleneck. This compels the encoder to capture richer, more robust features rather than just the minimal cues needed for temporal alignment.

 This approach successfully **transformed the chaotic charateristics** of surveillance data from a performance bottleneck **into a source of data augmentation**.
  - **Performance**: <br>Achieved a 10% improvement over state-of-the-art baselines (TACMA, MAViL) in audio-visual event localization.
  - **Rich in Information**: <br>The proposed EPG and the multi-positive loss force the model to capture dense, semantic features. This learnt representation is general-purpose, successfully powering multiple downstream tasks including event localization, anomaly detection, and query-guided event search without retraining.
  - **Scalability**: <br>Such versatility dramatically improves the scalability of edge deployments. Instead of installing separate, heavy models for each function, a single lightweight encoder can now serve multiple analytical tasks simultaneously.
  - The results has been published in [_Frontiers in Robotics and AI, 1st author_](/publication/2025-rai/).
---

### Transferability Assessment: <br>
> Navigating Without a Map: The "Source-Free" Compass

One of the greatest hurdle in large-scale deployment is **domain shift**: a model trained on a sunny day in Ghent often fails miserably on a rainy night in Taipei. In an ideal world, we would access the original training data (source data) to bridge this gap, and the well-annotated target data during the evalutaion. But in the real world, strict privacy regulations (like GDPR) often lock this data away. Engineers are forced to deploy models into new, unseen environments while effectively flying blind, unable to predict which model will survive the shift.

To solve this, I leveraged the underexplored potentional of an unlikely guide: Randomness. I proposed a novel assessment framework using **Randomly Initialized Neural Networks** (RINNs). My research revealed that while random networks contain no knowledge, their statistical structure provides a consistent, unbiased "universal ruler." By measuring the **Centered Kernel Alignment** (CKA) between a pre-trained model and a set of random networks, I derived a "fingerprint" of the model's structural adaptability. This allows us to assess model compatibility with a new environment without ever touching the restricted source data or requiring ground-truth labels.

This turns model selection from a guessing game into a precise science.
 - **Task-Agnostic Validation**: I validated this metric across a spectrum of real-world surveillance tasks, ranging from object tagging and event classification to the more abstract anomaly detection.
 - **High Correlation**: Evaluating on diverse real-world datasets, my metric achieved a Kendall’s $\tau$ correlation of 0.95 with actual model performance. 
 - **Operational Efficiency**: It acts as a "Source-Free Compass," allowing engineers to instantly identify the best-suited model for a specific camera feed before deployment, ensuring reliability while strictly respecting data sovereignty.

The results has been published in [_Sensors, 1st author_](/publication/wang-2025-source/).



</div>
<!--more-->