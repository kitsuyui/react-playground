"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[2488,2543,7158],{"./stories/clock/Analog.stories.tsx":(e,r,t)=>{t.r(r),t.d(r,{Default:()=>s,Roman:()=>o,Sweep:()=>a,Tokyo:()=>c,__namedExportsOrder:()=>i,default:()=>n});let n={title:"Base/Clock/Analog",component:t("../../packages/clock/dist/index.mjs").TX},s={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"UTC",face:"arabic",step:"tick"}},o={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"UTC",face:"roman",step:"tick"}},a={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"UTC",face:"arabic",step:"sweep"}},c={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"Asia/Tokyo",face:"arabic",step:"tick"}},i=["Default","Roman","Sweep","Tokyo"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'UTC',\n    face: 'arabic',\n    step: 'tick'\n  }\n}",...s.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'UTC',\n    face: 'roman',\n    step: 'tick'\n  }\n}",...o.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'UTC',\n    face: 'arabic',\n    step: 'sweep'\n  }\n}",...a.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'Asia/Tokyo',\n    face: 'arabic',\n    step: 'tick'\n  }\n}",...c.parameters?.docs?.source}}}},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,r,t)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,o={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,n)&&!i.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:d,ref:l,props:o,_owner:c.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,r,t)=>{e.exports=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/clock/dist/index.mjs":(e,r,t)=>{t.d(r,{TX:()=>d,C_:()=>g,ec:()=>_,NX:()=>T});var n=t("../../node_modules/.pnpm/luxon@3.5.0/node_modules/luxon/src/luxon.js"),s=e=>0===e?"12":`${e}`,o=e=>{switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return`${e}`},a=(e,r)=>{switch(r){case"arabic":return s(e);case"roman":return o(e)}},c=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},d=e=>{let{timezone:r,date:t}=e,{width:s,height:o,bigHand:a,smallHand:d,secondHand:p,frame:f,step:k,face:x,centerPoint:_,hourLines:g,minuteLines:w}=function(e){let{width:r,height:t,step:n,face:s,bigHand:o,smallHand:a,secondHand:c,frame:d,centerPoint:l,hourLines:u,minuteLines:m}={...i,...e};return{width:r,height:t,step:n,face:s,bigHand:{...i.bigHand,...o},smallHand:{...i.smallHand,...a},secondHand:{...i.secondHand,...c},frame:{...i.frame,...d},centerPoint:{...i.centerPoint,...l},hourLines:{...i.hourLines,...u},minuteLines:{...i.minuteLines,...m}}}(e),{hour:j,minute:y,second:b}=function(e,r,t){switch(t){case"tick":return function(e,r){let t=n.c9.fromJSDate(e).setZone(r),s=t.minute/12|0;return{hour:t.hour+s/5,minute:t.minute,second:t.second}}(e,r);case"sweep":return function(e,r){let t=n.c9.fromJSDate(e).setZone(r);return{hour:t.hour+t.minute/60+t.second/3600,minute:t.minute+t.second/60,second:t.second+t.millisecond/1e3}}(e,r)}}(t,r,k),T=s/2,v=o/2;return/* @__PURE__ */(0,c.jsx)("div",{style:{width:`${s}px`,height:`${o}px`},children:/* @__PURE__ */(0,c.jsxs)("svg",{viewBox:`0 0 ${s} ${o}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",width:s,height:o,children:[/* @__PURE__ */(0,c.jsx)("title",{children:`${j}:${y}:${b}`}),/* @__PURE__ */(0,c.jsx)("circle",{cx:T,cy:v,r:f.size,stroke:f.color,strokeWidth:f.width,fill:f.backgroundColor}),/* @__PURE__ */(0,c.jsx)("circle",{cx:T,cy:v,r:_.size,stroke:_.color,strokeWidth:_.size,fill:_.color}),/* @__PURE__ */(0,c.jsx)(u,{centerX:T,centerY:v,radius:f.size-g.length,...g}),/* @__PURE__ */(0,c.jsx)(m,{centerX:T,centerY:v,radius:f.size-w.length,...w}),/* @__PURE__ */(0,c.jsx)(h,{centerX:T,centerY:v,radius:f.size-w.length,faceType:x}),/* @__PURE__ */(0,c.jsx)(l,{centerX:T,centerY:v,degree:30*j,...a}),/* @__PURE__ */(0,c.jsx)(l,{centerX:T,centerY:v,degree:6*y,...d}),/* @__PURE__ */(0,c.jsx)(l,{centerX:T,centerY:v,degree:6*b,...p})]})})},l=e=>{let{centerX:r,centerY:t,degree:n,length:s,width:o,color:a}=e,i=f(n),d=r+s*Math.sin(i),l=t-s*Math.cos(i);return/* @__PURE__ */(0,c.jsx)("line",{x1:r,y1:t,x2:d,y2:l,stroke:a,strokeWidth:o})},u=e=>{let{centerX:r,centerY:t,radius:n,width:s,color:o,length:a}=e;return/* @__PURE__ */(0,c.jsx)(p,{centerX:r,centerY:t,radius:n,length:a,count:12,width:s,color:o})},m=e=>{let{centerX:r,centerY:t,radius:n,width:s,color:o,length:a}=e;return/* @__PURE__ */(0,c.jsx)(p,{centerX:r,centerY:t,radius:n,length:a,count:60,width:s,color:o})},p=e=>{let{centerX:r,centerY:t,radius:n,length:s,count:o,width:a,color:i}=e,d=[];for(let e=0;e<o;e++){let l=f(360/o*e),u=r+n*Math.sin(l),m=t+n*Math.cos(l),p=u+s*Math.sin(l),h=m+s*Math.cos(l);d.push(/* @__PURE__ */(0,c.jsx)("line",{x1:u,y1:m,x2:p,y2:h,stroke:i,strokeWidth:a},e))}return/* @__PURE__ */(0,c.jsx)(c.Fragment,{children:d})},h=e=>{let{centerX:r,centerY:t,radius:n}=e,s=[],o=n/5,i=n-o,d={textAnchor:"middle",dominantBaseline:"central",fontSize:o,fontFamily:"monospace",fill:"black"};for(let n=0;n<12;n++){let o=f(30*n),l=r+i*Math.sin(o),u=t-i*Math.cos(o);s.push(/* @__PURE__ */(0,c.jsx)("text",{x:l,y:u,...d,children:a(n,e.faceType)},n))}return/* @__PURE__ */(0,c.jsx)(c.Fragment,{children:s})};function f(e){return e*Math.PI/180}var k=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),x=t("../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js"),_=/*#__PURE__*/k.createContext(/* @__PURE__ */new Date),g=e=>{let{children:r}=e,[t,n]=(0,k.useState)(/* @__PURE__ */new Date),s=e.refreshInterval||1e3;return(0,x.A)(()=>{n(/* @__PURE__ */new Date)},s),/* @__PURE__ */(0,c.jsx)(_.Provider,{value:t,children:r})},w=Object.defineProperty;((e,r)=>{for(var t in r)w(e,t,{get:r[t],enumerable:!0})})({},{zeroPad2:()=>y,zeroPad3:()=>b});var j=(e,r)=>String(e).padStart(r,"0"),y=e=>j(e,2),b=e=>j(e,3),T=e=>{let{timezone:r,date:t}=e,n=v(t,r);return/* @__PURE__ */(0,c.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:n})},v=(e,r)=>{let t=n.c9.fromJSDate(e).setZone(r),s=y(t.hour%12),o=y(t.minute),a=y(t.second),c=t.hour<12?"AM":"PM";return`${s}:${o}:${a} ${c} (${r})`}}}]);