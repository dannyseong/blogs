---
title: Namespace and Use
tags: [php]
sidebar_label: '12. Namespace and Use'
sidebar_position: 12
---
## Namespace
- By default, all constant, class and function names are placed in a global space.
- For large systems, naming conflicts may happen, e.g.:
  * You have a class called Product, but a 3rd party library that you include also has a class called Product.
- Namespace solves name collision problem by allowing constants, classes, and functions to be grouped into namespaced libraries.
- Namespaced code is defined using a single `namespace` keyword at the top of your PHP file.

- The code following namespace declaration will belong to that namespace.
- In our product example, the Product class is placed in the wp namespace with the following declaration:

```php
<?php 
// highlight-next-line
namespace wp; 
class Product{
...
}
```

- To use the Product class, after we have included it, we can specify the fully-qualified name, e.g.:
```php
p = new \wp\Product('x', 'y', 1, 'z.jpg');
```

- **Another way to use Product is to import the class using the keyword `use`.**

## Use
- In `index.php`, the product class was imported using: 
```php
use wp\Product;
```
- Later on, Product can be used without fully-qualified name, e.g.: 
```php
p = new Product(‘x’, ‘y’, 1, ‘z.jpg’);
```

- use, combined with the keyword as, can be used to create an alias. E.g.: 
```php
use wp\Product as Stock;
```

- Later on, we can refer to Product as Stock. E.g.: 
```php
P = new Stock(‘x’, ‘y’, 1, ‘z.jpg’);
```
