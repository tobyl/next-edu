---
title: ARIA attributes
---

<div class="panels">
<div>

ARIA stands for Accessible Rich Internet Applications, it is a set of roles and attributes that can be added to our sites and apps to increase accessibility.

Consider a progress bar in our app:

<img src="../progress-bar.png" />

Even without labeling it is immediately obvious what this progress bar is communicating. We could boost accessibility and usability for all users by adding some text labels but again, we can do much better.

</div>
<div>

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

Look at the huge boost in value for anyone not able to see the progress bar visually!

It's worth noting in this case that in some cases, we will need to modify our JavaScript as well as our HTML and CSS for accessibility (in this case to appropriately adjust the `aria-valuenow` attribute).

</div>