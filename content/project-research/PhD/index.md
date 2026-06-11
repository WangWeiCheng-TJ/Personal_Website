---
title: From Lab to Street：Transferable and Privacy-friendly Deep Learning for Urban Surveillance
date: 2025-06-30
tags:
  - Source-Free Transferability
  - Self-Supervised Learning
  - Privacy-Preserving ML
  - Contrastive Learning
  - Domain Adaptation
featured: true
page_type: projects

summary: My PhD dissertation at Ghent University, organized as three method-level directions that share a common deployment setting. The directions emerged from the SenseCity deployment study and address two structural problems revealed there - context drift across sites, and the impossibility of enumerating in advance.
---
<div style="text-align: justify;">

My PhD dissertation at Ghent University, organized as three method-level research directions. The directions did not start from method papers. They emerged from the [SenseCity deployment study](../sensecity/), a 5000+ hour evaluation of state-of-the-art audio models on real-world data, which exposed two structural problems that benchmark evaluation had smoothed out:

- **Context drift across deployment sites.** The same model degrades sharply when moved across sites or across time windows. The drift is structural, not noise, and global models cannot absorb it.
- **The impossibility of enumerating in advance.** Open-set events outside the predefined taxonomy, an open-ended privacy attack surface, and unknown downstream tasks at deployment time are three faces of the same problem: the categories that matter cannot be listed up front.

The three research directions share the same deployment setting that follows from these two problems: **general-purpose deployment** where downstream tasks are not known at training time, **real-world uncurated data** instead of curated benchmarks, and **no** assumption of **access to source data or labelled target data**. Each direction tackles one aspect of the setting.

The three research directions culminated in a Ph.D. degree from Ghent University:
* [Audio-Visual Representation Learning](#representation-learning) <br>
* [Source-Free Transferability Assessment](#transferability) <br>
* [Opt-in Privacy-Preserving ML](#opt-in-privacy) <br>

## 1. Audio-Visual Representation Learning under Real-World Constraints {#representation-learning}

**The problem.** General-purpose deployment on edge devices requires a single representation that supports multiple downstream tasks without retraining per task, because the actual tasks are not known when the encoder is deployed. Standard self-supervised contrastive learning on streaming audio-visual data hits two blockers in this setting: false negatives from temporal misalignment, where a siren precedes the visual or a recurrence hours later reads as a separate event, and the minimal-sufficient representation bottleneck, where a single positive pair pushes the encoder to learn only what is needed to match that pair, discarding features that other downstream tasks would have used.

**The approach.** I developed Embedding-based Pair Generation, which reformulates pair selection in the embedding space rather than on the time axis. Samples with high latent-space similarity are recovered as positives regardless of timestamp, so recurrent but unpredictable events stop being treated as unrelated. The contrastive loss is adapted to accommodate multiple positives per anchor, which relaxes the representation bottleneck and pushes the encoder toward richer features instead of the minimum needed for alignment.

**Validation.** Achieved approximately 10% improvement over state-of-the-art audio-visual baselines (TACMA, MAViL) on event localization. The resulting single encoder supports event localization, anomaly detection, and query-guided event search on the same backbone, avoiding per-task model deployment on edge.

Published in [Frontiers in Robotics and AI, first author](/publication/2025-rai/).

## 2. Source-Free Transferability Assessment {#transferability}

**The problem.** Context drift means a different model may be the right choice for each new deployment site. Standard transferability estimators assume access to source training data and to labelled target data, neither of which holds in real deployments: source data is locked away by data sovereignty, GDPR, or IP, and labelled target data is exactly what is not yet available when entering a new site. The estimator also has to be task-agnostic, because the downstream task at the new site is not necessarily the one the candidate model was trained for.

**The approach.** I proposed a transferability estimator that uses Randomly Initialised Neural Networks as unbiased reference embeddings. Random networks contain no task knowledge but produce consistent embedding geometry across runs, which makes them a stable comparison surface independent of any specific task. Candidate pre-trained models are ranked by their embedding similarity to a fixed set of random networks, measured by Centered Kernel Alignment, without ever requiring source data or target labels.

**Validation.** Evaluated across object tagging, event classification, and anomaly detection on several real-world surveillance datasets. The estimator achieved a Kendall's τ correlation up to 0.95 with fully supervised ranking baselines.

Published in [Sensors, first author](/publication/wang-2025-source/).

## 3. Opt-in Privacy-Preserving ML {#opt-in-privacy}

**The problem.** Privacy protection cannot be done by enumeration. Raw signals carry many bundled attributes (a voice command leaks gender, emotion, identity), and the attack surface is open-ended: new extractors emerge faster than any defence list can keep up. Opt-out defence is also incompatible with GDPR's purpose limitation principle. Worse, retraining the downstream model to defend against each new attack is operationally impractical, especially when the downstream model is owned by a different service provider.

**The approach.** I reframed the problem as opt-in attribute exposure. A generative obfuscator, adapted from CycleGAN-VC2 and trained with adversarial learning, sits between the raw input and the downstream model. It produces sanitized signals that retain only the features required for the authorized task and suppress everything else. The downstream model does not need to be retrained, which makes the framework deployable as a plug-in on top of existing systems.

**Validation.** On four speech datasets, unauthorized attribute extraction drops to near-random chance while authorized task performance loses only 2-6%. Real-time inference demonstrated on Jetson TX1 at approximately 34ms per 1-second audio clip. The opt-in logic was also adapted from audio to visual data, validating cross-modal generality.

Published in [IEEE Pervasive Computing, first author](/publication/2022-pc/), with the visual extension in [Applied Intelligence](/publication/de-2024-privacy/).


</div>
<!--more-->