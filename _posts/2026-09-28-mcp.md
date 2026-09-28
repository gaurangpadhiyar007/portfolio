---
layout: post
title: "claude mcp: Connecting Model Context Protocol Servers"
date: 2026-09-28
categories: [blog, claude]
tags: [claude, mcp, model-context-protocol, backend, integrations]
summary: Connect external tools, databases, and APIs directly to your Claude Code workspace using MCP.
---

# `claude mcp`: Integrating Model Context Protocol Servers

The **Model Context Protocol (MCP)** allows Claude Code to securely query databases, run custom APIs, read enterprise context, and interface with developer tools seamlessly.

---

## Subcommands Overview

### 1. Add an MCP Server

```bash
# Add a local stdio MCP server
claude mcp add postgresql npx -y @modelcontextprotocol/server-postgres postgresql://localhost/mydb

# Add an HTTP / SSE MCP server
claude mcp add search-server https://mcp.example.com/sse
```

### 2. List Installed Servers

```bash
claude mcp list
```

### 3. Remove an MCP Server

```bash
claude mcp remove postgresql
```

---

## Practical Applications

* **Database Queries:** Enable Claude to inspect database schemas and run debug queries safely.
* **API Testing:** Let Claude invoke REST/GraphQL endpoints directly from the terminal.
* **Custom Enterprise Tools:** Wire up internal ticketing or documentation search tools to your interactive CLI session.
