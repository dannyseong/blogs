---
title: Essential Built-in Functions for String
tags: [php]
sidebar_label: '15. Built-in Functions (String)'
sidebar_position: 15
---
## Number of characters

```php title="int strlen(string $string)"
$str = "Test string";
echo strlen($str); // prints 11
```
## Search
```php title="mixed strpos ( string $haystack , mixed $needle [,int $offset = 0 ] )"
$str = "This is a test"; 
echo strpos($str, "is"); // prints 2
```
## Case insensitive search
```php title="mixed stripos ( string $haystack , string $needle [, int $offset = 0 ] )"
$str = "This is a test"; 
echo stripos($str, "th"); // prints 0
```
## Convert to Upper and Lowercase
```php
$upper = strtoupper("lower"); 
$lower = strtolower("UPPER");
```

## Trim whitespace Substring
Trims whitespace from beginning and end of string including spaces, tabs, and new line characters.
```php
$str = " This is a test "; echo trim($str);
// prints "This is a test"
```

## Splitting a string
- Returns an array of strings separated by delimiter:
```php title="array explode ( string $delimiter , string $string [, int $limit ] )"
$str = "Tom, Bill, Harry"; 
$array = explode(", ", $str);
```
- `$array` will contain three strings "Tom", "Bill", and "Harry".

## Substring
```php title="string substr ( string $string , int $start [,int $length ] )"
$str = "Test string"; 
echo substr($str, 5, 6) // prints "string"
```
