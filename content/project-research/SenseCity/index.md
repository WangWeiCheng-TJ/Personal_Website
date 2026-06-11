---
title: "SenseCity: 5000-Hour Real-World Acoustic Surveillance Study"
date: 2021-06-30
lastmod: 2026-06-11
draft: false
tags:
  - Acoustic Surveillance
  - Real-World Deployment
  - Anomaly Detection
  - Edge-Cloud Architecture
  - Industrial Collaboration

featured: true
page_type: projects

summary: A two-year industrial collaboration with AsaSense, deploying a context-aware acoustic surveillance system across Ghent and Rotterdam at 5000+ hour scale. The study surfaced concrete lab-to-field failure modes that anchored three subsequent PhD research lines.

---
<div style="text-align: justify;">

> A two-year industrial collaboration with AsaSense. The collaboration provided access to more than 5000 hours of continuous, uncurated audio recorded from an acoustic surveillance network across multiple sites in Ghent and Rotterdam.

## Why the study existed

Most acoustic surveillance models are validated on curated benchmark datasets. Whether the same models hold up on raw, uninterrupted urban audio is a separate question that benchmarks cannot answer. The SenseCity collaboration provided access to that kind of stream: long-term, uncurated recordings from a real sensor network, with all the wind, overlap, and non-stationary background that benchmark data smooths out. The goal was not to deploy a model but to find out which paradigms break under those conditions, and why.

## System architecture

Cloud-side event tagging across a continuous 5000+ hour stream is economically out of reach. The deployed pipeline addressed this by running on-device unsupervised anomaly detection as a first-pass filter, and escalating only flagged events to cloud-side analysis. This reduced downstream event-tagging workload by approximately 90 percent and made city-scale deployment viable.

The on-device stage uses unsupervised deep autoregressive modeling rather than supervised classification, because the taxonomy of "interesting events" is not known in advance at deployment time. The cloud-side stage applies pre-trained tagging models to the filtered stream as an enrichment layer rather than a primary filter.

## What the study surfaced

The study exposed two structural problems that benchmark evaluation had smoothed out:

**1. Context drift across deployment sites.** Models trained on one site degraded sharply when applied to another, and a model fit to one time window failed under predictable seasonal and weekly shifts. The drift was not noise; it was structural across space and time, and global models could not absorb it.

**2. The impossibility of enumerating in advance.** Three observations turned out to share this same underlying problem. Pre-trained taggers fail on open-set events because the categories that matter at a site cannot be enumerated up front, and they are partly site-conditional. Privacy boundaries cannot be defended by enumerating sensitive attributes, because the attack surface is open-ended and changes as new extractors emerge, and what counts as sensitive is itself jurisdiction-dependent. And at deployment time, the downstream tasks a model will actually be asked to perform are not known when the encoder is trained, which rules out task-specific representations.

These two problems motivated the three method-level research directions in the subsequent PhD work: representation learning for general-purpose multi-task deployment, source-free transferability that does not assume access to source data or labelled targets, and opt-in privacy in place of enumerable defenses.

## Outcomes

- Empirical evidence on how transfer learning behaves on real-world, longitudinal acoustic streams, drawn from one of the few studies with access to data at this scale and duration
- A context-aware deployment design that reduced cloud-side event-tagging workload by approximately 90 percent through edge-side filtering
- Two structural problems that became the empirical foundation for the subsequent PhD research line: context drift, and the impossibility of enumerating downstream tasks, attack surfaces, and event categories in advance

## Continue Reading
* [**Subsequent PhD Research Line**](/project-research/phd/)

## Resources
* [**PhD Thesis Chapter 2**](https://biblio.ugent.be/publication/01KAZFSQQ1Z5TWS14MDF57RWX5)<br> &nbsp; *Detailed analysis of deployment constraints and algorithmic failures.*


</div>
<!--more-->