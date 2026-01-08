---
title: Taiwanese at Ghent Survivor Kit - A Serverless LLM-Agent Deployment
date: 2026-01-06
# external_link: https://ugenttsasurvivorkit.vercel.app/
tags:
  - LLM Agent
  - NLP
  - Prompt Engineering
  - Serverless Architecture
  - System Design
  - AppliedAI

---
<div style="text-align: justify;">

**TW@Ghent Survivor Kit : AI-Powered Community Platform**

> **A serverless, AI-driven information hub designed to automate community management and solve information fragmentation for international students.**

### Motivation & Product Philosophy
**TW@Ghent Survivor Kit** is a comprehensive survival guide platform.
Originally engineered for students, I collaborated with the current president of UGent Taiwanese Student Association (TSA) to redefine the product roadmap, expanding its scope to serve the entire Taiwanese expatriate community. This ensured the system aligned with actual operational needs rather than just technical novelty.

**"I built this not just as a developer, but as the former President who identified the root cause of platform failure."**

I recognized that previous platforms failed due to **high operational friction**. To solve this, I set a strict constraint: **The system must be "low-maintenance" and operable by non-tech staff.** This drove the decision to adopt a _serverless architecture_ combined with _autonomous AI agents_, allowing for rapid iteration and a "set-and-forget" operational model.

* **Role:** Product Owner & Full-Stack Engineer
* **Scope:** Requirement Analysis → System Architecture → AI Agent Development → CI/CD

### Tech Stack
* **AI & NLP:** Python, Gemma 3 4B (LLM), Feedparser (RSS), Prompt Engineering
* **Backend / CMS:** Google Sheets API (NoSQL/CMS), Google Apps Script, Event-Driven ETL
* **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, ISR
* **Infrastructure:** Vercel (Serverless), GitHub Actions (CI/CD), Docker

---

### Technical Architecture & Implementation

#### 1. AI-Driven Intelligence Pipeline (Event-Driven ETL)
The core innovation is an automated pipeline that monitors, analyzes, and translates local news without human intervention, effectively functioning as a _domain-specific AI agent_:
* **Data Ingestion:** A Python-based agent continuously monitors municipal RSS feeds (stad.gent) and emergency alerts.
* **LLM Integration (Gemma 3 4B):**
    * Deployed **Gemma 3 4B** to perform semantic analysis on raw Dutch texts.
    * **Structured Prompt Engineering:** Designed rigorous prompt templates to enforce valid JSON output from the LLM. Tasks include: Importance Grading (Level 1-3), Audience Classification (Student vs. Resident), Traditional Chinese Translation, and Summarization.
    * **Robustness:** Implemented retry logic with exponential backoff to handle API rate limits and ensure pipeline reliability.
* **ETL Execution:** Structured data is automatically validated and written back to the Google Sheets CMS, triggering frontend updates.

#### 2. Serverless Full-Stack Architecture
Designed a cost-efficient architecture suitable for long-term operation:
* **Headless CMS (Google Sheets):** Abstracted Google Sheets into a JSON API. This allows non-technical staff to manage content via a familiar spreadsheet interface, eliminating database costs ($0/month) and lowering the maintenance barrier.
* **Frontend (Next.js 14):** Implemented _incremental static regeneration_ (60s revalidation) to ensure high performance and SEO while keeping data fresh.

#### 3. CI/CD & DevOps
* **GitHub Actions:** Orchestrated daily cron jobs (UTC 6:00) to execute the news crawling and AI analysis agents.
* **Security & Reproducibility:** Managed API Secrets via GitHub Secrets and utilized docker to ensure environment consistency for the AI agents.
* **Automated Deployment:** Configured Vercel for automatic deployments on git push, establishing a production-ready lifecycle.

---

### Key Results & Impact
* **100% Automation:** Achieved a fully automated loop for news gathering, translation, classification, and publishing.
* **Zero Operational Cost:** Leveraged serverless tiers to maintain _costfree__, ensuring the project's financial sustainability for the student association.
* **Solved "Technical Debt":** Created a system that _requires no coding skills to maintain_, addressing the high turnover rate inherent in student organizations.


---

### Resources
* [**Live Website**](https://ugenttsasurvivorkit.vercel.app/)
* [**GitHub Repository**](https://github.com/WangWeiCheng-TJ/UGentTSA-SurvivorKit)
* [**AI Agent Source Code**](https://github.com/WangWeiCheng-TJ/UGentTSA-SurvivorKit/blob/main/daily_news_agent.py) - *Python agent for scraping and LLM processing.*
* [**Prompt Engineering Templates**](https://github.com/WangWeiCheng-TJ/UGentTSA-SurvivorKit/blob/main/prompts/news_analysis.txt) - *Structured prompts for Gemma 3-4B.*

</div>

<!--more-->