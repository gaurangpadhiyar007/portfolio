---
layout: post
title: "claude compact: Optimizing Context Window Memory"
date: 2026-09-28
categories: [blog, claude]
tags: [claude, context-window, performance, optimization]
summary: Learn how to compress conversation history and save tokens during long Claude Code sessions.
---

# `claude compact`: Context Compression & Token Optimization

During long debugging or refactoring sessions, your conversation history with Claude can accumulate thousands of tokens. The `/compact` command (or CLI alias `claude compact`) distills previous output while keeping key progress intact.

---

## When to Use `compact`

* When working on multi-step feature refactoring.
* When approaching token limits on context-heavy sessions.
* After a long debugging process where only the final outcome matters.

---

## How It Works

1. Summarizes earlier code reads, test runs, and conversation details.
2. Retains active workspace context, pending goals, and modified file states.
3. Frees up context budget for higher response precision.

```bash
# In interactive Claude session
/compact
```

---

## Best Practice

Run `/compact` immediately after finishing a major sub-task in your workflow (e.g., completing database migrations) before moving on to frontend template modifications.
