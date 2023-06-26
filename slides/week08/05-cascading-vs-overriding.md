---
title: Cascading vs overriding
---

It's important to note that specificity and the CSS cascade is very different from overriding CSS.

Consider the following code:

~~~css
p { color: red }

p { color: blue }
~~~

In this case there is no cascade or specificity to consider - we are simply overriding the first selector with the second. In this case, the `p` element will have the colour blue.

It's very easy in CSS to do this accidentally, but there are legitimate use cases for doing this. For example, we might have themes in our app, such as light and dark. We could do the following:

~~~html
<link rel="stylesheet" src="general-styles.css">
<link rel="stylesheet" src="light-theme.css">
~~~

The CSS from the two stylesheets will be applied in order, so if the second contains duplicate selectors they will overrride styles from the first. 
