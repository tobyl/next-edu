---
title: More build tools
---

Minification is just the beginning. Here are some other examples of build tools we can use to enhance and automate our development experience.

### Transpiling

Transpiling is the process of converting CSS and JavaScript automatically based on a predetermined set of rules. For example, we might want to use [CSS Nesting](https://caniuse.com/css-nesting) but it's not supported in all browsers yet. With a transpiler, we can write nested CSS and the transpiler will convert it to un-nested CSS!

### Linting

<div class="clearfix">
    <img width="500" style="float: left; margin-right: 2rem;" src="../stylelint.webp" />
    <p>Linting is a fantastic tool, especially for new developers. If we setup linting in our project, when we run our build tool we will get helpful feedback in our text editor when we write invalid code. This is especially useful for CSS, because we will never see an error on screen if we write problematic CSS code.</p>
</div>


### Concatenation

Concatenation means to merge two or more files together. This is especially useful when using a framework like Bootstrap, but it can be useful for developers to break their code down into multiple files too. For example, you might have a `typography.css` file, a `layout.css` file and a `utilities.css` file.