---
title: Audio on the web
---

Including an audio clip on the web is very simple:

~~~html
<audio controls src="/media/my-audio-clip.mp3"></audio>
~~~

This will result in: 

<audio controls src="/media/my-audio-clip.mp3"></audio>

Note that we include the `controls` attribute to ensure that we see a mini audio player UI in the browser. Just like forms, the UI displayed is dependent upon the browser and OS.

Also like form elements, there are additional attributes we can add, such as `loop`, `muted` and `controlslist` (to provide a list of controls that should be included). 