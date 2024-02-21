---
title: More selectors
---

<div class="panels">
<div>

So far we've looked at a very simple selector that solves a pretty common, every day problem. We've also looked at a very useful type of selector that will save us writing tons of extra HTML and will allow us to build much more modular components.

In the early days, you might look at some of these selectors and wonder how anyone might ever find a need for them. But as you deal with increasingly complex scenarios, you will find yourself looking up the various selectors and their use cases quite often. 

Here are a few of the most common ones.

</div>
<div>

~~~css
/* direct descendent selector */
.my-element > div { ... }

/* general sibling selector */
.my-element ~ div { ... }

/* adjacent sibling selector */
.my-element + div { ... }

/* universal selector */
* { ... }

/* selector list */
p, div, a { ... }
~~~

</div>
</div>




