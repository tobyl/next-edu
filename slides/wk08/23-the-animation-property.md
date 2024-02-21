---
title: The animation property
---

<div class="panels">
<div>

As we've now seen, transitions can be extremely powerful. We can achieve quite a lot just by altering some numeric values, and we can add some really pleasant touches to our UI.

But CSS includes some other tools that will help us create more complex animations, Namely the `animation` property and `@keyframes` rule.

**WARNING**: I strongly recommend you get comfortable with transitions before moving on to actual animations!

</div>
<div>

~~~css
/* create our animation */
@keyframes fadeIn {
  0%   { opacity: 0 }
  100% { opacity: 1 }
}

/* reference that animation */
.my-element {
  animation: fadeIn 1000ms;
}
~~~

As you can see, there are two parts to an animation in CSS - the animation itself, and the `animation` property to then apply it.

</div>
</div>