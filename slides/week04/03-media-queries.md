---
title: Media queries
---

<div class="panels">
<div>

At the heart of responsive design are media queries. Media queries allow us to conditionally apply styles to our page depending upon browser width (among other factors).

While there is no hard limit to the complexity we can achieve with media queries, a common approach has always been that content sits in a single column on mobile devices and is then reflowed into two or more columns on wider screens. 

</div>
<div>

```css
header {
    height: 200px;
}

/* Media query */
@media (min-width: 600px) {

    header {
        height: 400px;
    }

}
```

</div>
</div>