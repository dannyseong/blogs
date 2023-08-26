---
title: Input Sanitisation
tags: [php]
sidebar_label: '18. Input Sanitisation'
sidebar_position: 18
---

## Why Input Sanitisation is needed?

Input sanitisation is the process of ensuring that **user-entered data cannot damage stored information, reveal secret information, or otherwise cause harm**. It is necessary because users may be malicious or careless.

There are three main forms of user sanitisation:

1. **Preventing cross-site scripting (XSS) attacks**
   Preventing user input from being rendered as HTML or executed as JavaScript on the client. This can be done, e.g., by applying the function `htmlspecialchars()` to user input immediately before printing it. **`htmlspecialchars()` converts characters such as '<‘ and '&‘ to HTML entities '&lt;‘ and '&amp;'.**
2. **Preventing SQL injection attacks**
   Preventing user input from being executed as unintended SQL queries to the database server.
3. **Preventing command injection attacks**
   Preventing user input from being executed as unintended shell commands on the server. This can be done, e.g., by applying the function `EscapeShellCmd()` to user input immediately before using it in Shell commands. We elaborate on this below.

:::tip
In every case, it is important to limit user input to a maximum expected length before taking any further action. Passing unexpectedly long strings to any computer program is a common way to break that program or cause it to perform in unexpected ways. In PHP, we limit strings to some maximum length as follows:

```php
$input = substr($input, 0, MAX_LENGTH);
```

:::

## Example:Shell Command Escapes

- Consider the following PHP code snippet intended to print a calendar for the year entered by a user in a form:
  ```php
  exec("/usr/bin/cal $userString", $result);
  ```
- If the user entered a string that was too long, or contained Unix shell commands (e.g., "2005; cat /etc/passwd“), she could succeed in printing a calendar for 2005 followed by the system password file! To prevent this, we should clean or sanitise the user input before it is used with a function such as this:

```php
function clean ($input, $maxlength) {
  $input = substr($input, 0, $maxlength); $input = EscapeShellCmd($input);
  return $input;
}
```

- Function `EscapeShellCmd` escapes all shell characters so they are treated as ordinary characters and the above can't happen.
