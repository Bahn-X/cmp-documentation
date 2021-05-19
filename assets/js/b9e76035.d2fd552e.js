(self.webpackChunkcmp_documentation_website=self.webpackChunkcmp_documentation_website||[]).push([[185],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),p=i,h=m["".concat(c,".").concat(p)]||m[p]||u[p]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},260:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),o={sidebar_label:"Adobe Analytics via Adobe Launch"},l={unversionedId:"examples/migrate-launch-tealium",id:"examples/migrate-launch-tealium",isDocsHomePage:!1,title:"Migrating Adobe Analytics loaded via Adobe Launch to Tealium",description:"In case Adobe Launch is used to load Adobe Analytics, the easiest way to migrate is to simply integrate Launch into Tealium (tag manager into tag manager) and let Launch handle the analytics scripts.",source:"@site/docs/examples/migrate-launch-tealium.md",sourceDirName:"examples",slug:"/examples/migrate-launch-tealium",permalink:"/cmp-documentation/docs/examples/migrate-launch-tealium",version:"current",sidebar_label:"Adobe Analytics via Adobe Launch",frontMatter:{sidebar_label:"Adobe Analytics via Adobe Launch"},sidebar:"defaultSidebar",previous:{title:"Matomo Integration",permalink:"/cmp-documentation/docs/examples/matomo-integration"},next:{title:"@bahn-x/cmp-sdk",permalink:"/cmp-documentation/docs/api/README"}},c=[{value:"Before",id:"before",children:[]},{value:"After",id:"after",children:[]}],s={toc:c};function d(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In case Adobe Launch is used to load Adobe Analytics, the easiest way to migrate is to simply integrate Launch into Tealium (tag manager into tag manager) and let Launch handle the analytics scripts."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is only applicable if Adobe Launch loads one script, e.g. Analytics, which we can map to a single DSP.\n",(0,r.kt)("strong",{parentName:"p"},"DO NOT")," use if Launch itself loads more than a single service for which consent is required!"))),(0,r.kt)("h2",{id:"before"},"Before"),(0,r.kt)("p",null,"Consider the following example of Adobe Launch loading Adobe Analytics:"),(0,r.kt)("img",{src:a(3325).Z,width:"500",alt:"Adobe Launch loads Adobe Analytics"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- Adobe Analytics datalayer --\x3e\n  <script>\n    var datalayer = {\n      // ...\n    };\n  <\/script>\n\n  \x3c!-- Adobe Launch tag --\x3e\n  <script src="//assets.adobedtm.com/xxx/xxx/launch-xxx.min.js" async><\/script>\n</head>\n')),(0,r.kt)("h2",{id:"after"},"After"),(0,r.kt)("p",null,"After removing the Adobe Launch tag and adding the Tealium and ",(0,r.kt)("inlineCode",{parentName:"p"},"utag_data")," object tag, the ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," should look as follows (",(0,r.kt)("a",{parentName:"p",href:"https://docs.tealium.com/platforms/javascript/install/#code-placement"},"note that the Tealium tag moved to right after the opening ",(0,r.kt)("inlineCode",{parentName:"a"},"<body>")," tag"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<head>\n    \x3c!-- existing Adobe Analytics datalayer remains --\x3e\n  <script>\n    var datalayer = {\n      // ...\n    };\n  <\/script>\n</head>\n<body>\n  \x3c!-- new: Tealium universal data object --\x3e\n  <script type=\"text/javascript\">\n    var utag_data = {\n      // ...\n    };\n  <\/script>\n\n  \x3c!-- new: Tealium tag --\x3e\n  <script type=\"text/javascript\">\n      (function(a,b,c,d){\n          a='https://tags.tiqcdn.com/utag/ACCOUNT/PROFILE/STAGE/utag.js';\n          b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;\n          a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);\n      })();\n  <\/script>\n</body>\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ACCOUNT")," is the Tealium account used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PROFILE")," is the currently used Tealium profile, i.e. the profile used to manage your website"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STAGE")," is the current stage being used: ",(0,r.kt)("inlineCode",{parentName:"li"},"prod"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"qa")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"dev"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"be careful to select the proper stage for your deployment target"))))))),(0,r.kt)("p",null,"This setup will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"load Tealium"),(0,r.kt)("li",{parentName:"ul"},"load the CMP"),(0,r.kt)("li",{parentName:"ul"},'check for "Adobe Analytics" consent using the CMP',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"reminder: this is only allowed if Launch exclusively loads Analytics"))),(0,r.kt)("li",{parentName:"ul"},"if consent is granted",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"let Tealium load Adobe Launch tag"),(0,r.kt)("li",{parentName:"ul"},"let Adobe Launch load the actual Adobe Analytics tags")))),(0,r.kt)("img",{src:a(7321).Z,width:"500",alt:"Tealium loads Launch loads Analytics"}))}d.isMDXComponent=!0},3325:function(e,t,a){"use strict";t.Z=a.p+"assets/images/launch-analytics-ae0b776ece5fdebe1800db753bbdc1f9.png"},7321:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tealium-launch-analytics-large-f6e721ee090844bf79a2d723c449bb61.png"}}]);