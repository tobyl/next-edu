---
title: A real world example
---

<div class="panels">
<div>

A great example of the power of media queries is grid layouts. Note how CSS Grid dovetails really nicely with responsive design.

![End Result](../responsive-ecommerce.png)

</div>
<div>

```css
.product-grid {
    grid-template-columns: 1fr;
    
    @media (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
```

</div>
</div>
