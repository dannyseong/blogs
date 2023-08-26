"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={authors:"danny",title:"How to Purchase and Remotely Access AWS EC2 Ubuntu from a Mac",tag:["laravel","xampp","macOS"]},i=void 0,s={permalink:"/blog/2023/08/13/access_aws_ec2_ubuntu_onMac",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-13-access_aws_ec2_ubuntu_onMac.md",source:"@site/blog/2023-08-13-access_aws_ec2_ubuntu_onMac.md",title:"How to Purchase and Remotely Access AWS EC2 Ubuntu from a Mac",description:"Purchase an AWS Server",date:"2023-08-13T00:00:00.000Z",formattedDate:"August 13, 2023",tags:[],readingTime:1.69,hasTruncateMarker:!1,authors:[{name:"Daehoon Seong",title:"Developers & Electrical Engineer",url:"https://github.com/dannyseong",imageURL:"https://avatars.githubusercontent.com/u/99000722?v=4",key:"danny"}],frontMatter:{authors:"danny",title:"How to Purchase and Remotely Access AWS EC2 Ubuntu from a Mac",tag:["laravel","xampp","macOS"]},prevItem:{title:"Understanding the Compose Function in JavaScript\n",permalink:"/blog/2023/08/22/compose-function"},nextItem:{title:"Getting Started with PHP | Preparing the Server | Let's Get PHP Scripts Moving!",permalink:"/blog/2023/08/12/getting-started-php"}},c={authorsImageUrls:[void 0]},l=[{value:"Purchase an AWS Server",id:"purchase-an-aws-server",level:2},{value:"1. Purchase an EC2 Server",id:"1-purchase-an-ec2-server",level:3},{value:"(1) Visit the AWS EC2 Console Page",id:"1-visit-the-aws-ec2-console-page",level:4},{value:"(2)  Click the Launch Instance button on the Instance tab",id:"2--click-the-launch-instance-button-on-the-instance-tab",level:4},{value:"(3) Name your Instance",id:"3-name-your-instance",level:4},{value:"(4) Click the Ubuntu card in the Quick Start tab, then choose the free Ubuntu Server.",id:"4-click-the-ubuntu-card-in-the-quick-start-tab-then-choose-the-free-ubuntu-server",level:4},{value:"(5)  Create a <code>Key pair</code> for remote access. The encryption file is a <code>.pem</code> extension file, so download it and store it in a safe place.",id:"5--create-a-key-pair-for-remote-access-the-encryption-file-is-a-pem-extension-file-so-download-it-and-store-it-in-a-safe-place",level:4},{value:"(6) Open the settings to allow SSH for remote access, and HTTPS and HTTP ports for communication.",id:"6-open-the-settings-to-allow-ssh-for-remote-access-and-https-and-http-ports-for-communication",level:4},{value:"(7)  Request to create an Instance, then verify the creation on the Dashboard.",id:"7--request-to-create-an-instance-then-verify-the-creation-on-the-dashboard",level:4},{value:"2. Connecting to EC2 remotely",id:"2-connecting-to-ec2-remotely",level:3},{value:"(1) Open Terminal: enter &quot;terminal&quot; in Spotlight",id:"1-open-terminal-enter-terminal-in-spotlight",level:4},{value:"(2) Change access permissions for the Key pair received when creating the EC2 Instance",id:"2-change-access-permissions-for-the-key-pair-received-when-creating-the-ec2-instance",level:4},{value:"(3) Connect via SSH",id:"3-connect-via-ssh",level:4}],u={toc:l},h="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"purchase-an-aws-server"},"Purchase an AWS Server"),(0,r.kt)("h3",{id:"1-purchase-an-ec2-server"},"1. Purchase an EC2 Server"),(0,r.kt)("p",null,"You can define the configuration of the server (computer) you want with just a click and install the operating system (OS) required to run that computer. From now on, we'll install Linux's Ubuntu as the OS. Like Windows, there are several types of OS, and Linux is one of them."),(0,r.kt)("h4",{id:"1-visit-the-aws-ec2-console-page"},"(1) Visit the AWS EC2 Console Page"),(0,r.kt)("p",null,"  ",(0,r.kt)("a",{parentName:"p",href:"https://ap-northeast-2.console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2"},"EC2 Console Page")),(0,r.kt)("h4",{id:"2--click-the-launch-instance-button-on-the-instance-tab"},"(2)  Click the Launch Instance button on the Instance tab"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Lanuch Instance",src:n(3082).Z,width:"2418",height:"534"})),(0,r.kt)("h4",{id:"3-name-your-instance"},"(3) Name your Instance"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Name of Instance",src:n(6661).Z,width:"827",height:"274"})),(0,r.kt)("h4",{id:"4-click-the-ubuntu-card-in-the-quick-start-tab-then-choose-the-free-ubuntu-server"},"(4) Click the Ubuntu card in the Quick Start tab, then choose the free Ubuntu Server."),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Select Ubuntu",src:n(2153).Z,width:"813",height:"714"})),(0,r.kt)("h4",{id:"5--create-a-key-pair-for-remote-access-the-encryption-file-is-a-pem-extension-file-so-download-it-and-store-it-in-a-safe-place"},"(5)  Create a ",(0,r.kt)("inlineCode",{parentName:"h4"},"Key pair")," for remote access. The encryption file is a ",(0,r.kt)("inlineCode",{parentName:"h4"},".pem")," extension file, so download it and store it in a safe place."),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Key Pair setting",src:n(767).Z,width:"822",height:"241"})),(0,r.kt)("h4",{id:"6-open-the-settings-to-allow-ssh-for-remote-access-and-https-and-http-ports-for-communication"},"(6) Open the settings to allow SSH for remote access, and HTTPS and HTTP ports for communication."),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Network Setting",src:n(8662).Z,width:"813",height:"669"})),(0,r.kt)("h4",{id:"7--request-to-create-an-instance-then-verify-the-creation-on-the-dashboard"},"(7)  Request to create an Instance, then verify the creation on the Dashboard."),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Dashboard",src:n(5037).Z,width:"1367",height:"153"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"  If you want to temporarily stop the Instance, or turn off the server, press the stop button in the Instance on the Dashboard.\n",(0,r.kt)("img",{alt:"Stop Instance",src:n(6242).Z,width:"715",height:"539"}))),(0,r.kt)("h3",{id:"2-connecting-to-ec2-remotely"},"2. Connecting to EC2 remotely"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SSH (Secure Shell Protocol): A communication protocol used to connect to another computer, and it's relatively more secure than other protocols. Also, the SSH port must be open on the computer you are connecting to, so you'll need to open port 22 in AWS EC2 security."),(0,r.kt)("li",{parentName:"ul"},"Mac has ssh, so you can directly access it via the command line!")),(0,r.kt)("h4",{id:"1-open-terminal-enter-terminal-in-spotlight"},'(1) Open Terminal: enter "terminal" in Spotlight'),(0,r.kt)("h4",{id:"2-change-access-permissions-for-the-key-pair-received-when-creating-the-ec2-instance"},"(2) Change access permissions for the Key pair received when creating the EC2 Instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod 400 [Key_pair_path]\n")),(0,r.kt)("h4",{id:"3-connect-via-ssh"},"(3) Connect via SSH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i [Key_pair_path] ubuntu@[AWS_Instance_IP_adress]\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Windows",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"gitbash")),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"ssh -i [Key_pair_path] ubuntu@[AWS_Instance_IP_adress]")))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When you want to stop ssh connection, enter ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," in the console.")))}p.isMDXComponent=!0},3082:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-9650609e9fc95f156a0984d2ed9a8dbf.png"},6661:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-349180ca8c2f7fed041378a53c8562c2.png"},2153:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-94bcae5e1e527810e06b4d7b97ffcecd.png"},767:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-80d7f67c6ef85dd047362f7ac40d1d77.png"},8662:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-26e571fb29d89dd4e06792a84d4c3425.png"},5037:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/6-ef65292374e5da9b3cd65850d8be5f2a.png"},6242:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/7-9f4f618e811d16189cb4d4b794c70dd0.png"}}]);