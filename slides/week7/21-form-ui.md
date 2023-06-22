---
order: 21
title: Form UI
---

<div class="panels">
<div>

The phrase "User Interface" refers to the design and functionality of a page or specific piece of functionality. But how might this be relevant to forms, and what options do we have to improve the UI for our users?

<img width="250" src="../toggle.png" alt="Login form with and without labels" />

One example might be if we were building functionality in our app that could be turned on or off (think of a typical VPN app here protection is enabled or disabled). How can we achieve this in our form? After all, there is no "on/off" button for use in our forms.

</div>
<div>

The most suitable element would be the checkbox input, but the default UI for a checkbox is that it can be checked or unchecked. The solution is to use [pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) to override (or replace) the default UI.

[Bootstrap does provide this functionality](https://getbootstrap.com/docs/5.1/forms/checks-radios/#switches), but it's relatively easy to override elements in this way, so long as we are careful - we should still check our form to ensure that we are not losing any usability or accessibility features.

</div>
</div>
