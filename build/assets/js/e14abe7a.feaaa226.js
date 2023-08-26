"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Object",tags:["javascript"],sidebar_label:"5. Object",sidebar_position:5},i=void 0,l={unversionedId:"JavaScript/object",id:"JavaScript/object",title:"Object",description:"Grouping Related Properties and Methods Together",source:"@site/docs/JavaScript/5_object.md",sourceDirName:"JavaScript",slug:"/JavaScript/object",permalink:"/docs/JavaScript/object",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/5_object.md",tags:[{label:"javascript",permalink:"/docs/tags/javascript"}],version:"current",sidebarPosition:5,frontMatter:{title:"Object",tags:["javascript"],sidebar_label:"5. Object",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"3. Execution Context #3",permalink:"/docs/JavaScript/execution_context3"},next:{title:"Closure",permalink:"/docs/JavaScript/closure"}},s={},c=[{value:"Grouping Related Properties and Methods Together",id:"grouping-related-properties-and-methods-together",level:2},{value:"1. <strong>Object Literal</strong>",id:"1-object-literal",level:3},{value:"<strong>2. Using Constructors</strong>",id:"2-using-constructors",level:3},{value:"<strong>3. Using <code>Object.create()</code></strong>",id:"3-using-objectcreate",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"grouping-related-properties-and-methods-together"},"Grouping Related Properties and Methods Together"),(0,a.kt)("p",null,"Objects are a fundamental concept in JavaScript that allow us to organise and encapsulate related ",(0,a.kt)("strong",{parentName:"p"},"data")," and ",(0,a.kt)("strong",{parentName:"p"},"functionality"),". An object combines attributes, known as ",(0,a.kt)("inlineCode",{parentName:"p"},"properties"),", and actions, known as ",(0,a.kt)("inlineCode",{parentName:"p"},"methods"),", into a single unit. This bundling of closely related state and behavior helps us model real-world entities more effectively."),(0,a.kt)("p",null,"There are different ways to create objects in JavaScript:"),(0,a.kt)("h3",{id:"1-object-literal"},"1. ",(0,a.kt)("strong",{parentName:"h3"},"Object Literal")),(0,a.kt)("p",null,"The simplest way to create an object is by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"object literal notation"),". This involves defining the object's properties and methods within curly braces."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let apple = {\n  name: "apple",       // Property\n  "hello-bye": "\ud83d\udd90",\n  0: 1,\n  ["hello-bye1"]: "\ud83d\udd90", // Property with dynamic key\n  display: () => {    // Method\n    console.log("\ud83c\udf4e");\n  },\n};\n')),(0,a.kt)("h3",{id:"2-using-constructors"},(0,a.kt)("strong",{parentName:"h3"},"2. Using Constructors")),(0,a.kt)("p",null,"Objects can be created using constructor functions like ",(0,a.kt)("inlineCode",{parentName:"p"},"new Object()")," or custom constructors. This is particularly useful when you need to create multiple objects with the same structure."),(0,a.kt)("h3",{id:"3-using-objectcreate"},(0,a.kt)("strong",{parentName:"h3"},"3. Using ",(0,a.kt)("inlineCode",{parentName:"strong"},"Object.create()"))),(0,a.kt)("p",null,"This method allows you to create a new object based on an existing object as its prototype."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Keys in objects can be of various types, including strings, numbers, words, and Symbols, while values can be primitive types, other objects, or functions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Accessing properties of an object can be done using dot notation or bracket notation:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'console.log(apple.name); // Using dot notation\nconsole.log(apple["hello-bye1"]); // Using bracket notation\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can dynamically add new properties to an object:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'apple.emoji = "\ud83c\udfd3"; // Adding a new property\nconsole.log(apple.emoji); // Accessing the new property\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"And, if needed, properties can be removed from an object:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"delete apple.emoji; // Removing a property\nconsole.log(apple); // The property 'emoji' is no longer in 'apple'\n")))}d.isMDXComponent=!0}}]);