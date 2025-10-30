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
        I am a doctoral researcher specializing in developing transferable and privacy-friendly deep learning frameworks for complex, real-world audio and visual data. With hands-on experience tackling privacy, data scarcity, and cross-domain deployment challenges in smart urban environments, I am now seeking full-time opportunities in Europe (including the UK) and Canada to advance cutting-edge AI solutions with direct impact.

        Open to both research and applied scientist roles in the AI industry, particularly focused on computer vision and audio analytics.
        </p>
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
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
        I am a final-year Ph.D. candidate with the <a href="https://decide.ugent.be/">DECIDE</a> team at <a href="https://idlab.ugent.be/home">IDLab</a>, Ghent University-imec. My research is fully funded by the AI Flanders strategic program and is supervised by <a href="https://research.ugent.be/web/person/pieter-simoens-0/en">Prof Pieter Simoens</a> and <a href="https://research.ugent.be/web/person/sam-leroux-0/en">Prof Sam Leroux</a>.
        </p>
        <p style="text-align: justify;">
        My doctoral work focuses on developing transferable and privacy-friendly deep learning techniques for real-world audio-visual urban surveillance: bridging the gap between the lab and dynamic street environments. The goal is to create frameworks that are both technically advanced and ethically robust, ensuring responsible AI deployment in smart cities. This has involved designing self-supervised and contrastive learning models for urban monitoring, collaborating with industry partners to validate results with domain-specific datasets, and innovating on privacy protection mechanisms that empower user consent.
        </p>
        <p style="text-align: justify;">
        My research outcomes include peer-reviewed publications in journals such as IEEE Pervasive Computing, Sensors, and Frontiers in Robotics and AI. Many of these methodologies have been presented at academic and industry events and are now being adopted in practical applications: extending beyond the academic context to immediate societal impact.
        </p>
        <p style="text-align: justify;">
        Beyond research, I am passionate about mentorship and leadership. I’ve served as a teaching assistant for three semesters in "Applied Machine Learning," guiding students through real-world data-driven projects using tools ranging from Airbnb datasets to Sony Depthsensing. As President of the Taiwanese Student Association in Ghent, I initiated and led a city-wide mentor-mentee program that supported our community throughout the pandemic, further sharpening my cross-cultural collaboration and community-building skills.
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
