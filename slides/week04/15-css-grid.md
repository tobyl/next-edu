---
title: CSS Grid
---

<div class="panels">
<div>

Unlike flexbox, CSS grid is designed to create layouts on both the X and Y axes, or rows and columns. Grid is perfect for creating very structured grid layouts.

Also unlike flexbox, adding `display: grid;` to our parent element does not produce any results on it's own - we need to add more instructions about the rows and columns.

We can add further controls, but starting with rows and columns is a great way to start understanding CSS grid.

</div>
<div>

```css
.css-grid-container {
    display: grid;
    grid-template-rows: 200px 200px; /* two rows */
    grid-template-columns: 200px 200px; /* two columns */
}
```

- [Read more about CSS grid on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [Experiment on the grid playground](https://grid.layoutit.com/)

</div>
</div>
