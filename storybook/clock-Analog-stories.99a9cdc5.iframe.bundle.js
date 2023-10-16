"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[75],{"./stories/clock/Analog.stories.tsx":function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.r(t),n.d(t,{Default:function(){return y},Roman:function(){return v},Sweep:function(){return w},Tokyo:function(){return j}});var c,a,i,s,u,l,d,f,m,h,p,b,g={title:"Base/Clock/Analog",component:n("../../packages/clock/dist/index.mjs").Og};t.default=g;var y={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"UTC",face:"arabic",step:"tick"}},v={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"UTC",face:"roman",step:"tick"}},w={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"UTC",face:"arabic",step:"sweep"}},j={args:{date:new Date("2023-01-01T10:08:42Z"),timezone:"Asia/Tokyo",face:"arabic",step:"tick"}};y.parameters=o(r({},y.parameters),{docs:o(r({},null===(c=y.parameters)||void 0===c?void 0:c.docs),{source:r({originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'UTC',\n    face: 'arabic',\n    step: 'tick'\n  }\n}"},null===(i=y.parameters)||void 0===i?void 0:null===(a=i.docs)||void 0===a?void 0:a.source)})}),v.parameters=o(r({},v.parameters),{docs:o(r({},null===(s=v.parameters)||void 0===s?void 0:s.docs),{source:r({originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'UTC',\n    face: 'roman',\n    step: 'tick'\n  }\n}"},null===(l=v.parameters)||void 0===l?void 0:null===(u=l.docs)||void 0===u?void 0:u.source)})}),w.parameters=o(r({},w.parameters),{docs:o(r({},null===(d=w.parameters)||void 0===d?void 0:d.docs),{source:r({originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'UTC',\n    face: 'arabic',\n    step: 'sweep'\n  }\n}"},null===(m=w.parameters)||void 0===m?void 0:null===(f=m.docs)||void 0===f?void 0:f.source)})}),j.parameters=o(r({},j.parameters),{docs:o(r({},null===(h=j.parameters)||void 0===h?void 0:h.docs),{source:r({originalSource:"{\n  args: {\n    date: new Date('2023-01-01T10:08:42Z'),\n    timezone: 'Asia/Tokyo',\n    face: 'arabic',\n    step: 'tick'\n  }\n}"},null===(b=j.parameters)||void 0===b?void 0:null===(p=b.docs)||void 0===p?void 0:p.source)})})},"../../packages/clock/dist/index.mjs":function(e,t,n){n.d(t,{Og:function(){return u},UV:function(){return w},KW:function(){return v},Im:function(){return P}});var r=n("../../node_modules/.pnpm/luxon@3.4.3/node_modules/luxon/src/luxon.js"),o=function(e){switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return"".concat(e)},c=function(e,t){switch(t){case"arabic":return function(e){return 0===e?"12":"".concat(e)}(e);case"roman":return o(e)}},a=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}var s={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},u=function(e){var t=e.timezone,n=e.date,o=function(e){var t=i({},s,e),n=t.width,r=t.height,o=t.step,c=t.face,a=t.bigHand,u=t.smallHand,l=t.secondHand,d=t.frame,f=t.centerPoint,m=t.hourLines,h=t.minuteLines;return{width:n,height:r,step:o,face:c,bigHand:i({},s.bigHand,a),smallHand:i({},s.smallHand,u),secondHand:i({},s.secondHand,l),frame:i({},s.frame,d),centerPoint:i({},s.centerPoint,f),hourLines:i({},s.hourLines,m),minuteLines:i({},s.minuteLines,h)}}(e),c=o.width,u=o.height,m=o.bigHand,p=o.smallHand,b=o.secondHand,g=o.frame,y=o.step,v=o.face,w=o.centerPoint,j=o.hourLines,O=o.minuteLines,k=function(e,t,n){switch(n){case"tick":return function(e,t){var n=r.ou.fromJSDate(e).setZone(t),o=n.minute/12|0;return{hour:n.hour+o/5,minute:n.minute,second:n.second}}(e,t);case"sweep":return function(e,t){var n=r.ou.fromJSDate(e).setZone(t);return{hour:n.hour+n.minute/60+n.second/3600,minute:n.minute+n.second/60,second:n.second+n.millisecond/1e3}}(e,t)}}(n,t,y),x=k.hour,P=k.minute,D=k.second,S=c/2,z=u/2;return(0,a.jsx)("div",{style:{width:"".concat(c,"px"),height:"".concat(u,"px")},children:(0,a.jsxs)("svg",{viewBox:"0 0 ".concat(c," ").concat(u),fill:"none",xmlns:"http://www.w3.org/2000/svg",width:c,height:u,children:[(0,a.jsx)("circle",{cx:S,cy:z,r:g.size,stroke:g.color,strokeWidth:g.width,fill:g.backgroundColor}),(0,a.jsx)("circle",{cx:S,cy:z,r:w.size,stroke:w.color,strokeWidth:w.size,fill:w.color}),(0,a.jsx)(d,i({centerX:S,centerY:z,radius:g.size-j.length},j)),(0,a.jsx)(f,i({centerX:S,centerY:z,radius:g.size-O.length},O)),(0,a.jsx)(h,{centerX:S,centerY:z,radius:g.size-O.length,faceType:v}),(0,a.jsx)(l,i({centerX:S,centerY:z,degree:30*x},m)),(0,a.jsx)(l,i({centerX:S,centerY:z,degree:6*P},p)),(0,a.jsx)(l,i({centerX:S,centerY:z,degree:6*D},b))]})})},l=function(e){var t=e.centerX,n=e.centerY,r=e.degree,o=e.length,c=e.width,i=e.color,s=p(r);return(0,a.jsx)("line",{x1:t,y1:n,x2:t+o*Math.sin(s),y2:n-o*Math.cos(s),stroke:i,strokeWidth:c})},d=function(e){var t=e.centerX,n=e.centerY,r=e.radius,o=e.width,c=e.color,i=e.length;return(0,a.jsx)(m,{centerX:t,centerY:n,radius:r,length:i,count:12,width:o,color:c})},f=function(e){var t=e.centerX,n=e.centerY,r=e.radius,o=e.width,c=e.color,i=e.length;return(0,a.jsx)(m,{centerX:t,centerY:n,radius:r,length:i,count:60,width:o,color:c})},m=function(e){for(var t=e.centerX,n=e.centerY,r=e.radius,o=e.length,c=e.count,i=e.width,s=e.color,u=[],l=0;l<c;l++){var d=p(360/c*l),f=t+r*Math.sin(d),m=n+r*Math.cos(d),h=f+o*Math.sin(d),b=m+o*Math.cos(d);u.push((0,a.jsx)("line",{x1:f,y1:m,x2:h,y2:b,stroke:s,strokeWidth:i},l))}return(0,a.jsx)(a.Fragment,{children:u})},h=function(e){for(var t=e.centerX,n=e.centerY,r=e.radius,o=[],s=r/5,u=r-s,l={textAnchor:"middle",dominantBaseline:"central",fontSize:s,fontFamily:"monospace",fill:"black"},d=0;d<12;d++){var f=p(30*d),m=t+u*Math.sin(f),h=n-u*Math.cos(f);o.push((0,a.jsx)("text",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(i({x:m,y:h},l),{children:c(d,e.faceType)}),d))}return(0,a.jsx)(a.Fragment,{children:o})};function p(e){return e*Math.PI/180}var b=n("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=n("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var v=b.createContext(new Date),w=function(e){var t=e.children,n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],a=!0,i=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,b.useState)(new Date),2),r=n[0],o=n[1],c=e.refreshInterval||1e3;return(0,g.Z)(function(){o(new Date)},c),(0,a.jsx)(v.Provider,{value:r,children:t})},j=Object.defineProperty;!function(e,t){for(var n in t)j(e,n,{get:t[n],enumerable:!0})}({},{zeroPad2:function(){return k},zeroPad3:function(){return x}});var O=function(e,t){return String(e).padStart(t,"0")},k=function(e){return O(e,2)},x=function(e){return O(e,3)},P=function(e){var t=e.timezone,n=D(e.date,t);return(0,a.jsx)("div",{style:{width:"20em",fontFamily:"monospace"},children:n})},D=function(e,t){var n=r.ou.fromJSDate(e).setZone(t),o=k(n.hour%12),c=k(n.minute),a=k(n.second),i=n.hour<12?"AM":"PM";return"".concat(o,":").concat(c,":").concat(a," ").concat(i," (").concat(t,")")}}}]);