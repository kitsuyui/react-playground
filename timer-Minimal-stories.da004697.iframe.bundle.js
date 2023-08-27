"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[438],{"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js":(e,t,n)=>{n.d(t,{Z:()=>o});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=function(e,t){var n=(0,r.useRef)(function(){});(0,r.useEffect)(function(){n.current=e}),(0,r.useEffect)(function(){if(null!==t){var e=setInterval(function(){return n.current()},t||0);return function(){return clearInterval(e)}}},[t])}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,u={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!a.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:u,_owner:c.current}}t.Fragment=u,t.jsx=s,t.jsxs=s},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(e,t,n)=>{e.exports=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/timer/Minimal.stories.tsx":(e,t,n)=>{function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.r(t),n.d(t,{Default:()=>l,default:()=>s});var u,i,c,a={title:"Base/Timer/Minimal",component:n("../../packages/timer/dist/index.mjs").gZ};let s=a;var l={args:{remaining:1234,running:!1}};l.parameters=o(r({},l.parameters),{docs:o(r({},null===(u=l.parameters)||void 0===u?void 0:u.docs),{source:r({originalSource:"{\n  args: {\n    remaining: 1234,\n    running: false\n  }\n}"},null===(c=l.parameters)||void 0===c?void 0:null===(i=c.docs)||void 0===i?void 0:i.source)})})},"../../packages/timer/dist/index.mjs":(e,t,n)=>{n.d(t,{gZ:()=>s,oF:()=>y,ax:()=>p,P6:()=>o});var r=Object.defineProperty,o={};!function(e,t){for(var n in t)r(e,n,{get:t[n],enumerable:!0})}(o,{zeroPad2:function(){return i},zeroPad3:function(){return c}});var u=function(e,t){return String(e).padStart(t,"0")},i=function(e){return u(e,2)},c=function(e){return u(e,3)},a=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=function(e){var t=e.remaining,n=e.running,r=e.incrementTimerValue,o=e.toggle,u=e.reset;return(0,a.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,a.jsxs)("form",{children:[(0,a.jsx)("span",{children:function(e){return"".concat(i(Math.floor(e/60)),":").concat(i(e%60|0),".").concat(c(e%1*1e3))}(t)}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",name:"incrementMinute",onClick:function(e){e.preventDefault(),r(60)},children:"+分"}),(0,a.jsx)("button",{type:"submit",name:"incrementSecond",onClick:function(e){e.preventDefault(),r(1)},children:"+秒"}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),u()},children:"Reset"}),(0,a.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),o()},children:n?"Stop":"Start"})]})})},l=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=n("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var u=[],i=!0,c=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(u.push(n.value),!t||u.length!==t);i=!0);}catch(e){c=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(c)throw r}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=l.createContext({remaining:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){},incrementTimerValue:function(e){},setTimerValue:function(e){}}),y=function(e){var t,n,r,o,u=function(){if(_){var e=function(e){return(e.getTime()-new Date().getTime())/1e3}(w);k(e),e<=0&&(k(0),O(!1),b(new CustomEvent("complete",{})))}},i=function(){P<=0||_||(x(new Date(Date.now()+1e3*P)),O(!0),y(new CustomEvent("start",{})))},c=function(){_&&(O(!1),v(new CustomEvent("stop",{})))},s=e.children,m=function(e){},y=null!==(t=e.onStart)&&void 0!==t?t:m,v=null!==(n=e.onStop)&&void 0!==n?n:m,b=null!==(r=e.onComplete)&&void 0!==r?r:m,j=null!==(o=e.onReset)&&void 0!==o?o:m,g=d((0,l.useState)(!1),2),_=g[0],O=g[1],h=d((0,l.useState)(new Date),2),w=h[0],x=h[1],S=d((0,l.useState)(0),2),P=S[0],k=S[1],D=e.refreshInterval||10;return(0,f.Z)(function(){u()},D),(0,a.jsx)(p.Provider,{value:{remaining:P,running:_,toggle:function(){_?c():i()},reset:function(){_&&c(),k(0),j(new CustomEvent("reset",{}))},start:i,stop:c,setTimerValue:function(e){c(),k(e||0)},incrementTimerValue:function(e){c(),k(P+e)}},children:s})}}}]);