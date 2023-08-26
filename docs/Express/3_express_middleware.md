---
title: Key Features of Middleware in Express
tags: [javascript, nodejs, express]
sidebar_label: '3. Features of Middleware'
sidebar_position: 3
---

Express.js is a popular web application framework for Node.js, and one of its core concepts is middleware. Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the **application’s request-response cycle.** Let's dive into the details and explore the features, usage, and some examples of middleware in Express.js.

## What is Middleware?

Middleware functions can execute any code, make changes to the request and response objects, end the request-response cycle, or call the next middleware function in the stack. They are like building blocks that you can stack together to handle different parts of the request processing.

## Key Features of Middleware

1. **Order Matters**: Middleware functions are executed sequentially, so the order in which they are defined matters.
2. **Multiple Registration**: You can register multiple middleware functions for a specific route, and they will be executed in the order they are defined.
3. **Next Function**: The `next` function is used to pass control to the next middleware function. If it's not called, the request will be left hanging.
4. **Error Handling**: You can define error-handling middleware to catch and process errors.
5. **Response or Next**: Always send a response or call next to avoid freezing the middleware chain.
6. **Path and Method Handling**: You can define middleware for specific paths or HTTP methods using methods like `app.use` and `app.all`.
7. **No Duplicate Responses**: Sending more than one response in a single callback will result in an error.

:::note
`app.use`

- **Path Matching**: `app.use` matches the beginning of the route. If you define `app.use('/api', middleware)`, it will apply to any route that starts with /api, including /api/users, /api/products, etc.
- **Method Agnostic**: `app.use` is not tied to any specific HTTP method. It will be executed for all HTTP requests (GET, POST, PUT, DELETE, etc.) that match the path.
- **Subpath Handling**: `app.use` can be used to handle subpaths, making it suitable for defining middleware for a group of related routes.

```js title="Example of app.use"
app.use('/api', (req, res, next) => {
  console.log('API middleware');
  next();
});
```

`app.all`

- **Exact Path Matching**: `app.all` matches the exact path specified. If you define `app.all('/api', middleware)`, it will only apply to the exact /api route, not to subpaths like /api/users.
- **Method Specific**: `app.all` is used to define middleware that will be executed for all HTTP methods but only for the exact path specified.
- **Focused Handling**: `app.all` is suitable when you want to apply specific middleware to an exact route for all HTTP methods.

```js title="Example of app.all"
app.all('/api', (req, res, next) => {
  console.log('All methods for /api');
  next();
});
```

:::

## Practical Examples

### Basic Middleware

Here's a simple example of middleware that logs the request method and URL:

```js
app.use((req, res, next) => {
  console.log(`Request method: ${req.method}, URL: ${req.url}`);
  next();
});
```

### Error Handling Middleware

You can define a special middleware function with four arguments to handle errors:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

### Route-Specific Middleware

You can also define middleware for specific routes:

```js
app.get('/dashboard', authenticateUser, renderDashboard);

function authenticateUser(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function renderDashboard(req, res) {
  res.render('dashboard');
}
```

Middleware in Express.js is a powerful concept that allows developers to write modular and maintainable code. By understanding how middleware works and how to use it effectively, you can build robust and scalable web applications.

:::note
Remember, the order of middleware matters, **always call `next` or send a `response`**, and **handle `errors`** gracefully.
:::
