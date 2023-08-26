---
title: What is Web Framework
tags: [webframework, laravel, php]
sidebar_label: '1. What is Web Framework'
sidebar_position: 1
---

Web development often involves writing repetitive code for common tasks. For instance, when creating a new table for a website, multiple tasks need to be accomplished: writing SQL for table creation, crafting templates for adding, viewing, listing, and updating items, and developing PHP scripts for input validation and output sanitization. These tasks can be time-consuming and repetitive, especially when repeated for each new table or feature in a project. Is there a more efficient way? That's where web frameworks come in.

Web frameworks provide pre-built APIs and tools that automate many common tasks in web application development. The concept of modern web frameworks was pioneered by Ruby on Rails, which was developed by David Heinemeier Hansson in 2004 using the Ruby programming language. Rails focused on enhancing productivity rather than just performance. Many key concepts introduced by Rails have been adopted by other web frameworks, including:

## 1. **Convention over Configuration (CoC)**:
   This principle suggests that the framework should make decisions for you based on conventions, reducing the need for configuration. For instance, if you create a "Person" table with "firstname" and "lastname" columns, the framework might assume that you want a "Person" class with "firstname" and "lastname" properties, and similarly, forms and scripts would be named accordingly. Rails provides code generation tools that assume consistent naming throughout the application.

## 2. **Don't Repeat Yourself (DRY)**:
   DRY is a philosophy that encourages minimizing redundant code to save time and reduce errors. While functions can help reduce repetition, sometimes generating files becomes necessary. Code generation tools play a fundamental role in achieving DRY principles.

## 3. **REST (REpresentational State Transfer)**:
   REST utilizes HTTP methods and specific URL formats to infer actions. For instance, in Rails, a request like "GET /patients/17" fetches information about a patient with ID 17, while "DELETE /patients/17" deletes the patient. Standardized RESTful interfaces can be automatically generated, simplifying communication with the server.

## 4. **Object Relational Mapping (ORM)**:
   Web applications have different languages for scripting (e.g., PHP) and databases (e.g., SQL). ORM bridges this gap by simplifying database access using object-oriented languages. Classes can map to tables, and queries can be represented by functions like fetch(), update(), and delete(). ORM interfaces can be generated from table schemas, adhering to the CoC concept.

## 5. **Scaffolding**:
   Rails introduces a mechanism called scaffolding that automates the generation of models, views, and controllers for a given model. With a single command, scaffolding can create the basic structure for an entity. While scaffolding can be extremely efficient for quick prototyping, it might not be suitable for all situations, as it might need customization.

Inspired by Ruby on Rails, numerous web frameworks have emerged for various programming languages, including PHP. While many PHP frameworks exist, you've chosen Laravel, a relatively new PHP framework that embraces many of the Rails concepts.

In summary, web frameworks streamline web development by automating common tasks, adhering to conventions, minimizing repetition, facilitating RESTful communication, simplifying database access through ORM, and providing efficient scaffolding for rapid prototyping.
