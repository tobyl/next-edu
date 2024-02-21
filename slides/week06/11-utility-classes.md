---
title: Utility classes
---

~~~html
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
    ...
</ul>
~~~

If you're planning to use Bootstrap, you'll need to refer to the documentation quite often, at least while you're learning the basics. Bootstrap leverages a concept called "utility classes" in order to provide a wide range of available functionality.


<div class="panels">
<div>
For example, let's say we have a box to which we'd like to add a margin. We can do the following:

~~~css
.box-element {
    margin-top: 20px;
    margin-right: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
}
~~~

However, we've now coupled the `box-element` in our HTML with our `box-element` class on CSS.
</div>
<div>
Alternatively, we can use utility classes to create general purpose styles that we can apply in our HTML:

~~~css
.mt-20 { margin-top: 20px }
.mb-20 { margin-bottom: 20px }
.mr-10 { margin-right: 10px }
.ml-10 { margin-left: 10px }
~~~

~~~html
<div class="mt-20 mr-10 mb-20 ml-10">
    ...
</div>
~~~
</div>
</div>
