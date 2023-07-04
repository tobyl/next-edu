---
title: The alpha channel
---

With `rgb` colour in CSS, we get an additional benefit - the ability to specify a level of transparency. This is what is referred to as the "alpha channel".

~~~css
rgb(0 0 0 / 0.5) /* pure black with 50% opacity */
rgb(0 0 0 / 0.9) /* pure black with 10% opacity */

rgba(0 0 0 / 0.5) /* adding the 'a' is now legacy syntax */
~~~

This allows us to do all kinds of cool stuff in CSS. For example, we can overlay a colour on top of an image and give the image a tint.