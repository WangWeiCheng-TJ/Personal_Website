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
        I am a researcher who thrives on exploring new territories and cross-pollinating ideas. My core expertise lies in identifying and bridging the gap between lab and field: taking theoretical models and making them work in the chaos of the real world. <br>
        I believe the right solution starts with holistic context analysis, to understand user scenarios and environmental constraints before optimizing algorithms.
        
        Beyond theory, I actively adopt emerging paradigms such as agentic workflows to rapidly architect Proofs of Concepts (PoCs) that are not just theoretically sound, but operationally viable.
        </p>
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/WeiChengWang_CV_0327.pdf
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
    content:
      title: '📚 About Me and My Research'
      subtitle: ''
      text: |-
        <p style="text-align: justify;">
        I recently earned my Ph.D. in Computer Science Engineering from Ghent University, where I conducted research with the <a href="https://decide.ugent.be/">DECIDE</a> team at <a href="https://idlab.ugent.be/home">IDLab</a>, Ghent University-imec under the supervision of <a href="https://research.ugent.be/web/person/pieter-simoens-0/en"><b>Prof. Pieter Simoens</b></a> and <a href="https://research.ugent.be/web/person/sam-leroux-0/en"><b>Prof. Sam Leroux</b></a>. Fully funded by the AI Flanders strategic program, my doctoral journey was defined by a single mission: bridging the gap between the lab and the dynamic reality of street environments.
        </p>
        <p style="text-align: justify;">
        My work focuses on transferable and privacy-friendly deep learning. I tackle the "inevitable realitie" of real-world deployment, such as data scarcity, domain shifts, and privacy constraints, to create frameworks that are ethically robust and technically scalable. My methodologies have been published in journals like IEEE Pervasive Computing and are actively bridging the divide between academic theory and societal impact.
        </p>
        <p style="text-align: justify;">
        <b>Beyond the Code: </b>Mentorship & Community</p>
        <p style="text-align: justify;">
        I believe that technology achieves its highest value when it serves people, a philosophy that extends deeply into my leadership roles.
        </p>
        <p style="text-align: justify;">
        As a Teaching Assistant for "Applied Machine Learning" for three semesters, I guided students to navigate messy, real-world datasets ranging from Airbnb to Sony Depthsensing. My objective went beyond teaching code; it was to pass on the logic of rigorous problem-solving.
        </p>
        <p style="text-align: justify;">
        This commitment to service culminated during my tenure as President of the Taiwanese Student Association (TSA) in Ghent, where I initiated a city-wide mentor-mentee program to support the community through the pandemic. However, my dedication did not end with my term. Identifying that high operational friction remained a burden for my successors, I continued to serve the community by architecting the <a href="/project-applied/ugentapp/">Survivor Kit for Taiwanese in Ghent</a>. This AI-driven, serverless platform automates information dissemination, ensuring that my technical expertise continues to provide value and sustainability to the ecosystem long after my direct leadership concluded.
        </p>
        <p style="text-align: justify;">
        Together, these experiences reflect my commitment to advancing AI technology that is not only powerful, but also human-centric, transparent, and positively impactful for diverse urban societies.
        </p>
    design:
      columns: 1
      css_class: "wide-text-block"
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 3
  - block: collection
    content:
      title: Recent Publications
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
  - block: markdown
    id: mission
    content:
      title: Research Philosophy
      text: |-
        <p style="text-align: justify;">
        I believe it is our collective responsibility as researches to not only build powerful tools, but to actively envision and advocate for their use in service of human dignity and safety. 
        Ultimately, my goal is to let deep learning prove valuable in addressing the practical needs of our most vulnerable populations in their most difficult moments.
        </p>

    design:
      # view: article-grid
      columns: 1
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
