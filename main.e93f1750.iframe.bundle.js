(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[179],{"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(s,e,o)=>{var t={"./Welcome.mdx":["./stories/Welcome.mdx",635,815,340]};function r(s){if(!o.o(t,s))return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e});var e=t[s],r=e[0];return Promise.all(e.slice(1).map(o.e)).then(()=>o(r))}r.keys=()=>Object.keys(t),r.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",s.exports=r},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(s,e,o)=>{var t={"./clock/Analog.stories":["./stories/clock/Analog.stories.tsx",635,75],"./clock/Analog.stories.tsx":["./stories/clock/Analog.stories.tsx",635,75],"./clock/Digital.stories":["./stories/clock/Digital.stories.tsx",635,825],"./clock/Digital.stories.tsx":["./stories/clock/Digital.stories.tsx",635,825],"./clock/Example.stories":["./stories/clock/Example.stories.tsx",635,163],"./clock/Example.stories.tsx":["./stories/clock/Example.stories.tsx",635,163],"./dekamoji/Example.stories":["./stories/dekamoji/Example.stories.tsx",191],"./dekamoji/Example.stories.tsx":["./stories/dekamoji/Example.stories.tsx",191],"./example.stories":["./stories/example.stories.tsx",537],"./example.stories.tsx":["./stories/example.stories.tsx",537],"./stopwatch/Example.stories":["./stories/stopwatch/Example.stories.tsx",635,740,777],"./stopwatch/Example.stories.tsx":["./stories/stopwatch/Example.stories.tsx",635,740,777],"./stopwatch/Minimal.stories":["./stories/stopwatch/Minimal.stories.tsx",106],"./stopwatch/Minimal.stories.tsx":["./stories/stopwatch/Minimal.stories.tsx",106],"./style-bulma/Clock.stories":["./stories/style-bulma/Clock.stories.tsx",635,41,32,722],"./style-bulma/Clock.stories.tsx":["./stories/style-bulma/Clock.stories.tsx",635,41,32,722],"./style-bulma/Stopwatch.stories":["./stories/style-bulma/Stopwatch.stories.tsx",635,41,32,562],"./style-bulma/Stopwatch.stories.tsx":["./stories/style-bulma/Stopwatch.stories.tsx",635,41,32,562],"./style-bulma/Timer.stories":["./stories/style-bulma/Timer.stories.tsx",635,41,32,239],"./style-bulma/Timer.stories.tsx":["./stories/style-bulma/Timer.stories.tsx",635,41,32,239],"./timer/Example.stories":["./stories/timer/Example.stories.tsx",635,740,120],"./timer/Example.stories.tsx":["./stories/timer/Example.stories.tsx",635,740,120],"./timer/Minimal.stories":["./stories/timer/Minimal.stories.tsx",438],"./timer/Minimal.stories.tsx":["./stories/timer/Minimal.stories.tsx",438]};function r(s){if(!o.o(t,s))return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e});var e=t[s],r=e[0];return Promise.all(e.slice(1).map(o.e)).then(()=>o(r))}r.keys=()=>Object.keys(t),r.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",s.exports=r},"./storybook-config-entry.js":(s,e,o)=>{"use strict";var t=o("../../node_modules/@storybook/global/dist/index.mjs"),r=o("@storybook/preview-api"),i=o("@storybook/channels");let l=s=>s(),a=[async s=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(s))return;let e=s.substring(10);return o("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+e)},async s=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(s))return;let e=s.substring(10);return o("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+e)}];async function n(s){for(let e=0;e<a.length;e++){let o=await l(()=>a[e](s));if(o)return o}}let d=()=>(0,r.composeConfigs)([o("../../node_modules/@storybook/react/preview.js"),o("../../node_modules/@storybook/addon-links/dist/preview.mjs"),o("../../node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),o("../../node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),o("../../node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),o("../../node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),o("../../node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),o("../../node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),o("../../node_modules/@storybook/addon-interactions/dist/preview.mjs"),o("./.storybook/preview.js")]),c=(0,i.createBrowserChannel)({page:"preview"});r.addons.setChannel(c),"DEVELOPMENT"===t.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=c);let m=new r.PreviewWeb;window.__STORYBOOK_PREVIEW__=m,window.__STORYBOOK_STORY_STORE__=m.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=c,window.__STORYBOOK_CLIENT_API__=new r.ClientApi({storyStore:m.storyStore}),m.initialize({importFn:n,getProjectAnnotations:d})},"../../node_modules/@storybook/addon-interactions/node_modules/jest-util/build lazy recursive":s=>{function e(s){return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e})}e.keys=()=>[],e.resolve=e,e.id="../../node_modules/@storybook/addon-interactions/node_modules/jest-util/build lazy recursive",s.exports=e},"../../node_modules/@storybook/addon-interactions/node_modules/jest-util/build sync recursive":s=>{function e(s){var e=Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id="../../node_modules/@storybook/addon-interactions/node_modules/jest-util/build sync recursive",s.exports=e},"./.storybook/preview.js":(s,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var t={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}};let r=t},"@storybook/channels":s=>{"use strict";s.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":s=>{"use strict";s.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":s=>{"use strict";s.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":s=>{"use strict";s.exports=__STORYBOOK_MODULE_PREVIEW_API__},"?6bdc":()=>{},"?1e1f":()=>{},"?c95a":()=>{}},s=>{var e=e=>s(s.s=e);s.O(0,[417],()=>e("./storybook-config-entry.js"));var o=s.O()}]);