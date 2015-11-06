---
layout: default
title: Work
---

<h2 class="page-title"><div class="page-title-inner">Professional Experience</div></h2>

<div>

{% for post in site.categories.work %}

	{% if post.external-url %}
    <div class="buffer2">
      <h2>
        <a href="{{ post.external-url }}">{{ post.title }}</a> 
      </h2>
    </div>

	{% else %}
    <div class="buffer2">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>  
    </div>
	{% endif %}
  <h4 class="red">{{ post.location }}</h4>

	<p>{{ post.content }}</p>

{% endfor %}

</div>