"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[654],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(e,n,t)=>{t.d(n,{NF:()=>s,Zo:()=>r,ah:()=>a,pC:()=>c});var o=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let c=o.createContext({});function s(e){return function(n){let t=a(n.components);return o.createElement(e,{...n,allComponents:t})}}function a(e){let n=o.useContext(c);return o.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let l={};function r({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||l:a(e),o.createElement(c.Provider,{value:s},n)}},"./stories/clock/Introduction.mdx":(e,n,t)=>{t.r(n),t.d(n,{default:()=>r}),t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var o=t("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=t("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),s=t("../../node_modules/.pnpm/@storybook+blocks@7.5.3_@types+react-dom@18.2.17_@types+react@18.2.38_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),a=t("./stories/clock/Example.stories.tsx");function l(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,c.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"clock",children:"Clock"}),"\n","\n","\n",(0,o.jsx)(s.h_,{title:"Base/Clock/Introduction"}),"\n",(0,o.jsx)(s.Xz,{of:a.Default}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"Each component is published as a separate package."}),"\n",(0,o.jsx)(n.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-clock\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-clock\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-clock\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"Clock components consists of two parts:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The surface of the clock (AnalogClock, DigitalClock, etc.)"}),"\n",(0,o.jsx)(n.li,{children:"The state of the clock (ClockContainer, DateContext, etc.)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If you want to modify the appearance of the clock, you can use the surface of the clock.\nIf you want to change the state of the clock, you can use the state of the clock."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import {\n  AnalogClock,\n  ClockContainer,\n  DateContext,\n  DigitalClock,\n} from '@kitsuyui/react-clock'\nimport React from 'react'\n\nconst Clock = () => {\n  return (\n    <ClockContainer refreshInterval={10}>\n      <DateContext.Consumer>\n        {(date) => (\n          <>\n            <AnalogClock timezone=\"Asia/Tokyo\" date={date} />\n            <DigitalClock timezone=\"Asia/Tokyo\" date={date} />\n          </>\n        )}\n      </DateContext.Consumer>\n    </ClockContainer>\n  )\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ClockContainer"})," is a component that manages the state of the clock.\nThe ",(0,o.jsx)(n.code,{children:"refreshInterval"})," property is the interval at which the clock is updated.\n",(0,o.jsx)(n.code,{children:"AnalogClock"})," and ",(0,o.jsx)(n.code,{children:"DigitalClock"})," are components that display the clock. These components are independent of the state of the clock."]})]})}let r=function(e={}){let{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}]);