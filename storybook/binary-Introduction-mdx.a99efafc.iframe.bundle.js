(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[2447,2677],{"../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.10_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(e,n,r)=>{"use strict";r.d(n,{R:()=>i,x:()=>d});var t=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let o={},s=t.createContext(o);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}},"./stories/binary/Introduction.mdx":(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>l}),r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var t=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),o=r("../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.10_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),s=r("../../node_modules/.pnpm/@storybook+blocks@8.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.3.4/node_modules/@storybook/blocks/dist/index.mjs"),i=r("./stories/binary/Detailed.stories.tsx"),d=r("../../packages/binary/dist/index.mjs");function a(e){let n={h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"kitsuyuireact-binary",children:"@kitsuyui/react-binary"}),"\n","\n","\n",(0,t.jsx)(s.W8,{title:"Base/Binary/Introduction"}),"\n",(0,t.jsx)(s.Hl,{of:i.Default}),"\n",(0,t.jsxs)(n.p,{children:["As you can see, ",(0,t.jsx)(d.H$,{value:170,length:8})," is an inline element."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"})]})}function l(e={}){let{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},"../../node_modules/.pnpm/@storybook+core@8.3.4/node_modules/@storybook/core/dist/components sync recursive":e=>{function n(e){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id="../../node_modules/.pnpm/@storybook+core@8.3.4/node_modules/@storybook/core/dist/components sync recursive",e.exports=n},"../../node_modules/.pnpm/@storybook+core@8.3.4/node_modules/@storybook/core/dist/theming sync recursive":e=>{function n(e){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id="../../node_modules/.pnpm/@storybook+core@8.3.4/node_modules/@storybook/core/dist/theming sync recursive",e.exports=n},"./stories/binary/Detailed.stories.tsx":(e,n,r)=>{"use strict";r.r(n),r.d(n,{Default:()=>o,__namedExportsOrder:()=>s,default:()=>t});let t={title:"Base/Binary/Detailed",component:r("../../packages/binary/dist/index.mjs").H$},o={args:{value:170,length:7,showLittleEndianBitOrder:!0,showBigEndianBitOrder:!0}},s=["Default"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 0b10101010,\n    length: 7,\n    showLittleEndianBitOrder: true,\n    showBigEndianBitOrder: true\n  }\n}",...o.parameters?.docs?.source}}}},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":e=>{function n(e){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",e.exports=n},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,n,r)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,s={},l=null,c=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:l,ref:c,props:s,_owner:d.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,n,r)=>{"use strict";e.exports=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/binary/dist/index.mjs":(e,n,r)=>{"use strict";r.d(n,{H$:()=>a,By:()=>c});var t=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=e=>{let{value:n,bitElement:r}=e,s=(0|n).toString(2).split(""),i=s.length,d=e.length??i,a=Math.max(0,i-d),l=Math.max(0,d-i),c=Math.max(d,i),u=Array.from(Array(c)).map((e,n)=>{let o="1"===s[i-c+n],d=n<a,u=n<l;return /*#__PURE__*/t.createElement(r,{key:n,stand:o,overflow:d,zeroPadding:u,littleEndianBitOrder:c-n-1,bigEndianBitOrder:n})});return/* @__PURE__ */(0,o.jsx)(o.Fragment,{children:u})},i=e=>{let{stand:n,overflow:r,zeroPadding:t}=e,s=e.displayLittleEndianBitOrder??!1,i=e.displayBigEndianBitOrder??!1;return/* @__PURE__ */(0,o.jsxs)("div",{style:{display:"inline-block",fontFamily:"monospace",margin:"0.5px"},children:[/* @__PURE__ */(0,o.jsx)("div",{style:{color:n?"#999999":"#cccccc",backgroundColor:n?"#000000":"#ffffff",border:r?"1px dotted red":t?"1px dotted gray":"1px solid #cccccc"},children:n?"1":"0"}),s&&/* @__PURE__ */(0,o.jsx)(d,{index:e.littleEndianBitOrder}),i&&/* @__PURE__ */(0,o.jsx)(d,{index:e.bigEndianBitOrder})]})},d=e=>/* @__PURE__ */(0,o.jsx)("div",{style:{userSelect:"none",fontSize:"0.5em",textAlign:"center",lineHeight:"1em"},children:e.index}),a=e=>{let n=e.showLittleEndianBitOrder??!1,r=e.showBigEndianBitOrder??!1;return/* @__PURE__ */(0,o.jsx)(s,{value:e.value,length:e.length,bitElement:e=>/* @__PURE__ */(0,o.jsx)(i,{...e,displayLittleEndianBitOrder:n,displayBigEndianBitOrder:r})})},l=e=>{let{stand:n,overflow:r}=e;return/* @__PURE__ */(0,o.jsx)(o.Fragment,{children:r?"":n?"1":"0"})},c=e=>/* @__PURE__ */(0,o.jsx)(s,{value:e.value,length:8,bitElement:l})}}]);