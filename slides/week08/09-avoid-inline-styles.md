---
title: Rule 3 - Avoid inline styles
---

<div class="panels">
<div>

~~~html
<div style="color: green;">
    <p style="color: blue;">Hello, world!</p>
</div>
~~~

In the example above, we are using _inline styles_. This means we are adding our styles directly to our HTML elements.

Inline styles have a very high level of specificity, and will almost always override what is in your CSS files.

</div>
<div>

When starting out with CSS, developers will often get frustrated and do this occasionally to solve a problem. **Do not do this!**

Not only will you have to check in two places to see where styles are applied, it will turn your HTML into a mess of spaghetti code.

</div>
</div>