"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||h[m]||i;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={title:"Execution Context: Call Stack\n",tags:["javascript"],sidebar_label:"2. Execution Context #2",sidebar_position:2},r=void 0,l={unversionedId:"JavaScript/execution_context2",id:"JavaScript/execution_context2",title:"Execution Context: Call Stack\n",description:"The Execution Context (EC)",source:"@site/docs/JavaScript/2_execution_context2.md",sourceDirName:"JavaScript",slug:"/JavaScript/execution_context2",permalink:"/docs/JavaScript/execution_context2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/2_execution_context2.md",tags:[{label:"javascript",permalink:"/docs/tags/javascript"}],version:"current",sidebarPosition:2,frontMatter:{title:"Execution Context: Call Stack\n",tags:["javascript"],sidebar_label:"2. Execution Context #2",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Execution Context #1",permalink:"/docs/JavaScript/execution_context"},next:{title:"3. Execution Context #3",permalink:"/docs/JavaScript/execution_context3"}},c={},s=[{value:"The Execution Context (EC)",id:"the-execution-context-ec",level:2},{value:"What&#39;s the Call Stack?",id:"whats-the-call-stack",level:2},{value:"Thinking of the Call Stack like a Stack of Books",id:"thinking-of-the-call-stack-like-a-stack-of-books",level:2}],p={toc:s},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-execution-context-ec"},"The Execution Context (EC)"),(0,o.kt)("p",null,"When JavaScript runs, it starts with something called the ",(0,o.kt)("inlineCode",{parentName:"p"},"Global Execution Context (GEC)"),". Think of this as the main stage where all our main actions happen. The variables here are called global variables because everyone can access them."),(0,o.kt)("h2",{id:"whats-the-call-stack"},"What's the Call Stack?"),(0,o.kt)("p",null,"JavaScript sometimes needs to do many things at once. Every time it starts with a new job(like a function), it creates a new context for that job."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var apple = 10;\nfunction total() {\n  var price = 2;\n  return apple * price;\n}\nvar appleTotal = total();\nconsole.log(appleTotal);\n\n")),(0,o.kt)("p",null,"Here's a simple breakdown:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"JavaScript first sets up the main stage, the GEC, with ",(0,o.kt)("inlineCode",{parentName:"li"},"apple"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"appleTotal"),", and the ",(0,o.kt)("inlineCode",{parentName:"li"},"total")," function."),(0,o.kt)("li",{parentName:"ol"},"It starts with the apple variable."),(0,o.kt)("li",{parentName:"ol"},"When it sees ",(0,o.kt)("inlineCode",{parentName:"li"},"total()"),", it makes a new context just for that function."),(0,o.kt)("li",{parentName:"ol"},"This new context is like a new stage placed on top of the main stage.")),(0,o.kt)("h2",{id:"thinking-of-the-call-stack-like-a-stack-of-books"},"Thinking of the Call Stack like a Stack of Books"),(0,o.kt)("p",null,"Imagine you have a pile of books. The Call Stack is like that pile. You always read the top book first. When a function starts, a new book (context) is placed on top. When the function finishes, you remove the top book."),(0,o.kt)("p",null,"Inside our total() function:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It sets a price."),(0,o.kt)("li",{parentName:"ol"},"It multiplies this price with the apple from the main stage."),(0,o.kt)("li",{parentName:"ol"},"After that, it gives back the result to ",(0,o.kt)("inlineCode",{parentName:"li"},"appleTotal"),"."),(0,o.kt)("li",{parentName:"ol"},"Then, it's done and removed from the pile of books."),(0,o.kt)("li",{parentName:"ol"},"The main stage continues and shows the ",(0,o.kt)("inlineCode",{parentName:"li"},"appleTotal"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"The JavaScript engine does not compile codes in a function until the function is called.")),(0,o.kt)("li",{parentName:"ul"},"When a function is compiled, a new execution context is created and put at the top of the stack."),(0,o.kt)("li",{parentName:"ul"},"All execution contexts are managed in a stack structure. The process happens from the top of the stack to the bottom."),(0,o.kt)("li",{parentName:"ul"},"The two-step process, compiling and execution, happens whenever a function is called."))))}h.isMDXComponent=!0}}]);