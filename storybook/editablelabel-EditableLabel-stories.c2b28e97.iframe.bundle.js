"use strict";(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[352],{"./stories/editablelabel/EditableLabel.stories.tsx":(t,e,r)=>{r.r(e),r.d(e,{Default:()=>f,__namedExportsOrder:()=>d,default:()=>c});var n=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=r("../../packages/textfield/dist/index.mjs"),a=r("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r,n,o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var a=[],l=!0,u=!1;try{for(o=o.call(t);!(l=(r=o.next()).done)&&(a.push(r.value),!e||a.length!==e);l=!0);}catch(t){u=!0,n=t}finally{try{l||null==o.return||o.return()}finally{if(u)throw n}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=function(t){var e,r=t.text,l=t.onEditComplete,i=(0,a.useRef)(null),s=u((0,a.useState)(!1),2),c=s[0],f=s[1],d=u((0,a.useState)("view"),2),y=d[0],m=d[1],p=null===(e=t.enterToSubmit)||void 0===e||e,b=u((0,a.useState)(r),2),v=b[0],h=b[1],g=(0,a.useCallback)(function(){m("view"),null==l||l(v)},[l,v]),x=(0,a.useCallback)(function(){m("edit")},[]);(0,a.useEffect)(function(){if("edit"===y){var t;null==i||null===(t=i.current)||void 0===t||t.focus()}},[y]);var S=(0,a.useCallback)(function(t){p&&"Enter"===t.key&&!c&&g()},[p,c,g]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{onClick:x,style:{display:"view"===y?"inline":"none"},children:r}),(0,n.jsx)(o.W4,{ref:i,style:{display:"edit"===y?"inline":"none"},value:r,onInputChunk:h,onChangeInputting:f,onSubmit:g,onKeyDown:S,onBlur:g})]})};function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}let c={title:"Base/EditableLabel/Example",component:function(){var t,e=function(t){if(Array.isArray(t))return t}(t=(0,a.useState)("Let's edit me!"))||function(t,e){var r,n,o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var a=[],l=!0,u=!1;try{for(o=o.call(t);!(l=(r=o.next()).done)&&(a.push(r.value),2!==a.length);l=!0);}catch(t){u=!0,n=t}finally{try{l||null==o.return||o.return()}finally{if(u)throw n}}return a}}(t,2)||function(t,e){if(t){if("string"==typeof t)return s(t,2);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=e[0],o=e[1];return(0,n.jsx)(i,{text:r,onEditComplete:function(t){return o(t)}})},argTypes:{text:{control:{type:"text"}}}};var f={args:{text:"Let's edit me!"},decorators:[function(t){return(0,n.jsx)(t,{})}]};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "Let\'s edit me!"\n  },\n  decorators: [Story => {\n    return <Story />;\n  }]\n}',...f.parameters?.docs?.source}}};let d=["Default"]}}]);