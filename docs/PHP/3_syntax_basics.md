---
title: Basics of PHP Syntax
tags: [php]
sidebar_label: '3. Basics of PHP Syntax'
sidebar_position: 3
---

### Semi-colons

- PHP requires each statement to end with a semi-colon.
  ```php
  echo "Hello, World!";
  ```

### Variables

- Variables in PHP begin with `$`, e.g.:
  ```php
  $name = "Danny"
  ```
- Variable names are `case-sensitive`[^1].
- Variables are `dynamically-typed`, i.e. the type of the variable depends on the data that has been assigned to it.

[^1]: This means that variables with names like `$myVar`, `$MyVar`, and `$MYVAR` are all treated as different variables.

### Strings

- Strings in PHP can be delimited using either single- or double-quotes:
  ```php
  $name = "Danny";
  $name = 'Danny';
  ```
- However, there is a difference. PHP allows variables to be expanded into double-quoted strings, but not single-quoted strings.

##### 1. Variable Expansion

```php
$name = 'Danny';
echo "My name is $name"; // My name is Danny
echo 'My name is $name'; // My name is $name
```

##### 1-1. New-line characters

- Strings in PHP preserve new-line characters, e.g.:

```php
echo "A string
that has
three lines.";
/* output
A string
that has
three lines.
*/
```

- However, it should be noted that HTML will ignore these newline characters.
- For the string to appear over three lines in HTML use the line break `<br>` tag:

```php
echo "A string <br>
that has <br>
three lines.";
```

##### 2. String Concatenation

- Strings are concatenated using the period `(.)` operator between two strings:

```php
$name = "Danny";
echo "My name is ".$name; // My name is Danny
```

- However, generally variable expension is simpler.

##### 3. Echo parameters

- The echo command can also take multiple parameters separated by commas, e.g.:

```php
$name = "Danny";
echo "My name is ", $name; // My name is Danny
```

##### 4. Which String concatenation technique should be used?

- From a performance perspective echo with comma separated parameters is the fastest.
- However, variable expansion is the easiest to type and read.

##### 5. When should single- and double-quotes be used?

- **Parsing variables** in double-quoted strings incurs on overhead.
- If a string contains **no variables** then single-quotes should be used.
