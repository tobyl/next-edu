---
title: Understanding transitions
---

~~~css
transition: background-color 0.25s ease-out;
~~~

There's a lot going on in this single line, but as always we're using some CSS shorthand to keep things brief. This code is actually shorthand for:

~~~css
transition-property: background-color; /* what are we animating? */
transition-duration: 0.25s; /* how long does the animation take to complete? */
transition-timing-function: ease-out; /* determines the timing in between the various stages of animation */
~~~

We can also add a `transition-delay` to wait for a period of time before the animation runs.

We can also optionally set the `transition-property` to the value `all`, and any values that are modified will be animated using the same settings.