"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[471,191],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(e,t,n)=>{n.d(t,{NF:()=>s,Zo:()=>c,ah:()=>i,pC:()=>o});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=r.createContext({});function s(e){return function(t){let n=i(t.components);return r.createElement(e,{...t,allComponents:n})}}function i(e){let t=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function c({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:s},t)}},"./stories/dekamoji/Introduction.mdx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>c}),n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=n("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),s=n("../../node_modules/.pnpm/@storybook+blocks@7.3.2_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),i=n("./stories/dekamoji/Example.stories.tsx");function a(e){let t=Object.assign({h1:"h1",pre:"pre",code:"code",h2:"h2",p:"p"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"measure",children:"Measure"}),"\n","\n","\n",(0,r.jsx)(s.h_,{title:"Base/Dekamoji/Introduction"}),"\n",(0,r.jsx)(s.Xz,{of:i.Default}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'<Dekamoji text="あいうえお" />\n'})}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"Each component is published as a separate package."}),"\n",(0,r.jsx)(t.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-measure\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-measure\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-measure\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"})]})}let c=function(e={}){let{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js":(e,t,n)=>{n.d(t,{Z:()=>c});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=function(){},s="undefined"!=typeof window,i=s?r.useLayoutEffect:r.useEffect,a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let c=s&&void 0!==window.ResizeObserver?function(){var e=(0,r.useState)(null),t=e[0],n=e[1],o=(0,r.useState)(a),s=o[0],c=o[1],u=(0,r.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;c({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return i(function(){if(t)return u.observe(t),function(){u.disconnect()}},[t]),[n,s]}:function(){return[o,a]}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,s={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:a.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(e,t,n)=>{e.exports=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/dekamoji/Example.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>p,default:()=>m});var r,o,s,i=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=n("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var u=function(e){var t=e.text,n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var s=[],i=!0,a=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(a)throw r}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,a.Z)(),2),r=n[0],o=n[1],s=o.width,u=o.height,l=Math.min(u,s/Math.max(t.length,1));return(0,i.jsx)("div",{ref:r,style:{width:"100%",height:"100%",position:"absolute"},children:(0,i.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 ".concat(s," ").concat(u),children:(0,i.jsx)("text",{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",fontSize:"".concat(l,"px"),children:t})})})};function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let m={title:"Base/Dekamoji/Example",component:function(){return(0,i.jsx)("div",{style:{width:"100%",height:"100%",position:"absolute"},children:(0,i.jsx)(u,{text:"あいうえお"})})}};var p={args:{},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:200}}}};p.parameters=d(l({},p.parameters),{docs:d(l({},null===(r=p.parameters)||void 0===r?void 0:r.docs),{source:l({originalSource:"{\n  args: {},\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 200\n      }\n    }\n  }\n}"},null===(s=p.parameters)||void 0===s?void 0:null===(o=s.docs)||void 0===o?void 0:o.source)})})}}]);