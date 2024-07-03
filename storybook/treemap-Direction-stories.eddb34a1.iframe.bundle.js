"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[179,2543,578],{"./stories/treemap/Direction.stories.tsx":(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{Default:()=>d,__namedExportsOrder:()=>p,default:()=>m});var o=r("../../packages/treemap/dist/index.mjs"),i=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e([o]);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}o=(a.then?(await a)():a)[0];var u=function(e){switch(e){case"right":return"→";case"down":return"↓";case"left":return"←";case"up":return"↑"}},s=function(){var e=(0,i.useContext)(o.g),t=e.nextDirection?u(e.nextDirection):"",r="1px dotted gray",n="2px solid black";return i.createElement("div",{style:{width:"100%",height:"100%",borderLeft:e.continueDirection.left?r:n,borderTop:e.continueDirection.up?r:n,borderRight:e.continueDirection.right?r:n,borderBottom:e.continueDirection.down?r:n}},"(x, y): (".concat(e.x,", ").concat(e.y,")"),i.createElement("br",null),"W×H: ".concat(e.w,"×").concat(e.h),i.createElement("br",null),"index: ".concat(e.index),i.createElement("br",null),"previousDirection: ".concat(e.previousDirection),i.createElement("br",null),"nextDirection: ".concat(e.nextDirection),i.createElement("br",null),"direction: ".concat(t),i.createElement("br",null))},l=(function(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(Array(10)).map(function(e,t){return t+1}).map(function(e){return{weight:Math.pow(1.1,e),element:i.createElement(s,null)}});l.sort(function(e,t){return t.weight-e.weight});let m={title:"Base/Treemap/Direction",component:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{verticalFirst:!0,aspectRatio:16/9,boustrophedon:!1};return i.createElement(o.V,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,i;i=r[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i})}return e}({weightedItems:l},e))}};var d={args:{verticalFirst:!1,aspectRatio:16/9,boustrophedon:!0},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:800}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {\n    verticalFirst: false,\n    aspectRatio: 16 / 9,\n    boustrophedon: true\n  },\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 800\n      }\n    }\n  }\n}",...d.parameters?.docs?.source}}};let p=["Default"];n()}catch(e){n(e)}})},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,i={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:l,props:i,_owner:c.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,t,r)=>{e.exports=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);