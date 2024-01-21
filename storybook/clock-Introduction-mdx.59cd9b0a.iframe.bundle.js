(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[654,163],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(e,n,t)=>{"use strict";t.d(n,{NF:()=>c,Zo:()=>i,ah:()=>s,pC:()=>o});var r=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=r.createContext({});function c(e){return function(n){let t=s(n.components);return r.createElement(e,{...n,allComponents:t})}}function s(e){let n=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let a={};function i({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:s(e),r.createElement(o.Provider,{value:c},n)}},"./stories/clock/Example.stories.tsx":(e,n,t)=>{"use strict";t.r(n),t.d(n,{Default:()=>s,__namedExportsOrder:()=>a,default:()=>c});var r=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=t("../../packages/clock/dist/index.mjs");t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let c={title:"Base/Clock/Example",component:function(){return(0,r.jsx)(o.UV,{refreshInterval:10,children:(0,r.jsx)(o.KW.Consumer,{children:function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Og,{timezone:"Asia/Tokyo",date:e}),(0,r.jsx)(o.Im,{timezone:"Asia/Tokyo",date:e}),(0,r.jsx)(o.Og,{timezone:"America/New_York",date:e,step:"sweep",face:"roman"}),(0,r.jsx)(o.Im,{timezone:"America/New_York",date:e})]})}})})}};var s={args:{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...s.parameters?.docs?.source}}};let a=["Default"]},"./stories/clock/Introduction.mdx":(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i}),t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var r=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=t("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),c=t("../../node_modules/.pnpm/@storybook+blocks@7.6.10_@types+react-dom@18.2.18_@types+react@18.2.48_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),s=t("./stories/clock/Example.stories.tsx");function a(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"clock",children:"Clock"}),"\n","\n","\n",(0,r.jsx)(c.h_,{title:"Base/Clock/Introduction"}),"\n",(0,r.jsx)(c.Xz,{of:s.Default}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"Each component is published as a separate package."}),"\n",(0,r.jsx)(n.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-clock\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-clock\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-clock\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.p,{children:"Clock components consists of two parts:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"The surface of the clock (AnalogClock, DigitalClock, etc.)"}),"\n",(0,r.jsx)(n.li,{children:"The state of the clock (ClockContainer, DateContext, etc.)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you want to modify the appearance of the clock, you can use the surface of the clock.\nIf you want to change the state of the clock, you can use the state of the clock."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import {\n  AnalogClock,\n  ClockContainer,\n  DateContext,\n  DigitalClock,\n} from '@kitsuyui/react-clock'\nimport React from 'react'\n\nconst Clock = () => {\n  return (\n    <ClockContainer refreshInterval={10}>\n      <DateContext.Consumer>\n        {(date) => (\n          <>\n            <AnalogClock timezone=\"Asia/Tokyo\" date={date} />\n            <DigitalClock timezone=\"Asia/Tokyo\" date={date} />\n          </>\n        )}\n      </DateContext.Consumer>\n    </ClockContainer>\n  )\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ClockContainer"})," is a component that manages the state of the clock.\nThe ",(0,r.jsx)(n.code,{children:"refreshInterval"})," property is the interval at which the clock is updated.\n",(0,r.jsx)(n.code,{children:"AnalogClock"})," and ",(0,r.jsx)(n.code,{children:"DigitalClock"})," are components that display the clock. These components are independent of the state of the clock."]})]})}let i=function(e={}){let{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":e=>{function n(e){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",e.exports=n},"../../packages/clock/dist/index.mjs":(e,n,t)=>{"use strict";t.d(n,{Og:()=>l,UV:()=>y,KW:()=>k,Im:()=>C});var r=t("../../node_modules/.pnpm/luxon@3.4.4/node_modules/luxon/src/luxon.js"),o=function(e){switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return"".concat(e)},c=function(e,n){switch(n){case"arabic":return function(e){return 0===e?"12":"".concat(e)}(e);case"roman":return o(e)}},s=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}var i={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},l=function(e){var n=e.timezone,t=e.date,o=function(e){var n=a({},i,e),t=n.width,r=n.height,o=n.step,c=n.face,s=n.bigHand,l=n.smallHand,u=n.secondHand,d=n.frame,h=n.centerPoint,m=n.hourLines,f=n.minuteLines;return{width:t,height:r,step:o,face:c,bigHand:a({},i.bigHand,s),smallHand:a({},i.smallHand,l),secondHand:a({},i.secondHand,u),frame:a({},i.frame,d),centerPoint:a({},i.centerPoint,h),hourLines:a({},i.hourLines,m),minuteLines:a({},i.minuteLines,f)}}(e),c=o.width,l=o.height,m=o.bigHand,p=o.smallHand,x=o.secondHand,j=o.frame,g=o.step,k=o.face,y=o.centerPoint,b=o.hourLines,w=o.minuteLines,v=function(e,n,t){switch(t){case"tick":return function(e,n){var t=r.ou.fromJSDate(e).setZone(n),o=t.minute/12|0;return{hour:t.hour+o/5,minute:t.minute,second:t.second}}(e,n);case"sweep":return function(e,n){var t=r.ou.fromJSDate(e).setZone(n);return{hour:t.hour+t.minute/60+t.second/3600,minute:t.minute+t.second/60,second:t.second+t.millisecond/1e3}}(e,n)}}(t,n,g),_=v.hour,C=v.minute,O=v.second,z=c/2,D=l/2;return(0,s.jsx)("div",{style:{width:"".concat(c,"px"),height:"".concat(l,"px")},children:(0,s.jsxs)("svg",{viewBox:"0 0 ".concat(c," ").concat(l),fill:"none",xmlns:"http://www.w3.org/2000/svg",width:c,height:l,children:[(0,s.jsx)("title",{children:"".concat(_,":").concat(C,":").concat(O)}),(0,s.jsx)("circle",{cx:z,cy:D,r:j.size,stroke:j.color,strokeWidth:j.width,fill:j.backgroundColor}),(0,s.jsx)("circle",{cx:z,cy:D,r:y.size,stroke:y.color,strokeWidth:y.size,fill:y.color}),(0,s.jsx)(d,a({centerX:z,centerY:D,radius:j.size-b.length},b)),(0,s.jsx)(h,a({centerX:z,centerY:D,radius:j.size-w.length},w)),(0,s.jsx)(f,{centerX:z,centerY:D,radius:j.size-w.length,faceType:k}),(0,s.jsx)(u,a({centerX:z,centerY:D,degree:30*_},m)),(0,s.jsx)(u,a({centerX:z,centerY:D,degree:6*C},p)),(0,s.jsx)(u,a({centerX:z,centerY:D,degree:6*O},x))]})})},u=function(e){var n=e.centerX,t=e.centerY,r=e.degree,o=e.length,c=e.width,a=e.color,i=p(r),l=n+o*Math.sin(i),u=t-o*Math.cos(i);return(0,s.jsx)("line",{x1:n,y1:t,x2:l,y2:u,stroke:a,strokeWidth:c})},d=function(e){var n=e.centerX,t=e.centerY,r=e.radius,o=e.width,c=e.color,a=e.length;return(0,s.jsx)(m,{centerX:n,centerY:t,radius:r,length:a,count:12,width:o,color:c})},h=function(e){var n=e.centerX,t=e.centerY,r=e.radius,o=e.width,c=e.color,a=e.length;return(0,s.jsx)(m,{centerX:n,centerY:t,radius:r,length:a,count:60,width:o,color:c})},m=function(e){for(var n=e.centerX,t=e.centerY,r=e.radius,o=e.length,c=e.count,a=e.width,i=e.color,l=[],u=0;u<c;u++){var d=p(360/c*u),h=n+r*Math.sin(d),m=t+r*Math.cos(d),f=h+o*Math.sin(d),x=m+o*Math.cos(d);l.push((0,s.jsx)("line",{x1:h,y1:m,x2:f,y2:x,stroke:i,strokeWidth:a},u))}return(0,s.jsx)(s.Fragment,{children:l})},f=function(e){for(var n=e.centerX,t=e.centerY,r=e.radius,o=[],i=r/5,l=r-i,u={textAnchor:"middle",dominantBaseline:"central",fontSize:i,fontFamily:"monospace",fill:"black"},d=0;d<12;d++){var h=p(30*d),m=n+l*Math.sin(h),f=t-l*Math.cos(h);o.push((0,s.jsx)("text",function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(a({x:m,y:f},u),{children:c(d,e.faceType)}),d))}return(0,s.jsx)(s.Fragment,{children:o})};function p(e){return e*Math.PI/180}var x=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=t("../../node_modules/.pnpm/react-use@17.4.4_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var k=x.createContext(new Date),y=function(e){var n=e.children,t=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],s=!0,a=!1;try{for(o=o.call(e);!(s=(t=o.next()).done)&&(c.push(t.value),!n||c.length!==n);s=!0);}catch(e){a=!0,r=e}finally{try{s||null==o.return||o.return()}finally{if(a)throw r}}return c}}(e,n)||function(e,n){if(e){if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,x.useState)(new Date),2),r=t[0],o=t[1],c=e.refreshInterval||1e3;return(0,j.Z)(function(){o(new Date)},c),(0,s.jsx)(k.Provider,{value:r,children:n})},b=Object.defineProperty;!function(e,n){for(var t in n)b(e,t,{get:n[t],enumerable:!0})}({},{zeroPad2:function(){return v},zeroPad3:function(){return _}});var w=function(e,n){return String(e).padStart(n,"0")},v=function(e){return w(e,2)},_=function(e){return w(e,3)},C=function(e){var n=e.timezone,t=O(e.date,n);return(0,s.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:t})},O=function(e,n){var t=r.ou.fromJSDate(e).setZone(n),o=v(t.hour%12),c=v(t.minute),s=v(t.second),a=t.hour<12?"AM":"PM";return"".concat(o,":").concat(c,":").concat(s," ").concat(a," (").concat(n,")")}}}]);