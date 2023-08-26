---
title: >
  Internal Middleware: express.json()
tags: [javascript, nodejs, express]
sidebar_label: >
  4. Express.json()
sidebar_position: 4
---

**`express.json()`** is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on the **`body-parser`** module.

### **How Does It Work?**

When a client sends a request to an Express server, the body of the request is essentially a string. If the client sends a JSON object, the server receives it as a string, not as a JavaScript object.

Here's where **`express.json()`** comes into play:

1. **Content-Type Header**: It looks at the **`Content-Type`** header of the incoming request. If the header is **`application/json`**, it proceeds to the next step.
2. **Parsing**: It takes the JSON string in the request body and parses it into a JavaScript object.
3. **Attaching to `req.body`**: The parsed object is then attached to the **`req.body`** property, so it can be accessed in subsequent middleware functions and route handlers.

### **Why Use It?**

If you're building an API or a web application that needs to handle JSON payloads (e.g., from a front-end framework like React or Angular), you'll need to parse the incoming JSON string into an object to work with it in JavaScript.

By using **`express.json()`**, you enable your Express application to automatically handle this parsing, so you don't have to manually parse the JSON string in every route where you need to access the data.

### **Example**

In the code snippet you provided:

```jsx
app.use(express.json());

app.post('/', (req, res, next) => {
  console.log(req.body);
});
```

When a POST request is made to the root URL **`'/'`** with a JSON payload, **`express.json()`** will parse that payload, and the parsed object will be logged to the console inside the route handler.

**`express.json()`** is a convenient and essential middleware for modern web applications that communicate using JSON. It simplifies the handling of incoming JSON data, allowing developers to focus on the logic of handling that data rather than the mechanics of parsing it.
