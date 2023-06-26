---
title: RGB Colour
---

You may remember playing with paint in kindergarten, combining colours to create other colours. For quite some time, we have been able to use RGB values directly in CSS, and it works quite similarly. There are 256 "steps" for each of the primary colours, allowing us to do the following:

~~~css
rgb(255 0 0) /* pure red */
rgb(0 255 0) /* pure green */
rgb(0 0 255) /* pure blue */

rgb(0 0 0) /* solid black */
rgb(255 255 255) /* solid white */
~~~

This is a big improvement - we can much more easily predict the colour we will end up with, and unlike hexadecimal codes, we can more easily raise or lower each value with much more predictable results.