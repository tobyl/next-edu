---
title: A general rule
---

<div class="panels">
<div>

Specificity is a complex topic, and it will take you a while to fully understand. However, a good general rule is:

<p class="lead">The more specific you are with a CSS selector, the more likely it is to be the applied style.</p>

This might seem cyclical, but let's try to understand what this means in a more real world example.

</div>
<div>

~~~html
<a href="#" class="nav-link" id="first">link</a>
~~~

~~~css
/* We set the colour of ALL links */
a { color: blue }

/* now we set the colour of all nav-links */
a.nav-link { color: green }

/* finally, we set the #first link to another colour */
a.nav-link#first { color: orange }
~~~

</div>
</div>