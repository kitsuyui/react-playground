"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[740],{"../../packages/clock/dist/index.mjs":(e,t,n)=>{n.d(t,{Im:()=>E,KW:()=>Y,Og:()=>O,UV:()=>_});var r=n("../../node_modules/luxon/src/luxon.js"),o=n("../../node_modules/react/jsx-runtime.js"),i=n("../../node_modules/react/index.js"),c=n("../../node_modules/react-use/esm/useInterval.js");function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e){if(Array.isArray(e))return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],c=!0,u=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(u)throw r}}return i}}function f(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function p(e,t){return a(e)||l(e,t)||g(e,t)||f()}function g(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}}var v=Object.defineProperty;function y(e){return 0===e?"12":"".concat(e)}function b(e){switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return"".concat(e)}function j(e,t){switch(t){case"arabic":return y(e);case"roman":return b(e)}}function x(e,t,n){switch(n){case"tick":return w(e,t);case"sweep":return S(e,t)}}function w(e,t){var n=r.ou.fromJSDate(e).setZone(t),o=n.minute/12|0;return{hour:n.hour+o/5,minute:n.minute,second:n.second}}function S(e,t){var n=r.ou.fromJSDate(e).setZone(t);return{hour:n.hour+n.minute/60+n.second/3600,minute:n.minute+n.second/60,second:n.second+n.millisecond/1e3}}var k={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},O=function(e){var t=e.timezone,n=e.date,r=z(e),i=r.width,c=r.height,u=r.bigHand,a=r.smallHand,s=r.secondHand,l=r.frame,f=r.step,m=r.face,h=r.centerPoint,p=r.hourLines,g=r.minuteLines,v=x(n,t,f),y=v.hour,b=v.minute,j=v.second,w=i/2,S=c/2;return(0,o.jsx)("div",{style:{width:"".concat(i,"px"),height:"".concat(c,"px")},children:(0,o.jsxs)("svg",{viewBox:"0 0 ".concat(i," ").concat(c),fill:"none",xmlns:"http://www.w3.org/2000/svg",width:i,height:c,children:[(0,o.jsx)("circle",{cx:w,cy:S,r:l.size,stroke:l.color,strokeWidth:l.width,fill:l.backgroundColor}),(0,o.jsx)("circle",{cx:w,cy:S,r:h.size,stroke:h.color,strokeWidth:h.size,fill:h.color}),(0,o.jsx)(C,d({centerX:w,centerY:S,radius:l.size-p.length},p)),(0,o.jsx)(D,d({centerX:w,centerY:S,radius:l.size-g.length},g)),(0,o.jsx)(T,{centerX:w,centerY:S,radius:l.size-g.length,faceType:m}),(0,o.jsx)(P,d({centerX:w,centerY:S,degree:30*y},u)),(0,o.jsx)(P,d({centerX:w,centerY:S,degree:6*b},a)),(0,o.jsx)(P,d({centerX:w,centerY:S,degree:6*j},s))]})})},P=function(e){var t=e.centerX,n=e.centerY,r=e.degree,i=e.length,c=e.width,u=e.color,a=I(r);return(0,o.jsx)("line",{x1:t,y1:n,x2:t+i*Math.sin(a),y2:n-i*Math.cos(a),stroke:u,strokeWidth:c})},C=function(e){var t=e.centerX,n=e.centerY,r=e.radius,i=e.width,c=e.color,u=e.length;return(0,o.jsx)(A,{centerX:t,centerY:n,radius:r,length:u,count:12,width:i,color:c})},D=function(e){var t=e.centerX,n=e.centerY,r=e.radius,i=e.width,c=e.color,u=e.length;return(0,o.jsx)(A,{centerX:t,centerY:n,radius:r,length:u,count:60,width:i,color:c})},A=function(e){for(var t=e.centerX,n=e.centerY,r=e.radius,i=e.length,c=e.count,u=e.width,a=e.color,s=[],l=0;l<c;l++){var f=I(360/c*l),d=t+r*Math.sin(f),m=n+r*Math.cos(f),h=d+i*Math.sin(f),p=m+i*Math.cos(f);s.push((0,o.jsx)("line",{x1:d,y1:m,x2:h,y2:p,stroke:a,strokeWidth:u},l))}return(0,o.jsx)(o.Fragment,{children:s})},T=function(e){for(var t=e.centerX,n=e.centerY,r=e.radius,i=[],c=r/5,u=r-c,a={textAnchor:"middle",dominantBaseline:"central",fontSize:c,fontFamily:"monospace",fill:"black"},s=0;s<12;s++){var l=I(30*s),f=t+u*Math.sin(l),m=n-u*Math.cos(l);i.push((0,o.jsx)("text",h(d({x:f,y:m},a),{children:j(s,e.faceType)}),s))}return(0,o.jsx)(o.Fragment,{children:i})};function z(e){var t=d({},k,e),n=t.width,r=t.height,o=t.step,i=t.face,c=t.bigHand,u=t.smallHand,a=t.secondHand,s=t.frame,l=t.centerPoint,f=t.hourLines,m=t.minuteLines;return{width:n,height:r,step:o,face:i,bigHand:d({},k.bigHand,c),smallHand:d({},k.smallHand,u),secondHand:d({},k.secondHand,a),frame:d({},k.frame,s),centerPoint:d({},k.centerPoint,l),hourLines:d({},k.hourLines,f),minuteLines:d({},k.minuteLines,m)}}function I(e){return e*Math.PI/180}!function(e,t){for(var n in t)v(e,n,{get:t[n],enumerable:!0})}({},{zeroPad2:function(){return M},zeroPad3:function(){return X}});var H=function(e,t){return String(e).padStart(t,"0")},M=function(e){return H(e,2)},X=function(e){return H(e,3)},E=function(e){var t=e.timezone,n=e.date,i=r.ou.fromJSDate(n).setZone(t),c=M(i.hour%12),u=M(i.minute),a=M(i.second),s=i.hour<12?"AM":"PM";return(0,o.jsxs)("div",{style:{width:"20em",fontFamily:"monospace"},children:[c,":",u,":",a," ",s," (",t,")"]})},Y=i.createContext(new Date),_=function(e){var t=e.children,n=p((0,i.useState)(new Date),2),r=n[0],u=n[1],a=e.refreshInterval||1e3;return(0,c.Z)(function(){u(new Date)},a),(0,o.jsx)(Y.Provider,{value:r,children:t})}},"../../packages/components/dist/index.mjs":(e,t,n)=>{n.d(t,{B7:()=>l,uX:()=>f});var r=n("../../packages/clock/dist/index.mjs"),o=n("../../packages/stopwatch/dist/index.mjs"),i=n("../../packages/timer/dist/index.mjs"),c=n("../../node_modules/react/jsx-runtime.js");function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}var s=function(){return jsx(ClockContainer,{refreshInterval:10,children:jsx(DateContext.Consumer,{children:function(e){return jsxs(Fragment,{children:[jsx(AnalogClock,{timezone:"Asia/Tokyo",date:e}),jsx(DigitalClock,{timezone:"Asia/Tokyo",date:e})]})}})})},l=function(e){var t=e.onComplete;return(0,c.jsx)(i.oF,{onComplete:t,children:(0,c.jsx)(i.ax.Consumer,{children:function(e){return(0,c.jsx)(i.gZ,a({},e))}})})},f=function(){return(0,c.jsx)(o.fT,{children:(0,c.jsx)(o.KH.Consumer,{children:function(e){return(0,c.jsx)(o.Sq,a({},e))}})})}},"../../packages/stopwatch/dist/index.mjs":(e,t,n)=>{n.d(t,{KH:()=>h,P6:()=>y,Sq:()=>S,fT:()=>v});var r=n("../../node_modules/react/index.js"),o=n("../../node_modules/react-use/esm/useInterval.js"),i=n("../../node_modules/react/jsx-runtime.js");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e){if(Array.isArray(e))return e}function a(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],c=!0,u=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(u)throw r}}return i}}function s(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){return u(e)||a(e,t)||f(e,t)||s()}function f(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}}var d=Object.defineProperty,m=function(e,t){for(var n in t)d(e,n,{get:t[n],enumerable:!0})},h=r.createContext({elapsedTime:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){}});function p(e,t){return(t.getTime()-e.getTime())/1e3}function g(e){return p(e,new Date)}var v=function(e){var t,n,c,u=function(){k(g(A))},a=function(){C(P+S),k(0)},s=function(){j||(p(new CustomEvent("start",{})),T(new Date),x(!0))},f=function(){j&&(v(new CustomEvent("stop",{})),u(),x(!1),a())},d=e.children,m=function(e){},p=null!==(t=e.onStart)&&void 0!==t?t:m,v=null!==(n=e.onStop)&&void 0!==n?n:m,y=null!==(c=e.onReset)&&void 0!==c?c:m,b=l((0,r.useState)(!1),2),j=b[0],x=b[1],w=l((0,r.useState)(0),2),S=w[0],k=w[1],O=l((0,r.useState)(0),2),P=O[0],C=O[1],D=l((0,r.useState)(new Date),2),A=D[0],T=D[1],z=e.refreshInterval||10;(0,o.Z)(function(){j&&u()},z);var I=S+P;return(0,i.jsx)(h.Provider,{value:{elapsedTime:I,running:j,toggle:function(){j?f():s()},reset:function(){j&&f(),y(new CustomEvent("reset",{})),k(0),C(0)},start:s,stop:f},children:d})},y={};m(y,{zeroPad2:function(){return j},zeroPad3:function(){return x}});var b=function(e,t){return String(e).padStart(t,"0")},j=function(e){return b(e,2)},x=function(e){return b(e,3)};function w(e){return"".concat(j(Math.floor(e/60)),":").concat(j(e%60|0),".").concat(x(e%1*1e3))}var S=function(e){var t=e.elapsedTime,n=e.running,r=e.toggle,o=e.reset;return(0,i.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,i.jsxs)("form",{children:[(0,i.jsx)("span",{children:w(t)}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),o()},children:"Reset"}),(0,i.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),r()},children:n?"Stop":"Start"})]})})}},"../../packages/timer/dist/index.mjs":(e,t,n)=>{n.d(t,{P6:()=>v,ax:()=>h,gZ:()=>w,oF:()=>g});var r=n("../../node_modules/react/index.js"),o=n("../../node_modules/react-use/esm/useInterval.js"),i=n("../../node_modules/react/jsx-runtime.js");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e){if(Array.isArray(e))return e}function a(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],c=!0,u=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(u)throw r}}return i}}function s(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){return u(e)||a(e,t)||f(e,t)||s()}function f(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}}var d=Object.defineProperty,m=function(e,t){for(var n in t)d(e,n,{get:t[n],enumerable:!0})},h=r.createContext({remaining:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){},incrementTimerValue:function(e){},setTimerValue:function(e){}});function p(e){return(e.getTime()-new Date().getTime())/1e3}var g=function(e){var t,n,c,u,a=function(){if(x){var e=p(k);D(e),e<=0&&(D(0),w(!1),y(new CustomEvent("complete",{})))}},s=function(){C<=0||x||(O(new Date(Date.now()+1e3*C)),w(!0),g(new CustomEvent("start",{})))},f=function(){x&&(w(!1),v(new CustomEvent("stop",{})))},d=e.children,m=function(e){},g=null!==(t=e.onStart)&&void 0!==t?t:m,v=null!==(n=e.onStop)&&void 0!==n?n:m,y=null!==(c=e.onComplete)&&void 0!==c?c:m,b=null!==(u=e.onReset)&&void 0!==u?u:m,j=l((0,r.useState)(!1),2),x=j[0],w=j[1],S=l((0,r.useState)(new Date),2),k=S[0],O=S[1],P=l((0,r.useState)(0),2),C=P[0],D=P[1],A=e.refreshInterval||10;return(0,o.Z)(function(){a()},A),(0,i.jsx)(h.Provider,{value:{remaining:C,running:x,toggle:function(){x?f():s()},reset:function(){x&&f(),D(0),b(new CustomEvent("reset",{}))},start:s,stop:f,setTimerValue:function(e){f(),D(e||0)},incrementTimerValue:function(e){f(),D(C+e)}},children:d})},v={};m(v,{zeroPad2:function(){return b},zeroPad3:function(){return j}});var y=function(e,t){return String(e).padStart(t,"0")},b=function(e){return y(e,2)},j=function(e){return y(e,3)};function x(e){return"".concat(b(Math.floor(e/60)),":").concat(b(e%60|0),".").concat(j(e%1*1e3))}var w=function(e){var t=e.remaining,n=e.running,r=e.incrementTimerValue,o=e.toggle,c=e.reset;return(0,i.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,i.jsxs)("form",{children:[(0,i.jsx)("span",{children:x(t)}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"submit",name:"incrementMinute",onClick:function(e){e.preventDefault(),r(60)},children:"+分"}),(0,i.jsx)("button",{type:"submit",name:"incrementSecond",onClick:function(e){e.preventDefault(),r(1)},children:"+秒"}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),c()},children:"Reset"}),(0,i.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),o()},children:n?"Stop":"Start"})]})})}}}]);