---
title: Cascading styles
---

<div class="panels">
<div>

CSS stands for Cascading Style Sheets, and the cascade is an extremely powerful tool once we understand how to use it.

Consider the use case of building a multi-page website. We probably wouldn't want to set general (or global) styles for every single element on the page. We probably want to set very general styles, such as `font-family` once and have it apply to every element on the page.

Similarly, we might want to target all elements in a specific area of the page, such as the sidebar.

</div>
<div>

```css

/* Will apply to all children of the body tag */
body {
    font-family: Helvetica, Arial, sans-serif;
}

/* All child elements will have the text color #fff */
#sidebar {
    color: #fff;
}

```

</div>
</div>
