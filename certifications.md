---
title: "Certifications & Credentials"
layout: default
description: "A comprehensive index of my technical achievements, expert designations, and professional training milestones."
bodyClass: page-projects
---

<div class="container">
  <div class="row mb-5">
    <div class="col-12 text-center">
      <h1 class="display-4 font-weight-bold">Certifications & Achievements</h1>
      <p class="lead text-muted">Verified credentials across Enterprise Commerce platforms, Cloud Architectures, and Agentic AI Systems.</p>
    </div>
  </div>

  <div class="row mb-5">
    {% for cert in site.data.certifications %}
    <div class="col-12 col-md-4 mb-4">
      <div class="project-card h-100">
        
        <div class="project-info p-4 d-flex flex-column justify-content-between" style="height: 100%;">
          <div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="project-category" style="text-transform: uppercase; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.5px;">
                {{ cert.issuer }}
              </span>
            </div>
            
            <h3 style="font-size: 1.25rem; line-height: 1.4; margin-bottom: 0.75rem;">
              {{ cert.name }}
            </h3>
            
            {% if cert.skills %}
            <div class="project-tags mt-2 mb-4">
              {% for skill in cert.skills %}
              <span>{{ skill }}</span>
              {% endfor %}
            </div>
            {% endif %}
          </div>
          
          <div class="pt-2">
            <a href="{{ cert.url }}" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm btn-block text-center" style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">
              Verify Credential
            </a>
          </div>
        </div>

      </div>
    </div>
    {% endfor %}
  </div>
</div>