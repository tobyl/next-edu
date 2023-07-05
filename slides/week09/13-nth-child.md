---
title: Nth child
---

Another really useful selector is the `:nth-child` selector. There a few different ways this can be used.

For example, we can target the odd and even child indexes:

~~~css
ul li:nth-child(odd) { background: #999 }
ul li:nth-child(even) { background: #333 }
~~~

We can also target a specific index:

~~~css
ul li:nth-child(3) { background: #999 }
~~~

There are some variants of this type of selector, including `first-of-type` and `last-of-type`.

[Read more about these at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type).

