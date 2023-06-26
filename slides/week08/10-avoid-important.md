---
title: Rule 3 - Avoid the !important property
---

~~~css
p { color: green }
p.intro { color: blue }
p { color: red !important }
~~~

In the above example we are using the (valid) CSS `!important` property. This is provided as an escape hatch, but it is used incorrectly far more than correctly. **Do not do this!**

There are valid use cases for this property, and you will discover them as you develop your CSS skills. However, if you are tempted to do this to solve a specificity problem, then like in the previous example you are most likely causing more problems than you are solving.

It will become impossible to look at your CSS and determine which rule should actually be applied.