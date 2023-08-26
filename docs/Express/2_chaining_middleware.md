---
title: Chaining middleware in Express.js
tags: [javascript, nodejs, express]
sidebar_label: '2. Chaining middleware'
sidebar_position: 2
---

Chaining middleware in Express refers to the process of creating a series of middleware functions that are executed sequentially. Each middleware function has the opportunity to process the request and response objects, perform some logic, and then either respond to the request or call the next middleware in the chain using the **`next()`** function.

Here's a deeper explanation of how chaining middleware works and why it's useful:

### **Structure of Middleware**

Each middleware function has the following structure:

```jsx
function(req, res, next) {
  // Middleware logic here
}
```

- **`req`**: The request object, containing details about the incoming request.
- **`res`**: The response object, used to send responses back to the client.
- **`next`**: A function that, when called, passes control to the next middleware in the chain.

### **Creating a Chain of Middleware**

Chaining is achieved by defining middleware functions in the order you want them executed, and calling **`next()`** within each middleware to pass control to the next one. Here's an example:

```jsx
app.use((req, res, next) => {
  console.log('Middleware 1');
  // [Functionality 1]
  next(); // Calls the next middleware
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  // [Functionality 2]
  next(); // Calls the next middleware
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```

### **Why Chain Middleware?**

Chaining middleware allows you to create a series of discrete, reusable functions that each handle a specific part of the request/response cycle. This has several benefits:

1. **Modularity**: Each middleware can focus on a specific task, such as logging, authentication, or data validation. This separation of concerns makes your code more organised and maintainable.
2. **Flexibility**: Middleware can be used globally across your entire app, or scoped to specific routes or router instances. This gives you fine-grained control over how requests are handled.
3. **Error Handling**: By using error-handling middleware (with the signature **`(err, req, res, next)`**), you can centralise error handling in your application. If any middleware encounters an error, it can pass it to the next error-handling middleware by calling **`next(err)`**.
4. **Custom Logic**: Middleware can be used to create custom logic that's executed at specific points in the request processing pipeline, allowing you to build complex behaviors.
