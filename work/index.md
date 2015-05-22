---
layout: default
title: Work
---

<div>

{% for post in site.categories.work %}

	{% if post.external-url %}
		<h2>
			<a href="{{ post.external-url }}">{{ post.title }}</a> 
		</h2>
	{% else %}
		<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
	{% endif %}

	<p>{{ post.content | strip_html | truncatewords:30 }}</p>

{% endfor %}

</div>