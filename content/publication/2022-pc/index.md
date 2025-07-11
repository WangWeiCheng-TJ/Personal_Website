---
title: "An Opt-in Framework for Privacy Protection in Audio-Based Applications"
authors:
- admin
- Sander De Coninck
- Sam Leroux
- Pieter Simoens
date: "2022-10-01T00:00:00Z"
publishDate: "2022-10-01T00:00:00Z"
publication_types: [Journal article]
publication: "*IEEE Pervasive Computing, vol. 21, no. 4*"
publication_short: "*IEEE Pervasive Computing*"
doi: 10.1109/MPRV.2022.3210377

abstract: |-
  <p style="text-align: justify;">
  Installing audio-based applications exposes users to the risk of the data processor extracting additional information beyond the task the user permitted. To solve these privacy concerns, we propose to integrate an on-edge data obfuscation between the audio sensor and the recognition algorithm. We introduce a novel privacy loss metric and use adversarial learning to train an obfuscator. Contrary to existing work, our technique does not require users to specify which sensitive attributes they want to protect (opt-out) but instead only provide permission for specific tasks (opt-in). Moreover, we do not require retraining of recognition algorithms, making the obfuscated data compatible with existing methods. We experimentally validate our approach on four voice datasets and show that we can protect several attributes of the speaker, including gender, identity, and emotional state with a minimal recognition accuracy degradation.
  </p>

description: |-
  <p style="text-align: justify;">
  <img src="featured.png" alt="" style="max-width:320;margin:0.2em 1.5em 0.2em 0em;float:left;" class="pub-img" >
  As audio-based applications become ubiquitous, they create a significant privacy risk through data bundling. Raw audio inherently contains far more information, such as identity, gender, and emotion, than required for the intended task. Existing privacy-preserving methods, mostly built on an "opt-out" mechanism, are insufficient as they place an impractical burden on users to anticipate and list all personal data they wish to protect. Furthermore, many of these solutions demand the costly retraining of downstream models, rendering them incompatible with the vast ecosystem of existing third-party systems.
  </p>
  <p style="text-align: justify;">
  To address these fundamental gaps, we developed an "opt-in" privacy framework where users proactively select the single piece of information they are willing to share. The core of this framework is an on-edge deep neural network obfuscator, trained via an adversarial process using a novel privacy loss function we designed, which operates directly on latent space representations to suppress all non-essential information. A key architectural constraint was ensuring third-party compatibility, making the obfuscator's output fully functional with existing, unmodified pre-trained models to avoid costly retraining and ensure immediate applicability. The framework's efficacy was then rigorously validated, not only against "ignorant" attackers but also more sophisticated "informed" attacker models across four public datasets. Its practicability was simultaneously benchmarked on a spectrum of hardware from a CPU-only Raspberry Pi to a GPU-equipped NVIDIA Jetson TX1.
  </p>
  <p style="text-align: justify;">
  The empirical results confirm that the opt-in paradigm offers superior and more comprehensive privacy protection. The framework successfully reduced attacker accuracy to near-random chance, critically outperforming the opt-out baseline against informed attackers, and proved resilient against attacks on unspecified attributes like emotion—a key failure point for opt-out systems. This robust privacy was achieved with only a minor 2-6% degradation in classification accuracy on the authorized task. Furthermore, latency benchmarks demonstrated the framework's viability for real-time edge deployment on devices with embedded GPUs (e.g., 34ms on Jetson TX1), providing a clear roadmap for future work in model compression for broader applicability.
  </p>

summary: "To address the privacy risks of audio applications extracting unauthorized user data, this work proposes an on-edge data obfuscator trained through adversarial learning, which uniquely operates on an opt-in permission model to protect sensitive speaker attributes while maintaining compatibility with existing recognition algorithms and incurring minimal accuracy degradation."

tags:
- Opt-in
- Audio Privacy
- Edge Device
featured: true

url_pdf: 'https://biblio.ugent.be/publication/01GTV2V5SYTR8N0F5FTCNT3RJ5'
url_code: ''
url_dataset: ''
url_poster: 'poster.pdf'
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

image:
  caption: ''
  focal_point: 'Smart'
  preview_only: false

projects: []
slides: ""
---

{{< description >}}