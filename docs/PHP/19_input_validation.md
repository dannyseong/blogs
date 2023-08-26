---
title: Input Validation
tags: [php]
sidebar_label: '19. Input Validation'
sidebar_position: 19
---

Input validation is the process of **checking that data entered by users is valid**, e.g., that names are nonempty, that email addresses have valid syntax, that numeric fields are numbers in the correct range, that username/password pairs correspond to registered users, and so on.

Input validation must be performed on the server. In addition to server side validation, input validation may also be performed on the client (using HTML/JavaScript) to reduce communication load, to reduce server load, and to provide faster feedback to users. Client side validation can be by passed.

## Test if a string is empty

```php
if (empty($name)) {
  echo "name is empty";
  exit;
}
```

- Be careful with empty as it considers the following also to be empty:

* "0"
* "0.0"

## Test if a string contains a number:

```php
if (is_numeric($number)) {
  echo "is a number";
}
```

- Floating point numbers and even numbers with commas will return true, e.g. "100,000".

## Test if a string contains an integer:

- A string can be converted to an integer using the `intval()` function:

```php
$int = intval('5.2');
echo $int; // prints 5
```

- You can test whether a string contains an integer using the following test:
  ```php
  if($number == intval($number)){
    echo "$number is an integer";
  }
  ```
- String to integer conversion in PHP only converts the first portion of the string. Even though "100,000“ returns true by is_numeric(), intval() will return 100.
- It would seem that "100,000" == 100 would return false, but it doesn't.
- In addition, when a string and an integer are compared, PHP attempts to convert the string to an integer so that two integers can be compared.
- In the above example the string "100,000" is also converted to 100 (only the first portion is converted), therefore the comparison becomes 100 == 100, which is `true`.
- To work around PHP's unusual treatment of commas, we must convert the `intval()` result to a string using `strval()`:
  ```php
  if ($number == strval(intval($number))) {
    echo "$number is an integer";
  }
  ```
- The result is that the original string "100,000“ is compared with the string "100", which is false.
- Alternatively we could replace the commas with empty strings, before doing the integer check:
  ```php
  $number = str_replace(',', '', $number);
  ```
