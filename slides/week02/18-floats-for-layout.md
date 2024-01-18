---
title: Floats for layout
---

<div class="panels">
<div>

For a long time, floats and the CSS `position` property were all we had for layouts, and we did some really cool stuff.

However, these days there is rarely (if ever) a time when floats are a better solution than grid or flexbox.

</div>
<div style="display: flex;">

<div style="width: 100%; border: 1px solid #333; background: #f1f1f1;">
    <div style="float: left; border: 2px dotted green; width: 32%;">
        I'm floated left, and my width is 32%!
    </div>
    <div style="float: left; border: 2px dotted green; width: 32%; margin-left: 2%; margin-right: 2%;">
        I'm floated left, and my width is 32%! I have a margin either side of 2%.
    </div>
    <div style="float: left; border: 2px dotted green; width: 32%;">
        I'm floated left, and my width is 32%!
    </div>
</div>

</div>
</div>