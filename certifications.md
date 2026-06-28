---
layout: page
title: "Certifications & Course Completions"
description: "A comprehensive index of my technical achievements, expert designations, and professional training milestones."
body_class: "page-certifications"
---

<div class="container-fluid pt-6 pb-6" style="max-width: 1400px; padding-left: 30px; padding-right: 30px;">
  <div class="row">
    <div class="col-12">
      <h1 class="title title-overline mb-4">Certifications & Course Completions</h1>
      <p class="text-muted mb-5">Verified credentials across Enterprise Commerce platforms, Cloud Architectures, and Agentic AI Systems.</p>
    </div>
  </div>

  <div class="row match-height">
    {% for cert in site.data.certifications %}
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch">
      <div class="card w-100 shadow-sm border-0" style="background: #ffffff; border-radius: 6px; overflow: hidden; border: 1px solid #eaeaea; display: flex; flex-direction: column;">
        
        {% if cert.image and cert.image != "" %}
        <div class="cert-img-container" style="background: #fdfdfd; height: 140px; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid #f5f5f5; padding: 12px;">
          <img src="{{ cert.image | relative_url }}" alt="{{ cert.name }}" style="max-width: 100%; max-height: 120px; object-fit: contain;">
        </div>
        {% endif %}
        
        <div class="card-body p-3 d-flex flex-column justify-content-between" style="flex-grow: 1;">
          <div>
            <span class="text-uppercase font-weight-bold" style="font-size: 0.7rem; letter-spacing: 0.8px; color: #888;">{{ cert.issuer }}</span>
            <h3 class="font-weight-bold mt-1 mb-2" style="font-size: 1.05rem; line-height: 1.35; color: #222; min-height: 2.7rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
              {{ cert.name }}
            </h3>
            
            {% if cert.skills %}
            <div class="skills-tags mb-3" style="min-height: 54px;">
              {% for skill in cert.skills %}
                <span class="badge" style="background-color: #f8f9fa; color: #495057; font-weight: 500; font-size: 0.7rem; padding: 4px 8px; margin-right: 4px; margin-bottom: 4px; border-radius: 3px; display: inline-block; border: 1px solid #e2e8f0;">{{ skill }}</span>
              {% endfor %}
            </div>
            {% endif %}
          </div>
          
          <div class="pt-2 border-top" style="border-color: #f8f9fa !important;">
            <a href="{{ cert.url }}" target="_blank" rel="noopener" class="btn btn-primary btn-sm btn-block text-center" style="font-size: 0.75rem; font-weight: 600; padding: 6px 12px; letter-spacing: 0.5px; text-transform: uppercase; border-radius: 4px; display: block;">
              Verify <i class="fas fa-external-link-alt ml-1" style="font-size: 0.65rem;"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
    {% endfor %}
  </div>
</div>