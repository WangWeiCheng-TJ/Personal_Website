---
title: "Privacy-preserving visual analysis: training video obfuscation models without sensitive labels"
authors:
- Sander De Coninck
- admin
- Sam Leroux
- Pieter Simoens
date: "2024-05-04T00:00:00Z"
publishDate: "2024-05-04T00:00:00Z"
doi: "10.1007/s10489-024-05489-9"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: [Journal article]

# Publication name and optional abbreviated publication name.
publication: "*Applied Intelligence*"
publication_short: "*Applied Intelligence*"

abstract: "Visual analysis tasks, including crowd management, often require resource-intensive machine learning models, posing challenges for deployment on edge hardware. Consequently, cloud computing emerges as a prevalent solution. To address privacy concerns associated with offloading video data to remote cloud platforms, we present a novel approach using adversarial training to develop a lightweight obfuscator neural network. Our method focuses on pedestrian detection as an example of visual analysis, allowing the transformation of video frames on the camera itself to retain only essential information for pedestrian detection while preserving privacy. Importantly, the obfuscated data remains compatible with publicly available object detectors, requiring no modifications or significant loss in accuracy. Additionally, our technique overcomes the common limitation of relying on labeled sensitive attributes for privacy preservation. By demonstrating the inability of pedestrian attribute recognition models to detect attributes in obfuscated videos, we validate the efficacy of our privacy protection method. Our results suggest that this scalable approach holds promise for enabling camera usage in video analytics while upholding personal privacy."

summary: "A novel approach for training video obfuscation models without requiring sensitive labels, enhancing privacy in visual analysis tasks."

# Set this to `true` to feature this publication on your homepage
featured: false
page_type: publication

# Links
url_pdf: 'https://link.springer.com/article/10.1007/s10489-024-05489-9' # Add a direct link to the PDF if available
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to this page's folder.
image:
  caption: ''
  focal_point: ""
  preview_only: false

---