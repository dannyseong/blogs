---
title: Global Variables
tags: [php]
sidebar_label: '13. Global Variables'
sidebar_position: 13
---
Global variables are variables declared outside functions, or classes e.g:
```php
<?php
$a = 1; /* global scope */

function test() { 
  echo $a;
  /* local scope */ 
}

test(); 
?>
```
- The above generates an error in function `test()` that `$a` doesn't exist.
- Functions don't automatically have access to global variables.
- The variable must be declared as `global` within the function for it to be accessible.
- The following will now output the `$a` value 1:

```php
$a = 1; /* global scope */

function test() { 
  // highlight-next-line
  global $a
  echo $a;
  /* local scope */ 
}

test(); 
```