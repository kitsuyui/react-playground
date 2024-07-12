(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[245,157,948],{"../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(e,t,n)=>{"use strict";n.d(t,{R:()=>a,x:()=>l});var o=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let r={},s=o.createContext(r);function a(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}},"./stories/textfield/Introduction.mdx":(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c}),n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var o=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),r=n("../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),s=n("../../node_modules/.pnpm/@storybook+blocks@8.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.2_@babel+pr_d2rickzfoa4squf36t7r67bkki/node_modules/@storybook/blocks/dist/index.mjs"),a=n("./stories/textfield/TextAreaExample.stories.tsx"),l=n("./stories/textfield/TextFieldExample.stories.tsx");function d(e){let t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"textarea-and-textfield",children:"TextArea and TextField"}),"\n","\n","\n",(0,o.jsx)(s.W8,{title:"Base/TextField/Introduction"}),"\n",(0,o.jsx)(s.Hl,{of:l.Default}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:'<TextField value="あいうえお" placeholder="🔍 something">\n'})}),"\n",(0,o.jsx)(s.Hl,{of:a.Default}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:'<TextArea value="あいうえお"></TextArea>\n'})}),"\n",(0,o.jsx)(t.h2,{id:"concept",children:"Concept"}),"\n",(0,o.jsx)(t.p,{children:"This package provides a text field component for React."}),"\n",(0,o.jsxs)(t.p,{children:["It is very pure and similar with the default ",(0,o.jsx)(t.code,{children:'<input type="text">'})," element and ",(0,o.jsx)(t.code,{children:"<textarea>"})," element."]}),"\n",(0,o.jsxs)(t.p,{children:["So you can pass the same props as those elements. (i.e. ",(0,o.jsx)(t.code,{children:"disabled"}),", ",(0,o.jsx)(t.code,{children:"placeholder"}),", ",(0,o.jsx)(t.code,{children:"maxLength"}),", ",(0,o.jsx)(t.code,{children:"minLength"}),", ",(0,o.jsx)(t.code,{children:"required"}),", ",(0,o.jsx)(t.code,{children:"pattern"}),", ",(0,o.jsx)(t.code,{children:"readOnly"}),", ",(0,o.jsx)(t.code,{children:"autoComplete"}),", ",(0,o.jsx)(t.code,{children:"autoFocus"}),", ",(0,o.jsx)(t.code,{children:"name"}),", ",(0,o.jsx)(t.code,{children:"id"}),", ",(0,o.jsx)(t.code,{children:"className"}),", ",(0,o.jsx)(t.code,{children:"style"}),", ..., etc.)\nThis means, you can use this component as a drop-in replacement for those elements."]}),"\n",(0,o.jsxs)(t.p,{children:["The big difference is that this component how to handle the events.\nIn default browser elements (",(0,o.jsx)(t.code,{children:'<input type="text">'})," and ",(0,o.jsx)(t.code,{children:"<textarea>"}),"), the ",(0,o.jsx)(t.code,{children:"onChange"})," event is fired in every key press.\nBut when you are using IME or something special input method, the ",(0,o.jsx)(t.code,{children:"onChange"})," event is fired in every key press even if the input is not completed or text conversion is not completed. (e.g. Japanese IME, Chinese IME, espanso, etc.)\nThis component calls the ",(0,o.jsx)(t.code,{children:"onInputChunk"})," handler ",(0,o.jsx)(t.code,{children:"(text: string) => void"})," only when the input is completed or text conversion is completed. (Internally, it uses ",(0,o.jsx)(t.code,{children:"CompositionEvent"})," to detect the completion of input or text conversion)"]}),"\n",(0,o.jsx)(t.p,{children:"Warning: This component has no effect to prevent the re-rendering of parent component.\nThis means, if this component is re-created by parent component, the input may lost text conversion state."}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(t.p,{children:"Each component is published as a separate package."}),"\n",(0,o.jsx)(t.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-textfield\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-textfield\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-textfield\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"})]})}function c(e={}){let{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},"../../node_modules/.pnpm/@storybook+core@8.2.2/node_modules/@storybook/core/dist/components sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/.pnpm/@storybook+core@8.2.2/node_modules/@storybook/core/dist/components sync recursive",e.exports=t},"../../node_modules/.pnpm/@storybook+core@8.2.2/node_modules/@storybook/core/dist/theming sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/.pnpm/@storybook+core@8.2.2/node_modules/@storybook/core/dist/theming sync recursive",e.exports=t},"./stories/textfield/TextAreaExample.stories.tsx":(e,t,n)=>{"use strict";n.r(t),n.d(t,{Default:()=>a,__namedExportsOrder:()=>l,default:()=>s});var o=n("../../packages/textfield/dist/index.mjs"),r=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let s={title:"Base/TextField/TextArea/Example",component:o.fs,argTypes:{}},a={args:{value:"あいうえお"},decorators:[e=>r.createElement(e,null)]},l=["Default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'あいうえお'\n  },\n  decorators: [Story => {\n    return <Story />;\n  }]\n}",...a.parameters?.docs?.source}}}},"./stories/textfield/TextFieldExample.stories.tsx":(e,t,n)=>{"use strict";n.r(t),n.d(t,{Default:()=>a,__namedExportsOrder:()=>l,default:()=>s});var o=n("../../packages/textfield/dist/index.mjs"),r=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let s={title:"Base/TextField/TextField/Example",component:o.A_,argTypes:{}},a={args:{value:"",placeholder:"🔍 something"},decorators:[e=>r.createElement(e,null)]},l=["Default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: '',\n    placeholder: '\uD83D\uDD0D something'\n  },\n  decorators: [Story => {\n    return <Story />;\n  }]\n}",...a.parameters?.docs?.source}}}},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",e.exports=t},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,s={},c=null,i=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(i=t.ref),t)a.call(t,o)&&!d.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:c,ref:i,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,t,n)=>{"use strict";e.exports=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/textfield/dist/index.mjs":(e,t,n)=>{"use strict";n.d(t,{k2:()=>x,N1:()=>p,fs:()=>l,A_:()=>d,T8:()=>m});var o=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=(...e)=>(0,o.useMemo)(()=>e.every(e=>null==e)?null:t=>{for(let n of e)n&&s(n,t)},[e]),s=(e,t)=>{if(e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}},a=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=(0,o.forwardRef)((e,t)=>{let{onInputChunk:n,onChangeInputting:s}=e,[l,d]=(0,o.useState)(e.value??""),[c,i]=(0,o.useState)(!1),u=(0,o.useRef)(null),p=r(u,t),{onInputChunk:m,onChangeInputting:x,...h}=Object.assign({},e),f=h.onBlur;(0,o.useEffect)(()=>{d(e.value??"")},[e.value]);let j=(0,o.useCallback)(()=>{let e=u?.current?.value??"";d(e),c||n?.(e)},[c,n]),_=(0,o.useCallback)(()=>{d(u?.current?.value??""),i(!0),s?.(!0)},[s]),v=(0,o.useCallback)(()=>{let e=u?.current?.value??"";d(e),i(!1),s?.(!1),n?.(e)},[n,s]),y=(0,o.useCallback)(e=>{let t=u?.current?.value??"";d(t),i(!1),s?.(!1),n?.(t),f?.(e)},[n,s,f]);return(0,a.jsx)("textarea",{...h,ref:p,value:l,onCompositionStart:_,onCompositionUpdate:_,onCompositionEnd:v,onBlur:y,onChange:j})});l.displayName="TextArea";var d=(0,o.forwardRef)((e,t)=>{let n=(0,o.useRef)(null),{onInputChunk:s,onChangeInputting:l}=e,[d,c]=(0,o.useState)(e.value??""),[i,u]=(0,o.useState)(!1),p=r(n,t),{onInputChunk:m,onChangeInputting:x,...h}=Object.assign({},e),f=h.onBlur;(0,o.useEffect)(()=>{c(e.value??"")},[e.value]);let j=(0,o.useCallback)(()=>{let e=n?.current?.value??"";c(e),i||s?.(e)},[i,s]),_=(0,o.useCallback)(()=>{c(n?.current?.value??""),u(!0),l?.(!0)},[l]),v=(0,o.useCallback)(()=>{let e=n?.current?.value??"";c(e),l?.(!1),s?.(e),u(!1)},[s,l]),y=(0,o.useCallback)(e=>{let t=n?.current?.value??"";c(t),u(!1),l?.(!1),s?.(t),f?.(e)},[s,l,f]);return(0,a.jsx)("input",{...h,type:"text",ref:p,value:d,onCompositionStart:_,onCompositionUpdate:_,onCompositionEnd:v,onBlur:y,onChange:j})});d.displayName="TextField";var c=(0,o.createContext)(""),i=(0,o.createContext)(e=>{}),u=(0,o.createContext)(()=>{}),p=e=>{let[t,n]=(0,o.useState)(""),[r]=(0,o.useState)(),s=(0,o.useCallback)(()=>{n(""),r?.("")},[r]);return(0,a.jsx)(c.Provider,{value:t,children:(0,a.jsx)(i.Provider,{value:n,children:(0,a.jsx)(u.Provider,{value:s,children:e.children})})})},m=e=>{let t=(0,o.useContext)(c),n=(0,o.useContext)(i),r=e.onInputChunk,s=(0,o.useCallback)(e=>{n(e),r?.(e)},[n,r]);return(0,o.useEffect)(()=>{n(e.value??"")},[e.value,n]),(0,a.jsx)(d,{...e,value:t,onInputChunk:s})},x=(0,o.forwardRef)((e,t)=>{let n=Object.assign({},e),r=(0,o.useContext)(u),{onClick:s}=e,l=(0,o.useCallback)(e=>{r(),s?.(e)},[r,s]),d=e.type??"button";return(0,a.jsx)("button",{...n,ref:t,onClick:l,type:d,children:e.children})});x.displayName="ClearButton"}}]);