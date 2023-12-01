"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[117,521],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(e,t,r)=>{r.d(t,{NF:()=>i,Zo:()=>u,ah:()=>a,pC:()=>o});var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=n.createContext({});function i(e){return function(t){let r=a(t.components);return n.createElement(e,{...t,allComponents:r})}}function a(e){let t=n.useContext(o);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let s={};function u({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||s:a(e),n.createElement(o.Provider,{value:i},t)}},"./stories/treemap/Introduction.mdx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>u}),r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=r("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),i=r("../../node_modules/.pnpm/@storybook+blocks@7.5.3_@types+react-dom@18.2.17_@types+react@18.2.38_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),a=r("./stories/treemap/Example.stories.tsx");function s(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"treemap",children:"Treemap"}),"\n","\n","\n",(0,n.jsx)(i.h_,{title:"Base/Treemap/Introduction"}),"\n",(0,n.jsx)(i.Xz,{of:a.Default}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.p,{children:"Each component is published as a separate package."}),"\n",(0,n.jsx)(t.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-treemap\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-treemap\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-treemap\n"})})]})}let u=function(e={}){let{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},"../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js":(e,t,r)=>{r.d(t,{Z:()=>u});var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=function(){},i="undefined"!=typeof window,a=i?n.useLayoutEffect:n.useEffect,s={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let u=i&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],r=e[1],o=(0,n.useState)(s),i=o[0],u=o[1],c=(0,n.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;u({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return a(function(){if(t)return c.observe(t),function(){c.disconnect()}},[t]),[r,i]}:function(){return[o,s]}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(e,t,r)=>{e.exports=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/treemap/Example.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>g,default:()=>v});var n,o,i,a=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=r("../../packages/measure/dist/index.mjs"),u=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js");function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,o)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(e){var t,n,o,i=f((0,c.Z)(),2),s=i[0],l=i[1],p=l.width,y=l.height,b=e.weightedItems,x=null===(t=e.verticalFirst)||void 0===t||t,j=null!==(n=e.aspectRatio)&&void 0!==n?n:16/9,v=null!==(o=e.boustrophedon)&&void 0!==o&&o,g=f((0,u.useState)([]),2),_=g[0],w=g[1],k=f((0,u.useState)(null),2),O=k[0],S=k[1];(0,u.useEffect)(function(){(function(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){d(i,n,o,a,s,"next",e)}function s(e){d(i,n,o,a,s,"throw",e)}a(void 0)})}})(function(){return function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,function(e){switch(e.label){case 0:if(O)return[2];return[4,r.e(290).then(r.bind(r,"../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.3/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing.js"))];case 1:return S(e.sent()),[2]}})})()}),(0,u.useEffect)(function(){if(!O){w([]);return}var e=new Float32Array(b.map(function(e){return e.weight}));w(O.dividing({x:0,y:0,w:p,h:y},e,j,x,v).map(function(e){return{x:0|e.x,y:0|e.y,w:0|e.w,h:0|e.h}}))},[p,y,b,j,x,v,O]);var A=h(b,_).map(function(e){var t=f(e,2),r=t[0],n=t[1];return{element:r.element,rect:n}});return(0,a.jsx)("div",{ref:s,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:m({items:A})})},m=function(e){var t=e.items;return(0,a.jsx)(a.Fragment,{children:t.map(function(e,t){var r=e.element,n=e.rect,o=n.x,i=n.y,s=n.w,u=n.h;return(0,a.jsx)("div",{style:{position:"absolute",overflow:"hidden",width:"".concat(s,"px"),height:"".concat(u,"px"),left:"".concat(o,"px"),top:"".concat(i,"px")},children:r},t)})})},h=function(e,t){return Array.from(Array(Math.min(t.length,e.length)),function(r,n){return[e[n],t[n]]})};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function x(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var j=(function(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(Array(10)).map(function(e,t){return t+1}).map(function(e){return{weight:Math.pow(1.1,e),element:(0,a.jsx)(s.U,{})}});j.sort(function(e,t){return t.weight-e.weight});let v={title:"Base/Treemap/Example",component:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{verticalFirst:!0,aspectRatio:16/9,boustrophedon:!1};return(0,a.jsx)(p,b({weightedItems:j},e))}};var g={args:{verticalFirst:!0,aspectRatio:16/9,boustrophedon:!1},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:800}}}};g.parameters=x(b({},g.parameters),{docs:x(b({},null===(n=g.parameters)||void 0===n?void 0:n.docs),{source:b({originalSource:"{\n  args: {\n    verticalFirst: true,\n    aspectRatio: 16 / 9,\n    boustrophedon: false\n  },\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 800\n      }\n    }\n  }\n}"},null===(i=g.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})})},"../../packages/measure/dist/index.mjs":(e,t,r)=>{r.d(t,{U:()=>a});var n=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useMeasure.js"),o=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var a=function(){var e=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,n.Z)(),2),t=e[0],r=e[1],a=r.width,s=r.height,u="".concat(a,"x").concat(s),c=Math.min(a,s)/u.length;return(0,o.jsx)("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:(0,o.jsxs)("svg",{width:a,height:s,children:[(0,o.jsx)("rect",{x:0,y:0,width:a,height:s,fill:"none",stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:0,y1:0,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:a,y1:0,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:0,y1:s,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("line",{x1:a,y1:s,x2:a/2,y2:s/2,stroke:"black",strokeWidth:1,strokeDasharray:2}),(0,o.jsx)("text",{x:a/2,y:s/2,textAnchor:"middle",dominantBaseline:"middle",fontSize:c,fontFamily:"monospace",children:u})]})})}}}]);