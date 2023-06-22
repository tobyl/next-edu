---
order: 6
title: The humble browser
---

While we can easily find some amazing tools to make our lives easier, it's important not to forget about the humble browser.

We've used the dev tools to inspect our code, but Chrome's dev tools have a ton of hidden power that we can tap into before we turn to more complex solutions.

Let's look at a simple example. Add the following code to your CSS file (note the intentional misspelling):

~~~css
p {
    colour: green;
}
~~~

<div class="clearfix">
    <img width="250" style="float: left; margin-right: 2rem;" src="../invalidcss.png" />
    <p>When we refresh the browser, obviously our CSS will not work, but it's not immediately clear why. However, when we check dev tools we can see that the property is invalid.</p>
    <p>We can also hover over the yellow warning icon and we will see the reason, "Unknown property name".</p>
</div>

