---
title: Other techniques
---

<div class="panels">
<div>

Even before we consider layout, media queries give us the power to modify any CSS property based on the browser size. Font size, margins and padding can all be modified for larger or smaller screens.

The greatest thing about media queries is how easy they are to test - simply resize the browser!

</div>
<div>

```css
body {
    /* Equivalent to 20px */
    font-size: 1.25rem;
    margin-inline: 1.25rem;
}

@media (min-width: 768px) {
    body {
        /* Equivalent to 32px */
        font-size: 2rem;
        margin-inline: 2rem;
    }
}
```

</div>
</div>
