"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[521],{"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js":(e,t,r)=>{r.d(t,{Z:()=>s});var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=function(){},i="undefined"!=typeof window,a=i?n.useLayoutEffect:n.useEffect,u={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let s=i&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],r=e[1],o=(0,n.useState)(u),i=o[0],s=o[1],l=(0,n.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;s({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return a(function(){if(t)return l.observe(t),function(){l.disconnect()}},[t]),[r,i]}:function(){return[o,u]}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:u.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(e,t,r)=>{e.exports=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/treemap/Example.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>g,default:()=>v});var n,o,i,a=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=r("../../packages/measure/dist/index.mjs"),s=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js");function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var c=function(e,t){var r=t.reduce(function(e,t){return e+t},0),n=e.width,o=e.height,i=[],a=0,u=!0,s=!1,l=void 0;try{for(var c,d=t[Symbol.iterator]();!(u=(c=d.next()).done);u=!0){var f=c.value,h=n*f/r;i.push({width:h,height:o,x:a,y:0}),a+=h}}catch(e){s=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(s)throw l}}return i},d=function(e,t){var r=t.reduce(function(e,t){return e+t},0),n=e.width,o=e.height,i=[],a=0,u=!0,s=!1,l=void 0;try{for(var c,d=t[Symbol.iterator]();!(u=(c=d.next()).done);u=!0){var f=c.value,h=o*f/r;i.push({width:n,height:h,x:0,y:a}),a+=h}}catch(e){s=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(s)throw l}}return i},f=function(e,t){var r=e.width,n=e.height;if(0===r||0===n||isNaN(r)||isNaN(n))return[];for(var o=t.reduce(function(e,t){return e+t},0),i=r*n/o,a=[],u={width:r,height:n,x:0,y:0},s=t.slice();s.length>0;)!function(){for(var e=u.width,t=u.height,r=u.x,n=u.y,o=e>t,l=[];s.length>0;){l.push(s.shift());var c=l.reduce(function(e,t){return e+t},0)*i,d=o?c/t:e,f=o?t:c/e;if(Math.max(d,1.78*f)/Math.min(d,1.78*f)<l.length+1)break}var h=l.reduce(function(e,t){return e+t},0),m=h*i,y=o?m/t:e,p=o?t:m/e,v=y>p,g=u.x,b=u.y,x=!0,w=!1,j=void 0;try{for(var _,O=l[Symbol.iterator]();!(x=(_=O.next()).done);x=!0){var k=_.value,S=y*k/h,P=p*k/h;a.push({width:v?S:y,height:v?p:P,x:v?g:r,y:v?n:b}),v?g+=S:b+=P}}catch(e){w=!0,j=e}finally{try{x||null==O.return||O.return()}finally{if(w)throw j}}u={width:o?e-y:e,height:o?t:t-p,x:o?r+y:r,y:o?n:n+p}}();return a},h=function(e){var t=e.weightedItems,r=e.splitStrategy,n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,u=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(u)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,s.Z)(),2),o=n[0],i=n[1],u=function(e,t,r){return"vertical"===r?c(e,t):"horizontal"===r?d(e,t):f(e,t)}({width:i.width,height:i.height},t.map(function(e){return e.weight}),void 0===r?"both":r);return(0,a.jsx)("div",{ref:o,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:u&&u.map(function(e,r){var n=e.width,o=e.height,i=e.x,u=e.y;return(0,a.jsx)("div",{style:{width:"".concat(n,"px"),height:"".concat(o,"px"),position:"absolute",overflow:"hidden",left:"".concat(i,"px"),top:"".concat(u,"px")},children:t[r].element},r)})})};function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function y(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var p=[{weight:4,element:(0,a.jsx)(u.U,{})},{weight:3,element:(0,a.jsx)(u.U,{})},{weight:2,element:(0,a.jsx)(u.U,{})},{weight:1,element:(0,a.jsx)(u.U,{})}];let v={title:"Base/Treemap/Example",component:function(){return(0,a.jsx)(h,{weightedItems:p,splitStrategy:"both"})}};var g={args:{},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:800}}}};g.parameters=y(m({},g.parameters),{docs:y(m({},null===(n=g.parameters)||void 0===n?void 0:n.docs),{source:m({originalSource:"{\n  args: {},\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 800\n      }\n    }\n  }\n}"},null===(i=g.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})})},"../../packages/measure/dist/index.mjs":(e,t,r)=>{r.d(t,{U:()=>a});var n=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js"),o=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var a=function(){var e=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,u=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(u)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,n.Z)(),2),t=e[0],r=e[1],a=r.width,u=r.height,s="".concat(a,"x").concat(u),l=Math.min(a,u)/s.length;return(0,o.jsx)("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:(0,o.jsxs)("svg",{width:a,height:u,children:[(0,o.jsx)("line",{x1:0,y1:0,x2:a/2,y2:u/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:a,y1:0,x2:a/2,y2:u/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:0,y1:u,x2:a/2,y2:u/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:a,y1:u,x2:a/2,y2:u/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("text",{x:a/2,y:u/2,textAnchor:"middle",dominantBaseline:"middle",fontSize:l,fontFamily:"monospace",children:s})]})})}}}]);