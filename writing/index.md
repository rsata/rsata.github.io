---
layout: default
title: Writing
---

<h2 class="page-title"><div class="page-title-inner">Stuff I've written for school.</div></h2>

<div>

{% for post in site.categories.writing %}

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

	<p>{{ post.content | strip_html }}</p>

{% endfor %}

</div>