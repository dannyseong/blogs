---
title: Accessing URL Variables
tags: [php]
sidebar_label: '17. Accessing URL Variables'
sidebar_position: 17
---

## How to access to HTTP method

Information is sent from the browser to a server using URL variables. How they are sent depends on the HTTP method used:

- `GET`: sends variables in the URL
- `POST`: sends variables in the message body.

PHP Scripts can access `GET` and `POST` variables using three global **arrays**:

- `$_GET`
- `$_POST`
- `$_REQUEST`
  `$_REQUEST` contains the contents of `$_COOKIE`, `$_POST`, and `$_GET`.

## Example

```php
<?php
$name = $_GET['name'];
$age = $_GET['age'];
echo "$name is $age years old.";
// Input: namn = Danny, age = 25
// Output: Danny is 25 years old
?>
```

## Checking if an array element exists

- It is possible that a URL variable may not be present in the request, therefore it is a good idea to check if the key exists in the `$_GET`/`$_POST` arrays before attempting to access them.
  ```php
  if (array_key_exists('name', $_GET)){
    $person = $_GET['name'];
  }
  ```
- The `isset()` function can also be used which also ensures that even if the key exists, that it has a non-NULL value:
  ```php
  if (isset($_GET['name'])) {
    $name = $_GET['name'];
  }
  ```

## Displaying the contents of `$_GET` in a table

```php
<!DOCTYPE html>
<html>
...
  <body>
    <table>
      // table header
      <tr><th>Name</th><th>Value</th></tr>
      //highlight-start
      <?php foreach($_GET as $name => $value) {?>
        <tr><td><?= $name ?>:</td><td><?= $value?></td></tr>
      <?php } ?>
      //highlight-end
    </table>
  </body>
</html>
```
