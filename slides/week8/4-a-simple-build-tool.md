---
order: 4
title: A simple build tool
---

In the previous example, I was able to manaually minify the code by removing spaces and line breaks, but obviously this is not scalable.

Thankfully, there are many tools we can use to automate the process. We'll use a tool called [CSSNano](cssnano.co) to do this for us.

In VS Code open the boilerplate folder, open the terminal and run the following command:

~~~bash
npm install cssnano postcss postcss-cli --save-dev
~~~

Note that running this command adds a `package.json` and `package-lock.json` file to our folder. Now run the following command:

~~~bash
npx postcss css/style.css > css/style.min.css
~~~

Voila! Our CSS has been minified, and a [source map](https://web.dev/source-maps/) was created for us too!
