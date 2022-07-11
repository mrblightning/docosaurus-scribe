"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[844],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,b=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(b,a(a({ref:n},l),{},{components:t})):r.createElement(b,a({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6050:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],c={sidebar_position:2},s="Jenkins",u={unversionedId:"ci-cd-integration/jenkins",id:"ci-cd-integration/jenkins",title:"Jenkins",description:"Integrate as a step in Jenkins pipelines",source:"@site/docs/ci-cd-integration/jenkins.md",sourceDirName:"ci-cd-integration",slug:"/ci-cd-integration/jenkins",permalink:"/docosaurus-scribe/docs/ci-cd-integration/jenkins",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"GitHub Actions",permalink:"/docosaurus-scribe/docs/ci-cd-integration/github-actions"},next:{title:"Example",permalink:"/docosaurus-scribe/docs/ci-cd-integration/example"}},l={},p=[],f={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jenkins"},"Jenkins"),(0,o.kt)("p",null,"Integrate as a step in Jenkins pipelines"),(0,o.kt)("p",null,"Get Bomber and Valint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://www.scribesecurity.com/getscribe | sh\n")),(0,o.kt)("p",null,"Here's usage example for Jenkins workflow with Scribe:  "),(0,o.kt)("p",null,"Add the following at the very top of your Jenkinsfile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"library identifier: 'JSL@master', retriever: modernSCM(\n     [$class       : 'GitSCMSource',\n      remote       : 'https://github.com/scribe-security/JSL.git'])\n")),(0,o.kt)("p",null,"Define the needed function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"def report(Map conf)\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},' report(target: "busybox:latest", \n      verbose: 2,\n       scribe-enable: true,\n      scribe-clientid: ${{ inputs.clientid }}\n      scribe-clientsecret: ${{ inputs.clientsecret }}\n      )\n')))}d.isMDXComponent=!0}}]);