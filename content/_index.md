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
        I am now actively seeking full-time opportunities in Europe (including the UK) and Canada where I can contribute my unique blend of research expertise and practical leadership to a forward-thinking team. While I am excited to tackle complex technical problems across any industry, I hold a strong personal interest in the potential for AI to address critical challenges in fields like humanitarian aid, medical innovation, and environmental protection.
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
        I am a final-year Ph.D. candidate with the <a href="https://decide.ugent.be/">DECIDE</a> team at <a href="https://idlab.ugent.be/home">IDLab</a>, Ghent University-imec, with my work fully funded by the AI Flanders strategic research program. My doctoral research on smart city surveillance aims to tackle the real-world deployment challenges of deep learning models for audio and video analysis. The goal is to create frameworks that are not only technically advanced but also ethically grounded and privacy-aware, making them practical for real-world deployment. Under the guidence of <a href="https://research.ugent.be/web/person/pieter-simoens-0/en">Prof. Pieter Simoens</a> and <a href="https://research.ugent.be/web/person/sam-leroux-0/en">Prof. Sam Leroux</a>, the results and methodologies of this work have been published in peer-reviewed journals and conferences including IEEE Pervasive Computing, Sensors, and Frontiers Robotics and AI.
        </p>
        <p style="text-align: justify;">
        Beyond research, I have consistently developed my leadership and mentorship skills. As a teaching assistant for three semsters of "Applied Machine Learning" for both Bachelor's and Master's students, I developed my ability to communicate complex topics by guiding hands-on projects using real-world tools, from Airbnb datasets to Sony's depth cameras. Concurrently, as President of the Taiwanese Student Association in Ghent, I served as the community's main contact and initiated a mentor-mentee program to support students and residents during the pandemic, strengthening my skills in community building and cross-cultural coordination.
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
