"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[637],{"../../node_modules/@storybook/components/dist/OverlayScrollbars-OGE3XJTA.mjs":(t,e,r)=>{r.r(e),r.d(e,{OverlayScrollbars:()=>rB,default:()=>rH});var l=r("../../node_modules/react/index.js");function n(t,e){if($(t))for(let r=0;r<t.length&&!1!==e(t[r],r,t);r++);else t&&n(Object.keys(t),r=>e(t[r],r,t));return t}function i(t,e){let r=w(e);if(m(e)||r){let l=r?"":{};if(t){let n=window.getComputedStyle(t,null);l=r?tR(t,n,e):e.reduce((e,r)=>(e[r]=tR(t,n,r),e),l)}return l}t&&n(M(e),r=>tP(t,r,e[r]))}var o,a,s=(t,e)=>{let{o:r,u:l,_:n}=t,i=r,o,a=(t,e)=>{let r=i,a=e||(l?!l(r,t):r!==t);return(a||n)&&(i=t,o=r),[i,a,o]};return[e?t=>a(e(i,o),t):a,t=>[i,!!t,o]]},d=()=>"u">typeof window,u=d()&&Node.ELEMENT_NODE,{toString:c,hasOwnProperty:f}=Object.prototype,p=t=>void 0===t,h=t=>null===t,b=t=>p(t)||h(t)?`${t}`:c.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),v=t=>"number"==typeof t,w=t=>"string"==typeof t,g=t=>"boolean"==typeof t,y=t=>"function"==typeof t,m=t=>Array.isArray(t),x=t=>"object"==typeof t&&!m(t)&&!h(t),$=t=>{let e=!!t&&t.length,r=v(e)&&e>-1&&e%1==0;return(!!m(t)||!y(t)&&!!r)&&(!(e>0&&x(t))||e-1 in t)},S=t=>{if(!t||!x(t)||"object"!==b(t))return!1;let e,r="constructor",l=t[r],n=l&&l.prototype,i=f.call(t,r),o=n&&f.call(n,"isPrototypeOf");if(l&&!i&&!o)return!1;for(e in t);return p(e)||f.call(t,e)},O=t=>{let e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===u)},E=t=>{let e=Element;return!!t&&(e?t instanceof e:t.nodeType===u)},C=(t,e,r)=>t.indexOf(e,r),k=(t,e,r)=>(!r&&!w(e)&&$(e)?Array.prototype.push.apply(t,e):t.push(e),t),L=t=>{let e=Array.from,r=[];return e&&t?e(t):(t instanceof Set?t.forEach(t=>{k(r,t)}):n(t,t=>{k(r,t)}),r)},z=t=>!!t&&0===t.length,A=(t,e,r)=>{n(t,t=>t&&t.apply(void 0,e||[])),r||(t.length=0)},I=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),M=t=>t?Object.keys(t):[],R=(t,e,r,l,i,o,a)=>{let s=[e,r,l,i,o,a];return("object"!=typeof t||h(t))&&!y(t)&&(t={}),n(s,e=>{n(M(e),r=>{let l=e[r];if(t===l)return!0;let n=m(l);if(l&&(S(l)||n)){let e=t[r],i=e;n&&!m(e)?i=[]:n||S(e)||(i={}),t[r]=R(i,l)}else t[r]=l})}),t},P=t=>{for(let e in t)return!1;return!0},T=(t,e,r,l)=>{if(p(l))return r?r[t]:e;r&&(w(l)||v(l))&&(r[t]=l)},B=(t,e,r)=>{if(p(r))return t?t.getAttribute(e):null;t&&t.setAttribute(e,r)},H=(t,e)=>{t&&t.removeAttribute(e)},N=(t,e,r,l)=>{if(r){let n=B(t,e)||"",i=new Set(n.split(" "));i[l?"add":"delete"](r),B(t,e,L(i).join(" ").trim())}},X=(t,e,r)=>{let l=B(t,e)||"";return new Set(l.split(" ")).has(r)},D=(t,e)=>T("scrollLeft",0,t,e),F=(t,e)=>T("scrollTop",0,t,e),V=d()&&Element.prototype,j=(t,e)=>{let r=[],l=e?E(e)?e:null:document;return l?k(r,l.querySelectorAll(t)):r},_=(t,e)=>{let r=e?E(e)?e:null:document;return r?r.querySelector(t):null},q=(t,e)=>!!E(t)&&(V.matches||V.msMatchesSelector).call(t,e),J=t=>t?L(t.childNodes):[],W=t=>t?t.parentElement:null,K=(t,e)=>{if(E(t)){let r=V.closest;if(r)return r.call(t,e);do{if(q(t,e))return t;t=W(t)}while(t)}return null},Y=(t,e,r)=>{let l=t&&K(t,e),n=t&&_(r,l),i=K(n,e)===l;return!!l&&!!n&&(l===t||n===t||i&&K(K(t,r),e)!==l)},Z=(t,e,r)=>{if(r&&t){let l=e,i;$(r)?(i=document.createDocumentFragment(),n(r,t=>{t===l&&(l=t.previousSibling),i.appendChild(t)})):i=r,e&&(l?l!==e&&(l=l.nextSibling):l=t.firstChild),t.insertBefore(i,l||null)}},G=(t,e)=>{Z(t,null,e)},U=(t,e)=>{Z(W(t),t,e)},Q=(t,e)=>{Z(W(t),t&&t.nextSibling,e)},tt=t=>{if($(t))n(L(t),t=>tt(t));else if(t){let e=W(t);e&&e.removeChild(t)}},te=t=>{let e=document.createElement("div");return t&&B(e,"class",t),e},tr=t=>{let e=te();return e.innerHTML=t.trim(),n(J(e),t=>tt(t))},tl=t=>t.charAt(0).toUpperCase()+t.slice(1),tn=()=>te().style,ti=["-webkit-","-moz-","-o-","-ms-"],to=["WebKit","Moz","O","MS","webkit","moz","o","ms"],ta={},ts={},td=t=>{let e=ts[t];if(I(ts,t))return e;let r=tl(t),l=tn();return n(ti,n=>{let i=n.replace(/-/g,"");return!(e=[t,n+t,i+r,tl(i)+r].find(t=>void 0!==l[t]))}),ts[t]=e||""},tu=t=>{if(d()){let e=ta[t]||window[t];return I(ta,t)||(n(to,r=>!(e=e||window[r+tl(t)])),ta[t]=e),e}},tc=tu("MutationObserver"),tf=tu("IntersectionObserver"),tp=tu("ResizeObserver"),th=tu("cancelAnimationFrame"),tb=tu("requestAnimationFrame"),tv=d()&&window.setTimeout,tw=d()&&window.clearTimeout,tg=/[^\x20\t\r\n\f]+/g,ty=(t,e,r)=>{let l=t&&t.classList,n,i=0,o=!1;if(l&&e&&w(e)){let t=e.match(tg)||[];for(o=t.length>0;n=t[i++];)o=!!r(l,n)&&o}return o},tm=(t,e)=>{ty(t,e,(t,e)=>t.remove(e))},tx=(t,e)=>(ty(t,e,(t,e)=>t.add(e)),tm.bind(0,t,e)),t$=(t,e,r,l)=>{if(t&&e){let i=!0;return n(r,r=>{(l?l(t[r]):t[r])!==(l?l(e[r]):e[r])&&(i=!1)}),i}return!1},tS=(t,e)=>t$(t,e,["w","h"]),tO=(t,e)=>t$(t,e,["x","y"]),tE=(t,e)=>t$(t,e,["t","r","b","l"]),tC=(t,e,r)=>t$(t,e,["width","height"],r&&(t=>Math.round(t))),tk=()=>{},tL=t=>{let e,r=t?tv:tb,l=t?tw:th;return[n=>{l(e),e=r(n,y(t)?t():t)},()=>l(e)]},tz=(t,e)=>{let r,l,n,i=tk,{v:o,g:a,p:s}=e||{},d=function(e){i(),tw(r),r=l=void 0,i=tk,t.apply(this,e)},u=t=>s&&l?s(l,t):t,c=()=>{i!==tk&&d(u(n)||n)},f=function(){let t=L(arguments),e=y(o)?o():o;if(v(e)&&e>=0){let o=y(a)?a():a,s=v(o)&&o>=0,f=e>0?tv:tb,p=e>0?tw:th,h=u(t)||t,b=d.bind(0,h);i();let w=f(b,e);i=()=>p(w),s&&!r&&(r=tv(c,o)),l=n=h}else d(t)};return f.m=c,f},tA={opacity:1,zindex:1},tI=(t,e)=>{let r=e?parseFloat(t):parseInt(t,10);return r==r?r:0},tM=(t,e)=>!tA[t.toLowerCase()]&&v(e)?`${e}px`:e,tR=(t,e,r)=>null!=e?e[r]||e.getPropertyValue(r):t.style[r],tP=(t,e,r)=>{try{let{style:l}=t;p(l[e])?l.setProperty(e,r):l[e]=tM(e,r)}catch{}},tT=t=>"rtl"===i(t,"direction"),tB=(t,e,r)=>{let l=e?`${e}-`:"",n=r?`-${r}`:"",o=`${l}top${n}`,a=`${l}right${n}`,s=`${l}bottom${n}`,d=`${l}left${n}`,u=i(t,[o,a,s,d]);return{t:tI(u[o],!0),r:tI(u[a],!0),b:tI(u[s],!0),l:tI(u[d],!0)}},{round:tH}=Math,tN={w:0,h:0},tX=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:tN,tD=t=>t?{w:t.clientWidth,h:t.clientHeight}:tN,tF=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:tN,tV=t=>{let e=parseFloat(i(t,"height"))||0,r=parseFloat(i(t,"width"))||0;return{w:r-tH(r),h:e-tH(e)}},tj=t=>t.getBoundingClientRect(),t_=()=>{if(p(o)){o=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){o=!0}}))}catch{}}return o},tq=t=>t.split(" "),tJ=(t,e,r,l)=>{n(tq(e),e=>{t.removeEventListener(e,r,l)})},tW=(t,e,r,l)=>{var i;let o=t_(),a=null!=(i=o&&l&&l.S)?i:o,s=l&&l.$||!1,d=l&&l.C||!1,u=[],c=o?{passive:a,capture:s}:s;return n(tq(e),e=>{let l=d?n=>{t.removeEventListener(e,l,s),r&&r(n)}:r;k(u,tJ.bind(null,t,e,l,s)),t.addEventListener(e,l,c)}),A.bind(0,u)},tK=t=>t.stopPropagation(),tY=t=>t.preventDefault(),tZ={x:0,y:0},tG=t=>{let e=t?tj(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:tZ},tU=(t,e)=>{n(m(e)?e:[e],t)},tQ=t=>{let e=new Map,r=(t,r)=>{if(t){let l=e.get(t);tU(t=>{l&&l[t?"delete":"clear"](t)},r)}else e.forEach(t=>{t.clear()}),e.clear()},l=(t,i)=>{if(w(t)){let l=e.get(t)||new Set;return e.set(t,l),tU(t=>{y(t)&&l.add(t)},i),r.bind(0,t,i)}g(i)&&i&&r();let o=M(t),a=[];return n(o,e=>{let r=t[e];r&&k(a,l(e,r))}),A.bind(0,a)};return l(t||{}),[l,r,(t,r)=>{n(L(e.get(t)),t=>{r&&!z(r)?t.apply(0,r):t()})}]},t0=t=>JSON.stringify(t,(t,e)=>{if(y(e))throw Error();return e}),t1={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},t3=(t,e)=>{let r={};return n(M(e).concat(M(t)),l=>{let n=t[l],i=e[l];if(x(n)&&x(i))R(r[l]={},t3(n,i)),P(r[l])&&delete r[l];else if(I(e,l)&&i!==n){let t=!0;if(m(n)||m(i))try{t0(n)===t0(i)&&(t=!1)}catch{}t&&(r[l]=i)}}),r},t9="os-environment",t2=`${t9}-flexbox-glue`,t4=`${t2}-max`,t6="os-scrollbar-hidden",t7="data-overlayscrollbars-initialize",t5="data-overlayscrollbars",t8=`${t5}-overflow-x`,et=`${t5}-overflow-y`,ee="overflowVisible",er="scrollbarPressed",el="updating",en="data-overlayscrollbars-viewport",ei="arrange",eo="scrollbarHidden",ea="data-overlayscrollbars-padding",es="data-overlayscrollbars-content",ed="os-size-observer",eu=`${ed}-appear`,ec=`${ed}-listener`,ef="os-scrollbar",ep=`${ef}-rtl`,eh=`${ef}-horizontal`,eb=`${ef}-vertical`,ev=`${ef}-track`,ew=`${ef}-handle`,eg=`${ef}-visible`,ey=`${ef}-cornerless`,em=`${ef}-transitionless`,ex=`${ef}-interaction`,e$=`${ef}-unusable`,eS=`${ef}-auto-hidden`,eO=`${ef}-wheel`,eE=`${ev}-interactive`,eC=`${ew}-interactive`,ek={},eL=()=>ek,ez=t=>{let e=[];return n(m(t)?t:[t],t=>{n(M(t),r=>{k(e,ek[r]=t[r])})}),e},eA="__osScrollbarsHidingPlugin",eI=(t,e,r,l)=>{G(t,e);let n=tD(e),i=tX(e),o=tV(r);return l&&tt(e),{x:i.h-n.h+o.h,y:i.w-n.w+o.w}},eM=t=>{let e=!1,r=tx(t,t6);try{e="none"===i(t,td("scrollbar-width"))||"none"===window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")}catch{}return r(),e},eR=(t,e)=>{let r="hidden";i(t,{overflowX:r,overflowY:r,direction:"rtl"}),D(t,0);let l=tG(t),n=tG(e);D(t,-999);let o=tG(e);return{i:l.x===n.x,n:n.x!==o.x}},eP=(t,e)=>{let r=tx(t,t2),l=tj(t),n=tC(tj(e),l,!0),i=tx(t,t4),o=tj(t),a=tC(tj(e),o,!0);return r(),i(),n&&a},eT=()=>{let{body:t}=document,e=tr(`<div class="${t9}"><div></div></div>`)[0],r=e.firstChild,[l,,n]=tQ(),[o,a]=s({o:eI(t,e,r),u:tO},eI.bind(0,t,e,r,!0)),[d]=a(),u=eM(e),c={x:0===d.x,y:0===d.y},f={elements:{host:null,padding:!u,viewport:t=>u&&t===t.ownerDocument.body&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=R({},t1),h=R.bind(0,{},p),b=R.bind(0,{},f),v={k:d,A:c,I:u,L:"-1"===i(e,"zIndex"),B:eR(e,r),V:eP(e,r),Y:l.bind(0,"z"),j:l.bind(0,"r"),N:b,q:t=>R(f,t)&&b(),F:h,G:t=>R(p,t)&&h(),X:R({},f),U:R({},p)},w=window.addEventListener,g=tz(t=>n(t?"z":"r"),{v:33,g:99});if(H(e,"style"),tt(e),w("resize",g.bind(0,!1)),!u&&(!c.x||!c.y)){let t;w("resize",()=>{let e=eL()[eA];(t=t||e&&e.R())&&t(v,o,g.bind(0,!0))})}return v},eB=()=>(a||(a=eT()),a),eH=(t,e)=>y(e)?e.apply(0,t):e,eN=(t,e,r,l)=>eH(t,p(l)?r:l)||e.apply(0,t),eX=(t,e,r,l)=>{let n=eH(t,p(l)?r:l);return!!n&&(O(n)?n:e.apply(0,t))},eD=(t,e,r)=>{let{nativeScrollbarsOverlaid:l,body:n}=r||{},{A:i,I:o}=eB(),{nativeScrollbarsOverlaid:a,body:s}=e,d=p(n)?s:n,u=(i.x||i.y)&&(l??a),c=t&&(h(d)?!o:d);return!!u||!!c},eF=new WeakMap,eV=(t,e)=>{eF.set(t,e)},ej=t=>{eF.delete(t)},e_=t=>eF.get(t),eq=(t,e)=>t?e.split(".").reduce((t,e)=>t&&I(t,e)?t[e]:void 0,t):void 0,eJ=(t,e,r)=>l=>[eq(t,l),r||void 0!==eq(e,l)],eW=t=>{let e=t;return[()=>e,t=>{e=R({},e,t)}]},eK="tabindex",eY=te.bind(0,""),eZ=t=>{G(W(t),J(t)),tt(t)},eG=t=>{let e=eB(),{N:r,I:l}=e,n=eL()[eA],i=n&&n.T,{elements:o}=r(),{host:a,padding:s,viewport:d,content:u}=o,c=O(t),f=c?{}:t,{elements:p}=f,{host:h,padding:b,viewport:v,content:w}=p||{},g=c?t:f.target,y=q(g,"textarea"),m=g.ownerDocument,x=m.documentElement,$=g===m.body,S=m.defaultView,E=eN.bind(0,[g]),L=eX.bind(0,[g]),z=eH.bind(0,[g]),I=E.bind(0,eY,d),R=L.bind(0,eY,u),P=I(v),T=P===g,D=T&&$,F=!T&&R(w),V=!T&&O(P)&&P===F,j=V&&!!z(u),_=j?I():P,K=j?F:R(),Y=D?x:V?_:P,Z=y?E(eY,a,h):g,te=D?Y:Z,tr=m.activeElement,tl=!T&&S.top===S&&tr===g,tn={W:g,Z:te,J:Y,K:!T&&L(eY,s,b),tt:V?K:F,nt:!T&&!l&&i&&i(e),ot:D?x:Y,st:D?m:Y,et:S,ct:m,rt:y,it:$,lt:c,ut:T,dt:V,ft:(t,e)=>X(Y,T?t5:en,T?e:t),_t:(t,e,r)=>N(Y,T?t5:en,T?e:t,r)},ti=M(tn).reduce((t,e)=>{let r=tn[e];return k(t,!!r&&!W(r)&&r)},[]),to=t=>t?C(ti,t)>-1:null,{W:ta,Z:ts,K:td,J:tu,tt:tc,nt:tf}=tn,tp=[()=>{H(ts,t5),H(ts,t7),H(ta,t7),$&&(H(x,t5),H(x,t7))}],th=y&&to(ts),tb=y?ta:J([tc,tu,td,ts,ta].find(t=>!1===to(t))),tv=D?ta:tc||tu;return[tn,()=>{B(ts,t5,T?"viewport":"host"),B(td,ea,""),B(tc,es,""),T||B(tu,en,"");let t=$&&!T?tx(W(g),t6):tk;if(th&&(Q(ta,ts),k(tp,()=>{Q(ts,ta),tt(ts)})),G(tv,tb),G(ts,td),G(td||ts,!T&&tu),G(tu,tc),k(tp,()=>{t(),H(td,ea),H(tc,es),H(tu,t8),H(tu,et),H(tu,en),to(tc)&&eZ(tc),to(tu)&&eZ(tu),to(td)&&eZ(td)}),l&&!T&&(N(tu,en,eo,!0),k(tp,H.bind(0,tu,en))),tf&&(U(tu,tf),k(tp,tt.bind(0,tf))),tl){let t=B(tu,eK);B(tu,eK,"-1"),tu.focus();let e=()=>t?B(tu,eK,t):H(tu,eK),r=tW(m,"pointerdown keydown",()=>{e(),r()});k(tp,[e,r])}else tr&&tr.focus&&tr.focus();tb=0},A.bind(0,tp)]},eU=(t,e)=>{let{tt:r}=t,[l]=e;return t=>{let{V:e}=eB(),{ht:n}=l(),{vt:o}=t,a=(r||!e)&&o;return a&&i(r,{height:n?"":"100%"}),{gt:a,wt:a}}},eQ=(t,e)=>{let[r,l]=e,{Z:n,K:o,J:a,ut:d}=t,[u,c]=s({u:tE,o:tB()},tB.bind(0,n,"padding",""));return(t,e,n)=>{let[s,f]=c(n),{I:p,V:h}=eB(),{bt:b}=r(),{gt:v,wt:w,yt:g}=t,[y,m]=e("paddingAbsolute");(v||f||!h&&w)&&([s,f]=u(n));let x=!d&&(m||g||f);if(x){let t=!y||!o&&!p,e=s.r+s.l,r=s.t+s.b,n={marginRight:t&&!b?-e:0,marginBottom:t?-r:0,marginLeft:t&&b?-e:0,top:t?-s.t:0,right:t?b?-s.r:"auto":0,left:t?b?"auto":-s.l:0,width:t?`calc(100% + ${e}px)`:""},d={paddingTop:t?s.t:0,paddingRight:t?s.r:0,paddingBottom:t?s.b:0,paddingLeft:t?s.l:0};i(o||a,n),i(a,d),l({K:s,St:!t,P:o?d:R({},n,d)})}return{xt:x}}},{max:e0}=Math,e1=e0.bind(0,0),e3="visible",e9="hidden",e2={u:tS,o:{w:0,h:0}},e4={u:tO,o:{x:e9,y:e9}},e6=(t,e)=>{let r=window.devicePixelRatio%1!=0?1:0,l={w:e1(t.w-e.w),h:e1(t.h-e.h)};return{w:l.w>r?l.w:0,h:l.h>r?l.h:0}},e7=t=>0===t.indexOf(e3),e5=(t,e)=>{let[r,l]=e,{Z:n,K:o,J:a,nt:d,ut:u,_t:c,it:f,et:p}=t,{k:h,V:b,I:v,A:w}=eB(),g=eL()[eA],y=!u&&!v&&(w.x||w.y),m=f&&u,[x,$]=s(e2,tV.bind(0,a)),[S,O]=s(e2,tF.bind(0,a)),[E,C]=s(e2),[k,L]=s(e2),[z]=s(e4),A=(t,e)=>{if(i(a,{height:""}),e){let{St:e,K:l}=r(),{$t:o,D:s}=t,d=tV(n),u=tD(n),c="content-box"===i(a,"boxSizing"),f=e||c?l.b+l.t:0,p=!(w.x&&c);i(a,{height:u.h+d.h+(o.x&&p?s.x:0)-f})}},I=(t,e)=>{let r=v||t?0:42,l=(t,l,n)=>{let o=i(a,t),s=(e?e[t]:o)==="scroll";return[o,s,s&&!v?l?r:n:0,l&&!!r]},[n,o,s,d]=l("overflowX",w.x,h.x),[u,c,f,p]=l("overflowY",w.y,h.y);return{Ct:{x:n,y:u},$t:{x:o,y:c},D:{x:s,y:f},M:{x:d,y:p}}},M=(t,e,r,l)=>{let n=(t,e)=>{let r=e7(t),l=e&&r&&t.replace(`${e3}-`,"")||"";return[e&&!r?t:"",e7(l)?"hidden":l]},[i,o]=n(r.x,e.x),[a,s]=n(r.y,e.y);return l.overflowX=o&&a?o:i,l.overflowY=s&&i?s:a,I(t,l)},R=(t,e,l,n)=>{let{D:i,M:o}=t,{x:a,y:s}=o,{x:d,y:u}=i,{P:c}=r(),f=e?"marginLeft":"marginRight",p=e?"paddingLeft":"paddingRight",h=c[f],b=c.marginBottom,v=c[p],w=c.paddingBottom;n.width=`calc(100% + ${u+-1*h}px)`,n[f]=-u+h,n.marginBottom=-d+b,l&&(n[p]=v+(s?u:0),n.paddingBottom=w+(a?d:0))},[P,T]=g?g.H(y,b,a,d,r,I,R):[()=>y,()=>[tk]];return(t,e,s)=>{let{gt:d,Ot:f,wt:h,xt:g,vt:y,yt:H}=t,{ht:X,bt:D}=r(),[F,V]=e("showNativeOverlaidScrollbars"),[j,_]=e("overflow"),q=F&&w.x&&w.y,J=!u&&!b&&(d||h||f||V||y),W=e7(j.x),K=e7(j.y),Y=W||K,Z=$(s),G=O(s),U=C(s),Q=L(s),tt;if(V&&v&&c(eo,"scrollbarHidden",!q),J&&A(tt=I(q),X),d||g||h||H||V){Y&&c(ee,ee,!1);let[t,e]=T(q,D,tt),[r,l]=Z=x(s),[n,i]=G=S(s),o=tD(a),d=n,u=o;t(),(i||l||V)&&e&&!q&&P(e,n,r,D)&&(u=tD(a),d=tF(a));let f={w:e1(e0(n.w,d.w)+r.w),h:e1(e0(n.h,d.h)+r.h)},h={w:e1((m?p.innerWidth:u.w+e1(o.w-n.w))+r.w),h:e1((m?p.innerHeight+r.h:u.h+e1(o.h-n.h))+r.h)};Q=k(h),U=E(e6(f,h),s)}let[te,tr]=Q,[tl,tn]=U,[ti,to]=G,[ta,ts]=Z,td={x:tl.w>0,y:tl.h>0},tu=W&&K&&(td.x||td.y)||W&&td.x&&!td.y||K&&td.y&&!td.x;if(g||H||ts||to||tr||tn||_||V||J){let t={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},e=M(q,td,j,t),r=P(e,ti,ta,D);u||R(e,D,r,t),J&&A(e,X),u?(B(n,t8,t.overflowX),B(n,et,t.overflowY)):i(a,t)}N(n,t5,ee,tu),N(o,ea,ee,tu),u||N(a,en,ee,Y);let[tc,tf]=z(I(q).Ct);return l({Ct:tc,zt:{x:te.w,y:te.h},Tt:{x:tl.w,y:tl.h},Et:td}),{It:tf,At:tr,Lt:tn}}},e8=(t,e,r)=>{let l={},i=e||{};return n(M(t).concat(M(i)),e=>{let n=t[e],o=i[e];l[e]=!!(r||n||o)}),l},rt=(t,e)=>{let{W:r,J:l,_t:i,ut:o}=t,{I:a,A:s,V:d}=eB(),u=!a&&(s.x||s.y),c=[eU(t,e),eQ(t,e),e5(t,e)];return(t,e,a)=>{let s=e8(R({gt:!1,xt:!1,yt:!1,vt:!1,At:!1,Lt:!1,It:!1,Ot:!1,wt:!1},e),{},a),f=u||!d,p=f&&D(l),h=f&&F(l);i("",el,!0);let b=s;return n(c,e=>{b=e8(b,e(b,t,!!a)||{},a)}),D(l,p),F(l,h),i("",el),o||(D(r,0),F(r,0)),b}},re=(t,e,r)=>{let l,i=!1,o=o=>{r&&n(r.reduce((e,r)=>{if(r){let[l,n]=r,i=n&&l&&(o?o(l):j(l,t));i&&i.length&&n&&w(n)&&k(e,[i,n.trim()],!0)}return e},[]),r=>n(r[0],n=>{let o=r[1],a=l.get(n)||[];if(t.contains(n)){let t=tW(n,o,r=>{i?(t(),l.delete(n)):e(r)});l.set(n,k(a,t))}else A(a),l.delete(n)}))};return r&&(l=new WeakMap,o()),[()=>{i=!0},o]},rr=(t,e,r,l)=>{let i=!1,{Ht:o,Pt:a,Dt:s,Mt:d,Rt:u,kt:c}=l||{},f=tz(()=>{i&&r(!0)},{v:33,g:99}),[p,h]=re(t,f,s),b=a||[],v=(o||[]).concat(b),g=(i,o)=>{let a=u||tk,s=c||tk,f=new Set,p=new Set,v=!1,g=!1;if(n(i,r=>{let{attributeName:i,target:o,type:u,oldValue:c,addedNodes:h,removedNodes:y}=r,m="attributes"===u,x=t===o,$=m&&w(i)?B(o,i):0,S=0!==$&&c!==$,O=C(b,i)>-1&&S;if(e&&("childList"===u||!x)){let e=!m,u=m&&S,p=u&&d&&q(o,d),b=(p?!a(o,i,c,$):e||u)&&!s(r,!!p,t,l);n(h,t=>f.add(t)),n(y,t=>f.add(t)),g=g||b}!e&&x&&S&&!a(o,i,c,$)&&(p.add(i),v=v||O)}),f.size>0&&h(t=>L(f).reduce((e,r)=>(k(e,j(t,r)),q(r,t)?k(e,r):e),[])),e)return!o&&g&&r(!1),[!1];if(p.size>0||v){let t=[L(p),v];return o||r.apply(0,t),t}},y=new tc(t=>g(t));return y.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:v,subtree:e,childList:e,characterData:e}),i=!0,[()=>{i&&(p(),y.disconnect(),i=!1)},()=>{if(i){f.m();let t=y.takeRecords();return!z(t)&&g(t,!0)}}]},rl=t=>t&&(t.height||t.width),rn=(t,e,r)=>{let{Bt:l=!1,Vt:n=!1}=r||{},i=eL().__osSizeObserverPlugin,{B:o}=eB(),a=tr(`<div class="${ed}"><div class="${ec}"></div></div>`)[0],d=a.firstChild,u=tT.bind(0,t),[c]=s({o:void 0,_:!0,u:(t,e)=>!(!t||!rl(t)&&rl(e))}),f=t=>{let r=m(t)&&t.length>0&&x(t[0]),n=!r&&g(t[0]),i=!1,s=!1,d=!0;if(r){let[e,,r]=c(t.pop().contentRect),l=rl(e),n=rl(r);i=!r||!l,s=!n&&l,d=!i}else n?[,d]=t:s=!0===t;if(l&&d){let e=n?t[0]:tT(a);D(a,e?o.n?-3333333:o.i?0:3333333:3333333),F(a,3333333)}i||e({gt:!n,Yt:n?t:void 0,Vt:!!s})},p=[],h=!!n&&f;return[()=>{A(p),tt(a)},()=>{if(tp){let t=new tp(f);t.observe(d),k(p,()=>{t.disconnect()})}else if(i){let[t,e]=i.O(d,f,n);h=t,k(p,e)}if(l){let[t]=s({o:void 0},u);k(p,tW(a,"scroll",e=>{let[r,l,n]=t();l&&(tm(d,"ltr rtl"),r?tx(d,"rtl"):tx(d,"ltr"),f([!!r,l,n])),tK(e)}))}h&&(tx(a,eu),k(p,tW(a,"animationstart",h,{C:!!tp}))),(tp||i)&&G(t,a)}]},ri=t=>0===t.h||t.isIntersecting||t.intersectionRatio>0,ro=(t,e)=>{let r,l=te("os-trinsic-observer"),n=[],[i]=s({o:!1}),o=(t,r)=>{if(t){let l=i(ri(t)),[,n]=l;if(n)return r||e(l),[l]}},a=(t,e)=>{if(t&&t.length>0)return o(t.pop(),e)};return[()=>{A(n),tt(l)},()=>{if(tf)(r=new tf(t=>a(t),{root:t})).observe(l),k(n,()=>{r.disconnect()});else{let t=()=>{o(tX(l))},[e,r]=rn(l,t);k(n,e),r(),t()}G(t,l)},()=>{if(r)return a(r.takeRecords(),!0)}]},ra=`[${t5}]`,rs=`[${en}]`,rd=["tabindex"],ru=["wrap","cols","rows"],rc=["id","class","style","open"],rf=(t,e,r)=>{let l,i,o,{Z:a,J:d,tt:u,rt:c,ut:f,ft:p,_t:h}=t,{V:b}=eB(),[g]=s({u:tS,o:{w:0,h:0}},()=>{let t=p(ee,ee),e=p(ei,""),r=e&&D(d),l=e&&F(d);h(ee,ee),h(ei,""),h("",el,!0);let n=tF(u),i=tF(d),o=tV(d);return h(ee,ee,t),h(ei,"",e),h("",el),D(d,r),F(d,l),{w:i.w+n.w+o.w,h:i.h+n.h+o.h}}),x=c?ru:rc.concat(ru),$=tz(r,{v:()=>l,g:()=>i,p(t,e){let[r]=t,[l]=e;return[M(r).concat(M(l)).reduce((t,e)=>(t[e]=r[e]||l[e],t),{})]}}),S=t=>{n(t||rd,t=>{if(C(rd,t)>-1){let e=B(a,t);w(e)?B(d,t,e):H(d,t)}})},O=(t,l)=>{let[n,i]=t,o={vt:i};return e({ht:n}),l||r(o),o},E=({gt:t,Yt:l,Vt:n})=>{let i=!t||n?r:$,o=!1;if(l){let[t,r]=l;o=r,e({bt:t})}i({gt:t,yt:o})},L=(t,e)=>{let[,l]=g(),n={wt:l};return l&&!e&&(t?r:$)(n),n},z=(t,e,r)=>{let l={Ot:e};return e?r||$(l):f||S(t),l},[A,I,P]=u||!b?ro(a,O):[tk,tk,tk],[T,N]=f?[tk,tk]:rn(a,E,{Vt:!0,Bt:!0}),[X,V]=rr(a,!1,z,{Pt:rc,Ht:rc.concat(rd)}),j=f&&tp&&new tp(E.bind(0,{gt:!0}));return j&&j.observe(a),S(),[()=>{A(),T(),o&&o[0](),j&&j.disconnect(),X()},()=>{N(),I()},()=>{let t={},e=V(),r=P(),l=o&&o[1]();return e&&R(t,z.apply(0,k(e,!0))),r&&R(t,O.apply(0,k(r,!0))),l&&R(t,L.apply(0,k(l,!0))),t},t=>{let[e]=t("update.ignoreMutation"),[r,n]=t("update.attributes"),[a,s]=t("update.elementEvents"),[c,p]=t("update.debounce"),h=t=>y(e)&&e(t);if((s||n)&&(o&&(o[1](),o[0]()),o=rr(u||d,!0,L,{Ht:x.concat(r||[]),Dt:a,Mt:ra,kt:(t,e)=>{let{target:r,attributeName:l}=t;return!e&&!!l&&!f&&Y(r,ra,rs)||!!K(r,`.${ef}`)||!!h(t)}})),p){if($.m(),m(c)){let t=c[0],e=c[1];l=v(t)&&t,i=v(e)&&e}else l=!!v(c)&&c,i=!1}}]},rp={x:0,y:0},rh=t=>({K:{t:0,r:0,b:0,l:0},St:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:rp,Tt:rp,Ct:{x:"hidden",y:"hidden"},Et:{x:!1,y:!1},ht:!1,bt:tT(t.Z)}),rb=(t,e)=>{let r=eJ(e,{}),[l,n,i]=tQ(),[o,a,s]=eG(t),d=eW(rh(o)),[u,c]=d,f=rt(o,d),p=(t,e,r)=>{let l=M(t).some(e=>t[e])||!P(e)||r;return l&&i("u",[t,e,r]),l},[h,b,v,w]=rf(o,c,t=>p(f(r,t),{},!1)),g=u.bind(0);return g.jt=t=>l("u",t),g.Nt=()=>{let{W:t,J:e}=o,r=D(t),l=F(t);b(),a(),D(e,r),F(e,l)},g.qt=o,[(t,r)=>{let l=eJ(e,t,r);return w(l),p(f(l,v(),r),t,!!r)},g,()=>{n(),h(),s()}]},{round:rv}=Math,rw=t=>{let{width:e,height:r}=tj(t),{w:l,h:n}=tX(t);return{x:rv(e)/l||1,y:rv(r)/n||1}},rg=(t,e,r)=>{let l=e.scrollbars,{button:n,isPrimary:i,pointerType:o}=t,{pointers:a}=l;return 0===n&&i&&l[r?"dragScroll":"clickScroll"]&&(a||[]).includes(o)},ry=(t,e)=>tW(t,"mousedown",tW.bind(0,e,"click",tK,{C:!0,$:!0}),{$:!0}),rm="pointerup pointerleave pointercancel lostpointercapture",rx=(t,e,r,l,n,i,o)=>{let{B:a}=eB(),{Ft:s,Gt:d,Xt:u}=l,c=`scroll${o?"Left":"Top"}`,f=`client${o?"X":"Y"}`,p=o?"width":"height",h=o?"left":"top",b=o?"w":"h",v=o?"x":"y",w=(t,e)=>r=>{let{Tt:l}=i(),f=e*r/(tX(d)[b]-tX(s)[b])*l[v],p=tT(u)&&o?a.n||a.i?1:-1:1;n[c]=t+f*p};return tW(d,"pointerdown",l=>{let i=K(l.target,`.${ew}`)===s,o=i?s:d;if(N(e,t5,er,!0),rg(l,t,i)){let t=!i&&l.shiftKey,a=()=>tj(s),u=()=>tj(d),b=(t,e)=>(t||a())[h]-(e||u())[h],g=w(n[c]||0,1/rw(n)[v]),y=l[f],m=a(),x=u(),$=m[p],S=b(m,x)+$/2,O=y-x[h],E=i?0:O-S,C=t=>{A(L),o.releasePointerCapture(t.pointerId)},L=[N.bind(0,e,t5,er),tW(r,rm,C),tW(r,"selectstart",t=>tY(t),{S:!1}),tW(d,rm,C),tW(d,"pointermove",e=>{let r=e[f]-y;(i||t)&&g(E+r)})];if(t)g(E);else if(!i){let t=eL().__osClickScrollPlugin;t&&k(L,t.O(g,b,E,$,O))}o.setPointerCapture(l.pointerId)}})},r$=(t,e)=>(r,l,n,i,o,a)=>{let{Xt:s}=r,[d,u]=tL(333),c=!!o.scrollBy,f=!0;return A.bind(0,[tW(s,"pointerenter",()=>{l(ex,!0)}),tW(s,"pointerleave pointercancel",()=>{l(ex)}),tW(s,"wheel",t=>{let{deltaX:e,deltaY:r,deltaMode:n}=t;c&&f&&0===n&&W(s)===i&&o.scrollBy({left:e,top:r,behavior:"smooth"}),f=!1,l(eO,!0),d(()=>{f=!0,l(eO)}),tY(t)},{S:!1,$:!0}),ry(s,n),rx(t,i,n,r,o,e,a),u])},{min:rS,max:rO,abs:rE,round:rC}=Math,rk=(t,e,r,l)=>{if(l){let t=r?"x":"y",{Tt:e,zt:n}=l,i=n[t];return rO(0,rS(1,i/(i+e[t])))}let n=r?"w":"h";return rO(0,rS(1,tX(t)[n]/tX(e)[n]))},rL=(t,e,r,l,n,i)=>{let{B:o}=eB(),a=i?"x":"y",s=i?"Left":"Top",{Tt:d}=l,u=rC(d[a]),c=rE(r[`scroll${s}`]),f=i&&n,p=o.i?c:u-c,h=rS(1,(f?p:c)/u),b=rk(t,e,i);return 1/b*(1-b)*h},rz=(t,e,r)=>{let{N:l,L:o}=eB(),{scrollbars:a}=l(),{slot:s}=a,{ct:d,W:u,Z:c,J:f,lt:p,ot:h,it:b,ut:v}=e,{scrollbars:w}=p?{}:t,{slot:y}=w||{},m=eX([u,c,f],()=>v&&b?u:c,s,y),x=(t,e,r)=>{let l=r?tx:tm;n(t,t=>{l(t.Xt,e)})},$=(t,e)=>{n(t,t=>{let[r,l]=e(t);i(r,l)})},S=(t,e,r)=>{$(t,t=>{let{Ft:l,Gt:n}=t;return[l,{[r?"width":"height"]:`${(100*rk(l,n,r,e)).toFixed(3)}%`}]})},O=(t,e,r)=>{let l=r?"X":"Y";$(t,t=>{let{Ft:n,Gt:i,Xt:o}=t,a=rL(n,i,h,e,tT(o),r);return[n,{transform:a==a?`translate${l}(${(100*a).toFixed(3)}%)`:""}]})},E=[],C=[],L=[],I=(t,e,r)=>{let l=g(r),n=!l||r,i=!l||!r;n&&x(C,t,e),i&&x(L,t,e)},M=t=>{let e=t?eh:eb,l=t?C:L,n=te(`${ef} ${e} ${z(l)?em:""}`),i=te(ev),a=te(ew),s={Xt:n,Gt:i,Ft:a};return o||tx(n,"os-no-css-vars"),G(n,i),G(i,a),k(l,s),k(E,[tt.bind(0,n),r(s,I,d,c,h,t)]),s},R=M.bind(0,!0),P=M.bind(0,!1);return R(),P(),[{Ut:t=>{S(C,t,!0),S(L,t)},Wt:t=>{O(C,t,!0),O(L,t)},Zt:I,Jt:{Kt:C,Qt:R,tn:$.bind(0,C)},nn:{Kt:L,Qt:P,tn:$.bind(0,L)}},()=>{G(m,C[0].Xt),G(m,L[0].Xt),tv(()=>{I(em)},300)},A.bind(0,E)]},rA=(t,e,r,l)=>{let n,i,o,a,s,d=0,[u]=eW({}),[c,f]=tL(),[p,h]=tL(),[b,v]=tL(100),[w,g]=tL(100),[y,m]=tL(()=>d),[x,$,S]=rz(t,r.qt,r$(e,r)),{Z:O,J:E,ot:C,st:k,ut:L,it:z}=r.qt,{Jt:I,nn:M,Zt:R,Ut:P,Wt:T}=x,{tn:B}=I,{tn:H}=M,N=t=>{let{Xt:e}=t,r=L&&!z&&W(e)===E&&e;return[r,{transform:r?`translate(${D(C)}px, ${F(C)}px)`:""}]},X=(t,e)=>{if(m(),t)R(eS);else{let t=()=>R(eS,!0);d>0&&!e?y(t):t()}},V=()=>{(a=i)&&X(!0)},j=[v,m,g,h,f,S,tW(O,"pointerover",V,{C:!0}),tW(O,"pointerenter",V),tW(O,"pointerleave",()=>{a=!1,i&&X(!1)}),tW(O,"pointermove",()=>{n&&c(()=>{v(),X(!0),w(()=>{n&&X(!1)})})}),tW(k,"scroll",t=>{p(()=>{T(r()),o&&X(!0),b(()=>{o&&!a&&X(!1)})}),l(t),L&&B(N),L&&H(N)})],_=u.bind(0);return _.qt=x,_.Nt=$,[(t,l,a)=>{let{At:u,Lt:c,It:f,yt:p}=a,{A:h}=eB(),b=eJ(e,t,l),v=r(),{Tt:w,Ct:g,bt:y}=v,[m,x]=b("showNativeOverlaidScrollbars"),[$,S]=b("scrollbars.theme"),[O,E]=b("scrollbars.visibility"),[C,k]=b("scrollbars.autoHide"),[L]=b("scrollbars.autoHideDelay"),[A,I]=b("scrollbars.dragScroll"),[M,B]=b("scrollbars.clickScroll"),H=m&&h.x&&h.y,N=(t,e)=>{let r="visible"===O||"auto"===O&&"scroll"===t;return R(eg,r,e),r};if(d=L,x&&R("os-theme-none",H),S&&(R(s),R($,!0),s=$),k&&(n="move"===C,i="leave"===C,X(!(o="never"!==C),!0)),I&&R(eC,A),B&&R(eE,M),f||E){let t=N(g.x,!0),e=N(g.y,!1);R(ey,!(t&&e))}(u||c||p)&&(P(v),T(v),R(e$,!w.x,!0),R(e$,!w.y,!1),R(ep,y&&!z))},_,A.bind(0,j)]},rI=(t,e,r)=>{y(t)&&t(e||void 0,r||void 0)},rM=(t,e,r)=>{let{F:l,N:i,Y:o,j:a}=eB(),s=eL(),d=O(t),u=d?t:t.target,c=e_(u);if(e&&!c){let c=!1,f=t=>{let e=eL().__osOptionsValidationPlugin,r=e&&e.O;return r?r(t,!0):t},p=R({},l(),f(e)),[h,b,v]=tQ(r),[w,g,y]=rb(t,p),[m,x,$]=rA(t,p,g,t=>v("scroll",[L,t])),S=(t,e)=>w(t,!!e),O=S.bind(0,{},!0),E=o(O),C=a(O),k=t=>{ej(u),E(),C(),$(),y(),c=!0,v("destroyed",[L,!!t]),b()},L={options(t,e){if(t){let r=t3(p,R(e?l():{},f(t)));P(r)||(R(p,r),S(r))}return R({},p)},on:h,off:(t,e)=>{t&&e&&b(t,e)},state(){let{zt:t,Tt:e,Ct:r,Et:l,K:n,St:i,bt:o}=g();return R({},{overflowEdge:t,overflowAmount:e,overflowStyle:r,hasOverflow:l,padding:n,paddingAbsolute:i,directionRTL:o,destroyed:c})},elements(){let{W:t,Z:e,K:r,J:l,tt:n,ot:i,st:o}=g.qt,{Jt:a,nn:s}=x.qt,d=t=>{let{Ft:e,Gt:r,Xt:l}=t;return{scrollbar:l,track:r,handle:e}},u=t=>{let{Kt:e,Qt:r}=t;return R({},d(e[0]),{clone:()=>{let t=d(r());return m({},!0,{}),t}})};return R({},{target:t,host:e,padding:r||l,viewport:l,content:n||l,scrollOffsetElement:i,scrollEventElement:o,scrollbarHorizontal:u(a),scrollbarVertical:u(s)})},update:t=>S({},t),destroy:k.bind(0)};return g.jt((t,e,r)=>{m(e,r,t)}),eV(u,L),n(M(s),t=>rI(s[t],0,L)),eD(g.qt.it,i().cancel,!d&&t.cancel)?k(!0):(g.Nt(),x.Nt(),v("initialized",[L]),g.jt((t,e,r)=>{let{gt:l,yt:n,vt:i,At:o,Lt:a,It:s,wt:d,Ot:u}=t;v("updated",[L,{updateHints:{sizeChanged:l,directionChanged:n,heightIntrinsicChanged:i,overflowEdgeChanged:o,overflowAmountChanged:a,overflowStyleChanged:s,contentMutation:d,hostMutation:u},changedOptions:e,force:r}])}),L.update(!0)),L}return c};rM.plugin=t=>{n(ez(t),t=>rI(t,rM))},rM.valid=t=>{let e=t&&t.elements,r=y(e)&&e();return S(r)&&!!e_(r.target)},rM.env=()=>{let{k:t,A:e,I:r,B:l,V:n,L:i,X:o,U:a,N:s,q:d,F:u,G:c}=eB();return R({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:r,rtlScrollBehavior:l,flexboxGlue:n,cssCustomProperties:i,staticDefaultInitialization:o,staticDefaultOptions:a,getDefaultInitialization:s,setDefaultInitialization:d,getDefaultOptions:u,setDefaultOptions:c})};var rR=()=>{if(typeof window>"u"){let t=()=>{};return[t,t]}let t,e,r=window,l="function"==typeof r.requestIdleCallback,n=r.requestAnimationFrame,i=r.cancelAnimationFrame,o=l?r.requestIdleCallback:n,a=l?r.cancelIdleCallback:i,s=()=>{a(t),i(e)};return[(r,i)=>{s(),t=o(l?()=>{s(),e=n(r)}:r,"object"==typeof i?i:{timeout:2233})},s]},rP=t=>{let{options:e,events:r,defer:n}=t||{},[i,o]=(0,l.useMemo)(rR,[]),a=(0,l.useRef)(null),s=(0,l.useRef)(n),d=(0,l.useRef)(e),u=(0,l.useRef)(r);return(0,l.useEffect)(()=>{s.current=n},[n]),(0,l.useEffect)(()=>{let{current:t}=a;d.current=e,rM.valid(t)&&t.options(e||{},!0)},[e]),(0,l.useEffect)(()=>{let{current:t}=a;u.current=r,rM.valid(t)&&t.on(r||{},!0)},[r]),(0,l.useEffect)(()=>()=>{var t;o(),null==(t=a.current)||t.destroy()},[]),(0,l.useMemo)(()=>[t=>{let e=a.current;if(rM.valid(e))return;let r=s.current,l=d.current||{},n=u.current||{},o=()=>a.current=rM(t,l,n);r?i(o,r):o()},()=>a.current],[])},rT=(0,l.forwardRef)((t,e)=>{let{element:r="div",options:n,events:i,defer:o,children:a,...s}=t,d=(0,l.useRef)(null),u=(0,l.useRef)(null),[c,f]=rP({options:n,events:i,defer:o});return(0,l.useEffect)(()=>{let{current:t}=d,{current:e}=u;return t&&e&&c({target:t,elements:{viewport:e,content:e}}),()=>{var t;return null==(t=f())?void 0:t.destroy()}},[c,r]),(0,l.useImperativeHandle)(e,()=>({osInstance:f,getElement:()=>d.current}),[]),l.createElement(r,{"data-overlayscrollbars-initialize":"",ref:d,...s},l.createElement("div",{ref:u},a))}),rB=rT,rH=rT}}]);