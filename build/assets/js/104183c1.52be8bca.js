"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Cross-site Request Forgery Attack and Prevention in Laravel",tag:["blade","laravel","templating","csrf"],sidebar_label:"7. Cross-site Request Forgery Attack",aidebar_position:7},o=void 0,s={unversionedId:"Laravel/csrf",id:"Laravel/csrf",title:"Cross-site Request Forgery Attack and Prevention in Laravel",description:"Cross-site Request Forgery Attack",source:"@site/docs/Laravel/7_csrf.md",sourceDirName:"Laravel",slug:"/Laravel/csrf",permalink:"/docs/Laravel/csrf",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Laravel/7_csrf.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Cross-site Request Forgery Attack and Prevention in Laravel",tag:["blade","laravel","templating","csrf"],sidebar_label:"7. Cross-site Request Forgery Attack",aidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6. Blade Template for Laravel",permalink:"/docs/Laravel/blade_templating"},next:{title:"8. Laravel SQLite Setup",permalink:"/docs/Laravel/sqlite_setup"}},l={},c=[{value:"Cross-site Request Forgery Attack",id:"cross-site-request-forgery-attack",level:2},{value:"To conduct CSRF attack, the attacker needs to:",id:"to-conduct-csrf-attack-the-attacker-needs-to",level:3},{value:"1. Know the format of the request. Easy!",id:"1-know-the-format-of-the-request-easy",level:4},{value:"2. Trick the user to execute the malicious request while logged in. Harder!",id:"2-trick-the-user-to-execute-the-malicious-request-while-logged-in-harder",level:4},{value:"To trick the user, some social engineering is needed. E.g.:",id:"to-trick-the-user-some-social-engineering-is-needed-eg",level:3},{value:"1. The attacker sold a small item to the user (victim).",id:"1-the-attacker-sold-a-small-item-to-the-user-victim",level:4},{value:"2. The user needs to pay the attacker (seller) via online banking.",id:"2-the-user-needs-to-pay-the-attacker-seller-via-online-banking",level:4},{value:"3. The attacker emailed the user instruction saying \u201ctransfer money via online banking to account XXXXXXXX, then immediately, click on this link to inform me the transfer is done\u201d.",id:"3-the-attacker-emailed-the-user-instruction-saying-transfer-money-via-online-banking-to-account-xxxxxxxx-then-immediately-click-on-this-link-to-inform-me-the-transfer-is-done",level:4},{value:"4. Embedded in this link is the request to transfer $1M to the attacker. If the user has not logged out of his/her online banking before clicking on the link, then this malicious request will be executed.",id:"4-embedded-in-this-link-is-the-request-to-transfer-1m-to-the-attacker-if-the-user-has-not-logged-out-of-hisher-online-banking-before-clicking-on-the-link-then-this-malicious-request-will-be-executed",level:4},{value:"CSRF Prevention in Laravel",id:"csrf-prevention-in-laravel",level:2},{value:"CSRF Token Generation",id:"csrf-token-generation",level:3},{value:"Including CSRF Token in Forms",id:"including-csrf-token-in-forms",level:3},{value:"Request Verification",id:"request-verification",level:3},{value:"Example",id:"example",level:3}],u={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cross-site-request-forgery-attack"},"Cross-site Request Forgery Attack"),(0,a.kt)("p",null,"Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. ","[Owasp.org]"),(0,a.kt)("p",null,"Once a user is logged in to a website (e.g. bank) from a browser, further requests sent by that browser do not need to be authenticated again."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Requests sent by the a different tab of the same browser also don\u2019t need to be authenticated again.")),(0,a.kt)("p",null,"A CSRF attack make use of this fact, and executes a malicious request (e.g. transfer $1M to the attacker\u2019s account) while the user is logged in."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"These requests are usually executed by a different tab (or pop up).")),(0,a.kt)("p",null,"The malicious request is from the attacker, and not generated from the site of origin (e.g. the bank\u2019s web page), hence the name ",(0,a.kt)("strong",{parentName:"p"},"Cross Site Request Forgery"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Here is a more animated explanation of CSRF: ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=m0EHlfTgGUU"},"CSRF or XSRF"))),(0,a.kt)("h3",{id:"to-conduct-csrf-attack-the-attacker-needs-to"},"To conduct CSRF attack, the attacker needs to:"),(0,a.kt)("h4",{id:"1-know-the-format-of-the-request-easy"},"1. Know the format of the request. Easy!"),(0,a.kt)("h4",{id:"2-trick-the-user-to-execute-the-malicious-request-while-logged-in-harder"},"2. Trick the user to execute the malicious request while logged in. Harder!"),(0,a.kt)("h3",{id:"to-trick-the-user-some-social-engineering-is-needed-eg"},"To trick the user, some social engineering is needed. E.g.:"),(0,a.kt)("h4",{id:"1-the-attacker-sold-a-small-item-to-the-user-victim"},"1. The attacker sold a small item to the user (victim)."),(0,a.kt)("h4",{id:"2-the-user-needs-to-pay-the-attacker-seller-via-online-banking"},"2. The user needs to pay the attacker (seller) via online banking."),(0,a.kt)("h4",{id:"3-the-attacker-emailed-the-user-instruction-saying-transfer-money-via-online-banking-to-account-xxxxxxxx-then-immediately-click-on-this-link-to-inform-me-the-transfer-is-done"},"3. The attacker emailed the user instruction saying \u201ctransfer money via online banking to account XXXXXXXX, then immediately, click on this link to inform me the transfer is done\u201d."),(0,a.kt)("h4",{id:"4-embedded-in-this-link-is-the-request-to-transfer-1m-to-the-attacker-if-the-user-has-not-logged-out-of-hisher-online-banking-before-clicking-on-the-link-then-this-malicious-request-will-be-executed"},"4. Embedded in this link is the request to transfer $1M to the attacker. If the user has not logged out of his/her online banking before clicking on the link, then this malicious request will be executed."),(0,a.kt)("h2",{id:"csrf-prevention-in-laravel"},"CSRF Prevention in Laravel"),(0,a.kt)("p",null,"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious website, email, or program causes a user's web browser to perform an unwanted action on a trusted site ",(0,a.kt)("strong",{parentName:"p"},"on which the user is authenticated"),"."),(0,a.kt)("p",null,"In Laravel, a popular PHP web framework, prevention against CSRF is taken very seriously. Here's a more detailed explanation of the process:"),(0,a.kt)("h3",{id:"csrf-token-generation"},"CSRF Token Generation"),(0,a.kt)("p",null,'Laravel automatically generates a CSRF "token" for each active user session. ',(0,a.kt)("strong",{parentName:"p"},"This token is a unique and random string of characters")," that's used to verify that the requests made to the server come from the authenticated user, and not from a malicious third-party."),(0,a.kt)("h3",{id:"including-csrf-token-in-forms"},"Including CSRF Token in Forms"),(0,a.kt)("p",null,"When defining an HTML form in a Laravel application, you must include a hidden CSRF token field. This can be done by using one of the two Blade directives provided:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{{ csrf_field() }}")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@csrf")),(0,a.kt)("p",null,"These commands add the CSRF token as a hidden input field in the HTML form."),(0,a.kt)("h3",{id:"request-verification"},"Request Verification"),(0,a.kt)("p",null,"When a form is submitted, Laravel's middleware automatically checks the CSRF token in the request against the token stored in the user's session. If they don't match, the request is rejected, and an error is returned."),(0,a.kt)("p",null,"Since a malicious attacker wouldn't know the CSRF token for the user's session, any forged request would not have a valid token and thus would be denied."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Here's an example to clarify:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'<form action="/profile" method="POST">\n    @csrf\n    \x3c!-- Other form fields go here --\x3e\n    <button type="submit">Update Profile</button>\n</form>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In this code snippet, the ",(0,a.kt)("inlineCode",{parentName:"li"},"@csrf")," directive inserts the CSRF token into the form. When the user submits the form, Laravel will check the token in the request against the one in the session.")),(0,a.kt)("p",null,"As a result, by using CSRF tokens, Laravel provides an effective way to protect against CSRF attacks. This ensures that all requests to modify data are made by the authenticated and authorized user, adding an essential layer of security to your Laravel applications."))}h.isMDXComponent=!0}}]);