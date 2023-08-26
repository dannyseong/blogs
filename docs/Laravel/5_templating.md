---
title: Concept of Templating Languages
tag: [blade, laravel, templating]
sidebar_label: '5. Concept of Templating Languages'
aidebar_position: 5
---
Using PHP to insert data into HTML can often verbose. A templating language can make it simpler and quicker to intersperse data with HTML. Laravel uses the Blade templating language.

## Templating Languages

### Purpose of Templating Systems
- **Separate Presentation from Backends**: They allow developers to manage the design separately from the core logic.
- **Preprocessor[^1] for Text Files**: Templating languages process text files and facilitate dynamic content insertion.
- **Enhance Readability**: They make the code cleaner and more understandable, compared to using regular print or echo statements.

>
[^1] Refer to a system that processes the template code before it's sent to the browser or executed by the server. It scans the template, filled with various tags and placeholders (like {{name}} in Mustache), and replaces those with actual data from the backend.

### Challenges with Non-Templating Languages:
Using traditional echo or print statements (e.g., `System.out.print()` in Java or `print` in Python) has disadvantages:

1. Cumbersome to write
2. Makes the data format hard to read
3. Difficulty in interspersing data
4. Poor separation of code and design
5. Requires web designers to understand the underlying code

### PHP as a Templating Language
PHP itself functions as a templating language, but it has areas that can still be improved.

### Development of Other Templating Languages
Various templating languages have been introduced to address these limitations. Most are inspired by `Mustache`, a simple language recognized by its use of braces `{}`.

- **Mustache**: An example is Hello {{name}}, which is easier to read than the PHP equivalent `Hello <?= $name ?>`.
- **Handlebars**: An extension of `Mustache` that supports control flow logic like conditionals and loops.
- **Smarty & Blade**: Different templating languages, with `Blade` being part of Laravel.
