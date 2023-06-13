---
order: 14
title: Tailwind CSS
---

There is another CSS framework called **Tailwind CSS** that takes the concept of utility classes even further.

Like Bootstrap, we must first call their CSS (the docs state we must use a script tag):

~~~html
<script src="https://cdn.tailwindcss.com"></script>
~~~

After that, we can start using the Tailwind utility classes:

~~~html
<div class="flex gap-x-4">
    <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">Dries Vincent</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">dries.vincent@example.com</p>
    </div>
</div>
~~~

<small>[The Tailwind CSS documentation](https://tailwindcss.com/docs/)</small>