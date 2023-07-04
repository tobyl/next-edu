---
title: More on pseudo selectors
---

The code in the previous example is simplified, but it demonstrates the concept pretty well.

By adding `:before` and `:after` to our element, we've created new elements in the DOM. They don't exist in the HTML, because that's where our content goes. In this case, we only need the elements to add visual styling, so this belongs in the CSS. That being said, we are able to see the elements in dev tools:

![Before and after](../before-and-after.png)

Note that the elements are technically **inside** the element, not before or after in the DOM. It's also worth noting that pseudo selectors require the `content` property, and this can be just an empty string.

