---
title: How to write good selectors
---

Writing selectors can be complex. How can we know which selector to use for any specific goal?

- The first thing we need to know is how general our selector needs to be - also known as the "scope". Are we targeting the entire page? Are we targeting every element of a specific type (eg, all header elements on the page)? One single element?

- We don't want to litter our HTML files with additional class names and IDs. Newcomers to CSS tend to add class names and IDs to every element they wish to style - this leads to bloated, overly-specific code. **Don't do this!**

- As much as possible, we don't want to set properties, then unset them and then re-set them. We want to write good global styles and then modify only as needed.

- What is the least amount of work we are able to do in order to achieve the styling we want?

