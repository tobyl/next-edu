---
title: Rule 4 - Be specific (but not too specific)
---

~~~css
main a { color: blue }
~~~

While this might seem contradictory, there is a "goldilocks" perspective when it comes to CSS. In the above example, we are setting all links inside `main` to have the colour blue. Obviously this is very dependent upon the use case, but setting a property very generally like this will almost always lead to having to unset or override the rule down the line.

Something else I have harped on about for the entirety of the semester is to think in components. Your page most likely has a few base components, such as header, footer, navigation etc. A good strategy is to target these first and foremost in your CSS.

I often reinforce this in my file structure, by creating individual CSS files for each component:

~~~css
@import 'header.css';
@import 'footer.css';
@import 'navigation.css';
@import 'sidebar.css';
~~~