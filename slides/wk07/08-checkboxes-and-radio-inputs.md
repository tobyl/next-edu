---
title: Checkboxes and radio inputs
---


<div class="panels">
<div>

Checkboxes and radio inputs are visually similar, but behave differently for input.

A checkbox is typically a boolean field - true or false, with the default value being false.

A radio input has a value of null until the user makes a choice.

Note that by default we only see the inputs - that's because we haven't added any labels!

</div>
<div>

~~~html
<input type=“checkbox” />

<input type="radio" value="First" />
<input type="radio" value="Second" />
<input type="radio" value="Third" />
~~~

This results in:

<input type=“checkbox” />

<input type="radio" value="First" />
<input type="radio" value="Second" />
<input type="radio" value="Third" />

</div>
</div>