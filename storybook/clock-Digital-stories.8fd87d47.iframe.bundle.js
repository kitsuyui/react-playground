"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[825],{"./stories/clock/Digital.stories.tsx":function(e,t,r){function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}r.r(t),r.d(t,{Default:function(){return f},Tokyo:function(){return h}});var c,i,a,u,s,l,d={title:"Base/Clock/Digital",component:r("../../packages/clock/dist/index.mjs").Im};t.default=d;var f={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"UTC"}},h={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"Asia/Tokyo"}};f.parameters=o(n({},f.parameters),{docs:o(n({},null===(c=f.parameters)||void 0===c?void 0:c.docs),{source:n({originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'UTC'\n  }\n}"},null===(a=f.parameters)||void 0===a?void 0:null===(i=a.docs)||void 0===i?void 0:i.source)})}),h.parameters=o(n({},h.parameters),{docs:o(n({},null===(u=h.parameters)||void 0===u?void 0:u.docs),{source:n({originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'Asia/Tokyo'\n  }\n}"},null===(l=h.parameters)||void 0===l?void 0:null===(s=l.docs)||void 0===s?void 0:s.source)})})},"../../packages/clock/dist/index.mjs":function(e,t,r){r.d(t,{Og:function(){return s},UV:function(){return j},KW:function(){return w},Im:function(){return P}});var n=r("../../node_modules/.pnpm/luxon@3.4.3/node_modules/luxon/src/luxon.js"),o=function(e){switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return"".concat(e)},c=function(e,t){switch(t){case"arabic":return function(e){return 0===e?"12":"".concat(e)}(e);case"roman":return o(e)}},i=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}var u={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},s=function(e){var t=e.timezone,r=e.date,o=function(e){var t=a({},u,e),r=t.width,n=t.height,o=t.step,c=t.face,i=t.bigHand,s=t.smallHand,l=t.secondHand,d=t.frame,f=t.centerPoint,h=t.hourLines,m=t.minuteLines;return{width:r,height:n,step:o,face:c,bigHand:a({},u.bigHand,i),smallHand:a({},u.smallHand,s),secondHand:a({},u.secondHand,l),frame:a({},u.frame,d),centerPoint:a({},u.centerPoint,f),hourLines:a({},u.hourLines,h),minuteLines:a({},u.minuteLines,m)}}(e),c=o.width,s=o.height,h=o.bigHand,p=o.smallHand,b=o.secondHand,g=o.frame,y=o.step,w=o.face,j=o.centerPoint,v=o.hourLines,O=o.minuteLines,x=function(e,t,r){switch(r){case"tick":return function(e,t){var r=n.ou.fromJSDate(e).setZone(t),o=r.minute/12|0;return{hour:r.hour+o/5,minute:r.minute,second:r.second}}(e,t);case"sweep":return function(e,t){var r=n.ou.fromJSDate(e).setZone(t);return{hour:r.hour+r.minute/60+r.second/3600,minute:r.minute+r.second/60,second:r.second+r.millisecond/1e3}}(e,t)}}(r,t,y),k=x.hour,P=x.minute,D=x.second,S=c/2,z=s/2;return(0,i.jsx)("div",{style:{width:"".concat(c,"px"),height:"".concat(s,"px")},children:(0,i.jsxs)("svg",{viewBox:"0 0 ".concat(c," ").concat(s),fill:"none",xmlns:"http://www.w3.org/2000/svg",width:c,height:s,children:[(0,i.jsx)("circle",{cx:S,cy:z,r:g.size,stroke:g.color,strokeWidth:g.width,fill:g.backgroundColor}),(0,i.jsx)("circle",{cx:S,cy:z,r:j.size,stroke:j.color,strokeWidth:j.size,fill:j.color}),(0,i.jsx)(d,a({centerX:S,centerY:z,radius:g.size-v.length},v)),(0,i.jsx)(f,a({centerX:S,centerY:z,radius:g.size-O.length},O)),(0,i.jsx)(m,{centerX:S,centerY:z,radius:g.size-O.length,faceType:w}),(0,i.jsx)(l,a({centerX:S,centerY:z,degree:30*k},h)),(0,i.jsx)(l,a({centerX:S,centerY:z,degree:6*P},p)),(0,i.jsx)(l,a({centerX:S,centerY:z,degree:6*D},b))]})})},l=function(e){var t=e.centerX,r=e.centerY,n=e.degree,o=e.length,c=e.width,a=e.color,u=p(n);return(0,i.jsx)("line",{x1:t,y1:r,x2:t+o*Math.sin(u),y2:r-o*Math.cos(u),stroke:a,strokeWidth:c})},d=function(e){var t=e.centerX,r=e.centerY,n=e.radius,o=e.width,c=e.color,a=e.length;return(0,i.jsx)(h,{centerX:t,centerY:r,radius:n,length:a,count:12,width:o,color:c})},f=function(e){var t=e.centerX,r=e.centerY,n=e.radius,o=e.width,c=e.color,a=e.length;return(0,i.jsx)(h,{centerX:t,centerY:r,radius:n,length:a,count:60,width:o,color:c})},h=function(e){for(var t=e.centerX,r=e.centerY,n=e.radius,o=e.length,c=e.count,a=e.width,u=e.color,s=[],l=0;l<c;l++){var d=p(360/c*l),f=t+n*Math.sin(d),h=r+n*Math.cos(d),m=f+o*Math.sin(d),b=h+o*Math.cos(d);s.push((0,i.jsx)("line",{x1:f,y1:h,x2:m,y2:b,stroke:u,strokeWidth:a},l))}return(0,i.jsx)(i.Fragment,{children:s})},m=function(e){for(var t=e.centerX,r=e.centerY,n=e.radius,o=[],u=n/5,s=n-u,l={textAnchor:"middle",dominantBaseline:"central",fontSize:u,fontFamily:"monospace",fill:"black"},d=0;d<12;d++){var f=p(30*d),h=t+s*Math.sin(f),m=r-s*Math.cos(f);o.push((0,i.jsx)("text",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(a({x:h,y:m},l),{children:c(d,e.faceType)}),d))}return(0,i.jsx)(i.Fragment,{children:o})};function p(e){return e*Math.PI/180}var b=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var w=b.createContext(new Date),j=function(e){var t=e.children,r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],i=!0,a=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(e){a=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(a)throw n}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,b.useState)(new Date),2),n=r[0],o=r[1],c=e.refreshInterval||1e3;return(0,g.Z)(function(){o(new Date)},c),(0,i.jsx)(w.Provider,{value:n,children:t})},v=Object.defineProperty;!function(e,t){for(var r in t)v(e,r,{get:t[r],enumerable:!0})}({},{zeroPad2:function(){return x},zeroPad3:function(){return k}});var O=function(e,t){return String(e).padStart(t,"0")},x=function(e){return O(e,2)},k=function(e){return O(e,3)},P=function(e){var t=e.timezone,r=D(e.date,t);return(0,i.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:r})},D=function(e,t){var r=n.ou.fromJSDate(e).setZone(t),o=x(r.hour%12),c=x(r.minute),i=x(r.second),a=r.hour<12?"AM":"PM";return"".concat(o,":").concat(c,":").concat(i," ").concat(a," (").concat(t,")")}}}]);