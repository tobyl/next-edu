---
title: Real world usage
---

<div class="panels">
<div>

So HSL is better because it's easier to use, more predictable and easier to understand once you get the hang of it. But we haven't really gained much in practical terms - we're still typing numeric values.

However, we can get another big boost by combining what we've learned with another CSS feature - CSS variables!

Variables in CSS work almost exactly the same as in programming languages. We can declare a value or property, then access it throughout our codebase. 

</div>
<div>

~~~css
/* we declare our variables in the :root namespace */
:root {
  --primary: 50; /* primary brand colour hue */
  --secondary: 80; /* secondary brand colour hue */

  /* we can also create complete CSS properties */
  --primary-light: hsl(var(--primary) 50% 80%);
}

/* we access the variables using the var() function */
.my-element {
  background: hsl( var(--primary) 50% 50%);
  color: hsl( var(--secondary) 50% 50%);
}
~~~

</div>
</div>





