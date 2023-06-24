---
title: How does CSS know which rules to apply?
---

<div class="panels">
<div>

Consider the following code:

~~~html
<p class="red-text" style="color: green;">
    Some paragraph text.
</p>
~~~

~~~css
p {
    color: blue;
}

.red-text {
    color: red;
}
~~~

There are three rules attempting to set the colour of the paragraph. But which one wins?

</div>
<div>

In CSS, the answer to the question is determined by **specificity**.

There are rules in CSS to determine which styles are applied to an element. Obviously the example on this page is convoluted, but it highlights the problem quite well.

So far we've written small chunks of code where specificity has not been an issue. But if we want to write good CSS that cascades well, we need to understand how the cascade works. 

</div>
</div>