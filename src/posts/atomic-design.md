---
title: "Atomic Design - Reflections"
date: "2020-12-31"
---

_*Disclaimer: All Credit for the Atomic Design intellectual property below goes to <a href="https://bradfrost.com/" target="blank">Brad Frost</a>. If any of this is helpful to you, go to his links which will be sprinkled throughout the article. Thanks Brad!*_

One of the greatest feelings in Software Development is when something 'clicks'. That can mean a host of things, either you understand some nuanced complication with an application and fix it. It could mean something you knew was simple but wasn't working now works because of some really, and frustrating-ly, simple solution. Sometimes though it is in the more theoretical space.

One of the things I have come across, as a result of my job, is <a href="https://bradfrost.com/blog/post/atomic-web-design/" target="blank">Atomic Design</a>. The website is <a href="https://bradfrost.com/blog/" target="blank">here</a> and the author, Brad Frost, has really taken this concept and made it pretty popular. So all thanks to him here, again, for the understanding that I believe I am at now, with much more still to gain.

First, allow me to share some background. I have been coding less than a year and I finished a bootcamp in mid-November. In the bootcamp we were taught React. So a lot of this will sound incredibly familiar if you use React or use anything that has its architecture based around components. React, and much of coding for me, follows the pattern of, 'I know this is working but I do not really know why it is working.' And that is ok. Atomic Design, even though I will be explaining it in very simple terms, was the 'why' for me when using React.

So, anyone who uses React can tell you that at its core, we build using components. What does this mean. Enter Atomic Design.

The analogy that is given is comparing code architecture to the way atoms combine to molecules then organisms and so on. This has really helped me when thinking about starting a project and building out different pieces. You could also think of atomic design in terms of legos. You have small individual pieces that are not really useful themselves, atoms. But when the lego pieces combine, they make something useful, a molecule. As those larger pieces are combined we start to get structure and form, organisms. At this point, organisms are gathered together in a templated format which is then used when creating pages.

This makes planning and styling incredibly simple. That is not saying styling, such as CSS is simple, but it helps cut down the clutter of an app if you are just making it without much of a plan. And honestly, as a beginner, it is pretty easy to just start an app and it get pretty cluttered and messy in a short amount of time.

This is where style guides can become pretty key to your app. If you have a good outline of all the things you will be using, then you know what you are going for when you are going for it. If I have a general list of buttons, when I need to add a button to a card that is in the middle section of a page, I have my list of buttons and all I have to do is a create a button 'component' that takes styles and props necessary, and then I have a reusable button component. Without this, making web apps is like building a lego structure with no brick being the same. It will be pretty off-putting.

Again, this may or may not be helpful to you but it has helped me have a really good framework for how to approach an app. The links below will be to some of the resources on this Atomic Design stuff that have been helpful.

Links:

- <a href="http://styleguides.io/" target="blank">Style Guides</a>
- <a href="https://www.figma.com/design/" target="blank">Figma</a>
- <a href="https://bradfrost.com/" target="blank">Atomic Design Website</a>
- <a href="https://atomicdesign.bradfrost.com/table-of-contents/" target="blank">Atomic Design Online e-book</a>
