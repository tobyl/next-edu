---
order: 11
title: Linking labels to their elements
---

<div class="panels">
<div>

For general usability and accessibility, we can go one step further when adding labels to our elements, by linking them to each other.

This helps users, especially for accessibility, understand which labels go with which elements. To do this, we use an ID on the element, and the `for` attribute on the label.

</div>
<div>

~~~html

<!-- without 'for' -->
<label for=“your-name”>Your Name</label>
<input id=“your-name” type=“text” />

<!-- with 'for' -->
<input id=“want-fries” type=“checkbox” />
<label for=“want-fries”>Want Fries?</label>

~~~

</div>
</div>