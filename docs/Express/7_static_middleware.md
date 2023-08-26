---
title: >
  Internal Middleware: express.static()
tags: [javascript, nodejs, express]
sidebar_label: >
  7. Express.static()
sidebar_position: 7
---

One of the Express.js powerful features is the ability to serve `static files` such as images, CSS files, and JavaScript files. This is where `express.static()` comes into play. In this article, we'll explore how to use `express.static()` to serve static files and create a more dynamic web experience.

## What is express.static()?

`express.static()` is a built-in middleware function in Express. It serves static files from a specified root directory, combining `req.url` with the provided root directory to determine the file to serve. If a file is not found, it calls `next()` to move on to the next middleware, allowing for stacking and fall-backs.

### Syntax

```js
express.static(root, [options]);
```

- `root`: Specifies the root directory from which to serve static assets.
- `options`: An optional object that can contain various properties to customise the behavior.

## Options

| Property     | Description                                                                                    | Type     | Default      |
| ------------ | ---------------------------------------------------------------------------------------------- | -------- | ------------ |
| dotfiles     | Determines how dotfiles are treated                                                            | String   | "ignore"     |
| etag         | Enable or diable etag generation                                                               | Boolean  | true         |
| extensions   | Sets file extension fallbacks.                                                                 | Mixed    | false        |
| fallthrough  | Let client errors fall-through as unhandled requests or forward a client error.                | Boolean  | true         |
| immutable    | Enable or disable the immutable directive in the Cache-Control response header.                | Boolean  | false        |
| dex          | Sends the specified directory index file.                                                      | Mixed    | "index.html" |
| lastModified | Set the Last-Modified header to the last modified date of the file on the OS.                  | Boolean  | true         |
| maxAge       | Set the max-age property of the Cache-Control header in milliseconds or a string in ms format. | Number   | 0            |
| redirect     | Redirect to trailing "/" when the pathname is a directory.                                     | Boolean  | true         |
| setHeaders   | Function for setting HTTP headers to serve with the file.                                      | Function |              |

### Example Usage

Here's an example of using express.static with an elaborate options object:

```js
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};

app.use(express.static('public', options));

app.listen(8080);
```

- Now, you can load the files that are in the `public` directory:

```url
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
```

## Note on Performance

For best results, it's recommended to use a reverse proxy cache to improve the performance of serving static assets.

express.static() is a versatile and essential middleware function in Express.js for serving static files. With its various options, developers can have fine-grained control over how static assets are served, enhancing the efficiency and responsiveness of web applications.

For more information, you can refer to the official Express.js documentation on[ Serving static files](https://expressjs.com/en/starter/static-files.html) in Express and [Using middleware - Built-in middleware](https://expressjs.com/en/guide/using-middleware.html#middleware.built-in).
