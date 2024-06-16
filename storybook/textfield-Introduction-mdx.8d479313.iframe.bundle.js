(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[245,6157,5948],{"../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(e,n,t)=>{"use strict";t.d(n,{R:()=>d,x:()=>i});var s=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let r={},o=s.createContext(r);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}},"./stories/textfield/Introduction.mdx":(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c}),t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var s=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),r=t("../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),o=t("../../node_modules/.pnpm/@storybook+blocks@8.1.9_@types+react-dom@18.3.0_@types+react@18.3.3_prettier@3.3.2_react-dom@_5amu6mbjhzoqetfjk65bqnfndm/node_modules/@storybook/blocks/dist/index.mjs"),d=t("./stories/textfield/TextAreaExample.stories.tsx"),i=t("./stories/textfield/TextFieldExample.stories.tsx");function a(e){let n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"textarea-and-textfield",children:"TextArea and TextField"}),"\n","\n","\n",(0,s.jsx)(o.W8,{title:"Base/TextField/Introduction"}),"\n",(0,s.jsx)(o.Hl,{of:i.Default}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<TextField value="あいうえお" placeholder="🔍 something">\n'})}),"\n",(0,s.jsx)(o.Hl,{of:d.Default}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<TextArea value="あいうえお"></TextArea>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"concept",children:"Concept"}),"\n",(0,s.jsx)(n.p,{children:"This package provides a text field component for React."}),"\n",(0,s.jsxs)(n.p,{children:["It is very pure and similar with the default ",(0,s.jsx)(n.code,{children:'<input type="text">'})," element and ",(0,s.jsx)(n.code,{children:"<textarea>"})," element."]}),"\n",(0,s.jsxs)(n.p,{children:["So you can pass the same props as those elements. (i.e. ",(0,s.jsx)(n.code,{children:"disabled"}),", ",(0,s.jsx)(n.code,{children:"placeholder"}),", ",(0,s.jsx)(n.code,{children:"maxLength"}),", ",(0,s.jsx)(n.code,{children:"minLength"}),", ",(0,s.jsx)(n.code,{children:"required"}),", ",(0,s.jsx)(n.code,{children:"pattern"}),", ",(0,s.jsx)(n.code,{children:"readOnly"}),", ",(0,s.jsx)(n.code,{children:"autoComplete"}),", ",(0,s.jsx)(n.code,{children:"autoFocus"}),", ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"className"}),", ",(0,s.jsx)(n.code,{children:"style"}),", ..., etc.)\nThis means, you can use this component as a drop-in replacement for those elements."]}),"\n",(0,s.jsxs)(n.p,{children:["The big difference is that this component how to handle the events.\nIn default browser elements (",(0,s.jsx)(n.code,{children:'<input type="text">'})," and ",(0,s.jsx)(n.code,{children:"<textarea>"}),"), the ",(0,s.jsx)(n.code,{children:"onChange"})," event is fired in every key press.\nBut when you are using IME or something special input method, the ",(0,s.jsx)(n.code,{children:"onChange"})," event is fired in every key press even if the input is not completed or text conversion is not completed. (e.g. Japanese IME, Chinese IME, espanso, etc.)\nThis component calls the ",(0,s.jsx)(n.code,{children:"onInputChunk"})," handler ",(0,s.jsx)(n.code,{children:"(text: string) => void"})," only when the input is completed or text conversion is completed. (Internally, it uses ",(0,s.jsx)(n.code,{children:"CompositionEvent"})," to detect the completion of input or text conversion)"]}),"\n",(0,s.jsx)(n.p,{children:"Warning: This component has no effect to prevent the re-rendering of parent component.\nThis means, if this component is re-created by parent component, the input may lost text conversion state."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"Each component is published as a separate package."}),"\n",(0,s.jsx)(n.p,{children:"Use npm, yarn or pnpm to install."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ npm install @kitsuyui/react-textfield\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ yarn add @kitsuyui/react-textfield\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ pnpm add @kitsuyui/react-textfield\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"})]})}function c(e={}){let{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},"./stories/textfield/TextAreaExample.stories.tsx":(e,n,t)=>{"use strict";t.r(n),t.d(n,{Default:()=>d,__namedExportsOrder:()=>i,default:()=>o});var s=t("../../packages/textfield/dist/index.mjs"),r=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let o={title:"Base/TextField/TextArea/Example",component:s.fs,argTypes:{}};var d={args:{value:"あいうえお"},decorators:[function(e){return r.createElement(e,null)}]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'あいうえお'\n  },\n  decorators: [Story => {\n    return <Story />;\n  }]\n}",...d.parameters?.docs?.source}}};let i=["Default"]},"./stories/textfield/TextFieldExample.stories.tsx":(e,n,t)=>{"use strict";t.r(n),t.d(n,{Default:()=>d,__namedExportsOrder:()=>i,default:()=>o});var s=t("../../packages/textfield/dist/index.mjs"),r=t("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let o={title:"Base/TextField/TextField/Example",component:s.A_,argTypes:{}};var d={args:{value:"",placeholder:"🔍 something"},decorators:[function(e){return r.createElement(e,null)}]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: '',\n    placeholder: '\uD83D\uDD0D something'\n  },\n  decorators: [Story => {\n    return <Story />;\n  }]\n}",...d.parameters?.docs?.source}}};let i=["Default"]},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":e=>{function n(e){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",e.exports=n}}]);