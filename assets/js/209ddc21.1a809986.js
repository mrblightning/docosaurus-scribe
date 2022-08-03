"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[134],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return m}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={description:"CI Integration"},c="CI Integration",l={unversionedId:"ci-integration/README",id:"ci-integration/README",title:"CI Integration",description:"CI Integration",source:"@site/docs/ci-integration/README.md",sourceDirName:"ci-integration",slug:"/ci-integration/",permalink:"/docosaurus-scribe/docs/ci-integration/",tags:[],version:"current",frontMatter:{description:"CI Integration"},sidebar:"tutorialSidebar",previous:{title:"How to generate an SBOM using our CLI",permalink:"/docosaurus-scribe/docs/gensbomcli"},next:{title:"GitHub Actions",permalink:"/docosaurus-scribe/docs/ci-integration/github-actions"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ci-integration"},"CI Integration"),(0,a.kt)("p",null,"Scribe allows you to integrate our ",(0,a.kt)("em",{parentName:"p"},"SBOM")," creation tool and our report directly into your pipeline to be viewed and shared directly from Scribe Hub. Below are two suggested integrations, using ",(0,a.kt)("a",{href:"/docosaurus-scribe/docs/ci-integration/github-actions"},"GitHub actions")," and ",(0,a.kt)("a",{href:"/docosaurus-scribe/docs/ci-integration/jenkins"},"Jenkins over Kubernetes"),". We also offer a more generalized option allowing integration with other ",(0,a.kt)("a",{href:"/docosaurus-scribe/docs/ci-integration/general"},"CI systems"),".  "),(0,a.kt)("p",null,"No matter the pipeline the basic operation is the same: You need to create two ",(0,a.kt)("em",{parentName:"p"},"SBOMs"),", one of the repository files and one of the final image using gensbom. The important part is to include the project id key generated by Scribe Hub in the code to create the connection between the generated ",(0,a.kt)("em",{parentName:"p"},"SBOMs")," and Scribe Hub.  "),(0,a.kt)("img",{src:"../img/ci/ci_diagram.jpg",alt:"Grype alpine",width:"100%"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"GitHub actions")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("img",{src:"../img/ci/github.png",alt:"GitHub",width:"30px"})," Integrate as a step in ",(0,a.kt)("b",null,(0,a.kt)("a",{href:"/docosaurus-scribe/docs/ci-integration/github-actions"},"GitHub actions")),". ")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Jenkins")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("img",{src:"../img/ci/jenkins.png",alt:"Jenkins",width:"30px"})," Integrate as a step in a ",(0,a.kt)("b",null,(0,a.kt)("a",{href:"/docosaurus-scribe/docs/ci-integration/jenkins"},"Jenkins"))," pipeline. Important to note that this is for ",(0,a.kt)("b",null,"Jenkins over Kubernetes")," only. ")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Other CI Systems")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Integrate into other ",(0,a.kt)("b",null,(0,a.kt)("a",{href:"/docosaurus-scribe/docs/ci-integration/general"},"CI systems")),".  "))),(0,a.kt)("p",null,"Let's get started."))}m.isMDXComponent=!0}}]);