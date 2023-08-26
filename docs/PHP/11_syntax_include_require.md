---
title: Include and require
tags: [php]
sidebar_label: '11. Include and require'
sidebar_position: 11
---
## Accessing to external files: require or include
- Classes, methods and constants in another PHP file can be accessed by including it using one of the following directives:
  * include
  * include_once 
  * require
  * require_once
- The difference between require and include, is that **require will cause the script to terminate if the included file can not be loaded**.
- PHP allows the same file to be included multiple times which could result in errors due to multiple definition of the same methods and constants and also execution of the same code multiple times.
- In the Product example `index.php` includes `product.php` with the following line of code:
```php
include 'product.php';
```

## Example: Redefinition issue
Suppose you have a file named "math_utils.php" that defines a simple math function and a constant:

```php title="math_utils.php"
function add($a, $b) {
    return $a + $b;
}

const PI = 3.14159;
```
Now, let's say you have another file named "main.php" where you include the "math_utils.php" file multiple times:

```php title="main.php"
include 'math_utils.php';
include 'math_utils.php';

$result = add(5, 3);
echo "Result: $result<br>";
echo "Value of PI: " . PI;
```
In this example, you are including the "math_utils.php" file twice in the "main.php" file. Let's see what happens:

### 1. First Inclusion: 
When you include the "math_utils.php" file for the first time, the add function and the PI constant are defined.

### 2. Second Inclusion: 
When you include the "math_utils.php" file again, PHP will attempt to define the add function and the PI constant once more. This can lead to errors, as the function and constant are already defined.

### 3. Function Redefinition: 
Since the add function was defined in the first inclusion, attempting to define it again in the second inclusion will result in a "function redefinition" error.

### 4. Constant Redefinition:
Similarly, trying to redefine the PI constant will result in a "constant redefinition" error.

When you run the "main.php" file, you might encounter errors like "Cannot redeclare function add()" and "Constant PI already defined." To avoid these errors, you should use the include_once or require_once statements instead of include or require if you know that the file might be included more than once:

