---
title: Pseudo selectors to the rescue!
---

<div class="panels">
<div>

What if I told you it's actually possible to achieve this with the following HTML?

~~~html
<div class="tooltip warning">This is my tooltip!</div>
~~~

Much better! We have a single, reusable element, and our classes now perfectly indicate what we expect this HTML to do.

The answer is pseudo selectors. A pseudo selector allows us to add a fake element to the DOM that exists only for presentation purposes.

</div>
<div>

~~~css
.tooltip {
    background: blue;
    color: white;
}

.tooltip.warning:before {
    content: '!';
    border: 1px solid white;
    border-radius: 50%;
}

.tooltip:after {
    content: '';
    width: 0; 
    height: 0; 
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid blue;
}
~~~

</div>
</div>
