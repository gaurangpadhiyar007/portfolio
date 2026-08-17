---
layout: default
title: "AEM Blog Posts"
permalink: /blog/aem/
---

<div class="container pt-6 pb-6">
  <h1>AEM Articles</h1>
  <div class="row">
    {% for post in site.posts %}
      {% if post.categories contains 'aem' or post.tags contains 'aem' %}
        <div class="col-12 col-md-6 mb-4">
          <div class="card service-card">
            <div class="card-content">
              <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
              <p>{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
            </div>
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>