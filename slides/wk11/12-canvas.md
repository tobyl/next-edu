---
title: Canvas
---

<div class="panels">
<div>

As we can see, a common theme with media is that the browser provides APIs (Application Programming Interface) that allow us to work with media in a number of different ways. We can allow the browser to do some or all of the work, or we can take control of the entire process. We get an HTML element, such as `video` and then we can customize using CSS and JavaScript.

One very powerful API provided by the browser is the `canvas` element. In some instances we may wish to include images, audio or video on our page. In some cases, it will be critical to customize and control these elements. 

But what if we want to create entirely customized graphical or animated areas in our apps? This is where the `canvas` API comes in.

</div>
<div>

~~~html
<canvas id="canvas"></canvas>
~~~

~~~js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
~~~

In this example we are using the `canvas` element in HTML, and then creating graphics directly via JavaScript. A good example of when you might want to utilize this approach is for developing a browser-based game or animation.

</div>
</div>
