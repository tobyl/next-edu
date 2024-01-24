---
title: Specificity
---

Since CSS "cascades", we will always have to consider the "specificity" of our selectors. A selector can have higher or lower specificity, and again it can be tricky to know how specific we should be.

An example of a lower specificity selector might be:

```css
p { color: blue; }
```

This selector will target every `p` element on the page - not very specific at all. An example of a higher specificity selector might be:

```css
html body header div p a.my-link-element { color: blue; }
```

This translates to: the link tag with the class name "my-link-element" that is nested inside `html > body > header > div > p`.