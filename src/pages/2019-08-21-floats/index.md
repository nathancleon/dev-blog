---
path: "/fantastic-floats-and-when-to-use-them"
date: "2019-08-21"
title: "Fantastic Floats and When To Use Them"
description: "Bad news comes, don't you worry even when it lands. Good news will work its way to all them plans."
tags: ["css"]
excerpt: "A preview of my first post"
---

> Bad news comes, don't you worry even when it lands
>
> Good news will work its way to all them plans
>
> We both got fired on, exactly, the same day
>
> Well, we'll float on, good news is on the way.
>
> <footer>Modest Mouse</footer>

If you're at all unfamiliar with floats, it's important to start with the knowledge that a float is a positioning property in CSS. A great article regarding its history and everything you want to know about floats can be viewed [here](https://css-tricks.com/all-about-floats/), but in summary, floats were used back in the days of print design to position an image or an illustration to the left or the right of a text block.

`float` has four values that can be used:

```css
.element-1 {
  float: right;
}

.element-2 {
  float: left;
}

.element-3 {
  float: inherit;
}

.element-4 {
  float: none;
}
```

The values themselves are mostly self explanatory: floating **_left_** moves the element to the left of adjacent content, floating **_right_** moves the element to the right of adjacent content, **_inherit_** assumes the float position of its parent element, and **_none_** is the default setting where a float is not explicitly declared. The natural flow of content in HTML is vertical, but floats allow you to put block level elements next to each other to create a horizonal flow of content instead of the default vertical flow.
Now, a problem surfaces in floats that forces the elements after elements with a floated position to move up adjacent to the floated element as seen below.

<iframe height="308" style="width: 100%;" scrolling="no" title="yLBpQLv" src="//codepen.io/nathancleon/embed/yLBpQLv/?height=308&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/nathancleon/pen/yLBpQLv/'>yLBpQLv</a> by Nathaniel Collins
  (<a href='https://codepen.io/nathancleon'>@nathancleon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To force the yellow block footer to position itself below the two floated elements, you need to use a CSS property called `clear`. By setting the value of the element to `clear: both`, it removes the element from the default pull of the other floated elements.

<iframe height="265" style="width: 100%;" scrolling="no" title="gOYoQgL" src="//codepen.io/nathancleon/embed/gOYoQgL/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/nathancleon/pen/gOYoQgL/'>gOYoQgL</a> by Nathaniel Collins
  (<a href='https://codepen.io/nathancleon'>@nathancleon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

_Both_ is the most commonly used value for the `clear` property, but `clear` can also use three other values. Those values are `left`, `right`, and `none`. _None_ is the default value for the clear property, and I encourage you to experiment with clearing _left_ and _right_.

A problem in using **floats** and **clears** that is the cause of many headaches is the _"collapsing"_ problem. This occurs when floated elements are not cleared, and when a container is filled with only floated elements that are not cleared before the container is closed. It's incredibly important to clear the floats after the floated elements, but before the container is closed.

One solution is adding an empty div after the floated elements in the container like so:

```html
<div class="container">
  <div style="float:left">content</div>
  <div style="float:right">content</div>
  <div style="clear:both"></div>
</div>
```

The most commonly used solution, however, is to apply what we call a **clearfix** to the container by using the `:after` psuedo element.

```css
.clearfix:after {
  content: "";
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
```

Adding this class to the container achieves the same result as the empty div, and since the height is set to 0 and the visibility is hidden, it should have no effect on your layout.

So now comes the question, when do you use floats? Use floats when you want to position block elements to the left or right of some content, or to place elements adjacent to each other. Make sure to use `clear: both` or a **clearfix** to prevent the parent container from collapsing and unexpected changes in your layout.

There are now more modern and easier ways to set up the layout that you want by using [flexbox](https://cssreference.io/flexbox/) or [css grid](https://cssreference.io/css-grid/). These can be used together or separately, depending on what you are trying to accomplish, and are generally much easier to work with than using floats. **_Buuuut_**, depending on your browser support needs, these may not work for you or your site. Be sure to checkout [caniuse.com](https://www.caniuse.com) before deciding what to use to build your layout.

If you want more in depth information on how floats work I really recommend reading [this article](https://internetingishard.com/html-and-css/floats/) by `internetingishard`.

Happy floating!

![hedgehog floating in the water](https://media.tenor.com/images/d320022232cbe60fb7f342be86806cfa/tenor.gif)
