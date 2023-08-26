"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Input Sanitisation",tags:["php"],sidebar_label:"18. Input Sanitisation",sidebar_position:18},s=void 0,o={unversionedId:"PHP/input_sanitisation",id:"PHP/input_sanitisation",title:"Input Sanitisation",description:"Why Input Sanitisation is needed?",source:"@site/docs/PHP/18_input_sanitisation.md",sourceDirName:"PHP",slug:"/PHP/input_sanitisation",permalink:"/docs/PHP/input_sanitisation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PHP/18_input_sanitisation.md",tags:[{label:"php",permalink:"/docs/tags/php"}],version:"current",sidebarPosition:18,frontMatter:{title:"Input Sanitisation",tags:["php"],sidebar_label:"18. Input Sanitisation",sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"17. Accessing URL Variables",permalink:"/docs/PHP/accessing_url_variables"},next:{title:"19. Input Validation",permalink:"/docs/PHP/input_validation"}},l={},p=[{value:"Why Input Sanitisation is needed?",id:"why-input-sanitisation-is-needed",level:2},{value:"Example:Shell Command Escapes",id:"exampleshell-command-escapes",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-input-sanitisation-is-needed"},"Why Input Sanitisation is needed?"),(0,i.kt)("p",null,"Input sanitisation is the process of ensuring that ",(0,i.kt)("strong",{parentName:"p"},"user-entered data cannot damage stored information, reveal secret information, or otherwise cause harm"),". It is necessary because users may be malicious or careless."),(0,i.kt)("p",null,"There are three main forms of user sanitisation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Preventing cross-site scripting (XSS) attacks"),"\nPreventing user input from being rendered as HTML or executed as JavaScript on the client. This can be done, e.g., by applying the function ",(0,i.kt)("inlineCode",{parentName:"li"},"htmlspecialchars()")," to user input immediately before printing it. ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"htmlspecialchars()")," converts characters such as '<\u2018 and '&\u2018 to HTML entities '","<","\u2018 and '","&","'.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Preventing SQL injection attacks"),"\nPreventing user input from being executed as unintended SQL queries to the database server."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Preventing command injection attacks"),"\nPreventing user input from being executed as unintended shell commands on the server. This can be done, e.g., by applying the function ",(0,i.kt)("inlineCode",{parentName:"li"},"EscapeShellCmd()")," to user input immediately before using it in Shell commands. We elaborate on this below.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In every case, it is important to limit user input to a maximum expected length before taking any further action. Passing unexpectedly long strings to any computer program is a common way to break that program or cause it to perform in unexpected ways. In PHP, we limit strings to some maximum length as follows:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$input = substr($input, 0, MAX_LENGTH);\n"))),(0,i.kt)("h2",{id:"exampleshell-command-escapes"},"Example:Shell Command Escapes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consider the following PHP code snippet intended to print a calendar for the year entered by a user in a form:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-php"},'exec("/usr/bin/cal $userString", $result);\n'))),(0,i.kt)("li",{parentName:"ul"},'If the user entered a string that was too long, or contained Unix shell commands (e.g., "2005; cat /etc/passwd\u201c), she could succeed in printing a calendar for 2005 followed by the system password file! To prevent this, we should clean or sanitise the user input before it is used with a function such as this:')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"function clean ($input, $maxlength) {\n  $input = substr($input, 0, $maxlength); $input = EscapeShellCmd($input);\n  return $input;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Function ",(0,i.kt)("inlineCode",{parentName:"li"},"EscapeShellCmd")," escapes all shell characters so they are treated as ordinary characters and the above can't happen.")))}m.isMDXComponent=!0}}]);