---
title: >
  Internal Middleware: express.Router()
tags: [javascript, nodejs, express]
sidebar_label: >
  6. Express.Router()
sidebar_position: 6
---

## Router

- Express Router is a class that helps you manage and create server routes.
- By using the Express Router, you can separate your routes into different modules, making your code more modular, maintainable, and easier to understand.

## Basic Usage

### 1. Importing Router

First, you need to import the Router class from Express.

```jsx
const express = require('express');
const router = express.Router();
```

### 2. Defining Routes

You can define routes on the router object just like you would on the app object.

```jsx
router.get('/path', (req, res) => {
  // Handle GET request
});

router.post('/path', (req, res) => {
  // Handle POST request
});
```

### 3. Using Middleware

You can also use middleware with routers, just like with the main app.

```jsx
router.use(someMiddleware);
```

### 4. Parameterized Routes

You can define routes with parameters, allowing you to capture values from the URL.

```jsx
router.get('/path/:id', (req, res) => {
  const id = req.params.id;
  // Handle request
});
```

### 5. Mounting the Router

Once you've defined your routes, you need to mount the router on your main app.

```jsx
app.use('/prefix', router);
```

This will prefix all the routes defined on the router with the specified path.

## Benefits of Using Router

- **Modularity**: You can define different routers in different files, organizing your code by functionality.
- **Reusability**: You can use the same router in multiple places in your application, promoting DRY (Don't Repeat Yourself) principles.
- **Maintainability**: By breaking down your routes into smaller parts, it becomes easier to manage and update your code.

## Example of Using Router

Here's an example of how you might use a router to define the routes for managing posts:

```jsx title="router/posts.js"
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET: /posts');
});

router.post('/', (req, res) => {
  res.send('POST: /posts');
});

router.put('/:id', (req, res) => {
  res.send(`PUT: /posts/${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`DELETE: /posts/${req.params.id}`);
});

module.exports = router;
```

Then, in your main app file:

```jsx title="app.js"
const express = require('express');
const postsRouter = require('./posts');

const app = express();

app.use('/posts', postsRouter);

app.listen(8080);
```

By using routers, you've made the code more organized and easier to manage. You can continue to break down your application into different routers as it grows, keeping it clean and maintainable.
