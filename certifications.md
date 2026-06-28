---
layout: page
title: "Certifications"
body_class: "page-certifications"
---

<div class="container pt-6 pb-6">
  <div class="row">
    {% for cert in site.data.certifications %}
    <div class="col-12 col-md-6 mb-4">
      <div class="card h-100 shadow-sm border-0" style="background: #fff; border-radius: 6px; overflow: hidden; border: 1px solid #f0f0f0;">
        <div style="background: #f8f9fa; min-height: 200px; display: flex; align-items: center; justify-content: center;">
          <img src="{{ cert.image }}" alt="{{ cert.name }}" style="max-width: 100%; max-height: 190px; object-fit: contain; padding: 10px;">
        </div>
        <div class="card-body p-4" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h3 class="font-weight-bold mb-1" style="font-size: 1.2rem;">{{ cert.name }}</h3>
            <p class="text-muted small mb-3">{{ cert.issuer }}</p>
            
            {% if cert.skills %}
            <div class="skills-tags mb-3">
              {% for skill in cert.skills %}
              <span class="badge bg-light text-dark mr-1 mb-1" style="padding: 5px 10px; font-size: 0.75rem; border: 1px solid #e9ecef; display: inline-block;">{{ skill }}</span>
              {% endfor %}
            </div>
            {% endif %}
          </div>
          
          <a href="{{ cert.url }}" target="_blank" rel="noopener" class="btn btn-primary btn-sm align-self-start" style="font-size: 0.8rem;">
            Verify Certificate
          </a>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>