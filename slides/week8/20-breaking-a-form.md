---
order: 20
title: Breaking a form
---

<div class="panels">
<div>

Let's look at a common problem that might be introduced when working with forms.

Here's an example of a simple log in form, and it might occur to us that we can simplify our form by removing the labels and using placeholder text.

<img width="550" src="../loginform.jpg" alt="Login form with and without labels" />

</div>
<div>

Much neater! However, we've introduced a couple of problems. First off, if we completely remove the labels there will be a penalty for accessibility (we might not know what that is yet).

<img width="225" style="float: left; margin-right: 2rem;" src="../placeholder.png" alt="Placeholder text disappeared" />

Secondly and arguably more importantly, because of how placeholder text works, when we begin typing we can no longer see what we should be filling in the form. 

This is a perfect example of why we must always take care when modifying default behaviour on the web.

</div>
</div>
