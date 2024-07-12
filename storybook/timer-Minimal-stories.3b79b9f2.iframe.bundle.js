"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[536],{"./stories/timer/Minimal.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>s,__namedExportsOrder:()=>o,default:()=>n});let n={title:"Base/Timer/Minimal",component:r("../../packages/timer/dist/index.mjs").le},s={args:{remaining:1234,running:!1}},o=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{\n  args: {\n    remaining: 1234,\n    running: false\n  }\n}",...s.parameters?.docs?.source}}}},"../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js":(e,t,r)=>{r.d(t,{A:()=>s});var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let s=function(e,t){var r=(0,n.useRef)(function(){});(0,n.useEffect)(function(){r.current=e}),(0,n.useEffect)(function(){if(null!==t){var e=setInterval(function(){return r.current()},t||0);return function(){return clearInterval(e)}}},[t])}},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function m(e,t,r){var n,o={},m=null,l=null;for(n in void 0!==r&&(m=""+r),void 0!==t.key&&(m=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!i.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:m,ref:l,props:o,_owner:u.current}}t.Fragment=o,t.jsx=m,t.jsxs=m},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,t,r)=>{e.exports=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/timer/dist/index.mjs":(e,t,r)=>{r.d(t,{le:()=>l,f9:()=>f,PT:()=>p,Wp:()=>s});var n=Object.defineProperty,s={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(s,{zeroPad2:()=>a,zeroPad3:()=>u});var o=(e,t)=>String(e).padStart(t,"0"),a=e=>o(e,2),u=e=>o(e,3),i=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=e=>{let t=Math.floor(e/60);return`${a(t)}:${a(e%60|0)}.${u(e%1*1e3|0)}`},l=e=>{let{remaining:t,running:r,incrementTimerValue:n,toggle:s,reset:o}=e;return(0,i.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,i.jsxs)("form",{children:[(0,i.jsx)("span",{children:m(t)}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"submit",name:"incrementMinute",onClick:e=>{e.preventDefault(),n(60)},children:"+分"}),(0,i.jsx)("button",{type:"submit",name:"incrementSecond",onClick:e=>{e.preventDefault(),n(1)},children:"+秒"}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"submit",name:"reset",onClick:e=>{e.preventDefault(),o()},children:"Reset"}),(0,i.jsx)("button",{type:"submit",onClick:e=>{e.preventDefault(),s()},children:r?"Stop":"Start"})]})})},c=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=r("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js"),p=c.createContext({remaining:0,running:!1,start(){},stop(){},toggle(){},reset(){},incrementTimerValue(e){},setTimerValue(e){}}),_=e=>(e.getTime()-new Date().getTime())/1e3,f=e=>{let{children:t}=e,r=e=>{},n=e.onStart??r,s=e.onStop??r,o=e.onComplete??r,a=e.onReset??r,[u,m]=(0,c.useState)(!1),[l,f]=(0,c.useState)(new Date),[j,v]=(0,c.useState)(0),x=e.refreshInterval||10;(0,d.A)(()=>{y()},x);let y=()=>{if(u){let e=_(l);v(e),e<=0&&(v(0),m(!1),o(new CustomEvent("complete",{})))}},g=()=>{j<=0||u||(f(new Date(Date.now()+1e3*j)),m(!0),n(new CustomEvent("start",{})))},b=()=>{u&&(m(!1),s(new CustomEvent("stop",{})))};return(0,i.jsx)(p.Provider,{value:{remaining:j,running:u,toggle:()=>{u?b():g()},reset:()=>{u&&b(),v(0),a(new CustomEvent("reset",{}))},start:g,stop:b,setTimerValue(e){b(),v(e||0)},incrementTimerValue(e){b(),v(j+e)}},children:t})}}}]);