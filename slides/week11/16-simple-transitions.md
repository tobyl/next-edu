---
title: Simple transitions
---

<div class="panels">
<div>

The first and simplest form of animation in CSS is the `transition` property.

A good way to think about this is that with transitions we are able to animate almost any numeric value from one value to another.

~~~css
button {
    background-color: #ff9900;
    color: #fff;
}

button:hover {
    background-color: #ff3300;
}
~~~

<button class="transition-btn">click me</button>

</div>
<div>

With this code, when we hover over the button the background will instantly switch from one colour to another. This feels a little jarring. With a single line of CSS we can soften this a little and make our button feel a little more organic.

~~~css
button {
    background: #ff9900;
    color: #fff;
    transition: background-color 0.25s ease-out;
}
~~~

<button class="transition-btn transition">click me</button>

</div>
</div>