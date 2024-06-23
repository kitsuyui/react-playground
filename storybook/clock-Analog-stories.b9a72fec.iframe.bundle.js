"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[2488,2543,578],{"./stories/clock/Analog.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>o,Roman:()=>c,Sweep:()=>a,Tokyo:()=>s,__namedExportsOrder:()=>i,default:()=>n});let n={title:"Base/Clock/Analog",component:r("../../packages/clock/dist/index.mjs").TX};var o={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"UTC",face:"arabic",step:"tick"}},c={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"UTC",face:"roman",step:"tick"}},a={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"UTC",face:"arabic",step:"sweep"}},s={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"Asia/Tokyo",face:"arabic",step:"tick"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'UTC',\n    face: 'arabic',\n    step: 'tick'\n  }\n}",...o.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'UTC',\n    face: 'roman',\n    step: 'tick'\n  }\n}",...c.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'UTC',\n    face: 'arabic',\n    step: 'sweep'\n  }\n}",...a.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'Asia/Tokyo',\n    face: 'arabic',\n    step: 'tick'\n  }\n}",...s.parameters?.docs?.source}}};let i=["Default","Roman","Sweep","Tokyo"]},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,c={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:c,_owner:s.current}}t.Fragment=c,t.jsx=u,t.jsxs=u},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,t,r)=>{e.exports=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/clock/dist/index.mjs":(e,t,r)=>{r.d(t,{TX:()=>u,C_:()=>j,ec:()=>w,NX:()=>O});var n=r("../../node_modules/.pnpm/luxon@3.4.4/node_modules/luxon/src/luxon.js"),o=function(e){switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return"".concat(e)},c=function(e,t){switch(t){case"arabic":return 0===e?"12":"".concat(e);case"roman":return o(e)}},a=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,c;c=r[t],t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c})}return e}var i={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},u=function(e){var t,r,o,c,u,f,h,g,y,b,w,j,x=e.timezone,k=e.date,v=(r=(t=s({},i,e)).width,o=t.height,c=t.step,u=t.face,f=t.bigHand,h=t.smallHand,g=t.secondHand,y=t.frame,b=t.centerPoint,w=t.hourLines,j=t.minuteLines,{width:r,height:o,step:c,face:u,bigHand:s({},i.bigHand,f),smallHand:s({},i.smallHand,h),secondHand:s({},i.secondHand,g),frame:s({},i.frame,y),centerPoint:s({},i.centerPoint,b),hourLines:s({},i.hourLines,w),minuteLines:s({},i.minuteLines,j)}),_=v.width,O=v.height,S=v.bigHand,P=v.smallHand,T=v.secondHand,D=v.frame,z=v.step,C=v.face,X=v.centerPoint,H=v.hourLines,A=v.minuteLines,Y=function(e,t,r){var o,c,a,s,i,u,l;switch(r){case"tick":return o=e,c=t,s=(a=n.c9.fromJSDate(e).setZone(t)).minute/12|0,{hour:a.hour+s/5,minute:a.minute,second:a.second};case"sweep":return i=e,u=t,{hour:(l=n.c9.fromJSDate(e).setZone(t)).hour+l.minute/60+l.second/3600,minute:l.minute+l.second/60,second:l.second+l.millisecond/1e3}}}(k,x,z),L=Y.hour,M=Y.minute,Z=Y.second,E=_/2,I=O/2;return(0,a.jsx)("div",{style:{width:"".concat(_,"px"),height:"".concat(O,"px")},children:(0,a.jsxs)("svg",{viewBox:"0 0 ".concat(_," ").concat(O),fill:"none",xmlns:"http://www.w3.org/2000/svg",width:_,height:O,children:[(0,a.jsx)("title",{children:"".concat(L,":").concat(M,":").concat(Z)}),(0,a.jsx)("circle",{cx:E,cy:I,r:D.size,stroke:D.color,strokeWidth:D.width,fill:D.backgroundColor}),(0,a.jsx)("circle",{cx:E,cy:I,r:X.size,stroke:X.color,strokeWidth:X.size,fill:X.color}),(0,a.jsx)(d,s({centerX:E,centerY:I,radius:D.size-H.length},H)),(0,a.jsx)(m,s({centerX:E,centerY:I,radius:D.size-A.length},A)),(0,a.jsx)(p,{centerX:E,centerY:I,radius:D.size-A.length,faceType:C}),(0,a.jsx)(l,s({centerX:E,centerY:I,degree:30*L},S)),(0,a.jsx)(l,s({centerX:E,centerY:I,degree:6*M},P)),(0,a.jsx)(l,s({centerX:E,centerY:I,degree:6*Z},T))]})})},l=function(e){var t=e.centerX,r=e.centerY,n=e.degree,o=e.length,c=e.width,s=e.color,i=h(n),u=t+o*Math.sin(i),l=r-o*Math.cos(i);return(0,a.jsx)("line",{x1:t,y1:r,x2:u,y2:l,stroke:s,strokeWidth:c})},d=function(e){var t=e.centerX,r=e.centerY,n=e.radius,o=e.width,c=e.color,s=e.length;return(0,a.jsx)(f,{centerX:t,centerY:r,radius:n,length:s,count:12,width:o,color:c})},m=function(e){var t=e.centerX,r=e.centerY,n=e.radius,o=e.width,c=e.color,s=e.length;return(0,a.jsx)(f,{centerX:t,centerY:r,radius:n,length:s,count:60,width:o,color:c})},f=function(e){for(var t=e.centerX,r=e.centerY,n=e.radius,o=e.length,c=e.count,s=e.width,i=e.color,u=[],l=0;l<c;l++){var d=h(360/c*l),m=t+n*Math.sin(d),f=r+n*Math.cos(d),p=m+o*Math.sin(d),g=f+o*Math.cos(d);u.push((0,a.jsx)("line",{x1:m,y1:f,x2:p,y2:g,stroke:i,strokeWidth:s},l))}return(0,a.jsx)(a.Fragment,{children:u})},p=function(e){for(var t=e.centerX,r=e.centerY,n=e.radius,o=[],i=n/5,u=n-i,l={textAnchor:"middle",dominantBaseline:"central",fontSize:i,fontFamily:"monospace",fill:"black"},d=0;d<12;d++){var m=h(30*d),f=t+u*Math.sin(m),p=r-u*Math.cos(m);o.push((0,a.jsx)("text",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(s({x:f,y:p},l),{children:c(d,e.faceType)}),d))}return(0,a.jsx)(a.Fragment,{children:o})};function h(e){return e*Math.PI/180}var g=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=r("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js");function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var w=g.createContext(new Date),j=function(e){var t,r=e.children,n=function(e){if(Array.isArray(e))return e}(t=(0,g.useState)(new Date))||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(c.push(r.value),2!==c.length);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return c}}(t,2)||function(e,t){if(e){if("string"==typeof e)return b(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=n[0],c=n[1],s=e.refreshInterval||1e3;return(0,y.A)(function(){c(new Date)},s),(0,a.jsx)(w.Provider,{value:o,children:r})},x=Object.defineProperty;!function(e,t){for(var r in t)x(e,r,{get:t[r],enumerable:!0})}({},{zeroPad2:function(){return v},zeroPad3:function(){return _}});var k=function(e,t){return String(e).padStart(t,"0")},v=function(e){return k(e,2)},_=function(e){return k(e,3)},O=function(e){var t=e.timezone,r=S(e.date,t);return(0,a.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:r})},S=function(e,t){var r=n.c9.fromJSDate(e).setZone(t),o=v(r.hour%12),c=v(r.minute),a=v(r.second),s=r.hour<12?"AM":"PM";return"".concat(o,":").concat(c,":").concat(a," ").concat(s," (").concat(t,")")}}}]);