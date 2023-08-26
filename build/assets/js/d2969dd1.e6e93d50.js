"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8731],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>h});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?t.createElement(h,i(i({ref:n},c),{},{components:a})):t.createElement(h,i({ref:n},c))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4976:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=a(7462),r=(a(7294),a(3905));const l={title:"Loops in PHP",tags:["php"],sidebar_label:"5. Loops in PHP",sidebar_position:5},i=void 0,o={unversionedId:"PHP/syntax_loop",id:"PHP/syntax_loop",title:"Loops in PHP",description:"Basic syntax",source:"@site/docs/PHP/5_syntax_loop.md",sourceDirName:"PHP",slug:"/PHP/syntax_loop",permalink:"/docs/PHP/syntax_loop",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PHP/5_syntax_loop.md",tags:[{label:"php",permalink:"/docs/tags/php"}],version:"current",sidebarPosition:5,frontMatter:{title:"Loops in PHP",tags:["php"],sidebar_label:"5. Loops in PHP",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Arrays in PHP",permalink:"/docs/PHP/syntax_array"},next:{title:"6. User-defined functions",permalink:"/docs/PHP/syntax_functions"}},p={},s=[{value:"Basic syntax",id:"basic-syntax",level:2},{value:"Foreach loops",id:"foreach-loops",level:2},{value:"Display the contents of an array in a HTML list",id:"display-the-contents-of-an-array-in-a-html-list",level:2},{value:"Including PHP variables in HTML",id:"including-php-variables-in-html",level:2},{value:"Embedding PHP within HTML",id:"embedding-php-within-html",level:2},{value:"While and do-while",id:"while-and-do-while",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"basic-syntax"},"Basic syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'// for (initialisation; condition; increment){}\nfor ($i = 0; $i < 5; $i++>)\n{\n  echo $i."\\n";\n}\n')),(0,r.kt)("h2",{id:"foreach-loops"},"Foreach loops"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Foreach loops iterate through an array and automatically place the value of the array element into a variable."),(0,r.kt)("li",{parentName:"ul"},"Syntax:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"foreach(array_expression as $value);\nforeach(array_expression as $key=>$value);\n"))),(0,r.kt)("li",{parentName:"ul"},"Example:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$array = array(1, 2, 3, 4);\nforeach ($array as $number)\n{\n  echo $number . "\\n";\n}\n/* output\n1\n2\n3\n4\n*/\n')))),(0,r.kt)("h2",{id:"display-the-contents-of-an-array-in-a-html-list"},"Display the contents of an array in a HTML list"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n  $names = array('Tom','Bill','Fred');\n  echo \"<ul>\\n\";\n  foreach($names as $name)\n  {\n    echo \"<li> $name </li>\";\n  }\n  echo \"</ul>\\n\";\n?>\n")),(0,r.kt)("h2",{id:"including-php-variables-in-html"},"Including PHP variables in HTML"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There are two ways to include PHP variable in HTML:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Use the standard ",(0,r.kt)("inlineCode",{parentName:"li"},"<?php ... ?>"),"tag with an echo command."),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("strong",{parentName:"li"},"PHP expression tag")," ",(0,r.kt)("inlineCode",{parentName:"li"},"<?= ... ?>"),"."))),(0,r.kt)("li",{parentName:"ul"},"The PHP expression tag is shorter and also allow calculations and function calls.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php echo($name); ?>\n<?= $name ?>\n")))),(0,r.kt)("h2",{id:"embedding-php-within-html"},"Embedding PHP within HTML"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PHP can be interspersed within HTML code. For loops can be broken up:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n  $names = array('Tom', 'Bill', 'Fred');\n?>\n<!DOCTYPE html>\n<html>\n...\n<body>\n  <ul>\n    <?php foreach($names as $name) { ?>\n    <li> <?= $name?> </li>\n    <?php } ?>\n  </ul>\n</body>\n</html>\n")))),(0,r.kt)("h2",{id:"while-and-do-while"},"While and do-while"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PHP ",(0,r.kt)("inlineCode",{parentName:"li"},"while")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"do-while")," loops have the same syntax as Java."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"break")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"continue")," keywords are also supported.")))}d.isMDXComponent=!0}}]);