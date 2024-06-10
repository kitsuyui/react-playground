(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[12,320],{"../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(e,t,r)=>{"use strict";r.d(t,{R:()=>a,x:()=>i});var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let o={},s=n.createContext(o);function a(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}},"./stories/measure/Introduction.mdx":(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d}),r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),o=r("../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),s=r("../../node_modules/.pnpm/@storybook+blocks@8.1.6_@types+react-dom@18.3.0_@types+react@18.3.3_prettier@3.3.1_react-dom@_l3jp26fwfrfn23kixedtrzudta/node_modules/@storybook/blocks/dist/index.mjs"),a=r("./stories/measure/Example.stories.tsx");function i(e){let t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"measure",children:"Measure"}),"\n","\n","\n",(0,n.jsx)(s.W8,{title:"Base/Measure/Introduction"}),"\n",(0,n.jsx)(s.Hl,{of:a.Default}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"<Measure />\n"})}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.p,{children:"Each component is published as a separate package."}),"\n",(0,n.jsx)(t.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-measure\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-measure\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-measure\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"})]})}function d(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},"./stories/measure/Example.stories.tsx":(e,t,r)=>{"use strict";r.r(t),r.d(t,{Default:()=>a,__namedExportsOrder:()=>i,default:()=>s});var n=r("../../packages/measure/dist/index.mjs"),o=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let s={title:"Base/Measure/Example",component:function(){return o.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},o.createElement(n.t,null))}};var a={args:{},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:200}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  args: {},\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 200\n      }\n    }\n  }\n}",...a.parameters?.docs?.source}}};let i=["Default"]},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",e.exports=t},"../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMeasure.js":(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=function(){},s="undefined"!=typeof window,a=s?n.useLayoutEffect:n.useEffect,i={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let d=s&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],r=e[1],o=(0,n.useState)(i),s=o[0],d=o[1],c=(0,n.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;d({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return a(function(){if(t)return c.observe(t),function(){c.disconnect()}},[t]),[r,s]}:function(){return[o,i]}},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,s={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!d.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,t,r)=>{"use strict";e.exports=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/measure/dist/index.mjs":(e,t,r)=>{"use strict";r.d(t,{t:()=>m});var n=function(e,t){return{x:e,y:t}},o=function(e,t,r,o){return{start:n(e,t),end:n(r,o)}},s=function(e){var t=e.width,r=e.height,n=t/2,s=r/2;return[o(0,0,n,s),o(t,0,n,s),o(0,r,n,s),o(t,r,n,s)]},a=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),d=function(e){var t=e.width,r=e.height,n=e.styles,o="".concat(t,"x").concat(r),d=Math.min(t,r)/o.length,c=[t/2,r/2],u=c[0],l=c[1],m=n.stroke,p=(0,a.useMemo)(function(){return s({width:t,height:r})},[t,r]);return(0,i.jsxs)("svg",{width:t,height:r,children:[(0,i.jsx)("title",{children:o}),(0,i.jsx)("rect",{x:0,y:0,width:t,height:r,fill:"none",stroke:m.color,strokeWidth:m.width,strokeDasharray:m.dasharray}),p.map(function(e){return(0,i.jsx)("line",{x1:e.start.x,y1:e.start.y,x2:e.end.x,y2:e.end.y,stroke:m.color,strokeWidth:m.width,strokeDasharray:m.dasharray})}),(0,i.jsx)("text",{x:u,y:l,textAnchor:"middle",dominantBaseline:"middle",fontSize:d,fontFamily:n.text.fontFamily,children:o})]})},c=r("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMeasure.js");function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var l=(0,a.createContext)({stroke:{color:"black",width:1,dasharray:2},text:{fontFamily:"monospace"}}),m=function(){var e,t=function(e){if(Array.isArray(e))return e}(e=(0,c.A)())||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var s=[],a=!0,i=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(s.push(r.value),2!==s.length);a=!0);}catch(e){i=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw n}}return s}}(e,2)||function(e,t){if(e){if("string"==typeof e)return u(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,2)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=t[0],n=t[1],o=n.width,s=n.height,m=a.useContext(l);return(0,i.jsx)("div",{ref:r,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:(0,i.jsx)(d,{width:o,height:s,styles:m})})}}}]);