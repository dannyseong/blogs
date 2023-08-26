"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const s={title:"Object Oriented PHP",tags:["php"],sidebar_label:"10. Object Oriented PHP",sidebar_position:10},a=void 0,c={unversionedId:"PHP/syntax_object_oriented",id:"PHP/syntax_object_oriented",title:"Object Oriented PHP",description:"PHP supports all the features of object-oriented programming, e.g.: classes, objects, visibility, static, inheritance, interface etc.",source:"@site/docs/PHP/10_syntax_object_oriented.md",sourceDirName:"PHP",slug:"/PHP/syntax_object_oriented",permalink:"/docs/PHP/syntax_object_oriented",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PHP/10_syntax_object_oriented.md",tags:[{label:"php",permalink:"/docs/tags/php"}],version:"current",sidebarPosition:10,frontMatter:{title:"Object Oriented PHP",tags:["php"],sidebar_label:"10. Object Oriented PHP",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"9. Action Script and Guestbook Example",permalink:"/docs/PHP/action_script"},next:{title:"11. Include and require",permalink:"/docs/PHP/syntax_include_require"}},o={},p=[{value:"Classes",id:"classes",level:2},{value:"Objects",id:"objects",level:2},{value:"Inheritance",id:"inheritance",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"PHP supports all the features of object-oriented programming, e.g.: classes, objects, visibility, static, inheritance, interface etc."),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("p",null,"A class is like a template. The Product class (below) defines what a product object contains and can do."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="product.php"',title:'"product.php"'},"<?php \nnamespace wp;\n\n/** A class that defines products */ \nclass Product{\n  // Member variables\n  // highlight-start\n  public $name; \n  // public allow access from within and outside of this class\n  var $description; \n  // var also means public\n  protected $price; \n  // protected variables can only be access from this and it\u2019s parent\n  // and subclasses\n  private $image; \n  // private variables can only be access from this class\n  // highlight-end\n\n  // highlight-start\n  // Constructor (note: there are 2 under scrolls before construct) \n  function __construct($name, $description, $price, $image){\n    $this->name = $name; \n    $this->description = $description; \n    $this->price = $price; \n    $this->image = $image;\n  }\n  // highlight-end\n\n  // highlight-start\n  // Accessors/Getters \n  public function getPrice(){\n    return $this->price;\n  } \n  function getImage(){ // this is also public\n    return $this->image;\n  }\n  // Mutator or setter \n  function setPrice($price){\n    $this->price = $price; \n  }\n  // highlight-end\n} \n?>\n")),(0,i.kt)("h2",{id:"objects"},"Objects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An object is an instance of a class, i.e. fill in the template with data."),(0,i.kt)("li",{parentName:"ul"},"The code below make use of the Product class to create and use product objects.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="index.php"',title:'"index.php"'},"<?php\nuse wp\\Product; \nrequire 'product.php';\n\n// Create product objects\n$p1 = new Product('Blue Water', '8ft Mini Mal Bamboo', 399.00, 'img/bw.jpg'); \n$p2 = new Product('Cutting Edge', '6ft softboard', 169.00, 'img/ce.jpg');\n\n// Access object\u2019s variables \n$name = $p1->name;\n$des = $p1->description;\n\n// Call object\u2019s functions \n$price = $p1->getPrice(); \n$p1->setPrice(500);\n?>\n")),(0,i.kt)("h2",{id:"inheritance"},"Inheritance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When you extend a class, the subclass inherits all of the public and protected methods from the parent class."),(0,i.kt)("li",{parentName:"ul"},"The subclass can override the inherited methods."),(0,i.kt)("li",{parentName:"ul"},"An example of inheritance and override:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="sunscreen.php"',title:'"sunscreen.php"'},"namespace wp;\nuse wp\\Product; require_once 'product.php';\n// sunscreen is a type of product \nclass Sunscreen extends Product{\n  protected $SPF ;\n\n  function __construct ($name, $description, $price, $image, $spf){       \n    $this->SPF = $spf;\n    parent::__construct ($name, $description, $price, $image);\n  }\n\n  function getSPF(){ \n    return $this->SPF;\n  } \n?>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parent::__construct")," is use to call the constructor of the super class. ")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Double colon (::) is used for calling static methods.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="index2.php',title:'"index2.php'},"<?php\n  use wp\\Sunscreen; \n  require_once 'sunscreen.php';\n\n  // Create sunscreen objects\n  $ss1 = new Sunscreen('Banana Boat', 'For kids', 29, 'img/bb.jpg', 30); $ss2 = new Sunscreen('Every Day', 'Woolies', 9, 'img/ed.jpg', 20);\n  \n  // Access object\u2019s variables.\n  $name = $ss1->name; // has variables from Product \n  $des = $ss1->description;\n\n  // Call object\u2019s functions\n  $price = $ss1->getPrice(); // inherites functions from Product \n  $spf = $ss1->getSPF(); // has access to SunScreen functions.\n?>\n")))}d.isMDXComponent=!0}}]);