---
title: Rule 2 - Avoid unnecessary overriding
---

<div class="panels">
<div>

It is a good general rule to avoid setting and unsetting properties as you build your styles. This might seem obvious, but it's an easy trap to fall in to.

In this convoluted example, we are attempting to set the colour at many levels. In doing so, we are setting and then repeatedly resetting the `color` property. Try to set each property minimally as needed. 

</div>
<div>

~~~css

* {
    color: green;
}

p {
    color: blue;
}

.header p {
    color: red;
}

.header .nav p {
    color: orange;
}

~~~

</div>
</div>