"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[521],{"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js":function(e,t,r){r.d(t,{Z:function(){return u}});var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=function(){},o="undefined"!=typeof window,s=o?n.useLayoutEffect:n.useEffect,a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},u=o&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],r=e[1],i=(0,n.useState)(a),o=i[0],u=i[1],l=(0,n.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;u({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return s(function(){if(t)return l.observe(t),function(){l.disconnect()}},[t]),[r,o]}:function(){return[i,a]}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(e,t,r){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,n)&&!u.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:c,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(e,t,r){e.exports=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/treemap/Example.stories.tsx":function(e,t,r){r.r(t),r.d(t,{Default:function(){return M},default:function(){return I}});var n,i,o,s=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=r("../../packages/measure/dist/index.mjs"),u=Object.defineProperty,l=(e,t)=>{for(var r in t)u(e,r,{get:t[r],enumerable:!0})},c={};l(c,{divideByAspectRatio:()=>k,divideHorizontally:()=>O,divideVertically:()=>_}),l({},{containsPoint:()=>x,fromRectangle:()=>g,getArea:()=>y,getAspectRatio:()=>p,getVertecies:()=>m,overlaps:()=>b,rotate:()=>w}),l({},{getArea:()=>d,getAspectRatio:()=>h,rotate:()=>f});var d=e=>e.width*e.height,h=e=>e.width/e.height,f=e=>({width:e.height,height:e.width}),y=e=>d(e.size),m=e=>{let{origin:t,size:r}=e,{width:n,height:i}=r,{x:o,y:s}=t;return[{x:o,y:s},{x:o+n,y:s},{x:o+n,y:s+i},{x:o,y:s+i}]},p=e=>h(e.size),g=e=>({origin:{x:0,y:0},size:e}),x=(e,t)=>{let{x:r,y:n}=t,{origin:{x:i,y:o},size:{width:s,height:a}}=e;return i<r&&r<i+s&&o<n&&n<o+a},b=(e,t)=>{for(let r of m(e))if(x(t,r))return!0;return!1},w=e=>({origin:{x:e.origin.y,y:e.origin.x},size:{width:e.size.height,height:e.size.width}}),v=e=>e.reduce((e,t)=>e+t,0),j=e=>v(e),_=(e,t)=>{let r=j(t),{width:n,height:i}=e,o=[],s=0;for(let e of t){let t=n*e/r;o.push({origin:{x:s,y:0},size:{width:t,height:i}}),s+=t}return o},O=(e,t)=>_(f(e),t).map(w),k=e=>{let t=e.tobeAspectRatio||1.78,r=e.direction||"left-top",{width:n,height:i}=e.size,o=z({width:n,height:i},e.weights,t);switch(r){case"right-top":return o.map(e=>({origin:{x:n-e.origin.x-e.size.width,y:e.origin.y},size:e.size}));case"left-bottom":return o.map(e=>({origin:{x:e.origin.x,y:i-e.origin.y-e.size.height},size:e.size}));case"right-bottom":return o.map(e=>({origin:{x:n-e.origin.x-e.size.width,y:i-e.origin.y-e.size.height},size:e.size}));default:return o}},z=(e,t,r=1.78)=>{let{width:n,height:i}=e,o=n*i/j(t),s=[],a={width:n,height:i,x:0,y:0},u=t.slice();for(;u.length>0;){let{width:e,height:t,x:n,y:i}=a,l=e>t,c=[];for(;u.length>0;){c.push(u.shift());let n=v(c)*o,i=l?n/t:e,s=l?t:n/e;if(Math.max(i,s*r)/Math.min(i,s*r)<c.length+1)break}let d=v(c),h=d*o,f=l?h/t:e,y=l?t:h/e,m=f>y,p=a.x,g=a.y;for(let e of c){let t=f*e/d,r=y*e/d;s.push({origin:{x:m?p:n,y:m?i:g},size:{width:m?t:f,height:m?y:r}}),m?p+=t:g+=r}a={width:l?e-f:e,height:l?t:t-y,x:l?n+f:n,y:l?i:i+y}}return s},S=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js");function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var P=function(e){var t=e.weightedItems,r=e.splitStrategy,n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o=[],s=!0,a=!1;try{for(i=i.call(e);!(s=(r=i.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){a=!0,n=e}finally{try{s||null==i.return||i.return()}finally{if(a)throw n}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,S.Z)(),2),i=n[0],o=n[1],a=function(e,t,r){return"vertical"===r?c.divideVertically(e,t):"horizontal"===r?c.divideHorizontally(e,t):c.divideByAspectRatio({size:e,weights:t,tobeAspectRatio:1.78})}({width:o.width,height:o.height},t.map(function(e){return e.weight}),void 0===r?"both":r);return(0,s.jsx)("div",{ref:i,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:a&&a.map(function(e,r){var n=e.size,i=n.width,o=n.height,a=e.origin,u=a.x,l=a.y;return(0,s.jsx)("div",{style:{width:"".concat(i,"px"),height:"".concat(o,"px"),position:"absolute",overflow:"hidden",left:"".concat(u,"px"),top:"".concat(l,"px")},children:t[r].element},r)})})};function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function R(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var E=[{weight:4,element:(0,s.jsx)(a.U,{})},{weight:3,element:(0,s.jsx)(a.U,{})},{weight:2,element:(0,s.jsx)(a.U,{})},{weight:1,element:(0,s.jsx)(a.U,{})}],I={title:"Base/Treemap/Example",component:function(){return(0,s.jsx)(P,{weightedItems:E,splitStrategy:"both"})}},M={args:{},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:800}}}};M.parameters=R(D({},M.parameters),{docs:R(D({},null===(n=M.parameters)||void 0===n?void 0:n.docs),{source:D({originalSource:"{\n  args: {},\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 800\n      }\n    }\n  }\n}"},null===(o=M.parameters)||void 0===o?void 0:null===(i=o.docs)||void 0===i?void 0:i.source)})})},"../../packages/measure/dist/index.mjs":function(e,t,r){r.d(t,{U:function(){return s}});var n=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js"),i=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var s=function(){var e=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o=[],s=!0,a=!1;try{for(i=i.call(e);!(s=(r=i.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){a=!0,n=e}finally{try{s||null==i.return||i.return()}finally{if(a)throw n}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,n.Z)(),2),t=e[0],r=e[1],s=r.width,a=r.height,u="".concat(s,"x").concat(a),l=Math.min(s,a)/u.length;return(0,i.jsx)("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:(0,i.jsxs)("svg",{width:s,height:a,children:[(0,i.jsx)("rect",{x:0,y:0,width:s,height:a,fill:"none",stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,i.jsx)("line",{x1:0,y1:0,x2:s/2,y2:a/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,i.jsx)("line",{x1:s,y1:0,x2:s/2,y2:a/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,i.jsx)("line",{x1:0,y1:a,x2:s/2,y2:a/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,i.jsx)("line",{x1:s,y1:a,x2:s/2,y2:a/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,i.jsx)("text",{x:s/2,y:a/2,textAnchor:"middle",dominantBaseline:"middle",fontSize:l,fontFamily:"monospace",children:u})]})})}}}]);