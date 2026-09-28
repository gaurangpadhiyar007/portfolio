---
layout: post
title: "claude cost: Monitoring Token Consumption and Spend"
date: 2026-09-28
categories: [blog, claude]
tags: [claude, cost-tracking, analytics, tokens]
summary: Keep track of token usage and overall cost during development sessions with '/cost'.
---

# `claude cost`: Tracking Token Usage and Spending

Managing API usage and token efficiency is crucial when utilizing AI tools for enterprise codebases. The `/cost` command provides real-time breakdowns of current session token usage.

---

## Viewing Session Costs

Inside an active interactive session, run:

```bash
/cost
```

---

## Sample Output Breakdown

```text
Session Usage Metrics:
----------------------------------
Input Tokens:      45,210
Output Tokens:      3,840
Cache Read Tokens: 120,500
Cache Creation:     15,100
----------------------------------
Estimated Cost:    $0.18
```

---

## Key Features

* **Prompt Caching Savings:** View how much cost is reduced via prompt caching on large codebases.
* **Cost Controls:** Allows developers to keep complex refactoring tasks within budget limits.
