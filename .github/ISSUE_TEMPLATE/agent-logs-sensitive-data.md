---
name: "Agent logs sensitive data"
about: "Autter Sandbox challenge"
title: "Agent logs sensitive data"
labels: ["autter-sandbox", "security"]
---

# Challenge: Agent logs sensitive data

## Context

This repository is an Autter Sandbox project. The feature is intentionally close to code teams ship in production, where small AI-generated changes can create security, reliability, or maintainability risks.

## Problem

Prompts and tool responses containing secrets are logged in plain text.

## Expected Behavior

The implementation should handle this case safely while preserving the existing product behavior and local developer workflow.

## Suggested AI Editor Prompt

```prompt
You are working in this repository.

Fix the issue where prompts and tool responses containing secrets are logged in plain text.

Requirements:
- Preserve existing behavior unless the challenge explicitly requires changing it.
- Add or update tests that prove the fix works.
- Avoid unrelated refactors.
- Keep the solution small and production-like.
- Update docs only if the behavior changes.
- In the PR description, explain what changed, why it changed, and what risks remain.
```

## Acceptance Criteria

- [ ] The issue is fixed
- [ ] Relevant tests are added or updated
- [ ] Existing behavior is preserved
- [ ] No unrelated refactors
- [ ] The PR description explains the approach
- [ ] Autter review passes

## What Autter Should Review

- sensitive data exposure
- missing tests or weak negative tests
- unsafe trust boundaries
- regressions in adjacent behavior
- merge readiness

---

Difficulty: Medium  
Category: Security
