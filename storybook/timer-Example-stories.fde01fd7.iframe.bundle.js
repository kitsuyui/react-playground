"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[120],{"./stories/timer/Example.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Default:()=>y,default:()=>h});var r,o,i,c=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");n("../../packages/clock/dist/index.mjs"),n("../../packages/stopwatch/dist/index.mjs");var u=n("../../packages/timer/dist/index.mjs"),a=function(e){var t=e.onComplete;return(0,c.jsx)(u.oF,{onComplete:t,children:(0,c.jsx)(u.ax.Consumer,{children:function(e){return(0,c.jsx)(u.gZ,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({},e))}})})},l=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let f=function(e,t){void 0===t&&(t={});var r=t,o=r.volume,i=void 0===o?1:o,c=r.playbackRate,u=void 0===c?1:c,a=r.soundEnabled,f=void 0===a||a,d=r.interrupt,m=void 0!==d&&d,p=r.onload,h=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(r,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),y=l.useRef(null),b=l.useRef(!1),v=l.useState(null),g=v[0],j=v[1],w=l.useState(null),x=w[0],O=w[1],S=function(){"function"==typeof p&&p.call(this),b.current&&j(1e3*this.duration()),O(this)};!function(e){(0,l.useEffect)(e,[])}(function(){return n.e(345).then(n.t.bind(n,"../../node_modules/.pnpm/howler@2.2.4/node_modules/howler/dist/howler.js",23)).then(function(t){if(!b.current){var n;y.current=null!==(n=t.Howl)&&void 0!==n?n:t.default.Howl,b.current=!0,new y.current(s({src:Array.isArray(e)?e:[e],volume:i,rate:u,onload:S},h))}}),function(){b.current=!1}}),l.useEffect(function(){y.current&&x&&O(new y.current(s({src:Array.isArray(e)?e:[e],volume:i,onload:S},h)))},[JSON.stringify(e)]),l.useEffect(function(){x&&(x.volume(i),x.rate(u))},[i,u]);var k=l.useCallback(function(e){void 0===e&&(e={}),x&&(f||e.forceSoundEnabled)&&(m&&x.stop(),e.playbackRate&&x.rate(e.playbackRate),x.play(e.id))},[x,f,m]),P=l.useCallback(function(e){x&&x.stop(e)},[x]),_=l.useCallback(function(e){x&&x.pause(e)},[x]);return[k,{sound:x,stop:P,pause:_,duration:g}]};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}let h={title:"Base/Timer/Example",component:function(){var e=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],c=!0,u=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(u)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(f("/sound_effects/24.wav",{playbackRate:1}),1)[0];return(0,c.jsx)(a,{onComplete:function(){return e()}})}};var y={args:{onComplete:function(){}}};y.parameters=p(m({},y.parameters),{docs:p(m({},null===(r=y.parameters)||void 0===r?void 0:r.docs),{source:m({originalSource:"{\n  args: {\n    onComplete: () => {\n      return;\n    }\n  }\n}"},null===(i=y.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})})},"../../packages/clock/dist/index.mjs":(e,t,n)=>{n.d(t,{Og:()=>l,UV:()=>j,KW:()=>g,Im:()=>k});var r=n("../../node_modules/.pnpm/luxon@3.4.3/node_modules/luxon/src/luxon.js"),o=function(e){switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return"".concat(e)},i=function(e,t){switch(t){case"arabic":return function(e){return 0===e?"12":"".concat(e)}(e);case"roman":return o(e)}},c=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}var a={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},l=function(e){var t=e.timezone,n=e.date,o=function(e){var t=u({},a,e),n=t.width,r=t.height,o=t.step,i=t.face,c=t.bigHand,l=t.smallHand,s=t.secondHand,f=t.frame,d=t.centerPoint,m=t.hourLines,p=t.minuteLines;return{width:n,height:r,step:o,face:i,bigHand:u({},a.bigHand,c),smallHand:u({},a.smallHand,l),secondHand:u({},a.secondHand,s),frame:u({},a.frame,f),centerPoint:u({},a.centerPoint,d),hourLines:u({},a.hourLines,m),minuteLines:u({},a.minuteLines,p)}}(e),i=o.width,l=o.height,m=o.bigHand,h=o.smallHand,y=o.secondHand,b=o.frame,v=o.step,g=o.face,j=o.centerPoint,w=o.hourLines,x=o.minuteLines,O=function(e,t,n){switch(n){case"tick":return function(e,t){var n=r.ou.fromJSDate(e).setZone(t),o=n.minute/12|0;return{hour:n.hour+o/5,minute:n.minute,second:n.second}}(e,t);case"sweep":return function(e,t){var n=r.ou.fromJSDate(e).setZone(t);return{hour:n.hour+n.minute/60+n.second/3600,minute:n.minute+n.second/60,second:n.second+n.millisecond/1e3}}(e,t)}}(n,t,v),S=O.hour,k=O.minute,P=O.second,_=i/2,C=l/2;return(0,c.jsx)("div",{style:{width:"".concat(i,"px"),height:"".concat(l,"px")},children:(0,c.jsxs)("svg",{viewBox:"0 0 ".concat(i," ").concat(l),fill:"none",xmlns:"http://www.w3.org/2000/svg",width:i,height:l,children:[(0,c.jsx)("circle",{cx:_,cy:C,r:b.size,stroke:b.color,strokeWidth:b.width,fill:b.backgroundColor}),(0,c.jsx)("circle",{cx:_,cy:C,r:j.size,stroke:j.color,strokeWidth:j.size,fill:j.color}),(0,c.jsx)(f,u({centerX:_,centerY:C,radius:b.size-w.length},w)),(0,c.jsx)(d,u({centerX:_,centerY:C,radius:b.size-x.length},x)),(0,c.jsx)(p,{centerX:_,centerY:C,radius:b.size-x.length,faceType:g}),(0,c.jsx)(s,u({centerX:_,centerY:C,degree:30*S},m)),(0,c.jsx)(s,u({centerX:_,centerY:C,degree:6*k},h)),(0,c.jsx)(s,u({centerX:_,centerY:C,degree:6*P},y))]})})},s=function(e){var t=e.centerX,n=e.centerY,r=e.degree,o=e.length,i=e.width,u=e.color,a=h(r),l=t+o*Math.sin(a),s=n-o*Math.cos(a);return(0,c.jsx)("line",{x1:t,y1:n,x2:l,y2:s,stroke:u,strokeWidth:i})},f=function(e){var t=e.centerX,n=e.centerY,r=e.radius,o=e.width,i=e.color,u=e.length;return(0,c.jsx)(m,{centerX:t,centerY:n,radius:r,length:u,count:12,width:o,color:i})},d=function(e){var t=e.centerX,n=e.centerY,r=e.radius,o=e.width,i=e.color,u=e.length;return(0,c.jsx)(m,{centerX:t,centerY:n,radius:r,length:u,count:60,width:o,color:i})},m=function(e){for(var t=e.centerX,n=e.centerY,r=e.radius,o=e.length,i=e.count,u=e.width,a=e.color,l=[],s=0;s<i;s++){var f=h(360/i*s),d=t+r*Math.sin(f),m=n+r*Math.cos(f),p=d+o*Math.sin(f),y=m+o*Math.cos(f);l.push((0,c.jsx)("line",{x1:d,y1:m,x2:p,y2:y,stroke:a,strokeWidth:u},s))}return(0,c.jsx)(c.Fragment,{children:l})},p=function(e){for(var t=e.centerX,n=e.centerY,r=e.radius,o=[],a=r/5,l=r-a,s={textAnchor:"middle",dominantBaseline:"central",fontSize:a,fontFamily:"monospace",fill:"black"},f=0;f<12;f++){var d=h(30*f),m=t+l*Math.sin(d),p=n-l*Math.cos(d);o.push((0,c.jsx)("text",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(u({x:m,y:p},s),{children:i(f,e.faceType)}),f))}return(0,c.jsx)(c.Fragment,{children:o})};function h(e){return e*Math.PI/180}var y=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=n("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var g=y.createContext(new Date),j=function(e){var t=e.children,n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],c=!0,u=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(u)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,y.useState)(new Date),2),r=n[0],o=n[1],i=e.refreshInterval||1e3;return(0,b.Z)(function(){o(new Date)},i),(0,c.jsx)(g.Provider,{value:r,children:t})},w=Object.defineProperty;!function(e,t){for(var n in t)w(e,n,{get:t[n],enumerable:!0})}({},{zeroPad2:function(){return O},zeroPad3:function(){return S}});var x=function(e,t){return String(e).padStart(t,"0")},O=function(e){return x(e,2)},S=function(e){return x(e,3)},k=function(e){var t=e.timezone,n=P(e.date,t);return(0,c.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:n})},P=function(e,t){var n=r.ou.fromJSDate(e).setZone(t),o=O(n.hour%12),i=O(n.minute),c=O(n.second),u=n.hour<12?"AM":"PM";return"".concat(o,":").concat(i,":").concat(c," ").concat(u," (").concat(t,")")}},"../../packages/stopwatch/dist/index.mjs":(e,t,n)=>{n.d(t,{Sq:()=>l,fT:()=>h,KH:()=>p,P6:()=>o});var r=Object.defineProperty,o={};!function(e,t){for(var n in t)r(e,n,{get:t[n],enumerable:!0})}(o,{zeroPad2:function(){return c},zeroPad3:function(){return u}});var i=function(e,t){return String(e).padStart(t,"0")},c=function(e){return i(e,2)},u=function(e){return i(e,3)},a=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=function(e){var t=e.elapsedTime,n=e.running,r=e.toggle,o=e.reset;return(0,a.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,a.jsxs)("form",{children:[(0,a.jsx)("span",{children:function(e){return"".concat(c(Math.floor(e/60)),":").concat(c(e%60|0),".").concat(u(e%1*1e3|0))}(t)}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),o()},children:"Reset"}),(0,a.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),r()},children:n?"Stop":"Start"})]})})},s=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=n("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],c=!0,u=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(u)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=s.createContext({elapsedTime:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){}}),h=function(e){var t,n,r,o=e.children,i=function(e){},c=null!==(t=e.onStart)&&void 0!==t?t:i,u=null!==(n=e.onStop)&&void 0!==n?n:i,l=null!==(r=e.onReset)&&void 0!==r?r:i,d=m((0,s.useState)(!1),2),h=d[0],y=d[1],b=m((0,s.useState)(0),2),v=b[0],g=b[1],j=m((0,s.useState)(0),2),w=j[0],x=j[1],O=m((0,s.useState)(new Date),2),S=O[0],k=O[1],P=e.refreshInterval||10;(0,f.Z)(function(){h&&_()},P);var _=function(){g(function(e){return function(e,t){return(t.getTime()-e.getTime())/1e3}(e,new Date)}(S))},C=function(){x(w+v),g(0)},D=function(){h||(c(new CustomEvent("start",{})),k(new Date),y(!0))},A=function(){h&&(u(new CustomEvent("stop",{})),_(),y(!1),C())};return(0,a.jsx)(p.Provider,{value:{elapsedTime:v+w,running:h,toggle:function(){h?A():D()},reset:function(){h&&A(),l(new CustomEvent("reset",{})),g(0),x(0)},start:D,stop:A},children:o})}},"../../packages/timer/dist/index.mjs":(e,t,n)=>{n.d(t,{gZ:()=>l,oF:()=>h,ax:()=>p,P6:()=>o});var r=Object.defineProperty,o={};!function(e,t){for(var n in t)r(e,n,{get:t[n],enumerable:!0})}(o,{zeroPad2:function(){return c},zeroPad3:function(){return u}});var i=function(e,t){return String(e).padStart(t,"0")},c=function(e){return i(e,2)},u=function(e){return i(e,3)},a=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=function(e){var t=e.remaining,n=e.running,r=e.incrementTimerValue,o=e.toggle,i=e.reset;return(0,a.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,a.jsxs)("form",{children:[(0,a.jsx)("span",{children:function(e){return"".concat(c(Math.floor(e/60)),":").concat(c(e%60|0),".").concat(u(e%1*1e3|0))}(t)}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",name:"incrementMinute",onClick:function(e){e.preventDefault(),r(60)},children:"+分"}),(0,a.jsx)("button",{type:"submit",name:"incrementSecond",onClick:function(e){e.preventDefault(),r(1)},children:"+秒"}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",name:"reset",onClick:function(e){e.preventDefault(),i()},children:"Reset"}),(0,a.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),o()},children:n?"Stop":"Start"})]})})},s=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=n("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],c=!0,u=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(u)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=s.createContext({remaining:0,running:!1,start:function(){},stop:function(){},toggle:function(){},reset:function(){},incrementTimerValue:function(e){},setTimerValue:function(e){}}),h=function(e){var t,n,r,o,i=e.children,c=function(e){},u=null!==(t=e.onStart)&&void 0!==t?t:c,l=null!==(n=e.onStop)&&void 0!==n?n:c,d=null!==(r=e.onComplete)&&void 0!==r?r:c,h=null!==(o=e.onReset)&&void 0!==o?o:c,y=m((0,s.useState)(!1),2),b=y[0],v=y[1],g=m((0,s.useState)(new Date),2),j=g[0],w=g[1],x=m((0,s.useState)(0),2),O=x[0],S=x[1],k=e.refreshInterval||10;(0,f.Z)(function(){P()},k);var P=function(){if(b){var e=function(e){return(e.getTime()-new Date().getTime())/1e3}(j);S(e),e<=0&&(S(0),v(!1),d(new CustomEvent("complete",{})))}},_=function(){O<=0||b||(w(new Date(Date.now()+1e3*O)),v(!0),u(new CustomEvent("start",{})))},C=function(){b&&(v(!1),l(new CustomEvent("stop",{})))};return(0,a.jsx)(p.Provider,{value:{remaining:O,running:b,toggle:function(){b?C():_()},reset:function(){b&&C(),S(0),h(new CustomEvent("reset",{}))},start:_,stop:C,setTimerValue:function(e){C(),S(e||0)},incrementTimerValue:function(e){C(),S(O+e)}},children:i})}}}]);