---
layout: page
title: "Certifications & Course Completions"
description: "A comprehensive index of my technical achievements, expert designations, and professional training milestones."
body_class: "page-certifications"
---

<div class="container pt-6 pb-6">
  <div class="row justify-content-center">
    <div class="col-12">
      <h1 class="title title-overline mb-4">Certifications & Course Completions</h1>
      <p class="text-muted mb-5">Verified credentials across Enterprise Commerce platforms, Cloud Architectures, and Agentic AI Systems.</p>
    </div>
  </div>

  <div class="row">
    {% for cert in site.data.certifications %}
    <div class="col-12 col-md-6 mb-4 d-flex align-items-stretch">
      <div class="card w-100 shadow-sm border-0" style="background: #ffffff; border-radius: 6px; overflow: hidden; border: 1px solid #eaeaea; display: flex; flex-direction: column;">
        
        <div class="cert-img-container" style="background: #fdfdfd; min-height: 180px; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid #f5f5f5; padding: 15px;">
          {% if cert.image %}
            <img src="{{ cert.image | relative_url }}" alt="{{ cert.name }}" style="max-width: 100%; max-height: 150px; object-fit: contain;">
          {% else %}
            <div class="text-muted small"><i class="fas fa-certificate fa-3x text-light"></i></div>
          {% endif %}
        </div>
        
        <div class="card-body p-4" style="display: flex; flex-direction: column; justify-content: space-between; flex-grow: 1;">
          <div>
            <span class="text-uppercase tracking-wider text-muted font-weight-bold" style="font-size: 0.75rem; letter-spacing: 1px;">{{ cert.issuer }}</span>
            <h3 class="font-weight-bold mt-1 mb-3" style="font-size: 1.25rem; line-height: 1.4; color: #333;">{{ cert.name }}</h3>
            
            {% if cert.skills %}
            <div class="skills-tags mb-4">
              {% for skill in cert.skills %}
                <span class="badge" style="background-color: #f1f3f5; color: #495057; font-weight: 500; font-size: 0.75rem; padding: 6px 12px; margin-right: 6px; margin-bottom: 6px; border-radius: 4px; display: inline-block; border: 1px solid #e2e8f0;">{{ skill }}</span>
              {% endfor %}
            </div>
            {% endif %}
          </div>
          
          <div class="pt-2">
            <a href="{{ cert.url }}" target="_blank" rel="noopener" class="btn btn-primary btn-sm align-self-start" style="font-size: 0.8rem; font-weight: 600; padding: 8px 16px; letter-spacing: 0.5px; text-transform: uppercase; border-radius: 4px;">
              Verify Credential <i class="fas fa-external-link-alt ml-1" style="font-size: 0.7rem;"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
    {% endfor %}
  </div>
</div>