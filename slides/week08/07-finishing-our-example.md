---
title: A common pitfall
---

To match the image mockup, we'll need some more classes. Again, it's important to note that the same solution in CSS would have required these fixes. Note that the `grow` class on the `<main>` element ensures that the main element will grow to fill the available vertical space.

~~~html
<html class="h-full">
    <body class="min-h-full flex flex-col">
        <header class="bg-red-200">
            header!
        </header>
        <main class="grow bg-blue-200">
            main!
        </main>
        <footer class="bg-red-200">
            footer!
        </footer>
    </body>
</html>
~~~
