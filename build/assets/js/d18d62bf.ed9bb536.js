"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8868],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return t?o.createElement(m,r(r({ref:n},u),{},{components:t})):o.createElement(m,r({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const i={authors:"danny",title:"Understanding the Compose Function in JavaScript\n",tag:["javascript","algorithm","compose"]},r=void 0,l={permalink:"/blog/2023/08/22/compose-function",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-22-compose-function.md",source:"@site/blog/2023-08-22-compose-function.md",title:"Understanding the Compose Function in JavaScript\n",description:"In functional programming, composing functions is a powerful concept that allows the creation of new functions by combining multiple functions together. The compose function in JavaScript takes an array of functions and returns a new function that applies these functions from left to right on an input. Let's explore how this works in detail.",date:"2023-08-22T00:00:00.000Z",formattedDate:"August 22, 2023",tags:[],readingTime:2.29,hasTruncateMarker:!1,authors:[{name:"Daehoon Seong",title:"Developers & Electrical Engineer",url:"https://github.com/dannyseong",imageURL:"https://avatars.githubusercontent.com/u/99000722?v=4",key:"danny"}],frontMatter:{authors:"danny",title:"Understanding the Compose Function in JavaScript\n",tag:["javascript","algorithm","compose"]},prevItem:{title:"Allow one call function: Deep dive into Closure\n",permalink:"/blog/2023/08/25/allow-one-call-func copy"},nextItem:{title:"How to Purchase and Remotely Access AWS EC2 Ubuntu from a Mac",permalink:"/blog/2023/08/13/access_aws_ec2_ubuntu_onMac"}},s={authorsImageUrls:[void 0]},c=[{value:"Code Breakdown",id:"code-breakdown",level:2},{value:"1. Identify Function",id:"1-identify-function",level:3},{value:"2. Composing Functions",id:"2-composing-functions",level:3},{value:"Example",id:"example",level:2},{value:"Start",id:"start",level:3},{value:"First Step",id:"first-step",level:3},{value:"Second Step",id:"second-step",level:3},{value:"Conclusion",id:"conclusion",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In functional programming, composing functions is a powerful concept that allows the creation of new functions by combining multiple functions together. The compose function in JavaScript takes an array of functions and returns a new function that applies these functions from left to right on an input. Let's explore how this works in detail."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var compose = function (functions) {\n  if (functions.length === 0) {\n    return function (x) {\n      return x;\n    };\n  }\n\n  return functions.reduceRight(function (prevFn, nextFn) {\n    return function (x) {\n      return nextFn(prevFn(x));\n    };\n  });\n};\n")),(0,a.kt)("h2",{id:"code-breakdown"},"Code Breakdown"),(0,a.kt)("h3",{id:"1-identify-function"},"1. Identify Function"),(0,a.kt)("p",null,"If the input array ",(0,a.kt)("inlineCode",{parentName:"p"},"functions")," is empty, the function returns an identity function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (functions.length === 0) {\n  return function (x) {\n    return x;\n  };\n}\n")),(0,a.kt)("p",null,"The simply returns the input ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," unchanged."),(0,a.kt)("h3",{id:"2-composing-functions"},"2. Composing Functions"),(0,a.kt)("p",null,"If the array is not empty, the ",(0,a.kt)("inlineCode",{parentName:"p"},"reduceRight")," method is used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"return functions.reduceRight(function (prevFn, nextFn) {\n  return function (x) {\n    return nextFn(prevFn(x));\n  };\n});\n")),(0,a.kt)("p",null,"Here's how it works:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Starting from the end"),": Since ",(0,a.kt)("inlineCode",{parentName:"li"},"reduceRight")," goes from the end of the array to the beginning, it starts with the last function."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Composing step-by-step"),": In each step, it takes the current function (nextFn) and the composition of the previous functions (prevFn), and combines them into a new function."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Final Result"),": The final result is a new function that applies all the functions in the functions array from left to right to an input x.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's take a closer look at how compose(","[f, g, h]",") would be evaluated with the above compose function. We'll break down each step:"),(0,a.kt)("h3",{id:"start"},"Start"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"reduceRight")," begins at the last element of the array, which is ",(0,a.kt)("inlineCode",{parentName:"p"},"h"),". At this stage, ",(0,a.kt)("inlineCode",{parentName:"p"},"prevFn")," is assigned ",(0,a.kt)("inlineCode",{parentName:"p"},"h"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"nextFn")," is assigned ",(0,a.kt)("inlineCode",{parentName:"p"},"g"),"."),(0,a.kt)("h3",{id:"first-step"},"First Step"),(0,a.kt)("p",null,"A new function is created. This function takes an input ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and calculates ",(0,a.kt)("inlineCode",{parentName:"p"},"g(h(x))"),". The reason ",(0,a.kt)("inlineCode",{parentName:"p"},"g")," is applied after ",(0,a.kt)("inlineCode",{parentName:"p"},"h")," is due to the right-to-left evaluation of reduceRight."),(0,a.kt)("h3",{id:"second-step"},"Second Step"),(0,a.kt)("p",null,"Now, ",(0,a.kt)("inlineCode",{parentName:"p"},"prevFn")," is the function that calculates ",(0,a.kt)("inlineCode",{parentName:"p"},"g(h(x))"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"nextFn")," is assigned ",(0,a.kt)("inlineCode",{parentName:"p"},"f"),". A new function is again created, and this function takes an input ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and calculates ",(0,a.kt)("inlineCode",{parentName:"p"},"f(g(h(x)))"),"."),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"All functions have now been processed, and the final result is a new function that calculates ",(0,a.kt)("inlineCode",{parentName:"p"},"f(g(h(x)))"),". If you pass an input value to this composed function, it will apply f, g, and h to that input in sequence."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"compose")," function is a fascinating construct that leverages the power of functional programming. By understanding how it builds a chain of function calls, you can use it to create more modular and maintainable code. Whether you're working with a series of transformations, validations, or any other sequential operations, ",(0,a.kt)("inlineCode",{parentName:"p"},"compose")," helps you structure them in a clean and understandable way."))}d.isMDXComponent=!0}}]);