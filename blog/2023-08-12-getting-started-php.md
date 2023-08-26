---
authors: danny
title: Getting Started with PHP | Preparing the Server | Let's Get PHP Scripts Moving!
tag: [php, WEB, xampp]
---
Let's dive right into using PHP. To utilize a PHP program, all you have to do is save the PHP file in the Web server's public directory.

Open the XAMPP folder (typically located in the "xampp" folder on the `Application` folder) and find the `htdocs` folder inside. <U>This folder is XAMPP's Web server's public directory.</U> You can place HTML and PHP files here and access them from a browser.

Create a folder called `sample` and inside it, make a text file named `index.php` Write the following source code in this file:

```html title="index.php"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>sample page</title>
  </head>
  <body>
    <h1>Hello PHP!</h1>
    <div>
      <?php echo "Text displayed by PHP."; ?>
    </div>
  </body>
</html>
```

Set the text encoding to “UTF-8". From here on, all content will use UTF-8. When using PHP, the file extension must be `.php` although other extensions can be used. `.php` is the default.

Once written, access `http://localhost/sample/index.php` from your web browser. You can also omit the final index.php (it's called by default). You should see "Hello PHP!" as the title and "Text displayed by PHP." underneath. The text below is executed by the PHP script.

As you can see from the source code, even though it's a `.php` extension, the content is fundamentally no different from standard HTML. PHP's main feature is that you can **_"mix it with HTML code."_** So, you don't have to write everything in PHP. You can create the screen layout entirely in HTML, then add PHP where needed.

You'll notice a peculiar tag within the HTML tags:

```php
<?php echo "Text displayed by PHP."; ?>
```

This is where you write PHP scripts. PHP scripts are written using the `<?php ... ?>` tag. Write the actions to be performed inside this tag, and they'll be executed by the server and sent to the browser. Since PHP scripts are executed on the server, they won't show up in the browser at all. This is a significant difference from JavaScript, which runs in the browser.

Here, the `echo` function is used. In PHP, most essential functions are prepared this way. The echo function is executed like this:

```php
echo output_value;
```

:::note
Note the semicolon (;) at the end. PHP requires a semicolon at the end of every statement. PHP doesn't use line breaks to separate statements but semicolons. This way, you can break a long statement across lines appropriately. Be sure to use semicolons correctly to avoid errors.
