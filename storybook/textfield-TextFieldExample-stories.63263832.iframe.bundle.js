"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[905],{"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(e,t,r){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,u={},i=null,s=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(s=t.ref),t)c.call(t,n)&&!l.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:s,props:u,_owner:a.current}}t.Fragment=u,t.jsx=i,t.jsxs=i},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(e,t,r){e.exports=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/textfield/TextFieldExample.stories.tsx":function(e,t,r){r.r(t),r.d(t,{Default:function(){return f}});var n,o,u,c=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=r("../../packages/textfield/dist/index.mjs");function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var s={title:"Base/TextField/TextField/Example",component:a.n,argTypes:{}};t.default=s;var f={args:{value:"",placeholder:"\uD83D\uDD0D something"},decorators:[function(e){return(0,c.jsx)(e,{})}]};f.parameters=i(l({},f.parameters),{docs:i(l({},null===(n=f.parameters)||void 0===n?void 0:n.docs),{source:l({originalSource:"{\n  args: {\n    value: '',\n    placeholder: '\uD83D\uDD0D something'\n  },\n  decorators: [Story => {\n    return <Story />;\n  }]\n}"},null===(u=f.parameters)||void 0===u?void 0:null===(o=u.docs)||void 0===o?void 0:o.source)})})},"../../packages/textfield/dist/index.mjs":function(e,t,r){r.d(t,{K:function(){return i},n:function(){return p}});var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.useMemo)(function(){return t.every(function(e){return null==e})?null:function(e){t.forEach(function(t){t&&u(t,e)})}},t)},u=function(e,t){if(e){if("function"==typeof e){e(t);return}try{e.current=t}catch(r){throw Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}},c=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var u=[],c=!0,a=!1;try{for(o=o.call(e);!(c=(r=o.next()).done)&&(u.push(r.value),!t||u.length!==t);c=!0);}catch(e){a=!0,n=e}finally{try{c||null==o.return||o.return()}finally{if(a)throw n}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=(0,n.forwardRef)(function(e,t){var r,u,a=e.onInputChunk,i=null!==(r=e.value)&&void 0!==r?r:"",s=l((0,n.useState)(null!==(u=e.value)&&void 0!==u?u:""),2),f=s[0],p=s[1],y=l((0,n.useState)(!1),2),d=y[0],b=y[1],m=(0,n.useRef)(null),O=o(m,t),v=Object.assign({},e);delete v.onInputChunk,(0,n.useEffect)(function(){d||p(i)},[i,d]);var j=(0,n.useCallback)(function(){var e=m.current.value;p(e),d||null==a||a(e)},[d,a]),g=(0,n.useCallback)(function(){p(m.current.value),b(!0)},[m]),h=(0,n.useCallback)(function(){var e=m.current.value;p(e),b(!1),null==a||a(e)},[m,a]);return(0,c.jsx)("textarea",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}({},v),{ref:O,value:f,onCompositionStart:g,onCompositionUpdate:g,onCompositionEnd:h,onBlur:function(e){var t;h(),null===(t=v.onBlur)||void 0===t||t.call(v,e)},onChange:j}))});function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var u=[],c=!0,a=!1;try{for(o=o.call(e);!(c=(r=o.next()).done)&&(u.push(r.value),!t||u.length!==t);c=!0);}catch(e){a=!0,n=e}finally{try{c||null==o.return||o.return()}finally{if(a)throw n}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.displayName="TextArea";var p=(0,n.forwardRef)(function(e,t){var r,u,a=(0,n.useRef)(null),l=e.onInputChunk,i=null!==(r=e.value)&&void 0!==r?r:"",s=f((0,n.useState)(null!==(u=e.value)&&void 0!==u?u:""),2),p=s[0],y=s[1],d=f((0,n.useState)(!1),2),b=d[0],m=d[1],O=o(a,t),v=Object.assign({},e);delete v.onInputChunk,(0,n.useEffect)(function(){b||y(i)},[i,b]);var j=(0,n.useCallback)(function(){var e=a.current.value;y(e),b||null==l||l(e)},[b,l]),g=(0,n.useCallback)(function(){y(a.current.value),m(!0)},[a]),h=(0,n.useCallback)(function(){var e=a.current.value;y(e),m(!1),null==l||l(e)},[a,l]);return(0,c.jsx)("input",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}({},v),{type:"text",ref:O,value:p,onCompositionStart:g,onCompositionUpdate:g,onCompositionEnd:h,onBlur:function(e){var t;h(),null===(t=v.onBlur)||void 0===t||t.call(v,e)},onChange:j}))});p.displayName="TextField"}}]);