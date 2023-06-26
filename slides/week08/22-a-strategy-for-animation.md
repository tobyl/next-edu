---
title: A strategy for animation
---

<div class="panels">
<div>

One of the most complex aspects of animation is determining what we need in order to achieve the animation we want.

Which elements will we need? Which CSS will be applied by default, and which CSS will be applied when the animation has completed?

![Drawer in CSS](../css-drawer.jpeg)

</div>
<div>

Quite often, a good strategy is to consider the "end" state of an animation rather than the starting point.

Consider the example of animated slide out menu, sometimes known as a "drawer". By starting with the end state, we have all the elements we need, and can quite easily envisage the work required to toggle between the two states.

Another aspect we'll want to consider is how we can implement our animation without negatively impacting the rest of the page layout. Often this means our animated elements will use `position: absolute;`. 

</div>
</div>