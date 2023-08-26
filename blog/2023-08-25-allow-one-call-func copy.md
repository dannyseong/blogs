---
authors: danny
title: >
  Allow one call function: Deep dive into Closure
tag: [javascript, algorithm, closure]
---

## Problem

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

- The first time the returned function is called, it should return the same result as fn.
- Every subsequent time it is called, it should return undefined.

## Answer

```js
var once = function (fn) {
  let flag = false;
  return function (...args) {
    if (!flag) {
      flag = true;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};
```

## Takeaways

- The key idea behind this problem is to use a closure to store the state of the returned function.
- By doing this, we can keep track of whether the function has been called before and behave accordingly.
