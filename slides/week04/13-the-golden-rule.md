---
title: A golden rule for flexbox and grid
---

<div class="panels">
<div>

CSS can be tricky to learn, and layout is probably the most complex aspect - so anything we can use to help remind us how to build and troubleshoot is helpful.

So here is the golden rule for flexbox and grid:

<p class="lead">Flexbox and grid are applied to the PARENT element, NOT the element you want to move!</p>

Flexbox and grid are applied to the parent element and the direct children are affected.

</div>
<div>

```html
<div> <!-- flex or grid added here! -->
    <div>One</div> <!-- we want to position this -->
    <div>Two</div> <!-- and this -->
    <div>Three</div> <!-- and this -->
</div>
```

Unlike simpler CSS properties like `color`, `float` or `position`, flexbox and grid are ALWAYS added to the parent!

</div>
</div>
