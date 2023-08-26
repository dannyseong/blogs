---
title: >
  Execution Context: Lexical environment and block scop
tags: [javascript]
sidebar_label: '3. Execution Context #3'
sidebar_position: 3
---
## Scope in JavaScript
1. Global Scope: Variables defined outside any function or block.
2. Function Scope: Variables defined within a function
3. Block Scope(*introduced in ES6*): Variables defined inside a block (like inside `{}` of an if-statement).

## Understanding throuhg Examples
### Global Scope Example:
```js
var apple = "apple";
apple = "banana";
```
- You started with a variable `apple` with value "apple".
- Then you changed its value to "banana".
- There's only one `apple` in the global scope, and its value is now "banana".

### Block Scope Example with `let`
```js
var apple = "apple";
if (true) {
  let apple = "banna";
  console.log(apple); // Outputs: "banana"
}
console.log(apple); // Outputs: "apple"
```
- Inside the `if` block, you have a different `apple` variables, thanks to `let`.
- Outside the block, the original `apple` retains its value.

## Behind the Scenes: How does it work?
1. When the JavaScript engine sees your code, it prepares by setting aside space for variables (this is called "compiling").
2. For the `var` keyword, the variable is prepared in the "global execution context" or function context.
3. For the `let` keyword inside a block, the variable is managed separately in a "lexical environment".
4. This separation allows `let` and `var` to coexist and lets you have two variables with the same name without conflict.

## Deeper Dive: `let`, `var`, and Hoisting
- When JS prepares your code, it does a thing called "hoisting". This means it sets aside space for variables and functions even before it runs any code.
- The key differences:
  * `var`: Space is set aside and initialized to `undefined`.
  * `let`: Space is set aside but not initialized. Trying to use it before declaration will throw an error.
  * `Functions`: The whole function is hoisted.

## Temporal Dead Zone
This is the period where a variable has space set aside (due to hoisting) but hasn't been initialized yet. If you try to access a `let` or `const` variable in this zone, you'll get an error.

## Key Takeaways
1. **Lexical Environment**: This is like a storage component for let and const variables, especially those inside blocks.
2. **Creation vs. Initialization**: Variables are created and space is set aside during compiling, but they're given values (initialized) during execution.
3. **Stack Structure**: When you have multiple blocks (like nested if-statements), each block's variables are stacked on top of the other. When the block finishes executing, its variables are thrown away.
4. **Accessing Variables**: Depending on where and how you've declared a variable (var, let, or const), trying to access it too early might give you an error or undefined.