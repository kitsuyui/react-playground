(self.webpackChunk_kitsuyui_react_storybook=self.webpackChunk_kitsuyui_react_storybook||[]).push([[5937],{"../../node_modules/.pnpm/@storybook+blocks@8.1.6_@types+react-dom@18.3.0_@types+react@18.3.3_prettier@3.3.1_react-dom@_l3jp26fwfrfn23kixedtrzudta/node_modules/@storybook/blocks/dist/Color-PRSJMWNM.mjs":(e,t,r)=>{"use strict";r.r(t),r.d(t,{ColorControl:()=>ex,default:()=>ek});var n=r("../../node_modules/.pnpm/@storybook+blocks@8.1.6_@types+react-dom@18.3.0_@types+react@18.3.3_prettier@3.3.1_react-dom@_l3jp26fwfrfn23kixedtrzudta/node_modules/@storybook/blocks/dist/chunk-GWAJ4KRU.mjs"),o=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function s(e){var t=(0,o.useRef)(e),r=(0,o.useRef)(function(e){t.current&&t.current(e)});return t.current=e,r.current}var u=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},i=function(e){return"touches"in e},c=function(e){return e&&e.ownerDocument.defaultView||self},d=function(e,t,r){var n=e.getBoundingClientRect(),o=i(t)?function(e,t){for(var r=0;r<e.length;r++)if(e[r].identifier===t)return e[r];return e[0]}(t.touches,r):t;return{left:u((o.pageX-(n.left+c(e).pageXOffset))/n.width),top:u((o.pageY-(n.top+c(e).pageYOffset))/n.height)}},h=function(e){i(e)||e.preventDefault()},f=o.memo(function(e){var t=e.onMove,r=e.onKey,n=l(e,["onMove","onKey"]),u=(0,o.useRef)(null),f=s(t),m=s(r),p=(0,o.useRef)(null),g=(0,o.useRef)(!1),b=(0,o.useMemo)(function(){var e=function(e){h(e),(i(e)?e.touches.length>0:e.buttons>0)&&u.current?f(d(u.current,e,p.current)):r(!1)},t=function(){return r(!1)};function r(r){var n=g.current,o=c(u.current),a=r?o.addEventListener:o.removeEventListener;a(n?"touchmove":"mousemove",e),a(n?"touchend":"mouseup",t)}return[function(e){var t=e.nativeEvent,n=u.current;if(n&&(h(t),(!g.current||i(t))&&n)){if(i(t)){g.current=!0;var o=t.changedTouches||[];o.length&&(p.current=o[0].identifier)}n.focus(),f(d(n,t,p.current)),r(!0)}},function(e){var t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),m({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))},r]},[m,f]),v=b[0],_=b[1],y=b[2];return(0,o.useEffect)(function(){return y},[y]),o.createElement("div",a({},n,{onTouchStart:v,onMouseDown:v,className:"react-colorful__interactive",ref:u,onKeyDown:_,tabIndex:0,role:"slider"}))}),m=function(e){return e.filter(Boolean).join(" ")},p=function(e){var t=e.color,r=e.left,n=e.top,a=m(["react-colorful__pointer",e.className]);return o.createElement("div",{className:a,style:{top:100*(void 0===n?.5:n)+"%",left:100*r+"%"}},o.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},g=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=Math.pow(10,t)),Math.round(r*e)/r},b={grad:.9,turn:360,rad:360/(2*Math.PI)},v=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?g(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?g(parseInt(e.substring(6,8),16)/255,2):1}},_=function(e,t){return void 0===t&&(t="deg"),Number(e)*(b[t]||1)},y=function(e){var t=e.s,r=e.l;return{h:e.h,s:(t*=(r<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}},x=function(e){var t=e.s,r=e.v,n=e.a,o=(200-t)*r/100;return{h:g(e.h),s:g(o>0&&o<200?t*r/100/(o<=100?o:200-o)*100:0),l:g(o/2),a:g(n,2)}},k=function(e){var t=x(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},w=function(e){var t=x(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},M=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var a=Math.floor(t),l=n*(1-r),s=n*(1-(t-a)*r),u=n*(1-(1-t+a)*r),i=a%6;return{r:g(255*[n,s,l,l,u,n][i]),g:g(255*[u,n,n,s,l,l][i]),b:g(255*[l,l,u,n,n,s][i]),a:g(o,2)}},j=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},E=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=o<1?j(g(255*o)):"";return"#"+j(t)+j(r)+j(n)+a},C=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),l=a-Math.min(t,r,n),s=l?a===t?(r-n)/l:a===r?2+(n-t)/l:4+(t-r)/l:0;return{h:g(60*(s<0?s+6:s)),s:g(a?l/a*100:0),v:g(a/255*100),a:o}},$=function(e){return{h:g(e.h),s:g(e.s),v:g(e.v),a:g(e.a,2)}},N=o.memo(function(e){var t=e.hue,r=e.onChange,n=m(["react-colorful__hue",e.className]);return o.createElement("div",{className:n},o.createElement(f,{onMove:function(e){r({h:360*e.left})},onKey:function(e){r({h:u(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":g(t),"aria-valuemax":"360","aria-valuemin":"0"},o.createElement(p,{className:"react-colorful__hue-pointer",left:t/360,color:k({h:t,s:100,v:100,a:1})})))}),O=o.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:k({h:t.h,s:100,v:100,a:1})};return o.createElement("div",{className:"react-colorful__saturation",style:n},o.createElement(f,{onMove:function(e){r({s:100*e.left,v:100-100*e.top})},onKey:function(e){r({s:u(t.s+100*e.left,0,100),v:u(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+g(t.s)+"%, Brightness "+g(t.v)+"%"},o.createElement(p,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:k(t)})))}),I=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},S=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")};function z(e,t,r){var n=s(r),a=(0,o.useState)(function(){return e.toHsva(t)}),l=a[0],u=a[1],i=(0,o.useRef)({color:t,hsva:l});return(0,o.useEffect)(function(){if(!e.equal(t,i.current.color)){var r=e.toHsva(t);i.current={hsva:r,color:t},u(r)}},[t,e]),(0,o.useEffect)(function(){var t;I(l,i.current.hsva)||e.equal(t=e.fromHsva(l),i.current.color)||(i.current={hsva:l,color:t},n(t))},[l,e,n]),[l,(0,o.useCallback)(function(e){u(function(t){return Object.assign({},t,e)})},[])]}var R,H="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,q=new Map,T=function(e){H(function(){var t=e.current?e.current.ownerDocument:document;if(void 0!==t&&!q.has(t)){var n=t.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',q.set(t,n);var o=R||r.nc;o&&n.setAttribute("nonce",o),t.head.appendChild(n)}},[])},L=function(e){var t=e.className,r=e.colorModel,n=e.color,s=void 0===n?r.defaultColor:n,u=e.onChange,i=l(e,["className","colorModel","color","onChange"]),c=(0,o.useRef)(null);T(c);var d=z(r,s,u),h=d[0],f=d[1],p=m(["react-colorful",t]);return o.createElement("div",a({},i,{ref:c,className:p}),o.createElement(O,{hsva:h,onChange:f}),o.createElement(N,{hue:h.h,onChange:f,className:"react-colorful__last-control"}))},P={defaultColor:"000",toHsva:function(e){return C(v(e))},fromHsva:function(e){return E(M({h:e.h,s:e.s,v:e.v,a:1}))},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||I(v(e),v(t))}},B=function(e){var t=e.className,r=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+w(Object.assign({},r,{a:0}))+", "+w(Object.assign({},r,{a:1}))+")"},l=m(["react-colorful__alpha",t]),s=g(100*r.a);return o.createElement("div",{className:l},o.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),o.createElement(f,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:u(r.a+e.left)})},"aria-label":"Alpha","aria-valuetext":s+"%","aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":"100"},o.createElement(p,{className:"react-colorful__alpha-pointer",left:r.a,color:w(r)})))},D=function(e){var t=e.className,r=e.colorModel,n=e.color,s=void 0===n?r.defaultColor:n,u=e.onChange,i=l(e,["className","colorModel","color","onChange"]),c=(0,o.useRef)(null);T(c);var d=z(r,s,u),h=d[0],f=d[1],p=m(["react-colorful",t]);return o.createElement("div",a({},i,{ref:c,className:p}),o.createElement(O,{hsva:h,onChange:f}),o.createElement(N,{hue:h.h,onChange:f}),o.createElement(B,{hsva:h,onChange:f,className:"react-colorful__last-control"}))},W={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?y({h:_(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:void 0===t[5]?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:w,equal:S},K={defaultColor:"rgba(0, 0, 0, 1)",toHsva:function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?C({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:function(e){var t=M(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:S},A=r("../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js"),F=r.n(A),U=r("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js"),V=r.n(U),X=r("../../node_modules/.pnpm/@storybook+theming@8.1.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@storybook/theming/dist/index.mjs"),G=r("../../node_modules/.pnpm/@storybook+components@8.1.6_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@storybook/components/dist/index.mjs"),J=r("../../node_modules/.pnpm/@storybook+icons@1.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@storybook/icons/dist/index.mjs"),Y=X.I4.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),Q=(0,X.I4)(G.kR)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),Z=X.I4.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),ee=(0,X.I4)(G._)(({theme:e})=>({fontFamily:e.typography.fonts.base})),et=X.I4.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),er=X.I4.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),en=({value:e,style:t,...r})=>{let n=`linear-gradient(${e}, ${e}), url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>'), linear-gradient(#fff, #fff)`;return o.createElement(er,{...r,style:{...t,backgroundImage:n}})},eo=(0,X.I4)(G.lV.Input)(({theme:e,readOnly:t})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),ea=(0,X.I4)(J.QDE)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),el=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(el||{}),es=Object.values(el),eu=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,ei=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,ec=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,ed=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,eh=/^\s*#?([0-9a-f]{3})\s*$/i,ef={hex:function(e){return o.createElement(L,a({},e,{colorModel:P}))},rgb:function(e){return o.createElement(D,a({},e,{colorModel:K}))},hsl:function(e){return o.createElement(D,a({},e,{colorModel:W}))}},em={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},ep=e=>{let t=e?.match(eu);if(!t)return[0,0,0,1];let[,r,n,o,a=1]=t;return[r,n,o,a].map(Number)},eg=e=>{if(!e)return;let t=!0;if(ei.test(e)){let[r,n,o,a]=ep(e),[l,s,u]=F().rgb.hsl([r,n,o])||[0,0,0];return{valid:t,value:e,keyword:F().rgb.keyword([r,n,o]),colorSpace:"rgb",rgb:e,hsl:`hsla(${l}, ${s}%, ${u}%, ${a})`,hex:`#${F().rgb.hex([r,n,o]).toLowerCase()}`}}if(ec.test(e)){let[r,n,o,a]=ep(e),[l,s,u]=F().hsl.rgb([r,n,o])||[0,0,0];return{valid:t,value:e,keyword:F().hsl.keyword([r,n,o]),colorSpace:"hsl",rgb:`rgba(${l}, ${s}, ${u}, ${a})`,hsl:e,hex:`#${F().hsl.hex([r,n,o]).toLowerCase()}`}}let r=e.replace("#",""),n=F().keyword.rgb(r)||F().hex.rgb(r),o=F().rgb.hsl(n),a=e;if(/[^#a-f0-9]/i.test(e)?a=r:ed.test(e)&&(a=`#${r}`),a.startsWith("#"))t=ed.test(a);else try{F().keyword.hex(a)}catch{t=!1}return{valid:t,value:a,keyword:F().rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,hex:a}},eb=(e,t,r)=>{if(!e||!t?.valid)return em[r];if("hex"!==r)return t?.[r]||em[r];if(!t.hex.startsWith("#"))try{return`#${F().keyword.hex(t.hex)}`}catch{return em.hex}let n=t.hex.match(eh);if(!n)return ed.test(t.hex)?t.hex:em.hex;let[o,a,l]=n[1].split("");return`#${o}${o}${a}${a}${l}${l}`},ev=(e,t)=>{let[r,n]=(0,o.useState)(e||""),[a,l]=(0,o.useState)(()=>eg(r)),[s,u]=(0,o.useState)(a?.colorSpace||"hex");(0,o.useEffect)(()=>{let t=e||"",r=eg(t);n(t),l(r),u(r?.colorSpace||"hex")},[e]);let i=(0,o.useMemo)(()=>eb(r,a,s).toLowerCase(),[r,a,s]),c=(0,o.useCallback)(e=>{let r=eg(e),o=r?.value||e||"";n(o),""===o&&(l(void 0),t(void 0)),r&&(l(r),u(r.colorSpace),t(r.value))},[t]),d=(0,o.useCallback)(()=>{let e=es.indexOf(s)+1;e>=es.length&&(e=0),u(es[e]);let r=a?.[es[e]]||"";n(r),t(r)},[a,s,t]);return{value:r,realValue:i,updateValue:c,color:a,colorSpace:s,cycleColorSpace:d}},e_=e=>e.replace(/\s*/,"").toLowerCase(),ey=(e,t,r)=>{let[n,a]=(0,o.useState)(t?.valid?[t]:[]);(0,o.useEffect)(()=>{void 0===t&&a([])},[t]);let l=(0,o.useMemo)(()=>(e||[]).map(e=>"string"==typeof e?eg(e):e.title?{...eg(e.color),keyword:e.title}:eg(e.color)).concat(n).filter(Boolean).slice(-27),[e,n]),s=(0,o.useCallback)(e=>{e?.valid&&(l.some(t=>e_(t[r])===e_(e[r]))||a(t=>t.concat(e)))},[r,l]);return{presets:l,addPreset:s}},ex=({name:e,value:t,onChange:r,onFocus:a,onBlur:l,presetColors:s,startOpen:u=!1,argType:i})=>{let{value:c,realValue:d,updateValue:h,color:f,colorSpace:m,cycleColorSpace:p}=ev(t,(0,o.useCallback)(V()(r,200),[r])),{presets:g,addPreset:b}=ey(s,f,m),v=ef[m],_=!!i?.table?.readonly;return o.createElement(Y,{"aria-readonly":_},o.createElement(Q,{startOpen:u,trigger:_?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:()=>b(f),tooltip:o.createElement(Z,null,o.createElement(v,{color:"transparent"===d?"#000000":d,onChange:h,onFocus:a,onBlur:l}),g.length>0&&o.createElement(et,null,g.map((e,t)=>o.createElement(G.kR,{key:`${e.value}-${t}`,hasChrome:!1,tooltip:o.createElement(ee,{note:e.keyword||e.value})},o.createElement(en,{value:e[m],active:f&&e_(e[m])===e_(f[m]),onClick:()=>h(e.value)})))))},o.createElement(en,{value:d,style:{margin:4}})),o.createElement(eo,{id:(0,n.Z)(e),value:c,onChange:e=>h(e.target.value),onFocus:e=>e.target.select(),readOnly:_,placeholder:"Choose color..."}),c?o.createElement(ea,{onClick:p}):null)},ek=ex},"../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js":(e,t,r)=>{let n=r("../../node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js"),o={};for(let e of Object.keys(n))o[n[e]]=e;let a={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(let t of(e.exports=a,Object.keys(a))){if(!("channels"in a[t]))throw Error("missing channels property: "+t);if(!("labels"in a[t]))throw Error("missing channel labels property: "+t);if(a[t].labels.length!==a[t].channels)throw Error("channel and label counts mismatch: "+t);let{channels:e,labels:r}=a[t];delete a[t].channels,delete a[t].labels,Object.defineProperty(a[t],"channels",{value:e}),Object.defineProperty(a[t],"labels",{value:r})}a.rgb.hsl=function(e){let t;let r=e[0]/255,n=e[1]/255,o=e[2]/255,a=Math.min(r,n,o),l=Math.max(r,n,o),s=l-a;l===a?t=0:r===l?t=(n-o)/s:n===l?t=2+(o-r)/s:o===l&&(t=4+(r-n)/s),(t=Math.min(60*t,360))<0&&(t+=360);let u=(a+l)/2;return[t,100*(l===a?0:u<=.5?s/(l+a):s/(2-l-a)),100*u]},a.rgb.hsv=function(e){let t,r,n,o,a;let l=e[0]/255,s=e[1]/255,u=e[2]/255,i=Math.max(l,s,u),c=i-Math.min(l,s,u),d=function(e){return(i-e)/6/c+.5};return 0===c?(o=0,a=0):(a=c/i,t=d(l),r=d(s),n=d(u),l===i?o=n-r:s===i?o=1/3+t-n:u===i&&(o=2/3+r-t),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*i]},a.rgb.hwb=function(e){let t=e[0],r=e[1],n=e[2];return[a.rgb.hsl(e)[0],1/255*Math.min(t,Math.min(r,n))*100,100*(n=1-1/255*Math.max(t,Math.max(r,n)))]},a.rgb.cmyk=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255,o=Math.min(1-t,1-r,1-n);return[100*((1-t-o)/(1-o)||0),100*((1-r-o)/(1-o)||0),100*((1-n-o)/(1-o)||0),100*o]},a.rgb.keyword=function(e){let t;let r=o[e];if(r)return r;let a=1/0;for(let r of Object.keys(n)){var l,s;let o=n[r],u=(e[0]-o[0])**2+(e[1]-o[1])**2+(e[2]-o[2])**2;u<a&&(a=u,t=r)}return t},a.keyword.rgb=function(e){return n[e]},a.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255;return[100*(.4124*(t=t>.04045?((t+.055)/1.055)**2.4:t/12.92)+.3576*(r=r>.04045?((r+.055)/1.055)**2.4:r/12.92)+.1805*(n=n>.04045?((n+.055)/1.055)**2.4:n/12.92)),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},a.rgb.lab=function(e){let t=a.rgb.xyz(e),r=t[0],n=t[1],o=t[2];return r/=95.047,n/=100,o/=108.883,[116*(n=n>.008856?n**(1/3):7.787*n+16/116)-16,500*((r=r>.008856?r**(1/3):7.787*r+16/116)-n),200*(n-(o=o>.008856?o**(1/3):7.787*o+16/116))]},a.hsl.rgb=function(e){let t,r,n;let o=e[0]/360,a=e[1]/100,l=e[2]/100;if(0===a)return[n=255*l,n,n];t=l<.5?l*(1+a):l+a-l*a;let s=2*l-t,u=[0,0,0];for(let e=0;e<3;e++)(r=o+-(1/3*(e-1)))<0&&r++,r>1&&r--,n=6*r<1?s+(t-s)*6*r:2*r<1?t:3*r<2?s+(t-s)*(2/3-r)*6:s,u[e]=255*n;return u},a.hsl.hsv=function(e){let t=e[0],r=e[1]/100,n=e[2]/100,o=r,a=Math.max(n,.01);n*=2,r*=n<=1?n:2-n,o*=a<=1?a:2-a;let l=(n+r)/2;return[t,100*(0===n?2*o/(a+o):2*r/(n+r)),100*l]},a.hsv.rgb=function(e){let t=e[0]/60,r=e[1]/100,n=e[2]/100,o=Math.floor(t)%6,a=t-Math.floor(t),l=255*n*(1-r),s=255*n*(1-r*a),u=255*n*(1-r*(1-a));switch(n*=255,o){case 0:return[n,u,l];case 1:return[s,n,l];case 2:return[l,n,u];case 3:return[l,s,n];case 4:return[u,l,n];case 5:return[n,l,s]}},a.hsv.hsl=function(e){let t,r;let n=e[0],o=e[1]/100,a=e[2]/100,l=Math.max(a,.01);r=(2-o)*a;let s=(2-o)*l;return[n,100*(o*l/(s<=1?s:2-s)||0),100*(r/=2)]},a.hwb.rgb=function(e){let t,r,n,o;let a=e[0]/360,l=e[1]/100,s=e[2]/100,u=l+s;u>1&&(l/=u,s/=u);let i=Math.floor(6*a),c=1-s;t=6*a-i,(1&i)!=0&&(t=1-t);let d=l+t*(c-l);switch(i){default:case 6:case 0:r=c,n=d,o=l;break;case 1:r=d,n=c,o=l;break;case 2:r=l,n=c,o=d;break;case 3:r=l,n=d,o=c;break;case 4:r=d,n=l,o=c;break;case 5:r=c,n=l,o=d}return[255*r,255*n,255*o]},a.cmyk.rgb=function(e){let t=e[0]/100,r=e[1]/100,n=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,t*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o))]},a.xyz.rgb=function(e){let t,r,n;let o=e[0]/100,a=e[1]/100,l=e[2]/100;return t=(t=3.2406*o+-1.5372*a+-.4986*l)>.0031308?1.055*t**(1/2.4)-.055:12.92*t,r=(r=-.9689*o+1.8758*a+.0415*l)>.0031308?1.055*r**(1/2.4)-.055:12.92*r,n=(n=.0557*o+-.204*a+1.057*l)>.0031308?1.055*n**(1/2.4)-.055:12.92*n,[255*(t=Math.min(Math.max(0,t),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]},a.xyz.lab=function(e){let t=e[0],r=e[1],n=e[2];return t/=95.047,r/=100,n/=108.883,[116*(r=r>.008856?r**(1/3):7.787*r+16/116)-16,500*((t=t>.008856?t**(1/3):7.787*t+16/116)-r),200*(r-(n=n>.008856?n**(1/3):7.787*n+16/116))]},a.lab.xyz=function(e){let t,r,n;let o=e[0],a=e[1],l=e[2];t=a/500+(r=(o+16)/116),n=r-l/200;let s=r**3,u=t**3,i=n**3;return r=(s>.008856?s:(r-16/116)/7.787)*100,[t=(u>.008856?u:(t-16/116)/7.787)*95.047,r,n=(i>.008856?i:(n-16/116)/7.787)*108.883]},a.lab.lch=function(e){let t;let r=e[0],n=e[1],o=e[2];return(t=360*Math.atan2(o,n)/2/Math.PI)<0&&(t+=360),[r,Math.sqrt(n*n+o*o),t]},a.lch.lab=function(e){let t=e[0],r=e[1],n=e[2]/360*2*Math.PI;return[t,r*Math.cos(n),r*Math.sin(n)]},a.rgb.ansi16=function(e,t=null){let[r,n,o]=e,l=null===t?a.rgb.hsv(e)[2]:t;if(0===(l=Math.round(l/50)))return 30;let s=30+(Math.round(o/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===l&&(s+=60),s},a.hsv.ansi16=function(e){return a.rgb.ansi16(a.hsv.rgb(e),e[2])},a.rgb.ansi256=function(e){let t=e[0],r=e[1],n=e[2];return t===r&&r===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},a.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];let r=(~~(e>50)+1)*.5;return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},a.ansi256.rgb=function(e){let t;if(e>=232){let t=(e-232)*10+8;return[t,t,t]}return[Math.floor((e-=16)/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},a.rgb.hex=function(e){let t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},a.hex.rgb=function(e){let t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];3===t[0].length&&(r=r.split("").map(e=>e+e).join(""));let n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},a.rgb.hcg=function(e){let t;let r=e[0]/255,n=e[1]/255,o=e[2]/255,a=Math.max(Math.max(r,n),o),l=Math.min(Math.min(r,n),o),s=a-l;return t=s<1?l/(1-s):0,[(s<=0?0:a===r?(n-o)/s%6:a===n?2+(o-r)/s:4+(r-n)/s)/6%1*360,100*s,100*t]},a.hsl.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=r<.5?2*t*r:2*t*(1-r),o=0;return n<1&&(o=(r-.5*n)/(1-n)),[e[0],100*n,100*o]},a.hsv.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=t*r,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},a.hcg.rgb=function(e){let t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];let o=[0,0,0],a=t%1*6,l=a%1,s=1-l,u=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=l,o[2]=0;break;case 1:o[0]=s,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=l;break;case 3:o[0]=0,o[1]=s,o[2]=1;break;case 4:o[0]=l,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=s}return u=(1-r)*n,[(r*o[0]+u)*255,(r*o[1]+u)*255,(r*o[2]+u)*255]},a.hcg.hsv=function(e){let t=e[1]/100,r=t+e[2]/100*(1-t),n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},a.hcg.hsl=function(e){let t=e[1]/100,r=e[2]/100*(1-t)+.5*t,n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},a.hcg.hwb=function(e){let t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],(r-t)*100,(1-r)*100]},a.hwb.hcg=function(e){let t=e[1]/100,r=1-e[2]/100,n=r-t,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},a.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},a.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},a.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},a.gray.hsl=function(e){return[0,0,e[0]]},a.gray.hsv=a.gray.hsl,a.gray.hwb=function(e){return[0,100,e[0]]},a.gray.cmyk=function(e){return[0,0,0,e[0]]},a.gray.lab=function(e){return[e[0],0,0]},a.gray.hex=function(e){let t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},a.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},"../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js":(e,t,r)=>{let n=r("../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js"),o=r("../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js"),a={};Object.keys(n).forEach(e=>{a[e]={},Object.defineProperty(a[e],"channels",{value:n[e].channels}),Object.defineProperty(a[e],"labels",{value:n[e].labels});let t=o(e);Object.keys(t).forEach(r=>{let n=t[r];a[e][r]=function(e){let t=function(...t){let r=t[0];if(null==r)return r;r.length>1&&(t=r);let n=e(t);if("object"==typeof n)for(let e=n.length,t=0;t<e;t++)n[t]=Math.round(n[t]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}(n),a[e][r].raw=function(e){let t=function(...t){let r=t[0];return null==r?r:(r.length>1&&(t=r),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)})}),e.exports=a},"../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js":(e,t,r)=>{let n=r("../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js");e.exports=function(e){let t=function(e){let t=function(){let e={},t=Object.keys(n);for(let r=t.length,n=0;n<r;n++)e[t[n]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;){let e=r.pop(),o=Object.keys(n[e]);for(let n=o.length,a=0;a<n;a++){let n=o[a],l=t[n];-1===l.distance&&(l.distance=t[e].distance+1,l.parent=e,r.unshift(n))}}return t}(e),r={},o=Object.keys(t);for(let e=o.length,a=0;a<e;a++){let e=o[a];null!==t[e].parent&&(r[e]=function(e,t){let r=[t[e].parent,e],o=n[t[e].parent][e],a=t[e].parent;for(;t[a].parent;)r.unshift(t[a].parent),o=function(e,t){return function(r){return t(e(r))}}(n[t[a].parent][a],o),a=t[a].parent;return o.conversion=r,o}(e,t))}return r}},"../../node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js":e=>{"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},"../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js":(e,t,r)=>{var n=r("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js"),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},"../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js":e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},"../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js":(e,t,r)=>{var n=r("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"),o=r("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js"),a=r("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js"),l=Math.max,s=Math.min;e.exports=function(e,t,r){var u,i,c,d,h,f,m=0,p=!1,g=!1,b=!0;if("function"!=typeof e)throw TypeError("Expected a function");function v(t){var r=u,n=i;return u=i=void 0,m=t,d=e.apply(n,r)}function _(e){var r=e-f,n=e-m;return void 0===f||r>=t||r<0||g&&n>=c}function y(){var e,r,n,a=o();if(_(a))return x(a);h=setTimeout(y,(e=a-f,r=a-m,n=t-e,g?s(n,c-r):n))}function x(e){return(h=void 0,b&&u)?v(e):(u=i=void 0,d)}function k(){var e,r=o(),n=_(r);if(u=arguments,i=this,f=r,n){if(void 0===h)return m=e=f,h=setTimeout(y,t),p?v(e):d;if(g)return clearTimeout(h),h=setTimeout(y,t),v(f)}return void 0===h&&(h=setTimeout(y,t)),d}return t=a(t)||0,n(r)&&(p=!!r.leading,c=(g="maxWait"in r)?l(a(r.maxWait)||0,t):c,b="trailing"in r?!!r.trailing:b),k.cancel=function(){void 0!==h&&clearTimeout(h),m=0,u=f=i=h=void 0},k.flush=function(){return void 0===h?d:x(o())},k}},"../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js":(e,t,r)=>{var n=r("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");e.exports=function(){return n.Date.now()}},"../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js":(e,t,r)=>{var n=r("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js"),o=r("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js");e.exports=function(e,t,r){var a=!0,l=!0;if("function"!=typeof e)throw TypeError("Expected a function");return o(r)&&(a="leading"in r?!!r.leading:a,l="trailing"in r?!!r.trailing:l),n(e,t,{leading:a,maxWait:t,trailing:l})}},"../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js":(e,t,r)=>{var n=r("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js"),o=r("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"),a=r("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js"),l=0/0,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,i=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return l;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=u.test(e);return r||i.test(e)?c(e.slice(2),r?2:8):s.test(e)?l:+e}}}]);