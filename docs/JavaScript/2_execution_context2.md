---
title: >
  Execution Context: Call Stack
tags: [javascript]
sidebar_label: 'Execution Context #2'
sidebar_position: 2
---

## The Execution Context (EC)

When JavaScript runs, it starts with something called the `Global Execution Context (GEC)`. Think of this as the main stage where all our main actions happen. The variables here are called global variables because everyone can access them.

## What's the Call Stack?

JavaScript sometimes needs to do many things at once. Every time it starts with a new job(like a function), it creates a new context for that job.

```javascript
var apple = 10;
function total() {
  var price = 2;
  return apple * price;
}
var appleTotal = total();
console.log(appleTotal);
```

Here's a simple breakdown:

1. JavaScript first sets up the main stage, the GEC, with `apple`, `appleTotal`, and the `total` function.
2. It starts with the apple variable.
3. When it sees `total()`, it makes a new context just for that function.
4. This new context is like a new stage placed on top of the main stage.

## Thinking of the Call Stack like a Stack of Books

Imagine you have a pile of books. The Call Stack is like that pile. You always read the top book first. When a function starts, a new book (context) is placed on top. When the function finishes, you remove the top book.

Inside our total() function:

1. It sets a price.
2. It multiplies this price with the apple from the main stage.
3. After that, it gives back the result to `appleTotal`.
4. Then, it's done and removed from the pile of books.
5. The main stage continues and shows the `appleTotal`.

:::note

- **The JavaScript engine does not compile codes in a function until the function is called.**
- When a function is compiled, a new execution context is created and put at the top of the stack.
- All execution contexts are managed in a stack structure. The process happens from the top of the stack to the bottom.
- The two-step process, compiling and execution, happens whenever a function is called.
  :::
