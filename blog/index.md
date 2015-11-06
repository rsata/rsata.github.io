---
layout: default
title: Blog
---

<h2 class="page-title buffer-bot2"><div class="page-title-inner">My blog.  Updated periodically, especially when I travel.</div></h2>

#### I was in Senegal last semester: [http://reidsata.blogspot.com/](http://reidsata.blogspot.com/)

<div>
{% for post in site.categories.blog %}
  {% if post.external-url %}
    <div class="buffer2">
      <h2>
        <a href="{{ post.external-url }}">{{ post.title }}</a> 
      </h2>      
    </div>
  {% else %}
    <div class="buffer2">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p class="blog-date">{{ post.date | date_to_string }}</p>  
    </div>
  {% endif %}
<p>{{ post.content | strip_html | truncatewords:50 }}</p>

{% endfor %}
  


</div>