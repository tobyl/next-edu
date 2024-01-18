---
title: The clearfix hack
---

<div class="panels">
<div>

A common workaround for this issue became known as the "clearfix hack".

We can simulate how the clearfix hack works by manually adding another div below the floats, with the following CSS:

```css
.final-div {
    clear: both;
}
```

As you can see, the parent div no longer collapses.

</div>
<div style="display: flex;">

<div style="width: 100%; border: 1px solid #333; background: #f1f1f1;">
    <div style="border: 2px dotted red;">
        <div style="border: 2px dotted green; float: left;">I float left!</div>
        <div style="border: 2px dotted green; float: right;">I float right!</div>
        <div style="clear: both; border: 2px dotted blue;">my job is to "clear" the floats above me!</div>
    </div>
</div>

</div>
</div>