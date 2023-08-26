---
title: Arrays in PHP
tags: [php]
sidebar_label: '4. Arrays in PHP'
sidebar_position: 4
---
- An array in PHP is an ordered map.
- A map associates values to keys.
- Also known as an associative array.

#### 1. Creating an Array

- Use the array() function to create a new array:
  ```php
  $array = array();
  ```
- No size is specified, PHP will automatically grow the array as needed.
- The array() function can also specify a list of initial values.
  ```php
  $array = array(1,2,3,4);
  ```
- You can also create an array using `[]`.
  ```php
  $array = [];
  $array = [1,2,3,4];
  ```

#### 2. Assigning elements

- Values can be assgined to array locations using indexes, e.g.:
  ```php
  $numbers = array();
  $numbers[0] = 1;
  $numbers[1] = 2;
  $numbers[2] = 3;
  ```

#### 3. Adding to the end of an array

- If no index is specified, the maximum of the integer index values is taken and that value plus one will be used:
  ```php
  $numbers[] = 4;
  echo $numbers[3]; // will print 4
  ```

#### 4. Array Size

- The count() function is used to return the number of elements in an array.
  ```php
  echo count ($numbers); // prints 4
  ```

#### 5. Arrays as maps

- An array can also be used as a map where keys are specified as either integers or strings and values can be any PHP type.
  ```php
  $person['name'] = 'Tom';
  $person['age'] = 20;
  echo $person['name'], ' is ', $person['age'];
  ```
- Arrays can also be initiated with `key => value` pairs:
  ```php
  $person = array('name' => 'Tom', 'age' => 20);
  ```

#### 6. Arrays and variable expansion

```php
echo “${person['name']} is ${person['age']}”;
```

#### 7. Join

- A useful array function is `join(separator, array)`
- join() creates a string containing all elements of the array separated by the string specified in the first parameter.
  ```php
  $fruit = array('apple', 'orange', 'pineapple');
  echo join(', ', $fruit);
  // prints: apple, orange, pineapple
  ```
