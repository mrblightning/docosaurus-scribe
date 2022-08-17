"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[663],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(b,a(a({ref:t},l),{},{components:n})):r.createElement(b,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5113:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},c="GitHub Actions",u={unversionedId:"ci-integration/github-actions",id:"ci-integration/github-actions",title:"GitHub Actions",description:"The configuration requires product-key, client-id, and client-secret credentials obtained from your Scribe hub account at: Home>Products>[$your_product]>Setup",source:"@site/docs/ci-integration/github-actions.md",sourceDirName:"ci-integration",slug:"/ci-integration/github-actions",permalink:"/docosaurus-scribe/docs/ci-integration/github-actions",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Jenkins",permalink:"/docosaurus-scribe/docs/ci-integration/jenkins"},next:{title:"Other CI Systems",permalink:"/docosaurus-scribe/docs/ci-integration/general"}},l={},p=[{value:"Step 1: Add the credentials to GitHub",id:"step-1-add-the-credentials-to-github",level:2},{value:"Step 2: Call Scribe <em>gensbom</em> action from your GitHub workflow",id:"step-2-call-scribe-gensbom-action-from-your-github-workflow",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The configuration requires ",(0,i.kt)("em",null,(0,i.kt)("b",null,"product-key")),", ",(0,i.kt)("em",null,(0,i.kt)("b",null,"client-id")),", and ",(0,i.kt)("em",null,(0,i.kt)("b",null,"client-secret"))," credentials obtained from your Scribe hub account at: ",(0,i.kt)("inlineCode",{parentName:"p"},"Home>Products>[$your_product]>Setup")),(0,i.kt)("p",{parentName:"div"},"Or when you add a new product."))),(0,i.kt)("p",null,"This action includes ",(0,i.kt)("em",{parentName:"p"},"gensbom")," - the tool creating the ",(0,i.kt)("em",{parentName:"p"},"SBOM"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"gensbom")," has other capabilities and CLI options but the simplest integration is to call it to create an ",(0,i.kt)("em",{parentName:"p"},"SBOM")," of the repository and the final image. these ",(0,i.kt)("em",{parentName:"p"},"SBOMs")," are then automatically uploaded to Scribe Hub."),(0,i.kt)("h2",{id:"step-1-add-the-credentials-to-github"},"Step 1: Add the credentials to GitHub"),(0,i.kt)("p",null,"Add the credentials according to the GitHub instructions ",(0,i.kt)("a",{href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets"},"here"),". "),(0,i.kt)("h2",{id:"step-2-call-scribe-gensbom-action-from-your-github-workflow"},"Step 2: Call Scribe ",(0,i.kt)("em",{parentName:"h2"},"gensbom")," action from your GitHub workflow"),(0,i.kt)("p",null,"The following example workflow builds project mongo express and calls Scribe ",(0,i.kt)("em",{parentName:"p"},"gensbom")," twice: after checkout and after the docker image is built."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},'name: example workflow\n\nenv:\n  LOGIN_URL: "https://scribesecurity-beta.us.auth0.com"\n  AUTH0: "api.beta.scribesecurity.com"\n  SCRIBE_URL: "https://api.beta.scribesecurity.com"\n\non: \n  push:\n    tags:\n      - "*"\n\njobs:\n  scribe-report-test:\n    runs-on: ubuntu-latest\n    steps:\n\n      - uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n\n      - uses: actions/checkout@v3\n        with:\n          repository: mongo-express/mongo-express\n          ref: refs/tags/v1.0.0-alpha.4\n          path: mongo-express-scm\n\n      - name: Gensbom Scm generate bom, upload to scribe\n        id: gensbom_bom_scm\n        uses: scribe-security/actions/gensbom/bom@master\n        with:\n           type: dir\n           target: \'mongo-express-scm\'\n           verbose: 2\n           scribe-enable: true\n           scribe-client-id: ${{ secrets.clientid }}\n           scribe-client-secret: ${{ secrets.clientsecret }}\n           product-key: ${{ secrets.productkey }}\n           scribe-login-url: ${{ env.LOGIN_URL }}\n           scribe-auth.audience: ${{ env.AUTH0 }}\n           scribe-url: ${{ env.SCRIBE_URL }}\n\n\n      - name: Build and push remote\n        uses: docker/build-push-action@v2\n        with:\n          context: .\n          push: true\n          tags: mongo-express:1.0.0-alpha.4\n\n      - name: Gensbom Image generate bom, upload to scribe\n        id: gensbom_bom_image\n        uses: scribe-security/actions/gensbom/bom@master\n        with:\n           type: docker # to be included only if you\'re creating your docker image locally\n           target: \'mongo-express:1.0.0-alpha.4\'\n           verbose: 2\n           scribe-enable: true\n           scribe-client-id: ${{ secrets.clientid }}\n           scribe-client-secret: ${{ secrets.clientsecret }}\n           product-key: ${{ secrets.productkey }}\n           scribe-login-url: ${{ env.LOGIN_URL }}\n           scribe-auth.audience: ${{ env.AUTH0 }}\n           scribe-url: ${{ env.SCRIBE_URL }}\n\n\n      - uses: actions/upload-artifact@v2\n        with:\n          name: scribe-reports\n          path: |\n            ${{ steps.gensbom_bom_scm.outputs.OUTPUT_PATH }}\n            ${{ steps.gensbom_bom_image.outputs.OUTPUT_PATH }}\n            ${{ steps.valint_report.outputs.OUTPUT_PATH }}\n')))}d.isMDXComponent=!0}}]);