"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?i.createElement(m,l(l({ref:t},c),{},{components:n})):i.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={title:"Include and require",tags:["php"],sidebar_label:"11. Include and require",sidebar_position:11},l=void 0,o={unversionedId:"PHP/syntax_include_require",id:"PHP/syntax_include_require",title:"Include and require",description:"Accessing to external files: require or include",source:"@site/docs/PHP/11_syntax_include_require.md",sourceDirName:"PHP",slug:"/PHP/syntax_include_require",permalink:"/docs/PHP/syntax_include_require",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PHP/11_syntax_include_require.md",tags:[{label:"php",permalink:"/docs/tags/php"}],version:"current",sidebarPosition:11,frontMatter:{title:"Include and require",tags:["php"],sidebar_label:"11. Include and require",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"10. Object Oriented PHP",permalink:"/docs/PHP/syntax_object_oriented"},next:{title:"12. Namespace and Use",permalink:"/docs/PHP/syntax_namespace_use"}},u={},s=[{value:"Accessing to external files: require or include",id:"accessing-to-external-files-require-or-include",level:2},{value:"Example: Redefinition issue",id:"example-redefinition-issue",level:2},{value:"1. First Inclusion:",id:"1-first-inclusion",level:3},{value:"2. Second Inclusion:",id:"2-second-inclusion",level:3},{value:"3. Function Redefinition:",id:"3-function-redefinition",level:3},{value:"4. Constant Redefinition:",id:"4-constant-redefinition",level:3}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"accessing-to-external-files-require-or-include"},"Accessing to external files: require or include"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Classes, methods and constants in another PHP file can be accessed by including it using one of the following directives:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"include"),(0,r.kt)("li",{parentName:"ul"},"include_once "),(0,r.kt)("li",{parentName:"ul"},"require"),(0,r.kt)("li",{parentName:"ul"},"require_once"))),(0,r.kt)("li",{parentName:"ul"},"The difference between require and include, is that ",(0,r.kt)("strong",{parentName:"li"},"require will cause the script to terminate if the included file can not be loaded"),"."),(0,r.kt)("li",{parentName:"ul"},"PHP allows the same file to be included multiple times which could result in errors due to multiple definition of the same methods and constants and also execution of the same code multiple times."),(0,r.kt)("li",{parentName:"ul"},"In the Product example ",(0,r.kt)("inlineCode",{parentName:"li"},"index.php")," includes ",(0,r.kt)("inlineCode",{parentName:"li"},"product.php")," with the following line of code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"include 'product.php';\n")),(0,r.kt)("h2",{id:"example-redefinition-issue"},"Example: Redefinition issue"),(0,r.kt)("p",null,'Suppose you have a file named "math_utils.php" that defines a simple math function and a constant:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="math_utils.php"',title:'"math_utils.php"'},"function add($a, $b) {\n    return $a + $b;\n}\n\nconst PI = 3.14159;\n")),(0,r.kt)("p",null,'Now, let\'s say you have another file named "main.php" where you include the "math_utils.php" file multiple times:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="main.php"',title:'"main.php"'},"include 'math_utils.php';\ninclude 'math_utils.php';\n\n$result = add(5, 3);\necho \"Result: $result<br>\";\necho \"Value of PI: \" . PI;\n")),(0,r.kt)("p",null,'In this example, you are including the "math_utils.php" file twice in the "main.php" file. Let\'s see what happens:'),(0,r.kt)("h3",{id:"1-first-inclusion"},"1. First Inclusion:"),(0,r.kt)("p",null,'When you include the "math_utils.php" file for the first time, the add function and the PI constant are defined.'),(0,r.kt)("h3",{id:"2-second-inclusion"},"2. Second Inclusion:"),(0,r.kt)("p",null,'When you include the "math_utils.php" file again, PHP will attempt to define the add function and the PI constant once more. This can lead to errors, as the function and constant are already defined.'),(0,r.kt)("h3",{id:"3-function-redefinition"},"3. Function Redefinition:"),(0,r.kt)("p",null,'Since the add function was defined in the first inclusion, attempting to define it again in the second inclusion will result in a "function redefinition" error.'),(0,r.kt)("h3",{id:"4-constant-redefinition"},"4. Constant Redefinition:"),(0,r.kt)("p",null,'Similarly, trying to redefine the PI constant will result in a "constant redefinition" error.'),(0,r.kt)("p",null,'When you run the "main.php" file, you might encounter errors like "Cannot redeclare function add()" and "Constant PI already defined." To avoid these errors, you should use the include_once or require_once statements instead of include or require if you know that the file might be included more than once:'))}p.isMDXComponent=!0}}]);