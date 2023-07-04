---
title: Customizing media controls
---

Similarly to forms, it is often a requirement to customize the default display of elements, or to replace them entirely with our own UI.

This is heavily dependent upon each individual use case, but the same rules apply: If you break it, it is your responsibility to fix it!

If we omit the `controls` attribute from our `audio` component, we can see that the element disappears completely. THe audio is still present on the page, but now we are able to control it via JavaScript. This means we can build our own UI to control the audio clip.
