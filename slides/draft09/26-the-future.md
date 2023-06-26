---
title: The future
---

Confession time: HSL technically isn't modern CSS, it's just a more modern approach than using hex codes. But it's very functional, and gives us a pretty solid base to work from.

As time and technology progresses though, we will want to check back in to make sure we're getting the most out of our choices for handling colour on the web.

We can actually already see the future of colour in CSS today. The new `color()` function in CSS will provide access to a wider range of colour gamuts, accessible by name.

~~~css
/* the Display-P3 colour space */
background: color(display-p3 1 0.5 0);

/* the Rec2020 colour space */
background: color(rec2020 34% 58% 73% / 50%);
~~~

The [Display p3](https://developer.chrome.com/articles/high-definition-css-color-guide/#display-p3) colour space offers around a 50% wider range of colours. The newer [Rec2020](https://developer.chrome.com/articles/high-definition-css-color-guide/#rec2020) colour space offers around 50% more than Display p3!






