---
path: "/this-is-the-loop-that-never-ends"
date: "2019-08-22"
title: "This is the loop that never ends"
description: "SomeBODY once told me the world is gonna roll me. I ain't the sharpest tool in the shed."
tags: ["js", "recursion"]
excerpt: "A preview of my second post"
---

> **Well the years start coming and they don't stop coming and they don't stop coming and they don't stop coming and they don't s—** ![patrick open mouth recursion loop](https://media2.giphy.com/media/xlTwaFb20TVjW/source.gif)

One concept that often comes up in programming is the concept of **recursion**. To quote [this article](https://www.sitepoint.com/recursion-functional-javascript/) from Sitepoint, **_"recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result"_**. So what does this look like? The most common example used for recursion in javaScript is a **factorial** function.

```javascript
let factorial = number => {
  if (number <= 0) return 1 //exit or terminal condition
  return number * factorial(number - 1)
}
factorial(5) // returns 120
```

You can also use a `ternary operator` to evaluate this expression in one line.

```javascript
let factorial = number => (number <= 0 ? 1 : number * factorial(number - 1))
factorial(5) // returns 120
```

So what is happening is that when the function is called for the first time, unless the **input** is less than or equal to **0**, it will return `number * factorial(number - 1)`, in other words, the **input** times the **_factorial function itself_** with `input - 1` as its argument. It will continue calling itself until the **exit** or **terminal** condition is met, as noted in the above examples as comments next to the conditional statements.

When using recursive functions you want to make sure that the **terminal** condition is clear and spend some time thinking about what the function will look like each time it is called to prevent running into an infinite loop. Be like Skeletor.
![skeletor exiting through a mirror and then breaking the mirror](https://media.giphy.com/media/fjYDN5flDJ756/giphy.gif)
