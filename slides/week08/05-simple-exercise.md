---
title: An exercise
---

<div class="panels">
<div>

Consider this very common web layout. How might we achieve this in CSS? If we're using Flexbox or CSS Grid (which, in 2024, we will be!), our CSS might look like this:

~~~css
body {
    display: flex;
    flex-direction: column;
}
~~~

After referring to the docs, we can see that this translates to:

~~~html
<body class="flex flex-col">
~~~

</div>
<div>

![Common layout](../common-layout.jpeg)

</div>
</div>
