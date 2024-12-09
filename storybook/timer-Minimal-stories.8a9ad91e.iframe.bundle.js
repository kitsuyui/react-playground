"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[2543,7158,8536],{"./stories/timer/Minimal.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>s,__namedExportsOrder:()=>o,default:()=>r});let r={title:"Base/Timer/Minimal",component:n("../../packages/timer/dist/index.mjs").le},s={args:{remaining:1234,running:!1}},o=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{\n  args: {\n    remaining: 1234,\n    running: false\n  }\n}",...s.parameters?.docs?.source}}}},"../../node_modules/.pnpm/react-use@17.5.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-use/esm/useInterval.js":(e,t,n)=>{n.d(t,{A:()=>s});var r=n("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");let s=function(e,t){var n=(0,r.useRef)(function(){});(0,r.useEffect)(function(){n.current=e}),(0,r.useEffect)(function(){if(null!==t){var e=setInterval(function(){return n.current()},t||0);return function(){return clearInterval(e)}}},[t])}},"../../node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react-jsx-runtime.production.js":(e,t)=>{/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(e,t,r){var s=null;if(void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return{$$typeof:n,type:e,key:s,ref:void 0!==(t=r.ref)?t:null,props:r}}t.Fragment=r,t.jsx=s,t.jsxs=s},"../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js":(e,t,n)=>{e.exports=n("../../node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react-jsx-runtime.production.js")},"../../packages/timer/dist/index.mjs":(e,t,n)=>{n.d(t,{le:()=>m,f9:()=>f,PT:()=>d});var r=Object.defineProperty;((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})({},{zeroPad2:()=>o,zeroPad3:()=>a});var s=(e,t)=>String(e).padStart(t,"0"),o=e=>s(e,2),a=e=>s(e,3),u=n("../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js"),i=e=>{let t=Math.floor(e/60);return`${o(t)}:${o(e%60|0)}.${a(e%1*1e3|0)}`},m=e=>{let{remaining:t,running:n,incrementTimerValue:r,toggle:s,reset:o}=e;return(0,u.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,u.jsxs)("form",{children:[(0,u.jsx)("span",{children:i(t)}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{type:"submit",name:"incrementMinute",onClick:e=>{e.preventDefault(),r(60)},children:"+分"}),(0,u.jsx)("button",{type:"submit",name:"incrementSecond",onClick:e=>{e.preventDefault(),r(1)},children:"+秒"}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{type:"submit",name:"reset",onClick:e=>{e.preventDefault(),o()},children:"Reset"}),(0,u.jsx)("button",{type:"submit",onClick:e=>{e.preventDefault(),s()},children:n?"Stop":"Start"})]})})},l=n("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),c=n("../../node_modules/.pnpm/react-use@17.5.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-use/esm/useInterval.js"),d=l.createContext({remaining:0,running:!1,start(){},stop(){},toggle(){},reset(){},incrementTimerValue(e){},setTimerValue(e){}}),p=e=>(e.getTime()-new Date().getTime())/1e3,f=e=>{let{children:t}=e,n=e=>{},r=e.onStart??n,s=e.onStop??n,o=e.onComplete??n,a=e.onReset??n,[i,m]=(0,l.useState)(!1),[f,_]=(0,l.useState)(new Date),[j,v]=(0,l.useState)(0),x=e.refreshInterval||10;(0,c.A)(()=>{g()},x);let g=()=>{if(i){let e=p(f);v(e),e<=0&&(v(0),m(!1),o(new CustomEvent("complete",{})))}},y=()=>{j<=0||i||(_(new Date(Date.now()+1e3*j)),m(!0),r(new CustomEvent("start",{})))},k=()=>{i&&(m(!1),s(new CustomEvent("stop",{})))};return(0,u.jsx)(d.Provider,{value:{remaining:j,running:i,toggle:()=>{i?k():y()},reset:()=>{i&&k(),v(0),a(new CustomEvent("reset",{}))},start:y,stop:k,setTimerValue(e){k(),v(e||0)},incrementTimerValue(e){k(),v(j+e)}},children:t})}}}]);