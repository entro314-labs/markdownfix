---
title: Markdown Tips and Tricks
date: 2024-01-15
---

# Markdown Tips and Tricks

Markdownkit expects documents to stay readable before and after formatting.

## Keep Structure Predictable

- Use one top-level heading per document.
- Increase heading levels one step at a time.
- Keep blank lines around headings, lists, and fenced code blocks.

## Prefer Explicit Code Fences

Use a language identifier whenever the content is code:

```javascript
export function greet(name) {
  return `Hello ${name}`
}
```

## Check Links Locally

Use relative links for files that live in the same documentation tree, and keep
linked files committed with the page that references them.
