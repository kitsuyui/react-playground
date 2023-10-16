"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[873,862],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":function(e,t,n){n.d(t,{NF:function(){return s},Zo:function(){return c},ah:function(){return a},pC:function(){return o}});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=r.createContext({});function s(e){return function(t){let n=a(t.components);return r.createElement(e,{...t,allComponents:n})}}function a(e){let t=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let i={};function c({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:a(e),r.createElement(o.Provider,{value:s},t)}},"./stories/measure/Introduction.mdx":function(e,t,n){n.r(t),n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=n("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),s=n("../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.13_@types+react@17.0.68_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),a=n("./stories/measure/Example.stories.tsx");function i(e){let t=Object.assign({h1:"h1",pre:"pre",code:"code",h2:"h2",p:"p"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"measure",children:"Measure"}),"\n","\n","\n",(0,r.jsx)(s.h_,{title:"Base/Measure/Introduction"}),"\n",(0,r.jsx)(s.Xz,{of:a.Default}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"<Measure />\n"})}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"Each component is published as a separate package."}),"\n",(0,r.jsx)(t.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-measure\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-measure\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-measure\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"})]})}t.default=function(e={}){let{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js":function(e,t,n){n.d(t,{Z:function(){return c}});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=function(){},s="undefined"!=typeof window,a=s?r.useLayoutEffect:r.useEffect,i={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},c=s&&void 0!==window.ResizeObserver?function(){var e=(0,r.useState)(null),t=e[0],n=e[1],o=(0,r.useState)(i),s=o[0],c=o[1],u=(0,r.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;c({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return a(function(){if(t)return u.observe(t),function(){u.disconnect()}},[t]),[n,s]}:function(){return[o,i]}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(e,t,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,s={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(e,t,n){e.exports=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/measure/Example.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Default:function(){return l}});var r,o,s,a=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=n("../../packages/measure/dist/index.mjs");function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t.default={title:"Base/Measure/Example",component:function(){return(0,a.jsx)("div",{style:{width:"100%",height:"100%",position:"absolute"},children:(0,a.jsx)(i.U,{})})}};var l={args:{},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:200}}}};l.parameters=u(c({},l.parameters),{docs:u(c({},null===(r=l.parameters)||void 0===r?void 0:r.docs),{source:c({originalSource:"{\n  args: {},\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 200\n      }\n    }\n  }\n}"},null===(s=l.parameters)||void 0===s?void 0:null===(o=s.docs)||void 0===o?void 0:o.source)})})},"../../packages/measure/dist/index.mjs":function(e,t,n){n.d(t,{U:function(){return a}});var r=n("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js"),o=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var a=function(){var e=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var s=[],a=!0,i=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(s.push(n.value),!t||s.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,r.Z)(),2),t=e[0],n=e[1],a=n.width,i=n.height,c="".concat(a,"x").concat(i),u=Math.min(a,i)/c.length;return(0,o.jsx)("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:(0,o.jsxs)("svg",{width:a,height:i,children:[(0,o.jsx)("rect",{x:0,y:0,width:a,height:i,fill:"none",stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:0,y1:0,x2:a/2,y2:i/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:a,y1:0,x2:a/2,y2:i/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:0,y1:i,x2:a/2,y2:i/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:a,y1:i,x2:a/2,y2:i/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("text",{x:a/2,y:i/2,textAnchor:"middle",dominantBaseline:"middle",fontSize:u,fontFamily:"monospace",children:c})]})})}}}]);