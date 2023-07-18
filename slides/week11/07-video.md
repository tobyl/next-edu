---
title: Video on the web
---

The `video` element works similarly to the `audio` element. There is one major difference though, because there are many types of video formats that have varying support across browsers and platforms.

~~~html
<video controls width="250">
    <source src="/media/my-video.webm" type="video/webm">
    <source src="/media/my-video.mp4" type="video/mp4">
</video>
~~~

As we can see, we use the `video` element to determine the player size, which is far more relevant here than with `audio`, and then provide a `source` child element for each video format.

