---
title: Rule 1 - Keep things simple
---

<div class="panels">
<div>

Since the start of the semester, I have strongly recommended adding styles to base HTML elements. For example, add your styles directly to a `p` tag, rather than adding a class or ID to your tag and adding styles to that.

![Page nav](../page-nav.png)

In this example, we have three elements: A header, navigation and sub-navigation. A good strategy for this might be:

</div>
<div>


~~~css
a { color: green } /* all links */

.nav a { background: darkgrey; color: #fff; }
.nav .sub-nav a { background: purple; }
~~~

This strategy works because it is **simple**. We set a class on the primary areas, and select all links below that element, **ONLY** modifying the styles we need to.

Note that in this example, because we set the `color` to white in the `.nav a` declaration, we do not need to then set it again in the `.sub-nav` declaration.

</div>
</div>