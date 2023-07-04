---
title: A simple example
---

<div class="panels">
<div>

We create our own HTML, with the audio clip included inside. As you can see, this is just regular HTML, so we can easily style this however we choose.

The JavaScript is quite simple - we are manually tracking whether the audio is playing or not, and calling `audio.play()` or `audio.pause()` accordingly.

The built-in browser APIs for manipulating media via JavaScript have become extremely powerful. For example, we are eable to see how much of a media clip has buffered in JavaScript.

</div>
<div>

~~~html
<div id="audio-player">
  <audio id="audio-clip" controls src="/media/my-audio-clip.mp3"></audio>
  <p>Audio Player</p>
  <button id="play-pause"></button>
</div>
~~~

~~~js
const audio = document.querySelector('#audio-clip')
const playPauseBtn = document.querySelector('play-pause')
let paused = true

playPauseBtn.addEventListener('click', () => {
  paused ? audio.play() : audio.pause()
  paused = !paused
})
~~~

</div>
</div>