"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[372],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6777:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={sidebar_position:1},s="What is Scribe",c={unversionedId:"overview",id:"overview",title:"What is Scribe",description:"Scribe is a leading security solution for organizations that are concerned about threats from their software supply chain.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docosaurus-scribe/docs/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/docosaurus-scribe/docs/intro"}},u={},p=[{value:"Who needs Scribe?",id:"who-needs-scribe",level:2},{value:"How Scribe works",id:"how-scribe-works",level:2},{value:"Software Bill of Materials (SBOM)",id:"software-bill-of-materials-sbom",level:3},{value:"Integrity Validation and Open Source Authentication",id:"integrity-validation-and-open-source-authentication",level:3},{value:"Results",id:"results",level:3},{value:"Signing critical files",id:"signing-critical-files",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-scribe"},"What is Scribe"),(0,a.kt)("p",null,"Scribe is a leading security solution for organizations that are concerned about threats from their software supply chain."),(0,a.kt)("h2",{id:"who-needs-scribe"},"Who needs Scribe?"),(0,a.kt)("p",null,"Scribe continuously assures your software is secure. It could be used by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DevSecOps teams securing software builds"),(0,a.kt)("li",{parentName:"ul"},"Security teams responsible for software in-use"),(0,a.kt)("li",{parentName:"ul"},"Larger scale development teams collaborating via remote tools")),(0,a.kt)("h2",{id:"how-scribe-works"},"How Scribe works"),(0,a.kt)("h3",{id:"software-bill-of-materials-sbom"},"Software Bill of Materials (SBOM)"),(0,a.kt)("p",null,"An SBOM is a standard format for documenting information about components of a software artifact. With Scribe tools that you can run in your pipeline, you can generate an SBOM for every build."),(0,a.kt)("p",null,"SBOMs have many uses, they can, for example, be used to identify vulnerabilities in dependencies."),(0,a.kt)("p",null,">",">"," ",(0,a.kt)("a",{parentName:"p",href:"https://scribesecurity.com/sbom/"},"Read more about SBOM")),(0,a.kt)("p",null,"After creating your SBOM, Scribe validates your software build. "),(0,a.kt)("h3",{id:"integrity-validation-and-open-source-authentication"},"Integrity Validation and Open Source Authentication"),(0,a.kt)("p",null,"Scribe validates the integrity of your software build by tracking the hash value of every file from its origin to the built artifact."),(0,a.kt)("p",null,"The origin of the files can be internal (from your organization), or from an external third party. For example: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A code repo"),(0,a.kt)("li",{parentName:"ul"},"A package manager"),(0,a.kt)("li",{parentName:"ul"},"A container registry")),(0,a.kt)("p",null,"In the validation process, Scribe flags suspicious modifications while accounting for legitimate changes such as linting and compilation."),(0,a.kt)("p",null,"With its open-source package intelligence, Scribe authenticates the open-source components, assuring that they were not maliciously modified."),(0,a.kt)("p",null,"Once your pipeline is integrated and configured with Scribe, every time you run the pipeline, Scribe creates an SBOM and an integrity report. Your builds are automatically secured and analyzed. "),(0,a.kt)("h3",{id:"results"},"Results"),(0,a.kt)("p",null,"Scribe enriches SBOMs with validation information and creates integrity reports that you can easily share with stakeholders."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In this release, Scribe validates Node.js projects and npm packages.")),(0,a.kt)("h3",{id:"signing-critical-files"},"Signing critical files"),(0,a.kt)("p",null,"Throughout the software development lifecycle (SDLC), advanced users can cryptographically sign and validate critical evidence with customer keys. Cryptographically signing and validating provides resistance against tampering. It extends software signing to the SDLC."))}f.isMDXComponent=!0}}]);