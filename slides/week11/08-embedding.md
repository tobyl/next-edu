---
title: Embedding media
---

It's important to note that there is a big difference between including media on your site with the `audio` and `video` elements versus embedding from a third party site, such as YouTube. 

When viewing a video on YouTube, clicking the "embed" option will provide you with code similar to this:

~~~html
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;" allowfullscreen></iframe>
~~~

The difference here is that end users will be viewing content stored on YouTube's server via your site or app - the `iframe` element is used here as a way to display content from another site. Video streaming can be an expensive cost, so it's worth considering embedding over serving the content yourself!

