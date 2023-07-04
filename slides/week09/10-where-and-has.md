---
title: Is, where and has
---

These days we have a dizzying array of choices for how we create selectors, but new ones are still being added all the time. Some of the newest additions are `:is()`, `:where()` and `:has()`.

There's a good chance you won't be using these all the time, if at all, in the early days. But one day you may find you have a need for them.

~~~css
h1 > b, h2 > b, h3 > b, h4 > b, h5 > b, h6 > b { color: hotpink }
~~~

This is a real world use case, and while there are a few ways to handle this you may often find you end up with very lengthy selectors. The `:is()` selector can simplify this down to:

~~~css
:is(h1,h2,h3,h4,h5,h6) > b { color: hotpink }
~~~

We pass in our list of initial selectors to the `:is()` function, and then simply specify the direct descendent after. Not only shorter, but easier to read too!

~~~css
div:has(p) { background: red }
~~~

The `:has()` selector brings some desperately needed capability to CSS. This is basically a conditional statement, where our `div` will only get the styling if it has a `p` as a child.

