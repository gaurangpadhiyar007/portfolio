---
layout: post
title: "Integrating AI Agents with Adobe Commerce GraphQL using Model Context Protocol (MCP)"
date: 2026-09-16 10:00:00 +0530
categories: [Adobe Commerce, AI, Model Context Protocol]
tags: [adobe-commerce, magento-2, ai-agents, model-context-protocol, mcp, graphql, claude]
description: "Architecting autonomous AI shopping agents using Adobe Commerce GraphQL and Model Context Protocol (MCP) servers for high-performance agentic commerce."
seo:
  meta_title: "Integrating AI Agents with Adobe Commerce GraphQL using MCP"
  meta_description: "Step-by-step guide to building Model Context Protocol (MCP) servers connecting AI agents to Adobe Commerce GraphQL endpoints."
  keywords: "Adobe Commerce GraphQL, AI Agents, Model Context Protocol, MCP Server, Magento 2 AI, ModelContextProtocol, Claude AI"
---

The eCommerce landscape in 2026 has shifted dramatically from passive keyword searches to interactive, conversational commerce. Modern consumers no longer want to filter through dozens of faceted category attributes; they want intelligent shopping assistants that understand natural language intent, evaluate multi-variable product requirements, and perform real-time storefront actions.

For enterprise merchants running **Adobe Commerce (Magento 2)**, building these capabilities requires connecting Large Language Models (LLMs) like Anthropic's Claude directly to the robust Adobe Commerce GraphQL engine using the **Model Context Protocol (`@modelcontextprotocol/sdk`)**.

In this post, we’ll explore how to build an MCP server that exposes deterministic tool contracts over Adobe Commerce GraphQL to create production-grade AI shopping agents.

---

## What is an MCP Middleware Layer?

An MCP Middleware Layer is a standalone service running `@modelcontextprotocol/sdk` sitting between your AI client and Adobe Commerce. It tells the Large Language Model:

> *"Instead of generating arbitrary API requests or guessing endpoints, use these strictly typed Model Context Protocol (MCP) tool schemas to query the catalog and execute cart operations safely."*

This protocol underpins **safe, deterministic AI commerce integration**.

---

## Architecture & Request Flow

The execution workflow connects the LLM client to your Adobe Commerce backend through the MCP protocol wrapper:

1. **User Intent & Tool Selection**: The LLM matches user input against JSON schemas registered via `ListToolsRequestSchema`.
2. **Deterministic Payload Generation**: The MCP server receives verified tool parameters via `CallToolRequestSchema` and populates pre-tested GraphQL templates.
3. **GraphQL Execution & Response Pruning**: Adobe Commerce executes the query, and the middleware strips unneeded HTML/metadata before returning structured JSON back through the Model Context Protocol response transport.

---

## Step-by-Step Implementation

### 1. Define the Tool Contract

Create a strictly typed tool schema using `@modelcontextprotocol/sdk/types.js` under `/src/tools/searchProducts.ts`:

```typescript
import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const SearchProductsTool: Tool = {
  name: "search_products",
  description: "Search Adobe Commerce catalog by natural language keywords, SKU, or category filters via Model Context Protocol.",
  inputSchema: {
    type: "object",
    properties: {
      searchQuery: {
        type: "string",
        description: "The term or product description to search for (e.g., 'waterproof trail running shoes')"
      },
      pageSize: {
        type: "number",
        description: "Number of products to return (default 5)",
        default: 5
      },
      currentPage: {
        type: "number",
        default: 1
      }
    },
    required: ["searchQuery"]
  }
};

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