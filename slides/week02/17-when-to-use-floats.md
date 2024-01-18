---
title: What might you use floats for?
---

<style>
    #toggled-img.floated { float: left; }
</style>

<div class="panels">
<div>

Despite flexbox and CSS grid becoming more standardized and powerful, there is still a place for floats.

In the example to the right, the first box shows an image placed before a block of text. In the second box, we've added a left float to the image. 

```css
img {
    float: left;
}
```

</div>
<div style="display: flex;">

<div style="width: 98%; border: 1px solid #333; background: #f1f1f1; margin-right: 4%;">
    <div>
        <img id="toggled-img" src="../airbnb-logo.png" style="width: 100px;" />
        I’m a paragraph of text with an image floated to the left of me, I will flow around the image.
    </div>
</div>

<div style="width: 98%; border: 1px solid #333; background: #f1f1f1;">
    <div>
        <img id="toggled-img" src="../airbnb-logo.png" style="width: 100px; float: left;" />
        I’m a paragraph of text with an image floated to the left of me, I will flow around the image.
    </div>
</div>

</div>
</div>
