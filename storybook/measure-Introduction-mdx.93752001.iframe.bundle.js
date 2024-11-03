(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[1320,5012],{"../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.12_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(e,o,t)=>{"use strict";t.d(o,{R:()=>d,x:()=>a});var r=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let s={},n=r.createContext(s);function d(e){let o=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(n.Provider,{value:o},e.children)}},"./stories/measure/Introduction.mdx":(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>c}),t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var r=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=t("../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.12_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),n=t("../../node_modules/.pnpm/@storybook+blocks@8.4.1_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.1/node_modules/@storybook/blocks/dist/index.mjs"),d=t("./stories/measure/Example.stories.tsx");function a(e){let o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"measure",children:"Measure"}),"\n","\n","\n",(0,r.jsx)(n.W8,{title:"Base/Measure/Introduction"}),"\n",(0,r.jsx)(n.Hl,{of:d.Default}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-jsx",children:"<Measure />\n"})}),"\n",(0,r.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(o.p,{children:"Each component is published as a separate package."}),"\n",(0,r.jsx)(o.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-measure\n"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-measure\n"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-measure\n"})}),"\n",(0,r.jsx)(o.h2,{id:"usage",children:"Usage"})]})}function c(e={}){let{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},"../../node_modules/.pnpm/@storybook+blocks@8.4.1_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.1/node_modules/@storybook/blocks/dist sync recursive":e=>{function o(e){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="../../node_modules/.pnpm/@storybook+blocks@8.4.1_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.1/node_modules/@storybook/blocks/dist sync recursive",e.exports=o},"../../node_modules/.pnpm/@storybook+core@8.4.1/node_modules/@storybook/core/dist/components sync recursive":e=>{function o(e){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="../../node_modules/.pnpm/@storybook+core@8.4.1/node_modules/@storybook/core/dist/components sync recursive",e.exports=o},"../../node_modules/.pnpm/@storybook+core@8.4.1/node_modules/@storybook/core/dist/theming sync recursive":e=>{function o(e){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="../../node_modules/.pnpm/@storybook+core@8.4.1/node_modules/@storybook/core/dist/theming sync recursive",e.exports=o},"./stories/measure/Example.stories.tsx":(e,o,t)=>{"use strict";t.r(o),t.d(o,{Default:()=>d,__namedExportsOrder:()=>a,default:()=>n});var r=t("../../packages/measure/dist/index.mjs"),s=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let n={title:"Base/Measure/Example",component:()=>/*#__PURE__*/s.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},/*#__PURE__*/s.createElement(r.t,null))},d={args:{},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:200}}}},a=["Default"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {},\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 200\n      }\n    }\n  }\n}",...d.parameters?.docs?.source}}}},"../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMeasure.js":(e,o,t)=>{"use strict";t.d(o,{A:()=>c});var r=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=function(){},n="undefined"!=typeof window,d=n?r.useLayoutEffect:r.useEffect,a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let c=n&&void 0!==window.ResizeObserver?function(){var e=(0,r.useState)(null),o=e[0],t=e[1],s=(0,r.useState)(a),n=s[0],c=s[1],i=(0,r.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var o=e[0].contentRect;c({x:o.x,y:o.y,width:o.width,height:o.height,top:o.top,left:o.left,bottom:o.bottom,right:o.right})}})},[]);return d(function(){if(o)return i.observe(o),function(){i.disconnect()}},[o]),[t,n]}:function(){return[s,a]}},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,o,t)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,o,t){var r,n={},i=null,u=null;for(r in void 0!==t&&(i=""+t),void 0!==o.key&&(i=""+o.key),void 0!==o.ref&&(u=o.ref),o)d.call(o,r)&&!c.hasOwnProperty(r)&&(n[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===n[r]&&(n[r]=o[r]);return{$$typeof:s,type:e,key:i,ref:u,props:n,_owner:a.current}}o.Fragment=n,o.jsx=i,o.jsxs=i},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,o,t)=>{"use strict";e.exports=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/measure/dist/index.mjs":(e,o,t)=>{"use strict";t.d(o,{t:()=>m});var r=(e,o)=>({x:e,y:o}),s=(e,o)=>({start:e,end:o}),n=(e,o,t,n)=>s(r(e,o),r(t,n)),d=e=>{let{width:o,height:t}=e,r=o/2,s=t/2;return[n(0,0,r,s),n(o,0,r,s),n(0,t,r,s),n(o,t,r,s)]},a=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=e=>{let{width:o,height:t,styles:r}=e,s=`${o}x${t}`,n=Math.min(o,t)/s.length,[i,u]=[o/2,t/2],l=r.stroke,m=(0,a.useMemo)(()=>d({width:o,height:t}),[o,t]);return/* @__PURE__ */(0,c.jsxs)("svg",{width:o,height:t,children:[/* @__PURE__ */(0,c.jsx)("title",{children:s}),/* @__PURE__ */(0,c.jsx)("rect",{x:0,y:0,width:o,height:t,fill:"none",stroke:l.color,strokeWidth:l.width,strokeDasharray:l.dasharray}),m.map(e=>/* @__PURE__ */(0,c.jsx)("line",{x1:e.start.x,y1:e.start.y,x2:e.end.x,y2:e.end.y,stroke:l.color,strokeWidth:l.width,strokeDasharray:l.dasharray})),/* @__PURE__ */(0,c.jsx)("text",{x:i,y:u,textAnchor:"middle",dominantBaseline:"middle",fontSize:n,fontFamily:r.text.fontFamily,children:s})]})},u=t("../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMeasure.js"),l=/*#__PURE__*/(0,a.createContext)({stroke:{color:"black",width:1,dasharray:2},text:{fontFamily:"monospace"}}),m=()=>{let[e,{width:o,height:t}]=(0,u.A)(),r=a.useContext(l);return/* @__PURE__ */(0,c.jsx)("div",{ref:e,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:/* @__PURE__ */(0,c.jsx)(i,{width:o,height:t,styles:r})})}}}]);