---
title: Types
---

We've already seen types in action when we looked at forms in HTML.

~~~html
<input type="text" />
<input type="checkbox" />
~~~

Here we have two HTML `input` elements, both very different in how they appear and the job they perform. It's important to understand that we can target both in one line of CSS:

~~~css
input { border: 1px solid black }
~~~

However, we can also include the `type` in the selector:

~~~css
input[type='text'] { border: 1px solid green }
input[type='checkbox'] { border: 1px solid orange }
~~~

Something that might not be obvious is that there are other HTML elements that can receive the `type` attribute, such as the `button` element. This allows us to target specific types of buttons:

~~~css
button { background: blue }
button[type='submit'] { background: green }
button[type='reset'] { background: red }
~~~

