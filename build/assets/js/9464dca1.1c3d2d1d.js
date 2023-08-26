"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,b=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"Internal Middleware: express.urlencoded()\n",tags:["javascript","nodejs","express"],sidebar_label:"8. Express.urlencoded()\n",sidebar_position:8},l=void 0,s={unversionedId:"Express/urlencoded_middleware",id:"Express/urlencoded_middleware",title:"Internal Middleware: express.urlencoded()\n",description:"Starting from version 4.16.0, Express.js introduced a built-in middleware function called express.urlencoded(). This function plays a crucial role in parsing incoming requests with URL-encoded payloads. It's based on the body-parser library and provides essential functionality for handling form submissions in web applications.",source:"@site/docs/Express/8_urlencoded_middleware.md",sourceDirName:"Express",slug:"/Express/urlencoded_middleware",permalink:"/docs/Express/urlencoded_middleware",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Express/8_urlencoded_middleware.md",tags:[{label:"javascript",permalink:"/docs/tags/javascript"},{label:"nodejs",permalink:"/docs/tags/nodejs"},{label:"express",permalink:"/docs/tags/express"}],version:"current",sidebarPosition:8,frontMatter:{title:"Internal Middleware: express.urlencoded()\n",tags:["javascript","nodejs","express"],sidebar_label:"8. Express.urlencoded()\n",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"7. Express.static()\n",permalink:"/docs/Express/static_middleware"},next:{title:"What is Git Flow?",permalink:"/docs/Git/git_flow"}},o={},d=[{value:"What is express.urlencoded()?",id:"what-is-expressurlencoded",level:2},{value:"Options",id:"options",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Security Considerations",id:"security-considerations",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Starting from version 4.16.0, Express.js introduced a built-in middleware function called ",(0,a.kt)("inlineCode",{parentName:"p"},"express.urlencoded()"),". This function plays a crucial role ",(0,a.kt)("strong",{parentName:"p"},"in parsing incoming requests with URL-encoded payloads"),". It's based on the body-parser library and provides essential functionality for handling form submissions in web applications."),(0,a.kt)("h2",{id:"what-is-expressurlencoded"},"What is express.urlencoded()?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"express.urlencoded()")," is a middleware function that parses incoming requests with URL-encoded payloads. ",(0,a.kt)("strong",{parentName:"p"},"It only looks at requests where the Content-Type header matches the type option")," and ",(0,a.kt)("strong",{parentName:"p"},"accepts only UTF-8 encoding of the body"),". It also supports automatic inflation of gzip and deflate encodings."),(0,a.kt)("p",null,"The result of the parsing is a new ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," object on the request object (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"req.body"),"), containing the parsed data. This object will include key-value pairs, where the value can vary in type depending on the ",(0,a.kt)("inlineCode",{parentName:"p"},"extended")," option."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"extended"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose between parsing with the querystring library (false) or the qs library (true)."),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"inflate"),(0,a.kt)("td",{parentName:"tr",align:null},"Enables or disables handling deflated (compressed) bodies."),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Controls the maximum request body size, specified in bytes or using a string for parsing."),(0,a.kt)("td",{parentName:"tr",align:null},"Mixed"),(0,a.kt)("td",{parentName:"tr",align:null},'"100kb"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parameterLimit"),(0,a.kt)("td",{parentName:"tr",align:null},"Controls the maximum number of parameters allowed in the URL-encoded data."),(0,a.kt)("td",{parentName:"tr",align:null},"Number"),(0,a.kt)("td",{parentName:"tr",align:null},"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"Determines the media type the middleware will parse. Can be a string, array, or function."),(0,a.kt)("td",{parentName:"tr",align:null},"Mixed"),(0,a.kt)("td",{parentName:"tr",align:null},'"application/x-www-form-urlencoded"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"verify"),(0,a.kt)("td",{parentName:"tr",align:null},"A function called as verify(req, res, buf, encoding) to allow custom handling or verification."),(0,a.kt)("td",{parentName:"tr",align:null},"Function"),(0,a.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("p",null,"Here's an example of how to use express.urlencoded() in an Express application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst app = express();\n\napp.use(express.urlencoded({ extended: true }));\n\napp.post('/submit', (req, res) => {\n  console.log(req.body); // Parsed URL-encoded data\n  res.send('Form submitted successfully!');\n});\n\napp.listen(3000, () => {\n  console.log('Server running on http://localhost:3000');\n});\n")),(0,a.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"req.body"),"'s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before use. Failure to do so may lead to various security vulnerabilities."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"express.urlencoded()")," is a powerful middleware function that simplifies handling URL-encoded data in Express.js applications. By understanding its options and how to use them, developers can efficiently parse form data and build robust web applications."),(0,a.kt)("p",null,"Whether you're dealing with simple forms or complex data structures, ",(0,a.kt)("inlineCode",{parentName:"p"},"express.urlencoded()")," provides the flexibility and control needed to handle URL-encoded payloads effectively."))}c.isMDXComponent=!0}}]);