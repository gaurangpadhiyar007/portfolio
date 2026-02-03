---
layout: post
title: "Mastering the DA.Live Source API: A Developer's Guide to Programmatic Content"
description: "Learn how to use the da.live Source API to create, manage, and automate folders and media in your Document Authoring workflow."
category: "Development"
---

As the world of headless CMS and "Document Authoring" (DA) continues to evolve, the ability to programmatically manage your content is no longer a luxury—it’s a necessity. Today, we’re diving deep into the **Source API from da.live**, a powerful tool for developers looking to automate their content trees, files, and media.

If you are building custom plugins or automating site migrations, understanding the `GET` and `POST` methods of the Source API is your first step.

### What is the Source API?

The Source API is the backbone of the **da.live** ecosystem. It allows you to interact with the underlying content repository of your project. Whether you need to fetch a specific HTML draft or programmatically upload a JSON configuration file, this API handles it through a clean, RESTful interface.

### The Anatomy of a Request

To interact with the Source API, you need four key parameters:
1.  **Org:** Your project's organization.
2.  **Site:** The name of your site.
3.  **Path:** The specific location of the content (e.g., `/drafts/marketing/post-1`).
4.  **Authorization:** An IMS JWT bearer token.

---

### 1. Fetching Content (GET)

Fetching content is straightforward. You send a `GET` request to the resource path. The API returns a rich JSON response containing metadata about the `live`, `preview`, and `edit` versions of your document.

**Example Request:**
```javascript
const opts = {
  headers: { Authorization: `Bearer ${IMS_TOKEN}` },
  method: 'GET',
};

const fullpath = `https://admin.da.live/source/org/site/drafts/hello-world.html`;
const resp = await fetch(fullpath, opts);
const data = await resp.json();

```

**Why this is useful:** This response gives you the `sourceLocation` (like a OneDrive or SharePoint link) and the `lastModified` timestamps, perfect for building custom dashboards or auditing tools.

---

### 2. Creating & Updating Content (POST)

The `POST` method is where the automation magic happens. You can create folders, upload media, or update existing files.

**Example via cURL:**

```bash
curl -X POST \
  '[https://admin.da.live/source/your-org/your-site/drafts/test.json](https://admin.da.live/source/your-org/your-site/drafts/test.json)' \
  --header 'Authorization: Bearer {IMS_TOKEN}' \
  --form 'data=@/local/path/to/file.json'

```

*Note: When using the API to update pages in a tree, ensure your paths are correctly mapped to avoid overwriting production content.*

---

### Best Practices for DA Developers

* **Security First:** Never hardcode your IMS tokens. Use environment variables or a secure vault.
* **Error Handling:** The API returns standard status codes (200, 201, 400, 500). Always wrap your fetch calls in a `try/catch` block to handle network issues or authorization expirations.
* **Rate Limiting:** Be mindful of the number of requests when performing bulk operations (like importing a whole site).

### Final Thoughts

The Source API transforms **da.live** from a simple authoring tool into a fully extensible content platform. By mastering these endpoints, you can build smarter apps, smoother workflows, and more robust ecommerce experiences.

**Are you integrating da.live with a Magento or Shopify storefront?** I specialize in headless architecture and API integrations. Let’s connect and build something incredible together.

[Contact Me for Custom API Development](https://coffeewithmagento.in/contact/)

```
