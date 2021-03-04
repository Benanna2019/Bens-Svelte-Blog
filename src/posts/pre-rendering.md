---
title: "Two Forms of Pre-rendering"
date: "2020-11-20"
---

_\*I left both this post and the 'Static Generation v.s Server-side Rendering' post because personally, they are fascinating._

_Note: This is originally a pre-rendered blog post from Next JS. I have added my own thoughts at the end of this blog_

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

Static Generation is pretty incredible. In the the coding bootcamp that I just finished, this was one of the problems we faced as our apps became more and more complex, that of page loading/data fetching. Static Generation makes this so quick and clean campared to having to load the HTML every time. It is a very nice feature of any app/website, especially when it is your own, when navigating to a different page is quick by design. It provides a much nicer user experience.
