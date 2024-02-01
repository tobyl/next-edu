---
title: A simple example
---

<div class="panels">
<div>

A simple example that helps us understand how important accessibility is might be uppercase words in HTML.

When we are provided content, we might receive some text that includes a product name with uppercase letters:

```html
<p>You'll love our SUPER mario bros game!</p>
```

Sighted users will read this and intuitively understand what is happening here. But a screen reader (a tool commonly used by visually impaired users) might read this as "shouting", or as an acronym, in which case it will read out each letter one by one.

</div>
<div>

The problem and solution are quite simple. Is the uppercasing here part of the content (like an acronym) or styling? In this case, I would argue that the uppercase is styling, not content.

```html
<p>You'll love our <span>SUPER</span> mario bros game!</p>
```

```css
span { text-transform: uppercase; }
```

We get a double win here - visually impaired users get a better experience, and we've perfectly separated styling from content.

</div>
</div>
