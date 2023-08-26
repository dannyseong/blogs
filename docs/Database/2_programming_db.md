---
title: Programming with databases
tags: [database]
sidebar_label: '2. Programming with databases'
sidebar_position: 2
---
- There are two approaches to build a web application using PHP that uses a database:
  * Object-relational mapping(ORM)
  * Database API
- Object-relational mapping (ORM) is used by web frameworks such as `Laravel` and partially avoid SQL, using a similar object-function syntax instead.
- Non-web frameworks generally use a database API.

## Database APIs
- Prior to the release of PHP 5 (which introduced object-oriented features), most web applications used a database-specific API.
- This meant that there would be a different API for each database.
- The most popular database at the time was `MySQL`.
- As other databases became popular, there was a need for a generic API that could access all databases.
- In 2004, the PHP Data Objects (PDO) API was released which provides an object-oriented abstraction to interfacing with databases.
- The advantage is that the database can be changed with minimal code changes.
- `Laravel` provides a DB class which allows PDO-style access to the database.


