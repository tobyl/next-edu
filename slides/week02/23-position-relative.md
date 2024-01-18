---
title: Relative positioning
---

<div class="panels">
<div>

Possibly the easiest way to start understanding the position property is by looking at relative positioning.

In this example we can see that with relative positioning, we can add `left: 20px` and the div sits 20px to the right.

The position is relative - to itself!

```css
.third-div {
    position: relative;
    left: 20px;
}
```

</div>
<div style="display: flex;">

<div style="width: 100%; border: 1px solid #333; background: #f1f1f1;">
    <div style="border: 2px dotted green; margin-bottom: 10px;">
        I'm statically positioned.
    </div>
    <div style="border: 2px dotted green; margin-bottom: 10px;">
        I'm statically positioned.
    </div>
    <div style="position: relative; left: 20px; border: 2px dotted blue; margin-bottom: 10px;">
        I'm relatively positioned!
    </div>
    <div style="border: 2px dotted green; margin-bottom: 10px;">
        I'm statically positioned.
    </div>
</div>

</div>
</div>