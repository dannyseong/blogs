---
title: >
  Internal Middleware: express.urlencoded()
tags: [javascript, nodejs, express]
sidebar_label: >
  8. Express.urlencoded()
sidebar_position: 8
---

Starting from version 4.16.0, Express.js introduced a built-in middleware function called `express.urlencoded()`. This function plays a crucial role **in parsing incoming requests with URL-encoded payloads**. It's based on the body-parser library and provides essential functionality for handling form submissions in web applications.

## What is express.urlencoded()?

`express.urlencoded()` is a middleware function that parses incoming requests with URL-encoded payloads. **It only looks at requests where the Content-Type header matches the type option** and **accepts only UTF-8 encoding of the body**. It also supports automatic inflation of gzip and deflate encodings.

The result of the parsing is a new `body` object on the request object (i.e., `req.body`), containing the parsed data. This object will include key-value pairs, where the value can vary in type depending on the `extended` option.

## Options

| Property       | Description                                                                                    | Type     | Default                             |
| -------------- | ---------------------------------------------------------------------------------------------- | -------- | ----------------------------------- |
| extended       | Choose between parsing with the querystring library (false) or the qs library (true).          | Boolean  | true                                |
| inflate        | Enables or disables handling deflated (compressed) bodies.                                     | Boolean  | true                                |
| limit          | Controls the maximum request body size, specified in bytes or using a string for parsing.      | Mixed    | "100kb"                             |
| parameterLimit | Controls the maximum number of parameters allowed in the URL-encoded data.                     | Number   | 1000                                |
| type           | Determines the media type the middleware will parse. Can be a string, array, or function.      | Mixed    | "application/x-www-form-urlencoded" |
| verify         | A function called as verify(req, res, buf, encoding) to allow custom handling or verification. | Function | undefined                           |

## Example Usage

Here's an example of how to use express.urlencoded() in an Express application:

```js
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  console.log(req.body); // Parsed URL-encoded data
  res.send('Form submitted successfully!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

## Security Considerations

Since `req.body`'s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before use. Failure to do so may lead to various security vulnerabilities.

`express.urlencoded()` is a powerful middleware function that simplifies handling URL-encoded data in Express.js applications. By understanding its options and how to use them, developers can efficiently parse form data and build robust web applications.

Whether you're dealing with simple forms or complex data structures, `express.urlencoded()` provides the flexibility and control needed to handle URL-encoded payloads effectively.
