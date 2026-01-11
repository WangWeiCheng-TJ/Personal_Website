---
title: Agentic Career Orchestrator - Multi-Agent LLM System for Intelligent Job Matching
date: 2026-01-11
# external_link: https://ugenttsasurvivorkit.vercel.app/
tags:
  - LLM Agent
  - RAG
  - Multi-Modal AI
  - Career Tech
  - Orchestration
  - Vector Database

---
<div style="text-align: justify;">

**Agentic Career Orchestrator: Multi-Agent LLM System for Intelligent Job Matching**

> **A local-first, hybrid AI ecosystem designed to automate strategic decision-making and semantic filtering in high-noise job markets while preserving data sovereignty.**

### Motivation 
Job hunting as a Ph.D. graduate is fundamentally a semantic search problem disguised as a volume game.

After defending my doctoral thesis, I found myself navigating a market where a single "Machine Learning Engineer" posting could mean anything from data pipeline maintenance to cutting-edge research implementation. Traditional keyword-based searches fail spectacularly: they cannot capture nuances like visa sponsorship policies, distinguish between "nice-to-have" and "required" qualifications, or recognize that my background in audio-visual surveillance directly transfers to anomaly detection in fintech.

The real challenge isn't just about finding jobs: it's identifying the right 3-5 opportunities buried among hundreds of irrelevant listings. Manually reviewing every job description is exhausting and error-prone. I needed an intelligent system that understands context, not just keywords.

### Impact & Core Philosophy
Since deployment, this system has:
* **Reduced manual screening time**, allowing focus on high-fit applications
* **Prevented 12+ wasted submissions** to visa-incompatible positions before application
* **Identified non-obvious matches**: roles where my audio privacy research applies to healthcare compliance systems

The core philosophy is straightforward: **AI should amplify human judgment, not replace it.** This system doesn't auto-apply to jobs-it functions as an intelligent research assistant that surfaces insights I would miss and learns from my decisions. It represents a collaboration between human intuition and machine pattern recognition.

**Research Context:** This project serves dual purposes. While addressing my immediate career challenge, it validates an architectural pattern I'm exploring for post-doctoral research on agentic workflows in synthetic surveillance data generation.

### Tech Stack
* **AI & Orchestration:** Python, Google Gemma-3-12b, Semantic Routing
* **Memory & RAG:** ChromaDB (all-MiniLM-L6-v2), Recursive Character Splitting, JSON/Markdown Serialization
* **Infrastructure:** Docker Compose (Containerization), Environment Variables Management
* **Architecture:** Local-First, Hybrid Cloud Inference, Event-Driven Ingestion

---

### Technical Architecture & Implementation

#### 1. Multi-Persona Reasoning Engine (Game-Theoretic Decision)
Instead of a single generic prompt, the system orchestrates three distinct AI agents to simulate a "War Room" debate, reducing hallucination and bias:
* **Blind-Spot Radar:** Scans for hidden costs, legacy code risks, and physical/supply chain bottlenecks.
* **Devil’s Advocate:** Performs "Pre-mortem" analysis to predict failure scenarios (e.g., "Why will this application fail?").
* **The Strategist:** Synthesizes conflict into actionable advice, aligning the user's specific "About Me" values (Visa, Salary, Tech Preferences) with market reality.

#### 2. Closed-Loop History RAG (The "War Room" Module)
Implemented a V1.1 **History Recall Mechanism** to turn past failures into future assets:
* **Vectorized Battle Archive:** Automatically indexes past JDs, Resume versions, and Outcomes (Reject/Offer) into a local ChromaDB.
* **Semantic Trigger:** When a new JD is analyzed, the system performs a similarity search. If a similar past role is found, it proactively retrieves the previous outcome (e.g., "Rejected due to lack of 3D experience").
* **Lazy Loading:** Utilizes a two-stage retrieval process—checking vector similarity first, then dynamically parsing the specific historical Resume snippet only when a match is found to optimize token usage.

#### 3. Local-First Hybrid Infrastructure
Designed to balance state-of-the-art reasoning with strict privacy controls:
* **Multimodal Ingestion Pipeline:** A robust ETL pipeline capable of processing raw PDFs and performing OCR on image-based JDs (using Gemini Flash with rate-limiting protection).
* **Data Sovereignty:** All long-term memory (Vector DB) and sensitive documents (CVs) reside in local Docker volumes. The cloud LLM receives only "Minimal Viable Context" for ephemeral inference, preventing third-party profiling.

---

### Key Results & Impact
* **Efficiency:** Reduced time-to-decision for complex job applications from hours to minutes by automating semantic filtering and risk assessment.
* **Closed-Loop Learning:** Achieved a system that "remembers" past rejections, preventing the repetition of strategic errors across different applications.
* **Research Validation:** Successfully demonstrated the viability of *Agentic Workflows* for handling unstructured, constraint-heavy data, serving as a foundational prototype for future synthetic data generation research.

---

### Resources
* [**System Architecture Diagram**](#featured.png)
* [**GitHub Repository**](https://github.com/WangWeiCheng-TJ/Local-LLM-Decision-Orchestrator)
* [**Analysis Sample**](#) - *Example of the Multi-Persona Report output.*
</div>

<!--more-->