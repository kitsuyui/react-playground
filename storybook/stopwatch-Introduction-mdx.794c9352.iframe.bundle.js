(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[9867],{"../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.0.1_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(e,t,o)=>{"use strict";o.d(t,{R:()=>c,x:()=>a});var n=o("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");let s={},r=n.createContext(s);function c(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:t},e.children)}},"./stories/stopwatch/Introduction.mdx":(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d}),o("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");var n=o("../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js"),s=o("../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.0.1_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=o("../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist/index.mjs"),c=o("./stories/stopwatch/Example.stories.tsx");function a(e){let t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"stopwatch",children:"Stopwatch"}),"\n","\n","\n",(0,n.jsx)(r.W8,{title:"Base/Stopwatch/Introduction"}),"\n",(0,n.jsx)(r.Hl,{of:c.Default}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import {\n  StopwatchContainer,\n  MinimalStopwatch,\n  StopwatchContext,\n  StopwatchProps,\n} from '@kitsuyui/react-stopwatch'\n\nconst Stopwatch = () => {\n  return (\n    <StopwatchContainer>\n      <StopwatchContext.Consumer>\n        {(props: StopwatchProps) => <MinimalStopwatch {...props} />}\n      </StopwatchContext.Consumer>\n    </StopwatchContainer>\n  )\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.p,{children:"Each component is published as a separate package."}),"\n",(0,n.jsx)(t.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-stopwatch\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-stopwatch\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-stopwatch\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"Stopwatch components consists of two parts:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The surface of the clock ()"}),"\n",(0,n.jsx)(t.li,{children:"The state of the clock ()"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If you want to modify the appearance of the clock, you can use the surface of the clock.\nIf you want to change the state of the clock, you can use the state of the clock."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx"})})]})}function d(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},"../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist sync recursive",e.exports=t},"../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/components sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/components sync recursive",e.exports=t},"../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/theming sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/theming sync recursive",e.exports=t},"./stories/stopwatch/Example.stories.tsx":(e,t,o)=>{"use strict";o.r(t),o.d(t,{Default:()=>c,__namedExportsOrder:()=>a,default:()=>r});var n=o("../../packages/stopwatch/dist/index.mjs"),s=o("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");let r={title:"Base/Stopwatch/Example",component:()=>s.createElement(n.pv,null,s.createElement(n.TM.Consumer,null,e=>s.createElement(n.zG,e)))},c={args:{onComplete:()=>{}}},a=["Default"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{\n  args: {\n    onComplete: () => {\n      return;\n    }\n  }\n}",...c.parameters?.docs?.source}}}},"../../node_modules/.pnpm/react-use@17.5.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-use/esm/useInterval.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>s});var n=o("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");let s=function(e,t){var o=(0,n.useRef)(function(){});(0,n.useEffect)(function(){o.current=e}),(0,n.useEffect)(function(){if(null!==t){var e=setInterval(function(){return o.current()},t||0);return function(){return clearInterval(e)}}},[t])}},"../../packages/stopwatch/dist/index.mjs":(e,t,o)=>{"use strict";o.d(t,{zG:()=>l,pv:()=>_,TM:()=>p});var n=Object.defineProperty;((e,t)=>{for(var o in t)n(e,o,{get:t[o],enumerable:!0})})({},{zeroPad2:()=>r,zeroPad3:()=>c});var s=(e,t)=>String(e).padStart(t,"0"),r=e=>s(e,2),c=e=>s(e,3),a=o("../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js"),d=e=>{let t=Math.floor(e/60);return`${r(t)}:${r(e%60|0)}.${c(e%1*1e3|0)}`},l=e=>{let{elapsedTime:t,running:o,toggle:n,reset:s}=e;return(0,a.jsx)("div",{style:{width:"6em",fontFamily:"monospace"},children:(0,a.jsxs)("form",{children:[(0,a.jsx)("span",{children:d(t)}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",name:"reset",onClick:e=>{e.preventDefault(),s()},children:"Reset"}),(0,a.jsx)("button",{type:"submit",onClick:e=>{e.preventDefault(),n()},children:o?"Stop":"Start"})]})})},u=o("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),i=o("../../node_modules/.pnpm/react-use@17.5.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-use/esm/useInterval.js"),p=u.createContext({elapsedTime:0,running:!1,start(){},stop(){},toggle(){},reset(){}}),m=(e,t)=>(t.getTime()-e.getTime())/1e3,h=e=>m(e,new Date),_=e=>{let{children:t}=e,o=e=>{},n=e.onStart??o,s=e.onStop??o,r=e.onReset??o,[c,d]=(0,u.useState)(!1),[l,m]=(0,u.useState)(0),[_,x]=(0,u.useState)(0),[f,j]=(0,u.useState)(new Date),y=e.refreshInterval||10;(0,i.A)(()=>{c&&k()},y);let k=()=>{m(h(f))},w=()=>{x(_+l),m(0)},b=()=>{c||(n(new CustomEvent("start",{})),j(new Date),d(!0))},v=()=>{c&&(s(new CustomEvent("stop",{})),k(),d(!1),w())};return(0,a.jsx)(p.Provider,{value:{elapsedTime:l+_,running:c,toggle:()=>{c?v():b()},reset:()=>{c&&v(),r(new CustomEvent("reset",{})),m(0),x(0)},start:b,stop:v},children:t})}}}]);