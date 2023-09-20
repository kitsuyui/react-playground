"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[160,261],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(e,t,n)=>{n.d(t,{NF:()=>i,Zo:()=>l,ah:()=>a,pC:()=>o});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=r.createContext({});function i(e){return function(t){let n=a(t.components);return r.createElement(e,{...t,allComponents:n})}}function a(e){let t=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let s={};function l({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:a(e),r.createElement(o.Provider,{value:i},t)}},"./stories/wavebox/Introduction.mdx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l}),n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=n("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),i=n("../../node_modules/.pnpm/@storybook+blocks@7.4.2_@types+react@17.0.65_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),a=n("./stories/wavebox/Example.stories.tsx");function s(e){let t=Object.assign({h1:"h1",pre:"pre",code:"code",h2:"h2",p:"p"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dekamoji",children:"Dekamoji"}),"\n","\n","\n",(0,r.jsx)(i.h_,{title:"Base/WaveBox/Introduction"}),"\n",(0,r.jsx)(i.Xz,{of:a.Default}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'<Dekamoji text="あいうえお" />\n'})}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"Each component is published as a separate package."}),"\n",(0,r.jsx)(t.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-dekamoji\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-dekamoji\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-dekamoji\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"})]})}let l=function(e={}){let{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js":(e,t,n)=>{n.d(t,{Z:()=>o});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=function(e,t){var n=(0,r.useRef)(function(){});(0,r.useEffect)(function(){n.current=e}),(0,r.useEffect)(function(){if(null!==t){var e=setInterval(function(){return n.current()},t||0);return function(){return clearInterval(e)}}},[t])}},"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js":(e,t,n)=>{n.d(t,{Z:()=>l});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=function(){},i="undefined"!=typeof window,a=i?r.useLayoutEffect:r.useEffect,s={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let l=i&&void 0!==window.ResizeObserver?function(){var e=(0,r.useState)(null),t=e[0],n=e[1],o=(0,r.useState)(s),i=o[0],l=o[1],c=(0,r.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;l({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return a(function(){if(t)return c.observe(t),function(){c.disconnect()}},[t]),[n,i]}:function(){return[o,s]}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(e,t,n)=>{e.exports=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/wavebox/Example.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>j,default:()=>x});var r,o,i,a=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=n("../../packages/dekamoji/dist/index.mjs"),l=n("../../packages/measure/dist/index.mjs"),c=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=n("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(e){var t=e.children,n=e.maxWidth,r=e.maxHeight,o=e.minWidth,i=e.minHeight,s=e.widthCycle,l=e.heightCycle,d=m(c.useState(o),2),h=d[0],f=d[1],y=m(c.useState(i),2),x=y[0],j=y[1],g=m(c.useState(0),2),b=g[0],v=g[1];return(0,u.Z)(function(){v(b+1),f(p(o,n,s,b)),j(p(i,r,l,b))},10),(0,a.jsx)("div",{style:{width:h,height:x,overflow:"hidden",position:"relative"},children:t})};function p(e,t,n,r){var o=(t-e)/2;return Math.sin(r/n)*o+o+e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function y(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}let x={title:"Base/WaveBox/Example",component:function(e){var t=e.minHeight,n=e.minWidth,r=e.maxWidth,o=e.maxHeight,i=e.heightCycle,c=e.widthCycle;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{minHeight:t,minWidth:n,maxWidth:r,maxHeight:o,heightCycle:i,widthCycle:c,children:(0,a.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:"red"}})}),(0,a.jsx)(h,{minHeight:t,minWidth:n,maxWidth:r,maxHeight:o,heightCycle:i,widthCycle:c,children:(0,a.jsx)(l.U,{})}),(0,a.jsx)(h,{minHeight:t,minWidth:n,maxWidth:r,maxHeight:o,heightCycle:i,widthCycle:c,children:(0,a.jsx)(s.p,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})},argTypes:{minHeight:{control:{type:"number"}},minWidth:{control:{type:"number"}},maxWidth:{control:{type:"number"}},maxHeight:{control:{type:"number"}},heightCycle:{control:{type:"number"}},widthCycle:{control:{type:"number"}}}};var j={args:{minWidth:100,maxWidth:200,minHeight:100,maxHeight:300,heightCycle:150,widthCycle:100},decorators:[function(e){return(0,a.jsx)("div",{style:{width:"100%",height:"100%",position:"absolute"},children:(0,a.jsx)(e,{})})}],parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:200}}}};j.parameters=y(f({},j.parameters),{docs:y(f({},null===(r=j.parameters)||void 0===r?void 0:r.docs),{source:f({originalSource:"{\n  args: {\n    minWidth: 100,\n    maxWidth: 200,\n    minHeight: 100,\n    maxHeight: 300,\n    heightCycle: 150,\n    widthCycle: 100\n  },\n  decorators: [Story => {\n    return <div style={{\n      width: '100%',\n      height: '100%',\n      position: 'absolute'\n    }}>\n          <Story />\n        </div>;\n  }],\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 200\n      }\n    }\n  }\n}"},null===(i=j.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})})},"../../packages/dekamoji/dist/index.mjs":(e,t,n)=>{n.d(t,{p:()=>l});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=n("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js"),i=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=function(e){var t=e.text,n=e.iterations,a=function(){if(j.current&&!(b>p)&&0!==t.length){var e=j.current,n=e.scrollHeight-m,r=e.scrollWidth-d,o=h/Math.pow(2,b+2);n>0||r>0?x(Math.max(y-o,0)):n<=0&&r<=0&&x(Math.min(y+o,h)),v(b+1)}},l=s((0,o.Z)(),2),c=l[0],u=l[1],d=u.width,m=u.height,h=Math.max(d,m),p=null!=n?n:Math.log2(h)+1|0,f=s((0,r.useState)(h/2),2),y=f[0],x=f[1],j=r.useRef(null),g=s((0,r.useState)(0),2),b=g[0],v=g[1];return(0,r.useEffect)(function(){v(0),a()},[t,d,m,y,h]),(0,i.jsx)("div",{ref:c,style:{width:"100%",height:"100%",boxSizing:"border-box",overflow:"hidden"},children:(0,i.jsx)("div",{ref:j,style:{position:"relative",width:"100%",height:"100%",fontSize:y+"px",textAlign:"center",margin:"0 auto",whiteSpace:"pre-wrap"},children:t})})}},"../../packages/measure/dist/index.mjs":(e,t,n)=>{n.d(t,{U:()=>a});var r=n("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js"),o=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var a=function(){var e=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,r.Z)(),2),t=e[0],n=e[1],a=n.width,s=n.height,l="".concat(a,"x").concat(s),c=Math.min(a,s)/l.length;return(0,o.jsx)("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:(0,o.jsxs)("svg",{width:a,height:s,children:[(0,o.jsx)("rect",{x:0,y:0,width:a,height:s,fill:"none",stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:0,y1:0,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:a,y1:0,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:0,y1:s,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:a,y1:s,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("text",{x:a/2,y:s/2,textAnchor:"middle",dominantBaseline:"middle",fontSize:c,fontFamily:"monospace",children:l})]})})}}}]);