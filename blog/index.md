---
layout: default
title: Blog
---

#### A place where I'll write every now and then about projects, travels and other things that cross my mind.

<div>
{% for post in site.tags.blog %}
  {% if post.external-url %}
    <h3>
      <a href="{{ post.external-url }}">{{ post.title }}</a> 
    </h3>
  {% else %}
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="blog-date">{{ post.date | date_to_string }}</p>
  {% endif %}
<p>{{ post.content | strip_html | truncatewords:50 }}</p>

{% endfor %}
  


</div>