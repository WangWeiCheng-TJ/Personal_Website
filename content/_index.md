---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: |-
        <p style="text-align: justify;">
        I am currently working on edge-cloud vision-language systems, quantizing the vision encoder for on-device deployment on a Qualcomm NPU, with a manuscript in preparation on where evaluation breaks between development and deployment. In parallel, I am extending my PhD research line into synthetic data generation for cross-environment ML transfer and explainable AI; a Google TPU Research Cloud proposal is under review. To validate the orchestration pattern for that work, I built a cost-efficient multi-agent LLM pipeline as a PoC.

        In 2025, I completed my Ph.D. at Ghent University-imec, and was previously a RA at Academia Sinica. Both my PhD and MSc research were conducted on real-world data, covering 5000+ hours of uncurated audio streams and extended video across multiple deployment sites.

        My research focuses on building solutions at the mechanism-level while under real-world constraints. Recognition includes 13 peer-reviewed articles (7 journals, ICIP oral), 150+ citations, APICTA award, and Top 3% master's graduate honor.
        </p>
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/Resume_Wei-Cheng Wang_0612_ASRE.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  - block: markdown
    id: activities
    content:
      title: Recent Activities
      subtitle: ''
      text: |-
        <ul class="hb-timeline">

          <li class="hb-timeline__item hb-timeline__item--now">
            <div class="hb-timeline__date">2026 to now</div>
            <div class="hb-timeline__body">
              <p class="hb-timeline__title"><span class="hb-timeline__tag">Research</span><a href="project-research/edgecloudvlm/">Edge-Cloud VLM: vision encoder quantization for on-device deployment</a></p>
              <p class="hb-timeline__text">Quantizing a VLM vision encoder for a Qualcomm QCS8550 NPU. Eleven configurations evaluated on GPU, four actually executable on target. The paper is about where evaluation breaks between development and deployment. <em>Manuscript to be submitted.</em></p>
            </div>
          </li>

          <li class="hb-timeline__item">
            <div class="hb-timeline__date">2026.06</div>
            <div class="hb-timeline__body">
              <p class="hb-timeline__title"><span class="hb-timeline__tag">Proposal</span>Google TPU Research Cloud proposal, under review</p>
              <p class="hb-timeline__text"><em>Reality-Bounded Synthetic Data via Decoupling and Recombination</em>: extending the PhD line to cross-environment event and behaviour transfer, and person-level stress-testing for deepfake detection.</p>
            </div>
          </li>

          <li class="hb-timeline__item">
            <div class="hb-timeline__date">2026.01</div>
            <div class="hb-timeline__body">
              <p class="hb-timeline__title"><span class="hb-timeline__tag">Build</span><a href="project-applied/multi_agent_poc/">Multi-agent LLM orchestration PoC</a></p>
              <p class="hb-timeline__text">Cost-efficient routing, context isolation, and model gating, validated on a CPU/API-only setup before committing to GPU-heavy compute.</p>
            </div>
          </li>

          <li class="hb-timeline__item">
            <div class="hb-timeline__date">2025.11</div>
            <div class="hb-timeline__body">
              <p class="hb-timeline__title"><span class="hb-timeline__tag">Milestone</span>Ph.D. conferred by Ghent University-imec</p>
              <p class="hb-timeline__text"><a href="project-research/phd/">From Lab to Street</a>: transferable and privacy-friendly deep learning for urban surveillance, built on 5000+ hours of uncurated real-world audio.</p>
            </div>
          </li>

          <li class="hb-timeline__item">
            <div class="hb-timeline__date">2025.06</div>
            <div class="hb-timeline__body">
              <p class="hb-timeline__title"><span class="hb-timeline__tag">Paper</span><a href="publication/wang-2025-source/">Source-free model transferability assessment</a></p>
              <p class="hb-timeline__text">Published in <em>MDPI Sensors</em>: ranking model transferability for smart surveillance without access to source data.</p>
            </div>
          </li>

          <li class="hb-timeline__item">
            <div class="hb-timeline__date">2025.01</div>
            <div class="hb-timeline__body">
              <p class="hb-timeline__title"><span class="hb-timeline__tag">Paper</span><a href="publication/2025-rai/">Embedding-based pair generation for contrastive learning</a></p>
              <p class="hb-timeline__text">Published in <em>Frontiers in Robotics and AI</em>: audio-visual representation learning on real surveillance streams.</p>
            </div>
          </li>

        </ul>
    design:
      columns: 1
      spacing:
        padding: ['1rem', 0, '1rem', 0]

  - block: collection
    id: projects
    content:
      title: Featured Projects
      filters:
        folders:
          - project-research
          - project-applied
        featured_only: true
    design:
      # count: 3
      view: article-grid
      columns: 3

    # - block: collection
    # id: papers
    # content:
    #   title: Featured Publications
    #   filters:
    #     folders:
    #       - publication
    #     featured_only: true
    # design:
    #   view: article-grid
    #   columns: 3

  
  # - block: markdown
  #   content:
  #     title: '📚 About Me and My Research'
  #     subtitle: ''
  #     text: |-
  #       <p style="text-align: justify;">
  #       I recently earned my Ph.D. in Computer Science Engineering from Ghent University, where I conducted research with the <a href="https://decide.ugent.be/">DECIDE</a> team at <a href="https://idlab.ugent.be/home">IDLab</a>, Ghent University-imec under the supervision of <a href="https://research.ugent.be/web/person/pieter-simoens-0/en"><b>Prof. Pieter Simoens</b></a> and <a href="https://research.ugent.be/web/person/sam-leroux-0/en"><b>Prof. Sam Leroux</b></a>. Fully funded by the AI Flanders strategic program, my doctoral journey was defined by a single mission: bridging the gap between the lab and the dynamic reality of street environments.
  #       </p>
  #       <p style="text-align: justify;">
  #       My work focuses on transferable and privacy-friendly deep learning. I tackle the "inevitable realitie" of real-world deployment, such as data scarcity, domain shifts, and privacy constraints, to create frameworks that are ethically robust and technically scalable. My methodologies have been published in journals like IEEE Pervasive Computing and are actively bridging the divide between academic theory and societal impact.
  #       </p>
  #       <p style="text-align: justify;">
  #       <b>Beyond the Code: </b>Mentorship & Community</p>
  #       <p style="text-align: justify;">
  #       I believe that technology achieves its highest value when it serves people, a philosophy that extends deeply into my leadership roles.
  #       </p>
  #       <p style="text-align: justify;">
  #       As a Teaching Assistant for "Applied Machine Learning" for three semesters, I guided students to navigate messy, real-world datasets ranging from Airbnb to Sony Depthsensing. My objective went beyond teaching code; it was to pass on the logic of rigorous problem-solving.
  #       </p>
  #       <p style="text-align: justify;">
  #       This commitment to service culminated during my tenure as President of the Taiwanese Student Association (TSA) in Ghent, where I initiated a city-wide mentor-mentee program to support the community through the pandemic. However, my dedication did not end with my term. Identifying that high operational friction remained a burden for my successors, I continued to serve the community by architecting the <a href="project-applied/ugentapp/">Survivor Kit for Taiwanese in Ghent</a>. This AI-driven, serverless platform automates information dissemination, ensuring that my technical expertise continues to provide value and sustainability to the ecosystem long after my direct leadership concluded.
  #       </p>
  #       <p style="text-align: justify;">
  #       Together, these experiences reflect my commitment to advancing AI technology that is not only powerful, but also human-centric, transparent, and positively impactful for diverse urban societies.
  #       </p>
  #   design:
  #     columns: 1
  #     css_class: "wide-text-block"

  # - block: collection
  #   id: papers
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     view: article-grid
  #     columns: 3

  - block: collection
    content:
      count: 0
      title: Publications
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation

  - block: resume-awards
    id: awards
    content:
      title: Awards
      username: admin


  # - block: markdown
  #   id: mission
  #   content:
  #     title: Research Philosophy
  #     text: |-
  #       <p style="text-align: justify;">
  #       I believe it is our collective responsibility as researches to not only build powerful tools, but to actively envision and advocate for their use in service of human dignity and safety. 
  #       Ultimately, my goal is to let deep learning prove valuable in addressing the practical needs of our most vulnerable populations in their most difficult moments.
  #       </p>

  #   design:
  #     # view: article-grid
  #     columns: 1


  # - block: collection
  #   id: news
  #   content:
  #     title: Recent News
  #     subtitle: ''
  #     text: ''
  #     # Page type to display. E.g. post, talk, publication...
  #     page_type: post
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: date-title-summary
  #     # Reduce spacing
  #     spacing:
  #       padding: [0, 0, 0, 0]
  # - block: cta-card
  #   demo: true # Only display this section in the Hugo Blox Builder demo site
  #   content:
  #     title: 👉 Build your own academic website like this
  #     text: |-
  #       This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

  #       <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

  #       Easily build anything with blocks - no-code required!
        
  #       From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
  #     button:
  #       text: Get Started
  #       url: https://hugoblox.com/templates/
  #   design:
  #     card:
  #       # Card background color (CSS class)
  #       css_class: "bg-primary-700"
  #       css_style: ""
---
