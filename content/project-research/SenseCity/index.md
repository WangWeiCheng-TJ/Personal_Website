---
title: SensCity - Acoustic Surveillance in Real-World
date: 2021-06-30
tags:
  - Urban Acoustic Surveillance
  - Unsupervised Learning
  - Domain Adaptation
  - Edge-Cloud Architecture
  - Python/Pytorch
  - Generative Models
---
<div style="text-align: justify;">

SensCity x AsaSense: Critical Analysis of Urban Acoustic Surveillance

> **A strategic research collaboration with the SensCity project (AsaSense), utilizing city-scale raw acoustic data to expose the failure modes of standard surveillance models and proposing context-aware architectural solutions.**

### The Research Gap & Motivation
**Why "Off-the-Shelf" Fails in the Wild:**<br>
Most acoustic surveillance systems are validated on clean, curated datasets. However, their performance on _raw, unprocessed urban audio_ remains largely unverified.

**Our Mission:**<br>
In collaboration with _AsaSense_, we accessed a unique stream of continuous, uncurated audio from Ghent and Rotterdam. Instead of just deploying a standard model, our goal was to _stress-test_ two dominant paradigms: anomaly detection and sound tagging, and identify *why* conventional paradigms fail in dynamic environments (e.g., temporal drift, open-set events), and propose robust alternatives.

### Operational Context (The SensCity Testbed)
This project leveraged a real-world infrastructure to diagnose algorithmic limitations:
1.  **Raw Data Ingestion:**<br>
    Unlike academic datasets, the SensCity sensor network captures the "messy" reality of cities across two years: wind noise, overlapping soundscapes, and non-stationary backgrounds. Most importantly, without any annotations.
2.  **System Audit:**<br>
    We applied SOTA approaches on anomaly detection and sound tagging models to this raw stream. The analysis revealed that global models generate unmanageable false alarms due to _contextual blindness_ (e.g., treating a weekend market as an anomaly because the model only knew weekday traffic), further causing operator fatigue and leading to system failure.
3.  **Core Conclusion:**<br>
    Our experiments conclusively proved that a single global model is insufficient for city-scale deployment. Instead, _Context-Specific Modeling_ (sensor-specific baselines) is a prerequisite for operational reliability.
4.  **Proposed Resolution:**<br>
    Based on these findings, we formulated a _Context-Aware Design Framework_, advocating for sensor-specific baselines and adaptive thresholding to handle the inherent variance of city life.

---

### Core Methodologies
* **Data Source:** High-fidelity, long-term raw acoustic logs from the AsaSense deployment (Ghent & Rotterdam).
* **Diagnosis Method:** Cross-context evaluation (Spatial & Temporal Domain Shift).
* **Algorithmic Focus:** Unsupervised Deep Autoregressive Modeling (WaveNet) vs. Pre-trained Tagging Models.
* **Architecture Design:** Feasibility analysis of _Hybrid Edge-Cloud_ pipelines to mitigate bandwidth bottlenecks.

### Technical Analysis & Innovations

#### 1. Diagnosing the "Generalization Fallacy"
* **The Problem:** We demonstrated that state-of-the-art anomaly detectors suffer from severe concept drift. A model trained on "winter data" failed catastrophically during summer evenings due to changed human activity patterns.
* **The Solution:** Proposed a _Context-Specific Modeling_ approach, proving that training lightweight, dedicated models for each sensor location significantly outperforms a massive, generic global model in anomaly retrieval.

#### 2. The Limits of Semantic Tagging
* **The Finding:** Standard sound taggers (trained on AudioSet) struggle with the _Open-Set Nature_ of cities. They force novel urban sounds into rigid, pre-defined categories, leading to semantic misalignment.
* **The Proposal:** Suggested moving from "rigid classification" to "_unsupervised deviation detection_" at the edge, using tagging only as a secondary enrichment layer in the cloud, rather than a primary filter.

#### 3. Architectural Scalability (Edge vs. Cloud)
* **Analysis:** Analyzed the trade-off between _transmission cost_ and _detection latency_.
* **Recommendation:** Proposed a _"Filter-then-Forward"_ architecture where edge nodes perform lightweight unsupervised screening, transmitting only potential anomalies to the cloud. This reduces bandwidth consumption by orders of magnitude while preserving privacy.

### Outcomes & Impact
* **Empirical Evidence:** Provided one of the first comprehensive studies on the _limitations of transfer learning_ in acoustic surveillance using real-world, longitudinal data.
* **Design Guidelines:** The findings established the foundation for _Privacy-Preserved & Adaptive Surveillance_, directly influencing the design of subsequent research on privacy in surveillance.
* **Strategic Value:** Delivered critical insights to the industrial partner (AsaSense) on avoiding "technical debt" by pivoting from global models to adaptive, edge-based learning.

---

### Resources
* [**Chapter 2: The AsaSense Project**](https://biblio.ugent.be/publication/01KAZFSQQ1Z5TWS14MDF57RWX5) - *Detailed analysis of deployment constraints and algorithmic failures.*


</div>
<!--more-->