---
title: Debugging Tips
tags: [php]
sidebar_label: '16. Debugging tips'
sidebar_position: 16
---

## 1. `var_dump()`

- Test early, and test often. E.g. after you have written a function, test it, by calling it and print out the result, before continue to write more code.
- When your program is not working:
  - Look at the error message, and try to understand what it is saying. Trust the error message.
  - Determine if it’s a syntax or logical error.
- Syntax errors are usually fairly easy to fix.

- With logic error, try to determine the approximate location of the error. This can be done by:
  - Comment out some code to see the problem goes away, and/or
  - Inserting print/echo statements to print out the affected variables, until you can see some abnormal values.
- `echo` can be used to print value in a simple variable. But for more complex variable, `var_dump()` provide more detail.
- Sometimes it’s useful to stop the program execution right after print. The following two lines of code can be used:

```php
var_dump(variables);
exit();
```

- Finding out where the problem is occurring will also help you determine what is causing the problem.
- If you know what the problem is then fixing the problem is usually as not difficult.
- Double check with the requirement to ensure your solution satisfies the requirement.

## 2. `dd()` and `logger()`

- Use the error log to help you identify errors. Laravel’s error log can be found at: `storage/logs`
- When you try to execute a php artisan command, but receive this following error:
  ```bash
  [Symfony\Component\Debug\Exceptio n\FatalThrowableError]
  Parse error: syntax error, unexpected end of file, expecting ',' or ')'
  ```
- One possible cause could be an syntax error in your route file.
- To print something out to the browser (e.g. value in a variable) use: `dump(variable_name);`
- To dump and exit, use: `dd(variable_name);`
- Use `logger()` to write debug messages to the log.
