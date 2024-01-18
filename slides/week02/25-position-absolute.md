---
title: Absolute positioning
---

<div class="panels">
<div>

A great example of when to use absolute positioning is a close button on a modal window. 

```css
.third-div {
    position: relative;
    left: 20px;
}
```

**IMPORTANT**: When we apply `position: absolute` to an element, we also have to add `position: relative` to a parent element! 

</div>
<div style="display: flex;">

<div style="width: 100%; border: 1px solid #333; background: #f1f1f1;">
    <div style="position: relative; border: 2px dotted green; margin: 30px;">
        I'm a popup showing you some useful information! I have a close button at the top right.
        <span style="width: 30px; height: 30px; position: absolute; top: -15px; right: -15px; background: white; border: 1px solid black; text-align: center; line-height: 30px; border-radius: 15px; font-size: 30px; transform: rotate(45deg);">
            +
        </span>
    </div>
</div>

</div>
</div>