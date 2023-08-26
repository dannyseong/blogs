---
title: Action Script and Guestbook Example
tags: [php]
sidebar_label: '9. Action Script and Guestbook Example'
sidebar_position: 9
---
## 1. Action Scripts in PHP

An essential technique in PHP programming is the use of action scripts, also known as one-components scripts. These scripts serve as a specific purpose: executing a task without requiring a complex user interface. One of their primary applications is performing actions, such as adding items to a shopping cart, and then quickly redirecting the user back to their original page.

## 2. Key Points about Action Scripts

- **Concealing Information**: Action scripts should avoid displaying unnecessary information, focusing solely on executing the requiredd task.
- **Returning to the Caller**: These scripts must redirect back to the referring page, even when the referring page's name cannot be hardcoded into the action script.
- **Updating Server Information**: Action scripts are ideal for updating server information, such as altering database records.
- **Avoiding Reload-Redo Issue**: By separating actions into one-component scripts, the risk of unintentionally repeating server updates when users click the "reload" button can be mitigated.

## 3. Guestbook: One-Component Version Example

Here's an example showcasing the use of action scripts in a guestbook application. This application consists of two main components: `index.php` (the calling script) and `add_action.php` (the action script).

- The PHP function `header()` sends its arguments as a response to the HTTP request that caused the current script to be executed. In this case, it redirects control to the script index.php, without returning an HTML response. Calls to the function `header()` must be made before any other output is generated, not even a black line.

- Note that this version of the guestbook application does not have the reload-redo problem.
- More generally, we may wish to redirect control back to the referring script, whatever it was. Thi may be done as follow:
  ```php
  	// Redirect back to the referring
  	// script
  	$referer = $_SERVER['HTTP_REFERER']";
  	header("Location: $referer");
  	exit;
  ```
- Here, the PHP variable `$_SERVER['HTTP_REFERER]` stores the URL of the calling, or referring, script. If this response is the first output of the action script, the effect is to immediately redirect control back to the calling page, which is exactly what is required.
- The function `header()` can be used to output other forms of HTTP. There are also many other useful PHP variables like `$_SERVER['HTTP_REFERER']`, for example, `$_SERVER['PHP_SELF']` which is the name of the current script.
- Note again that the function `header()` must be called before anything (even a blank line) is output by the script.
- It is good practice to use a one-component (or script) to process form data whenever the form uses method `POST`. Otherwise, there is a risk of incorrectly repeating the server update operation when the "reload" button in the browser is pressed.
- Hence, one-component scripts are very frequently required.

![diagram for actino scripting](/img/php/3.png)

### index.php - Calling Script

```php
<!DOCTYPE html>
<html>
<head>
	<title>My Guest Book</title>
	<meta charset="utf-8">
</head>
<body>
<h1>My Guest Book</h1>

<?php
include "includes/defs.php";
showEntries();
?>

<a href="add_form.html">Add your own message</a>

</body>
</html>
```

### add_form.html - Form for Adding Messages

```html
<!-- add_form.html -->
<!DOCTYPE html>
<!-- Add new entry form. -->
<html>
  <head>
    <title>Guest Book Message Entry</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <h1>Message Entry Form</h1>
    <form method="post" action="add_action.php">
      <!-- From fields here -->
    </form>
  </body>
</html>
```

### add_action.php - Action Script

```php
<?php
include "includes/defs.php";

$message = $_POST['message'];
$author = $_POST['author'];

if (!empty($message)) {
    // Add new message from form data
    if (empty($author)) {
        $author = "Anon.";
    }
    writeEntry($message, $author);

    // Redirect to home page
    $referer = $_SERVER['HTTP_REFERER'];
    header("Location: $referer");
    exit;
} else {
    echo "<p>Error: Empty message in form data.</p>\n";
}
?>
```

### defs.php - Definitions and Functions

```php
<?php
/* Constant and function definitions for simple guest book application. */

define("FILE","messages.txt");

/* Appends entry to FILE. */
function writeEntry($message, $author) {
  $fp = fopen(FILE, "a");
  fwrite($fp, "$message\n");
  fwrite($fp, "$author\n");
  fclose($fp);
}

/*
 * Shows entries in FILE
 * PHP blocks are not interpreted on the server,
 * and HTML and JavaScript elements are not interpreted on the client.
 */
function showEntries() {
  $fp = fopen(FILE, "r");
  if ( $fp ) {                      # added by Anthony Thyssen 21/02/2014
    $n = 0;
    while ($fp && !feof($fp)) {
      $message = fgets($fp, 4096);
      if (!empty($message) && !feof($fp)) { # should not be necessary!
        $message = htmlspecialchars($message);
        $author = htmlspecialchars(trim(fgets($fp, 4096)));
        echo "<p>$message</p>\n";
        echo "<p>-- $author</p>\n";

        $n++;
      }
    }
    echo "<p>(Debugging: No. messages = $n.)</p>\n";
    fclose($fp);
  }
}
?>
```

This example demonstrates the flow of an action script in the context of a guestbook application. Users can add messages through a form, and the action script adds the message to the guestbook while ensuring a smooth redirection back to the referring page.
