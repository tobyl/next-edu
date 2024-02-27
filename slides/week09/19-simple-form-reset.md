---
title: A simple form reset
---

<div class="panels">
<div>

A common approach to styling forms is one we've looked at already - a CSS reset.

The reason this approach works well is that we can remove all of the default form styling in one go, and then build it back up from there.

There are some properties we'll need to remove or reset to ensure we can style our forms to match the rest of our content.

<details>
<summary>Don't Forget!</summary>

You will need to add `* { box-sizing: border-box: }` otherwise the widths of the elements will not be uniform! 

</details>

</div>
<div>

~~~css
input,
select {
    appearance: none;
    font: inherit;
    line-height: inherit;
    letter-spacing: 1px;
    padding: 0.25rem 0.5rem;
    margin: 0;
    color: inherit;
    background: #fff;
    border: 1px solid #888;
}
~~~

</div>
</div>
