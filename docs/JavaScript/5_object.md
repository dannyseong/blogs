---
title: Object
tags: [javascript]
sidebar_label: '5. Object'
sidebar_position: 5
---

## Grouping Related Properties and Methods Together

Objects are a fundamental concept in JavaScript that allow us to organise and encapsulate related **data** and **functionality**. An object combines attributes, known as `properties`, and actions, known as `methods`, into a single unit. This bundling of closely related state and behavior helps us model real-world entities more effectively.

There are different ways to create objects in JavaScript:

### 1. **Object Literal**
The simplest way to create an object is by using the `object literal notation`. This involves defining the object's properties and methods within curly braces.
```js
let apple = {
  name: "apple",       // Property
  "hello-bye": "🖐",
  0: 1,
  ["hello-bye1"]: "🖐", // Property with dynamic key
  display: () => {    // Method
    console.log("🍎");
  },
};
```
### **2. Using Constructors** 
Objects can be created using constructor functions like `new Object()` or custom constructors. This is particularly useful when you need to create multiple objects with the same structure.

### **3. Using `Object.create()`** 
This method allows you to create a new object based on an existing object as its prototype.

- Keys in objects can be of various types, including strings, numbers, words, and Symbols, while values can be primitive types, other objects, or functions.

- Accessing properties of an object can be done using dot notation or bracket notation:

```js 
console.log(apple.name); // Using dot notation
console.log(apple["hello-bye1"]); // Using bracket notation
```

- You can dynamically add new properties to an object:

```js 
apple.emoji = "🏓"; // Adding a new property
console.log(apple.emoji); // Accessing the new property
```

- And, if needed, properties can be removed from an object:

```js
delete apple.emoji; // Removing a property
console.log(apple); // The property 'emoji' is no longer in 'apple'
```
