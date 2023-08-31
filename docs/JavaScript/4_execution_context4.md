---
title: >
  Execution Context: Lexical environment and block scop
tags: [javascript]
sidebar_label: 'Execution Context #4'
sidebar_position: 4
---

In JavaScript, the execution context governs the environment in which code is executed and how variables are accessed. There are three curucial aspects to understand how it works: scope chain, closure, and `this` keyword.

## Scope Chain

### What is Scope?

In JavaScript, a scope is an environment where variables and functions live. There are three types of scope:

1. Global Scope
2. Function Scope
3. Block Scope (introduced with `let` and `const` in ECMA2016)

### Scope Chain

When a variable is used, JavaScript engine looks for it in the current scope. If it doesn't find it, it goes up to the parent scope, and then its parent and so on, until it reaches the global scope. This hierarchical linkage of scopes is known as the scope chain.

```js
var globalVar = 'I am global';

function outerFunction() {
  var outerVar = 'I am outer';

  function innerFunction() {
    var innerVar = 'I am inner';
    console.log(globalVar); // Output: "I am global"
    console.log(outerVar); // Output: "I am outer"
    console.log(innerVar); // Output: "I am inner"
  }

  innerFunction();
}

outerFunction();
```

## Closure

A closure is a function bundled together with its lexical environment. Closures allow JavaScript programmers to write better, more concise, and modular code.

### How to Create a Closure?

A closure is created every time a function is defined within another function.

```js
function outer() {
  var outerVar = 'I am from outer function';

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

const myClosure = outer();
myClosure(); // Output: "I am from outer function"
```

### Use Cases

- Data Privacy
- Function Factories
- Dynamic Function Generation

## The `this` Keyword

In JavaScript, the this keyword refers to the object on which a method is invoked. It has different values depending on where it is used.

### Global Context

In a global context, or within a function but not in strict mode, this refers to the global object.

```javascript
console.log(this === window); // Output: true
```

### Function Context

Within a function, the value of this depends on how the function is called.

```javascript
function checkThis() {
  console.log(this);
}

checkThis(); // Output: Window object (or global object in a non-browser environment)
```

### Object Method

When a function is called as an object method, this refers to that object.

```javascript
const myObject = {
  name: 'John',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

myObject.greet(); // Output: "Hello, my name is John"
```

### Class Context

In a class constructor and class methods, this refers to the instance of the class.

```javascript
class MyClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const instance = new MyClass('John');
instance.greet(); // Output: "Hello, my name is John"
```
