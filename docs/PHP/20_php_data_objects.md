---
title: PHP Data Objects (PDO)
tags: [php, db]
sidebar_label: '20. PHP Data Objects (PDO)'
sidebar_position: 20
---

• Accessing a database involves five steps:
  1. Connecting to the SQL server.
  2. Selecting the database to access.
  3. Executing the query or command.
  4. Processing the results (if any).
  5. Close the connection.
- When using RDBMS specific APIs all of the preceding steps must be performed.
- `PDO` combines the first two steps into one
  :::note 
  note also that SQLite doesn't have a database server to connect to
  :::
- `PDO` also automatically takes care of closing the connection. (Step 5)
### Creating a Connection
- **Every time a web request is made**, a PHP script must make a new connection with the SQL server (the connections can not be preserved between requests).
- Creating a new `PDO` connection is performed by creating a new PDO object:
  ```php
  $db = new PDO(connection_string);
  ```
  :::note
  the connection string will differ based on the type of database.
  :::


### Creating a MySQL Connection
- A MySQL connection will require a host name, database name, username and password, e.g.:
  ```php
  $db = new PDO('mysql:host=localhost;dbname=test', $username, $password);
  ```
### Creating an SQLite Connection
- A SQLite connection only requires the path to the database, e.g. if the database is in a "db" subfolder:
  ```php
  $db = new PDO('sqlite:db/test.sqlite');
  ```
- If the file test.sqlite doesn't exist SQLite will create it.

### Handling Errors
- PDO has three different modes for handling errors:
  * `SILENT` - default mode where errors are detect via return values
  * `WARNING` - a traditional warning is emitted, useful when debugging
  * `EXCEPTION` - a exception is thrown on an error
- We will use the EXCEPTION mode in this course for the following reasons:
  * `Silent` mode requires that the return value of every database call is checked.
  * `Exception` handling is generally good practice as it ensures that every error is detected and it moves error handling to the bottom of the function.
- We need to activate exception handling on our database connection:
  ```php
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  ```
- Exception handling in PHP is very similar to Java.
- In most cases when an error occurs at the database level there isn't an elegant
way to respond to the user apart from showing an error screen.
- For development purposes it is useful to display the error itself.
- However, we don't want the rest of the code to run because it could break remaining code and the error message will print outside of valid HTML.
- We can end the execution of our PHP early by calling the `die()` function.
- The `die()` function can also take a string which will be echoed to the output.
- Connecting to a database and handling an exception:
  ```php
  try {
    $db = new PDO('sqlite:db/test.sqlite');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) { 
    die("Error: " . $e->getMessage());
  }
  ```

### A `db_defs.php` file
- One of the big advantages of PDO is the ability to switch RDBMS without affecting the rest of the code.
- However, every time we access the database we have a database specific connection string!
- This would need to be changed in every file.
- Instead it is better if we create a `db_open()` function which contains the creation
of the connection.
- If we change databases later then only the `db_open()` function needs to be changed.
- An example db_defs.php file:
  ```php
  function db_open(){
    try {
      $db = new PDO('sqlite:db/database.sqlite'); 
      $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) { 
      die("Error: " . $e->getMessage());
    }
    return $db; 
  }
  ```
- This function would be called as follows:
  ```php
  $db = db_open();
  ```
:::note
You will also need to include "includes/db_defs.php"
:::

### Web Application Structure
- As many different types of files are required to build a web application, a well organised directory structure is required.
- A web application could have the following structure (note this is if you aren't using Laravel):
```
  web application directory/ 
    includes subdirectory/
      db_defs.php - functions relating to SQL such as connecting and handling errors.
      defs.php - other web application functions. 
    db subdirectory/
      database.sqlite - the SQLite database 
    sql subdirectory/
      database.sql - the SQL definitions file other web application files
```
