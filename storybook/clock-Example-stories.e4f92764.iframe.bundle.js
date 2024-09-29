"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[4194],{"./stories/clock/Example.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>a,__namedExportsOrder:()=>c,default:()=>o});var n=r("../../packages/clock/dist/index.mjs"),s=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let o={title:"Base/Clock/Example",component:()=>/*#__PURE__*/s.createElement(n.C_,{refreshInterval:10},/*#__PURE__*/s.createElement(n.ec.Consumer,null,e=>/*#__PURE__*/s.createElement(s.Fragment,null,/*#__PURE__*/s.createElement(n.TX,{timezone:"Asia/Tokyo",date:e}),/*#__PURE__*/s.createElement(n.NX,{timezone:"Asia/Tokyo",date:e}),/*#__PURE__*/s.createElement(n.TX,{timezone:"America/New_York",date:e,step:"sweep",face:"roman"}),/*#__PURE__*/s.createElement(n.NX,{timezone:"America/New_York",date:e}))))},a={args:{}},c=["Default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...a.parameters?.docs?.source}}}},"../../packages/clock/dist/index.mjs":(e,t,r)=>{r.d(t,{TX:()=>l,C_:()=>j,ec:()=>g,NX:()=>v});var n=r("../../node_modules/.pnpm/luxon@3.5.0/node_modules/luxon/src/luxon.js"),s=e=>0===e?"12":`${e}`,o=e=>{switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return`${e}`},a=(e,t)=>{switch(t){case"arabic":return s(e);case"roman":return o(e)}},c=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},l=e=>{let{timezone:t,date:r}=e,{width:s,height:o,bigHand:a,smallHand:l,secondHand:h,frame:p,step:k,face:f,centerPoint:g,hourLines:j,minuteLines:w}=function(e){let{width:t,height:r,step:n,face:s,bigHand:o,smallHand:a,secondHand:c,frame:l,centerPoint:u,hourLines:d,minuteLines:m}={...i,...e};return{width:t,height:r,step:n,face:s,bigHand:{...i.bigHand,...o},smallHand:{...i.smallHand,...a},secondHand:{...i.secondHand,...c},frame:{...i.frame,...l},centerPoint:{...i.centerPoint,...u},hourLines:{...i.hourLines,...d},minuteLines:{...i.minuteLines,...m}}}(e),{hour:_,minute:b,second:y}=function(e,t,r){switch(r){case"tick":return function(e,t){let r=n.c9.fromJSDate(e).setZone(t),s=r.minute/12|0;return{hour:r.hour+s/5,minute:r.minute,second:r.second}}(e,t);case"sweep":return function(e,t){let r=n.c9.fromJSDate(e).setZone(t);return{hour:r.hour+r.minute/60+r.second/3600,minute:r.minute+r.second/60,second:r.second+r.millisecond/1e3}}(e,t)}}(r,t,k),v=s/2,z=o/2;return/* @__PURE__ */(0,c.jsx)("div",{style:{width:`${s}px`,height:`${o}px`},children:/* @__PURE__ */(0,c.jsxs)("svg",{viewBox:`0 0 ${s} ${o}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",width:s,height:o,children:[/* @__PURE__ */(0,c.jsx)("title",{children:`${_}:${b}:${y}`}),/* @__PURE__ */(0,c.jsx)("circle",{cx:v,cy:z,r:p.size,stroke:p.color,strokeWidth:p.width,fill:p.backgroundColor}),/* @__PURE__ */(0,c.jsx)("circle",{cx:v,cy:z,r:g.size,stroke:g.color,strokeWidth:g.size,fill:g.color}),/* @__PURE__ */(0,c.jsx)(d,{centerX:v,centerY:z,radius:p.size-j.length,...j}),/* @__PURE__ */(0,c.jsx)(m,{centerX:v,centerY:z,radius:p.size-w.length,...w}),/* @__PURE__ */(0,c.jsx)(x,{centerX:v,centerY:z,radius:p.size-w.length,faceType:f}),/* @__PURE__ */(0,c.jsx)(u,{centerX:v,centerY:z,degree:30*_,...a}),/* @__PURE__ */(0,c.jsx)(u,{centerX:v,centerY:z,degree:6*b,...l}),/* @__PURE__ */(0,c.jsx)(u,{centerX:v,centerY:z,degree:6*y,...h})]})})},u=e=>{let{centerX:t,centerY:r,degree:n,length:s,width:o,color:a}=e,i=p(n),l=t+s*Math.sin(i),u=r-s*Math.cos(i);return/* @__PURE__ */(0,c.jsx)("line",{x1:t,y1:r,x2:l,y2:u,stroke:a,strokeWidth:o})},d=e=>{let{centerX:t,centerY:r,radius:n,width:s,color:o,length:a}=e;return/* @__PURE__ */(0,c.jsx)(h,{centerX:t,centerY:r,radius:n,length:a,count:12,width:s,color:o})},m=e=>{let{centerX:t,centerY:r,radius:n,width:s,color:o,length:a}=e;return/* @__PURE__ */(0,c.jsx)(h,{centerX:t,centerY:r,radius:n,length:a,count:60,width:s,color:o})},h=e=>{let{centerX:t,centerY:r,radius:n,length:s,count:o,width:a,color:i}=e,l=[];for(let e=0;e<o;e++){let u=p(360/o*e),d=t+n*Math.sin(u),m=r+n*Math.cos(u),h=d+s*Math.sin(u),x=m+s*Math.cos(u);l.push(/* @__PURE__ */(0,c.jsx)("line",{x1:d,y1:m,x2:h,y2:x,stroke:i,strokeWidth:a},e))}return/* @__PURE__ */(0,c.jsx)(c.Fragment,{children:l})},x=e=>{let{centerX:t,centerY:r,radius:n}=e,s=[],o=n/5,i=n-o,l={textAnchor:"middle",dominantBaseline:"central",fontSize:o,fontFamily:"monospace",fill:"black"};for(let n=0;n<12;n++){let o=p(30*n),u=t+i*Math.sin(o),d=r-i*Math.cos(o);s.push(/* @__PURE__ */(0,c.jsx)("text",{x:u,y:d,...l,children:a(n,e.faceType)},n))}return/* @__PURE__ */(0,c.jsx)(c.Fragment,{children:s})};function p(e){return e*Math.PI/180}var k=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=r("../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js"),g=/*#__PURE__*/k.createContext(/* @__PURE__ */new Date),j=e=>{let{children:t}=e,[r,n]=(0,k.useState)(/* @__PURE__ */new Date),s=e.refreshInterval||1e3;return(0,f.A)(()=>{n(/* @__PURE__ */new Date)},s),/* @__PURE__ */(0,c.jsx)(g.Provider,{value:r,children:t})},w=Object.defineProperty;((e,t)=>{for(var r in t)w(e,r,{get:t[r],enumerable:!0})})({},{zeroPad2:()=>b,zeroPad3:()=>y});var _=(e,t)=>String(e).padStart(t,"0"),b=e=>_(e,2),y=e=>_(e,3),v=e=>{let{timezone:t,date:r}=e,n=z(r,t);return/* @__PURE__ */(0,c.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:n})},z=(e,t)=>{let r=n.c9.fromJSDate(e).setZone(t),s=b(r.hour%12),o=b(r.minute),a=b(r.second),c=r.hour<12?"AM":"PM";return`${s}:${o}:${a} ${c} (${t})`}}}]);