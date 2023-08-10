"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[550],{"../../packages/clock/dist/index.mjs":(e,n,t)=>{t.d(n,{Im:()=>H,KW:()=>E,Og:()=>P,UV:()=>X});var r=t("../../node_modules/.pnpm/luxon@3.3.0/node_modules/luxon/src/luxon.js"),o=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=t("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function s(e){if(Array.isArray(e))return e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],i=!0,a=!1;try{for(o=o.call(e);!(i=(t=o.next()).done)&&(c.push(t.value),!n||c.length!==n);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(a)throw r}}return c}}function d(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){u(e,n,t[n])})}return e}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function h(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function p(e,n){return s(e)||l(e,n)||j(e,n)||d()}function j(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}}var g=Object.defineProperty;function b(e){return 0===e?"12":"".concat(e)}function v(e){switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return"".concat(e)}function y(e,n){switch(n){case"arabic":return b(e);case"roman":return v(e)}}function x(e,n,t){switch(t){case"tick":return w(e,n);case"sweep":return O(e,n)}}function w(e,n){var t=r.ou.fromJSDate(e).setZone(n),o=t.minute/12|0;return{hour:t.hour+o/5,minute:t.minute,second:t.second}}function O(e,n){var t=r.ou.fromJSDate(e).setZone(n);return{hour:t.hour+t.minute/60+t.second/3600,minute:t.minute+t.second/60,second:t.second+t.millisecond/1e3}}var k={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},P=function(e){var n=e.timezone,t=e.date,r=T(e),c=r.width,i=r.height,a=r.bigHand,s=r.smallHand,u=r.secondHand,l=r.frame,d=r.step,m=r.face,h=r.centerPoint,p=r.hourLines,j=r.minuteLines,g=x(t,n,d),b=g.hour,v=g.minute,y=g.second,w=c/2,O=i/2;return(0,o.jsx)("div",{style:{width:"".concat(c,"px"),height:"".concat(i,"px")},children:(0,o.jsxs)("svg",{viewBox:"0 0 ".concat(c," ").concat(i),fill:"none",xmlns:"http://www.w3.org/2000/svg",width:c,height:i,children:[(0,o.jsx)("circle",{cx:w,cy:O,r:l.size,stroke:l.color,strokeWidth:l.width,fill:l.backgroundColor}),(0,o.jsx)("circle",{cx:w,cy:O,r:h.size,stroke:h.color,strokeWidth:h.size,fill:h.color}),(0,o.jsx)(C,f({centerX:w,centerY:O,radius:l.size-p.length},p)),(0,o.jsx)(D,f({centerX:w,centerY:O,radius:l.size-j.length},j)),(0,o.jsx)(z,{centerX:w,centerY:O,radius:l.size-j.length,faceType:m}),(0,o.jsx)(S,f({centerX:w,centerY:O,degree:30*b},a)),(0,o.jsx)(S,f({centerX:w,centerY:O,degree:6*v},s)),(0,o.jsx)(S,f({centerX:w,centerY:O,degree:6*y},u))]})})},S=function(e){var n=e.centerX,t=e.centerY,r=e.degree,c=e.length,i=e.width,a=e.color,s=A(r);return(0,o.jsx)("line",{x1:n,y1:t,x2:n+c*Math.sin(s),y2:t-c*Math.cos(s),stroke:a,strokeWidth:i})},C=function(e){var n=e.centerX,t=e.centerY,r=e.radius,c=e.width,i=e.color,a=e.length;return(0,o.jsx)(_,{centerX:n,centerY:t,radius:r,length:a,count:12,width:c,color:i})},D=function(e){var n=e.centerX,t=e.centerY,r=e.radius,c=e.width,i=e.color,a=e.length;return(0,o.jsx)(_,{centerX:n,centerY:t,radius:r,length:a,count:60,width:c,color:i})},_=function(e){for(var n=e.centerX,t=e.centerY,r=e.radius,c=e.length,i=e.count,a=e.width,s=e.color,u=[],l=0;l<i;l++){var d=A(360/i*l),f=n+r*Math.sin(d),m=t+r*Math.cos(d),h=f+c*Math.sin(d),p=m+c*Math.cos(d);u.push((0,o.jsx)("line",{x1:f,y1:m,x2:h,y2:p,stroke:s,strokeWidth:a},l))}return(0,o.jsx)(o.Fragment,{children:u})},z=function(e){for(var n=e.centerX,t=e.centerY,r=e.radius,c=[],i=r/5,a=r-i,s={textAnchor:"middle",dominantBaseline:"central",fontSize:i,fontFamily:"monospace",fill:"black"},u=0;u<12;u++){var l=A(30*u),d=n+a*Math.sin(l),m=t-a*Math.cos(l);c.push((0,o.jsx)("text",h(f({x:d,y:m},s),{children:y(u,e.faceType)}),u))}return(0,o.jsx)(o.Fragment,{children:c})};function T(e){var n=f({},k,e),t=n.width,r=n.height,o=n.step,c=n.face,i=n.bigHand,a=n.smallHand,s=n.secondHand,u=n.frame,l=n.centerPoint,d=n.hourLines,m=n.minuteLines;return{width:t,height:r,step:o,face:c,bigHand:f({},k.bigHand,i),smallHand:f({},k.smallHand,a),secondHand:f({},k.secondHand,s),frame:f({},k.frame,u),centerPoint:f({},k.centerPoint,l),hourLines:f({},k.hourLines,d),minuteLines:f({},k.minuteLines,m)}}function A(e){return e*Math.PI/180}!function(e,n){for(var t in n)g(e,t,{get:n[t],enumerable:!0})}({},{zeroPad2:function(){return N},zeroPad3:function(){return M}});var I=function(e,n){return String(e).padStart(n,"0")},N=function(e){return I(e,2)},M=function(e){return I(e,3)},H=function(e){var n=e.timezone,t=e.date,c=r.ou.fromJSDate(t).setZone(n),i=N(c.hour%12),a=N(c.minute),s=N(c.second),u=c.hour<12?"AM":"PM";return(0,o.jsxs)("div",{style:{width:"20em",fontFamily:"monospace"},children:[i,":",a,":",s," ",u," (",n,")"]})},E=c.createContext(new Date),X=function(e){var n=e.children,t=p((0,c.useState)(new Date),2),r=t[0],a=t[1],s=e.refreshInterval||1e3;return(0,i.Z)(function(){a(new Date)},s),(0,o.jsx)(E.Provider,{value:r,children:n})}},"../../packages/stopwatch/dist/index.mjs":(e,n,t)=>{t.d(n,{KH:()=>h,P6:()=>b,Sq:()=>O,fT:()=>g});var r=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js"),c=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function a(e){if(Array.isArray(e))return e}function s(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],i=!0,a=!1;try{for(o=o.call(e);!(i=(t=o.next()).done)&&(c.push(t.value),!n||c.length!==n);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(a)throw r}}return c}}function u(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,n){return a(e)||s(e,n)||d(e,n)||u()}function d(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}}var f=Object.defineProperty,m=function(e,n){for(var t in n)f(e,t,{get:n[t],enumerable:!0})},h=r.createContext({elapsedTime:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){}});function p(e,n){return(n.getTime()-e.getTime())/1e3}function j(e){return p(e,new Date)}var g=function(e){var n,t,i,a=function(){k(j(_))},s=function(){C(S+O),k(0)},u=function(){y||(p(new CustomEvent("start",{})),z(new Date),x(!0))},d=function(){y&&(g(new CustomEvent("stop",{})),a(),x(!1),s())},f=e.children,m=function(e){},p=null!==(n=e.onStart)&&void 0!==n?n:m,g=null!==(t=e.onStop)&&void 0!==t?t:m,b=null!==(i=e.onReset)&&void 0!==i?i:m,v=l((0,r.useState)(!1),2),y=v[0],x=v[1],w=l((0,r.useState)(0),2),O=w[0],k=w[1],P=l((0,r.useState)(0),2),S=P[0],C=P[1],D=l((0,r.useState)(new Date),2),_=D[0],z=D[1],T=e.refreshInterval||10;(0,o.Z)(function(){y&&a()},T);var A=O+S;return(0,c.jsx)(h.Provider,{value:{elapsedTime:A,running:y,toggle:function(){y?d():u()},reset:function(){y&&d(),b(new CustomEvent("reset",{})),k(0),C(0)},start:u,stop:d},children:f})},b={};m(b,{zeroPad2:function(){return y},zeroPad3:function(){return x}});var v=function(e,n){return String(e).padStart(n,"0")},y=function(e){return v(e,2)},x=function(e){return v(e,3)};function w(e){return"".concat(y(Math.floor(e/60)),":").concat(y(e%60|0),".").concat(x(e%1*1e3))}var O=function(e){var n=e.elapsedTime,t=e.running,r=e.toggle,o=e.reset;return(0,c.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,c.jsxs)("form",{children:[(0,c.jsx)("span",{children:w(n)}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),o()},children:"Reset"}),(0,c.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),r()},children:t?"Stop":"Start"})]})})}},"../../packages/style-bulma/dist/index.mjs":(e,n,t)=>{t.d(n,{B7:()=>g,SU:()=>m,uX:()=>v});var r=t("../../packages/clock/dist/index.mjs"),o=t("../../node_modules/.pnpm/bulma@0.9.4/node_modules/bulma/css/bulma.css"),c=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("../../packages/timer/dist/index.mjs"),a=t("../../packages/stopwatch/dist/index.mjs");function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){s(e,n,t[n])})}return e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function d(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var f=function(e){var n=e.date,t=e.timezone,o=n.toLocaleTimeString("ja-JP",{timeZone:t,hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});return(0,c.jsx)("div",{className:"card",children:(0,c.jsxs)("div",{className:"card-content",children:[(0,c.jsx)(r.Og,u({},e)),(0,c.jsx)("p",{className:"title is-family-monospace",children:o})]})})},m=function(e){var n=e.timezone,t=e.refreshInterval,o=n||Intl.DateTimeFormat().resolvedOptions().timeZone;return(0,c.jsx)(r.UV,{refreshInterval:void 0===t?10:t,children:(0,c.jsx)(r.KW.Consumer,{children:function(e){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(f,{timezone:o,date:e})})}})})},h=function(e){return jsx("div",{className:"block",children:jsx("div",{className:"columns",children:jsx("div",{className:"column",children:jsx(AnalogClockOriginal,u({},e))})})})},p=function(e){return jsx(ClockContainer,{refreshInterval:10,children:jsx(DateContext.Consumer,{children:function(n){return jsx(Fragment,{children:jsx(h,d(u({},e),{date:n}))})}})})},j=function(e){var n=e.remaining,t=e.running,r=e.reset,o=e.toggle,a=e.incrementTimerValue,s="".concat(i.P6.zeroPad2(Math.floor(n/60)),":").concat(i.P6.zeroPad2(n%60|0),":").concat(i.P6.zeroPad3(n%1*1e3));return(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"card-content",children:(0,c.jsx)("p",{className:"title is-family-monospace",children:s})}),(0,c.jsxs)("footer",{className:"card-footer",children:[(0,c.jsx)("span",{className:"card-footer-item is-clickable",onClick:function(e){e.preventDefault(),a(60)},children:"+1m"}),(0,c.jsx)("span",{className:"card-footer-item is-clickable",onClick:function(e){e.preventDefault(),a(1)},children:"+1s"}),(0,c.jsx)("span",{className:"card-footer-item "+(t||0!==n?"is-clickable":"disable"),onClick:r,children:"Reset"}),(0,c.jsx)("span",{className:"card-footer-item is-clickable",onClick:o,children:t?"Stop":"Start"})]})]})},g=function(e){var n=e.onComplete;return(0,c.jsx)(i.oF,{onComplete:n,children:(0,c.jsx)(i.ax.Consumer,{children:function(e){return(0,c.jsx)(j,u({},e))}})})},b=function(e){var n=e.running,t=e.elapsedTime,r=e.reset,o=e.toggle,i="".concat(a.P6.zeroPad2(Math.floor(t/60)),":").concat(a.P6.zeroPad2(t%60|0),":").concat(a.P6.zeroPad3(t%1*1e3));return(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"card-content",children:(0,c.jsx)("p",{className:"title is-family-monospace",children:i})}),(0,c.jsxs)("footer",{className:"card-footer",children:[(0,c.jsx)("span",{className:"card-footer-item "+(n?"is-clickable":"disable"),onClick:r,children:"Reset"}),(0,c.jsx)("span",{className:"card-footer-item is-clickable",onClick:o,children:n?"Stop":"Start"})]})]})},v=function(){return(0,c.jsx)(a.fT,{children:(0,c.jsx)(a.KH.Consumer,{children:function(e){return(0,c.jsx)(b,u({},e))}})})}},"../../packages/timer/dist/index.mjs":(e,n,t)=>{t.d(n,{P6:()=>g,ax:()=>h,gZ:()=>w,oF:()=>j});var r=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js"),c=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function a(e){if(Array.isArray(e))return e}function s(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],i=!0,a=!1;try{for(o=o.call(e);!(i=(t=o.next()).done)&&(c.push(t.value),!n||c.length!==n);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(a)throw r}}return c}}function u(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,n){return a(e)||s(e,n)||d(e,n)||u()}function d(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}}var f=Object.defineProperty,m=function(e,n){for(var t in n)f(e,t,{get:n[t],enumerable:!0})},h=r.createContext({remaining:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){},incrementTimerValue:function(e){},setTimerValue:function(e){}});function p(e){return(e.getTime()-new Date().getTime())/1e3}var j=function(e){var n,t,i,a,s=function(){if(x){var e=p(k);D(e),e<=0&&(D(0),w(!1),b(new CustomEvent("complete",{})))}},u=function(){C<=0||x||(P(new Date(Date.now()+1e3*C)),w(!0),j(new CustomEvent("start",{})))},d=function(){x&&(w(!1),g(new CustomEvent("stop",{})))},f=e.children,m=function(e){},j=null!==(n=e.onStart)&&void 0!==n?n:m,g=null!==(t=e.onStop)&&void 0!==t?t:m,b=null!==(i=e.onComplete)&&void 0!==i?i:m,v=null!==(a=e.onReset)&&void 0!==a?a:m,y=l((0,r.useState)(!1),2),x=y[0],w=y[1],O=l((0,r.useState)(new Date),2),k=O[0],P=O[1],S=l((0,r.useState)(0),2),C=S[0],D=S[1],_=e.refreshInterval||10;return(0,o.Z)(function(){s()},_),(0,c.jsx)(h.Provider,{value:{remaining:C,running:x,toggle:function(){x?d():u()},reset:function(){x&&d(),D(0),v(new CustomEvent("reset",{}))},start:u,stop:d,setTimerValue:function(e){d(),D(e||0)},incrementTimerValue:function(e){d(),D(C+e)}},children:f})},g={};m(g,{zeroPad2:function(){return v},zeroPad3:function(){return y}});var b=function(e,n){return String(e).padStart(n,"0")},v=function(e){return b(e,2)},y=function(e){return b(e,3)};function x(e){return"".concat(v(Math.floor(e/60)),":").concat(v(e%60|0),".").concat(y(e%1*1e3))}var w=function(e){var n=e.remaining,t=e.running,r=e.incrementTimerValue,o=e.toggle,i=e.reset;return(0,c.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,c.jsxs)("form",{children:[(0,c.jsx)("span",{children:x(n)}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{type:"submit",name:"incrementMinute",onClick:function(e){e.preventDefault(),r(60)},children:"+分"}),(0,c.jsx)("button",{type:"submit",name:"incrementSecond",onClick:function(e){e.preventDefault(),r(1)},children:"+秒"}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),i()},children:"Reset"}),(0,c.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),o()},children:t?"Stop":"Start"})]})})}}}]);