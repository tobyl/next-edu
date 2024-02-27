---
title: Not
---

In the same way we are able to check for a positive conditional statement using `:is()`, we are also able to check for a negative conditional with `:not()`.

~~~css
p:not(.special, .unusual) {
    font-size: 1rem;
}
~~~

In this example, the font size of 1rem will be applied so long as the paragraph does **not** have either the `.special` or `.unusual` class.

