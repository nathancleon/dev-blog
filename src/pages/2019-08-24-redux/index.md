---
path: "/what-is-redux-what-is-thunk"
date: "2019-08-24"
title: "What is Redux? What is Thunk?"
description: "A journey into what Redux is, when to use it, how to apply middleware, what a thunk is, and what redux-thunk is."
tags: ["js", "react", "redux"]
excerpt: "A preview of my first post"
---

When learning about React it's not uncommon to come across **Redux**. So what exactly **_is_** Redux? According to the Redux [documentation](https://redux.js.org/),

> Redux is a predictable state container for JavaScript applications. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

Redux essentially has **three** parts: **the store**, **reducers**, and **actions**.

Here is what the Redux **store** might look like in your application:

```javascript
import { createStore } from "redux"
import reducer from "./reducer"

const store = createStore(reducer)
```

You can also combine reducers into one store. Here's what that looks like in one of my applications:

```javascript
import { createStore, combineReducers, applyMiddleware } from "redux"
import UserReducer from "./UserReducer"
import thunk from "redux-thunk"
import JournalReducer from "./JournalReducer"

const rootReducer = combineReducers({
  user: UserReducer,
  journal: JournalReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
```

Here we have a **_user reducer_** that holds data regarding which user is logged in and a **_journal reducer_** which contains the specific user's journal entries. I'll get to what **thunk** does and what that means in a bit.

The **store** in an application that uses Redux is what holds the **_application state_**. Redux has only one store for the entire application and you can access the state, update the state, subscribe (add a listener), or unsubscribe (remove the listener). Subscribing to the store can allow you to get the current state or run listener methods each time the application state in the store is updated.

**Reducers** are [pure functions](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976) that take an initial state, perform an action, and return a new state. Often you will see [switch](https://www.w3schools.com/js/js_switch.asp) being used in the reducer. Basically the reducer, when called, looks through and identifies which action type is being passed through, and then dispatches the action tied to that action type.

```javascript
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload.value
    case "SUBTRACT":
      return state - action.payload.value
    case "RESET":
      return 0
    default:
      return state
  }
}
```

The example above from [gistia](https://www.gistia.com/beginners-guide-redux/) runs through a basic add/subtract/reset model of a reducer.

Below are a couple of examples of actions that can be called. These actions trigger the reducer, which then returns the state or updated state based on the action type declared above.

```javascript
const getValue = () => {
  const value = document.getElementById("input-value").value()
  return value;
}

const subtract = () =>; ({
  type: 'SUBTRACT',
  payload: { value: getValue() },
});

const reset = () => ({ type: 'RESET' });
```

As you can see, the **_subtract_** action passes the `'SUBTRACT'` action type to the reducer along with the input `value` as its payload. Once this data is passed through the reducer, the case is triggered and the updated state is returned and the application store is updated.

It's important to note that **Redux** is framework/library independent. It can be used for state management in Vue, Angular, React, or any other UI layer.

Now what is **thunk**?

> A **thunk** a concept in programming where a function is used to delay the evaluation/calculation of an operation. **_(source: [alligator.io](https://alligator.io/redux/redux-thunk/))_**

Actions in Redux are dispatched **synchronously** by default, which can be problematic when communicating with an external API. Redux allows for middleware to be used to get around this and perform asynchronous actions. Two of the most popular middleware libraries that solve this issue are [Redux Thunk](https://github.com/reduxjs/redux-thunk) and [Redux Saga](https://github.com/redux-saga/redux-saga). Let's go back to the example Redux store that I used for one of my applications.

```javascript
import { createStore, combineReducers, applyMiddleware } from "redux"
import UserReducer from "./UserReducer"
import thunk from "redux-thunk"
import JournalReducer from "./JournalReducer"

const rootReducer = combineReducers({
  user: UserReducer,
  journal: JournalReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
```

Here I added the middleware **thunk** from `redux-thunk` so that I could make _CRUD_ requests to my journal API and update the application state asynchronously. For more detailed information on how to use `redux-thunk` in your application, I recommend reading [this article](https://alligator.io/redux/redux-thunk/).

References: [redux documentation](https://redux.js.org/), [gistia.com](https://www.gistia.com/beginners-guide-redux/), [logrocket.com](https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/), [alligator.io](https://alligator.io/redux/redux-thunk/).
