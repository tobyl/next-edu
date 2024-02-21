---
title: Timing functions
---

<div class="panels">
<div>

Something we skipped over a little is the timing function - in the previous example we used `ease-out`.

The default and most basic is `linear`. Our animation will begin, progress and end at the same speed and pace. But think about objects in the real world, such as a bouncing ball. 

A dropped ball will increase velocity immediately after it's dropped, change direction once it hits the ground and then slow down the higher it bounces.

</div>
<div>

~~~css
transition-timing-function: linear;
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
~~~

Often when we use animations, we are mimmicking how real world objects perform. The timing functions allow us to recreate the simple physics we see in the real world.

You can see the timing functions in action in [the playground](https://tools.webdevpuneet.com/css-easing-generator/).

</div>
</div>