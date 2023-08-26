# When, Where, and How to use the arrow function syntax!!

Arrow functions were first introduced in ES6 (ECAMAScript 2015). They provide a concise and convenient syntax for defining functions.

The traditional function for adding two numbers can be given as:

```javascript
// function expression
const add = function (a, b) {
  return a + b;
};
// Arrow function
const add = (a, b) => a + b;
```

## Lexical `this` : One of the best thing that arrow function syntax introduced to us

- Arrow function has lexical `this` binding, i.e they inherit the `this` value of the enclosing scope. This can be particularly useful when working with `event listener` or `callback functions`, where the `this` value can be unpredicatable.
- For example in the following example the `arrow function` used as the event listener for the click event inherits the `this` value of the enclosing scope (which is the global window object), rather than having its own this value like a traditional function would.

```javascript
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log(this); // logs the window object, not the button
});
```

## When not to use the Arrow function syntax:

- `Arrow function` cannot be used as contructors to create new objects, because they do not have their own `this` value. If you need to create objects using the `new` keyword, you will need to use a traditional function instead.
- `Arrow function` cannot be used as generator functions that use the `yield` keyword to return multiple values over time. If you need to use the `yield` keyworld, you will need to use a traditional function instead.
