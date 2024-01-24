---
title: Container queries
---

Media queries are extremely powerful, but in the case of the `min-width` and `max-width` queries we're only targeting a single metric; The viewport width.

A powerful new change coming to browsers soon is Container queries. Container queries are exactly what they soound like - media queries, but for individual elements.

Consider a div that holds some text. Often we might not care about the width of browser, but we might care a great deal about the width of that particular element (since text is much harder to read in a very narrow or very wide block).

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
@container sidebar (min-width: 700px) {
  .card { font-size: 2em; }
}
```
