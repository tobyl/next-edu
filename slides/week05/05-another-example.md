---
title: Another example
---

<div class="panels">
<div>

Another example is a common use case on the web, the hamburger menu for pop-out navigation menus:

<img style="width: 300px;" src="../hamburger.png" />

Again, sighted users can immediately understand this from context. But how might a screen reader describe this to a visually impaired user? Without accessibility, the result might be "IMAGE, IMAGE, Premium CA".

We get a small bump here by adding an alt tag to our images:

```html
<img src="hamburger-menu.png" alt="Open navigation" />
```

</div>
<div>

But we can do much better. HTML and CSS allow us to create content and style it in a way that sighted users see one thing and visually impaired users see another.

```html
<button aria-label="Open main menu" aria-expanded="false">
  <img src="hamburger-menu.png" />
  <span class="visually-hidden">Open main menu</span>
</button>
```

There's a lot going on here, and we'll dive into all of it. But briefly, we've added a `span` tag that is hidden from sighted users via CSS, and we've added some ARIA labelling, which helps target screen readers in our code.

</div>
</div>
