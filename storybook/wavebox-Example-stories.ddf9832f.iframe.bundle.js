"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[261],{"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js":(e,t,r)=>{r.d(t,{Z:()=>o});var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=function(e,t){var r=(0,n.useRef)(function(){});(0,n.useEffect)(function(){r.current=e}),(0,n.useEffect)(function(){if(null!==t){var e=setInterval(function(){return r.current()},t||0);return function(){return clearInterval(e)}}},[t])}},"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js":(e,t,r)=>{r.d(t,{Z:()=>l});var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=function(){},i="undefined"!=typeof window,a=i?n.useLayoutEffect:n.useEffect,s={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let l=i&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],r=e[1],o=(0,n.useState)(s),i=o[0],l=o[1],u=(0,n.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;l({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return a(function(){if(t)return u.observe(t),function(){u.disconnect()}},[t]),[r,i]}:function(){return[o,s]}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:s.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(e,t,r)=>{e.exports=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/wavebox/Example.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>b,default:()=>x});var n,o,i,a=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=r("../../packages/dekamoji/dist/index.mjs"),l=r("../../packages/measure/dist/index.mjs"),u=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(e){var t=e.children,r=e.maxWidth,n=e.maxHeight,o=e.minWidth,i=e.minHeight,s=e.widthCycle,l=e.heightCycle,d=m(u.useState(o),2),h=d[0],y=d[1],p=m(u.useState(i),2),x=p[0],b=p[1],g=m(u.useState(0),2),v=g[0],j=g[1];return(0,c.Z)(function(){j(v+1),y(f(o,r,s,v)),b(f(i,n,l,v))},10),(0,a.jsx)("div",{style:{width:h,height:x,overflow:"hidden",position:"relative"},children:t})};function f(e,t,r,n){var o=(t-e)/2;return Math.sin(n/r)*o+o+e}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}let x={title:"Base/WaveBox/Example",component:function(e){var t=e.minHeight,r=e.minWidth,n=e.maxWidth,o=e.maxHeight,i=e.heightCycle,u=e.widthCycle;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{minHeight:t,minWidth:r,maxWidth:n,maxHeight:o,heightCycle:i,widthCycle:u,children:(0,a.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:"red"}})}),(0,a.jsx)(h,{minHeight:t,minWidth:r,maxWidth:n,maxHeight:o,heightCycle:i,widthCycle:u,children:(0,a.jsx)(l.U,{})}),(0,a.jsx)(h,{minHeight:t,minWidth:r,maxWidth:n,maxHeight:o,heightCycle:i,widthCycle:u,children:(0,a.jsx)(s.p,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})},argTypes:{minHeight:{control:{type:"number"}},minWidth:{control:{type:"number"}},maxWidth:{control:{type:"number"}},maxHeight:{control:{type:"number"}},heightCycle:{control:{type:"number"}},widthCycle:{control:{type:"number"}}}};var b={args:{minWidth:100,maxWidth:200,minHeight:100,maxHeight:300,heightCycle:150,widthCycle:100},decorators:[function(e){return(0,a.jsx)("div",{style:{width:"100%",height:"100%",position:"absolute"},children:(0,a.jsx)(e,{})})}],parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:200}}}};b.parameters=p(y({},b.parameters),{docs:p(y({},null===(n=b.parameters)||void 0===n?void 0:n.docs),{source:y({originalSource:"{\n  args: {\n    minWidth: 100,\n    maxWidth: 200,\n    minHeight: 100,\n    maxHeight: 300,\n    heightCycle: 150,\n    widthCycle: 100\n  },\n  decorators: [Story => {\n    return <div style={{\n      width: '100%',\n      height: '100%',\n      position: 'absolute'\n    }}>\n          <Story />\n        </div>;\n  }],\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 200\n      }\n    }\n  }\n}"},null===(i=b.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})})},"../../packages/dekamoji/dist/index.mjs":(e,t,r)=>{r.d(t,{p:()=>l});var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js"),i=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n.memo(function(e){var t=e.text,r=s((0,o.Z)(),2),a=r[0],l=r[1],c=l.width,d=l.height,m=s(n.useState(0),2),h=m[0],f=m[1],y=(0,n.useRef)(null);return(0,n.useMemo)(function(){f(u(c,d,t))},[c,d,t]),(0,i.jsx)("div",{ref:a,style:{width:"100%",height:"100%",boxSizing:"border-box",overflow:"hidden"},children:(0,i.jsx)("div",{ref:y,style:{position:"absolute",width:"100%",height:"100%",fontSize:h+"px",textAlign:"center",margin:"0 auto",boxSizing:"border-box",whiteSpace:"pre-wrap"},children:t})})}),u=function(e,t,r){var n=document.createElement("div");n.style.position="absolute",n.style.width=e+"px",n.style.height=t+"px",n.style.boxSizing="border-box",n.style.zIndex="-1",n.style.overflowX="hidden",n.style.overflowY="hidden";var o=document.createElement("div");o.style.visibility="hidden",o.style.fontSize="0",o.style.textAlign="center",o.style.margin="0 auto",o.style.whiteSpace="pre-wrap",o.style.boxSizing="border-box",o.style.zIndex="-1",o.textContent=r,n.appendChild(o),document.body.appendChild(n);for(var i=Math.max(e,t),a=0;a<i;a+=1){o.style.fontSize=a+"px";var s=o.scrollHeight-t,l=o.scrollWidth-e;if(s>2||l>2)break}return document.body.removeChild(n),a-4}},"../../packages/measure/dist/index.mjs":(e,t,r)=>{r.d(t,{U:()=>a});var n=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js"),o=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var a=function(){var e=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,n.Z)(),2),t=e[0],r=e[1],a=r.width,s=r.height,l="".concat(a,"x").concat(s),u=Math.min(a,s)/l.length;return(0,o.jsx)("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:(0,o.jsxs)("svg",{width:a,height:s,children:[(0,o.jsx)("rect",{x:0,y:0,width:a,height:s,fill:"none",stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:0,y1:0,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:a,y1:0,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:0,y1:s,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:a,y1:s,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("text",{x:a/2,y:s/2,textAnchor:"middle",dominantBaseline:"middle",fontSize:u,fontFamily:"monospace",children:l})]})})}}}]);