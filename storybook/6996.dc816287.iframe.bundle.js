(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[6996],{"../../node_modules/.pnpm/@storybook+addon-docs@8.4.7_@types+react@19.0.1_storybook@8.4.7/node_modules/@storybook/addon-docs/dist/DocsRenderer-CFRXHY34.mjs":(e,o,r)=>{"use strict";r.d(o,{DocsRenderer:()=>i});var t=r("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),s=r("../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist/index.mjs"),n=r("../../node_modules/.pnpm/react-dom@19.0.0_react@19.0.0/node_modules/react-dom/client.js"),d=new Map,c=({callback:e,children:o})=>{let r=t.useRef();return t.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),o};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,o=null;return{promise:new Promise((r,t)=>{e=r,o=t}),resolve:e,reject:o}});var m=async(e,o,r)=>{let s=await u(o,r);if(globalThis.IS_REACT_ACT_ENVIRONMENT){s.render(e);return}let{promise:n,resolve:d}=Promise.withResolvers();return s.render(t.createElement(c,{callback:d},e)),n},l=(e,o)=>{let r=d.get(e);r&&(r.unmount(),d.delete(e))},u=async(e,o)=>{let r=d.get(e);return r||(r=n.createRoot(e,o),d.set(e,r)),r},a={code:s.XA,a:s.zE,...s.Sw},_=class extends t.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:o}=this.props;o(e)}render(){let{hasError:e}=this.state,{children:o}=this.props;return e?null:t.createElement(t.Fragment,null,o)}},i=class{constructor(){this.render=async(e,o,n)=>{let d={...a,...o?.components},c=s.kQ;return new Promise((s,l)=>{r.e(3696).then(r.bind(r,"../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.0.1_react@18.3.1/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:r})=>m(t.createElement(_,{showException:l,key:Math.random()},t.createElement(r,{components:d},t.createElement(c,{context:e,docsParameter:o}))),n)).then(()=>s())})},this.unmount=e=>{l(e)}}};r("../../node_modules/.pnpm/@storybook+addon-docs@8.4.7_@types+react@19.0.1_storybook@8.4.7/node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs")},"../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist sync recursive":e=>{function o(e){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist sync recursive",e.exports=o},"../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/components sync recursive":e=>{function o(e){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/components sync recursive",e.exports=o},"../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/theming sync recursive":e=>{function o(e){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/theming sync recursive",e.exports=o}}]);