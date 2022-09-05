"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[119],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},192:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={sidebar_position:3,sidebar_label:"Other CI systems"},l="Integrating Scribe with Other CI Systems",s={unversionedId:"ci-integration/general",id:"ci-integration/general",title:"Integrating Scribe with Other CI Systems",description:"Before you begin",source:"@site/docs/ci-integration/general.md",sourceDirName:"ci-integration",slug:"/ci-integration/general",permalink:"/docosaurus-scribe/docs/ci-integration/general",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Other CI systems"},sidebar:"tutorialSidebar",previous:{title:"GitHub Actions",permalink:"/docosaurus-scribe/docs/ci-integration/github-actions"},next:{title:"Sample Project",permalink:"/docosaurus-scribe/docs/sampleproject"}},p={},u=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Procedure",id:"procedure",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrating-scribe-with-other-ci-systems"},"Integrating Scribe with Other CI Systems"),(0,a.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,a.kt)("p",null,"Integrating Scribe Hub with Jenkins requires the following credentials that are found in the product setup dialog (In your ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://prod.hub.scribesecurity.com/",title:"Scribe Hub Link"},"Scribe Hub"))," go to Home>Products>","[$product]",">Setup)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"product key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"client id")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"client secret"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that the product key is unique per product, while the client id and secret are unique for your account.")),(0,a.kt)("h2",{id:"procedure"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download ",(0,a.kt)("inlineCode",{parentName:"p"},"gensbom"),"  "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Open your ",(0,a.kt)("em",{parentName:"li"},"Unix")," based command line interface (CLI), such as ",(0,a.kt)("em",{parentName:"li"},"bash"),".  "),(0,a.kt)("li",{parentName:"ul"},"Download the Scribe ",(0,a.kt)("em",{parentName:"li"},"gensbon")," CLI tool   ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"curl -sSfL http://get.scribesecurity.com/install.sh | sh -s -- -t gensbom\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the credentials to your CI system.\nHere is an example for setting your ",(0,a.kt)("em",{parentName:"p"},"client id")," credential as an environment variable:  "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export CLIENT_ID=<client-id>\nexport PRODUCT_KEY=<product-key>\nexport CLIENT_SECRET=<client-secret>\n")),(0,a.kt)("p",{parentName:"li"},"   Replace <client_id> with the client id value you received from ",(0,a.kt)("strong",{parentName:"p"},"Scribe Hub"),". In the same way you can add the client secret and the product key as environment variables.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call Scribe ",(0,a.kt)("inlineCode",{parentName:"p"},"gensbom")," from your build script."),(0,a.kt)("p",{parentName:"li"},"These are the two points for adding Scribe Hub code:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Source Code Checkout"),": Calling ",(0,a.kt)("inlineCode",{parentName:"li"},"gensbom")," at this point will collect evidence from the source code files hash values to facilitate the Scribe integrity validation. This is an important yet an ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"optional"))," point. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$HOME/.scribe/bin/gensbom dir:<path> --product-key=$PRODUCT_KEY --scribe.client-id=$CLIENT_ID \\\n--scribe.client-secret=$CLIENT_SECRET -E -f -v\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Final built image"),": Generating SBOM right after the final Docker image is created. This is the main and ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"mandatory"))," point.  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   $HOME/.scribe/bin/gensbom <your_docker_repository:tag> --product-key=$PRODUCT_KEY \\\n--scribe.client-id=$CLIENT_ID --scribe.client-secret=$CLIENT_SECRET -E -f -v\n")))}d.isMDXComponent=!0}}]);