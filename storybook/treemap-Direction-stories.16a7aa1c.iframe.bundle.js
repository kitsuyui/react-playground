"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[179],{"../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing.js":(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{hx:()=>o.hx});var i=n("../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.wasm"),o=n("../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.js"),u=e([i]);i=(u.then?(await u)():u)[0],(0,o.lI)(i),r()}catch(e){r(e)}})},"../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.js":(e,t,n)=>{let r;function i(e){r=e}n.d(t,{$Z:()=>P,B7:()=>Q,BZ:()=>T,DK:()=>B,Fm:()=>C,M2:()=>q,Nh:()=>S,Py:()=>J,QD:()=>V,QR:()=>M,QU:()=>N,Qn:()=>H,Rj:()=>R,Tp:()=>I,U8:()=>F,Wv:()=>W,bk:()=>$,hx:()=>j,lI:()=>i,ot:()=>L,qN:()=>U,qY:()=>z,qv:()=>k,rl:()=>Z,sW:()=>A,vU:()=>D,yc:()=>O,zE:()=>E}),e=n.hmd(e);let o=Array(128).fill(void 0);function u(e){return o[e]}o.push(void 0,null,!0,!1);let c=o.length;function l(e){let t=u(e);return e<132||(o[e]=c,c=e),t}function d(e){return null==e}let a=null,s=null;function _(){return(null===s||0===s.byteLength)&&(s=new Int32Array(r.memory.buffer)),s}let f=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});f.decode();let g=null;function m(){return(null===g||0===g.byteLength)&&(g=new Uint8Array(r.memory.buffer)),g}function p(e,t){return e>>>=0,f.decode(m().subarray(e,e+t))}function b(e){c===o.length&&o.push(o.length+1);let t=c;return c=o[t],o[t]=e,t}let y=0,h=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8"),w="function"==typeof h.encodeInto?function(e,t){return h.encodeInto(e,t)}:function(e,t){let n=h.encode(e);return t.set(n),{read:e.length,written:n.length}};function v(e,t,n){if(void 0===n){let n=h.encode(e),r=t(n.length,1)>>>0;return m().subarray(r,r+n.length).set(n),y=n.length,r}let r=e.length,i=t(r,1)>>>0,o=m(),u=0;for(;u<r;u++){let t=e.charCodeAt(u);if(t>127)break;o[i+u]=t}if(u!==r){0!==u&&(e=e.slice(u)),i=n(i,r,r=u+3*e.length,1)>>>0;let t=w(e,m().subarray(i+u,i+r));u+=t.written,i=n(i,r,u,1)>>>0}return y=u,i}let x=null;function j(e,t,n,i,o){try{let d=r.__wbindgen_add_to_stack_pointer(-16),a=function(e,t){let n=t(4*e.length,4)>>>0;return((null===x||0===x.byteLength)&&(x=new Float32Array(r.memory.buffer)),x).set(e,n/4),y=e.length,n}(t,r.__wbindgen_malloc),s=y;r.dividing(d,b(e),a,s,n,i,o);var u=_()[d/4+0],c=_()[d/4+1];if(_()[d/4+2])throw l(c);return l(u)}finally{r.__wbindgen_add_to_stack_pointer(16)}}function k(e){let t=u(e);return"object"==typeof t&&null!==t}function D(e){return void 0===u(e)}function E(e,t){return u(e) in u(t)}function $(e){l(e)}function A(e,t){let n=u(t),i="number"==typeof n?n:void 0;((null===a||0===a.byteLength)&&(a=new Float64Array(r.memory.buffer)),a)[e/8+1]=d(i)?0:i,_()[e/4+0]=!d(i)}function R(e,t){return b(Error(p(e,t)))}function O(e,t){return b(p(e,t))}function F(e,t){return u(e)==u(t)}function S(e){let t=u(e);return"boolean"==typeof t?t?1:0:2}function U(e,t){let n=u(t),i="string"==typeof n?n:void 0;var o=d(i)?0:v(i,r.__wbindgen_malloc,r.__wbindgen_realloc),c=y;_()[e/4+1]=c,_()[e/4+0]=o}function M(e){return b(e)}function T(e){return b(u(e))}function I(e,t){return b(u(e)[u(t)])}function B(e,t,n){u(e)[l(t)]=l(n)}function q(){return b([])}function L(){return b({})}function N(e,t,n){u(e)[t>>>0]=l(n)}function Q(e){let t;try{t=u(e) instanceof ArrayBuffer}catch(e){t=!1}return t}function C(e){return b(u(e).buffer)}function P(e){return b(new Uint8Array(u(e)))}function W(e,t,n){u(e).set(u(t),n>>>0)}function z(e){return u(e).length}function V(e){let t;try{t=u(e) instanceof Uint8Array}catch(e){t=!1}return t}function Z(e,t){let n=v(function e(t){let n;let r=typeof t;if("number"==r||"boolean"==r||null==t)return`${t}`;if("string"==r)return`"${t}"`;if("symbol"==r){let e=t.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==r){let e=t.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(t)){let n=t.length,r="[";n>0&&(r+=e(t[0]));for(let i=1;i<n;i++)r+=", "+e(t[i]);return r+"]"}let i=/\[object ([^\]]+)\]/.exec(toString.call(t));if(!(i.length>1))return toString.call(t);if("Object"==(n=i[1]))try{return"Object("+JSON.stringify(t)+")"}catch(e){return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:n}(u(t)),r.__wbindgen_malloc,r.__wbindgen_realloc),i=y;_()[e/4+1]=i,_()[e/4+0]=n}function H(e,t){throw Error(p(e,t))}function J(){return b(r.memory)}},"./stories/treemap/Direction.stories.tsx":(e,t,n)=>{n.a(e,async(e,r)=>{try{n.r(t),n.d(t,{Default:()=>s,__namedExportsOrder:()=>_,default:()=>a});var i=n("../../packages/treemap/dist/index.mjs"),o=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=e([i]);i=(u.then?(await u)():u)[0];let c=e=>{switch(e){case"right":return"→";case"down":return"↓";case"left":return"←";case"up":return"↑"}},l=()=>{let e=(0,o.useContext)(i.g),t=e.nextDirection?c(e.nextDirection):"",n="1px dotted gray",r="2px solid black";return o.createElement("div",{style:{width:"100%",height:"100%",borderLeft:e.continueDirection.left?n:r,borderTop:e.continueDirection.up?n:r,borderRight:e.continueDirection.right?n:r,borderBottom:e.continueDirection.down?n:r}},`(x, y): (${e.x}, ${e.y})`,o.createElement("br",null),`W\xd7H: ${e.w}\xd7${e.h}`,o.createElement("br",null),`index: ${e.index}`,o.createElement("br",null),`previousDirection: ${e.previousDirection}`,o.createElement("br",null),`nextDirection: ${e.nextDirection}`,o.createElement("br",null),`direction: ${t}`,o.createElement("br",null))},d=[...Array(10)].map((e,t)=>t+1).map(e=>({weight:1.1**e,element:o.createElement(l,null)}));d.sort((e,t)=>t.weight-e.weight);let a={title:"Base/Treemap/Direction",component:(e={verticalFirst:!0,aspectRatio:16/9,boustrophedon:!1})=>o.createElement(i.V,{weightedItems:d,...e})},s={args:{verticalFirst:!1,aspectRatio:16/9,boustrophedon:!0},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:800}}}},_=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{\n  args: {\n    verticalFirst: false,\n    aspectRatio: 16 / 9,\n    boustrophedon: true\n  },\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 800\n      }\n    }\n  }\n}",...s.parameters?.docs?.source}}},r()}catch(e){r(e)}})},"../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMeasure.js":(e,t,n)=>{n.d(t,{A:()=>l});var r=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=function(){},o="undefined"!=typeof window,u=o?r.useLayoutEffect:r.useEffect,c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let l=o&&void 0!==window.ResizeObserver?function(){var e=(0,r.useState)(null),t=e[0],n=e[1],i=(0,r.useState)(c),o=i[0],l=i[1],d=(0,r.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;l({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return u(function(){if(t)return d.observe(t),function(){d.disconnect()}},[t]),[n,o]}:function(){return[i,c]}},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,a=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)u.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:a,props:o,_owner:c.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,t,n)=>{e.exports=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/treemap/dist/chunk-IM3RMJMU.mjs":(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{V:()=>g,g:()=>d});var i=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=n("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMeasure.js"),u=n("../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing.js"),c=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=e([u]);u=(l.then?(await l)():l)[0];var d=i.createContext({x:0,y:0,w:0,h:0,index:0,previousDirection:null,nextDirection:null,continueDirection:{right:!1,down:!1,left:!1,up:!1}}),a=(e,t)=>e.x+e.w<=t.x?"right":e.x>=t.x+t.w?"left":e.y+e.h<=t.y?"down":e.y>=t.y+t.h?"up":"right",s=(e,t)=>a(t,e),_=e=>{let t=e.map((e,t)=>({...e,index:t,previousDirection:null,nextDirection:null,continueDirection:{right:!1,down:!1,left:!1,up:!1}}));for(let e=0;e<t.length;e++){let n=t[e],r=t[e+1];r&&(n.nextDirection=a(n,r),n.continueDirection[n.nextDirection]=!0,r.previousDirection=s(n,r),r.continueDirection[r.previousDirection]=!0)}return t},f=16/9,g=e=>{let[t,{width:n,height:r}]=(0,o.A)(),{weightedItems:l}=e,d=e.verticalFirst??!0,a=e.aspectRatio??f,s=e.boustrophedon??!1,[g,b]=(0,i.useState)([]);(0,i.useEffect)(()=>{let e=new Float32Array(l.map(({weight:e})=>e)),t=(0,u.hx)({x:0,y:0,w:n,h:r},e,a,d,s);b(t.map(e=>({x:0|e.x,y:0|e.y,w:0|e.w,h:0|e.h})))},[n,r,l,a,d,s]);let y=_(g),h=p(l,y).map(([e,t])=>({element:e.element,rect:t}));return(0,c.jsx)("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:m({items:h})})},m=e=>{let{items:t}=e;return(0,c.jsx)(c.Fragment,{children:t.map(({element:e,rect:t})=>{let{x:n,y:r,w:i,h:o,index:u}=t;return(0,c.jsx)(d.Provider,{value:t,children:(0,c.jsx)("div",{style:{position:"absolute",overflow:"hidden",width:`${i}px`,height:`${o}px`,left:`${n}px`,top:`${r}px`},children:e},u)},u)})})},p=(e,t)=>Array.from(Array(Math.min(t.length,e.length)),(n,r)=>[e[r],t[r]]);r()}catch(e){r(e)}})},"../../packages/treemap/dist/index.mjs":(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{V:()=>i.V,g:()=>i.g});var i=n("../../packages/treemap/dist/chunk-IM3RMJMU.mjs"),o=e([i]);i=(o.then?(await o)():o)[0],r()}catch(e){r(e)}})},"../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.wasm":(e,t,n)=>{var r=n("../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.js");e.exports=n.v(t,e.id,"035b26bf4734c2a7739a",{"./rust_rectangle_dividing_bg.js":{__wbindgen_is_object:r.qv,__wbindgen_is_undefined:r.vU,__wbindgen_in:r.zE,__wbindgen_object_drop_ref:r.bk,__wbindgen_number_get:r.sW,__wbindgen_error_new:r.Rj,__wbindgen_string_new:r.yc,__wbindgen_jsval_loose_eq:r.U8,__wbindgen_boolean_get:r.Nh,__wbindgen_string_get:r.qN,__wbindgen_number_new:r.QR,__wbindgen_object_clone_ref:r.BZ,__wbg_getwithrefkey_edc2c8960f0f1191:r.Tp,__wbg_set_f975102236d3c502:r.DK,__wbg_new_16b304a2cfa7ff4a:r.M2,__wbg_new_72fb9a18b5ae2624:r.ot,__wbg_set_d4638f722068f043:r.QU,__wbg_instanceof_ArrayBuffer_836825be07d4c9d2:r.B7,__wbg_buffer_12d079cc21e14bdb:r.Fm,__wbg_new_63b92bc8671ed464:r.$Z,__wbg_set_a47bac70306a19a7:r.Wv,__wbg_length_c20a40f15020d68a:r.qY,__wbg_instanceof_Uint8Array_2b3bbecd033d19f6:r.QD,__wbindgen_debug_string:r.rl,__wbindgen_throw:r.Qn,__wbindgen_memory:r.Py}})}}]);