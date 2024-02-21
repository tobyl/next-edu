---
title: Labels in forms
---


<div class="panels">
<div>

Labels in forms do an important job - as we can see, without them the user would have no idea what values are being set.

Forms obviously have a significant functional requirement, so we must be intentional in what we set our values to. But we must also ensure our labels are providing context and helping users too.

We must also take care in how we compose the various form elements and their labels to ensure that we are not accidentally creating invalid code. 

</div>
<div>

~~~html
<label>Your Name</label>
<input type="text" />

<input type="checkbox" />
<label>Want fries?</label>
~~~

This results in:

<label>Your Name</label>
<input type="text" />

<input type="checkbox" />
<label>Want fries?</label>

</div>
</div>