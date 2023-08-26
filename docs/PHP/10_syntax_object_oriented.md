---
title: Object Oriented PHP
tags: [php]
sidebar_label: '10. Object Oriented PHP'
sidebar_position: 10
---
PHP supports all the features of object-oriented programming, e.g.: classes, objects, visibility, static, inheritance, interface etc.

## Classes
A class is like a template. The Product class (below) defines what a product object contains and can do.

```php title="product.php"
<?php 
namespace wp;

/** A class that defines products */ 
class Product{
  // Member variables
  // highlight-start
  public $name; 
  // public allow access from within and outside of this class
  var $description; 
  // var also means public
  protected $price; 
  // protected variables can only be access from this and it’s parent
  // and subclasses
  private $image; 
  // private variables can only be access from this class
  // highlight-end

  // highlight-start
  // Constructor (note: there are 2 under scrolls before construct) 
  function __construct($name, $description, $price, $image){
    $this->name = $name; 
    $this->description = $description; 
    $this->price = $price; 
    $this->image = $image;
  }
  // highlight-end

  // highlight-start
  // Accessors/Getters 
  public function getPrice(){
    return $this->price;
  } 
  function getImage(){ // this is also public
    return $this->image;
  }
  // Mutator or setter 
  function setPrice($price){
    $this->price = $price; 
  }
  // highlight-end
} 
?>
```

## Objects
- An object is an instance of a class, i.e. fill in the template with data.
- The code below make use of the Product class to create and use product objects.

```php title="index.php"
<?php
use wp\Product; 
require 'product.php';

// Create product objects
$p1 = new Product('Blue Water', '8ft Mini Mal Bamboo', 399.00, 'img/bw.jpg'); 
$p2 = new Product('Cutting Edge', '6ft softboard', 169.00, 'img/ce.jpg');

// Access object’s variables 
$name = $p1->name;
$des = $p1->description;

// Call object’s functions 
$price = $p1->getPrice(); 
$p1->setPrice(500);
?>
```

## Inheritance
- When you extend a class, the subclass inherits all of the public and protected methods from the parent class.
- The subclass can override the inherited methods.
- An example of inheritance and override:

```php title="sunscreen.php"
namespace wp;
use wp\Product; require_once 'product.php';
// sunscreen is a type of product 
class Sunscreen extends Product{
  protected $SPF ;

  function __construct ($name, $description, $price, $image, $spf){       
    $this->SPF = $spf;
    parent::__construct ($name, $description, $price, $image);
  }

  function getSPF(){ 
    return $this->SPF;
  } 
?>
```
- `parent::__construct` is use to call the constructor of the super class. 

:::note
Double colon (::) is used for calling static methods.
:::

```php title="index2.php
<?php
  use wp\Sunscreen; 
  require_once 'sunscreen.php';

  // Create sunscreen objects
  $ss1 = new Sunscreen('Banana Boat', 'For kids', 29, 'img/bb.jpg', 30); $ss2 = new Sunscreen('Every Day', 'Woolies', 9, 'img/ed.jpg', 20);
  
  // Access object’s variables.
  $name = $ss1->name; // has variables from Product 
  $des = $ss1->description;

  // Call object’s functions
  $price = $ss1->getPrice(); // inherites functions from Product 
  $spf = $ss1->getSPF(); // has access to SunScreen functions.
?>
```