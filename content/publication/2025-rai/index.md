---
title: "Embedding-based pair generation for contrastive representation learning in audio-visual surveillance data"
authors:
- admin
- Sander De Coninck
- Sam Leroux
- Pieter Simoens
date: "2025-01-13T00:00:00Z"
publishDate: "2025-01-13T00:00:00Z"

# Publication type: 2 = Journal article
publication_types: ["article-journal"]

publication: "*Frontiers in Robotics and AI*"
publication_short: "*Frontiers in Robotics & AI*"

doi: 10.3389/frobt.2024.1490718

abstract: "Smart cities deploy various sensors such as microphones and RGB cameras to collect data to improve the safety and comfort of the citizens. As data annotation is expensive, self-supervised methods such as contrastive learning are used to learn audio-visual representations for downstream tasks. Focusing on surveillance data, we investigate two common limitations of audio-visual contrastive learning: false negatives and the minimal sufficient information bottleneck. Irregular, yet frequently recurring events can lead to a considerable number of false-negative pairs and disrupt the model’s training. To tackle this challenge, we propose a novel method for generating contrastive pairs based on the distance between embeddings of different modalities, rather than relying solely on temporal cues. The semantically synchronized pairs can then be used to ease the minimal sufficient information bottleneck along with the new loss function for multiple positives. We experimentally validate our approach on real-world data and show how the learnt representations can be used for different downstream tasks, including audio-visual event localization, anomaly detection, and event search. Our approach reaches similar performance as state-of-the-art modality- and task-specific approaches."

summary: "To address the challenges of false negatives and information bottlenecks in audio-visual contrastive learning for smart city surveillance, this work proposes a novel method that generates semantically synchronized pairs via cross-modal embedding distance, yielding general-purposes representations that achieve competitive performance on multiple downstream tasks."

featured: true

tags:
- Multi-modal Representation Learning
- Audio-Visual Surveillance
- Contrastive Learning

# Links
url_pdf: 'https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2024.1490718'
url_code: ''
url_dataset: ''
---