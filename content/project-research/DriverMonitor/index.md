---
title: Multimodal Driver Monitoring & Temporal Face Analysis
date: 2016-06-30
# external_link: https://ugenttsasurvivorkit.vercel.app/
tags:
  - Driver Monitoring
  - Computer Vision
  - Sparse Representation
  - Real-Time System
  - C++
---

---
<div style="text-align: justify;">

Multimodal Driver Safety System & Robust Face Analysis

> **A holistic driver monitoring framework developed with ARTC, fusing visual temporal dynamics and ECG signals to enable early anomaly detection and proactive safety intervention.**

### The Research Gap & Motivation
**From Passive Recording to Proactive Intervention:**<br>
Standard recognition models often fail in real-world cockpits due to inter-personal variability. A generic model struggles to distinguish between a driver's natural features (e.g., droopy eyelids) and fatigue.

**Our Goal:** <br>
To build a safety-critical system capable of _early detection_ of compromised states by combining _non-intrusive visual monitoring_ with physiological signals (ECG), reducing false alarms and ensuring timely intervention.

### Operational User Scenario (How it Works)
To address the variability mentioned above, the system operates in a three-stage safety loop:
1.  **Initialization (The "Handshake"):** When the driver starts the car, the system silently records a short "calibration sequence" to learn their current appearance (e.g., wearing sunglasses, heavy makeup, or fatigue). This establishes a **Personalized Normal Driving Model (PNDM)** for the specific trip.
2.  **Dynamic Monitoring:** As the vehicle moves through changing environments (e.g., entering a dark tunnel or facing high-beam glare), the **alignment-free visual descriptor** maintains robust tracking without being confused by lighting shifts.
3.  **Proactive Intervention:** If the driver shows signs of drowsiness (e.g., prolonged eye closure) *AND* the ECG sensor detects physiological fatigue, the system triggers a **multi-stage alert**—first warning the driver, and in critical cases, notifying fleet management or emergency services.

---

### Core Methodologies
* **Visual Algorithms:** Temporal Coherent Face Descriptor (alignment-free, robust to lighting).
* **System Integration:** Multimodal Sensor Fusion (Vision + ECG).
* **Modeling Strategy:** Sparse Representation-based Classification with _online dictionary learning_.
* **Validation:** Co-developed and tested with the Automotive Research & Testing Center (ARTC).

---

### Technical Architecture & Innovations

#### 1. Personalized Calibration (User-Centric Design)
* **The Problem:** <br> 
Drivers look different every day. Pre-trained generic models fail when users change appearance.

* **The Solution:** <br>
Implemented a _rapid initialization phase_ that builds a dynamic baseline for each trip. The algorithm detects anomalies based on _relative deviation_ from this baseline, effectively filtering out noise from accessories or facial structure.

#### 2. Robust Temporal Modeling (Visual Subsystem)
* **Alignment-Free:** <br>
By leveraging _temporal consistency_ across continuous frames, we eliminated the need for fragile face alignment steps, ensuring stability even under rapid head movements.

* **Lighting Invariance:** <br>
Utilized _intensity contrast descriptors_ to maintain accuracy in challenging lighting conditions (e.g., nighttime driving validated in NCKU-driver database).

#### 3. Proactive Safety Trigger (System Level)
* **Multimodal Logic:** <br>
Designed the visual module to work in tandem with ECG sensors. While ECG detects physiological drops in alertness, our visual module confirms behavioral lapses (e.g., nodding off).

* **Impact:** <br>
This cross-verification significantly reduces false positives, ensuring that alerts are only triggered for genuine safety risks.

### Outcomes & Validation
* **Industry Collaboration:** Co-developed with _ARTC_.
* **Award-Winning:** Secured _Second Place_ at the *International ICT Innovative Services Awards*.
* **Performance:** Achieved _real-time performance_ and superior accuracy over state-of-the-art baselines in nighttime scenarios.

---

### Resources
Publications: <br>
* **Wang Wei-Cheng**, Ru-Yun Hsu, Chun-Rong Huang, Li-You Syu (2015). [Video gender recognition using temporal coherent face descriptor.](/publication/2015-snpd) _IEEE/ACIS SNPD 2015_.<br>
* Chien-Yu Chiou, **Wang Wei-Cheng**, Shueh-Chou Lu, Chun-Rong Huang, Pau-Choo Chung, Yun-Yang Lai (2019). [Driver Monitoring Using Sparse Representation With Part-Based Temporal Face Descriptors.](/publication/2020-tits)  _IEEE T-ITS_.
</div>

<!--more-->