---
title: Routes
tag: [laravel, php]
sidebar_label: '3. Routes'
sidebar_position: 3
---

In the beginning web wervers simply served files. The URL was simply the file path on the server. For example, the file:

```
/htdoc/greeting/hello.html/
```

Might be accessed via the URL:

```
http://example.com/greeting/hello.html
```

Note tha there are some differences. The URL doesn't include the /htdoc/ directory. This is because we don't want all of the files on the server to be accessible via the web. Web servers generally only serve files within a particular subdirectory, in this case `/htdoc/`, providing some security to the other files on the server. However, if URLs merely reflect files and directories on a server, they could get very long and complex.

Furthermore, we will end up with many small files, which makes the code difficult to read/trace. What we want is to be able to map URLs to functions, where multiple related functions can reside in the same file. E.g. a file/class call product contains all the functions (e.g. list all products, display one product etc.) on products, and is mapped to by multiple URLs. In web applications, we specify routes which are maps between URLs and code(generally functions.)

## Laravel Routes

We can see what routes are in a Laravel project by running the following command within the project directory:

```bash
php artisan route:list
```

If we run the above on a newly create Laravel project, we get the following:
![laravel route output](/img/laravel/laravel_route_output.png)
The above table shows which routes have been defined. It shows the http method (e.g. GET, POST) and the URL to trigger the route, and the action that will be performed when the route is triggered.

## Declaring a Route

Routes for web applications are declared in `/routes/web.php` file. A route returns the HTML/text that is to be displayed by the browser that triggered this route. For example, this route returns `Hello, World`.

```php
Route::get('/', function(){
  return 'Hello, World';
});
```

But in most cases, a route would return a view which defines the HTML document to be displayed. For example, a newly created project has the following route which reteurns a view:

```php
Route::get('/', function(){
  return view('welcome');
})
```

The route declaration has the following basic from:

```php
Route::http_method(path, function);
```

The Route class has static functions for declaring routes based on the HTTP method in the URL: `get(), post(), patch(), delete(), option()`. There are also functions which can respond to multiple HTTP methods:

- `match()` - pass in an array of HTTP methods as strings, e.g. array('GET', 'POST')
- `any()` - responds to any HTTP method

## Route URLs

The first parameter is the path of the URL. In the example above, the path is simply `/`, in other words, the Route will be a match with the following HTTP request: `GET / HTTP / 1.1`. Using functions such as get() is simply a way of using function syntax to define the URL filter.

## Route Functions

The second parameter is the function that will be called if a URI match occurs. In the above example, note how a complete function is placed directly within the parameter? Note also that the function doesn't have a name? We call such a function, a `closure`. **The embedded closure function will be called when there is a URI match.** The code in the example returns a View called ‘Welcome’.

## Route Parameters

We can indicate that portions of the URL can be extracted as parameters by using `{}`.

```php
Route::get('user/{name}', function($name){
  return "Hello $name";
});
```

The above code extracts a user's name from the URL and return it with a short greeting.

:::note
Anything returned from a route function will be returned to the browser (and displayed).
:::

### 1. Function Parameter

We can then pass the parameter variable as a parameter to the function: `function ($name)`. The function parameter name must be the same as the name used in the URI.

### 2. Using the function parameter

We can then use the function parameter within the function. In the above example we are simply returning a short greeting including the value of the variable.
`return "Hello $name";`

## Routes and Controllers

The routes/web.php file would get large and complicated if we placed all of the application logic in the one file. **We should separate our code into separate classes and functions.** We will do this using `Controllers`.

## The `public` directory

In our Laravel project, there is a directory named `public`. When we run the Laravel project, we need to direct all requests to the public directory. The `index.php` fil is the file that will run when we hit `projct_folder_name/public`. Despite defining routes which will respond to URLs such as `projct_folder_name/public/user/John`, those directories don't exist. Instead, every URL that hits `projct_folder_name/public/*` is redirected by Laravel to run `projct_folder_name/public/index.php`
:::tip

For Laravel routing to works webservers need to be configured to direct all requests containing `{Laravel project}/public/{some_other_path}` to `{Laravel project}/public/index.php`. This configuration set up is done differently depending on the webserver:

- On **Apache**, the redirection is configured via public/.htaccess. This file comes with Laravel project.
- On **Nginx**, the redirection needs to be configured via Ngnix's site configuration file.

Once a request arrives at `index.php`, `index.php` will decompose the request (separate the paths after public) and figure out which route to execute, and execute the route.

:::

:::note

All of our files will run as if they are running from the **`public`** directory. Therefore, if you want to add any files which would be referred to directly from HTML, such as **`CSS`**, **`JavaScript`**, and **`images`**, you need to add them to the **`public`** directory.

:::
