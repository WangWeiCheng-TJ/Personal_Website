---
title: "USEAQ: Ultra-Fast Superpixel Extraction via Adaptive Sampling From Quantized Regions"
authors:
- Chun-Rong Huang
- admin
- Wei-An Wang
- Szu-Yu Lin
- Yen-Yu Lin
date: "2018-10-01T00:00:00Z"
publishDate: "2018-10-01T00:00:00Z"
publication_types: [Journal article]
publication: "*IEEE Transactions on Image Processing, vol. 27, no. 10*"
publication_short: "*IEEE T-IP*"
doi: 10.1109/TIP.2018.2848548

abstract: "We present a novel and highly efficient superpixel extraction method called ultra-fast superpixel extraction via adaptive sampling from quantized regions (USEAQ) to generate regular and compact superpixels in an image. To reduce the computational cost of iterative optimization procedures adopted in most recent approaches, the proposed USEAQ for superpixel generation works in a one-pass fashion. It first performs joint spatial and color quantizations and groups pixels into regions. It then takes into account the variations between regions, and adaptively samples one or a few superpixel candidates for each region. It finally employs maximum a posteriori estimation to assign pixels to the most spatially consistent and perceptually similar superpixels. It turns out that the proposed USEAQ is quite efficient, and the extracted superpixels can precisely adhere to boundaries of objects. Experimental results show that USEAQ achieves better or equivalent performance compared with the state-of-the-art superpixel extraction approaches in terms of boundary recall, undersegmentation error, achievable segmentation accuracy, the average miss rate, average undersegmentation error, and average unexplained variation, and it is significantly faster than these approaches. The source code of USEAQ is available at https://github.com/nchucvml/USEAQ."
summary: "This paper introduces USEAQ, a novel and highly efficient one-pass method for superpixel extraction that uses adaptive sampling from quantized regions to generate regular and compact superpixels, achieving performance that is comparable or superior to state-of-the-art approaches while being significantly faster."

tags:
- Superpixel Extraction
- Image Segmentation
- Joint Spatial and Color Quantizations
- Computational Efficiency
featured: false

url_pdf: 'https://ieeexplore.ieee.org/document/8387791'
url_code: 'https://github.com/nchucvml/USEAQ'
url_dataset: ''
url_poster: ''
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