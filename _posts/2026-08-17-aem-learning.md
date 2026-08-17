---
layout: post
title: "Understanding AEM sling:resourceSuperType: Component Inheritance Made Simple"
date: 2026-08-17 10:00:00 -0000
categories: [AEM, CMS, Web Development]
tags: [aem, sling, HTL, overlay, extension]
---

In Adobe Experience Manager (AEM), avoiding code duplication is a top priority. Instead of building components from scratch, AEM allows you to leverage existing base components—like the **AEM Core Components**—and customize only what you need. 

The magic behind this behavior is **`sling:resourceSuperType`**. 

In this post, we’ll explore how `sling:resourceSuperType` works, how it enables component extension, and a real-world example of extending a Core Component.

---

## What is `sling:resourceSuperType`?

`sling:resourceSuperType` is a property assigned to an AEM component node (usually under `/apps`). It tells the Apache Sling framework:

> *"If you don't find a specific HTL script, dialog field, or property in this component, look up the inheritance chain to the specified parent component."*

This concept underpins **component overlaying and extension** in AEM.

---

## How the Sling Resource Merger Resolves Components

When AEM renders a component, Sling searches for resources using the following priority order:

1. **Current Component (`/apps/<your-project>/components/...`)**: Checks for direct scripts (e.g., `mycomponent.html`), clientlibs, or dialogs.
2. **Super Type (`sling:resourceSuperType`)**: If a resource or script isn't found locally, Sling checks the component path specified in `sling:resourceSuperType`.
3. **Fallback/Core Components (`/libs` or Core Component paths)**: If unresolved, Sling moves further up the chain until it hits the foundation layer.

---

## Step-by-Step Example: Extending the Core Teaser Component

Imagine you want to extend the AEM Core Teaser component (`core/wcm/components/teaser/v2/teaser`) to add a custom badge field to the author dialog without rewriting the rendering logic.

### 1. Create the Custom Component Node

Under your project directory in `/apps`:

* **Path**: `/apps/myproject/components/content/custom-teaser`
* **Type**: `cq:Component`
* **Title**: Custom Teaser

### 2. Set the `sling:resourceSuperType` Property

Add the `sling:resourceSuperType` property to your component node:

| Property | Type | Value |
| :--- | :--- | :--- |
| `jcr:title` | String | `Custom Teaser` |
| `jcr:description` | String | `Extended Teaser Component` |
| `sling:resourceSuperType` | String | `core/wcm/components/teaser/v2/teaser` |
| `componentGroup` | String | `My Project - Content` |

### 3. Extend the Dialog (`_cq_dialog`)

You do not need to copy the entire dialog from the parent component. Instead, use the **Sling Resource Merger** properties (`sling:hideChildren`, `sling:orderBefore`) to add your custom field.

Create `_cq_dialog/.content.xml` in your custom component:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root 
    xmlns:sling="[http://sling.apache.org/jcr/sling/1.0](http://sling.apache.org/jcr/sling/1.0)" 
    xmlns:cq="[http://www.day.com/jcr/cq/1.0](http://www.day.com/jcr/cq/1.0)" 
    xmlns:jcr="[http://www.jcp.org/jcr/1.0](http://www.jcp.org/jcr/1.0)"
    xmlns:nt="[http://www.jcp.org/jcr/nt/1.0](http://www.jcp.org/jcr/nt/1.0)"
    jcr:primaryType="nt:unstructured"
    jcr:title="Custom Teaser"
    sling:resourceSuperType="core/wcm/components/teaser/v2/teaser/cq:dialog">
    
    <content
        jcr:primaryType="nt:unstructured">
        <items jcr:primaryType="nt:unstructured">
            <tabs jcr:primaryType="nt:unstructured">
                <items jcr:primaryType="nt:unstructured">
                    <text jcr:primaryType="nt:unstructured">
                        <items jcr:primaryType="nt:unstructured">
                            <badgeText
                                jcr:primaryType="nt:unstructured"
                                sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
                                fieldLabel="Badge Text"
                                name="./badgeText"/>
                        </items>
                    </text>
                </items>
            </tabs>
        </items>
    </content>
</jcr:root>