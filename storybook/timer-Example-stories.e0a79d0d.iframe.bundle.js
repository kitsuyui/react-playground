"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[543],{"./stories/timer/Example.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>d,__namedExportsOrder:()=>f,default:()=>l}),n("../../packages/clock/dist/index.mjs"),n("../../packages/stopwatch/dist/index.mjs");var r=n("../../packages/timer/dist/index.mjs"),o=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),c=function(e){var t=e.onComplete;return(0,o.jsx)(r.f9,{onComplete:t,children:(0,o.jsx)(r.PT.Consumer,{children:function(e){return(0,o.jsx)(r.le,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o,c;c=n[t],t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c})}return e}({},e))}})})},a=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let u=function(e,t){void 0===t&&(t={});var r,o=t,c=o.volume,u=void 0===c?1:c,s=o.playbackRate,l=void 0===s?1:s,d=o.soundEnabled,f=void 0===d||d,m=o.interrupt,p=void 0!==m&&m,h=o.onload,y=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t.indexOf(n=c[r])>=0||(o[n]=e[n]);return o}(o,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),v=a.useRef(null),b=a.useRef(!1),g=a.useState(null),j=g[0],w=g[1],x=a.useState(null),S=x[0],k=x[1],O=function(){"function"==typeof h&&h.call(this),b.current&&w(1e3*this.duration()),k(this)};r=function(){return n.e(582).then(n.t.bind(n,"../../node_modules/.pnpm/howler@2.2.4/node_modules/howler/dist/howler.js",23)).then(function(t){if(!b.current){var n;v.current=null!==(n=t.Howl)&&void 0!==n?n:t.default.Howl,b.current=!0,new v.current(i({src:Array.isArray(e)?e:[e],volume:u,rate:l,onload:O},y))}}),function(){b.current=!1}},(0,a.useEffect)(r,[]),a.useEffect(function(){v.current&&S&&k(new v.current(i({src:Array.isArray(e)?e:[e],volume:u,onload:O},y)))},[JSON.stringify(e)]),a.useEffect(function(){S&&(S.volume(u),S.rate(l))},[u,l]);var _=a.useCallback(function(e){void 0===e&&(e={}),S&&(f||e.forceSoundEnabled)&&(p&&S.stop(),e.playbackRate&&S.rate(e.playbackRate),S.play(e.id))},[S,f,p]),P=a.useCallback(function(e){S&&S.stop(e)},[S]),C=a.useCallback(function(e){S&&S.pause(e)},[S]);return[_,{sound:S,stop:P,pause:C,duration:j}]};function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}let l={title:"Base/Timer/Example",component:function(){var e,t=(function(e){if(Array.isArray(e))return e}(e=u("/sound_effects/24.wav",{playbackRate:1}))||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],a=!0,i=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(c.push(n.value),1!==c.length);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return c}}(e,1)||function(e,t){if(e){if("string"==typeof e)return s(e,1);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,1)}}(e,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return a.createElement(c,{onComplete:function(){return t()}})}};var d={args:{onComplete:function(){}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {\n    onComplete: () => {\n      return;\n    }\n  }\n}",...d.parameters?.docs?.source}}};let f=["Default"]},"../../packages/clock/dist/index.mjs":(e,t,n)=>{n.d(t,{TX:()=>s,C_:()=>j,ec:()=>g,NX:()=>O});var r=n("../../node_modules/.pnpm/luxon@3.4.4/node_modules/luxon/src/luxon.js"),o=function(e){switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return"".concat(e)},c=function(e,t){switch(t){case"arabic":return 0===e?"12":"".concat(e);case"roman":return o(e)}},a=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o,c;c=n[t],t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c})}return e}var u={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},s=function(e){var t,n,o,c,s,m,h,y,v,b,g,j,w=e.timezone,x=e.date,S=(n=(t=i({},u,e)).width,o=t.height,c=t.step,s=t.face,m=t.bigHand,h=t.smallHand,y=t.secondHand,v=t.frame,b=t.centerPoint,g=t.hourLines,j=t.minuteLines,{width:n,height:o,step:c,face:s,bigHand:i({},u.bigHand,m),smallHand:i({},u.smallHand,h),secondHand:i({},u.secondHand,y),frame:i({},u.frame,v),centerPoint:i({},u.centerPoint,b),hourLines:i({},u.hourLines,g),minuteLines:i({},u.minuteLines,j)}),k=S.width,O=S.height,_=S.bigHand,P=S.smallHand,C=S.secondHand,A=S.frame,D=S.step,E=S.face,T=S.centerPoint,I=S.hourLines,M=S.minuteLines,z=function(e,t,n){var o,c,a,i,u,s,l;switch(n){case"tick":return o=e,c=t,i=(a=r.c9.fromJSDate(e).setZone(t)).minute/12|0,{hour:a.hour+i/5,minute:a.minute,second:a.second};case"sweep":return u=e,s=t,{hour:(l=r.c9.fromJSDate(e).setZone(t)).hour+l.minute/60+l.second/3600,minute:l.minute+l.second/60,second:l.second+l.millisecond/1e3}}}(x,w,D),H=z.hour,X=z.minute,Y=z.second,R=k/2,L=O/2;return(0,a.jsx)("div",{style:{width:"".concat(k,"px"),height:"".concat(O,"px")},children:(0,a.jsxs)("svg",{viewBox:"0 0 ".concat(k," ").concat(O),fill:"none",xmlns:"http://www.w3.org/2000/svg",width:k,height:O,children:[(0,a.jsx)("title",{children:"".concat(H,":").concat(X,":").concat(Y)}),(0,a.jsx)("circle",{cx:R,cy:L,r:A.size,stroke:A.color,strokeWidth:A.width,fill:A.backgroundColor}),(0,a.jsx)("circle",{cx:R,cy:L,r:T.size,stroke:T.color,strokeWidth:T.size,fill:T.color}),(0,a.jsx)(d,i({centerX:R,centerY:L,radius:A.size-I.length},I)),(0,a.jsx)(f,i({centerX:R,centerY:L,radius:A.size-M.length},M)),(0,a.jsx)(p,{centerX:R,centerY:L,radius:A.size-M.length,faceType:E}),(0,a.jsx)(l,i({centerX:R,centerY:L,degree:30*H},_)),(0,a.jsx)(l,i({centerX:R,centerY:L,degree:6*X},P)),(0,a.jsx)(l,i({centerX:R,centerY:L,degree:6*Y},C))]})})},l=function(e){var t=e.centerX,n=e.centerY,r=e.degree,o=e.length,c=e.width,i=e.color,u=h(r),s=t+o*Math.sin(u),l=n-o*Math.cos(u);return(0,a.jsx)("line",{x1:t,y1:n,x2:s,y2:l,stroke:i,strokeWidth:c})},d=function(e){var t=e.centerX,n=e.centerY,r=e.radius,o=e.width,c=e.color,i=e.length;return(0,a.jsx)(m,{centerX:t,centerY:n,radius:r,length:i,count:12,width:o,color:c})},f=function(e){var t=e.centerX,n=e.centerY,r=e.radius,o=e.width,c=e.color,i=e.length;return(0,a.jsx)(m,{centerX:t,centerY:n,radius:r,length:i,count:60,width:o,color:c})},m=function(e){for(var t=e.centerX,n=e.centerY,r=e.radius,o=e.length,c=e.count,i=e.width,u=e.color,s=[],l=0;l<c;l++){var d=h(360/c*l),f=t+r*Math.sin(d),m=n+r*Math.cos(d),p=f+o*Math.sin(d),y=m+o*Math.cos(d);s.push((0,a.jsx)("line",{x1:f,y1:m,x2:p,y2:y,stroke:u,strokeWidth:i},l))}return(0,a.jsx)(a.Fragment,{children:s})},p=function(e){for(var t=e.centerX,n=e.centerY,r=e.radius,o=[],u=r/5,s=r-u,l={textAnchor:"middle",dominantBaseline:"central",fontSize:u,fontFamily:"monospace",fill:"black"},d=0;d<12;d++){var f=h(30*d),m=t+s*Math.sin(f),p=n-s*Math.cos(f);o.push((0,a.jsx)("text",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(i({x:m,y:p},l),{children:c(d,e.faceType)}),d))}return(0,a.jsx)(a.Fragment,{children:o})};function h(e){return e*Math.PI/180}var y=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=n("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js");function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var g=y.createContext(new Date),j=function(e){var t,n=e.children,r=function(e){if(Array.isArray(e))return e}(t=(0,y.useState)(new Date))||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],a=!0,i=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(c.push(n.value),2!==c.length);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return c}}(t,2)||function(e,t){if(e){if("string"==typeof e)return b(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=r[0],c=r[1],i=e.refreshInterval||1e3;return(0,v.A)(function(){c(new Date)},i),(0,a.jsx)(g.Provider,{value:o,children:n})},w=Object.defineProperty;!function(e,t){for(var n in t)w(e,n,{get:t[n],enumerable:!0})}({},{zeroPad2:function(){return S},zeroPad3:function(){return k}});var x=function(e,t){return String(e).padStart(t,"0")},S=function(e){return x(e,2)},k=function(e){return x(e,3)},O=function(e){var t=e.timezone,n=_(e.date,t);return(0,a.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:n})},_=function(e,t){var n=r.c9.fromJSDate(e).setZone(t),o=S(n.hour%12),c=S(n.minute),a=S(n.second),i=n.hour<12?"AM":"PM";return"".concat(o,":").concat(c,":").concat(a," ").concat(i," (").concat(t,")")}},"../../packages/stopwatch/dist/index.mjs":(e,t,n)=>{n.d(t,{zG:()=>l,pv:()=>v,TM:()=>h,Wp:()=>o});var r=Object.defineProperty,o={};!function(e,t){for(var n in t)r(e,n,{get:t[n],enumerable:!0})}(o,{zeroPad2:function(){return a},zeroPad3:function(){return i}});var c=function(e,t){return String(e).padStart(t,"0")},a=function(e){return c(e,2)},i=function(e){return c(e,3)},u=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=function(e){var t=Math.floor(e/60);return"".concat(a(t),":").concat(a(e%60|0),".").concat(i(e%1*1e3|0))},l=function(e){var t=e.elapsedTime,n=e.running,r=e.toggle,o=e.reset;return(0,u.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,u.jsxs)("form",{children:[(0,u.jsx)("span",{children:s(t)}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),o()},children:"Reset"}),(0,u.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),r()},children:n?"Stop":"Start"})]})})},d=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=n("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js");function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],a=!0,i=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=d.createContext({elapsedTime:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){}}),y=function(e){return(new Date().getTime()-e.getTime())/1e3},v=function(e){var t,n,r,o=e.children,c=function(e){},a=null!==(t=e.onStart)&&void 0!==t?t:c,i=null!==(n=e.onStop)&&void 0!==n?n:c,s=null!==(r=e.onReset)&&void 0!==r?r:c,l=p((0,d.useState)(!1),2),m=l[0],v=l[1],b=p((0,d.useState)(0),2),g=b[0],j=b[1],w=p((0,d.useState)(0),2),x=w[0],S=w[1],k=p((0,d.useState)(new Date),2),O=k[0],_=k[1],P=e.refreshInterval||10;(0,f.A)(function(){m&&C()},P);var C=function(){j(y(O))},A=function(){S(x+g),j(0)},D=function(){m||(a(new CustomEvent("start",{})),_(new Date),v(!0))},E=function(){m&&(i(new CustomEvent("stop",{})),C(),v(!1),A())};return(0,u.jsx)(h.Provider,{value:{elapsedTime:g+x,running:m,toggle:function(){m?E():D()},reset:function(){m&&E(),s(new CustomEvent("reset",{})),j(0),S(0)},start:D,stop:E},children:o})}},"../../packages/timer/dist/index.mjs":(e,t,n)=>{n.d(t,{le:()=>l,f9:()=>y,PT:()=>h,Wp:()=>o});var r=Object.defineProperty,o={};!function(e,t){for(var n in t)r(e,n,{get:t[n],enumerable:!0})}(o,{zeroPad2:function(){return a},zeroPad3:function(){return i}});var c=function(e,t){return String(e).padStart(t,"0")},a=function(e){return c(e,2)},i=function(e){return c(e,3)},u=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=function(e){var t=Math.floor(e/60);return"".concat(a(t),":").concat(a(e%60|0),".").concat(i(e%1*1e3|0))},l=function(e){var t=e.remaining,n=e.running,r=e.incrementTimerValue,o=e.toggle,c=e.reset;return(0,u.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,u.jsxs)("form",{children:[(0,u.jsx)("span",{children:s(t)}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{type:"submit",name:"incrementMinute",onClick:function(e){e.preventDefault(),r(60)},children:"+分"}),(0,u.jsx)("button",{type:"submit",name:"incrementSecond",onClick:function(e){e.preventDefault(),r(1)},children:"+秒"}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),c()},children:"Reset"}),(0,u.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),o()},children:n?"Stop":"Start"})]})})},d=n("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=n("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useInterval.js");function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],a=!0,i=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=d.createContext({remaining:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){},incrementTimerValue:function(e){},setTimerValue:function(e){}}),y=function(e){var t,n,r,o,c=e.children,a=function(e){},i=null!==(t=e.onStart)&&void 0!==t?t:a,s=null!==(n=e.onStop)&&void 0!==n?n:a,l=null!==(r=e.onComplete)&&void 0!==r?r:a,m=null!==(o=e.onReset)&&void 0!==o?o:a,y=p((0,d.useState)(!1),2),v=y[0],b=y[1],g=p((0,d.useState)(new Date),2),j=g[0],w=g[1],x=p((0,d.useState)(0),2),S=x[0],k=x[1],O=e.refreshInterval||10;(0,f.A)(function(){_()},O);var _=function(){if(v){var e=(j.getTime()-new Date().getTime())/1e3;k(e),e<=0&&(k(0),b(!1),l(new CustomEvent("complete",{})))}},P=function(){S<=0||v||(w(new Date(Date.now()+1e3*S)),b(!0),i(new CustomEvent("start",{})))},C=function(){v&&(b(!1),s(new CustomEvent("stop",{})))};return(0,u.jsx)(h.Provider,{value:{remaining:S,running:v,toggle:function(){v?C():P()},reset:function(){v&&C(),k(0),m(new CustomEvent("reset",{}))},start:P,stop:C,setTimerValue:function(e){C(),k(e||0)},incrementTimerValue:function(e){C(),k(S+e)}},children:c})}}}]);