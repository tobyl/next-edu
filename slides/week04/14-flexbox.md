---
title: Flexbox
---

<div class="panels">
<div>

Flexbox primarily allows us to flow content along either the X or Y axis. By default, flexbox uses the "row" as the direction, not the "column".

One way we can think about flexbox is that it's very high level - a vague set of instructions to our parent element about how our child elements will be positioned and the spacing between them.

We can add further controls, and we can modify our child elements, but ultimately if you are looking for a rigid, organized grid then flexbox might not be the right tool for the job.

</div>
<div>

```css
.flexbox-container {
    display: flex;
    flex-direction: column; /* default is 'row' */
    /* position elements in a row with space in between them */
    justify-content: space-between;
}
```

- [Read more about flexbox on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Experiment on the flexbox playground](https://flexbox.tech/)

</div>
</div>
