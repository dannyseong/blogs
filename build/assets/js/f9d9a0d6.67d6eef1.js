"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),v=n,d=u["".concat(s,".").concat(v)]||u[v]||m[v]||l;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=v;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},7460:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={title:"Creating Laravel Project",tags:["laravel","php"],sidebar_label:"2. Creating Laravel Project",sidebar_position:2},o=void 0,i={unversionedId:"Laravel/creating_new_project",id:"Laravel/creating_new_project",title:"Creating Laravel Project",description:"Laravel project can be created via using either:",source:"@site/docs/Laravel/2_creating_new_project.md",sourceDirName:"Laravel",slug:"/Laravel/creating_new_project",permalink:"/docs/Laravel/creating_new_project",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Laravel/2_creating_new_project.md",tags:[{label:"laravel",permalink:"/docs/tags/laravel"},{label:"php",permalink:"/docs/tags/php"}],version:"current",sidebarPosition:2,frontMatter:{title:"Creating Laravel Project",tags:["laravel","php"],sidebar_label:"2. Creating Laravel Project",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. What is Web Framework",permalink:"/docs/Laravel/what_is_webframework"},next:{title:"3. Routes",permalink:"/docs/Laravel/route_laravel"}},s={},p=[{value:"Laravel Installer",id:"laravel-installer",level:2},{value:"Composer Create-Project",id:"composer-create-project",level:2},{value:"Run Laravel Project",id:"run-laravel-project",level:2},{value:"Step 1: Navigate to Your Project",id:"step-1-navigate-to-your-project",level:3},{value:"Step 2: Launch the Built-In Server",id:"step-2-launch-the-built-in-server",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Laravel project can be created via using either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Laravel installer, or"),(0,n.kt)("li",{parentName:"ul"},"Composer Create-Project")),(0,n.kt)("h2",{id:"laravel-installer"},"Laravel Installer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To use Laravel installer, one must first setup the installer. Follow the instructions on the official Laravel webiste to setup the installer :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://laravel.com/docs"},"https://laravel.com/docs")))),(0,n.kt)("li",{parentName:"ul"},"Installing the Laravel installer requires root access"),(0,n.kt)("li",{parentName:"ul"},"Using the Laravel installer, a new Laravel project can be created by the command:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"laravel new project-name\n"))),(0,n.kt)("li",{parentName:"ul"},"This will create a folder with the name of your project. This folder contains the files for the latest version of an empty Laravel project.")),(0,n.kt)("h2",{id:"composer-create-project"},"Composer Create-Project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To install a Laravel project using composer create-project, use the command:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composer create-project laravel/laravel project-name\n"))),(0,n.kt)("li",{parentName:"ul"},"This will create a folder with the name of your project. This folder contains the files for the latest version of an empty Laravel project."),(0,n.kt)("li",{parentName:"ul"},"If a particular version of Laravel is required, a version number can be specified, e.g. to install version 8 of Laravel:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composer create-project laravel/laravel=8.* project-name\n")))),(0,n.kt)("h2",{id:"run-laravel-project"},"Run Laravel Project"),(0,n.kt)("h3",{id:"step-1-navigate-to-your-project"},"Step 1: Navigate to Your Project"),(0,n.kt)("p",null,"To get started, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"cd")," command to navigate to your project directory. Assuming your project is named ",(0,n.kt)("inlineCode",{parentName:"p"},"myapp"),", here's how we'd do it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd myapp\n")),(0,n.kt)("h3",{id:"step-2-launch-the-built-in-server"},"Step 2: Launch the Built-In Server"),(0,n.kt)("p",null,"Laravel simplifies local development by providing a built-in server. With the following command, you'll start this server and turn your project into a fully functional web application right on your local machine:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ php artisan serve\n")),(0,n.kt)("p",null,'The "artisan" command, which is written in PHP, takes various options after "php artisan." By specifying "serve," you initiate the built-in server. Once it\'s up and running, open your web browser and navigate to:'),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Ready to take a break or step away from your project?\nIt's a breeze. Simply locate the active command prompt and press ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl + C"),". This will gracefully stop the ongoing task and return you to the input state. Not only will this halt any ongoing processes, but it will also bring the server program to a stop, allowing you to resume your tasks.")))}m.isMDXComponent=!0}}]);