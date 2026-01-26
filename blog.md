---
layout: default
title: "Ecommerce Insights | Magento & Shopify Blog"
bodyClass: page-blog
---

<div class="container pt-6 pb-6">
  <div class="row justify-content-start">
    <div class="col-12 col-md-8">
      <div class="content">
        <h1>Expert Ecommerce Insights</h1>
        <p>Providing value to Magento and Shopify store owners in the US, Europe, and Australia.</p>
      </div>
    </div>
  </div>

  <div class="row">
    {% for post in site.posts %}
    <div class="col-12 col-md-6 mb-4">
      <div class="card service-card">
        <div class="card-content">
          <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
          <p>{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
          <small>{{ post.date | date: "%B %d, %Y" }}</small>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
