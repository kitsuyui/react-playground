"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[381],{"./stories/physical-size/Simple.stories.tsx":(e,r,t)=>{t.r(r),t.d(r,{Default:()=>a,__namedExportsOrder:()=>d,default:()=>n});var s=t("../../packages/physical-size/dist/index.mjs"),o=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let n={title:"Base/PhysicalSize/Simple",component:()=>/*#__PURE__*/o.createElement(s.s,null,/*#__PURE__*/o.createElement(s.m.Consumer,null,e=>/*#__PURE__*/o.createElement("div",null,e.ppi)))},a={args:{}},d=["Default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...a.parameters?.docs?.source}}}},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,r,t)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var s,n={},i=null,u=null;for(s in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(u=r.ref),r)a.call(r,s)&&!l.hasOwnProperty(s)&&(n[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===n[s]&&(n[s]=r[s]);return{$$typeof:o,type:e,key:i,ref:u,props:n,_owner:d.current}}r.Fragment=n,r.jsx=i,r.jsxs=i},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,r,t)=>{e.exports=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/physical-size/dist/index.mjs":(e,r,t)=>{t.d(r,{m:()=>n,s:()=>a});var s=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),n=/*#__PURE__*/(0,s.createContext)({ppi:96}),a=e=>{let r=(0,s.useRef)(null),[t,a]=(0,s.useState)(96);return(0,s.useEffect)(()=>{r?.current&&a(i(r.current))}),/* @__PURE__ */(0,o.jsxs)(o.Fragment,{children:[/* @__PURE__ */(0,o.jsx)(l,{ref:r}),/* @__PURE__ */(0,o.jsx)(n.Provider,{value:{ppi:t},children:e.children})]})},d=e=>{let{width:r,height:t}=e;return Math.sqrt(r*t)},l=/*#__PURE__*/(0,s.forwardRef)((e,r)=>/* @__PURE__ */(0,o.jsx)("div",{ref:r,style:{width:"1in",height:"1in",position:"absolute",top:"-100%",left:"-100%",opacity:0,overflow:"hidden"}})),i=e=>{let{offsetWidth:r,offsetHeight:t}=e;return d({width:r,height:t})}}}]);