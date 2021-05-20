(self.webpackChunkcmp_documentation_website=self.webpackChunkcmp_documentation_website||[]).push([[103],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4747:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={sidebar_position:3,id:"usage"},s={unversionedId:"getting-started/usage",id:"getting-started/usage",isDocsHomePage:!1,title:"Usage",description:'The main purpose of the bundled SDK is to allow programmatic access to some core functions of the UI by offering our own "wrapper".',source:"@site/docs/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/cmp-documentation/docs/getting-started/usage",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"usage"},sidebar:"defaultSidebar",previous:{title:"Configuration",permalink:"/cmp-documentation/docs/getting-started/configuration"},next:{title:"Matomo",permalink:"/cmp-documentation/docs/integration-guides/matomo-integration"}},l=[{value:"As global Window variable",id:"as-global-window-variable",children:[]},{value:"As package",id:"as-package",children:[{value:"Typescript",id:"typescript",children:[]}]},{value:"Possible pitfalls",id:"possible-pitfalls",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'The main purpose of the bundled SDK is to allow programmatic access to some core functions of the UI by offering our own "wrapper".\nIt is ',(0,r.kt)("em",{parentName:"p"},"not")," meant to circumvent or replace the usage of the UI itself."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A complete documentation of the Typescript API can be found here: ",(0,r.kt)("a",{parentName:"p",href:"/cmp-documentation/docs/api/README"},"docs/api"),"."))),(0,r.kt)("h2",{id:"as-global-window-variable"},"As global Window variable"),(0,r.kt)("p",null,"The SDK is bundled with the Tealium tag, so it can be used once the tag manager is properly loaded.\nAll methods are available from within the ",(0,r.kt)("inlineCode",{parentName:"p"},"DB_CMP")," namespace:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In the browser console")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"DB_CMP.isInitialized();\nDB_CMP.getServices();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In your code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (typeof window !== 'undefined') {\n  // browser only\n  const { DB_CMP } = window;\n  if (DB_CMP) {\n    // ...\n  }\n}\n")),(0,r.kt)("h2",{id:"as-package"},"As package"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently, the package is only available via private GitHub registry. We plan to make it public soon."))),(0,r.kt)("p",null,"Alternatively you can install the package and use the SDK directly, for example using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @bahn-x/cmp-sdk\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { init, getServices } from '@bahn-x/cmp-sdk';\n\ninit().then(() => {\n  // use the SDK, e.g.:\n  const services = getServices();\n});\n")),(0,r.kt)("h3",{id:"typescript"},"Typescript"),(0,r.kt)("p",null,"The package also includes type definitions, so you can extend the global ",(0,r.kt)("inlineCode",{parentName:"p"},"Window")," object and use the SDK in your code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// for example globals.d.ts\nimport { CmpBrowserObject } from '@bahn-x/cmp-sdk';\n\ndeclare global {\n  interface Window {\n    /**\n     * NOTE: Due to the way the SDK gets loaded, this variable can be undefined,\n     * e.g. if external script tags are blocked by the browser.\n     */\n    DB_CMP?: CmpBrowserObject;\n  }\n}\n\n// somewhere-else.ts\nconst { DB_CMP } = window;\nDB_CMP?.getServices();\n")),(0,r.kt)("h2",{id:"possible-pitfalls"},"Possible pitfalls"),(0,r.kt)("p",null,"Due to the way the CMP gets loaded and initialized, there can be race conditions and/or problems accessing the SDK depending on when and how you access it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"accessing the SDK before the CMP is completely loaded (e.g. due to a slow internet connection)"),(0,r.kt)("li",{parentName:"ul"},"script tags not being loaded at all (e.g. ad blocker blocking the tag manager)")),(0,r.kt)("p",null,"To avoid that, there are a couple approaches:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// When accessing the global window variable,\n// check availability of the script before doing anything with it:\nconst { DB_CMP } = window;\nif (DB_CMP) {\n  // access the SDK\n}\n\n// check readiness of the SDK (doesn't counter race conditions)\nif (DB_CMP.isInitialized()) {\n  // the SDK is initialized and available\n}\n\n// wait for proper initialization by using the `init()` method\nDB_CMP.init().then(() => {\n  // the SDK is initialized and available\n});\n\n// use the custom event to wait for readiness\nwindow.addEventListener('DB_CMP_INITIALIZED', () => {\n  // the SDK is initialized and available\n});\n")))}p.isMDXComponent=!0}}]);