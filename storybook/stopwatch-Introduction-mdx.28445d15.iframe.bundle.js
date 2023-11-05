"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[754,777],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(e,t,n)=>{n.d(t,{NF:()=>s,Zo:()=>u,ah:()=>c,pC:()=>o});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=r.createContext({});function s(e){return function(t){let n=c(t.components);return r.createElement(e,{...t,allComponents:n})}}function c(e){let t=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function u({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:c(e),r.createElement(o.Provider,{value:s},t)}},"./stories/stopwatch/Introduction.mdx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>u}),n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=n("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),s=n("../../node_modules/.pnpm/@storybook+blocks@7.5.2_@types+react-dom@18.2.14_@types+react@17.0.69_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),c=n("./stories/stopwatch/Example.stories.tsx");function a(e){let t=Object.assign({h1:"h1",pre:"pre",code:"code",h2:"h2",p:"p",ol:"ol",li:"li"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"stopwatch",children:"Stopwatch"}),"\n","\n","\n",(0,r.jsx)(s.h_,{title:"Base/Stopwatch/Introduction"}),"\n",(0,r.jsx)(s.Xz,{of:c.Default}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import {\n  StopwatchContainer,\n  MinimalStopwatch,\n  StopwatchContext,\n  StopwatchProps,\n} from '@kitsuyui/react-stopwatch'\n\nconst Stopwatch = () => {\n  return (\n    <StopwatchContainer>\n      <StopwatchContext.Consumer>\n        {(props: StopwatchProps) => <MinimalStopwatch {...props} />}\n      </StopwatchContext.Consumer>\n    </StopwatchContainer>\n  )\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"Each component is published as a separate package."}),"\n",(0,r.jsx)(t.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-stopwatch\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-stopwatch\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-stopwatch\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.p,{children:"Stopwatch components consists of two parts:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"The surface of the clock ()"}),"\n",(0,r.jsx)(t.li,{children:"The state of the clock ()"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"If you want to modify the appearance of the clock, you can use the surface of the clock.\nIf you want to change the state of the clock, you can use the state of the clock."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx"})})]})}let u=function(e={}){let{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js":(e,t,n)=>{n.d(t,{Z:()=>o});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=function(e,t){var n=(0,r.useRef)(function(){});(0,r.useEffect)(function(){n.current=e}),(0,r.useEffect)(function(){if(null!==t){var e=setInterval(function(){return n.current()},t||0);return function(){return clearInterval(e)}}},[t])}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,s={},i=null,l=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!u.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:i,ref:l,props:s,_owner:a.current}}t.Fragment=s,t.jsx=i,t.jsxs=i},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(e,t,n)=>{e.exports=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/stopwatch/Example.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>d,default:()=>l});var r,o,s,c=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=n("../../packages/stopwatch/dist/index.mjs");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let l={title:"Base/Stopwatch/Example",component:function(){return(0,c.jsx)(a.fT,{children:(0,c.jsx)(a.KH.Consumer,{children:function(e){return(0,c.jsx)(a.Sq,u({},e))}})})}};var d={args:{onComplete:function(){}}};d.parameters=i(u({},d.parameters),{docs:i(u({},null===(r=d.parameters)||void 0===r?void 0:r.docs),{source:u({originalSource:"{\n  args: {\n    onComplete: () => {\n      return;\n    }\n  }\n}"},null===(s=d.parameters)||void 0===s?void 0:null===(o=s.docs)||void 0===o?void 0:o.source)})})},"../../packages/stopwatch/dist/index.mjs":(e,t,n)=>{n.d(t,{Sq:()=>i,fT:()=>h,KH:()=>f,P6:()=>o});var r=Object.defineProperty,o={};!function(e,t){for(var n in t)r(e,n,{get:t[n],enumerable:!0})}(o,{zeroPad2:function(){return c},zeroPad3:function(){return a}});var s=function(e,t){return String(e).padStart(t,"0")},c=function(e){return s(e,2)},a=function(e){return s(e,3)},u=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=function(e){var t=e.elapsedTime,n=e.running,r=e.toggle,o=e.reset;return(0,u.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,u.jsxs)("form",{children:[(0,u.jsx)("span",{children:function(e){return"".concat(c(Math.floor(e/60)),":").concat(c(e%60|0),".").concat(a(e%1*1e3|0))}(t)}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),o()},children:"Reset"}),(0,u.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),r()},children:n?"Stop":"Start"})]})})},l=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=n("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var s=[],c=!0,a=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(s.push(n.value),!t||s.length!==t);c=!0);}catch(e){a=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(a)throw r}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=l.createContext({elapsedTime:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){}}),h=function(e){var t,n,r,o=e.children,s=function(e){},c=null!==(t=e.onStart)&&void 0!==t?t:s,a=null!==(n=e.onStop)&&void 0!==n?n:s,i=null!==(r=e.onReset)&&void 0!==r?r:s,p=m((0,l.useState)(!1),2),h=p[0],j=p[1],x=m((0,l.useState)(0),2),y=x[0],_=x[1],b=m((0,l.useState)(0),2),v=b[0],g=b[1],w=m((0,l.useState)(new Date),2),S=w[0],O=w[1],k=e.refreshInterval||10;(0,d.Z)(function(){h&&C()},k);var C=function(){_(function(e){return function(e,t){return(t.getTime()-e.getTime())/1e3}(e,new Date)}(S))},P=function(){g(v+y),_(0)},E=function(){h||(c(new CustomEvent("start",{})),O(new Date),j(!0))},I=function(){h&&(a(new CustomEvent("stop",{})),C(),j(!1),P())};return(0,u.jsx)(f.Provider,{value:{elapsedTime:y+v,running:h,toggle:function(){h?I():E()},reset:function(){h&&I(),i(new CustomEvent("reset",{})),_(0),g(0)},start:E,stop:I},children:o})}}}]);