---
title: Selectors to the rescue
---

This is a great example of a problem you won't have when working with a small number of elements. As you scale up and address more complex, real world use cases, you will experience this more and more.

We could solve this solution a number of different ways, such as a utility class to add only a margin to a button. But then our HTML and CSS are tightly coupled, plus we'll have an ever-increasing number of one-off classes for specific edge cases.

The right selector can fix this problem very easily.

~~~css
.my-btn + .my-btn { margin-left: 1rem }
~~~

Here, the adjacent sibling selector allows us to specify that whenever we have two `.my-btn` elements immediately next to each other in the DOM, we should add a margin to the second one.