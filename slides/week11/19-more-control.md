---
title: More control
---

You will notice that the transition applies in both directions - the colour is applied on hover, and then removed when the mouse leaves the button area. 

We can take more control over our animation by adding a transition for each direction.

~~~css
.my-btn {
    background: #ff3300;
    transition: background 0s ease-out;
}
.my-btn:hover {
    background: #ff3300;
    transition: background 0.5s ease-out;
}
~~~

In the code above, we specify a duration of `0.5s` for the fade in, and then `0s` (or instant) for the fade out. Note that the longer value is on the `:hover` property.

<button class="transition-btn controlled">click me</button>




