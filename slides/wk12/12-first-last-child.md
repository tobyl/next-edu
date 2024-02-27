---
title: First and last child
---

Some of the most useful selectors you'll find yourself using all the time are `:first-child` and `:last-child`.

<img width="300" src="../list-with-borders.png" />

In this scenario we have a simple styled list, and each `li` has a border at the bottom. However, as you can see the last `li` ends up with a double border.

~~~css
ul li:last-child {
    border: none;
}
~~~

With this simple fix, we do not need to jump to elaborate solutions such as removing the border at the bottom of the `ul` or adding another class name or ID.
