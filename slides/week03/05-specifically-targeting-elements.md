---
title: Specifically targeting elements
---

<div class="panels">
<div>

As much as possible we want to apply our styles as generally as possible, so that we are not repeating ourselves.

But sometimes we want to target a specific element **only**. To do this, we can use a wide range of "selectors".

The selector is the line of CSS we write before the curly braces - the target element for our styles.

</div>
<div>

```css

/*
 Targets the h2 element that is a child of
 the header, which is a child of #sidebar
*/
#sidebar header h2 {
    font-size: 2rem;
}

```

</div>
</div>
