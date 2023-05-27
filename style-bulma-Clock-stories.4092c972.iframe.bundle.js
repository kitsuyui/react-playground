"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[722],{"./stories/style-bulma/Clock.stories.tsx":(e,t,r)=>{function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}r.r(t),r.d(t,{Default:()=>d,default:()=>m});var i,a,l,u={title:"Bulma/Clock",component:r("../../packages/style-bulma/dist/index.mjs").SU};let m=u;var d={args:{}};d.parameters=c(o({},d.parameters),{docs:c(o({},null===(i=d.parameters)||void 0===i?void 0:i.docs),{source:o({originalSource:"{\n  args: {}\n}"},null===(a=d.parameters)||void 0===a?void 0:null===(l=a.docs)||void 0===l?void 0:l.source)})})},"../../packages/style-bulma/dist/index.mjs":(e,t,r)=>{r.d(t,{B7:()=>y,SU:()=>f,uX:()=>g});var n=r("../../packages/style-bulma/node_modules/@kitsuyui/react-clock/dist/index.mjs"),o=r("../../node_modules/bulma/css/bulma.css"),s=r("../../node_modules/react/jsx-runtime.js"),c=r("../../packages/style-bulma/node_modules/@kitsuyui/react-timer/dist/index.mjs"),i=r("../../packages/style-bulma/node_modules/@kitsuyui/react-stopwatch/dist/index.mjs");function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var d=function(e){var t=e.date,r=e.timezone,o=t.toLocaleTimeString("ja-JP",{timeZone:r,hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});return(0,s.jsx)("div",{className:"card",children:(0,s.jsxs)("div",{className:"card-content",children:[(0,s.jsx)(n.Og,l({},e)),(0,s.jsx)("p",{className:"title is-family-monospace",children:o})]})})},f=function(e){var t=e.timezone,r=e.refreshInterval,o=t||Intl.DateTimeFormat().resolvedOptions().timeZone;return(0,s.jsx)(n.UV,{refreshInterval:void 0===r?10:r,children:(0,s.jsx)(n.KW.Consumer,{children:function(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d,{timezone:o,date:e})})}})})},p=function(e){return jsx("div",{className:"block",children:jsx("div",{className:"columns",children:jsx("div",{className:"column",children:jsx(AnalogClockOriginal,l({},e))})})})},j=function(e){return jsx(ClockContainer,{refreshInterval:10,children:jsx(DateContext.Consumer,{children:function(t){return jsx(Fragment,{children:jsx(p,m(l({},e),{date:t}))})}})})},b=function(e){var t=e.remaining,r=e.running,n=e.reset,o=e.toggle,c=e.incrementTimerValue,i=Intl.NumberFormat("en-US",{minimumIntegerDigits:2}),a="".concat(i.format(Math.floor(t/60)),":").concat(i.format(t%60|0));return(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("div",{className:"card-content",children:(0,s.jsx)("p",{className:"title is-family-monospace",children:a})}),(0,s.jsxs)("footer",{className:"card-footer",children:[(0,s.jsx)("span",{className:"card-footer-item",onClick:function(e){e.preventDefault(),c(60)},children:"+1m"}),(0,s.jsx)("span",{className:"card-footer-item",onClick:function(e){e.preventDefault(),c(1)},children:"+1s"}),(0,s.jsx)("span",{className:"card-footer-item"+(r?"":" disable"),onClick:n,children:"Reset"}),(0,s.jsx)("span",{className:"card-footer-item",onClick:o,children:r?"Stop":"Start"})]})]})},y=function(e){var t=e.onComplete;return(0,s.jsx)(c.oF,{onComplete:t,children:(0,s.jsx)(c.ax.Consumer,{children:function(e){return(0,s.jsx)(b,l({},e))}})})},O=function(e){var t=e.running,r=e.elapsedTime,n=e.reset,o=e.toggle,c=Intl.NumberFormat("en-US",{minimumIntegerDigits:2}),i="".concat(c.format(Math.floor(r/60)),":").concat(c.format(r%60|0));return(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("div",{className:"card-content",children:(0,s.jsx)("p",{className:"title is-family-monospace",children:i})}),(0,s.jsxs)("footer",{className:"card-footer",children:[(0,s.jsx)("span",{className:"card-footer-item"+(t?"":" disable"),onClick:n,children:"Reset"}),(0,s.jsx)("span",{className:"card-footer-item",onClick:o,children:t?"Stop":"Start"})]})]})},g=function(){return(0,s.jsx)(i.fT,{children:(0,s.jsx)(i.KH.Consumer,{children:function(e){return(0,s.jsx)(O,l({},e))}})})}}}]);