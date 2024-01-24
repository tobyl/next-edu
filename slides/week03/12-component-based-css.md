---
title: Component-based CSS
---

<div class="panels">
<div>

```html
<div id="three-column-layout">
  <div>
    <h3>First Heading</h3>
    <p>Lorem ipsum dolor.</p>
  </div>
  <div>
    <h3>Second Heading</h3>
    <p>Ut enim ad <a href="#">minim veniam</a>, quis.</p>
  </div>
  <div>
    <h3>Third Heading</h3>
    <p>Duis aute irure dolor in reprehenderit.</p>
  </div>
</div>
```

</div>
<div>

```css
/* all styles targeting this component start with the ID */
#three-column-layout { background: green; color: white; }

/* In this case, we don't need high specificity */
#three-column-layout h3 { color: orange; }

/* But we can be more specific if we wish! */
#three-column-layout div p a {
  color: pink;
}

```

</div>
</div>
