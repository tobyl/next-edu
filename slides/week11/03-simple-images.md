---
title: Simple images
---

<div class="panels">
<div>

We've used images in our code, and it's fairly simple:

~~~html
<img src="images/my-img.jpg" />
~~~

Easy enough. However, there are is an inherent problem with including images on the web in this way. 

Images (except SVG images) have a native, fixed pixel resolution. While image compression has come a long way, we are still forced to choose a single size and resolution for our images.

Fortunately, there is a way that we can include multiple images in our HTML.

</div>
<div>

~~~html
<img
  srcset="
    my-img-480w.jpg 480w,
    my-img-800w.jpg 800w"
  sizes="(max-width: 600px) 480px, 800px"
  src="my-img-800w.jpg"
  alt="An example image"
/>
~~~

Here we can see that we are able to provide the `src` attribute, but we can also provide the `srcset` attribute to define multiple images and some conditional statements to determine which image is used.

</div>
</div>