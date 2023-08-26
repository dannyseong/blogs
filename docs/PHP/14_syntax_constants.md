---
title: Define Constants
tags: [php]
sidebar_label: '14. Define Constants'
sidebar_position: 14
---
- Constants are created using the define function:
```php
define("SERVER", "dwarf");
```
- The above code snippet defines the constant `SERVER` with the value `"dwarf"`.
- The constant name must be in **double quotes**.
- The constant can then be used like any other variable:
```php
echo SERVER;
```
- Constants have global scope.
Some predefined constants: 
  * TRUE
  * FALSE
  * NULL
  * PHP_VERSION
  
- For a complete list see: [http://php.net/manual/en/reserved.constants.php](http://php.net/manual/en/reserved.constants.php)