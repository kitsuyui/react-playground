(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[138,194],{"../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(e,n,t)=>{"use strict";t.d(n,{R:()=>c,x:()=>a});var o=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let r={},s=o.createContext(r);function c(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}},"./stories/clock/Introduction.mdx":(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>l}),t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var o=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),r=t("../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),s=t("../../node_modules/.pnpm/@storybook+blocks@8.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.2_@babel+pr_d2rickzfoa4squf36t7r67bkki/node_modules/@storybook/blocks/dist/index.mjs"),c=t("./stories/clock/Example.stories.tsx");function a(e){let n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"clock",children:"Clock"}),"\n","\n","\n",(0,o.jsx)(s.W8,{title:"Base/Clock/Introduction"}),"\n",(0,o.jsx)(s.Hl,{of:c.Default}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"Each component is published as a separate package."}),"\n",(0,o.jsx)(n.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-clock\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-clock\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-clock\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"Clock components consists of two parts:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The surface of the clock (AnalogClock, DigitalClock, etc.)"}),"\n",(0,o.jsx)(n.li,{children:"The state of the clock (ClockContainer, DateContext, etc.)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If you want to modify the appearance of the clock, you can use the surface of the clock.\nIf you want to change the state of the clock, you can use the state of the clock."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import {\n  AnalogClock,\n  ClockContainer,\n  DateContext,\n  DigitalClock,\n} from '@kitsuyui/react-clock'\nimport React from 'react'\n\nconst Clock = () => {\n  return (\n    <ClockContainer refreshInterval={10}>\n      <DateContext.Consumer>\n        {(date) => (\n          <>\n            <AnalogClock timezone=\"Asia/Tokyo\" date={date} />\n            <DigitalClock timezone=\"Asia/Tokyo\" date={date} />\n          </>\n        )}\n      </DateContext.Consumer>\n    </ClockContainer>\n  )\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ClockContainer"})," is a component that manages the state of the clock.\nThe ",(0,o.jsx)(n.code,{children:"refreshInterval"})," property is the interval at which the clock is updated.\n",(0,o.jsx)(n.code,{children:"AnalogClock"})," and ",(0,o.jsx)(n.code,{children:"DigitalClock"})," are components that display the clock. These components are independent of the state of the clock."]})]})}function l(e={}){let{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},"../../node_modules/.pnpm/@storybook+core@8.2.2/node_modules/@storybook/core/dist/components sync recursive":e=>{function n(e){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id="../../node_modules/.pnpm/@storybook+core@8.2.2/node_modules/@storybook/core/dist/components sync recursive",e.exports=n},"../../node_modules/.pnpm/@storybook+core@8.2.2/node_modules/@storybook/core/dist/theming sync recursive":e=>{function n(e){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id="../../node_modules/.pnpm/@storybook+core@8.2.2/node_modules/@storybook/core/dist/theming sync recursive",e.exports=n},"./stories/clock/Example.stories.tsx":(e,n,t)=>{"use strict";t.r(n),t.d(n,{Default:()=>c,__namedExportsOrder:()=>a,default:()=>s});var o=t("../../packages/clock/dist/index.mjs"),r=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let s={title:"Base/Clock/Example",component:()=>r.createElement(o.C_,{refreshInterval:10},r.createElement(o.ec.Consumer,null,e=>r.createElement(r.Fragment,null,r.createElement(o.TX,{timezone:"Asia/Tokyo",date:e}),r.createElement(o.NX,{timezone:"Asia/Tokyo",date:e}),r.createElement(o.TX,{timezone:"America/New_York",date:e,step:"sweep",face:"roman"}),r.createElement(o.NX,{timezone:"America/New_York",date:e}))))},c={args:{}},a=["Default"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...c.parameters?.docs?.source}}}},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":e=>{function n(e){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",e.exports=n},"../../packages/clock/dist/index.mjs":(e,n,t)=>{"use strict";t.d(n,{TX:()=>i,C_:()=>_,ec:()=>j,NX:()=>w});var o=t("../../node_modules/.pnpm/luxon@3.4.4/node_modules/luxon/src/luxon.js"),r=e=>0===e?"12":`${e}`,s=e=>{switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return`${e}`},c=(e,n)=>{switch(n){case"arabic":return r(e);case"roman":return s(e)}},a=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},i=e=>{let{timezone:n,date:t}=e,{width:r,height:s,bigHand:c,smallHand:i,secondHand:h,frame:k,step:x,face:f,centerPoint:j,hourLines:_,minuteLines:y}=function(e){let{width:n,height:t,step:o,face:r,bigHand:s,smallHand:c,secondHand:a,frame:i,centerPoint:d,hourLines:u,minuteLines:m}={...l,...e};return{width:n,height:t,step:o,face:r,bigHand:{...l.bigHand,...s},smallHand:{...l.smallHand,...c},secondHand:{...l.secondHand,...a},frame:{...l.frame,...i},centerPoint:{...l.centerPoint,...d},hourLines:{...l.hourLines,...u},minuteLines:{...l.minuteLines,...m}}}(e),{hour:g,minute:C,second:b}=function(e,n,t){switch(t){case"tick":return function(e,n){let t=o.c9.fromJSDate(e).setZone(n),r=t.minute/12|0;return{hour:t.hour+r/5,minute:t.minute,second:t.second}}(e,n);case"sweep":return function(e,n){let t=o.c9.fromJSDate(e).setZone(n);return{hour:t.hour+t.minute/60+t.second/3600,minute:t.minute+t.second/60,second:t.second+t.millisecond/1e3}}(e,n)}}(t,n,x),w=r/2,v=s/2;return(0,a.jsx)("div",{style:{width:`${r}px`,height:`${s}px`},children:(0,a.jsxs)("svg",{viewBox:`0 0 ${r} ${s}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",width:r,height:s,children:[(0,a.jsx)("title",{children:`${g}:${C}:${b}`}),(0,a.jsx)("circle",{cx:w,cy:v,r:k.size,stroke:k.color,strokeWidth:k.width,fill:k.backgroundColor}),(0,a.jsx)("circle",{cx:w,cy:v,r:j.size,stroke:j.color,strokeWidth:j.size,fill:j.color}),(0,a.jsx)(u,{centerX:w,centerY:v,radius:k.size-_.length,..._}),(0,a.jsx)(m,{centerX:w,centerY:v,radius:k.size-y.length,...y}),(0,a.jsx)(p,{centerX:w,centerY:v,radius:k.size-y.length,faceType:f}),(0,a.jsx)(d,{centerX:w,centerY:v,degree:30*g,...c}),(0,a.jsx)(d,{centerX:w,centerY:v,degree:6*C,...i}),(0,a.jsx)(d,{centerX:w,centerY:v,degree:6*b,...h})]})})},d=e=>{let{centerX:n,centerY:t,degree:o,length:r,width:s,color:c}=e,l=k(o),i=n+r*Math.sin(l),d=t-r*Math.cos(l);return(0,a.jsx)("line",{x1:n,y1:t,x2:i,y2:d,stroke:c,strokeWidth:s})},u=e=>{let{centerX:n,centerY:t,radius:o,width:r,color:s,length:c}=e;return(0,a.jsx)(h,{centerX:n,centerY:t,radius:o,length:c,count:12,width:r,color:s})},m=e=>{let{centerX:n,centerY:t,radius:o,width:r,color:s,length:c}=e;return(0,a.jsx)(h,{centerX:n,centerY:t,radius:o,length:c,count:60,width:r,color:s})},h=e=>{let{centerX:n,centerY:t,radius:o,length:r,count:s,width:c,color:l}=e,i=[];for(let e=0;e<s;e++){let d=k(360/s*e),u=n+o*Math.sin(d),m=t+o*Math.cos(d),h=u+r*Math.sin(d),p=m+r*Math.cos(d);i.push((0,a.jsx)("line",{x1:u,y1:m,x2:h,y2:p,stroke:l,strokeWidth:c},e))}return(0,a.jsx)(a.Fragment,{children:i})},p=e=>{let{centerX:n,centerY:t,radius:o}=e,r=[],s=o/5,l=o-s,i={textAnchor:"middle",dominantBaseline:"central",fontSize:s,fontFamily:"monospace",fill:"black"};for(let o=0;o<12;o++){let s=k(30*o),d=n+l*Math.sin(s),u=t-l*Math.cos(s);r.push((0,a.jsx)("text",{x:d,y:u,...i,children:c(o,e.faceType)},o))}return(0,a.jsx)(a.Fragment,{children:r})};function k(e){return e*Math.PI/180}var x=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=t("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js"),j=x.createContext(new Date),_=e=>{let{children:n}=e,[t,o]=(0,x.useState)(new Date),r=e.refreshInterval||1e3;return(0,f.A)(()=>{o(new Date)},r),(0,a.jsx)(j.Provider,{value:t,children:n})},y=Object.defineProperty;((e,n)=>{for(var t in n)y(e,t,{get:n[t],enumerable:!0})})({},{zeroPad2:()=>C,zeroPad3:()=>b});var g=(e,n)=>String(e).padStart(n,"0"),C=e=>g(e,2),b=e=>g(e,3),w=e=>{let{timezone:n,date:t}=e,o=v(t,n);return(0,a.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:o})},v=(e,n)=>{let t=o.c9.fromJSDate(e).setZone(n),r=C(t.hour%12),s=C(t.minute),c=C(t.second),a=t.hour<12?"AM":"PM";return`${r}:${s}:${c} ${a} (${n})`}}}]);