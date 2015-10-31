---
layout: default
title: Blog
---

### A place where I'll write every now and then about projects, travels and other things that cross my mind.

#### I was in Senegal last semester: [http://reidsata.blogspot.com/](http://reidsata.blogspot.com/)

<div>
{% for post in site.categories.blog %}
  {% if post.external-url %}
    <h2>
      <a href="{{ post.external-url }}">{{ post.title }}</a> 
    </h2>
  {% else %}
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="blog-date">{{ post.date | date_to_string }}</p>
  {% endif %}
<p>{{ post.content | strip_html | truncatewords:50 }}</p>

{% endfor %}
  


</div>