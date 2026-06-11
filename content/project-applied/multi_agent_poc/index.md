---
title: "Multi-Agent Orchestration PoC: Validating Design Decisions Before TPU Scale"
date: 2026-01-21
lastmod: 2026-06-11
draft: false
aliases:
  - /project-applied/job_hunter/
tags:
  - Multi-Agent System
  - LLM Orchestration
  - RAG
  - Synthetic Data
  - Vector Database
featured: true
page_type: projects

summary: A multi-agent orchestration pipeline built as PoC for an upcoming GPU-heavy synthetic data generation project. Validates routing, context isolation, and cost-efficient model gating before committing to TPU scale.
---
<div style="text-align: justify;">

>A multi-agent orchestration pipeline built as a proof of concept for an upcoming synthetic data generation project. The goal of this PoC is not the application it runs on, but the design decisions it validates before committing to GPU-heavy compute.

## Motivation

This project is the first PoC for a synthetic data generation line extended from my PhD work, currently submitted as a Google TPU Research Cloud proposal under the title *Reality-Bounded Synthetic Data via Decoupling and Recombination*. The full project covers two application tracks: cross-environment event and behaviour transfer for surveillance and industrial inspection, and person-level stress-testing for deepfake detection.

That research workload centers on training and fine-tuning diffusion-based generators, disentanglement networks, ControlNet and LoRA adapters, plus large-scale VLM and MLLM inference for attribute extraction across video. Before requesting that compute, it makes sense to validate the orchestration pattern on something cheaper: a CPU and API-only multi-agent setup where iteration cost is low and failure modes surface quickly. This PoC is that validation step.

## Architecture and Design Decisions

The PoC implements four design decisions, each chosen with a specific counterpart in the future synthetic data pipeline.

**Router and specialist agents.** A router agent analyzes incoming context and dynamically dispatches to a specialist agent rather than running every input through a fixed sequence. In the future pipeline, the decoupling stage will need different extractors for different attributes: a VLM for appearance attributes, a separate pose or geometry extractor for spatial structure, an audio extractor for talking-head behaviour. Each requires a different prompt and a different model. The router pattern validated here is what selects among them.

**Context isolation between agents.** Each agent sees only the inputs it needs, not the full state. This avoids context pollution where an LLM gets confused by irrelevant information, and keeps each agent's prompt within the workhorse model's context window so the gateway can route most calls to the smaller tier. The future synthetic data pipeline depends on the same pattern: when rendering a complex scene, you do not feed the entire frame into every step. You decouple it into regions, let seven or eight specialists each handle their own object or attribute in parallel, and only converge at a final lighting and composition step. Validating that this can be coordinated cleanly under a multi-agent framework is the point.

**Smart model gateway.** Two model tiers behind a routing layer: a quota-friendly workhorse (Gemma 3-27B-it) for parsing, extraction, and filtering, and a high-capacity model (Gemini 2.5 Flash) for long-context synthesis and deep reasoning. Roughly 90 percent of the workload stays on the cheap model; the heavy model is invoked only where long context or cross-document reasoning is unavoidable. This matters for the synthetic data pipeline because attribute extraction across a video corpus will hit the same shape: most steps are local and cheap, a few demand large context.

**Vector store and clustering for reusable retrieval.** ChromaDB with MiniLM embeddings indexes prior content; HDBSCAN clusters semantically similar items so the system can retrieve reusable components rather than regenerating from scratch. In the synthetic data pipeline this is the analogue of managing the decoupled attribute and pattern representations, where the same latent pattern may be recombined into multiple target domains.

## Testbed: Job Triage

The first application running on this orchestration pipeline is a job triage system. The choice is deliberate but secondary: job descriptions are abundant, free, and structured enough to be parsed automatically; outputs are easy to verify against my own judgment; the iteration loop is short; and the system is useful to me in parallel.

The pipeline parses a JD, runs a triage filter (visa, role-level relevance, deal-breakers), assembles specialist agents for the role type, aggregates assessments, and clusters opportunities across the queue to produce a ranked strategy brief. It does not generate resumes or cover letters; the output is structured guidance that informs human decisions, not replaces them.

## What this PoC validated

- Router-based delegation can isolate context across specialists without losing coherence at synthesis
- A resource-aware routing strategy completes multi-stage pipelines without overkill, escalating to the heavy model only on the small fraction of calls that genuinely require long context or deep reasoning
- Vector store plus clustering supports reusable component retrieval at the granularity the synthetic data pipeline will need

## Next: Google TPU Research Cloud submission

The submitted TRC proposal applies the same orchestration pattern to the actual research target. The core method decomposes a real observation into two separable parts: latent patterns (the physically grounded, fine-grained signal) and explainable attributes (coarse, human-readable factors such as appearance, environment, sensor configuration). Because the two are decoupled, attributes can be edited and recombined into a target domain while the latent pattern stays intact; annotations are inherited from the source mapping, removing the manual labelling bottleneck, and the bias profile of the output is an explicit parameter.

Two application tracks are scoped: cross-environment defect and data transfer for surveillance and industrial inspection, and person-level appearance variation for stress-testing deepfake detectors. Proposal under review.

## Resources

- [GitHub Repository](https://github.com/WangWeiCheng-TJ/Agentic-Career-Orchestrator)
- System architecture diagram (above)
</div>