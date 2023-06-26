---
title: A more complex example
---

<div class="panels">
<div>

Another thing to note from the previous example is that we only specified `0%` and `100%` in our keyframes block. We can add as many steps as we like. 

Let's look at a more complex example. 

<div class="anim-example">
    <div></div>
</div>

**Note:** We do not need to specify what happens at `100%` because it is the default state shown at `0%`.

</div>
<div>

~~~css
@keyframes motion {
  0% {
    left: -10px;
    top: -10px;
  }
  25% {
    left: calc(100% - 10px);
    top: -10px;
  }
  50% {
    left: calc(100% - 10px);
    top: calc(100% - 10px);
  }
  75% {
    left: -10px;
    top: calc(100% - 10px);
  }
}
~~~

</div>
</div>