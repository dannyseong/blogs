"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Routes",tag:["laravel","php"],sidebar_label:"3. Routes",sidebar_position:3},i=void 0,l={unversionedId:"Laravel/route_laravel",id:"Laravel/route_laravel",title:"Routes",description:"In the beginning web wervers simply served files. The URL was simply the file path on the server. For example, the file:",source:"@site/docs/Laravel/3_route_laravel.md",sourceDirName:"Laravel",slug:"/Laravel/route_laravel",permalink:"/docs/Laravel/route_laravel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Laravel/3_route_laravel.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Routes",tag:["laravel","php"],sidebar_label:"3. Routes",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Creating Laravel Project",permalink:"/docs/Laravel/creating_new_project"},next:{title:"4. View in Larabel",permalink:"/docs/Laravel/view_laravel"}},s={},p=[{value:"Laravel Routes",id:"laravel-routes",level:2},{value:"Declaring a Route",id:"declaring-a-route",level:2},{value:"Route URLs",id:"route-urls",level:2},{value:"Route Functions",id:"route-functions",level:2},{value:"Route Parameters",id:"route-parameters",level:2},{value:"1. Function Parameter",id:"1-function-parameter",level:3},{value:"2. Using the function parameter",id:"2-using-the-function-parameter",level:3},{value:"Routes and Controllers",id:"routes-and-controllers",level:2},{value:"The <code>public</code> directory",id:"the-public-directory",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the beginning web wervers simply served files. The URL was simply the file path on the server. For example, the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/htdoc/greeting/hello.html/\n")),(0,a.kt)("p",null,"Might be accessed via the URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://example.com/greeting/hello.html\n")),(0,a.kt)("p",null,"Note tha there are some differences. The URL doesn't include the /htdoc/ directory. This is because we don't want all of the files on the server to be accessible via the web. Web servers generally only serve files within a particular subdirectory, in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"/htdoc/"),", providing some security to the other files on the server. However, if URLs merely reflect files and directories on a server, they could get very long and complex."),(0,a.kt)("p",null,"Furthermore, we will end up with many small files, which makes the code difficult to read/trace. What we want is to be able to map URLs to functions, where multiple related functions can reside in the same file. E.g. a file/class call product contains all the functions (e.g. list all products, display one product etc.) on products, and is mapped to by multiple URLs. In web applications, we specify routes which are maps between URLs and code(generally functions.)"),(0,a.kt)("h2",{id:"laravel-routes"},"Laravel Routes"),(0,a.kt)("p",null,"We can see what routes are in a Laravel project by running the following command within the project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan route:list\n")),(0,a.kt)("p",null,"If we run the above on a newly create Laravel project, we get the following:\n",(0,a.kt)("img",{alt:"laravel route output",src:n(9587).Z,width:"937",height:"137"}),"\nThe above table shows which routes have been defined. It shows the http method (e.g. GET, POST) and the URL to trigger the route, and the action that will be performed when the route is triggered."),(0,a.kt)("h2",{id:"declaring-a-route"},"Declaring a Route"),(0,a.kt)("p",null,"Routes for web applications are declared in ",(0,a.kt)("inlineCode",{parentName:"p"},"/routes/web.php")," file. A route returns the HTML/text that is to be displayed by the browser that triggered this route. For example, this route returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello, World"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"Route::get('/', function(){\n  return 'Hello, World';\n});\n")),(0,a.kt)("p",null,"But in most cases, a route would return a view which defines the HTML document to be displayed. For example, a newly created project has the following route which reteurns a view:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"Route::get('/', function(){\n  return view('welcome');\n})\n")),(0,a.kt)("p",null,"The route declaration has the following basic from:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"Route::http_method(path, function);\n")),(0,a.kt)("p",null,"The Route class has static functions for declaring routes based on the HTTP method in the URL: ",(0,a.kt)("inlineCode",{parentName:"p"},"get(), post(), patch(), delete(), option()"),". There are also functions which can respond to multiple HTTP methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"match()")," - pass in an array of HTTP methods as strings, e.g. array('GET', 'POST')"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"any()")," - responds to any HTTP method")),(0,a.kt)("h2",{id:"route-urls"},"Route URLs"),(0,a.kt)("p",null,"The first parameter is the path of the URL. In the example above, the path is simply ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),", in other words, the Route will be a match with the following HTTP request: ",(0,a.kt)("inlineCode",{parentName:"p"},"GET / HTTP / 1.1"),". Using functions such as get() is simply a way of using function syntax to define the URL filter."),(0,a.kt)("h2",{id:"route-functions"},"Route Functions"),(0,a.kt)("p",null,"The second parameter is the function that will be called if a URI match occurs. In the above example, note how a complete function is placed directly within the parameter? Note also that the function doesn't have a name? We call such a function, a ",(0,a.kt)("inlineCode",{parentName:"p"},"closure"),". ",(0,a.kt)("strong",{parentName:"p"},"The embedded closure function will be called when there is a URI match.")," The code in the example returns a View called \u2018Welcome\u2019."),(0,a.kt)("h2",{id:"route-parameters"},"Route Parameters"),(0,a.kt)("p",null,"We can indicate that portions of the URL can be extracted as parameters by using ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"Route::get('user/{name}', function($name){\n  return \"Hello $name\";\n});\n")),(0,a.kt)("p",null,"The above code extracts a user's name from the URL and return it with a short greeting."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Anything returned from a route function will be returned to the browser (and displayed).")),(0,a.kt)("h3",{id:"1-function-parameter"},"1. Function Parameter"),(0,a.kt)("p",null,"We can then pass the parameter variable as a parameter to the function: ",(0,a.kt)("inlineCode",{parentName:"p"},"function ($name)"),". The function parameter name must be the same as the name used in the URI."),(0,a.kt)("h3",{id:"2-using-the-function-parameter"},"2. Using the function parameter"),(0,a.kt)("p",null,"We can then use the function parameter within the function. In the above example we are simply returning a short greeting including the value of the variable.\n",(0,a.kt)("inlineCode",{parentName:"p"},'return "Hello $name";')),(0,a.kt)("h2",{id:"routes-and-controllers"},"Routes and Controllers"),(0,a.kt)("p",null,"The routes/web.php file would get large and complicated if we placed all of the application logic in the one file. ",(0,a.kt)("strong",{parentName:"p"},"We should separate our code into separate classes and functions.")," We will do this using ",(0,a.kt)("inlineCode",{parentName:"p"},"Controllers"),"."),(0,a.kt)("h2",{id:"the-public-directory"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"public")," directory"),(0,a.kt)("p",null,"In our Laravel project, there is a directory named ",(0,a.kt)("inlineCode",{parentName:"p"},"public"),". When we run the Laravel project, we need to direct all requests to the public directory. The ",(0,a.kt)("inlineCode",{parentName:"p"},"index.php")," fil is the file that will run when we hit ",(0,a.kt)("inlineCode",{parentName:"p"},"projct_folder_name/public"),". Despite defining routes which will respond to URLs such as ",(0,a.kt)("inlineCode",{parentName:"p"},"projct_folder_name/public/user/John"),", those directories don't exist. Instead, every URL that hits ",(0,a.kt)("inlineCode",{parentName:"p"},"projct_folder_name/public/*")," is redirected by Laravel to run ",(0,a.kt)("inlineCode",{parentName:"p"},"projct_folder_name/public/index.php")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For Laravel routing to works webservers need to be configured to direct all requests containing ",(0,a.kt)("inlineCode",{parentName:"p"},"{Laravel project}/public/{some_other_path}")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"{Laravel project}/public/index.php"),". This configuration set up is done differently depending on the webserver:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"On ",(0,a.kt)("strong",{parentName:"li"},"Apache"),", the redirection is configured via public/.htaccess. This file comes with Laravel project."),(0,a.kt)("li",{parentName:"ul"},"On ",(0,a.kt)("strong",{parentName:"li"},"Nginx"),", the redirection needs to be configured via Ngnix's site configuration file.")),(0,a.kt)("p",{parentName:"admonition"},"Once a request arrives at ",(0,a.kt)("inlineCode",{parentName:"p"},"index.php"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"index.php")," will decompose the request (separate the paths after public) and figure out which route to execute, and execute the route.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All of our files will run as if they are running from the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"public"))," directory. Therefore, if you want to add any files which would be referred to directly from HTML, such as ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CSS")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"JavaScript")),", and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"images")),", you need to add them to the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"public"))," directory.")))}d.isMDXComponent=!0},9587:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/laravel_route_output-47260e60afe93681ac082db8f5e68ae7.png"}}]);