"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[1247],{"../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.3/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing.js":(e,n,t)=>{t.a(e,async(e,r)=>{try{t.d(n,{hx:()=>o.hx});var i=t("../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.3/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.wasm"),o=t("../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.3/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.js"),u=e([i]);i=(u.then?(await u)():u)[0],(0,o.lI)(i),r()}catch(e){r(e)}})},"../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.3/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.js":(e,n,t)=>{let r;function i(e){r=e}t.d(n,{BZ:()=>P,Bl:()=>J,CJ:()=>B,HC:()=>V,MD:()=>F,Nh:()=>U,Py:()=>Z,QR:()=>$,Qn:()=>W,Rj:()=>k,U8:()=>I,_S:()=>Q,bk:()=>S,hx:()=>x,ik:()=>N,jN:()=>q,kT:()=>T,lI:()=>i,nS:()=>z,qN:()=>R,qv:()=>O,rl:()=>H,s$:()=>C,sW:()=>E,tw:()=>L,vU:()=>A,yc:()=>M,zE:()=>D}),e=t.hmd(e);let o=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();let u=null;function c(){return(null===u||0===u.byteLength)&&(u=new Uint8Array(r.memory.buffer)),u}function l(e,n){return e>>>=0,o.decode(c().subarray(e,e+n))}let a=Array(128).fill(void 0);a.push(void 0,null,!0,!1);let d=a.length;function _(e){d===a.length&&a.push(a.length+1);let n=d;return d=a[n],a[n]=e,n}function s(e){return a[e]}function f(e){let n=s(e);return e<132||(a[e]=d,d=e),n}function g(e){return null==e}let b=null,y=null;function m(){return(null===y||0===y.byteLength)&&(y=new Int32Array(r.memory.buffer)),y}let h=0,p=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8"),w="function"==typeof p.encodeInto?function(e,n){return p.encodeInto(e,n)}:function(e,n){let t=p.encode(e);return n.set(t),{read:e.length,written:t.length}};function v(e,n,t){if(void 0===t){let t=p.encode(e),r=n(t.length,1)>>>0;return c().subarray(r,r+t.length).set(t),h=t.length,r}let r=e.length,i=n(r,1)>>>0,o=c(),u=0;for(;u<r;u++){let n=e.charCodeAt(u);if(n>127)break;o[i+u]=n}if(u!==r){0!==u&&(e=e.slice(u)),i=t(i,r,r=u+3*e.length,1)>>>0;let n=w(e,c().subarray(i+u,i+r));u+=n.written}return h=u,i}let j=null;function x(e,n,t,i,o){try{let l=r.__wbindgen_add_to_stack_pointer(-16),a=function(e,n){let t=n(4*e.length,4)>>>0;return((null===j||0===j.byteLength)&&(j=new Float32Array(r.memory.buffer)),j).set(e,t/4),h=e.length,t}(n,r.__wbindgen_malloc),d=h;r.dividing(l,_(e),a,d,t,i,o);var u=m()[l/4+0],c=m()[l/4+1];if(m()[l/4+2])throw f(c);return f(u)}finally{r.__wbindgen_add_to_stack_pointer(16)}}function k(e,n){return _(Error(l(e,n)))}function O(e){let n=s(e);return"object"==typeof n&&null!==n}function A(e){return void 0===s(e)}function D(e,n){return s(e) in s(n)}function S(e){f(e)}function E(e,n){let t=s(n),i="number"==typeof t?t:void 0;((null===b||0===b.byteLength)&&(b=new Float64Array(r.memory.buffer)),b)[e/8+1]=g(i)?0:i,m()[e/4+0]=!g(i)}function M(e,n){return _(l(e,n))}function P(e){return _(s(e))}function I(e,n){return s(e)==s(n)}function U(e){let n=s(e);return"boolean"==typeof n?n?1:0:2}function R(e,n){let t=s(n),i="string"==typeof t?t:void 0;var o=g(i)?0:v(i,r.__wbindgen_malloc,r.__wbindgen_realloc),u=h;m()[e/4+1]=u,m()[e/4+0]=o}function $(e){return _(e)}function C(e,n){return _(s(e)[s(n)])}function T(e,n,t){s(e)[f(n)]=f(t)}function q(){return _([])}function B(){return _({})}function F(e,n,t){s(e)[n>>>0]=f(t)}function N(e){let n;try{n=s(e) instanceof ArrayBuffer}catch(e){n=!1}return n}function J(e){return _(s(e).buffer)}function L(e){return _(new Uint8Array(s(e)))}function z(e,n,t){s(e).set(s(n),t>>>0)}function Q(e){return s(e).length}function V(e){let n;try{n=s(e) instanceof Uint8Array}catch(e){n=!1}return n}function H(e,n){let t=v(function e(n){let t;let r=typeof n;if("number"==r||"boolean"==r||null==n)return`${n}`;if("string"==r)return`"${n}"`;if("symbol"==r){let e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==r){let e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){let t=n.length,r="[";t>0&&(r+=e(n[0]));for(let i=1;i<t;i++)r+=", "+e(n[i]);return r+"]"}let i=/\[object ([^\]]+)\]/.exec(toString.call(n));if(!(i.length>1))return toString.call(n);if("Object"==(t=i[1]))try{return"Object("+JSON.stringify(n)+")"}catch(e){return"Object"}return n instanceof Error?`${n.name}: ${n.message}
${n.stack}`:t}(s(n)),r.__wbindgen_malloc,r.__wbindgen_realloc),i=h;m()[e/4+1]=i,m()[e/4+0]=t}function W(e,n){throw Error(l(e,n))}function Z(){return _(r.memory)}},"../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMeasure.js":(e,n,t)=>{t.d(n,{A:()=>l});var r=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=function(){},o="undefined"!=typeof window,u=o?r.useLayoutEffect:r.useEffect,c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let l=o&&void 0!==window.ResizeObserver?function(){var e=(0,r.useState)(null),n=e[0],t=e[1],i=(0,r.useState)(c),o=i[0],l=i[1],a=(0,r.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var n=e[0].contentRect;l({x:n.x,y:n.y,width:n.width,height:n.height,top:n.top,left:n.left,bottom:n.bottom,right:n.right})}})},[]);return u(function(){if(n)return a.observe(n),function(){a.disconnect()}},[n]),[t,o]}:function(){return[i,c]}},"../../packages/treemap/dist/chunk-IM3RMJMU.mjs":(e,n,t)=>{t.a(e,async(e,r)=>{try{t.d(n,{V:()=>b,g:()=>_});var i=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=t("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMeasure.js"),u=t("../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.3/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing.js"),c=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=e([u]);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o=[],u=!0,c=!1;try{for(i=i.call(e);!(u=(t=i.next()).done)&&(o.push(t.value),!n||o.length!==n);u=!0);}catch(e){c=!0,r=e}finally{try{u||null==i.return||i.return()}finally{if(c)throw r}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}u=(l.then?(await l)():l)[0];var _=i.createContext({x:0,y:0,w:0,h:0,index:0,previousDirection:null,nextDirection:null,continueDirection:{right:!1,down:!1,left:!1,up:!1}}),s=function(e,n){return e.x+e.w<=n.x?"right":e.x>=n.x+n.w?"left":e.y+e.h<=n.y?"down":e.y>=n.y+n.h?"up":"right"},f=function(e){for(var n=e.map(function(e,n){var t,r;return t=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,i,o;o=t[n],n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o})}return e}({},e),r={index:n,previousDirection:null,nextDirection:null,continueDirection:{right:!1,down:!1,left:!1,up:!1}},r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t}),t=0;t<n.length;t++){var r,i,o=n[t],u=n[t+1];u&&(o.nextDirection=s(o,u),o.continueDirection[o.nextDirection]=!0,u.previousDirection=s(u,o),u.continueDirection[u.previousDirection]=!0)}return n},g=16/9,b=function(e){var n,t,r,l=d((0,o.A)(),2),a=l[0],_=l[1],s=_.width,b=_.height,h=e.weightedItems,p=null===(n=e.verticalFirst)||void 0===n||n,w=null!==(t=e.aspectRatio)&&void 0!==t?t:g,v=null!==(r=e.boustrophedon)&&void 0!==r&&r,j=d((0,i.useState)([]),2),x=j[0],k=j[1];(0,i.useEffect)(function(){var e=new Float32Array(h.map(function(e){return e.weight})),n=(0,u.hx)({x:0,y:0,w:s,h:b},e,w,p,v);k(n.map(function(e){return{x:0|e.x,y:0|e.y,w:0|e.w,h:0|e.h}}))},[s,b,h,w,p,v]);var O=f(x),A=m(h,O).map(function(e){var n=d(e,2),t=n[0],r=n[1];return{element:t.element,rect:r}});return(0,c.jsx)("div",{ref:a,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:y({items:A})})},y=function(e){var n=e.items;return(0,c.jsx)(c.Fragment,{children:n.map(function(e){var n=e.element,t=e.rect,r=t.x,i=t.y,o=t.w,u=t.h,l=t.index;return(0,c.jsx)(_.Provider,{value:t,children:(0,c.jsx)("div",{style:{position:"absolute",overflow:"hidden",width:"".concat(o,"px"),height:"".concat(u,"px"),left:"".concat(r,"px"),top:"".concat(i,"px")},children:n},l)},l)})})},m=function(e,n){return Array.from(Array(Math.min(n.length,e.length)),function(t,r){return[e[r],n[r]]})};r()}catch(e){r(e)}})},"../../packages/treemap/dist/index.mjs":(e,n,t)=>{t.a(e,async(e,r)=>{try{t.d(n,{V:()=>i.V,g:()=>i.g});var i=t("../../packages/treemap/dist/chunk-IM3RMJMU.mjs"),o=e([i]);i=(o.then?(await o)():o)[0],r()}catch(e){r(e)}})},"../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.3/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.wasm":(e,n,t)=>{var r=t("../../node_modules/.pnpm/@kitsuyui+rectangle-dividing@0.1.3/node_modules/@kitsuyui/rectangle-dividing/rust_rectangle_dividing_bg.js");e.exports=t.v(n,e.id,"4ff0cd0037c6890a4bf2",{"./rust_rectangle_dividing_bg.js":{__wbindgen_error_new:r.Rj,__wbindgen_is_object:r.qv,__wbindgen_is_undefined:r.vU,__wbindgen_in:r.zE,__wbindgen_object_drop_ref:r.bk,__wbindgen_number_get:r.sW,__wbindgen_string_new:r.yc,__wbindgen_object_clone_ref:r.BZ,__wbindgen_jsval_loose_eq:r.U8,__wbindgen_boolean_get:r.Nh,__wbindgen_string_get:r.qN,__wbindgen_number_new:r.QR,__wbg_getwithrefkey_3b3c46ba20582127:r.s$,__wbg_set_8761474ad72b9bf1:r.kT,__wbg_new_08236689f0afb357:r.jN,__wbg_new_c728d68b8b34487e:r.CJ,__wbg_set_0ac78a2bc07da03c:r.MD,__wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d:r.ik,__wbg_buffer_344d9b41efe96da7:r.Bl,__wbg_new_d8a000788389a31e:r.tw,__wbg_set_dcfd613a3420f908:r.nS,__wbg_length_a5587d6cd79ab197:r._S,__wbg_instanceof_Uint8Array_19e6f142a5e7e1e1:r.HC,__wbindgen_debug_string:r.rl,__wbindgen_throw:r.Qn,__wbindgen_memory:r.Py}})}}]);