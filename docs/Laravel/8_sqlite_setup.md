---
title: Laravel SQLite Setup
tag: [laravel, sqlite, db]
sidebar_label: '8. Laravel SQLite Setup'
aidebar_position: 8
---

## Laravel SQLite Setup
- We will use SQLite with Laravel.
- By default, Laravel is configured for
using MySQL.
- Configuration and environment files need to be changed for Laravel to work with SQLite.
### Setup Laravel for SQLite
- Update database configuration file located in config/database.php file by changing (around line 18):
```php
'default' => env('DB_CONNECTION', 'mysql'),
```
```php
'default' => env('DB_CONNECTION', 'sqlite'),
```
- Replace MySQL setting in the file .env (under the project’s root directory):
  ```php
  DB_CONNECTION=mysql DB_HOST=127.0.0.1 DB_PORT=3306 DB_DATABASE=homestead DB_USERNAME=homestead DB_PASSWORD=secret
  ```