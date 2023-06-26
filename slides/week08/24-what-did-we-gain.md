---
title: What did we gain?
---

<div class="panels">
<div>

The animation on the previous page is very simple - it takes a starting point of `opacity: 0;` and animates it to `opacity: 1;`. The timing of `1000ms` in milliseconds means the animation will take one second to complete. 

But what did we gain? What is the benefit to using `animation` over `transition` here?

Honestly, in this particular case not that much. However, if we look closer we can see some immediate benefit before we start ramping up in complexity.

</div>
<div>

For starters, we are not animating a single property - we are animating an **entire block of CSS**! This alone gives us a great deal more power and control.

Secondly, it's important to note that this is not being applied in response to a user action, such as hovering or clicking. This animation will run as soon as the page loads.

</div>
</div>