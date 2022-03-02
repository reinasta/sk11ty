---
title: Gallery
layout: 'layouts/base.html'
permalink: '/gallery/index.html'
---

<!-- display all images using info in _data/images.json -->
{%- for img in images.images -%}
<figure class="image-block">
   <img src="{{ img.localUrl }}" alt="{{ img.title }}" />
   <figcaption>
      {{ img.title }} &#127909; {{ img.student }}
   </figcaption>
</figure>
{%- endfor -%}