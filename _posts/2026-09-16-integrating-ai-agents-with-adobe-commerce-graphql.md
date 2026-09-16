---
layout: post
title: "Integrating AI Agents with Adobe Commerce GraphQL using MCP"
date: 2026-09-16 10:00:00 -0000
categories: [Adobe Commerce, AI, GraphQL]
tags: [adobe-commerce, magento, ai-agents, mcp, graphql, claude]
---

The eCommerce landscape in 2026 has shifted dramatically from passive keyword searches to interactive, conversational commerce. Modern consumers no longer want to filter through dozens of faceted category attributes; they want intelligent shopping assistants that understand natural language intent, evaluate multi-variable product requirements, and perform real-time storefront actions.

For enterprise merchants running **Adobe Commerce (Magento 2)**, building these capabilities requires connecting Large Language Models (LLMs) like Anthropic's Claude directly to the robust Adobe Commerce GraphQL engine.

The magic behind this behavior is **Model Context Protocol (MCP)**.

In this post, we’ll explore how MCP works, how it enables agentic commerce, and a real-world example of extending Adobe Commerce GraphQL with an AI shopping agent.

---

## What is an Agentic Middleware Layer?

An Agentic Middleware Layer is a service sitting between your AI client and Adobe Commerce (usually built as an MCP server). It tells the Large Language Model:

> *"If you don't find a specific REST endpoint, schema definition, or API tool locally, use the registered MCP tool definitions to construct structured GraphQL queries."*

This concept underpins **safe, deterministic AI commerce integration**.

---

## How the MCP Tool Resolution Flow Resolves Requests

When an end user interacts with the AI agent, Sling and MCP engines process requests using the following priority order:

1. **User Intent & Schema Mapping**: Checks for direct tool schemas (e.g., `search_products`, `add_to_cart`) exposed by the MCP server.
2. **GraphQL Query Construction**: If a tool call is invoked, the middleware maps intent to standard Adobe Commerce GraphQL queries or mutations.
3. **Execution & Response Pruning**: Unnecessary HTML formatting and redundant JSON keys are stripped before returning data to the LLM context window.

---

## Step-by-Step Example: Building an MCP Product Search Tool

Imagine you want to extend your storefront with a natural language search agent without exposing raw GraphQL endpoints to prompt injection attacks or unnecessary token overhead.

### 1. Create the Tool Definition

Under your middleware project directory in `/src/tools`:

* **Path**: `/src/tools/search-products.ts`
* **Type**: `MCP Tool`
* **Title**: Product Search Tool

### 2. Set the Tool Schema Properties

Add the properties required for tool registration:

| Property | Type | Value |
| :--- | :--- | :--- |
| `name` | String | `search_products` |
| `description` | String | `Search Adobe Commerce catalog by natural language keywords, SKU, or category` |
| `searchQuery` | Property | `Natural language query term (e.g., 'waterproof trail running shoes')` |
| `pageSize` | Property | `Number of items to return (default 5)` |

### 3. Implement GraphQL Execution and Pruning

You do not need to send raw GraphQL responses back to the LLM. Instead, use a custom execution wrapper to return clean, token-optimized output.

Create `src/services/graphqlClient.ts` in your middleware:

```typescript
import fetch from "node-fetch";

const ADOBE_COMMERCE_GRAPHQL_ENDPOINT = "[https://your-store.com/graphql](https://your-store.com/graphql)";

interface SearchArgs {
  searchQuery: string;
  pageSize?: number;
  currentPage?: number;
}

export async function executeProductSearch({ searchQuery, pageSize = 5, currentPage = 1 }: SearchArgs) {
  const query = `
    query SearchProducts($search: String!, $pageSize: Int!, $currentPage: Int!) {
      products(search: $search, pageSize: $pageSize, currentPage: $currentPage) {
        total_count
        items {
          id
          name
          sku
          stock_status
          price_range {
            minimum_price {
              final_price {
                value
                currency
              }
            }
          }
          description {
            html
          }
        }
      }
    }
  `;

  const response = await fetch(ADOBE_COMMERCE_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Store": "default"
    },
    body: JSON.stringify({
      query,
      variables: { search: searchQuery, pageSize, currentPage }
    })
  });

  const result = await response.json();
  
  if (result.errors) {
    throw new Error(`GraphQL Error: ${JSON.stringify(result.errors)}`);
  }

  // Prune HTML tags from description to optimize LLM token usage
  return result.data.products.items.map((item: any) => ({
    sku: item.sku,
    name: item.name,
    inStock: item.stock_status === "IN_STOCK",
    price: `${item.price_range.minimum_price.final_price.value} ${item.price_range.minimum_price.final_price.currency}`,
    summary: item.description?.html.replace(/<[^>]*>?/gm, '').slice(0, 200) + "..."
  }));
}