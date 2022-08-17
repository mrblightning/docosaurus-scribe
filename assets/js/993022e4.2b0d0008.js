"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[163],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1892:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return s},toc:function(){return m},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:4},p="A Sample Project",l={unversionedId:"sampleproject",id:"sampleproject",title:"A Sample Project",description:"You can try out Scribe with an open-source Node.js project at:",source:"@site/docs/sampleproject.md",sourceDirName:".",slug:"/sampleproject",permalink:"/docosaurus-scribe/docs/sampleproject",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Other CI Systems",permalink:"/docosaurus-scribe/docs/ci-integration/general"},next:{title:"How to generate an SBOM from CLI",permalink:"/docosaurus-scribe/docs/gensbomcli"}},s={},m=[],u={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"a-sample-project"},"A Sample Project"),(0,o.kt)("p",null,"You can try out Scribe with an open-source Node.js project at:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/scribe-security/image-demo"},"https://github.com/scribe-security/image-demo")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The configuration requires ",(0,o.kt)("em",null,(0,o.kt)("b",null,"product-key")),", ",(0,o.kt)("em",null,(0,o.kt)("b",null,"client-id")),", and ",(0,o.kt)("em",null,(0,o.kt)("b",null,"client-secret"))," credentials obtained from your Scribe hub account at: ",(0,o.kt)("inlineCode",{parentName:"p"},"Home>Products>[$your_product]>Setup")),(0,o.kt)("p",{parentName:"div"},"Or when you add a new product."))),(0,o.kt)("p",null,"Here's an example for setting your ",(0,o.kt)("inlineCode",{parentName:"p"},"client-id")," credential:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export CLIENT_ID=<client-id>\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<client-id>")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"client-id")," from Scribe Hub."),(0,o.kt)("p",null,"Now that you have set whatever environment variables you wanted, you can go ahead and download and use our ",(0,o.kt)("em",{parentName:"p"},"gensbom")," CLI tool."),(0,o.kt)("p",null,"Copy and run the following commands in a bash shell on your workstation."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get Scribe ",(0,o.kt)("em",{parentName:"p"},"gensbom")," CLI tool"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"curl -sSfL http://get.scribesecurity.com/install.sh | sh"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the project from GitHub"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/scribe-security/image-demo.git"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("em",{parentName:"p"},"gensbom")," locally to collect metadata about the source code"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.scribe/bin/gensbom dir:image-demo --scribe.client-id=$CLIENT_ID --scribe.client-secret=$CLIENT_SECRET --product-key=$PRODUCT_KEY --scribe.login-url=https://scribesecurity-beta.us.auth0.com --scribe.auth.audience=api.beta.scribesecurity.com --scribe.url https://api.beta.scribesecurity.com -E -f -v"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build a docker image for the project"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"cd image-demo")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"docker build -t image-demo ."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("em",{parentName:"p"},"gensbom")," locally to collect metadata about the docker image"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.scribe/bin/gensbom bom image-demo:latest --scribe.client-id=$CLIENT_ID --scribe.client-secret=$CLIENT_SECRET --product-key=$PRODUCT_KEY --scribe.login-url=https://scribesecurity-beta.us.auth0.com --scribe.auth.audience=api.beta.scribesecurity.com --scribe.url https://api.beta.scribesecurity.com -E -f -v"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("em",{parentName:"p"},"gensbom")," is done press the 'done' button at the bottom of the ",(0,o.kt)("a",{href:"https://beta.hub.scribesecurity.com"},"page")," and you'll be taken to the product page to review the integrity information and ",(0,o.kt)("em",{parentName:"p"},"SBOM"),"."))))}d.isMDXComponent=!0}}]);