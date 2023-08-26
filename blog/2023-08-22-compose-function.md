---
authors: danny
title: >
  Understanding the Compose Function in JavaScript
tag: [javascript, algorithm, compose]
---

In functional programming, composing functions is a powerful concept that allows the creation of new functions by combining multiple functions together. The compose function in JavaScript takes an array of functions and returns a new function that applies these functions from left to right on an input. Let's explore how this works in detail.

```js
var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return functions.reduceRight(function (prevFn, nextFn) {
    return function (x) {
      return nextFn(prevFn(x));
    };
  });
};
```

## Code Breakdown

### 1. Identify Function

If the input array `functions` is empty, the function returns an identity function:

```js
if (functions.length === 0) {
  return function (x) {
    return x;
  };
}
```

The simply returns the input `x` unchanged.

### 2. Composing Functions

If the array is not empty, the `reduceRight` method is used:

```js
return functions.reduceRight(function (prevFn, nextFn) {
  return function (x) {
    return nextFn(prevFn(x));
  };
});
```

Here's how it works:

1. **Starting from the end**: Since `reduceRight` goes from the end of the array to the beginning, it starts with the last function.
2. `Composing step-by-step`: In each step, it takes the current function (nextFn) and the composition of the previous functions (prevFn), and combines them into a new function.
3. `Final Result`: The final result is a new function that applies all the functions in the functions array from left to right to an input x.

## Example

Let's take a closer look at how compose([f, g, h]) would be evaluated with the above compose function. We'll break down each step:

### Start

`reduceRight` begins at the last element of the array, which is `h`. At this stage, `prevFn` is assigned `h`, and `nextFn` is assigned `g`.

### First Step

A new function is created. This function takes an input `x` and calculates `g(h(x))`. The reason `g` is applied after `h` is due to the right-to-left evaluation of reduceRight.

### Second Step

Now, `prevFn` is the function that calculates `g(h(x))`, and `nextFn` is assigned `f`. A new function is again created, and this function takes an input `x` and calculates `f(g(h(x)))`.

### Conclusion

All functions have now been processed, and the final result is a new function that calculates `f(g(h(x)))`. If you pass an input value to this composed function, it will apply f, g, and h to that input in sequence.

The `compose` function is a fascinating construct that leverages the power of functional programming. By understanding how it builds a chain of function calls, you can use it to create more modular and maintainable code. Whether you're working with a series of transformations, validations, or any other sequential operations, `compose` helps you structure them in a clean and understandable way.
