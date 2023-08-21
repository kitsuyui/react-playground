"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[163],{"./stories/clock/Example.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Default:()=>p,default:()=>m});var n,o,c,i=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=r("../../packages/clock/dist/index.mjs"),s=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){u(e,t,r[t])})}return e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var h={title:"Base/Clock/Example",component:function(){return(0,i.jsx)(a.UV,{refreshInterval:10,children:(0,i.jsx)(a.KW.Consumer,{children:function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Og,{timezone:"Asia/Tokyo",date:e}),(0,i.jsx)(a.Im,{timezone:"Asia/Tokyo",date:e}),(0,i.jsx)(a.Og,{timezone:"America/New_York",date:e,step:"sweep",face:"roman"}),(0,i.jsx)(a.Im,{timezone:"America/New_York",date:e})]})}})})}};let m=h;var p={args:{}};p.parameters=f(l({},p.parameters),{docs:f(l({},null===(n=p.parameters)||void 0===n?void 0:n.docs),{source:l({originalSource:"{\n  args: {}\n}"},null===(o=p.parameters)||void 0===o?void 0:null===(c=o.docs)||void 0===c?void 0:c.source)})})},"../../packages/clock/dist/index.mjs":(e,t,r)=>{function n(e){return 0===e?"12":"".concat(e)}function o(e){switch(e){case 0:return"Ⅻ";case 1:return"Ⅰ";case 2:return"Ⅱ";case 3:return"Ⅲ";case 4:return"Ⅳ";case 5:return"Ⅴ";case 6:return"Ⅵ";case 7:return"Ⅶ";case 8:return"Ⅷ";case 9:return"Ⅸ";case 10:return"Ⅹ";case 11:return"Ⅺ"}return"".concat(e)}function c(e,t){switch(t){case"arabic":return n(e);case"roman":return o(e)}}r.d(t,{Og:()=>b,UV:()=>A,KW:()=>X,Im:()=>E});var i=r("../../node_modules/.pnpm/luxon@3.3.0/node_modules/luxon/src/luxon.js");function a(e,t,r){switch(r){case"tick":return s(e,t);case"sweep":return u(e,t)}}function s(e,t){var r=i.ou.fromJSDate(e).setZone(t),n=r.minute/12|0;return{hour:r.hour+n/5,minute:r.minute,second:r.second}}function u(e,t){var r=i.ou.fromJSDate(e).setZone(t);return{hour:r.hour+r.minute/60+r.second/3600,minute:r.minute+r.second/60,second:r.second+r.millisecond/1e3}}var l=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){d(e,t,r[t])})}return e}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var p={width:100,height:100,step:"tick",face:"arabic",bigHand:{width:3,length:30,color:"black"},smallHand:{width:2,length:40,color:"black"},secondHand:{width:1,length:45,color:"red"},frame:{size:49,width:1,color:"black",backgroundColor:"white"},centerPoint:{size:2,color:"black"},hourLines:{width:1,length:4,color:"black"},minuteLines:{width:1,length:2,color:"black"}},b=function(e){var t=e.timezone,r=e.date,n=O(e),o=n.width,c=n.height,i=n.bigHand,s=n.smallHand,u=n.secondHand,d=n.frame,h=n.step,m=n.face,p=n.centerPoint,b=n.hourLines,w=n.minuteLines,x=a(r,t,h),k=x.hour,P=x.minute,S=x.second,z=o/2,D=c/2;return(0,l.jsx)("div",{style:{width:"".concat(o,"px"),height:"".concat(c,"px")},children:(0,l.jsxs)("svg",{viewBox:"0 0 ".concat(o," ").concat(c),fill:"none",xmlns:"http://www.w3.org/2000/svg",width:o,height:c,children:[(0,l.jsx)("circle",{cx:z,cy:D,r:d.size,stroke:d.color,strokeWidth:d.width,fill:d.backgroundColor}),(0,l.jsx)("circle",{cx:z,cy:D,r:p.size,stroke:p.color,strokeWidth:p.size,fill:p.color}),(0,l.jsx)(y,f({centerX:z,centerY:D,radius:d.size-b.length},b)),(0,l.jsx)(j,f({centerX:z,centerY:D,radius:d.size-w.length},w)),(0,l.jsx)(v,{centerX:z,centerY:D,radius:d.size-w.length,faceType:m}),(0,l.jsx)(g,f({centerX:z,centerY:D,degree:30*k},i)),(0,l.jsx)(g,f({centerX:z,centerY:D,degree:6*P},s)),(0,l.jsx)(g,f({centerX:z,centerY:D,degree:6*S},u))]})})},g=function(e){var t=e.centerX,r=e.centerY,n=e.degree,o=e.length,c=e.width,i=e.color,a=x(n);return(0,l.jsx)("line",{x1:t,y1:r,x2:t+o*Math.sin(a),y2:r-o*Math.cos(a),stroke:i,strokeWidth:c})},y=function(e){var t=e.centerX,r=e.centerY,n=e.radius,o=e.width,c=e.color,i=e.length;return(0,l.jsx)(w,{centerX:t,centerY:r,radius:n,length:i,count:12,width:o,color:c})},j=function(e){var t=e.centerX,r=e.centerY,n=e.radius,o=e.width,c=e.color,i=e.length;return(0,l.jsx)(w,{centerX:t,centerY:r,radius:n,length:i,count:60,width:o,color:c})},w=function(e){for(var t=e.centerX,r=e.centerY,n=e.radius,o=e.length,c=e.count,i=e.width,a=e.color,s=[],u=0;u<c;u++){var d=x(360/c*u),f=t+n*Math.sin(d),h=r+n*Math.cos(d),m=f+o*Math.sin(d),p=h+o*Math.cos(d);s.push((0,l.jsx)("line",{x1:f,y1:h,x2:m,y2:p,stroke:a,strokeWidth:i},u))}return(0,l.jsx)(l.Fragment,{children:s})},v=function(e){for(var t=e.centerX,r=e.centerY,n=e.radius,o=[],i=n/5,a=n-i,s={textAnchor:"middle",dominantBaseline:"central",fontSize:i,fontFamily:"monospace",fill:"black"},u=0;u<12;u++){var d=x(30*u),h=t+a*Math.sin(d),p=r-a*Math.cos(d);o.push((0,l.jsx)("text",m(f({x:h,y:p},s),{children:c(u,e.faceType)}),u))}return(0,l.jsx)(l.Fragment,{children:o})};function O(e){var t=f({},p,e),r=t.width,n=t.height,o=t.step,c=t.face,i=t.bigHand,a=t.smallHand,s=t.secondHand,u=t.frame,l=t.centerPoint,d=t.hourLines,h=t.minuteLines;return{width:r,height:n,step:o,face:c,bigHand:f({},p.bigHand,i),smallHand:f({},p.smallHand,a),secondHand:f({},p.secondHand,s),frame:f({},p.frame,u),centerPoint:f({},p.centerPoint,l),hourLines:f({},p.hourLines,d),minuteLines:f({},p.minuteLines,h)}}function x(e){return e*Math.PI/180}var k=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=r("../../node_modules/.pnpm/react-use@17.4.0_react-dom@18.2.0_react@18.2.0/node_modules/react-use/esm/useInterval.js");function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function z(e){if(Array.isArray(e))return e}function D(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var c=[],i=!0,a=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(e){a=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(a)throw n}}return c}}function _(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function H(e,t){return z(e)||D(e,t)||Y(e,t)||_()}function Y(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}}var X=k.createContext(new Date),A=function(e){var t=e.children,r=H((0,k.useState)(new Date),2),n=r[0],o=r[1],c=e.refreshInterval||1e3;return(0,P.Z)(function(){o(new Date)},c),(0,l.jsx)(X.Provider,{value:n,children:t})},M=Object.defineProperty;!function(e,t){for(var r in t)M(e,r,{get:t[r],enumerable:!0})}({},{zeroPad2:function(){return L},zeroPad3:function(){return C}});var I=function(e,t){return String(e).padStart(t,"0")},L=function(e){return I(e,2)},C=function(e){return I(e,3)},E=function(e){var t=e.timezone,r=e.date,n=i.ou.fromJSDate(r).setZone(t),o=L(n.hour%12),c=L(n.minute),a=L(n.second),s=n.hour<12?"AM":"PM";return(0,l.jsxs)("div",{style:{width:"20em",fontFamily:"monospace"},children:[o,":",c,":",a," ",s," (",t,")"]})}}}]);