"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[578],{"./stories/wavebox/Example.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>h,__namedExportsOrder:()=>f,default:()=>m});var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),o=r("../../packages/dekamoji/dist/index.mjs"),i=r("../../packages/measure/dist/index.mjs"),a=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=r("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1/node_modules/react-use/esm/useInterval.js");function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(e){var t=e.children,r=e.maxWidth,o=e.maxHeight,i=e.minWidth,l=e.minHeight,d=e.widthCycle,m=e.heightCycle,h=u(a.useState(i),2),f=h[0],y=h[1],p=u(a.useState(l),2),x=p[0],g=p[1],v=u(a.useState(0),2),b=v[0],_=v[1];return(0,s.A)(function(){_(b+1),y(c(i,r,d,b)),g(c(l,o,m,b))},10),(0,n.jsx)("div",{style:{width:f,height:x,overflow:"hidden",position:"relative"},children:t})};function c(e,t,r,n){var o=(t-e)/2;return Math.sin(n/r)*o+o+e}let m={title:"Base/WaveBox/Example",component:function(e){var t=e.minHeight,r=e.minWidth,a=e.maxWidth,s=e.maxHeight,l=e.heightCycle,u=e.widthCycle;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{minHeight:t,minWidth:r,maxWidth:a,maxHeight:s,heightCycle:l,widthCycle:u,children:(0,n.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:"red"}})}),(0,n.jsx)(d,{minHeight:t,minWidth:r,maxWidth:a,maxHeight:s,heightCycle:l,widthCycle:u,children:(0,n.jsx)(i.t,{})}),(0,n.jsx)(d,{minHeight:t,minWidth:r,maxWidth:a,maxHeight:s,heightCycle:l,widthCycle:u,children:(0,n.jsx)(o.B,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})},argTypes:{minHeight:{control:{type:"number"}},minWidth:{control:{type:"number"}},maxWidth:{control:{type:"number"}},maxHeight:{control:{type:"number"}},heightCycle:{control:{type:"number"}},widthCycle:{control:{type:"number"}}}};var h={args:{minWidth:100,maxWidth:200,minHeight:100,maxHeight:300,heightCycle:150,widthCycle:100},decorators:[function(e){return(0,n.jsx)("div",{style:{width:"100%",height:"100%",position:"absolute"},children:(0,n.jsx)(e,{})})}],parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:200}}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{\n  args: {\n    minWidth: 100,\n    maxWidth: 200,\n    minHeight: 100,\n    maxHeight: 300,\n    heightCycle: 150,\n    widthCycle: 100\n  },\n  decorators: [Story => {\n    return <div style={{\n      width: '100%',\n      height: '100%',\n      position: 'absolute'\n    }}>\n          <Story />\n        </div>;\n  }],\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 200\n      }\n    }\n  }\n}",...h.parameters?.docs?.source}}};let f=["Default"]},"../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1/node_modules/react-use/esm/useInterval.js":(e,t,r)=>{r.d(t,{A:()=>o});var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let o=function(e,t){var r=(0,n.useRef)(function(){});(0,n.useEffect)(function(){r.current=e}),(0,n.useEffect)(function(){if(null!==t){var e=setInterval(function(){return r.current()},t||0);return function(){return clearInterval(e)}}},[t])}},"../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1/node_modules/react-use/esm/useMeasure.js":(e,t,r)=>{r.d(t,{A:()=>l});var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=function(){},i="undefined"!=typeof window,a=i?n.useLayoutEffect:n.useEffect,s={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let l=i&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],r=e[1],o=(0,n.useState)(s),i=o[0],l=o[1],u=(0,n.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;l({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return a(function(){if(t)return u.observe(t),function(){u.disconnect()}},[t]),[r,i]}:function(){return[o,s]}},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,d=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:d,props:i,_owner:s.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,t,r)=>{e.exports=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/dekamoji/dist/index.mjs":(e,t,r)=>{r.d(t,{B:()=>l});var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=r("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1/node_modules/react-use/esm/useMeasure.js"),i=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n.memo(function(e){var t=e.text,r=s((0,o.A)(),2),a=r[0],l=r[1],c=l.width,m=l.height,h=s(n.useState(0),2),f=h[0],y=h[1],p=(0,n.useRef)(null);return(0,n.useMemo)(function(){var e,r=p.current;r&&(e=u(r)),y(d(c,m,t,e))},[c,m,t]),(0,i.jsx)("div",{ref:a,style:{width:"100%",height:"100%",boxSizing:"border-box",overflow:"hidden"},children:(0,i.jsx)("div",{ref:p,style:{position:"absolute",width:"100%",height:"100%",fontSize:"".concat(f,"px"),textAlign:"center",margin:"0 auto",boxSizing:"border-box",whiteSpace:"pre-wrap"},children:t})})}),u=function(e){return window.getComputedStyle(e).fontFamily},d=function(e,t,r,n){var o=document.createElement("div");o.style.position="absolute",o.style.width="".concat(e,"px"),o.style.height="".concat(t,"px"),o.style.boxSizing="border-box",o.style.zIndex="-1",o.style.overflowX="hidden",o.style.overflowY="hidden";var i=document.createElement("div");i.style.visibility="hidden",i.style.fontSize="0",i.style.textAlign="center",i.style.margin="0 auto",i.style.whiteSpace="pre-wrap",i.style.boxSizing="border-box",i.style.zIndex="-1",n&&(i.style.fontFamily=n),i.textContent=r,o.appendChild(i),document.body.appendChild(o);for(var a=Math.max(e,t),s=0;s<a;s+=1){i.style.fontSize="".concat(s,"px");var l=i.scrollHeight-t,u=i.scrollWidth-e;if(l>2||u>2)break}return document.body.removeChild(o),s-4}},"../../packages/measure/dist/index.mjs":(e,t,r)=>{r.d(t,{t:()=>m});var n=function(e,t){return{x:e,y:t}},o=function(e,t,r,o){return{start:n(e,t),end:n(r,o)}},i=function(e){var t=e.width,r=e.height,n=t/2,i=r/2;return[o(0,0,n,i),o(t,0,n,i),o(0,r,n,i),o(t,r,n,i)]},a=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=function(e){var t=e.width,r=e.height,n=e.styles,o="".concat(t,"x").concat(r),l=Math.min(t,r)/o.length,u=[t/2,r/2],d=u[0],c=u[1],m=n.stroke,h=(0,a.useMemo)(function(){return i({width:t,height:r})},[t,r]);return(0,s.jsxs)("svg",{width:t,height:r,children:[(0,s.jsx)("title",{children:o}),(0,s.jsx)("rect",{x:0,y:0,width:t,height:r,fill:"none",stroke:m.color,strokeWidth:m.width,strokeDasharray:m.dasharray}),h.map(function(e){return(0,s.jsx)("line",{x1:e.start.x,y1:e.start.y,x2:e.end.x,y2:e.end.y,stroke:m.color,strokeWidth:m.width,strokeDasharray:m.dasharray})}),(0,s.jsx)("text",{x:d,y:c,textAnchor:"middle",dominantBaseline:"middle",fontSize:l,fontFamily:n.text.fontFamily,children:o})]})},u=r("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1/node_modules/react-use/esm/useMeasure.js");function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var c=(0,a.createContext)({stroke:{color:"black",width:1,dasharray:2},text:{fontFamily:"monospace"}}),m=function(){var e,t=function(e){if(Array.isArray(e))return e}(e=(0,u.A)())||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),2!==i.length);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}}(e,2)||function(e,t){if(e){if("string"==typeof e)return d(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,2)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=t[0],n=t[1],o=n.width,i=n.height,m=a.useContext(c);return(0,s.jsx)("div",{ref:r,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:(0,s.jsx)(l,{width:o,height:i,styles:m})})}}}]);