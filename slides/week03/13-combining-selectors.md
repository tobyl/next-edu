---
title: Combining selectors
---

<div class="panels">
<div>

We'll be looking at more complex selectors later in the semester, but for now one last thing to bear in mind is that we can combine selectors to increase specificity and more accurately target selectors. Consider this HTML:

```html
<ul id="primary-nav">
  <li>
    <a href="#">First</a>
  </li>
  <li class="active">
    <a href="#">Second</a>
  </li>
  <li>
    <a href="#">Third</a>
  </li>
</ul>
```

</div>
<div>

```css

/* Target ONLY #primary-nav if also a ul */
ul#primary-nav { list-style: none; }

/* Set default link colour */
ul#primary-nav li a { color: blue; }

/* Set active link colour */
ul#primary-nav li.active a { color: red; }
```

Here we combine the element target (`ul`) with the ID. An element with the ID of `primary-nav` will **only** have the styles applied if it is also a `ul`.


</div>
</div>
