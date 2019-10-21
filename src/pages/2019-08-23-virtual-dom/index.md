---
path: "/what-is-the-virtual-dom"
date: "2019-08-23"
title: "What is the Virtual DOM?"
description: "Deciphering the virtual dom in React. What if I told you... that you could do things differently?"
tags: ["js", "react"]
excerpt: "A preview of my third post"
---

> What if I told you... that you don't have to do a complete re-render with every update?
> ![Morpheus from the movie The Matrix in frame meme](https://imgflip.com/s/meme/Matrix-Morpheus.jpg)

The React [documentation](https://reactjs.org/docs/faq-internals.html) describes the "Virtual DOM" as:

> "A programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation."

What React is essentially doing is identifying the differences between the current DOM and the UI updates you are developing in your application, and only rendering the updated UI instead of refreshing or re-rendering the entire page with every change made to the UI. Without a "Virtual DOM", you would need to manipulate the DOM directly, and in doing so you would often update the DOM using javaScript much more than what is necessary. For example, in updating a to do list only one item would change but using direct DOM manipulation the entire list would be rebuilt with every update, instead of only changing or adding the one item.

Essentially what happens is that a snapshot is taken of the DOM when HTML is rendered to the page, then when state or UI changes are made, React compares the initially rendered DOM / the actual DOM and sorts out what has been updated from what existed previously, and then finally communicates the updates to the real DOM with **only** what was updated. This is why the Virtual DOM is much faster than DOM manipulation because things don't get drawn immediately onscreen with every update.
