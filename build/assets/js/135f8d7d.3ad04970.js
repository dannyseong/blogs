"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i="Closure",l={unversionedId:"JavaScript/closure",id:"JavaScript/closure",title:"Closure",description:"What is Closure?",source:"@site/docs/JavaScript/closure.md",sourceDirName:"JavaScript",slug:"/JavaScript/closure",permalink:"/docs/JavaScript/closure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/closure.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"5. Object",permalink:"/docs/JavaScript/object"},next:{title:"When, Where, and How to use the arrow function syntax!!",permalink:"/docs/JavaScript/why_use_arrow_function"}},s={},u=[{value:"What is Closure?",id:"what-is-closure",level:2},{value:"When to use closure concept?",id:"when-to-use-closure-concept",level:2},{value:"Where and How to use closure concept?",id:"where-and-how-to-use-closure-concept",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"closure"},"Closure"),(0,r.kt)("h2",{id:"what-is-closure"},"What is Closure?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A closure is created when a function is defined inside another function, and the ",(0,r.kt)("strong",{parentName:"li"},"inner function reference variables in the outer function's scope"),". When the inner function is returned from the outer function, it retains a reference to the outer function's scope, and can continue to access those variables even after the outer function has finished executing. Vice-versa is not ture!"),(0,r.kt)("li",{parentName:"ul"},"In simple terms a closure can ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"remember")," values from its outer function's scope and use them later"),", even if the outer function has returned and those values would normally be out of scope.")),(0,r.kt)("h2",{id:"when-to-use-closure-concept"},"When to use closure concept?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From definition, you can see that it's used for retrival of values from outer parent function so we can understand that closure can be used ",(0,r.kt)("strong",{parentName:"li"},"(1)for retrival of dead values which have become out of scope"),". Additionally, we can comprehend that it can be used ",(0,r.kt)("strong",{parentName:"li"},"(2)for privating some variables or functions"),"."),(0,r.kt)("li",{parentName:"ul"},"While writing the code whenever there is a need for these types of thing try to incorporate this closure concept i.e in programmer language it's called ",(0,r.kt)("inlineCode",{parentName:"li"},"lexical environment."))),(0,r.kt)("h2",{id:"where-and-how-to-use-closure-concept"},"Where and How to use closure concept?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Private variable and functions:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const makeCounter = () => {\n  let count = 0;\n  return () => {\n    count++;\n    console.log(count);\n  };\n};\n\nlet counter = makeCounter();\ncounter(); // logs 1\ncounter(); // logs 2\ncounter(); // logs 3\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In this example, ",(0,r.kt)("inlineCode",{parentName:"li"},"makeCounter")," is an ",(0,r.kt)("inlineCode",{parentName:"li"},"arrow function")," that returns another ",(0,r.kt)("inlineCode",{parentName:"li"},"arrow function"),". The returned function increments a count variable each time it is called, and logs the new value of ",(0,r.kt)("inlineCode",{parentName:"li"},"count")," to the console"),(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"makeCounter")," is called, it creates a new scope with a ",(0,r.kt)("inlineCode",{parentName:"li"},"count"),' variable initialised to 0. It then returns a new arrow function that "closes over" this scope and increments the count variable each time it is called.'),(0,r.kt)("li",{parentName:"ul"},"When we assign the returned arrow function to the counter variable, we create a closure that retains a reference to the count variable."),(0,r.kt)("li",{parentName:"ul"},"Each time we call ",(0,r.kt)("inlineCode",{parentName:"li"},"counter()"),", it increments the ",(0,r.kt)("inlineCode",{parentName:"li"},"count"),' variable and logs the new value to the console, because it is still "closing over" the original ',(0,r.kt)("inlineCode",{parentName:"li"},"count")," variable in the outer function's scope."),(0,r.kt)("li",{parentName:"ul"},"Thus, because the ",(0,r.kt)("inlineCode",{parentName:"li"},"count")," variable is not exposed outside of the returned object, it is effectively a private variable that can only be accessed or modified throught the makeCounter() methods.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Partial function:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function add(x) {\n  return function (y) {\n    return x + y;\n  };\n}\n\nlet add5 = add(5);\nconsole.log(add5(3)); // 8\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In this example, the ",(0,r.kt)("inlineCode",{parentName:"li"},"add()")," function returns another function that takes a single argument and returns the ",(0,r.kt)("inlineCode",{parentName:"li"},"sum")," of that argument and the ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," value from the outer function's scope."),(0,r.kt)("li",{parentName:"ul"},'This allows us to "partially apply" the ',(0,r.kt)("inlineCode",{parentName:"li"},"add()")," function by passing in an ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," value and getting back a new function that always adds that value to its argument."),(0,r.kt)("li",{parentName:"ul"},"Thus, we can then use the new function like any other function, passing in different ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," values as needed.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"For preserving states in asychronous code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const animate = (element, from, to, duration) => {\n  let start = performance.now();\n\n  const update = () => {\n    let time = performance.now() - start;\n    let progress = time / duration;\n    let value = from + (to - from) * progress;\n\n    element.style.left = value + 'px';\n\n    if (progress < 1) {\n      requestAnimationFrame(update);\n    }\n  };\n  requestAnimationFrame(update);\n};\n\nlet element = document.getElementById('my-element');\nanimate(element, 0, 100, 1000);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In this example, the animate() function creates a closure over the start variable, which is used to calculate the elapsed time since the animation started."),(0,r.kt)("li",{parentName:"ul"},'The update() function also "closes over" the element, from, to, and duration arguments, so that it can use them to update the element\'s position over time.'),(0,r.kt)("li",{parentName:"ul"},"Thus, by creating a closure over these values, we can preserve their state between animation frames, even though the update() function is called asynchronously by requestAnimationFrame().")))}m.isMDXComponent=!0}}]);