---
title: Structuring a PHP File - Best Practices
tags: [php]
sidebar_label: '7. Structuring a PHP File: Best Practices'
sidebar_position: 7
---
![PHP Code Block](/img/php/1.png)

## 1. Preparing the PHP Block

Begin your PHP file by encapsulating PHP code within <?php and ?> tags. This initial PHP block serves as the foundation for processing data and setting up variables.

Within this block, follow these steps:

#### A. Data Retrieval and Validation

- Use the `$_GET` and `$_POST` superglobals to extract data sent to the PHP file through HTTP methods. These variables hold the input data from URL parameters and form submissions.
- Implement thorough input validation to ensure the received data is valid, safe, and adheres to your application's requirements. This step helps prevent security vulnerabilities such as SQL injection and cross-site scripting (XSS) attacks.
- Handle potential errors gracefully and provide meaningful feedback to users if validation fails.

#### B. Processing and Variable Assignment

- Once the data is validated, process it as needed. Perform **_calculations, database interactions, or any other operations necessary for your application's functionality_**.
- Assign the results of these operations to variables that will hold the output data to be displayed later in the HTML portion of the file.

## 2. Integrating HTML and PHP

The main body of your PHP file will be HTML, interspersed with PHP code where necessary. This separation of concerns enhances code readability and maintainability.

#### A. HTML Structure

- Create a structured HTML layout that encompasses the visual elements of your page. This includes headings, paragraphs, forms, tables, and any other components required by your application.
- Organize your HTML content logically, using appropriate HTML tags and attributes for semantic structure.

#### B. Dynamic Content Insertion

- Embed PHP code within the HTML where you want to display the dynamic content generated from your PHP processing. Use <?php ... ?> tags to enclose PHP code snippets.
- Insert the values of the output variables into the HTML using echo statements. For example: `echo $outputValue;`.

#### C. Sanitizing Output

- To prevent cross-site scripting (XSS) attacks and ensure data security, sanitize the output data before embedding it in the HTML. Use the `htmlspecialchars()` function to convert special characters to their corresponding HTML entities.
- Sanitizing output helps to display user-generated content without compromising the integrity of your web application.

## Practice

![Code Block](/img/php/2.png)

1. **Presentation** and **Logic** should be separated into two separate files.
2. PHP files that return HTML should primarily contain HTML.
3. _More complex functionality_ should be stored in spearte PHP files
4. `Constants` and `Methods` are often stored in a PHP file called `defs.php`.
5. `defs.php` is included by other PHP files.

```php
# factorise.php
<?php
/*
* Script to print the prime factors of a single positive integer * sent from a form.
* BAD STYLE: Does not use templates.
*/
include "includes/defs.php";
# Set $number to the value entered in the form.
$number = $_GET['number'];
# Check $number is nonempty, numeric and between 2 and PHP_MAX_INT = 2^31-1. # (PHP makes it difficult to do this naturally; see the manual.)
if (empty($number)) {
	echo "Error: Missing value\n";
	exit;
} else if (!is_numeric($number)) {
	echo "Error: Nonnumeric value: $number\n";
	exit;
} else if ($number < 2 || $number != strval(intval($number))) {
	echo "Error: Invalid number: $number\n";
  exit;
}
# Set $factors to the array of factors of $number.
$factors = factors($number);
# Set $factors to a single dot-separated string of numbers in the array.
$factors = join(" . ", $factors); ?>

<!DOCTYPE html>
<html>
<head>
  <title>Factors</title>
  <meta charset="utf-8">
</head>
<body>
  <h1>Factorisation</h1>
  <p>
    <?php echo "$number = $factors"; ?>
  </p>
  <p>
    <a href="index.html">Another?</a>
  </p>
  <hr>
  <p>
    Sources:
    <a href="show.php?file=factorise.php">factorise.php</a>
    <a href="show.php?file=includes/defs.php">includes/defs.php</a>
  </p>
</body>
</html>
```

defs.php

```php
<?php
/*
* factors($n) returns an array of prime factors of valid integer $n. * Precondition: 2 <= n <= PHP_MAX_INT = 2^31-1.
* Note that it is executed for its _value_ not for its _effect_.
*/
function factors($n){
  $factors = array(); # initialise $factors to be an empty array $cand = 2;
  while ($n > 1 && $cand*$cand <= $n) {
    while ($n > 1 && $n % $cand == 0) {
      $factors[] = $cand; # append $cand to the array $factors $n = $n / $cand;
    }
    $cand++;
  }
  if ($n > 1) {
  $factors[] = $n; # append $n to the array $factors
  }
  return $factors;
}
?>
```
