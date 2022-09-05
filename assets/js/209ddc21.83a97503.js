"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[134],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,f=d["".concat(p,".").concat(g)]||d[g]||l[g]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return l},default:function(){return g}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={description:"Setting up your Continuous Integration (CI)"},p="Setting up Scribe protection in your CI pipeline",u={unversionedId:"ci-integration/README",id:"ci-integration/README",title:"Setting up Scribe protection in your CI pipeline",description:"Setting up your Continuous Integration (CI)",source:"@site/docs/ci-integration/README.md",sourceDirName:"ci-integration",slug:"/ci-integration/",permalink:"/docosaurus-scribe/docs/ci-integration/",tags:[],version:"current",frontMatter:{description:"Setting up your Continuous Integration (CI)"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docosaurus-scribe/docs/intro"},next:{title:"Jenkins",permalink:"/docosaurus-scribe/docs/ci-integration/jenkins"}},s={},l=[{value:"Where to place Scribe Code in your pipeline",id:"where-to-place-scribe-code-in-your-pipeline",level:2},{value:"Supported CIs",id:"supported-cis",level:2}],d={toc:l};function g(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-scribe-protection-in-your-ci-pipeline"},"Setting up Scribe protection in your CI pipeline"),(0,o.kt)("p",null,"Adding Scribe Hub code snippets to your Continuous Integration (CI) pipeline automates the process of generating SBOMs and analysis reports."),(0,o.kt)("p",null,"The following scheme demonstrates the two points on your CI pipeline to enter the Scribe Hub code snippets:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Two points on a generic pipeline to enter scribe code snippets",src:n(3462).Z,title:"Two points on a generic pipeline to enter scribe code snippets",width:"2480",height:"768"})),(0,o.kt)("p",null,"Once your CI pipeline is set up, running your pipeline (your builds) will activate Scribes' evidence collectors automatically. The integrity of your project code is validated and the results are uploaded to Scribe Hub."),(0,o.kt)("h2",{id:"where-to-place-scribe-code-in-your-pipeline"},"Where to place Scribe Code in your pipeline"),(0,o.kt)("p",null,"These are the two points for adding Scribe Hub code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Source Code Checkout"),": Collects evidence of your Node.js source code files after checkout. This is an important but ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"optional"))," point.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Final built image"),": Generates an SBOM right after the final image is created. This is the main and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"mandatory"))," point."))),(0,o.kt)("h2",{id:"supported-cis"},"Supported CIs"),(0,o.kt)("p",null,"Currently, Scribe natively supports the following CI setups:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../docs/ci-integration/jenkins",title:"Jenkins over Kubernetes"},"Jenkins"),": This version supports ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Jenkins over Kubernetes"))," only. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../docs/ci-integration/github-actions",title:"GitHub actions"},"Github Actions"),".")),(0,o.kt)("p",null,"If you have another CI, you can integrate it using these ",(0,o.kt)("a",{parentName:"p",href:"../docs/ci-integration/general",title:"generic integration instructions"},"generic integration instructions"),".  "))}g.isMDXComponent=!0},3462:function(e,t,n){t.Z=n.p+"assets/images/ci_diagram-ff40408434cc5379bad71670d74d7d29.jpg"}}]);