(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[6200],{"../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.0.1_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(e,o,t)=>{"use strict";t.d(o,{R:()=>d,x:()=>i});var n=t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");let s={},r=n.createContext(s);function d(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:o},e.children)}},"./stories/dekamoji/Introduction.mdx":(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>c}),t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");var n=t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js"),s=t("../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.0.1_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),r=t("../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist/index.mjs"),d=t("./stories/dekamoji/Example.stories.tsx");function i(e){let o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"dekamoji",children:"Dekamoji"}),"\n","\n","\n",(0,n.jsx)(r.W8,{title:"Base/Dekamoji/Introduction"}),"\n",(0,n.jsx)(r.Hl,{of:d.Default}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-jsx",children:'<Dekamoji text="あいうえお" />\n'})}),"\n",(0,n.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(o.p,{children:"Each component is published as a separate package."}),"\n",(0,n.jsx)(o.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-dekamoji\n"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-dekamoji\n"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-dekamoji\n"})}),"\n",(0,n.jsx)(o.h2,{id:"usage",children:"Usage"})]})}function c(e={}){let{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},"../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist sync recursive":e=>{function o(e){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="../../node_modules/.pnpm/@storybook+blocks@8.4.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.4.7/node_modules/@storybook/blocks/dist sync recursive",e.exports=o},"../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/components sync recursive":e=>{function o(e){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/components sync recursive",e.exports=o},"../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/theming sync recursive":e=>{function o(e){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="../../node_modules/.pnpm/@storybook+core@8.4.7/node_modules/@storybook/core/dist/theming sync recursive",e.exports=o},"./stories/dekamoji/Example.stories.tsx":(e,o,t)=>{"use strict";t.r(o),t.d(o,{Default:()=>d,__namedExportsOrder:()=>i,default:()=>r});var n=t("../../packages/dekamoji/dist/index.mjs"),s=t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");let r={title:"Base/Dekamoji/Example",component:n.B,argTypes:{text:{control:{type:"text"}}}},d={args:{text:"あいうえお"},decorators:[e=>s.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}},s.createElement(e,null))],parameters:{layout:"fullscreen",flexDirection:"column",docs:{story:{inline:!1,iframeHeight:200}}}},i=["Default"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'あいうえお'\n  },\n  decorators: [Story => {\n    return <div style={{\n      width: '100%',\n      height: '100%',\n      position: 'absolute'\n    }}>\n          <Story />\n        </div>;\n  }],\n  parameters: {\n    layout: 'fullscreen',\n    flexDirection: 'column',\n    docs: {\n      story: {\n        inline: false,\n        iframeHeight: 200\n      }\n    }\n  }\n}",...d.parameters?.docs?.source}}}},"../../node_modules/.pnpm/react-use@17.5.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-use/esm/useMeasure.js":(e,o,t)=>{"use strict";t.d(o,{A:()=>c});var n=t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),s=function(){},r="undefined"!=typeof window,d=r?n.useLayoutEffect:n.useEffect,i={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};let c=r&&void 0!==window.ResizeObserver?function(){var e=(0,n.useState)(null),o=e[0],t=e[1],s=(0,n.useState)(i),r=s[0],c=s[1],a=(0,n.useMemo)(function(){return new window.ResizeObserver(function(e){if(e[0]){var o=e[0].contentRect;c({x:o.x,y:o.y,width:o.width,height:o.height,top:o.top,left:o.left,bottom:o.bottom,right:o.right})}})},[]);return d(function(){if(o)return a.observe(o),function(){a.disconnect()}},[o]),[t,r]}:function(){return[s,i]}},"../../packages/dekamoji/dist/index.mjs":(e,o,t)=>{"use strict";t.d(o,{B:()=>d});var n=t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),s=t("../../node_modules/.pnpm/react-use@17.5.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-use/esm/useMeasure.js"),r=t("../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js"),d=n.memo(function({text:e}){let[o,{width:t,height:d}]=(0,s.A)(),[a,l]=n.useState(0),u=(0,n.useRef)(null);return(0,n.useMemo)(()=>{let o;let n=u.current;n&&(o=i(n)),l(c(t,d,e,o))},[t,d,e]),(0,r.jsx)("div",{ref:o,style:{width:"100%",height:"100%",boxSizing:"border-box",overflow:"hidden"},children:(0,r.jsx)("div",{ref:u,style:{position:"absolute",width:"100%",height:"100%",fontSize:`${a}px`,textAlign:"center",margin:"0 auto",boxSizing:"border-box",whiteSpace:"pre-wrap"},children:e})})}),i=e=>window.getComputedStyle(e).fontFamily,c=(e,o,t,n)=>{let s=document.createElement("div");s.style.position="absolute",s.style.width=`${e}px`,s.style.height=`${o}px`,s.style.boxSizing="border-box",s.style.zIndex="-1",s.style.overflowX="hidden",s.style.overflowY="hidden";let r=document.createElement("div");r.style.visibility="hidden",r.style.fontSize="0",r.style.textAlign="center",r.style.margin="0 auto",r.style.whiteSpace="pre-wrap",r.style.boxSizing="border-box",r.style.zIndex="-1",n&&(r.style.fontFamily=n),r.textContent=t,s.appendChild(r),document.body.appendChild(s);let d=Math.max(e,o),i=0;for(;i<d;i+=1){r.style.fontSize=`${i}px`;let t=r.scrollHeight-o,n=r.scrollWidth-e;if(t>2||n>2)break}return document.body.removeChild(s),i-4}}}]);