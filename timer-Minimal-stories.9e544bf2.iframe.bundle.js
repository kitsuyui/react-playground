"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[438],{"../../node_modules/react-use/esm/useInterval.js":(e,t,n)=>{n.d(t,{Z:()=>i});var r=n("../../node_modules/react/index.js"),o=function(e,t){var n=(0,r.useRef)(function(){});(0,r.useEffect)(function(){n.current=e}),(0,r.useEffect)(function(){if(null!==t){var e=setInterval(function(){return n.current()},t||0);return function(){return clearInterval(e)}}},[t])};let i=o},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("../../node_modules/react/index.js"),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:i,_owner:c.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},"../../node_modules/react/jsx-runtime.js":(e,t,n)=>{e.exports=n("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/timer/Minimal.stories.tsx":(e,t,n)=>{function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.r(t),n.d(t,{Default:()=>m,default:()=>f});var c,a,s,l={title:"Base/Timer/Minimal",component:n("../../packages/timer/dist/index.mjs").gZ};let f=l;var m={args:{remaining:1234,running:!1}};m.parameters=u(o({},m.parameters),{docs:u(o({},null===(c=m.parameters)||void 0===c?void 0:c.docs),{source:o({originalSource:"{\n  args: {\n    remaining: 1234,\n    running: false\n  }\n}"},null===(a=m.parameters)||void 0===a?void 0:null===(s=a.docs)||void 0===s?void 0:s.source)})})},"../../packages/timer/dist/index.mjs":(e,t,n)=>{n.d(t,{P6:()=>b,ax:()=>p,gZ:()=>w,oF:()=>y});var r=n("../../node_modules/react/index.js"),o=n("../../node_modules/react-use/esm/useInterval.js"),i=n("../../node_modules/react/jsx-runtime.js");function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e){if(Array.isArray(e))return e}function a(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],u=!0,c=!1;try{for(o=o.call(e);!(u=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);u=!0);}catch(e){c=!0,r=e}finally{try{u||null==o.return||o.return()}finally{if(c)throw r}}return i}}function s(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){return c(e)||a(e,t)||f(e,t)||s()}function f(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}}var m=Object.defineProperty,d=function(e,t){for(var n in t)m(e,n,{get:t[n],enumerable:!0})},p=r.createContext({remaining:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){},incrementTimerValue:function(e){},setTimerValue:function(e){}});function v(e){return(e.getTime()-new Date().getTime())/1e3}var y=function(e){var t,n,u,c,a=function(){if(h){var e=v(S);D(e),e<=0&&(D(0),w(!1),j(new CustomEvent("complete",{})))}},s=function(){k<=0||h||(_(new Date(Date.now()+1e3*k)),w(!0),y(new CustomEvent("start",{})))},f=function(){h&&(w(!1),b(new CustomEvent("stop",{})))},m=e.children,d=function(e){},y=null!==(t=e.onStart)&&void 0!==t?t:d,b=null!==(n=e.onStop)&&void 0!==n?n:d,j=null!==(u=e.onComplete)&&void 0!==u?u:d,g=null!==(c=e.onReset)&&void 0!==c?c:d,O=l((0,r.useState)(!1),2),h=O[0],w=O[1],x=l((0,r.useState)(new Date),2),S=x[0],_=x[1],P=l((0,r.useState)(0),2),k=P[0],D=P[1],C=e.refreshInterval||10;return(0,o.Z)(function(){a()},C),(0,i.jsx)(p.Provider,{value:{remaining:k,running:h,toggle:function(){h?f():s()},reset:function(){h&&f(),D(0),g(new CustomEvent("reset",{}))},start:s,stop:f,setTimerValue:function(e){f(),D(e||0)},incrementTimerValue:function(e){f(),D(k+e)}},children:m})},b={};d(b,{zeroPad2:function(){return g},zeroPad3:function(){return O}});var j=function(e,t){return String(e).padStart(t,"0")},g=function(e){return j(e,2)},O=function(e){return j(e,3)};function h(e){return"".concat(g(Math.floor(e/60)),":").concat(g(e%60|0),".").concat(O(e%1*1e3))}var w=function(e){var t=e.remaining,n=e.running,r=e.incrementTimerValue,o=e.toggle,u=e.reset;return(0,i.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,i.jsxs)("form",{children:[(0,i.jsx)("span",{children:h(t)}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"submit",name:"incrementMinute",onClick:function(e){e.preventDefault(),r(60)},children:"+分"}),(0,i.jsx)("button",{type:"submit",name:"incrementSecond",onClick:function(e){e.preventDefault(),r(1)},children:"+秒"}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),u()},children:"Reset"}),(0,i.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),o()},children:n?"Stop":"Start"})]})})}}}]);