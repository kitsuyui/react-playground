(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[2447,2677],{"../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.12_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(e,t,r)=>{"use strict";r.d(t,{R:()=>d,x:()=>i});var o=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let n={},s=o.createContext(n);function d(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(s.Provider,{value:t},e.children)}},"./stories/binary/Introduction.mdx":(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c}),r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var o=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),n=r("../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.12_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),s=r("../../node_modules/.pnpm/@storybook+blocks@8.4.1_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.1/node_modules/@storybook/blocks/dist/index.mjs"),d=r("./stories/binary/Detailed.stories.tsx"),i=r("../../packages/binary/dist/index.mjs");function a(e){let t={h1:"h1",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"kitsuyuireact-binary",children:"@kitsuyui/react-binary"}),"\n","\n","\n",(0,o.jsx)(s.W8,{title:"Base/Binary/Introduction"}),"\n",(0,o.jsx)(s.Hl,{of:d.Default}),"\n",(0,o.jsxs)(t.p,{children:["As you can see, ",(0,o.jsx)(i.H$,{value:170,length:8})," is an inline element."]}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"})]})}function c(e={}){let{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},"../../node_modules/.pnpm/@storybook+blocks@8.4.1_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.1/node_modules/@storybook/blocks/dist sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/.pnpm/@storybook+blocks@8.4.1_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.1/node_modules/@storybook/blocks/dist sync recursive",e.exports=t},"../../node_modules/.pnpm/@storybook+core@8.4.1/node_modules/@storybook/core/dist/components sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/.pnpm/@storybook+core@8.4.1/node_modules/@storybook/core/dist/components sync recursive",e.exports=t},"../../node_modules/.pnpm/@storybook+core@8.4.1/node_modules/@storybook/core/dist/theming sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/.pnpm/@storybook+core@8.4.1/node_modules/@storybook/core/dist/theming sync recursive",e.exports=t},"./stories/binary/Detailed.stories.tsx":(e,t,r)=>{"use strict";r.r(t),r.d(t,{Default:()=>n,__namedExportsOrder:()=>s,default:()=>o});let o={title:"Base/Binary/Detailed",component:r("../../packages/binary/dist/index.mjs").H$},n={args:{value:170,length:7,showLittleEndianBitOrder:!0,showBigEndianBitOrder:!0}},s=["Default"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 0b10101010,\n    length: 7,\n    showLittleEndianBitOrder: true,\n    showBigEndianBitOrder: true\n  }\n}",...n.parameters?.docs?.source}}}},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,s={},c=null,l=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)d.call(t,o)&&!a.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:n,type:e,key:c,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,t,r)=>{"use strict";e.exports=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/binary/dist/index.mjs":(e,t,r)=>{"use strict";r.d(t,{H$:()=>a,By:()=>l});var o=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=e=>{let{value:t,bitElement:r}=e,s=(0|t).toString(2).split(""),d=s.length,i=e.length??d,a=Math.max(0,d-i),c=Math.max(0,i-d),l=Math.max(i,d),u=Array.from(Array(l)).map((e,t)=>{let n="1"===s[d-l+t],i=t<a,u=t<c;return /*#__PURE__*/o.createElement(r,{key:t,stand:n,overflow:i,zeroPadding:u,littleEndianBitOrder:l-t-1,bigEndianBitOrder:t})});return/* @__PURE__ */(0,n.jsx)(n.Fragment,{children:u})},d=e=>{let{stand:t,overflow:r,zeroPadding:o}=e,s=e.displayLittleEndianBitOrder??!1,d=e.displayBigEndianBitOrder??!1;return/* @__PURE__ */(0,n.jsxs)("div",{style:{display:"inline-block",fontFamily:"monospace",margin:"0.5px"},children:[/* @__PURE__ */(0,n.jsx)("div",{style:{color:t?"#999999":"#cccccc",backgroundColor:t?"#000000":"#ffffff",border:r?"1px dotted red":o?"1px dotted gray":"1px solid #cccccc"},children:t?"1":"0"}),s&&/* @__PURE__ */(0,n.jsx)(i,{index:e.littleEndianBitOrder}),d&&/* @__PURE__ */(0,n.jsx)(i,{index:e.bigEndianBitOrder})]})},i=e=>/* @__PURE__ */(0,n.jsx)("div",{style:{userSelect:"none",fontSize:"0.5em",textAlign:"center",lineHeight:"1em"},children:e.index}),a=e=>{let t=e.showLittleEndianBitOrder??!1,r=e.showBigEndianBitOrder??!1;return/* @__PURE__ */(0,n.jsx)(s,{value:e.value,length:e.length,bitElement:e=>/* @__PURE__ */(0,n.jsx)(d,{...e,displayLittleEndianBitOrder:t,displayBigEndianBitOrder:r})})},c=e=>{let{stand:t,overflow:r}=e;return/* @__PURE__ */(0,n.jsx)(n.Fragment,{children:r?"":t?"1":"0"})},l=e=>/* @__PURE__ */(0,n.jsx)(s,{value:e.value,length:8,bitElement:c})}}]);