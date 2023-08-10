"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[340,163],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(e,t,n)=>{n.d(t,{NF:()=>c,Zo:()=>a,ah:()=>i,pC:()=>o});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=r.createContext({});function c(e){return function(t){let n=i(t.components);return r.createElement(e,{...t,allComponents:n})}}function i(e){let t=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let s={};function a({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:c},t)}},"./stories/Welcome.mdx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=n("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),i=n("../../node_modules/.pnpm/@storybook+blocks@7.0.17_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),s=n("./stories/clock/Example.stories.tsx");function a(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},(0,c.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"welcome",children:"Welcome"}),"\n","\n","\n",(0,o.jsx)(i.Xz,{of:s.Default}),"\n",(0,o.jsxs)(t.p,{children:["This is a collection of React components by ",(0,o.jsx)(t.a,{href:"https://github.com/kitsuyui",target:"_blank",rel:"nofollow noopener noreferrer",children:"Kitsuyui"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-clock @kitsuyui/react-stopwatch @kitsuyui/react-timer\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.p,{children:"Clock, Stopwatch, Timer, etc. change their state depending on the time.\nTo separate the change of the state and the representation of the UI, I use React Context.\nFor example, the following code is a clock that displays the current time in Tokyo."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import {\n  AnalogClock,\n  ClockContainer,\n  DateContext,\n  DigitalClock,\n} from '@kitsuyui/react-clock'\nimport React from 'react'\n\nconst Clock = () => {\n  return (\n    <ClockContainer refreshInterval={10}>\n      <DateContext.Consumer>\n        {(date) => (\n          <>\n            <AnalogClock timezone=\"Asia/Tokyo\" date={date} />\n            <DigitalClock timezone=\"Asia/Tokyo\" date={date} />\n          </>\n        )}\n      </DateContext.Consumer>\n    </ClockContainer>\n  )\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ClockContainer"})," is a component that manages the state of the clock.\nThe ",(0,o.jsx)(t.code,{children:"refreshInterval"})," property is the interval at which the clock is updated.\n",(0,o.jsx)(t.code,{children:"AnalogClock"})," and ",(0,o.jsx)(t.code,{children:"DigitalClock"})," are components that display the clock. These components are independent of the state of the clock."]})]})}function l(e={}){let{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}let u=l},"./stories/clock/Example.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>p,default:()=>f});var r,o,c,i=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=n("../../packages/clock/dist/index.mjs"),a=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var m={title:"Base/Clock/Example",component:function(){return(0,i.jsx)(s.UV,{refreshInterval:10,children:(0,i.jsx)(s.KW.Consumer,{children:function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Og,{timezone:"Asia/Tokyo",date:e}),(0,i.jsx)(s.Im,{timezone:"Asia/Tokyo",date:e}),(0,i.jsx)(s.Og,{timezone:"America/New_York",date:e,step:"sweep",face:"roman"}),(0,i.jsx)(s.Im,{timezone:"America/New_York",date:e})]})}})})}};let f=m;var p={args:{}};p.parameters=h(u({},p.parameters),{docs:h(u({},null===(r=p.parameters)||void 0===r?void 0:r.docs),{source:u({originalSource:"{\n  args: {}\n}"},null===(o=p.parameters)||void 0===o?void 0:null===(c=o.docs)||void 0===c?void 0:c.source)})})},"../../packages/clock/dist/index.mjs":(e,t,n)=>{n.d(t,{Im:()=>M,KW:()=>T,Og:()=>P,UV:()=>E});var r=n("../../node_modules/.pnpm/luxon@3.3.0/node_modules/luxon/src/luxon.js"),o=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=n("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e){if(Array.isArray(e))return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(c.push(n.value),!t||c.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(s)throw r}}return c}}function d(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function p(e,t){return a(e)||u(e,t)||j(e,t)||d()}function j(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}}var g=Object.defineProperty;function x(e){return 0===e?"12":"".concat(e)}function b(e){switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return"".concat(e)}function y(e,t){switch(t){case"arabic":return x(e);case"roman":return b(e)}}function k(e,t,n){switch(n){case"tick":return w(e,t);case"sweep":return v(e,t)}}function w(e,t){var n=r.ou.fromJSDate(e).setZone(t),o=n.minute/12|0;return{hour:n.hour+o/5,minute:n.minute,second:n.second}}function v(e,t){var n=r.ou.fromJSDate(e).setZone(t);return{hour:n.hour+n.minute/60+n.second/3600,minute:n.minute+n.second/60,second:n.second+n.millisecond/1e3}}var O={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},P=function(e){var t=e.timezone,n=e.date,r=A(e),c=r.width,i=r.height,s=r.bigHand,a=r.smallHand,l=r.secondHand,u=r.frame,d=r.step,m=r.face,f=r.centerPoint,p=r.hourLines,j=r.minuteLines,g=k(n,t,d),x=g.hour,b=g.minute,y=g.second,w=c/2,v=i/2;return(0,o.jsx)("div",{style:{width:"".concat(c,"px"),height:"".concat(i,"px")},children:(0,o.jsxs)("svg",{viewBox:"0 0 ".concat(c," ").concat(i),fill:"none",xmlns:"http://www.w3.org/2000/svg",width:c,height:i,children:[(0,o.jsx)("circle",{cx:w,cy:v,r:u.size,stroke:u.color,strokeWidth:u.width,fill:u.backgroundColor}),(0,o.jsx)("circle",{cx:w,cy:v,r:f.size,stroke:f.color,strokeWidth:f.size,fill:f.color}),(0,o.jsx)(_,h({centerX:w,centerY:v,radius:u.size-p.length},p)),(0,o.jsx)(D,h({centerX:w,centerY:v,radius:u.size-j.length},j)),(0,o.jsx)(z,{centerX:w,centerY:v,radius:u.size-j.length,faceType:m}),(0,o.jsx)(C,h({centerX:w,centerY:v,degree:30*x},s)),(0,o.jsx)(C,h({centerX:w,centerY:v,degree:6*b},a)),(0,o.jsx)(C,h({centerX:w,centerY:v,degree:6*y},l))]})})},C=function(e){var t=e.centerX,n=e.centerY,r=e.degree,c=e.length,i=e.width,s=e.color,a=H(r);return(0,o.jsx)("line",{x1:t,y1:n,x2:t+c*Math.sin(a),y2:n-c*Math.cos(a),stroke:s,strokeWidth:i})},_=function(e){var t=e.centerX,n=e.centerY,r=e.radius,c=e.width,i=e.color,s=e.length;return(0,o.jsx)(S,{centerX:t,centerY:n,radius:r,length:s,count:12,width:c,color:i})},D=function(e){var t=e.centerX,n=e.centerY,r=e.radius,c=e.width,i=e.color,s=e.length;return(0,o.jsx)(S,{centerX:t,centerY:n,radius:r,length:s,count:60,width:c,color:i})},S=function(e){for(var t=e.centerX,n=e.centerY,r=e.radius,c=e.length,i=e.count,s=e.width,a=e.color,l=[],u=0;u<i;u++){var d=H(360/i*u),h=t+r*Math.sin(d),m=n+r*Math.cos(d),f=h+c*Math.sin(d),p=m+c*Math.cos(d);l.push((0,o.jsx)("line",{x1:h,y1:m,x2:f,y2:p,stroke:a,strokeWidth:s},u))}return(0,o.jsx)(o.Fragment,{children:l})},z=function(e){for(var t=e.centerX,n=e.centerY,r=e.radius,c=[],i=r/5,s=r-i,a={textAnchor:"middle",dominantBaseline:"central",fontSize:i,fontFamily:"monospace",fill:"black"},l=0;l<12;l++){var u=H(30*l),d=t+s*Math.sin(u),m=n-s*Math.cos(u);c.push((0,o.jsx)("text",f(h({x:d,y:m},a),{children:y(l,e.faceType)}),l))}return(0,o.jsx)(o.Fragment,{children:c})};function A(e){var t=h({},O,e),n=t.width,r=t.height,o=t.step,c=t.face,i=t.bigHand,s=t.smallHand,a=t.secondHand,l=t.frame,u=t.centerPoint,d=t.hourLines,m=t.minuteLines;return{width:n,height:r,step:o,face:c,bigHand:h({},O.bigHand,i),smallHand:h({},O.smallHand,s),secondHand:h({},O.secondHand,a),frame:h({},O.frame,l),centerPoint:h({},O.centerPoint,u),hourLines:h({},O.hourLines,d),minuteLines:h({},O.minuteLines,m)}}function H(e){return e*Math.PI/180}!function(e,t){for(var n in t)g(e,n,{get:t[n],enumerable:!0})}({},{zeroPad2:function(){return Y},zeroPad3:function(){return X}});var I=function(e,t){return String(e).padStart(t,"0")},Y=function(e){return I(e,2)},X=function(e){return I(e,3)},M=function(e){var t=e.timezone,n=e.date,c=r.ou.fromJSDate(n).setZone(t),i=Y(c.hour%12),s=Y(c.minute),a=Y(c.second),l=c.hour<12?"AM":"PM";return(0,o.jsxs)("div",{style:{width:"20em",fontFamily:"monospace"},children:[i,":",s,":",a," ",l," (",t,")"]})},T=c.createContext(new Date),E=function(e){var t=e.children,n=p((0,c.useState)(new Date),2),r=n[0],s=n[1],a=e.refreshInterval||1e3;return(0,i.Z)(function(){s(new Date)},a),(0,o.jsx)(T.Provider,{value:r,children:t})}}}]);