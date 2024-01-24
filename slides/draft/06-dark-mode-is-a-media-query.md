---
title: Dark mode is a media query
---

<div class="panels">
<div>

Browser size is a very obvious example of a media query, but there are many other queries we can write. Another great example is dark mode.

It has become extremely common for users to choose the colour scheme on their device or specific apps. In a very short period of time, any website without dark mode is broken for users who change their colour scheme. 

</div>
<div>

```css
body {
    background-color: white;
    color: black;
}

@media (prefers-color-scheme: dark) {
    body {
        background-color: black;
        color: white;
    }
}
```

</div>
</div>
