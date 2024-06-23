"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[4194,2543,578],{"./stories/clock/Example.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>a,__namedExportsOrder:()=>i,default:()=>c});var n=r("../../packages/clock/dist/index.mjs"),o=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let c={title:"Base/Clock/Example",component:function(){return o.createElement(n.C_,{refreshInterval:10},o.createElement(n.ec.Consumer,null,function(e){return o.createElement(o.Fragment,null,o.createElement(n.TX,{timezone:"Asia/Tokyo",date:e}),o.createElement(n.NX,{timezone:"Asia/Tokyo",date:e}),o.createElement(n.TX,{timezone:"America/New_York",date:e,step:"sweep",face:"roman"}),o.createElement(n.NX,{timezone:"America/New_York",date:e}))}))}};var a={args:{}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...a.parameters?.docs?.source}}};let i=["Default"]},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,c={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:c,_owner:i.current}}t.Fragment=c,t.jsx=u,t.jsxs=u},"../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(e,t,r)=>{e.exports=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../packages/clock/dist/index.mjs":(e,t,r)=>{r.d(t,{TX:()=>u,C_:()=>x,ec:()=>b,NX:()=>O});var n=r("../../node_modules/.pnpm/luxon@3.4.4/node_modules/luxon/src/luxon.js"),o=function(e){switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return"".concat(e)},c=function(e,t){switch(t){case"arabic":return 0===e?"12":"".concat(e);case"roman":return o(e)}},a=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,c;c=r[t],t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c})}return e}var s={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},u=function(e){var t,r,o,c,u,h,p,y,g,j,b,x,w=e.timezone,_=e.date,v=(r=(t=i({},s,e)).width,o=t.height,c=t.step,u=t.face,h=t.bigHand,p=t.smallHand,y=t.secondHand,g=t.frame,j=t.centerPoint,b=t.hourLines,x=t.minuteLines,{width:r,height:o,step:c,face:u,bigHand:i({},s.bigHand,h),smallHand:i({},s.smallHand,p),secondHand:i({},s.secondHand,y),frame:i({},s.frame,g),centerPoint:i({},s.centerPoint,j),hourLines:i({},s.hourLines,b),minuteLines:i({},s.minuteLines,x)}),k=v.width,O=v.height,P=v.bigHand,S=v.smallHand,E=v.secondHand,X=v.frame,z=v.step,Y=v.face,H=v.centerPoint,A=v.hourLines,D=v.minuteLines,L=function(e,t,r){var o,c,a,i,s,u,l;switch(r){case"tick":return o=e,c=t,i=(a=n.c9.fromJSDate(e).setZone(t)).minute/12|0,{hour:a.hour+i/5,minute:a.minute,second:a.second};case"sweep":return s=e,u=t,{hour:(l=n.c9.fromJSDate(e).setZone(t)).hour+l.minute/60+l.second/3600,minute:l.minute+l.second/60,second:l.second+l.millisecond/1e3}}}(_,w,z),C=L.hour,M=L.minute,T=L.second,I=k/2,N=O/2;return(0,a.jsx)("div",{style:{width:"".concat(k,"px"),height:"".concat(O,"px")},children:(0,a.jsxs)("svg",{viewBox:"0 0 ".concat(k," ").concat(O),fill:"none",xmlns:"http://www.w3.org/2000/svg",width:k,height:O,children:[(0,a.jsx)("title",{children:"".concat(C,":").concat(M,":").concat(T)}),(0,a.jsx)("circle",{cx:I,cy:N,r:X.size,stroke:X.color,strokeWidth:X.width,fill:X.backgroundColor}),(0,a.jsx)("circle",{cx:I,cy:N,r:H.size,stroke:H.color,strokeWidth:H.size,fill:H.color}),(0,a.jsx)(d,i({centerX:I,centerY:N,radius:X.size-A.length},A)),(0,a.jsx)(m,i({centerX:I,centerY:N,radius:X.size-D.length},D)),(0,a.jsx)(f,{centerX:I,centerY:N,radius:X.size-D.length,faceType:Y}),(0,a.jsx)(l,i({centerX:I,centerY:N,degree:30*C},P)),(0,a.jsx)(l,i({centerX:I,centerY:N,degree:6*M},S)),(0,a.jsx)(l,i({centerX:I,centerY:N,degree:6*T},E))]})})},l=function(e){var t=e.centerX,r=e.centerY,n=e.degree,o=e.length,c=e.width,i=e.color,s=p(n),u=t+o*Math.sin(s),l=r-o*Math.cos(s);return(0,a.jsx)("line",{x1:t,y1:r,x2:u,y2:l,stroke:i,strokeWidth:c})},d=function(e){var t=e.centerX,r=e.centerY,n=e.radius,o=e.width,c=e.color,i=e.length;return(0,a.jsx)(h,{centerX:t,centerY:r,radius:n,length:i,count:12,width:o,color:c})},m=function(e){var t=e.centerX,r=e.centerY,n=e.radius,o=e.width,c=e.color,i=e.length;return(0,a.jsx)(h,{centerX:t,centerY:r,radius:n,length:i,count:60,width:o,color:c})},h=function(e){for(var t=e.centerX,r=e.centerY,n=e.radius,o=e.length,c=e.count,i=e.width,s=e.color,u=[],l=0;l<c;l++){var d=p(360/c*l),m=t+n*Math.sin(d),h=r+n*Math.cos(d),f=m+o*Math.sin(d),y=h+o*Math.cos(d);u.push((0,a.jsx)("line",{x1:m,y1:h,x2:f,y2:y,stroke:s,strokeWidth:i},l))}return(0,a.jsx)(a.Fragment,{children:u})},f=function(e){for(var t=e.centerX,r=e.centerY,n=e.radius,o=[],s=n/5,u=n-s,l={textAnchor:"middle",dominantBaseline:"central",fontSize:s,fontFamily:"monospace",fill:"black"},d=0;d<12;d++){var m=p(30*d),h=t+u*Math.sin(m),f=r-u*Math.cos(m);o.push((0,a.jsx)("text",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(i({x:h,y:f},l),{children:c(d,e.faceType)}),d))}return(0,a.jsx)(a.Fragment,{children:o})};function p(e){return e*Math.PI/180}var y=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=r("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js");function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var b=y.createContext(new Date),x=function(e){var t,r=e.children,n=function(e){if(Array.isArray(e))return e}(t=(0,y.useState)(new Date))||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],a=!0,i=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(c.push(r.value),2!==c.length);a=!0);}catch(e){i=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw n}}return c}}(t,2)||function(e,t){if(e){if("string"==typeof e)return j(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=n[0],c=n[1],i=e.refreshInterval||1e3;return(0,g.A)(function(){c(new Date)},i),(0,a.jsx)(b.Provider,{value:o,children:r})},w=Object.defineProperty;!function(e,t){for(var r in t)w(e,r,{get:t[r],enumerable:!0})}({},{zeroPad2:function(){return v},zeroPad3:function(){return k}});var _=function(e,t){return String(e).padStart(t,"0")},v=function(e){return _(e,2)},k=function(e){return _(e,3)},O=function(e){var t=e.timezone,r=P(e.date,t);return(0,a.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:r})},P=function(e,t){var r=n.c9.fromJSDate(e).setZone(t),o=v(r.hour%12),c=v(r.minute),a=v(r.second),i=r.hour<12?"AM":"PM";return"".concat(o,":").concat(c,":").concat(a," ").concat(i," (").concat(t,")")}}}]);