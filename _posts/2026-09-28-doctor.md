---
layout: post
title: "claude doctor: System Diagnostics and Health Checks"
date: 2026-09-28
categories: [blog, claude]
tags: [claude, debugging, troubleshooting, system-health]
summary: Run diagnostic checks on your environment to resolve installation, permission, or API issues.
---

# `claude doctor`: Diagnostic Tool for Claude Code

When encountering authentication issues, tool execution failures, or slow network connections, run `claude doctor` to analyze system health.

---

## Running Diagnostics

```bash
claude doctor
```

---

## What It Checks

1. **Authentication Status:** Verifies valid API keys or OAuth session tokens.
2. **Node & Environment:** Checks Node.js runtime version compatibility.
3. **MCP Server Connectivity:** Tests response times for all registered Model Context Protocol endpoints.
4. **Git Repository State:** Ensures permissions for reading/writing local workspace files.

---

## Output Example

```text
[✓] API Key status: Valid
[✓] Node.js version: v20.11.0 (Supported)
[✓] Git Repository: /var/www/html/magento
[!] MCP Server 'postgres': Connection timed out (Check DB host)
```
