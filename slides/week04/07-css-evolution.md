---
title: The evolution of CSS
---

CSS is no longer simply a way to change the size and colour of elements, it is quickly becoming a way to describe to browsers how best to display content. A good example of this is a recent change to how we add spacing to our content:

```css
margin-top: 1rem;
margin-left: 1rem;
margin-right: 1rem;
```

Is moving towards:

```css
margin-block: 1rem;
margin-inline: 1rem;
```

This simple change is actually incredibly powerful. Consider languages like Japanese which reads top to bottom, or Arabic which reads right to left. For these languages, thinking about "inline" vs "block" helps us write CSS that more naturally targets all languages.
