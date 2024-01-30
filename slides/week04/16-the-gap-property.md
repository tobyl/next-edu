---
title: The gap property
---

<div class="panels">
<div>

There's one more important property we can use right from day one that will give us a huge boost in our layouts, the `gap` property.

This property can be used on both flexbox and CSS grid, and it does exactly what it sounds like - it adds a gap between the children of flexbox or CSS grid parent elements.

This is far more powerful than adding margins or padding, since it automatically applies exactly where we expect in both flexbox and grid.

</div>
<div>

```css
.parent-element {
    display: grid;
    grid-template-rows: 200px 200px 200px;
    gap: 1rem;
}

.parent-element {
    display: flex;
    justify-content: center;
    gap: 1rem;
}
```

</div>
</div>
