---
layout: default
title: Work
---

<div>

{% for post in site.tags.work %}

	{% if post.external-url %}
		<h3>
			<a href="{{ post.external-url }}">{{ post.title }}</a> 
		</h3>
	{% else %}
		<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
	{% endif %}

	<p>{{ post.content | strip_html | truncatewords:30 }}</p>

{% endfor %}

</div>