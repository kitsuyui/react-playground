"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[792],{"./stories/stopwatch/Example.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>a,__namedExportsOrder:()=>s,default:()=>u});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=n("../../packages/stopwatch/dist/index.mjs");n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let u={title:"Base/Stopwatch/Example",component:function(){return(0,r.jsx)(o.Az,{children:(0,r.jsx)(o.Ki.Consumer,{children:function(e){return(0,r.jsx)(o.Ii,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o,u;u=n[t],t in e?Object.defineProperty(e,t,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[t]=u})}return e}({},e))}})})}};var a={args:{onComplete:function(){}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  args: {\n    onComplete: () => {\n      return;\n    }\n  }\n}",...a.parameters?.docs?.source}}};let s=["Default"]},"../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js":(e,t,n)=>{n.d(t,{c:()=>o});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=function(e,t){var n=(0,r.useRef)(function(){});(0,r.useEffect)(function(){n.current=e}),(0,r.useEffect)(function(){if(null!==t){var e=setInterval(function(){return n.current()},t||0);return function(){return clearInterval(e)}}},[t])}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,u={},i=null,l=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:o,type:e,key:i,ref:l,props:u,_owner:s.current}}t.Fragment=u,t.jsx=i,t.jsxs=i},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(e,t,n)=>{e.exports=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/stopwatch/dist/index.mjs":(e,t,n)=>{n.d(t,{Ii:()=>i,Az:()=>v,Ki:()=>p,c$:()=>o});var r=Object.defineProperty,o={};!function(e,t){for(var n in t)r(e,n,{get:t[n],enumerable:!0})}(o,{zeroPad2:function(){return a},zeroPad3:function(){return s}});var u=function(e,t){return String(e).padStart(t,"0")},a=function(e){return u(e,2)},s=function(e){return u(e,3)},c=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=function(e){var t=e.elapsedTime,n=e.running,r=e.toggle,o=e.reset;return(0,c.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,c.jsxs)("form",{children:[(0,c.jsx)("span",{children:"".concat(a(Math.floor(t/60)),":").concat(a(t%60|0),".").concat(s(t%1*1e3|0))}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),o()},children:"Reset"}),(0,c.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),r()},children:n?"Stop":"Start"})]})})},l=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=n("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var u=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw r}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=l.createContext({elapsedTime:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){}}),_=function(e){return(new Date().getTime()-e.getTime())/1e3},v=function(e){var t,n,r,o=e.children,u=function(e){},a=null!==(t=e.onStart)&&void 0!==t?t:u,s=null!==(n=e.onStop)&&void 0!==n?n:u,i=null!==(r=e.onReset)&&void 0!==r?r:u,f=m((0,l.useState)(!1),2),v=f[0],y=f[1],j=m((0,l.useState)(0),2),b=j[0],h=j[1],g=m((0,l.useState)(0),2),x=g[0],S=g[1],w=m((0,l.useState)(new Date),2),O=w[0],k=w[1],E=e.refreshInterval||10;(0,d.c)(function(){v&&C()},E);var C=function(){h(_(O))},I=function(){S(x+b),h(0)},P=function(){v||(a(new CustomEvent("start",{})),k(new Date),y(!0))},D=function(){v&&(s(new CustomEvent("stop",{})),C(),y(!1),I())};return(0,c.jsx)(p.Provider,{value:{elapsedTime:b+x,running:v,toggle:function(){v?D():P()},reset:function(){v&&D(),i(new CustomEvent("reset",{})),h(0),S(0)},start:P,stop:D},children:o})}}}]);