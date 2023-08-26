---
title: Error Handling in Express
tags: [javascript, nodejs, express]
sidebar_label: '5. Error Handling in Express'
sidebar_position: 5
---

Error handling is a crucial aspect of any application, and in Express.js, it's no different. In this blog post, we'll explore various ways to handle errors in Express, both synchronously and asynchronously, with practical examples.

## Why Error Handling?

Errors are inevitable in any application. Whether it's a missing file, a broken link, or a server malfunction, errors can disrupt the user experience. Proper error handling ensures that the application can respond gracefully, providing informative feedback to the user and logging details for developers.

### Synchronous Error Handling

In synchronous operations, errors can be caught using the traditional **`try/catch`** block. Here's an example:

```jsx
app.get('/read-file', (req, res) => {
  try {
    const data = fs.readFileSync('file.txt', 'utf8');
    res.send(data);
  } catch (err) {
    res.status(500).send('An error occurred while reading the file.');
  }
});
```

In this example, if the file doesn't exist or there's an issue reading it, the catch block will handle the error, sending a 500 status code with a custom error message.

### Asynchronous Error Handling

Asynchronous operations, such as reading a file using promises, require a different approach. Here's an example using promises:

```jsx
app.get('/read-file-async', (req, res) => {
  fs.promises
    .readFile('file.txt', 'utf8')
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send('An error occurred while reading the file.')
    );
});
```

In this case, if an error occurs, the **`catch`** block will handle it, just like in the synchronous example.

### Using Async/Await

With **`async/await`**, you can write asynchronous code that looks synchronous. Here's how you can handle errors using **`async/await`**:

```jsx
app.get('/read-file-async-await', async (req, res) => {
  try {
    const data = await fs.promises.readFile('file.txt', 'utf8');
    res.send(data);
  } catch (err) {
    res.status(500).send('An error occurred while reading the file.');
  }
});
```

### Global Error Handler

Express allows you to define a global error handler that can catch all unhandled errors. This acts as a safety net for your application:

```jsx
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

## Unhandled Promise Rejections

Unhandled promise rejections occur when a promise is rejected, but there is no corresponding **`.catch()`** block or **`try/catch`** (when using **`async/await`**) to handle the rejection. Essentially, it's a situation where an error occurs within a promise, but there's no code to deal with that specific error.

### Why Are Unhandled Promise Rejections Problematic?

1. **Silent Failures**: Unhandled promise rejections can lead to silent failures, where an error occurs, but the application continues to run. This can lead to unexpected behavior and make debugging difficult.
2. **Potential Crashes**: In some environments, unhandled promise rejections can lead to the termination of the Node.js process, causing the entire application to crash.
3. **Poor User Experience**: Without proper error handling, users may encounter unexpected behavior or generic error messages that don't provide any insight into what went wrong.

### Why Can't a Global Error Handler Catch the Error?

In traditional synchronous code, uncaught errors bubble up and can be caught by a global error handler. However, promises introduce a complication because they handle errors on a per-promise basis.

1. **Asynchronous Nature**: Promises are asynchronous, meaning that they operate outside the regular synchronous flow of the code. If a promise is rejected and there's no **`.catch()`** block to handle it, the error doesn't propagate to the global error handler.
2. **Isolated Error Handling**: Each promise has its own error handling mechanism. Without a **`.catch()`** block, the rejection remains confined to that specific promise, and the global error handler doesn't have access to it.

### Express 4 and **Unhandled Promise Rejections**

The package named `express-async-errors` support to handle promises rejections in Express 4. You can use this package by installing this package from npm.

### Express 5 and Unhandled Promise Rejections

Starting with Express version 5, there's a built-in mechanism to catch unhandled promise rejections in the global error handler. This bridges the gap between the isolated error handling of promises and the global error handling of the application.

Here's an example of how you might define a global error handler in Express 5:

```js
app.use((err, req, res, next) => {
  if (err instanceof PromiseRejectionError) {
    // Handle promise rejection specifically
  }
  // General error handling
  res.status(500).send('Something went wrong!');
});
```
