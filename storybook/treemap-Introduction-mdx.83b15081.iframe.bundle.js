"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[117,521],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":function(e,t,r){r.d(t,{NF:function(){return i},Zo:function(){return u},ah:function(){return a},pC:function(){return o}});var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=n.createContext({});function i(e){return function(t){let r=a(t.components);return n.createElement(e,{...t,allComponents:r})}}function a(e){let t=n.useContext(o);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let s={};function u({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||s:a(e),n.createElement(o.Provider,{value:i},t)}},"./stories/treemap/Introduction.mdx":function(e,t,r){r.r(t),r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=r("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),i=r("../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.13_@types+react@17.0.68_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),a=r("./stories/treemap/Example.stories.tsx");function s(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"treemap",children:"Treemap"}),"\n","\n","\n",(0,n.jsx)(i.h_,{title:"Base/Treemap/Introduction"}),"\n",(0,n.jsx)(i.Xz,{of:a.Default}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.p,{children:"Each component is published as a separate package."}),"\n",(0,n.jsx)(t.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-treemap\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-treemap\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-treemap\n"})})]})}t.default=function(e={}){let{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js":function(e,t,r){r.d(t,{Z:function(){return u}});var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=function(){},i="undefined"!=typeof window,a=i?n.useLayoutEffect:n.useEffect,s={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},u=i&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],r=e[1],o=(0,n.useState)(s),i=o[0],u=o[1],c=(0,n.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;u({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return a(function(){if(t)return c.observe(t),function(){c.disconnect()}},[t]),[r,i]}:function(){return[o,s]}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(e,t,r){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(e,t,r){e.exports=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/treemap/Example.stories.tsx":function(e,t,r){r.r(t),r.d(t,{Default:function(){return j},default:function(){return x}});var n,o,i,a=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=r("../../packages/measure/dist/index.mjs"),u=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var l=function(e,t){var r=t.reduce(function(e,t){return e+t},0),n=e.width,o=e.height,i=[],a=0,s=!0,u=!1,c=void 0;try{for(var l,d=t[Symbol.iterator]();!(s=(l=d.next()).done);s=!0){var f=l.value,m=n*f/r;i.push({width:m,height:o,x:a,y:0}),a+=m}}catch(e){u=!0,c=e}finally{try{s||null==d.return||d.return()}finally{if(u)throw c}}return i},d=function(e,t){var r=t.reduce(function(e,t){return e+t},0),n=e.width,o=e.height,i=[],a=0,s=!0,u=!1,c=void 0;try{for(var l,d=t[Symbol.iterator]();!(s=(l=d.next()).done);s=!0){var f=l.value,m=o*f/r;i.push({width:n,height:m,x:0,y:a}),a+=m}}catch(e){u=!0,c=e}finally{try{s||null==d.return||d.return()}finally{if(u)throw c}}return i},f=function(e,t){var r=e.width,n=e.height;if(0===r||0===n||isNaN(r)||isNaN(n))return[];for(var o=t.reduce(function(e,t){return e+t},0),i=r*n/o,a=[],s={width:r,height:n,x:0,y:0},u=t.slice();u.length>0;)!function(){for(var e=s.width,t=s.height,r=s.x,n=s.y,o=e>t,c=[];u.length>0;){c.push(u.shift());var l=c.reduce(function(e,t){return e+t},0)*i,d=o?l/t:e,f=o?t:l/e;if(Math.max(d,1.78*f)/Math.min(d,1.78*f)<c.length+1)break}var m=c.reduce(function(e,t){return e+t},0),h=m*i,p=o?h/t:e,y=o?t:h/e,x=p>y,j=s.x,g=s.y,b=!0,v=!1,_=void 0;try{for(var w,k=c[Symbol.iterator]();!(b=(w=k.next()).done);b=!0){var O=w.value,S=p*O/m,E=y*O/m;a.push({width:x?S:p,height:x?y:E,x:x?j:r,y:x?n:g}),x?j+=S:g+=E}}catch(e){v=!0,_=e}finally{try{b||null==k.return||k.return()}finally{if(v)throw _}}s={width:o?e-p:e,height:o?t:t-y,x:o?r+p:r,y:o?n:n+y}}();return a},m=function(e){var t=e.weightedItems,r=e.splitStrategy,n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,u.Z)(),2),o=n[0],i=n[1],s=function(e,t,r){return"vertical"===r?l(e,t):"horizontal"===r?d(e,t):f(e,t)}({width:i.width,height:i.height},t.map(function(e){return e.weight}),void 0===r?"both":r);return(0,a.jsx)("div",{ref:o,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:s&&s.map(function(e,r){var n=e.width,o=e.height,i=e.x,s=e.y;return(0,a.jsx)("div",{style:{width:"".concat(n,"px"),height:"".concat(o,"px"),position:"absolute",overflow:"hidden",left:"".concat(i,"px"),top:"".concat(s,"px")},children:t[r].element},r)})})};function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var y=[{weight:4,element:(0,a.jsx)(s.U,{})},{weight:3,element:(0,a.jsx)(s.U,{})},{weight:2,element:(0,a.jsx)(s.U,{})},{weight:1,element:(0,a.jsx)(s.U,{})}],x={title:"Base/Treemap/Example",component:function(){return(0,a.jsx)(m,{weightedItems:y,splitStrategy:"both"})}},j={args:{},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:800}}}};j.parameters=p(h({},j.parameters),{docs:p(h({},null===(n=j.parameters)||void 0===n?void 0:n.docs),{source:h({originalSource:"{\n  args: {},\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 800\n      }\n    }\n  }\n}"},null===(i=j.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})})},"../../packages/measure/dist/index.mjs":function(e,t,r){r.d(t,{U:function(){return a}});var n=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js"),o=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var a=function(){var e=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,n.Z)(),2),t=e[0],r=e[1],a=r.width,s=r.height,u="".concat(a,"x").concat(s),c=Math.min(a,s)/u.length;return(0,o.jsx)("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:(0,o.jsxs)("svg",{width:a,height:s,children:[(0,o.jsx)("rect",{x:0,y:0,width:a,height:s,fill:"none",stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:0,y1:0,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:a,y1:0,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:0,y1:s,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:a,y1:s,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("text",{x:a/2,y:s/2,textAnchor:"middle",dominantBaseline:"middle",fontSize:c,fontFamily:"monospace",children:u})]})})}}}]);