"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[907],{"../../packages/clock/dist/index.mjs":(e,t,n)=>{n.d(t,{TX:()=>c,C_:()=>g,ec:()=>f,NX:()=>S});var r=n("../../node_modules/.pnpm/luxon@3.5.0/node_modules/luxon/src/luxon.js"),s=e=>0===e?"12":`${e}`,a=e=>{switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return`${e}`},o=(e,t)=>{switch(t){case"arabic":return s(e);case"roman":return a(e)}},l=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},c=e=>{let{timezone:t,date:n}=e,{width:s,height:a,bigHand:o,smallHand:c,secondHand:h,frame:p,step:j,face:b,centerPoint:f,hourLines:g,minuteLines:v}=function(e){let{width:t,height:n,step:r,face:s,bigHand:a,smallHand:o,secondHand:l,frame:c,centerPoint:d,hourLines:u,minuteLines:m}={...i,...e};return{width:t,height:n,step:r,face:s,bigHand:{...i.bigHand,...a},smallHand:{...i.smallHand,...o},secondHand:{...i.secondHand,...l},frame:{...i.frame,...c},centerPoint:{...i.centerPoint,...d},hourLines:{...i.hourLines,...u},minuteLines:{...i.minuteLines,...m}}}(e),{hour:k,minute:_,second:w}=function(e,t,n){switch(n){case"tick":return function(e,t){let n=r.c9.fromJSDate(e).setZone(t),s=n.minute/12|0;return{hour:n.hour+s/5,minute:n.minute,second:n.second}}(e,t);case"sweep":return function(e,t){let n=r.c9.fromJSDate(e).setZone(t);return{hour:n.hour+n.minute/60+n.second/3600,minute:n.minute+n.second/60,second:n.second+n.millisecond/1e3}}(e,t)}}(n,t,j),S=s/2,C=a/2;return/* @__PURE__ */(0,l.jsx)("div",{style:{width:`${s}px`,height:`${a}px`},children:/* @__PURE__ */(0,l.jsxs)("svg",{viewBox:`0 0 ${s} ${a}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",width:s,height:a,children:[/* @__PURE__ */(0,l.jsx)("title",{children:`${k}:${_}:${w}`}),/* @__PURE__ */(0,l.jsx)("circle",{cx:S,cy:C,r:p.size,stroke:p.color,strokeWidth:p.width,fill:p.backgroundColor}),/* @__PURE__ */(0,l.jsx)("circle",{cx:S,cy:C,r:f.size,stroke:f.color,strokeWidth:f.size,fill:f.color}),/* @__PURE__ */(0,l.jsx)(u,{centerX:S,centerY:C,radius:p.size-g.length,...g}),/* @__PURE__ */(0,l.jsx)(m,{centerX:S,centerY:C,radius:p.size-v.length,...v}),/* @__PURE__ */(0,l.jsx)(x,{centerX:S,centerY:C,radius:p.size-v.length,faceType:b}),/* @__PURE__ */(0,l.jsx)(d,{centerX:S,centerY:C,degree:30*k,...o}),/* @__PURE__ */(0,l.jsx)(d,{centerX:S,centerY:C,degree:6*_,...c}),/* @__PURE__ */(0,l.jsx)(d,{centerX:S,centerY:C,degree:6*w,...h})]})})},d=e=>{let{centerX:t,centerY:n,degree:r,length:s,width:a,color:o}=e,i=p(r),c=t+s*Math.sin(i),d=n-s*Math.cos(i);return/* @__PURE__ */(0,l.jsx)("line",{x1:t,y1:n,x2:c,y2:d,stroke:o,strokeWidth:a})},u=e=>{let{centerX:t,centerY:n,radius:r,width:s,color:a,length:o}=e;return/* @__PURE__ */(0,l.jsx)(h,{centerX:t,centerY:n,radius:r,length:o,count:12,width:s,color:a})},m=e=>{let{centerX:t,centerY:n,radius:r,width:s,color:a,length:o}=e;return/* @__PURE__ */(0,l.jsx)(h,{centerX:t,centerY:n,radius:r,length:o,count:60,width:s,color:a})},h=e=>{let{centerX:t,centerY:n,radius:r,length:s,count:a,width:o,color:i}=e,c=[];for(let e=0;e<a;e++){let d=p(360/a*e),u=t+r*Math.sin(d),m=n+r*Math.cos(d),h=u+s*Math.sin(d),x=m+s*Math.cos(d);c.push(/* @__PURE__ */(0,l.jsx)("line",{x1:u,y1:m,x2:h,y2:x,stroke:i,strokeWidth:o},e))}return/* @__PURE__ */(0,l.jsx)(l.Fragment,{children:c})},x=e=>{let{centerX:t,centerY:n,radius:r}=e,s=[],a=r/5,i=r-a,c={textAnchor:"middle",dominantBaseline:"central",fontSize:a,fontFamily:"monospace",fill:"black"};for(let r=0;r<12;r++){let a=p(30*r),d=t+i*Math.sin(a),u=n-i*Math.cos(a);s.push(/* @__PURE__ */(0,l.jsx)("text",{x:d,y:u,...c,children:o(r,e.faceType)},r))}return/* @__PURE__ */(0,l.jsx)(l.Fragment,{children:s})};function p(e){return e*Math.PI/180}var j=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=n("../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js"),f=/*#__PURE__*/j.createContext(/* @__PURE__ */new Date),g=e=>{let{children:t}=e,[n,r]=(0,j.useState)(/* @__PURE__ */new Date),s=e.refreshInterval||1e3;return(0,b.A)(()=>{r(/* @__PURE__ */new Date)},s),/* @__PURE__ */(0,l.jsx)(f.Provider,{value:n,children:t})},v=Object.defineProperty;((e,t)=>{for(var n in t)v(e,n,{get:t[n],enumerable:!0})})({},{zeroPad2:()=>_,zeroPad3:()=>w});var k=(e,t)=>String(e).padStart(t,"0"),_=e=>k(e,2),w=e=>k(e,3),S=e=>{let{timezone:t,date:n}=e,r=C(n,t);return/* @__PURE__ */(0,l.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:r})},C=(e,t)=>{let n=r.c9.fromJSDate(e).setZone(t),s=_(n.hour%12),a=_(n.minute),o=_(n.second),l=n.hour<12?"AM":"PM";return`${s}:${a}:${o} ${l} (${t})`}},"../../packages/stopwatch/dist/index.mjs":(e,t,n)=>{n.d(t,{zG:()=>c,pv:()=>p,TM:()=>m});var r=Object.defineProperty;((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})({},{zeroPad2:()=>a,zeroPad3:()=>o});var s=(e,t)=>String(e).padStart(t,"0"),a=e=>s(e,2),o=e=>s(e,3),l=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=e=>{let t=Math.floor(e/60);return`${a(t)}:${a(e%60|0)}.${o(e%1*1e3|0)}`},c=e=>{let{elapsedTime:t,running:n,toggle:r,reset:s}=e;return/* @__PURE__ */(0,l.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:/* @__PURE__ */(0,l.jsxs)("form",{children:[/* @__PURE__ */(0,l.jsx)("span",{children:i(t)}),/* @__PURE__ */(0,l.jsx)("br",{}),/* @__PURE__ */(0,l.jsx)("button",{type:"submit",name:"reset",onClick:e=>{e.preventDefault(),s()},children:"Reset"}),/* @__PURE__ */(0,l.jsx)("button",{type:"submit",onClick:e=>{e.preventDefault(),r()},children:n?"Stop":"Start"})]})})},d=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=n("../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js"),m=/*#__PURE__*/d.createContext({elapsedTime:0,running:!1,start(){},stop(){},toggle(){},reset(){}}),h=(e,t)=>(t.getTime()-e.getTime())/1e3,x=e=>h(e,/* @__PURE__ */new Date),p=e=>{let{children:t}=e,n=e=>{},r=e.onStart??n,s=e.onStop??n,a=e.onReset??n,[o,i]=(0,d.useState)(!1),[c,h]=(0,d.useState)(0),[p,j]=(0,d.useState)(0),[b,f]=(0,d.useState)(/* @__PURE__ */new Date),g=e.refreshInterval||10;(0,u.A)(()=>{o&&v()},g);let v=()=>{h(x(b))},k=()=>{j(p+c),h(0)},_=()=>{o||(r(new CustomEvent("start",{})),f(/* @__PURE__ */new Date),i(!0))},w=()=>{o&&(s(new CustomEvent("stop",{})),v(),i(!1),k())};return/* @__PURE__ */(0,l.jsx)(m.Provider,{value:{elapsedTime:c+p,running:o,toggle:()=>{o?w():_()},reset:()=>{o&&w(),a(new CustomEvent("reset",{})),h(0),j(0)},start:_,stop:w},children:t})}},"../../packages/style-bulma/dist/index.mjs":(e,t,n)=>{n.d(t,{zD:()=>o,eM:()=>d,M4:()=>j});var r=n("../../packages/clock/dist/index.mjs");n("../../node_modules/.pnpm/bulma@1.0.2/node_modules/bulma/css/bulma.css");var s=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),a=e=>{let{date:t,timezone:n}=e,a=t.toLocaleTimeString("ja-JP",{timeZone:n,hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});return/* @__PURE__ */(0,s.jsx)("div",{className:"card",children:/* @__PURE__ */(0,s.jsxs)("div",{className:"card-content",children:[/* @__PURE__ */(0,s.jsx)(r.TX,{...e}),/* @__PURE__ */(0,s.jsx)("p",{className:"title is-family-monospace",children:a})]})})},o=({timezone:e,refreshInterval:t=10})=>{let n=e||Intl.DateTimeFormat().resolvedOptions().timeZone;return/* @__PURE__ */(0,s.jsx)(r.C_,{refreshInterval:t,children:/* @__PURE__ */(0,s.jsx)(r.ec.Consumer,{children:e=>/* @__PURE__ */(0,s.jsx)(s.Fragment,{children:/* @__PURE__ */(0,s.jsx)(a,{timezone:n,date:e})})})})},l=e=>{let t=Math.floor(e/3600),n=e-3600*t,r=Math.floor(n/60),s=String(t).padStart(2,"0"),a=String(r).padStart(2,"0"),o=String(n%60|0).padStart(2,"0"),l=String(n%1*1e3|0).padStart(3,"0");return`${s}:${a}:${o}.${l}`},i=n("../../packages/stopwatch/dist/index.mjs"),c=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=()=>/* @__PURE__ */(0,s.jsx)(i.pv,{children:/* @__PURE__ */(0,s.jsx)(i.TM.Consumer,{children:e=>/* @__PURE__ */(0,s.jsx)(u,{...e})})}),u=e=>{let{running:t,elapsedTime:n,reset:r,toggle:a}=e,o=l(n);return/* @__PURE__ */(0,s.jsxs)("div",{className:"card",children:[/* @__PURE__ */(0,s.jsx)("div",{className:"card-content",children:/* @__PURE__ */(0,s.jsx)("p",{className:"title is-family-monospace has-text-centered",children:o})}),/* @__PURE__ */(0,s.jsxs)("footer",{className:"card-footer",children:[/* @__PURE__ */(0,s.jsx)(m,{onClick:r,remaining:n}),/* @__PURE__ */(0,s.jsx)(h,{running:t,toggle:a})]})]})},m=e=>{let{onClick:t,remaining:n}=e;return/* @__PURE__ */(0,s.jsx)(x,{label:"Reset",onClick:t,disabled:0===n})},h=e=>{let{running:t,toggle:n}=e;return/* @__PURE__ */(0,s.jsx)(x,{label:t?"Stop":"Start",onClick:n,disabled:!1})},x=e=>{let{label:t,onClick:n,disabled:r}=e,a=(0,c.useCallback)(e=>{e.preventDefault(),n()},[n]);return/* @__PURE__ */(0,s.jsx)("button",{className:"card-footer-item is-clickable is-button",onClick:a,type:"button",disabled:r,children:t})},p=n("../../packages/timer/dist/index.mjs"),j=({onComplete:e})=>/* @__PURE__ */(0,s.jsx)(p.f9,{onComplete:e,children:/* @__PURE__ */(0,s.jsx)(p.PT.Consumer,{children:e=>/* @__PURE__ */(0,s.jsx)(b,{...e})})}),b=e=>{let{remaining:t,running:n}=e,{reset:r,toggle:a,incrementTimerValue:o}=e,i=l(t);return/* @__PURE__ */(0,s.jsxs)("div",{className:"card",children:[/* @__PURE__ */(0,s.jsx)("div",{className:"card-content",children:/* @__PURE__ */(0,s.jsx)("p",{className:"title is-family-monospace has-text-centered",children:i})}),/* @__PURE__ */(0,s.jsxs)("footer",{className:"card-footer",children:[/* @__PURE__ */(0,s.jsx)(f,{label:"+1h",value:3600,onClick:o}),/* @__PURE__ */(0,s.jsx)(f,{label:"+1m",value:60,onClick:o}),/* @__PURE__ */(0,s.jsx)(f,{label:"+1s",value:1,onClick:o}),/* @__PURE__ */(0,s.jsx)(v,{onClick:r,remaining:t}),/* @__PURE__ */(0,s.jsx)(g,{running:n,toggle:a,remaining:t})]})]})},f=e=>{let{label:t,value:n,onClick:r}=e,a=(0,c.useCallback)(()=>{r(n)},[n,r]);return/* @__PURE__ */(0,s.jsx)(k,{label:t,onClick:a,disabled:!1})},g=e=>{let{running:t,toggle:n,remaining:r}=e;return/* @__PURE__ */(0,s.jsx)(k,{label:t?"Stop":"Start",onClick:n,disabled:0===r})},v=e=>{let{onClick:t,remaining:n}=e;return/* @__PURE__ */(0,s.jsx)(k,{label:"Reset",onClick:t,disabled:0===n})},k=e=>{let{label:t,onClick:n,disabled:r}=e,a=(0,c.useCallback)(e=>{e.preventDefault(),n()},[n]);return/* @__PURE__ */(0,s.jsx)("span",{className:"card-footer-item",children:/* @__PURE__ */(0,s.jsx)("button",{type:"button",className:"is-button",onClick:a,disabled:r,children:t})})}},"../../packages/timer/dist/index.mjs":(e,t,n)=>{n.d(t,{le:()=>c,f9:()=>x,PT:()=>m});var r=Object.defineProperty;((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})({},{zeroPad2:()=>a,zeroPad3:()=>o});var s=(e,t)=>String(e).padStart(t,"0"),a=e=>s(e,2),o=e=>s(e,3),l=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=e=>{let t=Math.floor(e/60);return`${a(t)}:${a(e%60|0)}.${o(e%1*1e3|0)}`},c=e=>{let{remaining:t,running:n,incrementTimerValue:r,toggle:s,reset:a}=e;return/* @__PURE__ */(0,l.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:/* @__PURE__ */(0,l.jsxs)("form",{children:[/* @__PURE__ */(0,l.jsx)("span",{children:i(t)}),/* @__PURE__ */(0,l.jsx)("br",{}),/* @__PURE__ */(0,l.jsx)("button",{type:"submit",name:"incrementMinute",onClick:e=>{e.preventDefault(),r(60)},children:"+分"}),/* @__PURE__ */(0,l.jsx)("button",{type:"submit",name:"incrementSecond",onClick:e=>{e.preventDefault(),r(1)},children:"+秒"}),/* @__PURE__ */(0,l.jsx)("br",{}),/* @__PURE__ */(0,l.jsx)("button",{type:"submit",name:"reset",onClick:e=>{e.preventDefault(),a()},children:"Reset"}),/* @__PURE__ */(0,l.jsx)("button",{type:"submit",onClick:e=>{e.preventDefault(),s()},children:n?"Stop":"Start"})]})})},d=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=n("../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js"),m=/*#__PURE__*/d.createContext({remaining:0,running:!1,start(){},stop(){},toggle(){},reset(){},incrementTimerValue(e){},setTimerValue(e){}}),h=e=>(e.getTime()-/* @__PURE__ */new Date().getTime())/1e3,x=e=>{let{children:t}=e,n=e=>{},r=e.onStart??n,s=e.onStop??n,a=e.onComplete??n,o=e.onReset??n,[i,c]=(0,d.useState)(!1),[x,p]=(0,d.useState)(/* @__PURE__ */new Date),[j,b]=(0,d.useState)(0),f=e.refreshInterval||10;(0,u.A)(()=>{g()},f);let g=()=>{if(i){let e=h(x);b(e),e<=0&&(b(0),c(!1),a(new CustomEvent("complete",{})))}},v=()=>{j<=0||i||(p(new Date(Date.now()+1e3*j)),c(!0),r(new CustomEvent("start",{})))},k=()=>{i&&(c(!1),s(new CustomEvent("stop",{})))};return/* @__PURE__ */(0,l.jsx)(m.Provider,{value:{remaining:j,running:i,toggle:()=>{i?k():v()},reset:()=>{i&&k(),b(0),o(new CustomEvent("reset",{}))},start:v,stop:k,setTimerValue(e){k(),b(e||0)},incrementTimerValue(e){k(),b(j+e)}},children:t})}}}]);