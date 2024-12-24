"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[321],{51202:(e,t,r)=>{r.d(t,{Container:()=>p});var n=r(95155);r(12115);var o=r(14370),a=r(19108),i=r(31634),c=r(2094),l=r(71419),s=r(3558),d={root:"m_7485cace"};let f={},u=(0,a.createVarsResolver)((e,t)=>{let{size:r,fluid:n}=t;return{root:{"--container-size":n?void 0:(0,o.getSize)(r,"container-size")}}}),p=(0,s.factory)((e,t)=>{let r=(0,i.useProps)("Container",f,e),{classNames:o,className:a,style:s,styles:p,unstyled:m,vars:h,fluid:y,mod:v,...g}=r,b=(0,c.useStyles)({name:"Container",classes:d,props:r,className:a,style:s,classNames:o,styles:p,unstyled:m,vars:h,varsResolver:u});return(0,n.jsx)(l.Box,{ref:t,mod:[{fluid:y},v],...b("root"),...g})});p.classes=d,p.displayName="@mantine/core/Container"},1288:(e,t,r)=>{r.d(t,{Stack:()=>p});var n=r(95155);r(12115);var o=r(14370),a=r(19108),i=r(31634),c=r(2094),l=r(71419),s=r(3558),d={root:"m_6d731127"};let f={gap:"md",align:"stretch",justify:"flex-start"},u=(0,a.createVarsResolver)((e,t)=>{let{gap:r,align:n,justify:a}=t;return{root:{"--stack-gap":(0,o.getSpacing)(r),"--stack-align":n,"--stack-justify":a}}}),p=(0,s.factory)((e,t)=>{let r=(0,i.useProps)("Stack",f,e),{classNames:o,className:a,style:s,styles:p,unstyled:m,vars:h,align:y,justify:v,gap:g,variant:b,...S}=r,D=(0,c.useStyles)({name:"Stack",props:r,classes:d,className:a,style:s,classNames:o,styles:p,unstyled:m,vars:h,varsResolver:u});return(0,n.jsx)(l.Box,{ref:t,...D("root"),variant:b,...S})});p.classes=d,p.displayName="@mantine/core/Stack"},84059:(e,t,r)=>{r.d(t,{Title:()=>h});var n=r(95155);r(12115);var o=r(19108),a=r(31634),i=r(2094),c=r(71419),l=r(3558),s=r(9185);let d=["h1","h2","h3","h4","h5","h6"],f=["xs","sm","md","lg","xl"];var u={root:"m_8a5d1357"};let p={order:1},m=(0,o.createVarsResolver)((e,t)=>{let{order:r,size:n,lineClamp:o,textWrap:a}=t,i=function(e,t){let r=void 0!==t?t:"h".concat(e);return d.includes(r)?{fontSize:"var(--mantine-".concat(r,"-font-size)"),fontWeight:"var(--mantine-".concat(r,"-font-weight)"),lineHeight:"var(--mantine-".concat(r,"-line-height)")}:f.includes(r)?{fontSize:"var(--mantine-font-size-".concat(r,")"),fontWeight:"var(--mantine-h".concat(e,"-font-weight)"),lineHeight:"var(--mantine-h".concat(e,"-line-height)")}:{fontSize:(0,s.D)(r),fontWeight:"var(--mantine-h".concat(e,"-font-weight)"),lineHeight:"var(--mantine-h".concat(e,"-line-height)")}}(r,n);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":"number"==typeof o?o.toString():void 0,"--title-text-wrap":a}}}),h=(0,l.factory)((e,t)=>{let r=(0,a.useProps)("Title",p,e),{classNames:o,className:l,style:s,styles:d,unstyled:f,order:h,vars:y,size:v,variant:g,lineClamp:b,textWrap:S,mod:D,...k}=r,x=(0,i.useStyles)({name:"Title",props:r,classes:u,className:l,style:s,classNames:o,styles:d,unstyled:f,vars:y,varsResolver:m});return[1,2,3,4,5,6].includes(h)?(0,n.jsx)(c.Box,{...x("root"),component:"h".concat(h),variant:g,ref:t,mod:[{order:h,"data-line-clamp":"number"==typeof b},D],size:v,...k}):null});h.classes=u,h.displayName="@mantine/core/Title"},71419:(e,t,r)=>{r.d(t,{Box:()=>g});var n=r(95155),o=r(12115),a=r(43463),i=r(34535),c=r(52182),l=r(40890),s=r(66726),d=r(50366);function f(e){return e.startsWith("data-")?e:"data-".concat(e)}function u(e,t){return Array.isArray(e)?[...e].reduce((e,r)=>({...e,...u(r,t)}),{}):"function"==typeof e?e(t):null==e?{}:e}var p=r(24439),m=r(12327),h=r(37195),y=r(15360);let v=(0,o.forwardRef)((e,t)=>{var r;let{component:o,style:i,__vars:v,className:g,variant:b,mod:S,size:D,hiddenFrom:k,visibleFrom:x,lightHidden:C,darkHidden:w,renderRoot:$,__size:T,...N}=e,M=(0,d.useMantineTheme)(),{styleProps:z,rest:A}=(0,p.extractStyleProps)(N),P=(0,s.useMantineSxTransform)(),j=null==P?void 0:null===(r=P())||void 0===r?void 0:r(z.sx),R=(0,y.useRandomClassName)(),W=(0,h.parseStyleProps)({styleProps:z,theme:M,data:m.STYlE_PROPS_DATA}),I={ref:t,style:function(e){let{theme:t,style:r,vars:n,styleProps:o}=e,a=u(r,t),i=u(n,t);return{...a,...i,...o}}({theme:M,style:i,vars:v,styleProps:W.inlineStyles}),className:(0,a.A)(g,j,{[R]:W.hasResponsiveStyles,"mantine-light-hidden":C,"mantine-dark-hidden":w,["mantine-hidden-from-".concat(k)]:k,["mantine-visible-from-".concat(x)]:x}),"data-variant":b,"data-size":(0,l.isNumberLike)(D)?void 0:D||void 0,size:T,...function e(t){return t?"string"==typeof t?{[f(t)]:!0}:Array.isArray(t)?[...t].reduce((t,r)=>({...t,...e(r)}),{}):Object.keys(t).reduce((e,r)=>{let n=t[r];return void 0===n||""===n||!1===n||null===n||(e[f(r)]=t[r]),e},{}):null}(S),...A};return(0,n.jsxs)(n.Fragment,{children:[W.hasResponsiveStyles&&(0,n.jsx)(c.InlineStyles,{selector:".".concat(R),styles:W.styles,media:W.media}),"function"==typeof $?$(I):(0,n.jsx)(o||"div",{...I})]})});v.displayName="@mantine/core/Box";let g=(0,i.K)(v)},24439:(e,t,r)=>{r.d(t,{extractStyleProps:()=>o});var n=r(6172);function o(e){let{m:t,mx:r,my:o,mt:a,mb:i,ml:c,mr:l,me:s,ms:d,p:f,px:u,py:p,pt:m,pb:h,pl:y,pr:v,pe:g,ps:b,bd:S,bg:D,c:k,opacity:x,ff:C,fz:w,fw:$,lts:T,ta:N,lh:M,fs:z,tt:A,td:P,w:j,miw:R,maw:W,h:I,mih:F,mah:E,bgsz:H,bgp:L,bgr:B,bga:_,pos:O,top:K,left:q,bottom:V,right:G,inset:U,display:Y,flex:X,hiddenFrom:Z,visibleFrom:J,lightHidden:Q,darkHidden:ee,sx:et,...er}=e;return{styleProps:(0,n.filterProps)({m:t,mx:r,my:o,mt:a,mb:i,ml:c,mr:l,me:s,ms:d,p:f,px:u,py:p,pt:m,pb:h,pl:y,pr:v,pe:g,ps:b,bd:S,bg:D,c:k,opacity:x,ff:C,fz:w,fw:$,lts:T,ta:N,lh:M,fs:z,tt:A,td:P,w:j,miw:R,maw:W,h:I,mih:F,mah:E,bgsz:H,bgp:L,bgr:B,bga:_,pos:O,top:K,left:q,bottom:V,right:G,inset:U,display:Y,flex:X,hiddenFrom:Z,visibleFrom:J,lightHidden:Q,darkHidden:ee,sx:et}),rest:er}}r(12115),r(95155)},37195:(e,t,r)=>{r.d(t,{parseStyleProps:()=>u});var n=r(54966);r(12115),r(95155);var o=r(9185),a=r(30406);function i(e,t){let r=(0,a.parseThemeColor)({color:e,theme:t});return"dimmed"===r.color?"var(--mantine-color-dimmed)":"bright"===r.color?"var(--mantine-color-bright)":r.variable?"var(".concat(r.variable,")"):r.color}let c={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"},l=["h1","h2","h3","h4","h5","h6"],s=["h1","h2","h3","h4","h5","h6"],d={color:i,textColor:function(e,t){let r=(0,a.parseThemeColor)({color:e,theme:t});return r.isThemeColor&&void 0===r.shade?"var(--mantine-color-".concat(r.color,"-text)"):i(e,t)},fontSize:function(e,t){return"string"==typeof e&&e in t.fontSizes?"var(--mantine-font-size-".concat(e,")"):"string"==typeof e&&l.includes(e)?"var(--mantine-".concat(e,"-font-size)"):"number"==typeof e||"string"==typeof e?(0,o.D)(e):e},spacing:function(e,t){if("number"==typeof e)return(0,o.D)(e);if("string"==typeof e){let r=e.replace("-","");if(!(r in t.spacing))return(0,o.D)(e);let n="--mantine-spacing-".concat(r);return e.startsWith("-")?"calc(var(".concat(n,") * -1)"):"var(".concat(n,")")}return e},identity:function(e){return e},size:function(e){return"number"==typeof e?(0,o.D)(e):e},lineHeight:function(e,t){return"string"==typeof e&&e in t.lineHeights?"var(--mantine-line-height-".concat(e,")"):"string"==typeof e&&s.includes(e)?"var(--mantine-".concat(e,"-line-height)"):e},fontFamily:function(e){return"string"==typeof e&&e in c?c[e]:e},border:function(e,t){if("number"==typeof e)return(0,o.D)(e);if("string"==typeof e){let[r,n,...a]=e.split(" ").filter(e=>""!==e.trim()),c="".concat((0,o.D)(r));return n&&(c+=" ".concat(n)),a.length>0&&(c+=" ".concat(i(a.join(" "),t))),c.trim()}return e}};function f(e){return e.replace("(min-width: ","").replace("em)","")}function u(e){let{styleProps:t,data:r,theme:o}=e;return function(e){let{media:t,...r}=e,n=Object.keys(t).sort((e,t)=>Number(f(e))-Number(f(t))).map(e=>({query:e,styles:t[e]}));return{...r,media:n}}((0,n.keys)(t).reduce((e,a)=>{var i,c;if("hiddenFrom"===a||"visibleFrom"===a||"sx"===a)return e;let l=r[a],s=Array.isArray(l.property)?l.property:[l.property],f="object"==typeof(c=t[a])&&null!==c?"base"in c?c.base:void 0:c;if(!function(e){if("object"!=typeof e||null===e)return!1;let t=Object.keys(e);return 1!==t.length||"base"!==t[0]}(t[a]))return s.forEach(t=>{e.inlineStyles[t]=d[l.type](f,o)}),e;e.hasResponsiveStyles=!0;let u="object"==typeof(i=t[a])&&null!==i?(0,n.keys)(i).filter(e=>"base"!==e):[];return s.forEach(r=>{f&&(e.styles[r]=d[l.type](f,o)),u.forEach(n=>{var i;let c="(min-width: ".concat(o.breakpoints[n],")");e.media[c]={...e.media[c],[r]:d[l.type]("object"==typeof(i=t[a])&&null!==i&&n in i?i[n]:i,o)}})}),e},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}},12327:(e,t,r)=>{r.d(t,{STYlE_PROPS_DATA:()=>n});let n={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bd:{type:"border",property:"border"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"size",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}}},15360:(e,t,r)=>{r.d(t,{useRandomClassName:()=>o});var n=r(12115);function o(){let e=(0,n.useId)().replace(/:/g,"");return"__m__-".concat(e)}},52182:(e,t,r)=>{r.d(t,{InlineStyles:()=>i});var n=r(95155);r(12115);var o=r(66726),a=r(2446);function i(e){let t=(0,o.useMantineStyleNonce)();return(0,n.jsx)("style",{"data-mantine-styles":"inline",nonce:null==t?void 0:t(),dangerouslySetInnerHTML:{__html:(0,a.stylesToString)(e)}})}},2446:(e,t,r)=>{r.d(t,{stylesToString:()=>i});var n=r(54966),o=r(24660);function a(e){return(0,n.keys)(e).reduce((t,r)=>void 0!==e[r]?"".concat(t).concat((0,o.camelToKebabCase)(r),":").concat(e[r],";"):t,"").trim()}function i(e){let{selector:t,styles:r,media:n,container:o}=e,i=r?a(r):"",c=Array.isArray(n)?n.map(e=>"@media".concat(e.query,"{").concat(t,"{").concat(a(e.styles),"}}")):[],l=Array.isArray(o)?o.map(e=>"@container ".concat(e.query,"{").concat(t,"{").concat(a(e.styles),"}}")):[];return"".concat(i?"".concat(t,"{").concat(i,"}"):"").concat(c.join("")).concat(l.join("")).trim()}r(12115),r(95155)},66726:(e,t,r)=>{r.d(t,{MantineContext:()=>o,useMantineClassNamesPrefix:()=>c,useMantineContext:()=>a,useMantineCssVariablesResolver:()=>i,useMantineIsHeadless:()=>d,useMantineStyleNonce:()=>l,useMantineStylesTransform:()=>u,useMantineSxTransform:()=>f,useMantineWithStaticClasses:()=>s});var n=r(12115);let o=(0,n.createContext)(null);function a(){let e=(0,n.useContext)(o);if(!e)throw Error("[@mantine/core] MantineProvider was not found in tree");return e}function i(){return a().cssVariablesResolver}function c(){return a().classNamesPrefix}function l(){return a().getStyleNonce}function s(){return a().withStaticClasses}function d(){return a().headless}function f(){var e;return null===(e=a().stylesTransform)||void 0===e?void 0:e.sx}function u(){var e;return null===(e=a().stylesTransform)||void 0===e?void 0:e.styles}},50366:(e,t,r)=>{r.d(t,{MantineThemeContext:()=>s,MantineThemeProvider:()=>u,useMantineTheme:()=>f,useSafeMantineTheme:()=>d});var n=r(95155),o=r(12115),a=r(71334),i=r(36988);function c(e){return!(e<0)&&!(e>9)&&parseInt(e.toString(),10)===e}function l(e){if(!(e.primaryColor in e.colors))throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color");if("object"==typeof e.primaryShade&&(!c(e.primaryShade.dark)||!c(e.primaryShade.light))||"number"==typeof e.primaryShade&&!c(e.primaryShade))throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }")}let s=(0,o.createContext)(null),d=()=>(0,o.useContext)(s)||a.S;function f(){let e=(0,o.useContext)(s);if(!e)throw Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");return e}function u(e){let{theme:t,children:r,inherit:c=!0}=e,f=d(),u=(0,o.useMemo)(()=>(function(e,t){if(!t)return l(e),e;let r=(0,i.$)(e,t);return t.fontFamily&&!t.headings?.fontFamily&&(r.headings.fontFamily=t.fontFamily),l(r),r})(c?f:a.S,t),[t,f,c]);return(0,n.jsx)(s.Provider,{value:u,children:r})}u.displayName="@mantine/core/MantineThemeProvider"},75213:(e,t,r)=>{r.r(t),r.d(t,{defaultVariantColorsResolver:()=>s});var n=r(9185);r(12115),r(95155);var o=r(39350);function a(e,t){if(e.startsWith("var("))return`color-mix(in srgb, ${e}, black ${100*t}%)`;let{r,g:n,b:a,a:i}=(0,o.K)(e),c=1-t,l=e=>Math.round(e*c);return`rgba(${l(r)}, ${l(n)}, ${l(a)}, ${i})`}var i=r(50174),c=r(30406),l=r(3e4);let s=e=>{let{color:t,theme:r,variant:o,gradient:s,autoContrast:d}=e,f=(0,c.parseThemeColor)({color:t,theme:r}),u="boolean"==typeof d?d:r.autoContrast;if("filled"===o){let e=u&&f.isLight?"var(--mantine-color-black)":"var(--mantine-color-white)";return f.isThemeColor?void 0===f.shade?{background:"var(--mantine-color-".concat(t,"-filled)"),hover:"var(--mantine-color-".concat(t,"-filled-hover)"),color:e,border:"".concat((0,n.D)(1)," solid transparent")}:{background:"var(--mantine-color-".concat(f.color,"-").concat(f.shade,")"),hover:"var(--mantine-color-".concat(f.color,"-").concat(9===f.shade?8:f.shade+1,")"),color:e,border:"".concat((0,n.D)(1)," solid transparent")}:{background:t,hover:a(t,.1),color:e,border:"".concat((0,n.D)(1)," solid transparent")}}if("light"===o){if(f.isThemeColor){if(void 0===f.shade)return{background:"var(--mantine-color-".concat(t,"-light)"),hover:"var(--mantine-color-".concat(t,"-light-hover)"),color:"var(--mantine-color-".concat(t,"-light-color)"),border:"".concat((0,n.D)(1)," solid transparent")};let e=r.colors[f.color][f.shade];return{background:(0,l.B)(e,.1),hover:(0,l.B)(e,.12),color:"var(--mantine-color-".concat(f.color,"-").concat(Math.min(f.shade,6),")"),border:"".concat((0,n.D)(1)," solid transparent")}}return{background:(0,l.B)(t,.1),hover:(0,l.B)(t,.12),color:t,border:"".concat((0,n.D)(1)," solid transparent")}}if("outline"===o)return f.isThemeColor?void 0===f.shade?{background:"transparent",hover:"var(--mantine-color-".concat(t,"-outline-hover)"),color:"var(--mantine-color-".concat(t,"-outline)"),border:"".concat((0,n.D)(1)," solid var(--mantine-color-").concat(t,"-outline)")}:{background:"transparent",hover:(0,l.B)(r.colors[f.color][f.shade],.05),color:"var(--mantine-color-".concat(f.color,"-").concat(f.shade,")"),border:"".concat((0,n.D)(1)," solid var(--mantine-color-").concat(f.color,"-").concat(f.shade,")")}:{background:"transparent",hover:(0,l.B)(t,.05),color:t,border:"".concat((0,n.D)(1)," solid ").concat(t)};if("subtle"===o){if(f.isThemeColor){if(void 0===f.shade)return{background:"transparent",hover:"var(--mantine-color-".concat(t,"-light-hover)"),color:"var(--mantine-color-".concat(t,"-light-color)"),border:"".concat((0,n.D)(1)," solid transparent")};let e=r.colors[f.color][f.shade];return{background:"transparent",hover:(0,l.B)(e,.12),color:"var(--mantine-color-".concat(f.color,"-").concat(Math.min(f.shade,6),")"),border:"".concat((0,n.D)(1)," solid transparent")}}return{background:"transparent",hover:(0,l.B)(t,.12),color:t,border:"".concat((0,n.D)(1)," solid transparent")}}return"transparent"===o?f.isThemeColor?void 0===f.shade?{background:"transparent",hover:"transparent",color:"var(--mantine-color-".concat(t,"-light-color)"),border:"".concat((0,n.D)(1)," solid transparent")}:{background:"transparent",hover:"transparent",color:"var(--mantine-color-".concat(f.color,"-").concat(Math.min(f.shade,6),")"),border:"".concat((0,n.D)(1)," solid transparent")}:{background:"transparent",hover:"transparent",color:t,border:"".concat((0,n.D)(1)," solid transparent")}:"white"===o?f.isThemeColor?void 0===f.shade?{background:"var(--mantine-color-white)",hover:a(r.white,.01),color:"var(--mantine-color-".concat(t,"-filled)"),border:"".concat((0,n.D)(1)," solid transparent")}:{background:"var(--mantine-color-white)",hover:a(r.white,.01),color:"var(--mantine-color-".concat(f.color,"-").concat(f.shade,")"),border:"".concat((0,n.D)(1)," solid transparent")}:{background:"var(--mantine-color-white)",hover:a(r.white,.01),color:t,border:"".concat((0,n.D)(1)," solid transparent")}:"gradient"===o?{background:(0,i.getGradient)(s,r),hover:(0,i.getGradient)(s,r),color:"var(--mantine-color-white)",border:"none"}:"default"===o?{background:"var(--mantine-color-default)",hover:"var(--mantine-color-default-hover)",color:"var(--mantine-color-default-color)",border:"".concat((0,n.D)(1)," solid var(--mantine-color-default-border)")}:{}}},50174:(e,t,r)=>{r.d(t,{getGradient:()=>o});var n=r(29282);function o(e,t){let r={from:(null==e?void 0:e.from)||t.defaultGradient.from,to:(null==e?void 0:e.to)||t.defaultGradient.to,deg:(null==e?void 0:e.deg)||t.defaultGradient.deg||0},o=(0,n.getThemeColor)(r.from,t),a=(0,n.getThemeColor)(r.to,t);return"linear-gradient(".concat(r.deg,"deg, ").concat(o," 0%, ").concat(a," 100%)")}},82974:(e,t,r)=>{r.d(t,{getPrimaryShade:()=>n});function n(e,t){return"number"==typeof e.primaryShade?e.primaryShade:"dark"===t?e.primaryShade.dark:e.primaryShade.light}},29282:(e,t,r)=>{r.d(t,{getThemeColor:()=>o});var n=r(30406);function o(e,t){let r=(0,n.parseThemeColor)({color:e||t.primaryColor,theme:t});return r.variable?"var(".concat(r.variable,")"):e}},27102:(e,t,r)=>{r.d(t,{isLightColor:()=>i,luminance:()=>a});var n=r(39350);function o(e){return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function a(e){if(e.startsWith("oklch("))return(function(e){let t=e.match(/oklch\((.*?)%\s/);return t?parseFloat(t[1]):null}(e)||0)/100;let{r:t,g:r,b:a}=(0,n.K)(e);return .2126*o(t/255)+.7152*o(r/255)+.0722*o(a/255)}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.179;return!e.startsWith("var(")&&a(e)>t}},30406:(e,t,r)=>{r.d(t,{parseThemeColor:()=>a});var n=r(82974),o=r(27102);function a(e){let{color:t,theme:r,colorScheme:a}=e;if("string"!=typeof t)throw Error("[@mantine/core] Failed to parse color. Expected color to be a string, instead got ".concat(typeof t));if("bright"===t)return{color:t,value:"dark"===a?r.white:r.black,shade:void 0,isThemeColor:!1,isLight:(0,o.isLightColor)("dark"===a?r.white:r.black,r.luminanceThreshold),variable:"--mantine-color-bright"};if("dimmed"===t)return{color:t,value:"dark"===a?r.colors.dark[2]:r.colors.gray[7],shade:void 0,isThemeColor:!1,isLight:(0,o.isLightColor)("dark"===a?r.colors.dark[2]:r.colors.gray[6],r.luminanceThreshold),variable:"--mantine-color-dimmed"};if("white"===t||"black"===t)return{color:t,value:"white"===t?r.white:r.black,shade:void 0,isThemeColor:!1,isLight:(0,o.isLightColor)("white"===t?r.white:r.black,r.luminanceThreshold),variable:"--mantine-color-".concat(t)};let[i,c]=t.split("."),l=c?Number(c):void 0,s=i in r.colors;if(s){let e=void 0!==l?r.colors[i][l]:r.colors[i][(0,n.getPrimaryShade)(r,a||"light")];return{color:i,value:e,shade:l,isThemeColor:s,isLight:(0,o.isLightColor)(e,r.luminanceThreshold),variable:c?"--mantine-color-".concat(i,"-").concat(l):"--mantine-color-".concat(i,"-filled")}}return{color:t,value:t,isThemeColor:s,isLight:(0,o.isLightColor)(t,r.luminanceThreshold),shade:l,variable:void 0}}},3e4:(e,t,r)=>{r.d(t,{B:()=>o,X:()=>a});var n=r(39350);function o(e,t){if("string"!=typeof e||t>1||t<0)return"rgba(0, 0, 0, 1)";if(e.startsWith("var("))return`color-mix(in srgb, ${e}, transparent ${(1-t)*100}%)`;if(e.startsWith("oklch"))return e.includes("/")?e.replace(/\/\s*[\d.]+\s*\)/,`/ ${t})`):e.replace(")",` / ${t})`);let{r,g:o,b:a}=(0,n.K)(e);return`rgba(${r}, ${o}, ${a}, ${t})`}let a=o},39350:(e,t,r)=>{r.d(t,{K:()=>n});function n(e){return/^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e)?function(e){let t=e.replace("#","");if(3===t.length){let e=t.split("");t=[e[0],e[0],e[1],e[1],e[2],e[2]].join("")}if(8===t.length){let e=parseInt(t.slice(6,8),16)/255;return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16),a:e}}let r=parseInt(t,16);return{r:r>>16&255,g:r>>8&255,b:255&r,a:1}}(e):e.startsWith("rgb")?function(e){let[t,r,n,o]=e.replace(/[^0-9,./]/g,"").split(/[/,]/).map(Number);return{r:t,g:r,b:n,a:o||1}}(e):e.startsWith("hsl")?function(e){let t,r,n;let o=e.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i);if(!o)return{r:0,g:0,b:0,a:1};let a=parseInt(o[1],10),i=parseInt(o[2],10)/100,c=parseInt(o[3],10)/100,l=o[5]?parseFloat(o[5]):void 0,s=(1-Math.abs(2*c-1))*i,d=a/60,f=s*(1-Math.abs(d%2-1)),u=c-s/2;return d>=0&&d<1?(t=s,r=f,n=0):d>=1&&d<2?(t=f,r=s,n=0):d>=2&&d<3?(t=0,r=s,n=f):d>=3&&d<4?(t=0,r=f,n=s):d>=4&&d<5?(t=f,r=0,n=s):(t=s,r=0,n=f),{r:Math.round((t+u)*255),g:Math.round((r+u)*255),b:Math.round((n+u)*255),a:l||1}}(e):{r:0,g:0,b:0,a:1}}},71334:(e,t,r)=>{r.d(t,{S:()=>i});var n=r(9185);r(12115),r(95155);var o=r(75213);let a="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",i={scale:1,fontSmoothing:!0,focusRing:"auto",white:"#fff",black:"#000",colors:{dark:["#C9C9C9","#b8b8b8","#828282","#696969","#424242","#3b3b3b","#2e2e2e","#242424","#1f1f1f","#141414"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]},primaryShade:{light:6,dark:8},primaryColor:"blue",variantColorResolver:o.defaultVariantColorsResolver,autoContrast:!1,luminanceThreshold:.3,fontFamily:a,fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",respectReducedMotion:!1,cursorType:"default",defaultGradient:{from:"blue",to:"cyan",deg:45},defaultRadius:"sm",activeClassName:"mantine-active",focusClassName:"",headings:{fontFamily:a,fontWeight:"700",textWrap:"wrap",sizes:{h1:{fontSize:(0,n.D)(34),lineHeight:"1.3"},h2:{fontSize:(0,n.D)(26),lineHeight:"1.35"},h3:{fontSize:(0,n.D)(22),lineHeight:"1.4"},h4:{fontSize:(0,n.D)(18),lineHeight:"1.45"},h5:{fontSize:(0,n.D)(16),lineHeight:"1.5"},h6:{fontSize:(0,n.D)(14),lineHeight:"1.5"}}},fontSizes:{xs:(0,n.D)(12),sm:(0,n.D)(14),md:(0,n.D)(16),lg:(0,n.D)(18),xl:(0,n.D)(20)},lineHeights:{xs:"1.4",sm:"1.45",md:"1.55",lg:"1.6",xl:"1.65"},radius:{xs:(0,n.D)(2),sm:(0,n.D)(4),md:(0,n.D)(8),lg:(0,n.D)(16),xl:(0,n.D)(32)},spacing:{xs:(0,n.D)(10),sm:(0,n.D)(12),md:(0,n.D)(16),lg:(0,n.D)(20),xl:(0,n.D)(32)},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},shadows:{xs:`0 ${(0,n.D)(1)} ${(0,n.D)(3)} rgba(0, 0, 0, 0.05), 0 ${(0,n.D)(1)} ${(0,n.D)(2)} rgba(0, 0, 0, 0.1)`,sm:`0 ${(0,n.D)(1)} ${(0,n.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,n.D)(10)} ${(0,n.D)(15)} ${(0,n.D)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,n.D)(7)} ${(0,n.D)(7)} ${(0,n.D)(-5)}`,md:`0 ${(0,n.D)(1)} ${(0,n.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,n.D)(20)} ${(0,n.D)(25)} ${(0,n.D)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,n.D)(10)} ${(0,n.D)(10)} ${(0,n.D)(-5)}`,lg:`0 ${(0,n.D)(1)} ${(0,n.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,n.D)(28)} ${(0,n.D)(23)} ${(0,n.D)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,n.D)(12)} ${(0,n.D)(12)} ${(0,n.D)(-7)}`,xl:`0 ${(0,n.D)(1)} ${(0,n.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,n.D)(36)} ${(0,n.D)(28)} ${(0,n.D)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,n.D)(17)} ${(0,n.D)(17)} ${(0,n.D)(-7)}`},other:{},components:{}}},31634:(e,t,r)=>{r.d(t,{useProps:()=>a});var n=r(6172);r(12115),r(95155);var o=r(50366);function a(e,t,r){var a;let i=(0,o.useMantineTheme)(),c=null===(a=i.components[e])||void 0===a?void 0:a.defaultProps,l="function"==typeof c?c(i):c;return{...t,...l,...(0,n.filterProps)(r)}}},34535:(e,t,r)=>{r.d(t,{K:()=>n});function n(e){return e}},3558:(e,t,r)=>{r.d(t,{D:()=>a,factory:()=>c,getWithProps:()=>i});var n=r(95155),o=r(12115);function a(e){return e}function i(e){return t=>{let r=(0,o.forwardRef)((r,o)=>(0,n.jsx)(e,{...t,...r,ref:o}));return r.extend=e.extend,r.displayName="WithProps(".concat(e.displayName,")"),r}}function c(e){let t=(0,o.forwardRef)(e);return t.extend=a,t.withProps=e=>{let r=(0,o.forwardRef)((r,o)=>(0,n.jsx)(t,{...e,...r,ref:o}));return r.extend=t.extend,r.displayName="WithProps(".concat(t.displayName,")"),r},t}},70365:(e,t,r)=>{r.d(t,{polymorphicFactory:()=>i});var n=r(95155),o=r(12115),a=r(3558);function i(e){let t=(0,o.forwardRef)(e);return t.withProps=e=>{let r=(0,o.forwardRef)((r,o)=>(0,n.jsx)(t,{...e,...r,ref:o}));return r.extend=t.extend,r.displayName="WithProps(".concat(t.displayName,")"),r},t.extend=a.D,t}},19108:(e,t,r)=>{r.d(t,{createVarsResolver:()=>n});function n(e){return e}},35899:(e,t,r)=>{r.d(t,{FOCUS_CLASS_NAMES:()=>o,K:()=>a});var n=r(43463);let o={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};function a(e){let{theme:t,options:r,unstyled:a}=e;return(0,n.A)((null==r?void 0:r.focusable)&&!a&&(t.focusClassName||o[t.focusRing]),(null==r?void 0:r.active)&&!a&&t.activeClassName)}},37417:(e,t,r)=>{r.d(t,{resolveClassNames:()=>a});var n=r(43463);let o={};function a(e){let{theme:t,classNames:r,props:a,stylesCtx:i}=e;return function(e){let t={};return e.forEach(e=>{Object.entries(e).forEach(e=>{let[r,o]=e;t[r]?t[r]=(0,n.A)(t[r],o):t[r]=o})}),t}((Array.isArray(r)?r:[r]).map(e=>"function"==typeof e?e(t,a,i):e||o))}},74154:(e,t,r)=>{r.d(t,{resolveStyles:()=>n});function n(e){let{theme:t,styles:r,props:n,stylesCtx:o}=e;return(Array.isArray(r)?r:[r]).reduce((e,r)=>"function"==typeof r?{...e,...r(t,n,o)}:{...e,...r},{})}},2094:(e,t,r)=>{r.d(t,{useStyles:()=>u}),r(12115),r(95155);var n=r(66726),o=r(50366),a=r(43463),i=r(35899),c=r(37417);function l(e){let{selector:t,stylesCtx:r,theme:n,classNames:o,props:a}=e;return(0,c.resolveClassNames)({theme:n,classNames:o,props:a,stylesCtx:r})[t]}var s=r(74154);function d(e){let{style:t,theme:r}=e;return Array.isArray(t)?[...t].reduce((e,t)=>({...e,...d({style:t,theme:r})}),{}):"function"==typeof t?t(r):null==t?{}:t}var f=r(6172);function u(e){let{name:t,classes:r,props:u,stylesCtx:p,className:m,style:h,rootSelector:y="root",unstyled:v,classNames:g,styles:b,vars:S,varsResolver:D}=e,k=(0,o.useMantineTheme)(),x=(0,n.useMantineClassNamesPrefix)(),C=(0,n.useMantineWithStaticClasses)(),w=(0,n.useMantineIsHeadless)(),$=(Array.isArray(t)?t:[t]).filter(e=>e),{withStylesTransform:T,getTransformedStyles:N}=function(e){var t;let{props:r,stylesCtx:a,themeName:i}=e,c=(0,o.useMantineTheme)(),l=null===(t=(0,n.useMantineStylesTransform)())||void 0===t?void 0:t();return{getTransformedStyles:e=>l?[...e.map(e=>l(e,{props:r,theme:c,ctx:a})),...i.map(e=>{var t;return l(null===(t=c.components[e])||void 0===t?void 0:t.styles,{props:r,theme:c,ctx:a})})].filter(Boolean):[],withStylesTransform:!!l}}({props:u,stylesCtx:p,themeName:$});return(e,t)=>({className:function(e){let{theme:t,options:r,themeName:n,selector:o,classNamesPrefix:s,classNames:d,classes:f,unstyled:u,className:p,rootSelector:m,props:h,stylesCtx:y,withStaticClasses:v,headless:g,transformedStyles:b}=e;return(0,a.A)((0,i.K)({theme:t,options:r,unstyled:u||g}),function(e){let{themeName:t,theme:r,selector:n,props:o,stylesCtx:a}=e;return t.map(e=>{var t,i;return null===(t=(0,c.resolveClassNames)({theme:r,classNames:null===(i=r.components[e])||void 0===i?void 0:i.classNames,props:o,stylesCtx:a}))||void 0===t?void 0:t[n]})}({theme:t,themeName:n,selector:o,props:h,stylesCtx:y}),function(e){let{options:t,classes:r,selector:n,unstyled:o}=e;return(null==t?void 0:t.variant)&&!o?r["".concat(n,"--").concat(t.variant)]:void 0}({options:r,classes:f,selector:o,unstyled:u}),l({selector:o,stylesCtx:y,theme:t,classNames:d,props:h}),l({selector:o,stylesCtx:y,theme:t,classNames:b,props:h}),function(e){let{selector:t,stylesCtx:r,options:n,props:o,theme:a}=e;return(0,c.resolveClassNames)({theme:a,classNames:null==n?void 0:n.classNames,props:(null==n?void 0:n.props)||o,stylesCtx:r})[t]}({selector:o,stylesCtx:y,options:r,props:h,theme:t}),function(e){let{rootSelector:t,selector:r,className:n}=e;return t===r?n:void 0}({rootSelector:m,selector:o,className:p}),function(e){let{selector:t,classes:r,unstyled:n}=e;return n?void 0:r[t]}({selector:o,classes:f,unstyled:u||g}),v&&!g&&function(e){let{themeName:t,classNamesPrefix:r,selector:n,withStaticClass:o}=e;return!1===o?[]:t.map(e=>"".concat(r,"-").concat(e,"-").concat(n))}({themeName:n,classNamesPrefix:s,selector:o,withStaticClass:null==r?void 0:r.withStaticClass}),null==r?void 0:r.className)}({theme:k,options:t,themeName:$,selector:e,classNamesPrefix:x,classNames:g,classes:r,unstyled:v,className:m,rootSelector:y,props:u,stylesCtx:p,withStaticClasses:C,headless:w,transformedStyles:N([null==t?void 0:t.styles,b])}),style:function(e){let{theme:t,themeName:r,selector:n,options:o,props:a,stylesCtx:i,rootSelector:c,styles:l,style:u,vars:p,varsResolver:m,headless:h,withStylesTransform:y}=e;return{...!y&&function(e){let{theme:t,themeName:r,props:n,stylesCtx:o,selector:a}=e;return r.map(e=>{var r;return(0,s.resolveStyles)({theme:t,styles:null===(r=t.components[e])||void 0===r?void 0:r.styles,props:n,stylesCtx:o})[a]}).reduce((e,t)=>({...e,...t}),{})}({theme:t,themeName:r,props:a,stylesCtx:i,selector:n}),...!y&&(0,s.resolveStyles)({theme:t,styles:l,props:a,stylesCtx:i})[n],...!y&&(0,s.resolveStyles)({theme:t,styles:null==o?void 0:o.styles,props:(null==o?void 0:o.props)||a,stylesCtx:i})[n],...function(e){var t;let{vars:r,varsResolver:n,theme:o,props:a,stylesCtx:i,selector:c,themeName:l,headless:s}=e;return null===(t=[s?{}:null==n?void 0:n(o,a,i),...l.map(e=>{var t,r,n;return null===(n=o.components)||void 0===n?void 0:null===(r=n[e])||void 0===r?void 0:null===(t=r.vars)||void 0===t?void 0:t.call(r,o,a,i)}),null==r?void 0:r(o,a,i)].reduce((e,t)=>(t&&Object.keys(t).forEach(r=>{e[r]={...e[r],...(0,f.filterProps)(t[r])}}),e),{}))||void 0===t?void 0:t[c]}({theme:t,props:a,stylesCtx:i,vars:p,varsResolver:m,selector:n,themeName:r,headless:h}),...c===n?d({style:u,theme:t}):null,...d({style:null==o?void 0:o.style,theme:t})}}({theme:k,themeName:$,selector:e,options:t,props:u,stylesCtx:p,rootSelector:y,styles:b,style:h,vars:S,varsResolver:D,headless:w,withStylesTransform:T})})}},24660:(e,t,r)=>{r.d(t,{camelToKebabCase:()=>n});function n(e){return e.replace(/[A-Z]/g,e=>"-".concat(e.toLowerCase()))}},36988:(e,t,r)=>{function n(e){return e&&"object"==typeof e&&!Array.isArray(e)}r.d(t,{$:()=>function e(t,r){let o={...t};return n(t)&&n(r)&&Object.keys(r).forEach(a=>{n(r[a])&&a in t?o[a]=e(o[a],r[a]):o[a]=r[a]}),o}})},6172:(e,t,r)=>{r.d(t,{filterProps:()=>n});function n(e){return Object.keys(e).reduce((t,r)=>(void 0!==e[r]&&(t[r]=e[r]),t),{})}},14370:(e,t,r)=>{r.d(t,{getFontSize:()=>l,getLineHeight:()=>s,getRadius:()=>c,getShadow:()=>d,getSize:()=>a,getSpacing:()=>i});var n=r(40890),o=r(9185);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"size",r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(void 0!==e)return(0,n.isNumberLike)(e)?r?(0,o.D)(e):e:"var(--".concat(t,"-").concat(e,")")}function i(e){return a(e,"mantine-spacing")}function c(e){return void 0===e?"var(--mantine-radius-default)":a(e,"mantine-radius")}function l(e){return a(e,"mantine-font-size")}function s(e){return a(e,"mantine-line-height",!1)}function d(e){if(e)return a(e,"mantine-shadow",!1)}},40890:(e,t,r)=>{r.d(t,{isNumberLike:()=>n});function n(e){if("number"==typeof e)return!0;if("string"==typeof e){if(e.startsWith("calc(")||e.startsWith("var(")||e.includes(" ")&&""!==e.trim())return!0;let t=/^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;return e.trim().split(/\s+/).every(e=>t.test(e))}return!1}},54966:(e,t,r)=>{r.d(t,{keys:()=>n});function n(e){return Object.keys(e)}},9185:(e,t,r)=>{function n(e){return"0rem"===e?"0rem":`calc(${e} * var(--mantine-scale))`}function o(e,{shouldScale:t=!1}={}){return function r(o){if(0===o||"0"===o)return`0${e}`;if("number"==typeof o){let r=`${o/16}${e}`;return t?n(r):r}if("string"==typeof o){if(""===o||o.startsWith("calc(")||o.startsWith("clamp(")||o.includes("rgba("))return o;if(o.includes(","))return o.split(",").map(e=>r(e)).join(",");if(o.includes(" "))return o.split(" ").map(e=>r(e)).join(" ");if(o.includes(e))return t?n(o):o;let a=o.replace("px","");if(!Number.isNaN(Number(a))){let r=`${Number(a)/16}${e}`;return t?n(r):r}}return o}}r.d(t,{D:()=>a,em:()=>i});let a=o("rem",{shouldScale:!0}),i=o("em")},43463:(e,t,r)=>{r.d(t,{A:()=>n});let n=function(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var a=t.length;for(r=0;r<a;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n)}else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=t);return n}}}]);