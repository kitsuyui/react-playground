"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[7158],{"../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing.js":(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{hx:()=>o.hx});var i=n("../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.wasm"),o=n("../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.js"),u=e([i]);i=(u.then?(await u)():u)[0],(0,o.lI)(i),r()}catch(e){r(e)}})},"../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.js":(e,t,n)=>{let r;function i(e){r=e}n.d(t,{$Z:()=>P,B7:()=>N,BZ:()=>T,DK:()=>B,Fm:()=>Q,M2:()=>q,Nh:()=>O,Py:()=>Y,QD:()=>V,QR:()=>U,QU:()=>L,Qn:()=>J,Rj:()=>F,Tp:()=>I,U8:()=>M,Wv:()=>W,bk:()=>E,hx:()=>j,lI:()=>i,ot:()=>C,qN:()=>S,qY:()=>z,qv:()=>k,rl:()=>Z,sW:()=>R,vU:()=>D,yc:()=>$,zE:()=>A}),e=n.hmd(e);let o=Array(128).fill(void 0);function u(e){return o[e]}o.push(void 0,null,!0,!1);let d=o.length;function a(e){let t=u(e);return e<132||(o[e]=d,d=e),t}function s(e){return null==e}let l=null,c=null;function _(){return(null===c||0===c.byteLength)&&(c=new Int32Array(r.memory.buffer)),c}let f=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});f.decode();let m=null;function g(){return(null===m||0===m.byteLength)&&(m=new Uint8Array(r.memory.buffer)),m}function p(e,t){return e>>>=0,f.decode(g().subarray(e,e+t))}function y(e){d===o.length&&o.push(o.length+1);let t=d;return d=o[t],o[t]=e,t}let h=0,b=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8"),w="function"==typeof b.encodeInto?function(e,t){return b.encodeInto(e,t)}:function(e,t){let n=b.encode(e);return t.set(n),{read:e.length,written:n.length}};function x(e,t,n){if(void 0===n){let n=b.encode(e),r=t(n.length,1)>>>0;return g().subarray(r,r+n.length).set(n),h=n.length,r}let r=e.length,i=t(r,1)>>>0,o=g(),u=0;for(;u<r;u++){let t=e.charCodeAt(u);if(t>127)break;o[i+u]=t}if(u!==r){0!==u&&(e=e.slice(u)),i=n(i,r,r=u+3*e.length,1)>>>0;let t=w(e,g().subarray(i+u,i+r));u+=t.written,i=n(i,r,u,1)>>>0}return h=u,i}let v=null;function j(e,t,n,i,o){try{let s=r.__wbindgen_add_to_stack_pointer(-16),l=function(e,t){let n=t(4*e.length,4)>>>0;return((null===v||0===v.byteLength)&&(v=new Float32Array(r.memory.buffer)),v).set(e,n/4),h=e.length,n}(t,r.__wbindgen_malloc),c=h;r.dividing(s,y(e),l,c,n,i,o);var u=_()[s/4+0],d=_()[s/4+1];if(_()[s/4+2])throw a(d);return a(u)}finally{r.__wbindgen_add_to_stack_pointer(16)}}function k(e){let t=u(e);return"object"==typeof t&&null!==t}function D(e){return void 0===u(e)}function A(e,t){return u(e) in u(t)}function E(e){a(e)}function R(e,t){let n=u(t),i="number"==typeof n?n:void 0;((null===l||0===l.byteLength)&&(l=new Float64Array(r.memory.buffer)),l)[e/8+1]=s(i)?0:i,_()[e/4+0]=!s(i)}function F(e,t){return y(Error(p(e,t)))}function $(e,t){return y(p(e,t))}function M(e,t){return u(e)==u(t)}function O(e){let t=u(e);return"boolean"==typeof t?t?1:0:2}function S(e,t){let n=u(t),i="string"==typeof n?n:void 0;var o=s(i)?0:x(i,r.__wbindgen_malloc,r.__wbindgen_realloc),d=h;_()[e/4+1]=d,_()[e/4+0]=o}function U(e){return y(e)}function T(e){return y(u(e))}function I(e,t){return y(u(e)[u(t)])}function B(e,t,n){u(e)[a(t)]=a(n)}function q(){return y([])}function C(){return y({})}function L(e,t,n){u(e)[t>>>0]=a(n)}function N(e){let t;try{t=u(e) instanceof ArrayBuffer}catch(e){t=!1}return t}function Q(e){return y(u(e).buffer)}function P(e){return y(new Uint8Array(u(e)))}function W(e,t,n){u(e).set(u(t),n>>>0)}function z(e){return u(e).length}function V(e){let t;try{t=u(e) instanceof Uint8Array}catch(e){t=!1}return t}function Z(e,t){let n=x(function e(t){let n;let r=typeof t;if("number"==r||"boolean"==r||null==t)return`${t}`;if("string"==r)return`"${t}"`;if("symbol"==r){let e=t.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==r){let e=t.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(t)){let n=t.length,r="[";n>0&&(r+=e(t[0]));for(let i=1;i<n;i++)r+=", "+e(t[i]);return r+"]"}let i=/\[object ([^\]]+)\]/.exec(toString.call(t));if(!(i.length>1))return toString.call(t);if("Object"==(n=i[1]))try{return"Object("+JSON.stringify(t)+")"}catch(e){return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:n}(u(t)),r.__wbindgen_malloc,r.__wbindgen_realloc),i=h;_()[e/4+1]=i,_()[e/4+0]=n}function J(e,t){throw Error(p(e,t))}function Y(){return y(r.memory)}},"./stories/treemap/Example.stories.tsx":(e,t,n)=>{n.a(e,async(e,r)=>{try{n.r(t),n.d(t,{Default:()=>l,__namedExportsOrder:()=>c,default:()=>s});var i=n("../../packages/measure/dist/index.mjs"),o=n("../../packages/treemap/dist/index.mjs"),u=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e([o]);o=(d.then?(await d)():d)[0];let a=[...Array(10)].map((e,t)=>t+1).map(e=>({weight:1.1**e,element:/*#__PURE__*/u.createElement(i.t,null)}));a.sort((e,t)=>t.weight-e.weight);let s={title:"Base/Treemap/Example",component:(e={verticalFirst:!0,aspectRatio:16/9,boustrophedon:!1})=>/*#__PURE__*/u.createElement(o.V,{weightedItems:a,...e})},l={args:{verticalFirst:!0,aspectRatio:16/9,boustrophedon:!1},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:800}}}},c=["Default"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{\n  args: {\n    verticalFirst: true,\n    aspectRatio: 16 / 9,\n    boustrophedon: false\n  },\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 800\n      }\n    }\n  }\n}",...l.parameters?.docs?.source}}},r()}catch(e){r(e)}})},"../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMeasure.js":(e,t,n)=>{n.d(t,{A:()=>a});var r=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=function(){},o="undefined"!=typeof window,u=o?r.useLayoutEffect:r.useEffect,d={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let a=o&&void 0!==window.ResizeObserver?function(){var e=(0,r.useState)(null),t=e[0],n=e[1],i=(0,r.useState)(d),o=i[0],a=i[1],s=(0,r.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var t=e[0].contentRect;a({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return u(function(){if(t)return s.observe(t),function(){s.disconnect()}},[t]),[n,o]}:function(){return[i,d]}},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:s,ref:l,props:o,_owner:d.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,t,n)=>{e.exports=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/measure/dist/index.mjs":(e,t,n)=>{n.d(t,{t:()=>_});var r=(e,t)=>({x:e,y:t}),i=(e,t)=>({start:e,end:t}),o=(e,t,n,o)=>i(r(e,t),r(n,o)),u=e=>{let{width:t,height:n}=e,r=t/2,i=n/2;return[o(0,0,r,i),o(t,0,r,i),o(0,n,r,i),o(t,n,r,i)]},d=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=e=>{let{width:t,height:n,styles:r}=e,i=`${t}x${n}`,o=Math.min(t,n)/i.length,[s,l]=[t/2,n/2],c=r.stroke,_=(0,d.useMemo)(()=>u({width:t,height:n}),[t,n]);return/* @__PURE__ */(0,a.jsxs)("svg",{width:t,height:n,children:[/* @__PURE__ */(0,a.jsx)("title",{children:i}),/* @__PURE__ */(0,a.jsx)("rect",{x:0,y:0,width:t,height:n,fill:"none",stroke:c.color,strokeWidth:c.width,strokeDasharray:c.dasharray}),_.map(e=>/* @__PURE__ */(0,a.jsx)("line",{x1:e.start.x,y1:e.start.y,x2:e.end.x,y2:e.end.y,stroke:c.color,strokeWidth:c.width,strokeDasharray:c.dasharray})),/* @__PURE__ */(0,a.jsx)("text",{x:s,y:l,textAnchor:"middle",dominantBaseline:"middle",fontSize:o,fontFamily:r.text.fontFamily,children:i})]})},l=n("../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMeasure.js"),c=/*#__PURE__*/(0,d.createContext)({stroke:{color:"black",width:1,dasharray:2},text:{fontFamily:"monospace"}}),_=()=>{let[e,{width:t,height:n}]=(0,l.A)(),r=d.useContext(c);return/* @__PURE__ */(0,a.jsx)("div",{ref:e,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:/* @__PURE__ */(0,a.jsx)(s,{width:t,height:n,styles:r})})}},"../../packages/treemap/dist/chunk-IM3RMJMU.mjs":(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{V:()=>m,g:()=>s});var i=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=n("../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMeasure.js"),u=n("../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing.js"),d=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),a=e([u]);u=(a.then?(await a)():a)[0];var s=/*#__PURE__*/i.createContext({x:0,y:0,w:0,h:0,index:0,previousDirection:null,nextDirection:null,continueDirection:{right:!1,down:!1,left:!1,up:!1}}),l=(e,t)=>e.x+e.w<=t.x?"right":e.x>=t.x+t.w?"left":e.y+e.h<=t.y?"down":e.y>=t.y+t.h?"up":"right",c=(e,t)=>l(t,e),_=e=>{let t=e.map((e,t)=>({...e,index:t,previousDirection:null,nextDirection:null,continueDirection:{right:!1,down:!1,left:!1,up:!1}}));for(let e=0;e<t.length;e++){let n=t[e],r=t[e+1];r&&(n.nextDirection=l(n,r),n.continueDirection[n.nextDirection]=!0,r.previousDirection=c(n,r),r.continueDirection[r.previousDirection]=!0)}return t},f=16/9,m=e=>{let[t,{width:n,height:r}]=(0,o.A)(),{weightedItems:a}=e,s=e.verticalFirst??!0,l=e.aspectRatio??f,c=e.boustrophedon??!1,[m,y]=(0,i.useState)([]);(0,i.useEffect)(()=>{let e=new Float32Array(a.map(({weight:e})=>e)),t=(0,u.hx)({x:0,y:0,w:n,h:r},e,l,s,c);y(t.map(e=>({x:0|e.x,y:0|e.y,w:0|e.w,h:0|e.h})))},[n,r,a,l,s,c]);let h=_(m),b=p(a,h).map(([e,t])=>({element:e.element,rect:t}));return/* @__PURE__ */(0,d.jsx)("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:g({items:b})})},g=e=>{let{items:t}=e;return/* @__PURE__ */(0,d.jsx)(d.Fragment,{children:t.map(({element:e,rect:t})=>{let{x:n,y:r,w:i,h:o,index:u}=t;return/* @__PURE__ */(0,d.jsx)(s.Provider,{value:t,children:/* @__PURE__ */(0,d.jsx)("div",{style:{position:"absolute",overflow:"hidden",width:`${i}px`,height:`${o}px`,left:`${n}px`,top:`${r}px`},children:e},u)},u)})})},p=(e,t)=>Array.from(Array(Math.min(t.length,e.length)),(n,r)=>[e[r],t[r]]);r()}catch(e){r(e)}})},"../../packages/treemap/dist/index.mjs":(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{V:()=>i.V,g:()=>i.g});var i=n("../../packages/treemap/dist/chunk-IM3RMJMU.mjs"),o=e([i]);i=(o.then?(await o)():o)[0],r()}catch(e){r(e)}})},"../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.wasm":(e,t,n)=>{var r=n("../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.4/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.js");e.exports=n.v(t,e.id,"035b26bf4734c2a7739a",{"./rust_rectangle_dividing_bg.js":{__wbindgen_is_object:r.qv,__wbindgen_is_undefined:r.vU,__wbindgen_in:r.zE,__wbindgen_object_drop_ref:r.bk,__wbindgen_number_get:r.sW,__wbindgen_error_new:r.Rj,__wbindgen_string_new:r.yc,__wbindgen_jsval_loose_eq:r.U8,__wbindgen_boolean_get:r.Nh,__wbindgen_string_get:r.qN,__wbindgen_number_new:r.QR,__wbindgen_object_clone_ref:r.BZ,__wbg_getwithrefkey_edc2c8960f0f1191:r.Tp,__wbg_set_f975102236d3c502:r.DK,__wbg_new_16b304a2cfa7ff4a:r.M2,__wbg_new_72fb9a18b5ae2624:r.ot,__wbg_set_d4638f722068f043:r.QU,__wbg_instanceof_ArrayBuffer_836825be07d4c9d2:r.B7,__wbg_buffer_12d079cc21e14bdb:r.Fm,__wbg_new_63b92bc8671ed464:r.$Z,__wbg_set_a47bac70306a19a7:r.Wv,__wbg_length_c20a40f15020d68a:r.qY,__wbg_instanceof_Uint8Array_2b3bbecd033d19f6:r.QD,__wbindgen_debug_string:r.rl,__wbindgen_throw:r.Qn,__wbindgen_memory:r.Py}})}}]);