"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[7158],{"./stories/treemap/Example.stories.tsx":(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{Default:()=>c,__namedExportsOrder:()=>f,default:()=>d});var o=r("../../packages/measure/dist/index.mjs"),a=r("../../packages/treemap/dist/index.mjs"),i=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e([a]);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}a=(s.then?(await s)():s)[0];var u=(function(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(Array(10)).map(function(e,t){return t+1}).map(function(e){return{weight:Math.pow(1.1,e),element:i.createElement(o.t,null)}});u.sort(function(e,t){return t.weight-e.weight});let d={title:"Base/Treemap/Example",component:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{verticalFirst:!0,aspectRatio:16/9,boustrophedon:!1};return i.createElement(a.V,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,a;a=r[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a})}return e}({weightedItems:u},e))}};var c={args:{verticalFirst:!0,aspectRatio:16/9,boustrophedon:!1},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:800}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{\n  args: {\n    verticalFirst: true,\n    aspectRatio: 16 / 9,\n    boustrophedon: false\n  },\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 800\n      }\n    }\n  }\n}",...c.parameters?.docs?.source}}};let f=["Default"];n()}catch(e){n(e)}})},"../../packages/measure/dist/index.mjs":(e,t,r)=>{r.d(t,{t:()=>f});var n=function(e,t){return{x:e,y:t}},o=function(e,t,r,o){return{start:n(e,t),end:n(r,o)}},a=function(e){var t=e.width,r=e.height,n=t/2,a=r/2;return[o(0,0,n,a),o(t,0,n,a),o(0,r,n,a),o(t,r,n,a)]},i=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=function(e){var t=e.width,r=e.height,n=e.styles,o="".concat(t,"x").concat(r),l=Math.min(t,r)/o.length,u=[t/2,r/2],c=u[0],d=u[1],f=n.stroke,m=(0,i.useMemo)(function(){return a({width:t,height:r})},[t,r]);return(0,s.jsxs)("svg",{width:t,height:r,children:[(0,s.jsx)("title",{children:o}),(0,s.jsx)("rect",{x:0,y:0,width:t,height:r,fill:"none",stroke:f.color,strokeWidth:f.width,strokeDasharray:f.dasharray}),m.map(function(e){return(0,s.jsx)("line",{x1:e.start.x,y1:e.start.y,x2:e.end.x,y2:e.end.y,stroke:f.color,strokeWidth:f.width,strokeDasharray:f.dasharray})}),(0,s.jsx)("text",{x:c,y:d,textAnchor:"middle",dominantBaseline:"middle",fontSize:l,fontFamily:n.text.fontFamily,children:o})]})},u=r("../../node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMeasure.js");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var d=(0,i.createContext)({stroke:{color:"black",width:1,dasharray:2},text:{fontFamily:"monospace"}}),f=function(){var e,t=function(e){if(Array.isArray(e))return e}(e=(0,u.A)())||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(a.push(r.value),2!==a.length);i=!0);}catch(e){s=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(s)throw n}}return a}}(e,2)||function(e,t){if(e){if("string"==typeof e)return c(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,2)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=t[0],n=t[1],o=n.width,a=n.height,f=i.useContext(d);return(0,s.jsx)("div",{ref:r,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:(0,s.jsx)(l,{width:o,height:a,styles:f})})}}}]);