"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[293],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,b=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2870:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:6},u="Detecting CVEs",l={unversionedId:"cves",id:"cves",title:"Detecting CVEs",description:"You can list all the CVEs relevant to your software artifact as follows:",source:"@site/docs/cves.md",sourceDirName:".",slug:"/cves",permalink:"/docosaurus-scribe/docs/cves",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How to generate an SBOM using our CLI",permalink:"/docosaurus-scribe/docs/gensbomcli"}},s={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"detecting-cves"},"Detecting CVEs"),(0,a.kt)("p",null,"You can list all the CVEs relevant to your software artifact as follows: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate an ",(0,a.kt)("em",{parentName:"li"},"SBOM")," with ",(0,a.kt)("em",{parentName:"li"},"gensbom")),(0,a.kt)("li",{parentName:"ol"},"Use open-source tool ",(0,a.kt)("a",{href:"https://github.com/anchore/grype"},"Grype")," on this ",(0,a.kt)("em",{parentName:"li"},"SBOM"),". You can run it either offline or online. If you run offline, you need to update the tool frequently and suppress the automatic update.",(0,a.kt)("br",{parentName:"li"}),"In a bash shell run:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"grype sbom:./image-sbom.json"),"   ")),(0,a.kt)("p",null,"Output when no vulnerabilities are found:"),(0,a.kt)("img",{src:"../img/grype/grype_alpine.png",alt:"Grype alpine"}),(0,a.kt)("p",null,"Example output when vulnerabilities are found:"),(0,a.kt)("img",{src:"../img/grype/grype_couchbase.png",alt:"Grype couchbase"}),"\xa0",(0,a.kt)("p",null,"For more details on the CVEs run:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"grype sbom:./image-sbom.json -o json")))}m.isMDXComponent=!0}}]);