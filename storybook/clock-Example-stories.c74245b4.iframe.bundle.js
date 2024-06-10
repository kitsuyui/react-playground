"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[4194],{"./stories/clock/Example.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>a,__namedExportsOrder:()=>i,default:()=>o});var n=r("../../packages/clock/dist/index.mjs"),c=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let o={title:"Base/Clock/Example",component:function(){return c.createElement(n.C_,{refreshInterval:10},c.createElement(n.ec.Consumer,null,function(e){return c.createElement(c.Fragment,null,c.createElement(n.TX,{timezone:"Asia/Tokyo",date:e}),c.createElement(n.NX,{timezone:"Asia/Tokyo",date:e}),c.createElement(n.TX,{timezone:"America/New_York",date:e,step:"sweep",face:"roman"}),c.createElement(n.NX,{timezone:"America/New_York",date:e}))}))}};var a={args:{}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...a.parameters?.docs?.source}}};let i=["Default"]},"../../packages/clock/dist/index.mjs":(e,t,r)=>{r.d(t,{TX:()=>u,C_:()=>x,ec:()=>w,NX:()=>_});var n=r("../../node_modules/.pnpm/luxon@3.4.4/node_modules/luxon/src/luxon.js"),c=function(e){switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return"".concat(e)},o=function(e,t){switch(t){case"arabic":return 0===e?"12":"".concat(e);case"roman":return c(e)}},a=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,c,o;o=r[t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o})}return e}var s={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},u=function(e){var t,r,c,o,u,m,p,g,y,b,w,x,j=e.timezone,v=e.date,k=(r=(t=i({},s,e)).width,c=t.height,o=t.step,u=t.face,m=t.bigHand,p=t.smallHand,g=t.secondHand,y=t.frame,b=t.centerPoint,w=t.hourLines,x=t.minuteLines,{width:r,height:c,step:o,face:u,bigHand:i({},s.bigHand,m),smallHand:i({},s.smallHand,p),secondHand:i({},s.secondHand,g),frame:i({},s.frame,y),centerPoint:i({},s.centerPoint,b),hourLines:i({},s.hourLines,w),minuteLines:i({},s.minuteLines,x)}),O=k.width,_=k.height,P=k.bigHand,X=k.smallHand,z=k.secondHand,S=k.frame,H=k.step,Y=k.face,A=k.centerPoint,E=k.hourLines,D=k.minuteLines,M=function(e,t,r){var c,o,a,i,s,u,l;switch(r){case"tick":return c=e,o=t,i=(a=n.c9.fromJSDate(e).setZone(t)).minute/12|0,{hour:a.hour+i/5,minute:a.minute,second:a.second};case"sweep":return s=e,u=t,{hour:(l=n.c9.fromJSDate(e).setZone(t)).hour+l.minute/60+l.second/3600,minute:l.minute+l.second/60,second:l.second+l.millisecond/1e3}}}(v,j,H),C=M.hour,L=M.minute,T=M.second,I=O/2,F=_/2;return(0,a.jsx)("div",{style:{width:"".concat(O,"px"),height:"".concat(_,"px")},children:(0,a.jsxs)("svg",{viewBox:"0 0 ".concat(O," ").concat(_),fill:"none",xmlns:"http://www.w3.org/2000/svg",width:O,height:_,children:[(0,a.jsx)("title",{children:"".concat(C,":").concat(L,":").concat(T)}),(0,a.jsx)("circle",{cx:I,cy:F,r:S.size,stroke:S.color,strokeWidth:S.width,fill:S.backgroundColor}),(0,a.jsx)("circle",{cx:I,cy:F,r:A.size,stroke:A.color,strokeWidth:A.size,fill:A.color}),(0,a.jsx)(d,i({centerX:I,centerY:F,radius:S.size-E.length},E)),(0,a.jsx)(h,i({centerX:I,centerY:F,radius:S.size-D.length},D)),(0,a.jsx)(f,{centerX:I,centerY:F,radius:S.size-D.length,faceType:Y}),(0,a.jsx)(l,i({centerX:I,centerY:F,degree:30*C},P)),(0,a.jsx)(l,i({centerX:I,centerY:F,degree:6*L},X)),(0,a.jsx)(l,i({centerX:I,centerY:F,degree:6*T},z))]})})},l=function(e){var t=e.centerX,r=e.centerY,n=e.degree,c=e.length,o=e.width,i=e.color,s=p(n),u=t+c*Math.sin(s),l=r-c*Math.cos(s);return(0,a.jsx)("line",{x1:t,y1:r,x2:u,y2:l,stroke:i,strokeWidth:o})},d=function(e){var t=e.centerX,r=e.centerY,n=e.radius,c=e.width,o=e.color,i=e.length;return(0,a.jsx)(m,{centerX:t,centerY:r,radius:n,length:i,count:12,width:c,color:o})},h=function(e){var t=e.centerX,r=e.centerY,n=e.radius,c=e.width,o=e.color,i=e.length;return(0,a.jsx)(m,{centerX:t,centerY:r,radius:n,length:i,count:60,width:c,color:o})},m=function(e){for(var t=e.centerX,r=e.centerY,n=e.radius,c=e.length,o=e.count,i=e.width,s=e.color,u=[],l=0;l<o;l++){var d=p(360/o*l),h=t+n*Math.sin(d),m=r+n*Math.cos(d),f=h+c*Math.sin(d),g=m+c*Math.cos(d);u.push((0,a.jsx)("line",{x1:h,y1:m,x2:f,y2:g,stroke:s,strokeWidth:i},l))}return(0,a.jsx)(a.Fragment,{children:u})},f=function(e){for(var t=e.centerX,r=e.centerY,n=e.radius,c=[],s=n/5,u=n-s,l={textAnchor:"middle",dominantBaseline:"central",fontSize:s,fontFamily:"monospace",fill:"black"},d=0;d<12;d++){var h=p(30*d),m=t+u*Math.sin(h),f=r-u*Math.cos(h);c.push((0,a.jsx)("text",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(i({x:m,y:f},l),{children:o(d,e.faceType)}),d))}return(0,a.jsx)(a.Fragment,{children:c})};function p(e){return e*Math.PI/180}var g=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),y=r("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js");function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var w=g.createContext(new Date),x=function(e){var t,r=e.children,n=function(e){if(Array.isArray(e))return e}(t=(0,g.useState)(new Date))||function(e,t){var r,n,c=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=c){var o=[],a=!0,i=!1;try{for(c=c.call(e);!(a=(r=c.next()).done)&&(o.push(r.value),2!==o.length);a=!0);}catch(e){i=!0,n=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw n}}return o}}(t,2)||function(e,t){if(e){if("string"==typeof e)return b(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=n[0],o=n[1],i=e.refreshInterval||1e3;return(0,y.A)(function(){o(new Date)},i),(0,a.jsx)(w.Provider,{value:c,children:r})},j=Object.defineProperty;!function(e,t){for(var r in t)j(e,r,{get:t[r],enumerable:!0})}({},{zeroPad2:function(){return k},zeroPad3:function(){return O}});var v=function(e,t){return String(e).padStart(t,"0")},k=function(e){return v(e,2)},O=function(e){return v(e,3)},_=function(e){var t=e.timezone,r=P(e.date,t);return(0,a.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:r})},P=function(e,t){var r=n.c9.fromJSDate(e).setZone(t),c=k(r.hour%12),o=k(r.minute),a=k(r.second),i=r.hour<12?"AM":"PM";return"".concat(c,":").concat(o,":").concat(a," ").concat(i," (").concat(t,")")}}}]);