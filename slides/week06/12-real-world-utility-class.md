---
title: A real-world example of a utility class
---

Obviously this is a big shift in how we think about using CSS, but the concept of utility classes is an important one. There is no better example than styling an unordered list element.

<div class="panels">
<div>
Whenever we have a `ul` in our page we will most likely want to override the default browser styling before adding our own custom styles:

~~~css
.my-list {
    list-style: none;
    margin: 0;
    padding: 0;

    /* Then our custom styles */
    
    border: 1px solid green;
    font-size: 1.5rem;
}
~~~
</div>
<div>
<b>BUT!</b> Rather than litter our CSS with these identical lines of code wherever they're required, why not offload them to a utlity class:

~~~css
.unstyled-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
~~~

~~~html
<ul class="my-list unstyled-list">
    ...
</ul>
~~~
</div>
</div>

Voila! Immediately we can see a new way to organize and structure our HTML and CSS to be cleaner, more reusable, and more readable. 