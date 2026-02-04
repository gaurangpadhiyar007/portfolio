---
title: "Projects & Success Stories"
layout: page
description: "A selection of e-commerce platforms brewed to perfection—ranging from Magento monoliths to headless integrations."
bodyClass: page-projects
---

<div class="container pt-6 pb-6">
  <div class="row">
    <div class="col-12 text-center mb-5">
      <h1 class="display-4 font-weight-bold">Selected Works</h1>
      <p class="lead text-muted">A selection of e-commerce platforms brewed to perfection—from high-traffic Australian retailers to European luxury markets.</p>
    </div>
  </div>

  <h2 class="section-title mb-4">Enterprise Magento & Adobe Commerce</h2>
  <div class="row mb-5">
    <div class="col-12 col-md-6 mb-4">
      <div class="project-card h-100">
        <div class="project-image-wrapper">
          <img src="{{ 'images/projects/dinga-com-au.png' | relative_url }}" alt="Dinga Hunting & Fishing Gear" class="img-fluid">
          <div class="project-overlay">
            <a href="https://www.dinga.com.au/" target="_blank" class="btn btn-outline-light">Visit Site</a>
          </div>
        </div>
        <div class="project-info p-4">
          <span class="project-category">Magento 2 Development</span>
          <h3>Dinga Australia</h3>
          <p>Full-scale Magento 2 development for a complex hunting and fishing catalog. Managed high-traffic scaling and stability.</p>
          <ul class="project-tags">
            <li>Core Dev</li>
            <li>Backend Management</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 mb-4">
      <div class="project-card h-100">
        <div class="project-image-wrapper">
          <img src="{{ 'images/projects/deadwoodknives.png' | relative_url }}" alt="Deadwood Knives Storefront" class="img-fluid">
          <div class="project-overlay">
            <a href="https://www.deadwoodknives.com/" target="_blank" class="btn btn-outline-light">Visit Site</a>
          </div>
        </div>
        <div class="project-info p-4">
          <span class="project-category">Migration & Integration</span>
          <h3>Deadwood Knives</h3>
          <p>Lead developer for a critical Magento migration. Integrated <strong>ChannelAdvisor</strong> for advanced inventory sync.</p>
          <ul class="project-tags">
            <li>Inventory Sync</li>
            <li>Marketplace Integration</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <h2 class="section-title mb-4">Specialized E-commerce Solutions</h2>
  <div class="row">
    {% assign other_projects = "Loopify,Sougha Rewards,Piercing Mania,2XL Home,OC Home Furniture" | split: "," %}
    {% for project in other_projects %}
    <div class="col-12 col-md-4 mb-4">
      <div class="project-card-compact p-4 h-100">
        <h4>{{ project }}</h4>
        <p class="small text-muted">Custom module development, UI/UX tuning, and API orchestration.</p>
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="row mt-6">
    <div class="col-12 text-center bg-light p-5 rounded">
      <h2>Ready to brew your next success story?</h2>
      <p>Whether you need a Magento audit or a full Headless migration, let's talk.</p>
      <a href="{{ '/contact' | relative_url }}" class="btn btn-primary btn-lg">Contact Me Today</a>
    </div>
  </div>
</div>