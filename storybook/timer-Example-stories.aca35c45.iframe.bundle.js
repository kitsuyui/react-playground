"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[543],{"./stories/timer/Example.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>d,__namedExportsOrder:()=>m,default:()=>c}),n("../../packages/clock/dist/index.mjs"),n("../../packages/stopwatch/dist/index.mjs");var r=n("../../packages/timer/dist/index.mjs"),s=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),o=({onComplete:e})=>/* @__PURE__ */(0,s.jsx)(r.f9,{onComplete:e,children:/* @__PURE__ */(0,s.jsx)(r.PT.Consumer,{children:e=>/* @__PURE__ */(0,s.jsx)(r.le,{...e})})}),a=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var i=["id","volume","playbackRate","soundEnabled","interrupt","onload"];let u=function(e,t){var r,s=void 0===t?{}:t,o=s.volume,u=void 0===o?1:o,c=s.playbackRate,d=void 0===c?1:c,m=s.soundEnabled,p=void 0===m||m,h=s.interrupt,f=void 0!==h&&h,x=s.onload,j=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(s,i),v=a.useRef(null),g=a.useRef(!1),b=a.useState(null),w=b[0],k=b[1],_=a.useState(null),y=_[0],S=_[1],C=function(){"function"==typeof x&&x.call(this),g.current&&k(1e3*this.duration()),S(this)};r=function(){return n.e(582).then(n.t.bind(n,"../../node_modules/.pnpm/howler@2.2.4/node_modules/howler/dist/howler.js",23)).then(function(t){if(!g.current){var n;v.current=null!==(n=t.Howl)&&void 0!==n?n:t.default.Howl,g.current=!0,new v.current(l({src:Array.isArray(e)?e:[e],volume:u,rate:d,onload:C},j))}}),function(){g.current=!1}},(0,a.useEffect)(r,[]),a.useEffect(function(){v.current&&y&&S(new v.current(l({src:Array.isArray(e)?e:[e],volume:u,onload:C},j)))},[JSON.stringify(e)]),a.useEffect(function(){y&&(y.volume(u),y.rate(d))},[u,d]);var D=a.useCallback(function(e){void 0===e&&(e={}),y&&(p||e.forceSoundEnabled)&&(f&&y.stop(),e.playbackRate&&y.rate(e.playbackRate),y.play(e.id))},[y,p,f]),P=a.useCallback(function(e){y&&y.stop(e)},[y]),$=a.useCallback(function(e){y&&y.pause(e)},[y]);return[D,{sound:y,stop:P,pause:$,duration:w}]},c={title:"Base/Timer/Example",component:()=>{let[e]=u("/sound_effects/24.wav",{playbackRate:1});return /*#__PURE__*/a.createElement(o,{onComplete:()=>e()})}},d={args:{onComplete:()=>{}}},m=["Default"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {\n    onComplete: () => {\n      return;\n    }\n  }\n}",...d.parameters?.docs?.source}}}},"../../packages/clock/dist/index.mjs":(e,t,n)=>{n.d(t,{TX:()=>u,C_:()=>g,ec:()=>v,NX:()=>y});var r=n("../../node_modules/.pnpm/luxon@3.5.0/node_modules/luxon/src/luxon.js"),s=e=>0===e?"12":`${e}`,o=e=>{switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return`${e}`},a=(e,t)=>{switch(t){case"arabic":return s(e);case"roman":return o(e)}},l=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},u=e=>{let{timezone:t,date:n}=e,{width:s,height:o,bigHand:a,smallHand:u,secondHand:p,frame:f,step:x,face:j,centerPoint:v,hourLines:g,minuteLines:b}=function(e){let{width:t,height:n,step:r,face:s,bigHand:o,smallHand:a,secondHand:l,frame:u,centerPoint:c,hourLines:d,minuteLines:m}={...i,...e};return{width:t,height:n,step:r,face:s,bigHand:{...i.bigHand,...o},smallHand:{...i.smallHand,...a},secondHand:{...i.secondHand,...l},frame:{...i.frame,...u},centerPoint:{...i.centerPoint,...c},hourLines:{...i.hourLines,...d},minuteLines:{...i.minuteLines,...m}}}(e),{hour:w,minute:k,second:_}=function(e,t,n){switch(n){case"tick":return function(e,t){let n=r.c9.fromJSDate(e).setZone(t),s=n.minute/12|0;return{hour:n.hour+s/5,minute:n.minute,second:n.second}}(e,t);case"sweep":return function(e,t){let n=r.c9.fromJSDate(e).setZone(t);return{hour:n.hour+n.minute/60+n.second/3600,minute:n.minute+n.second/60,second:n.second+n.millisecond/1e3}}(e,t)}}(n,t,x),y=s/2,S=o/2;return/* @__PURE__ */(0,l.jsx)("div",{style:{width:`${s}px`,height:`${o}px`},children:/* @__PURE__ */(0,l.jsxs)("svg",{viewBox:`0 0 ${s} ${o}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",width:s,height:o,children:[/* @__PURE__ */(0,l.jsx)("title",{children:`${w}:${k}:${_}`}),/* @__PURE__ */(0,l.jsx)("circle",{cx:y,cy:S,r:f.size,stroke:f.color,strokeWidth:f.width,fill:f.backgroundColor}),/* @__PURE__ */(0,l.jsx)("circle",{cx:y,cy:S,r:v.size,stroke:v.color,strokeWidth:v.size,fill:v.color}),/* @__PURE__ */(0,l.jsx)(d,{centerX:y,centerY:S,radius:f.size-g.length,...g}),/* @__PURE__ */(0,l.jsx)(m,{centerX:y,centerY:S,radius:f.size-b.length,...b}),/* @__PURE__ */(0,l.jsx)(h,{centerX:y,centerY:S,radius:f.size-b.length,faceType:j}),/* @__PURE__ */(0,l.jsx)(c,{centerX:y,centerY:S,degree:30*w,...a}),/* @__PURE__ */(0,l.jsx)(c,{centerX:y,centerY:S,degree:6*k,...u}),/* @__PURE__ */(0,l.jsx)(c,{centerX:y,centerY:S,degree:6*_,...p})]})})},c=e=>{let{centerX:t,centerY:n,degree:r,length:s,width:o,color:a}=e,i=f(r),u=t+s*Math.sin(i),c=n-s*Math.cos(i);return/* @__PURE__ */(0,l.jsx)("line",{x1:t,y1:n,x2:u,y2:c,stroke:a,strokeWidth:o})},d=e=>{let{centerX:t,centerY:n,radius:r,width:s,color:o,length:a}=e;return/* @__PURE__ */(0,l.jsx)(p,{centerX:t,centerY:n,radius:r,length:a,count:12,width:s,color:o})},m=e=>{let{centerX:t,centerY:n,radius:r,width:s,color:o,length:a}=e;return/* @__PURE__ */(0,l.jsx)(p,{centerX:t,centerY:n,radius:r,length:a,count:60,width:s,color:o})},p=e=>{let{centerX:t,centerY:n,radius:r,length:s,count:o,width:a,color:i}=e,u=[];for(let e=0;e<o;e++){let c=f(360/o*e),d=t+r*Math.sin(c),m=n+r*Math.cos(c),p=d+s*Math.sin(c),h=m+s*Math.cos(c);u.push(/* @__PURE__ */(0,l.jsx)("line",{x1:d,y1:m,x2:p,y2:h,stroke:i,strokeWidth:a},e))}return/* @__PURE__ */(0,l.jsx)(l.Fragment,{children:u})},h=e=>{let{centerX:t,centerY:n,radius:r}=e,s=[],o=r/5,i=r-o,u={textAnchor:"middle",dominantBaseline:"central",fontSize:o,fontFamily:"monospace",fill:"black"};for(let r=0;r<12;r++){let o=f(30*r),c=t+i*Math.sin(o),d=n-i*Math.cos(o);s.push(/* @__PURE__ */(0,l.jsx)("text",{x:c,y:d,...u,children:a(r,e.faceType)},r))}return/* @__PURE__ */(0,l.jsx)(l.Fragment,{children:s})};function f(e){return e*Math.PI/180}var x=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),j=n("../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js"),v=/*#__PURE__*/x.createContext(/* @__PURE__ */new Date),g=e=>{let{children:t}=e,[n,r]=(0,x.useState)(/* @__PURE__ */new Date),s=e.refreshInterval||1e3;return(0,j.A)(()=>{r(/* @__PURE__ */new Date)},s),/* @__PURE__ */(0,l.jsx)(v.Provider,{value:n,children:t})},b=Object.defineProperty;((e,t)=>{for(var n in t)b(e,n,{get:t[n],enumerable:!0})})({},{zeroPad2:()=>k,zeroPad3:()=>_});var w=(e,t)=>String(e).padStart(t,"0"),k=e=>w(e,2),_=e=>w(e,3),y=e=>{let{timezone:t,date:n}=e,r=S(n,t);return/* @__PURE__ */(0,l.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:r})},S=(e,t)=>{let n=r.c9.fromJSDate(e).setZone(t),s=k(n.hour%12),o=k(n.minute),a=k(n.second),l=n.hour<12?"AM":"PM";return`${s}:${o}:${a} ${l} (${t})`}},"../../packages/stopwatch/dist/index.mjs":(e,t,n)=>{n.d(t,{zG:()=>u,pv:()=>f,TM:()=>m});var r=Object.defineProperty;((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})({},{zeroPad2:()=>o,zeroPad3:()=>a});var s=(e,t)=>String(e).padStart(t,"0"),o=e=>s(e,2),a=e=>s(e,3),l=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=e=>{let t=Math.floor(e/60);return`${o(t)}:${o(e%60|0)}.${a(e%1*1e3|0)}`},u=e=>{let{elapsedTime:t,running:n,toggle:r,reset:s}=e;return/* @__PURE__ */(0,l.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:/* @__PURE__ */(0,l.jsxs)("form",{children:[/* @__PURE__ */(0,l.jsx)("span",{children:i(t)}),/* @__PURE__ */(0,l.jsx)("br",{}),/* @__PURE__ */(0,l.jsx)("button",{type:"submit",name:"reset",onClick:e=>{e.preventDefault(),s()},children:"Reset"}),/* @__PURE__ */(0,l.jsx)("button",{type:"submit",onClick:e=>{e.preventDefault(),r()},children:n?"Stop":"Start"})]})})},c=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=n("../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js"),m=/*#__PURE__*/c.createContext({elapsedTime:0,running:!1,start(){},stop(){},toggle(){},reset(){}}),p=(e,t)=>(t.getTime()-e.getTime())/1e3,h=e=>p(e,/* @__PURE__ */new Date),f=e=>{let{children:t}=e,n=e=>{},r=e.onStart??n,s=e.onStop??n,o=e.onReset??n,[a,i]=(0,c.useState)(!1),[u,p]=(0,c.useState)(0),[f,x]=(0,c.useState)(0),[j,v]=(0,c.useState)(/* @__PURE__ */new Date),g=e.refreshInterval||10;(0,d.A)(()=>{a&&b()},g);let b=()=>{p(h(j))},w=()=>{x(f+u),p(0)},k=()=>{a||(r(new CustomEvent("start",{})),v(/* @__PURE__ */new Date),i(!0))},_=()=>{a&&(s(new CustomEvent("stop",{})),b(),i(!1),w())};return/* @__PURE__ */(0,l.jsx)(m.Provider,{value:{elapsedTime:u+f,running:a,toggle:()=>{a?_():k()},reset:()=>{a&&_(),o(new CustomEvent("reset",{})),p(0),x(0)},start:k,stop:_},children:t})}},"../../packages/timer/dist/index.mjs":(e,t,n)=>{n.d(t,{le:()=>u,f9:()=>h,PT:()=>m});var r=Object.defineProperty;((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})({},{zeroPad2:()=>o,zeroPad3:()=>a});var s=(e,t)=>String(e).padStart(t,"0"),o=e=>s(e,2),a=e=>s(e,3),l=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=e=>{let t=Math.floor(e/60);return`${o(t)}:${o(e%60|0)}.${a(e%1*1e3|0)}`},u=e=>{let{remaining:t,running:n,incrementTimerValue:r,toggle:s,reset:o}=e;return/* @__PURE__ */(0,l.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:/* @__PURE__ */(0,l.jsxs)("form",{children:[/* @__PURE__ */(0,l.jsx)("span",{children:i(t)}),/* @__PURE__ */(0,l.jsx)("br",{}),/* @__PURE__ */(0,l.jsx)("button",{type:"submit",name:"incrementMinute",onClick:e=>{e.preventDefault(),r(60)},children:"+分"}),/* @__PURE__ */(0,l.jsx)("button",{type:"submit",name:"incrementSecond",onClick:e=>{e.preventDefault(),r(1)},children:"+秒"}),/* @__PURE__ */(0,l.jsx)("br",{}),/* @__PURE__ */(0,l.jsx)("button",{type:"submit",name:"reset",onClick:e=>{e.preventDefault(),o()},children:"Reset"}),/* @__PURE__ */(0,l.jsx)("button",{type:"submit",onClick:e=>{e.preventDefault(),s()},children:n?"Stop":"Start"})]})})},c=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=n("../../node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js"),m=/*#__PURE__*/c.createContext({remaining:0,running:!1,start(){},stop(){},toggle(){},reset(){},incrementTimerValue(e){},setTimerValue(e){}}),p=e=>(e.getTime()-/* @__PURE__ */new Date().getTime())/1e3,h=e=>{let{children:t}=e,n=e=>{},r=e.onStart??n,s=e.onStop??n,o=e.onComplete??n,a=e.onReset??n,[i,u]=(0,c.useState)(!1),[h,f]=(0,c.useState)(/* @__PURE__ */new Date),[x,j]=(0,c.useState)(0),v=e.refreshInterval||10;(0,d.A)(()=>{g()},v);let g=()=>{if(i){let e=p(h);j(e),e<=0&&(j(0),u(!1),o(new CustomEvent("complete",{})))}},b=()=>{x<=0||i||(f(new Date(Date.now()+1e3*x)),u(!0),r(new CustomEvent("start",{})))},w=()=>{i&&(u(!1),s(new CustomEvent("stop",{})))};return/* @__PURE__ */(0,l.jsx)(m.Provider,{value:{remaining:x,running:i,toggle:()=>{i?w():b()},reset:()=>{i&&w(),j(0),a(new CustomEvent("reset",{}))},start:b,stop:w,setTimerValue(e){w(),j(e||0)},incrementTimerValue(e){w(),j(x+e)}},children:t})}}}]);