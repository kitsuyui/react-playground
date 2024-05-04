"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[179],{"./stories/treemap/Direction.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>f,__namedExportsOrder:()=>d,default:()=>l});var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),o=r("../../packages/treemap/dist/index.mjs"),i=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var u=function(e){switch(e){case"right":return"→";case"down":return"↓";case"left":return"←";case"up":return"↑"}},a=function(){var e=(0,i.useContext)(o.g),t=e.nextDirection?u(e.nextDirection):"",r="1px dotted gray",c="2px solid black";return(0,n.jsxs)("div",{style:{width:"100%",height:"100%",borderLeft:e.continueDirection.left?r:c,borderTop:e.continueDirection.up?r:c,borderRight:e.continueDirection.right?r:c,borderBottom:e.continueDirection.down?r:c},children:["(x, y): (".concat(e.x,", ").concat(e.y,")"),(0,n.jsx)("br",{}),"W×H: ".concat(e.w,"×").concat(e.h),(0,n.jsx)("br",{}),"index: ".concat(e.index),(0,n.jsx)("br",{}),"previousDirection: ".concat(e.previousDirection),(0,n.jsx)("br",{}),"nextDirection: ".concat(e.nextDirection),(0,n.jsx)("br",{}),"direction: ".concat(t),(0,n.jsx)("br",{})]})},s=(function(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(Array(10)).map(function(e,t){return t+1}).map(function(e){return{weight:Math.pow(1.1,e),element:(0,n.jsx)(a,{})}});s.sort(function(e,t){return t.weight-e.weight});let l={title:"Base/Treemap/Direction",component:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{verticalFirst:!0,aspectRatio:16/9,boustrophedon:!1};return(0,n.jsx)(o.V,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,i;i=r[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i})}return e}({weightedItems:s},e))}};var f={args:{verticalFirst:!1,aspectRatio:16/9,boustrophedon:!0},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:800}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{\n  args: {\n    verticalFirst: false,\n    aspectRatio: 16 / 9,\n    boustrophedon: true\n  },\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 800\n      }\n    }\n  }\n}",...f.parameters?.docs?.source}}};let d=["Default"]},"../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1/node_modules/react-use/esm/useMeasure.js":(e,t,r)=>{r.d(t,{A:()=>a});var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=function(){},i="undefined"!=typeof window,c=i?n.useLayoutEffect:n.useEffect,u={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let a=i&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],r=e[1],o=(0,n.useState)(u),i=o[0],a=o[1],s=(0,n.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;a({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return c(function(){if(t)return s.observe(t),function(){s.disconnect()}},[t]),[r,i]}:function(){return[o,u]}},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,i={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:l,props:i,_owner:u.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,t,r)=>{e.exports=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/treemap/dist/index.mjs":(e,t,r)=>{r.d(t,{V:()=>p,g:()=>s});var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=r("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1/node_modules/react-use/esm/useMeasure.js"),i=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t,r,n,o,i,c){try{var u=e[i](c),a=u.value}catch(e){r(e);return}u.done?t(a):Promise.resolve(a).then(n,o)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],c=!0,u=!1;try{for(o=o.call(e);!(c=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){u=!0,n=e}finally{try{c||null==o.return||o.return()}finally{if(u)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=n.createContext({x:0,y:0,w:0,h:0,index:0,previousDirection:null,nextDirection:null,continueDirection:{right:!1,down:!1,left:!1,up:!1}}),l=function(e,t){return e.x+e.w<=t.x?"right":e.x>=t.x+t.w?"left":e.y+e.h<=t.y?"down":e.y>=t.y+t.h?"up":"right"},f=function(e){for(var t=e.map(function(e,t){var r,n;return r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,i;i=r[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i})}return e}({},e),n=n={index:t,previousDirection:null,nextDirection:null,continueDirection:{right:!1,down:!1,left:!1,up:!1}},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r}),r=0;r<t.length;r++){var n=t[r],o=t[r+1];o&&(n.nextDirection=l(n,o),n.continueDirection[n.nextDirection]=!0,o.previousDirection=l(o,n),o.continueDirection[o.previousDirection]=!0)}return t},d=16/9,p=function(e){var t,c,s,l=a((0,o.A)(),2),p=l[0],h=l[1],b=h.width,v=h.height,g=e.weightedItems,x=null===(t=e.verticalFirst)||void 0===t||t,w=null!==(c=e.aspectRatio)&&void 0!==c?c:d,j=null!==(s=e.boustrophedon)&&void 0!==s&&s,_=a((0,n.useState)([]),2),O=_[0],D=_[1],S=a((0,n.useState)(null),2),k=S[0],P=S[1];(0,n.useEffect)(function(){var e;(e=function(){return function(e,t){var r,n,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,function(e){switch(e.label){case 0:if(k)return[2];return[4,r.e(507).then(r.bind(r,"../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.3/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing.js"))];case 1:return P(e.sent()),[2]}})},function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function c(e){u(i,n,o,c,a,"next",e)}function a(e){u(i,n,o,c,a,"throw",e)}c(void 0)})})()}),(0,n.useEffect)(function(){if(!k){D([]);return}var e=new Float32Array(g.map(function(e){return e.weight}));D(k.dividing({x:0,y:0,w:b,h:v},e,w,x,j).map(function(e){return{x:0|e.x,y:0|e.y,w:0|e.w,h:0|e.h}}))},[b,v,g,w,x,j,k]);var A=y(g,f(O)).map(function(e){var t=a(e,2),r=t[0],n=t[1];return{element:r.element,rect:n}});return(0,i.jsx)("div",{ref:p,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:m({items:A})})},m=function(e){var t=e.items;return(0,i.jsx)(i.Fragment,{children:t.map(function(e){var t=e.element,r=e.rect,n=r.x,o=r.y,c=r.w,u=r.h,a=r.index;return(0,i.jsx)(s.Provider,{value:r,children:(0,i.jsx)("div",{style:{position:"absolute",overflow:"hidden",width:"".concat(c,"px"),height:"".concat(u,"px"),left:"".concat(n,"px"),top:"".concat(o,"px")},children:t},a)},a)})})},y=function(e,t){return Array.from(Array(Math.min(t.length,e.length)),function(r,n){return[e[n],t[n]]})}}}]);