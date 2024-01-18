---
title: The float gotcha
---

<div class="panels">
<div>

There's a potential hazard we need to be aware of when using floats. A float affects the floated element, **BUT** it also affects the elements around it too.

In the example to the right, the two floated divs are within a parent div (with the red dotted border). As you can see, the parent div has collapsed.

</div>
<div style="display: flex;">

<div style="width: 100%; border: 1px solid #333; background: #f1f1f1;">
    <div style="border: 2px dotted red;">
        <div style="border: 2px dotted green; float: left;">I float left!</div>
        <div style="border: 2px dotted green; float: right;">I float right!</div>
    </div>
</div>

</div>
</div>