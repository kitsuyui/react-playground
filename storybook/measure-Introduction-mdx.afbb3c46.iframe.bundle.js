(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[5012],{"../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.0.1_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(e,o,t)=>{"use strict";t.d(o,{R:()=>d,x:()=>a});var s=t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");let r={},n=s.createContext(r);function d(e){let o=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(n.Provider,{value:o},e.children)}},"./stories/measure/Introduction.mdx":(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>c}),t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");var s=t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js"),r=t("../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.0.1_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),n=t("../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist/index.mjs"),d=t("./stories/measure/Example.stories.tsx");function a(e){let o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"measure",children:"Measure"}),"\n","\n","\n",(0,s.jsx)(n.W8,{title:"Base/Measure/Introduction"}),"\n",(0,s.jsx)(n.Hl,{of:d.Default}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-jsx",children:"<Measure />\n"})}),"\n",(0,s.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(o.p,{children:"Each component is published as a separate package."}),"\n",(0,s.jsx)(o.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-measure\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-measure\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-measure\n"})}),"\n",(0,s.jsx)(o.h2,{id:"usage",children:"Usage"})]})}function c(e={}){let{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},"../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist sync recursive":e=>{function o(e){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist sync recursive",e.exports=o},"../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/components sync recursive":e=>{function o(e){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/components sync recursive",e.exports=o},"../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/theming sync recursive":e=>{function o(e){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/theming sync recursive",e.exports=o},"./stories/measure/Example.stories.tsx":(e,o,t)=>{"use strict";t.r(o),t.d(o,{Default:()=>d,__namedExportsOrder:()=>a,default:()=>n});var s=t("../../packages/measure/dist/index.mjs"),r=t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");let n={title:"Base/Measure/Example",component:()=>r.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},r.createElement(s.t,null))},d={args:{},parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:200}}}},a=["Default"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {},\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 200\n      }\n    }\n  }\n}",...d.parameters?.docs?.source}}}},"../../node_modules/.pnpm/react-use@17.5.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-use/esm/useMeasure.js":(e,o,t)=>{"use strict";t.d(o,{A:()=>c});var s=t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),r=function(){},n="undefined"!=typeof window,d=n?s.useLayoutEffect:s.useEffect,a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let c=n&&void 0!==window.ResizeObserver?function(){var e=(0,s.useState)(null),o=e[0],t=e[1],r=(0,s.useState)(a),n=r[0],c=r[1],i=(0,s.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var o=e[0].contentRect;c({x:o.x,y:o.y,width:o.width,height:o.height,top:o.top,left:o.left,bottom:o.bottom,right:o.right})}})},[]);return d(function(){if(o)return i.observe(o),function(){i.disconnect()}},[o]),[t,n]}:function(){return[r,a]}},"../../packages/measure/dist/index.mjs":(e,o,t)=>{"use strict";t.d(o,{t:()=>m});var s=(e,o)=>({x:e,y:o}),r=(e,o)=>({start:e,end:o}),n=(e,o,t,n)=>r(s(e,o),s(t,n)),d=e=>{let{width:o,height:t}=e,s=o/2,r=t/2;return[n(0,0,s,r),n(o,0,s,r),n(0,t,s,r),n(o,t,s,r)]},a=t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),c=t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js"),i=e=>{let{width:o,height:t,styles:s}=e,r=`${o}x${t}`,n=Math.min(o,t)/r.length,[i,l]=[o/2,t/2],u=s.stroke,m=(0,a.useMemo)(()=>d({width:o,height:t}),[o,t]);return(0,c.jsxs)("svg",{width:o,height:t,children:[(0,c.jsx)("title",{children:r}),(0,c.jsx)("rect",{x:0,y:0,width:o,height:t,fill:"none",stroke:u.color,strokeWidth:u.width,strokeDasharray:u.dasharray}),m.map((e,o)=>(0,c.jsx)("line",{x1:e.start.x,y1:e.start.y,x2:e.end.x,y2:e.end.y,stroke:u.color,strokeWidth:u.width,strokeDasharray:u.dasharray},o)),(0,c.jsx)("text",{x:i,y:l,textAnchor:"middle",dominantBaseline:"middle",fontSize:n,fontFamily:s.text.fontFamily,children:r})]})},l=t("../../node_modules/.pnpm/react-use@17.5.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-use/esm/useMeasure.js"),u=(0,a.createContext)({stroke:{color:"black",width:1,dasharray:2},text:{fontFamily:"monospace"}}),m=()=>{let[e,{width:o,height:t}]=(0,l.A)(),s=a.useContext(u);return(0,c.jsx)("div",{ref:e,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"},children:(0,c.jsx)(i,{width:o,height:t,styles:s})})}}}]);