"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[163],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),b=a,d=m["".concat(p,".").concat(b)]||m[b]||u[b]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1892:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return s},toc:function(){return u},default:function(){return b}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={sidebar_position:5},p="A Sample Project",l={unversionedId:"sampleproject",id:"sampleproject",title:"A Sample Project",description:"You can try out Scribe with an open-source Node.js project at:",source:"@site/docs/sampleproject.md",sourceDirName:".",slug:"/sampleproject",permalink:"/docosaurus-scribe/docs/sampleproject",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Detecting CVEs",permalink:"/docosaurus-scribe/docs/cves"},next:{title:"Questions and Answers",permalink:"/docosaurus-scribe/docs/faq"}},s={},u=[],m={toc:u};function b(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"a-sample-project"},"A Sample Project"),(0,i.kt)("p",null,"You can try out Scribe with an open-source Node.js project at:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moyataka/amberik-core"},"https://github.com/moyataka/amberik-core")),(0,i.kt)("p",null,"Copy and run the following commands in a bash shell on your workstation."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get Scribe ",(0,i.kt)("em",{parentName:"p"},"gensbom")," CLI tool"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"curl https://www.scribesecurity.com/getscribe | sh"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the project from GitHub"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/moyataka/amberik-core.git"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("em",{parentName:"p"},"gensbom")," to collect metadata about the source code"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.scribe/bin/gensbom bom dir:amberik-core --scribe.clientid=<client_id> --scribe.clientsecret=<client_secret> --name=scribe -E -f -v")),(0,i.kt)("p",{parentName:"li"},"Replace <client_id> and <client_secret> with the values from step 3 in the ",(0,i.kt)("a",{href:"https://mui.production.scribesecurity.com/install-scribe"},"Scribe installation instructions page"),".  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Build a docker image for the project"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CD amberik-core")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"docker build -t amberik-core ."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("em",{parentName:"p"},"gensbom")," to collect metadata about the docker image"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.scribe/bin/gensbom bom amberik-core:latest --scribe.clientid=<client_id> --scribe.clientsecret=<client_secret> --name=scribe -E -f -v")),(0,i.kt)("p",{parentName:"li"},"Replace <client_id> and <client_secret> with the same values as in step 3, above (values appear in the ",(0,i.kt)("a",{href:"https://mui.production.scribesecurity.com/install-scribe"},"Scribe installation instructions page"),")."))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"When ",(0,i.kt)("em",{parentName:"li"},"gensbom")," is done go to the ",(0,i.kt)("a",{href:"https://mui.production.scribesecurity.com/install-scribe"},"Scribe installation instructions web page")," and click the ",(0,i.kt)("strong",{parentName:"li"},"Done, View Results")," button.")))}b.isMDXComponent=!0}}]);