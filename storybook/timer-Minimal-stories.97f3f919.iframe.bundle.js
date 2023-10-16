"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[438],{"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js":function(e,n,t){var r=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");n.Z=function(e,n){var t=(0,r.useRef)(function(){});(0,r.useEffect)(function(){t.current=e}),(0,r.useEffect)(function(){if(null!==n){var e=setInterval(function(){return t.current()},n||0);return function(){return clearInterval(e)}}},[n])}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(e,n,t){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,u={},s=null,l=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!a.hasOwnProperty(r)&&(u[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===u[r]&&(u[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:l,props:u,_owner:c.current}}n.Fragment=u,n.jsx=s,n.jsxs=s},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(e,n,t){e.exports=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/timer/Minimal.stories.tsx":function(e,n,t){function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}t.r(n),t.d(n,{Default:function(){return s}});var u,i,c,a={title:"Base/Timer/Minimal",component:t("../../packages/timer/dist/index.mjs").gZ};n.default=a;var s={args:{remaining:1234,running:!1}};s.parameters=o(r({},s.parameters),{docs:o(r({},null===(u=s.parameters)||void 0===u?void 0:u.docs),{source:r({originalSource:"{\n  args: {\n    remaining: 1234,\n    running: false\n  }\n}"},null===(c=s.parameters)||void 0===c?void 0:null===(i=c.docs)||void 0===i?void 0:i.source)})})},"../../packages/timer/dist/index.mjs":function(e,n,t){t.d(n,{gZ:function(){return s},oF:function(){return y},ax:function(){return p},P6:function(){return o}});var r=Object.defineProperty,o={};!function(e,n){for(var t in n)r(e,t,{get:n[t],enumerable:!0})}(o,{zeroPad2:function(){return i},zeroPad3:function(){return c}});var u=function(e,n){return String(e).padStart(n,"0")},i=function(e){return u(e,2)},c=function(e){return u(e,3)},a=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=function(e){var n=e.remaining,t=e.running,r=e.incrementTimerValue,o=e.toggle,u=e.reset;return(0,a.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,a.jsxs)("form",{children:[(0,a.jsx)("span",{children:function(e){return"".concat(i(Math.floor(e/60)),":").concat(i(e%60|0),".").concat(c(e%1*1e3|0))}(n)}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",name:"incrementMinute",onClick:function(e){e.preventDefault(),r(60)},children:"+分"}),(0,a.jsx)("button",{type:"submit",name:"incrementSecond",onClick:function(e){e.preventDefault(),r(1)},children:"+秒"}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),u()},children:"Reset"}),(0,a.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),o()},children:t?"Stop":"Start"})]})})},l=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=t("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var u=[],i=!0,c=!1;try{for(o=o.call(e);!(i=(t=o.next()).done)&&(u.push(t.value),!n||u.length!==n);i=!0);}catch(e){c=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(c)throw r}}return u}}(e,n)||function(e,n){if(e){if("string"==typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=l.createContext({remaining:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){},incrementTimerValue:function(e){},setTimerValue:function(e){}}),y=function(e){var n,t,r,o,u=e.children,i=function(e){},c=null!==(n=e.onStart)&&void 0!==n?n:i,s=null!==(t=e.onStop)&&void 0!==t?t:i,m=null!==(r=e.onComplete)&&void 0!==r?r:i,y=null!==(o=e.onReset)&&void 0!==o?o:i,v=d((0,l.useState)(!1),2),b=v[0],j=v[1],g=d((0,l.useState)(new Date),2),_=g[0],O=g[1],h=d((0,l.useState)(0),2),w=h[0],x=h[1],S=e.refreshInterval||10;(0,f.Z)(function(){P()},S);var P=function(){if(b){var e=function(e){return(e.getTime()-new Date().getTime())/1e3}(_);x(e),e<=0&&(x(0),j(!1),m(new CustomEvent("complete",{})))}},k=function(){w<=0||b||(O(new Date(Date.now()+1e3*w)),j(!0),c(new CustomEvent("start",{})))},D=function(){b&&(j(!1),s(new CustomEvent("stop",{})))};return(0,a.jsx)(p.Provider,{value:{remaining:w,running:b,toggle:function(){b?D():k()},reset:function(){b&&D(),x(0),y(new CustomEvent("reset",{}))},start:k,stop:D,setTimerValue:function(e){D(),x(e||0)},incrementTimerValue:function(e){D(),x(w+e)}},children:u})}}}]);