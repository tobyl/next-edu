---
title: Another example
---

Let's say we're building a tooltip component (yes, we can build triangles using only CSS!).

![Tooltip](../tooltip-example.jpg)

We might start with html that looks like this:

~~~html
<div class="tooltip">
    <span class="warning">!</span> This is my tooltip!
</div>
<div class="tooltip-triangle"></div>
~~~

Hrm. That's a lot of HTML, considering all we really want is a single element with the text "This is my tooltip!". And again, we've very tightly coupled this block of HTML to it's use case. If we need another tooltip that has a "success" icon instead of a warning icon, we'll need entirely separate HTML.