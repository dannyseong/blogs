---
title: User-defined functions
tags: [php]
sidebar_label: '6. User-defined functions'
sidebar_position: 6
---
# User-defined functions

- PHP functions are similar to functions in other programming languages.
- A PHP function must be declared using the keyword `function`.
- All code in the function should be placed inside `{}`.

  ```php
  function sum($a, $b){
    return $a + $b;
  }
  $s = sum(1, 2);
  echo $s; // output: 3
  ```

  #### 1. Closure

  - PHP functions can be assigned to variables.
  - PHP functions can be declared **without a name**, called `anonymous functions` or `closures`.

  ```php
  $sum = function($a, $b) {
  return $a + $b;
  };
  // calling sum
  echo $sum(1, 2);
  ```

  #### 2. Declare a function as a parameter

  - In some situations, defining a closure in a fuction's parameter can make the code more compact and readable.
  - Example: PHP's built-in function `usort()` requires the caller to supply a function to determine how elements in an array is to be compared.

  ```php
  <?php
  $fruit[0]["fruit"] = "lemons";
  $fruit[1]["fruit"] = "apples";
  $fruit[2]["fruit"] = "grapes";

  usort($fruits, function ($a, $b){
    return strcmp($a["fruit"], $b["fruit"]);
  })
  ?>
  ```
