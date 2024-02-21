---
title: Another example
---

<div class="panels">
<div>

Animating buttons on hover is a simple example of using transitions to help users. But what else can we do with this?

Another great example might be a popover, or tooltip - when a user hovers or clicks an element, we can show a helpful information dialogue.

<div class="tooltip-example">
    <button>click me</button>
    <div class="example-tooltip">Clicking this button will do something!</div>
</div>

In this example we use the `:hover` state on the button to animate another element.

</div>
<div>

~~~css
button:hover + .tooltip {
  opacity: 1;
  top: -25px;
}
~~~

The `+` selector in CSS is the [adjacent sibling selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) - in other words, when we hover over the button, apply this CSS to the `.tooltip` element that exists next to the button in the DOM.

The end result is the both the `opacity` and `top` properties are animated. 

</div>
</div>