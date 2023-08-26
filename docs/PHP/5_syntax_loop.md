---
title: Loops in PHP
tags: [php]
sidebar_label: '5. Loops in PHP'
sidebar_position: 5
---
## Basic syntax

```php
// for (initialisation; condition; increment){}
for ($i = 0; $i < 5; $i++>)
{
  echo $i."\n";
}
```

## Foreach loops

- Foreach loops iterate through an array and automatically place the value of the array element into a variable.
- Syntax:
  ```php
  foreach(array_expression as $value);
  foreach(array_expression as $key=>$value);
  ```
- Example:
  ```php
  $array = array(1, 2, 3, 4);
  foreach ($array as $number)
  {
    echo $number . "\n";
  }
  /* output
  1
  2
  3
  4
  */
  ```

## Display the contents of an array in a HTML list

```php
<?php
  $names = array('Tom','Bill','Fred');
  echo "<ul>\n";
  foreach($names as $name)
  {
    echo "<li> $name </li>";
  }
  echo "</ul>\n";
?>
```

## Including PHP variables in HTML

- There are two ways to include PHP variable in HTML:
  1. Use the standard `<?php ... ?>`tag with an echo command.
  2. Use the **PHP expression tag** `<?= ... ?>`.
- The PHP expression tag is shorter and also allow calculations and function calls.
  ```php
  <?php echo($name); ?>
  <?= $name ?>
  ```

## Embedding PHP within HTML

- PHP can be interspersed within HTML code. For loops can be broken up:
  ```php
  <?php
    $names = array('Tom', 'Bill', 'Fred');
  ?>
  <!DOCTYPE html>
  <html>
  ...
  <body>
    <ul>
      <?php foreach($names as $name) { ?>
      <li> <?= $name?> </li>
      <?php } ?>
    </ul>
  </body>
  </html>
  ```

## While and do-while

- PHP `while` and `do-while` loops have the same syntax as Java.
- `break` and `continue` keywords are also supported.
