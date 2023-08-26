---
title: How does PHP work
tags: [php]
sidebar_label: '2. PHP Files'
sidebar_position: 2
---

- PHP is first and foremost a **_templating language_**.
- Any text within a PHP file not marked as PHP will be returned as is.
- A PHP file that contains solely HTML is a valid PHP file and it will simply return the HTML to the web browser(client) to be displayed.
- PHP cod can be embedded in the document by using the following delimiter:
  ```php
  <?php
  // Insert statements
  ?>
  ```
- Text can be output using the echo command, e.g.:
  ```php
  echo "Some text";
  ```
- Example

  ```php
  <!DOCTYPE html> <html>
    <head>
      <meta charset=utf-8> <title>Simple PHP Example</title>
    </head>
    <body>
      <p>
        <?php echo "Hello World"; ?>
      </p>
    </body>
  </html>
  ```

- Conversely a PHP file can solely contain PHP file and no HTML. The PHP code must still be encased within `<?php ... ?>`, since it is primarily a templating language.
- HTML can also be output within PHP code.
