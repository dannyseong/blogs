---
title: Why Use Express?
tags: [javascript, nodejs, express]
sidebar_label: '1. Why Use Express?'
sidebar_position: 1
---

## Node.js

In Node.js, using `http` package, we create a server and manually check the request methods (such as GET, POST, PUT, DELETE, ALL, USE) using conditional statements, like this:

```jsx
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
	const url = req.url;
	const method = req.method;
	if (method === 'GET'){
		// GET response code
	} else if (method === 'POST'){
		// POST response code
	} else if (method === 'PUT'){
		// POST response code
	} else if (method === 'DELETE'){
		// POST response code
	}
}

server.listen(8080)
```

### **Characteristics and Challenges:**

1. **Manual Routing**: Developers must manually write conditional logic to handle different HTTP methods and routes.
2. **Verbose**: More lines of code are required for even simple tasks, like sending responses or parsing request bodies.
3. **Limited Functionality**: There's no native support for things like middleware, template engines, or sessions.

## Express Framework

Express.js is a web application framework built on top of Node.js that simplifies many of the complexities associated with the raw **`http`** module:

```jsx
const express = require('express');
const app = express();

app.get('/posts', function(req, res, next){
	res.send(...);
}

app.post('/posts', function(req, res, next){
	res.send(...);
}

app.put('/posts/:id', function(req, res, next){
	res.send(...);
}

app.delete('/posts/:id', function(req, res, next){
	res.send(...);
}

app.listen(8080);
```

### **Advantages of Using Express.js:**

1. **Simplified Routing** : Express offers methods corresponding to HTTP verbs, making the code more explicit and readable. This design pattern improves maintability.
2. **Easy Parameter Handling**: Express's routing allows for easy capture of URL parameters and query strings, simplifying data retrieval from the client.
3. **Middleware Support**: The second argument registers a callback function, known as middleware. This function takes three arguments: request object (containing received data), response object (allowing you to respond), and next (to move to the next middleware). This powerful concept enables you to chain together functionality in a very flexible way.
4. **Built-in Helpers**: Express provides various built-in methods like **`res.send()`** or `res.json()`that simplify sending responses, parsing incoming data, handling cookies, and more.
5. **Template Engine Integration**: Express supports various template engines, allowing server-side rendering of dynamic HTML.
6. **Extensibility**: Express is compatible with a wide range of plugins and additional libraries, making it easy to add more complex features like authentication, database integration, etc.

## **Node.js's `http` Module vs Express.js**:

- **Flexibility vs. Convenience**: While Node.js's **`http`** module offers a more flexible and "bare-bones" approach, Express.js provides higher-level abstractions that make development quicker and more convenient.
- **Code Length**: Express.js typically results in shorter, more readable code compared to handling everything manually with the **`http`** module.
- **Feature Set**: Express.js brings a rich set of features, like middleware support and easy routing, that would require additional manual effort with just Node.js.
