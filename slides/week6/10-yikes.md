---
order: 10
title: Yikes! What's going on??
---

There's a lot going on in our code, and this is one of the big downsides of Bootstrap. As we can see, this is "just HTML". We have a `div` wrapping all of our code, a `ul` and then some other elements you'd expect in a menu or nav. But the tricky part is the class names - we have to compose our class names along with our HTML elements, otherwise the component will not display correctly in the browser.

Let's take a closer look at some of the code.

~~~html
<div class="collapse navbar-collapse" id="navbarExample01">
    ...
</div>
~~~

For the opening `div` tag, we first have to set this to take on the styles from Bootstrap that create the look and feel for the navbar. We also set the class name `collapse` by default, which can be toggled later via JavaScript.

~~~html
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
    ...
</ul>
~~~

Next for the `ul` we take a similar action by adding the `navbar-nav` class name. But what is that string of shorter class names? For that we'll need to check out the Bootstrap docs!

<small>[The Bootstrap documentation](https://getbootstrap.com/docs/5.3)</small>