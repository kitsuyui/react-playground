"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[905],{"./stories/textfield/TextFieldExample.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>f,__namedExportsOrder:()=>p,default:()=>s});var n,o,u,l=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=r("../../packages/textfield/dist/index.mjs");function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let s={title:"Base/TextField/TextField/Example",component:a.n,argTypes:{}};var f={args:{value:"",placeholder:"\uD83D\uDD0D something"},decorators:[function(e){return(0,l.jsx)(e,{})}]};f.parameters=i(c({},f.parameters),{docs:i(c({},null===(n=f.parameters)||void 0===n?void 0:n.docs),{source:c({originalSource:"{\n  args: {\n    value: '',\n    placeholder: '\uD83D\uDD0D something'\n  },\n  decorators: [Story => {\n    return <Story />;\n  }]\n}"},null===(u=f.parameters)||void 0===u?void 0:null===(o=u.docs)||void 0===o?void 0:o.source)})});let p=["Default"]},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,u={},i=null,s=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(s=t.ref),t)l.call(t,n)&&!c.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:s,props:u,_owner:a.current}}t.Fragment=u,t.jsx=i,t.jsxs=i},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(e,t,r)=>{e.exports=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/textfield/dist/index.mjs":(e,t,r)=>{r.d(t,{K:()=>i,n:()=>p});var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.useMemo)(function(){return t.every(function(e){return null==e})?null:function(e){t.forEach(function(t){t&&u(t,e)})}},t)},u=function(e,t){if(e){if("function"==typeof e){e(t);return}try{e.current=t}catch(r){throw Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}},l=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var u=[],l=!0,a=!1;try{for(o=o.call(e);!(l=(r=o.next()).done)&&(u.push(r.value),!t||u.length!==t);l=!0);}catch(e){a=!0,n=e}finally{try{l||null==o.return||o.return()}finally{if(a)throw n}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=(0,n.forwardRef)(function(e,t){var r,u=e.onInputChunk,a=e.onChangeInputting,i=c((0,n.useState)(null!==(r=e.value)&&void 0!==r?r:""),2),s=i[0],f=i[1],p=c((0,n.useState)(!1),2),y=p[0],d=p[1],b=(0,n.useRef)(null),m=o(b,t),O=Object.assign({},e);delete O.onInputChunk,delete O.onChangeInputting;var v=(0,n.useCallback)(function(){var e=b.current.value;f(e),y||null==u||u(e)},[y,u]),j=(0,n.useCallback)(function(){f(b.current.value),d(!0),null==a||a(!0)},[b,a]),g=(0,n.useCallback)(function(){var e=b.current.value;f(e),d(!1),null==a||a(!1),null==u||u(e)},[b,u,a]),h=(0,n.useCallback)(function(e){var t,r=b.current.value;f(r),d(!1),null==a||a(!1),null==u||u(r),null===(t=O.onBlur)||void 0===t||t.call(O,e)},[b,u,a,O]);return(0,l.jsx)("textarea",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}({},O),{ref:m,value:s,onCompositionStart:j,onCompositionUpdate:j,onCompositionEnd:g,onBlur:h,onChange:v}))});function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var u=[],l=!0,a=!1;try{for(o=o.call(e);!(l=(r=o.next()).done)&&(u.push(r.value),!t||u.length!==t);l=!0);}catch(e){a=!0,n=e}finally{try{l||null==o.return||o.return()}finally{if(a)throw n}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.displayName="TextArea";var p=(0,n.forwardRef)(function(e,t){var r,u=(0,n.useRef)(null),a=e.onInputChunk,c=e.onChangeInputting,i=f((0,n.useState)(null!==(r=e.value)&&void 0!==r?r:""),2),s=i[0],p=i[1],y=f((0,n.useState)(!1),2),d=y[0],b=y[1],m=o(u,t),O=Object.assign({},e);delete O.onInputChunk,delete O.onChangeInputting;var v=(0,n.useCallback)(function(){var e=u.current.value;p(e),d||null==a||a(e)},[d,a]),j=(0,n.useCallback)(function(){p(u.current.value),b(!0),null==c||c(!0)},[u,c]),g=(0,n.useCallback)(function(){var e=u.current.value;p(e),null==c||c(!1),null==a||a(e),b(!1)},[u,a,c]),h=(0,n.useCallback)(function(e){var t,r=u.current.value;p(r),b(!1),null==c||c(!1),null==a||a(r),null===(t=O.onBlur)||void 0===t||t.call(O,e)},[u,a,c,O]);return(0,l.jsx)("input",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}({},O),{type:"text",ref:m,value:s,onCompositionStart:j,onCompositionUpdate:j,onCompositionEnd:g,onBlur:h,onChange:v}))});p.displayName="TextField"}}]);