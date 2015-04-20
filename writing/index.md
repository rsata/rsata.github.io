---
layout: default
title: Writing
---

<div>

{% for post in site.tags.writing %}

	{% if post.external-url %}
		<h3>
			<a href="{{ post.external-url }}">{{ post.title }}</a> 
		</h3>
	{% else %}
		<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
	{% endif %}

	<p>{{ post.content | strip_html }}</p>

{% endfor %}

</div>