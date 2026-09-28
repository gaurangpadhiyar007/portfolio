---
layout: post
title: "claude config: Managing Settings, Models, and Options"
date: 2026-09-28
categories: [blog, claude]
tags: [claude, cli, configuration, setup]
summary: Tailor your Claude Code command-line tool settings using 'claude config'.
---

# `claude config`: Managing Claude Code Settings

The `claude config` command allows developers to view and adjust preferences for models, context management, terminal themes, and execution safety rules.

---

## Key Configurations

### 1. View Current Settings

```bash
claude config list
```

### 2. Change Default Model

You can choose between models depending on speed and complex reasoning needs:

```bash
# Set default to Claude 3.5 Sonnet
claude config set model claude-3-5-sonnet

# Set default to Claude 3 Opus for complex architecture tasks
claude config set model claude-3-opus
```

### 3. Set Tool Auto-Approval Rules

Configure auto-approval preferences for non-destructive actions:

```bash
claude config set auto_approve_read_only true
```

---

## Global vs Local Configuration

* **Global Config:** Stored in `~/.claude/config.json` across all terminal sessions.
* **Local Config:** Saved per repository in `.claude/config.json`.

```bash
# Set setting locally for current repository only
claude config set model claude-3-5-sonnet --local
```
