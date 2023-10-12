"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[395,839,905],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(e,t,n)=>{n.d(t,{NF:()=>c,Zo:()=>a,ah:()=>i,pC:()=>o});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=r.createContext({});function c(e){return function(t){let n=i(t.components);return r.createElement(e,{...t,allComponents:n})}}function i(e){let t=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let s={};function a({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:c},t)}},"./stories/textfield/Introduction.mdx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l}),n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=n("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),c=n("../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react@17.0.67_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),i=n("./stories/textfield/TextAreaExample.stories.tsx"),s=n("./stories/textfield/TextFieldExample.stories.tsx");function a(e){let t=Object.assign({h1:"h1",pre:"pre",code:"code",h2:"h2",p:"p"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"textarea-and-textfield",children:"TextArea and TextField"}),"\n","\n","\n",(0,r.jsx)(c.h_,{title:"Base/TextField/Introduction"}),"\n",(0,r.jsx)(c.Xz,{of:s.Default}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'<TextField value="あいうえお" placeholder="🔍 something">\n'})}),"\n",(0,r.jsx)(c.Xz,{of:i.Default}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'<TextArea value="あいうえお"></TextArea>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"concept",children:"Concept"}),"\n",(0,r.jsx)(t.p,{children:"This package provides a text field component for React."}),"\n",(0,r.jsxs)(t.p,{children:["It is very pure and similar with the default ",(0,r.jsx)(t.code,{children:'<input type="text">'})," element and ",(0,r.jsx)(t.code,{children:"<textarea>"})," element."]}),"\n",(0,r.jsxs)(t.p,{children:["So you can pass the same props as those elements. (i.e. ",(0,r.jsx)(t.code,{children:"disabled"}),", ",(0,r.jsx)(t.code,{children:"placeholder"}),", ",(0,r.jsx)(t.code,{children:"maxLength"}),", ",(0,r.jsx)(t.code,{children:"minLength"}),", ",(0,r.jsx)(t.code,{children:"required"}),", ",(0,r.jsx)(t.code,{children:"pattern"}),", ",(0,r.jsx)(t.code,{children:"readOnly"}),", ",(0,r.jsx)(t.code,{children:"autoComplete"}),", ",(0,r.jsx)(t.code,{children:"autoFocus"}),", ",(0,r.jsx)(t.code,{children:"name"}),", ",(0,r.jsx)(t.code,{children:"id"}),", ",(0,r.jsx)(t.code,{children:"className"}),", ",(0,r.jsx)(t.code,{children:"style"}),", ..., etc.)\nThis means, you can use this component as a drop-in replacement for those elements."]}),"\n",(0,r.jsxs)(t.p,{children:["The big difference is that this component how to handle the events.\nIn default browser elements (",(0,r.jsx)(t.code,{children:'<input type="text">'})," and ",(0,r.jsx)(t.code,{children:"<textarea>"}),"), the ",(0,r.jsx)(t.code,{children:"onChange"})," event is fired in every key press.\nBut when you are using IME or something special input method, the ",(0,r.jsx)(t.code,{children:"onChange"})," event is fired in every key press even if the input is not completed or text conversion is not completed. (e.g. Japanese IME, Chinese IME, espanso, etc.)\nThis component calls the ",(0,r.jsx)(t.code,{children:"onInputChunk"})," handler ",(0,r.jsx)(t.code,{children:"(text: string) => void"})," only when the input is completed or text conversion is completed. (Internally, it uses ",(0,r.jsx)(t.code,{children:"CompositionEvent"})," to detect the completion of input or text conversion)"]}),"\n",(0,r.jsx)(t.p,{children:"Warning: This component has no effect to prevent the re-rendering of parent component.\nThis means, if this component is re-created by parent component, the input may lost text conversion state."}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"Each component is published as a separate package."}),"\n",(0,r.jsx)(t.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-textfield\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-textfield\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-textfield\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"})]})}let l=function(e={}){let{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,c={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!a.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:c,_owner:s.current}}t.Fragment=c,t.jsx=l,t.jsxs=l},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(e,t,n)=>{e.exports=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/textfield/TextAreaExample.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>p,default:()=>d});var r,o,c,i=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=n("../../packages/textfield/dist/index.mjs");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var u={title:"Base/TextField/TextArea/Example",component:s.K,argTypes:{}};let d=u;var p={args:{value:"あいうえお"},decorators:[function(e){return(0,i.jsx)(e,{})}]};p.parameters=l(a({},p.parameters),{docs:l(a({},null===(r=p.parameters)||void 0===r?void 0:r.docs),{source:a({originalSource:'{\n  args: {\n    value: "あいうえお"\n  },\n  decorators: [Story => {\n    return <Story />;\n  }]\n}'},null===(c=p.parameters)||void 0===c?void 0:null===(o=c.docs)||void 0===o?void 0:o.source)})})},"./stories/textfield/TextFieldExample.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>p,default:()=>d});var r,o,c,i=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=n("../../packages/textfield/dist/index.mjs");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var u={title:"Base/TextField/TextField/Example",component:s.n,argTypes:{}};let d=u;var p={args:{value:"",placeholder:"\uD83D\uDD0D something"},decorators:[function(e){return(0,i.jsx)(e,{})}]};p.parameters=l(a({},p.parameters),{docs:l(a({},null===(r=p.parameters)||void 0===r?void 0:r.docs),{source:a({originalSource:'{\n  args: {\n    value: "",\n    placeholder: "\uD83D\uDD0D something"\n  },\n  decorators: [Story => {\n    return <Story />;\n  }]\n}'},null===(c=p.parameters)||void 0===c?void 0:null===(o=c.docs)||void 0===o?void 0:o.source)})})},"../../packages/textfield/dist/index.mjs":(e,t,n)=>{n.d(t,{K:()=>d,n:()=>j});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.useMemo)(function(){return t.every(function(e){return null==e})?null:function(e){t.forEach(function(t){t&&c(t,e)})}},t)},c=function(e,t){if(e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}},i=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(c.push(n.value),!t||c.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(s)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(e){var t,n=e.onInputChunk,c=u((0,r.useState)(null!==(t=e.value)&&void 0!==t?t:""),2),s=c[0],d=c[1],p=u((0,r.useState)(!1),2),f=p[0],m=p[1],y=(0,r.useRef)(null),j=o(y,e.ref),h=l(a({},e),{ref:void 0,onInputChunk:void 0}),b=(0,r.useCallback)(function(){var e=y.current.value;d(e),f||null==n||n(e)},[f,n]);return(0,i.jsx)("textarea",l(a({},h),{ref:j,onCompositionStart:function(){return m(!0)},onCompositionEnd:function(){m(!1),null==n||n(s)},onChange:b,value:s}))};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(c.push(n.value),!t||c.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(s)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=function(e){var t,n=e.onInputChunk,c=y((0,r.useState)(null!==(t=e.value)&&void 0!==t?t:""),2),s=c[0],a=c[1],l=y((0,r.useState)(!1),2),u=l[0],d=l[1],p=(0,r.useRef)(null),j=o(p,e.ref),h=m(f({},e),{ref:void 0,value:void 0,onInputChunk:void 0}),b=(0,r.useCallback)(function(){var e=p.current.value;a(e),u||null==n||n(e)},[u,n]);return(0,i.jsx)("input",m(f({},h),{type:"text",ref:j,value:s,onCompositionStart:function(){return d(!0)},onCompositionEnd:function(){d(!1),null==n||n(s)},onChange:b}))}}}]);