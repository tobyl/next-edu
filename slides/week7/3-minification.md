---
order: 3
title: Minification
---

A great example of a change we might want to make to our CSS before pushing to production is minification.

Consider the following tiny code sample:

~~~css
body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
    color: #444;
}
~~~

Saved as a CSS file, this file is 136 bytes. This is what the minified version might look like:

~~~css
body{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:300;font-size: 1.25rem;color: #444;}
~~~

After minification, this file is now only 109 bytes - that's a saving of 20% on a single block of CSS!