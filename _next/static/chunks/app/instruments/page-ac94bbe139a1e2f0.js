(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[102,951],{2651:(e,t,o)=>{Promise.resolve().then(o.bind(o,75412))},75412:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>w});var r=o(95155),a=o(51202),s=o(1288),n=o(84059),i=o(97088),l=o(88805),c=o(42740),u=o(12115),d=o(25429),p=o(70189),m=o(71419),g=o(65406),f=o(32492),h=o(41297),y=o(50366),v=o(50174);let x=e=>{let{imgURL:t,name:o,description:a,link:i}=e,l=(0,y.useMantineTheme)();return(0,r.jsx)(d.Card,{shadow:"sm",radius:"lg",p:"lg",style:{background:(0,v.getGradient)({deg:130,from:"primaryBlue.4",to:"secondaryBlue.3"},l),color:"#FFFFFF",border:"1px solid #4D95EA",boxShadow:"0px 0px 25px 0px rgba(77, 149, 234, 0.50)"},className:"hoverBtn",children:(0,r.jsxs)(p.Group,{align:"center",justify:"center",children:[(0,r.jsx)(m.Box,{w:170,children:(0,r.jsx)(g.Image,{src:t,alt:o,width:140,height:280,radius:"lg",fit:"cover"})}),(0,r.jsxs)(s.Stack,{gap:"xs",w:240,children:[(0,r.jsx)(n.Title,{ta:"center",fw:700,size:"24px",c:"white",children:o}),(0,r.jsx)(f.Text,{ta:"center",fw:400,size:"18px",c:"white",children:a}),(0,r.jsx)(h.Button,{style:{boxShadow:"0px 0px 10px 0px rgba(46, 129, 243, 0.25)",border:"1px solid #2C5B90"},className:"hoverBtn",radius:"xl",fullWidth:!0,variant:"gradient",gradient:{from:"#3688E7",to:"#73A0D6",deg:90},component:"a",href:i,children:"More Details"})]})]})})};var b=o(66910);let S=e=>e.map(e=>({imgURL:0!=e["Image URL"].length?e["Image URL"]:"https://eu.ui-avatars.com/api/?name=".concat(e.Name[0],"&size=175"),name:e.Name,description:e.Description,link:e.Link}));function w(){let[e,t]=u.useState(null);return u.useEffect(()=>{(async function(){t(S(await (0,b.zG)()))})()},[]),(0,r.jsx)(a.Container,{size:"lg",mih:"100vh",children:(0,r.jsxs)(s.Stack,{align:"center",my:"2em",children:[(0,r.jsx)(n.Title,{c:"primaryBlue.9",size:"36px",fw:700,order:1,children:"Instruments"}),e?(0,r.jsx)(i.SimpleGrid,{cols:{base:1,md:2},mt:"lg",w:"100%",verticalSpacing:"2em",children:e.map((e,t)=>(0,r.jsx)(l.Center,{children:(0,r.jsx)(x,{...e})},t))}):(0,r.jsx)(l.Center,{children:(0,r.jsx)(c.Loader,{})})]})})}},66910:(e,t,o)=>{"use strict";o.d(t,{Ri:()=>s,NE:()=>w,d1:()=>l,cL:()=>y,K5:()=>v,F$:()=>x,zG:()=>g,ON:()=>j,vp:()=>B,ar:()=>m,v5:()=>p,w9:()=>b,TB:()=>f,SI:()=>h,JJ:()=>S});var r=o(29159),a=o.n(r);let s=[{label:"Precipitation",method:"sum",units:"mm",summary_conversions:1,gradient_stops:[{offset:100,color:"blue.1"},{offset:80,color:"blue.3"},{offset:60,color:"cyan.4"},{offset:40,color:"teal.5"},{offset:20,color:"green.6"},{offset:0,color:"navy.7"}],domain:[0,200]},{label:"Temperature",method:"mean",units:"\xb0C",summary_conversions:1,gradient_stops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.2"}],domain:[0,50]},{label:"Humidity",method:"mean",units:"%",summary_conversions:1,gradient_stops:[{offset:0,color:"gray.6"},{offset:20,color:"indigo.5"},{offset:40,color:"blue.2"},{offset:60,color:"cyan.4"},{offset:80,color:"lime.3"},{offset:100,color:"yellow.2"}],domain:[0,100]},{label:"Wind Speed",method:"mean",units:"m/s",summary_conversions:1,gradient_stops:[{offset:0,color:"purple.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:60,color:"lime.4"},{offset:80,color:"cyan.4"},{offset:100,color:"blue.2"}],domain:[0,6]},{label:"Evaporation",method:"sum",units:"mm",summary_conversions:1,gradient_stops:[{offset:0,color:"red.7"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:60,color:"lime.4"},{offset:80,color:"teal.3"},{offset:100,color:"blue.1"}],domain:[0,20]},{label:"Solar Radiation",method:"sum",units:"kW/m\xb2",summary_conversions:.001,gradient_stops:[{offset:0,color:"red.8"},{offset:20,color:"red.6"},{offset:40,color:"orange.5"},{offset:60,color:"yellow.4"},{offset:80,color:"cyan.3"},{offset:100,color:"blue.1"}],domain:[0,1e3]}],n=e=>"https://docs.google.com/spreadsheets/d/".concat(e,"/export?format=csv"),i=async e=>{let t="";try{let o=await fetch(e);200===o.status?t=await o.text():console.log("Error code ".concat(o.json()))}catch(e){console.log(e)}return t},l=async()=>{let e=await i(n("1M0SwA724iOsYpOhrRG29OLcmmYLDJH0z53NJ5IvhBys")),t=a().parse(e,{header:!0}),o={};return t.data.forEach(e=>{o[e.Key]=e.Value}),o},c=e=>e.summary_conversions?e.summary_conversions:1,u=(e,t)=>Math.round(d(e,t)/e.length*10)/10,d=(e,t)=>{let o=s.find(e=>e.label===t),r=void 0!=o?c(o):1,a=0;return e.forEach(e=>{""===e[t]||void 0===e[t]||isNaN(Number(e[t]))||(a+=parseFloat(e[t])*r)}),Math.round(10*a)/10},p=async e=>{let t=await i(n("IISER"==e?"1RxP8XakApUISJeT1rucSnE8nzO3B--mo9XgUX9GMkN8":"11ao5WArlgDzg_VNYBmuyA4jElQ7hBIfvYaauO2gJ0PE")),o=a().parse(t,{header:!0}),r=new Date,l=o.data.slice(2).map(e=>{let[t,o,r]=e.Date.trim().split("/");return{...e,Date:"".concat(r,"-").concat(o,"-").concat(t),Precipitation:""===e.Precipitation?"0":e.Precipitation,Temperature:""===e.Temperature?"0":e.Temperature,Humidity:""===e.Humidity?"0":e.Humidity,WindSpeed:""===e["Wind Speed"]?"0":e["Wind Speed"],Evaporation:""===e.Evaporation?"0":e.Evaporation,SolarRadiation:""===e["Solar Radiation"]?"0":e["Solar Radiation"]}}),c=l.filter(e=>{let t=new Date(e.Date);return t.getMonth()===r.getMonth()&&t.getFullYear()===r.getFullYear()}),p=l.filter(e=>new Date(e.Date).getFullYear()===r.getFullYear());return{data:l,thisYearData:p,thisMonthData:c,summary:s.map(e=>({title:e.label,thisMonth:"sum"==e.method?"".concat(d(c,e.label)," ").concat(e.units):"".concat(u(c,e.label)," ").concat(e.units),thisYear:"sum"==e.method?"".concat(d(p,e.label)," ").concat(e.units):"".concat(u(p,e.label)," ").concat(e.units)}))}},m=async()=>{let e=await i(n("1Q9VDO6nWZvhChAvBqRiAQUmH0-8fxOXdsJbC5ma33HQ"));return a().parse(e,{header:!0}).data},g=async()=>{let e=await i(n("1qmfcuwPVUiWMPiTbf7agQItGaihYZy0hth4nXTQf0vk"));return a().parse(e,{header:!0}).data},f=async()=>{let e=await i(n("1LC1-mhA2rsW7mQwbo8X_V-bbSgaxmevf_iZ6JtDfO00"));return a().parse(e,{header:!0}).data},h=async()=>{let e=await i(n("1PBUcN9zDawYCztE0nwgvXI4RCEX44xD0WAlS1z_EP1s"));return a().parse(e,{header:!0}).data},y=async()=>{let e=await i(n("1SQCQVknUuG17P4dTUkuWZXNR0VSoYtf6rpPGBcxSIbw"));return a().parse(e,{header:!0}).data},v=async()=>{let e=await i(n("17QF15uBDXh6Y_B9EC-Xwg1gl93cXIiFV0feLRlqQL1A"));return a().parse(e,{header:!0}).data},x=async()=>{let e=await i(n("10RTHFDR2ppkU8pLXqgZLF4bUzVELT1ZFysOFEdgXa5Q"));return a().parse(e,{header:!0}).data},b=async()=>{let e=await i(n("1KOdQyI9gDGfcOf34gxMBV8Tm9XH0VW4u-mIQXwIyMXo"));return a().parse(e,{header:!0}).data},S=async()=>{let e=await i(n("1X1E3_NLsS1zJd47EXF2pjNcOIqWqvJu2q-V7wDH_Sg0"));return a().parse(e,{header:!0}).data},w=async()=>{let e=await i(n("1F4Jn7QcRKVpw5RKVn8v1GmSPI-Hq2mkZ7hF0E4ID3Eg"));return a().parse(e,{header:!0}).data},B=async e=>{let t=await i(n(e));return a().parse(t,{header:!0}).data},j=async()=>{let e=await i(n("1QxSC3gOOpP0KFmxSwCtHo7-AiGarcGVM2s42tum_3VI"));return a().parse(e,{header:!0}).data}},41297:(e,t,o)=>{"use strict";o.d(t,{Button:()=>b});var r=o(95155),a=o(9185);o(12115);var s=o(14370),n=o(19108),i=o(31634),l=o(2094),c=o(71419),u=o(70365),d=o(42740),p=o(12404),m=o(49107),g=o(69004),f=o(34174),h=o(59032);let y={in:{opacity:1,transform:"translate(-50%, calc(-50% + ".concat((0,a.D)(1),"))")},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},v={},x=(0,n.createVarsResolver)((e,t)=>{let{radius:o,color:r,gradient:a,variant:n,size:i,justify:l,autoContrast:c}=t,u=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:a,variant:n||"filled",autoContrast:c});return{root:{"--button-justify":l,"--button-height":(0,s.getSize)(i,"button-height"),"--button-padding-x":(0,s.getSize)(i,"button-padding-x"),"--button-fz":(null==i?void 0:i.includes("compact"))?(0,s.getFontSize)(i.replace("compact-","")):(0,s.getFontSize)(i),"--button-radius":void 0===o?void 0:(0,s.getRadius)(o),"--button-bg":r||n?u.background:void 0,"--button-hover":r||n?u.hover:void 0,"--button-color":u.color,"--button-bd":r||n?u.border:void 0,"--button-hover-color":r||n?u.hoverColor:void 0}}}),b=(0,u.polymorphicFactory)((e,t)=>{let o=(0,i.useProps)("Button",v,e),{style:a,vars:s,className:n,color:u,disabled:g,children:f,leftSection:b,rightSection:S,fullWidth:w,variant:B,radius:j,loading:_,loaderProps:G,gradient:N,classNames:F,styles:k,unstyled:R,"data-disabled":V,autoContrast:z,mod:C,...E}=o,P=(0,l.useStyles)({name:"Button",props:o,classes:h.A,className:n,style:a,classNames:F,styles:k,unstyled:R,vars:s,varsResolver:x}),I=!!b,D=!!S;return(0,r.jsxs)(m.UnstyledButton,{ref:t,...P("root",{active:!g&&!_&&!V}),unstyled:R,variant:B,disabled:g||_,mod:[{disabled:g||V,loading:_,block:w,"with-left-section":I,"with-right-section":D},C],...E,children:[(0,r.jsx)(p.Transition,{mounted:!!_,transition:y,duration:150,children:e=>(0,r.jsx)(c.Box,{component:"span",...P("loader",{style:e}),"aria-hidden":!0,children:(0,r.jsx)(d.Loader,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...G})})}),(0,r.jsxs)("span",{...P("inner"),children:[b&&(0,r.jsx)(c.Box,{component:"span",...P("section"),mod:{position:"left"},children:b}),(0,r.jsx)(c.Box,{component:"span",mod:{loading:_},...P("label"),children:f}),S&&(0,r.jsx)(c.Box,{component:"span",...P("section"),mod:{position:"right"},children:S})]})]})});b.classes=h.A,b.displayName="@mantine/core/Button",b.Group=g.ButtonGroup,b.GroupSection=f.ButtonGroupSection},59032:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var r={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844",groupSection:"m_70be2a01"}},69004:(e,t,o)=>{"use strict";o.d(t,{ButtonGroup:()=>m});var r=o(95155),a=o(9185);o(12115);var s=o(19108),n=o(31634),i=o(2094),l=o(71419),c=o(3558),u=o(59032);let d={orientation:"horizontal"},p=(0,s.createVarsResolver)((e,t)=>{let{borderWidth:o}=t;return{group:{"--button-border-width":(0,a.D)(o)}}}),m=(0,c.factory)((e,t)=>{let o=(0,n.useProps)("ButtonGroup",d,e),{className:a,style:s,classNames:c,styles:m,unstyled:g,orientation:f,vars:h,borderWidth:y,variant:v,mod:x,...b}=(0,n.useProps)("ButtonGroup",d,e),S=(0,i.useStyles)({name:"ButtonGroup",props:o,classes:u.A,className:a,style:s,classNames:c,styles:m,unstyled:g,vars:h,varsResolver:p,rootSelector:"group"});return(0,r.jsx)(l.Box,{...S("group"),ref:t,variant:v,mod:[{"data-orientation":f},x],role:"group",...b})});m.classes=u.A,m.displayName="@mantine/core/ButtonGroup"},34174:(e,t,o)=>{"use strict";o.d(t,{ButtonGroupSection:()=>m});var r=o(95155);o(12115);var a=o(14370),s=o(19108),n=o(31634),i=o(2094),l=o(71419),c=o(3558),u=o(59032);let d={},p=(0,s.createVarsResolver)((e,t)=>{let{radius:o,color:r,gradient:s,variant:n,autoContrast:i,size:l}=t,c=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:s,variant:n||"filled",autoContrast:i});return{groupSection:{"--section-height":(0,a.getSize)(l,"section-height"),"--section-padding-x":(0,a.getSize)(l,"section-padding-x"),"--section-fz":(null==l?void 0:l.includes("compact"))?(0,a.getFontSize)(l.replace("compact-","")):(0,a.getFontSize)(l),"--section-radius":void 0===o?void 0:(0,a.getRadius)(o),"--section-bg":r||n?c.background:void 0,"--section-color":c.color,"--section-bd":r||n?c.border:void 0}}}),m=(0,c.factory)((e,t)=>{let o=(0,n.useProps)("ButtonGroupSection",d,e),{className:a,style:s,classNames:c,styles:m,unstyled:g,vars:f,variant:h,gradient:y,radius:v,autoContrast:x,...b}=(0,n.useProps)("ButtonGroupSection",d,e),S=(0,i.useStyles)({name:"ButtonGroupSection",props:o,classes:u.A,className:a,style:s,classNames:c,styles:m,unstyled:g,vars:f,varsResolver:p,rootSelector:"groupSection"});return(0,r.jsx)(l.Box,{...S("groupSection"),ref:t,variant:h,...b})});m.classes=u.A,m.displayName="@mantine/core/ButtonGroupSection"},88805:(e,t,o)=>{"use strict";o.d(t,{Center:()=>u});var r=o(95155);o(12115);var a=o(31634),s=o(2094),n=o(71419),i=o(70365),l={root:"m_4451eb3a"};let c={},u=(0,i.polymorphicFactory)((e,t)=>{let o=(0,a.useProps)("Center",c,e),{classNames:i,className:u,style:d,styles:p,unstyled:m,vars:g,inline:f,mod:h,...y}=o,v=(0,s.useStyles)({name:"Center",props:o,classes:l,className:u,style:d,classNames:i,styles:p,unstyled:m,vars:g});return(0,r.jsx)(n.Box,{ref:t,mod:[{inline:f},h],...v("root"),...y})});u.classes=l,u.displayName="@mantine/core/Center"},70189:(e,t,o)=>{"use strict";o.d(t,{Group:()=>g});var r=o(95155),a=o(12115),s=o(14370),n=o(19108),i=o(31634),l=o(2094),c=o(71419),u=o(3558),d={root:"m_4081bf90"};let p={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},m=(0,n.createVarsResolver)((e,t,o)=>{let{grow:r,preventGrowOverflow:a,gap:n,align:i,justify:l,wrap:c}=t,{childWidth:u}=o;return{root:{"--group-child-width":r&&a?u:void 0,"--group-gap":(0,s.getSpacing)(n),"--group-align":i,"--group-justify":l,"--group-wrap":c}}}),g=(0,u.factory)((e,t)=>{let o=(0,i.useProps)("Group",p,e),{classNames:n,className:u,style:g,styles:f,unstyled:h,children:y,gap:v,align:x,justify:b,wrap:S,grow:w,preventGrowOverflow:B,vars:j,variant:_,__size:G,mod:N,...F}=o,k=a.Children.toArray(y).filter(Boolean),R=k.length,V=(0,s.getSpacing)(null!=v?v:"md"),z="calc(".concat(100/R,"% - (").concat(V," - ").concat(V," / ").concat(R,"))"),C=(0,l.useStyles)({name:"Group",props:o,stylesCtx:{childWidth:z},className:u,style:g,classes:d,classNames:n,styles:f,unstyled:h,vars:j,varsResolver:m});return(0,r.jsx)(c.Box,{...C("root"),ref:t,variant:_,mod:[{grow:w},N],size:G,...F,children:k})});g.classes=d,g.displayName="@mantine/core/Group"},65406:(e,t,o)=>{"use strict";o.d(t,{Image:()=>g});var r=o(95155),a=o(12115),s=o(14370),n=o(19108),i=o(31634),l=o(2094),c=o(71419),u=o(70365),d={root:"m_9e117634"};let p={},m=(0,n.createVarsResolver)((e,t)=>{let{radius:o,fit:r}=t;return{root:{"--image-radius":void 0===o?void 0:(0,s.getRadius)(o),"--image-object-fit":r}}}),g=(0,u.polymorphicFactory)((e,t)=>{let o=(0,i.useProps)("Image",p,e),{classNames:s,className:n,style:u,styles:g,unstyled:f,vars:h,onError:y,src:v,radius:x,fit:b,fallbackSrc:S,mod:w,...B}=o,[j,_]=(0,a.useState)(!v);(0,a.useEffect)(()=>_(!v),[v]);let G=(0,l.useStyles)({name:"Image",classes:d,props:o,className:n,style:u,classNames:s,styles:g,unstyled:f,vars:h,varsResolver:m});return j&&S?(0,r.jsx)(c.Box,{component:"img",ref:t,src:S,...G("root"),onError:y,mod:["fallback",w],...B}):(0,r.jsx)(c.Box,{component:"img",ref:t,...G("root"),src:v,onError:e=>{null==y||y(e),_(!0)},mod:w,...B})});g.classes=d,g.displayName="@mantine/core/Image"},97088:(e,t,o)=>{"use strict";o.d(t,{SimpleGrid:()=>w});var r=o(95155);o(12115);var a=o(31634),s=o(2094),n=o(15360),i=o(71419),l=o(3558),c=o(54966),u=o(7325),d=o(6172),p=o(14370),m=o(70420),g=o(57294),f=o(50366),h=o(52182);function y(e){var t;let{spacing:o,verticalSpacing:a,cols:s,selector:n}=e,i=(0,f.useMantineTheme)(),l=void 0===a?o:a,u=(0,d.filterProps)({"--sg-spacing-x":(0,p.getSpacing)((0,g.getBaseValue)(o)),"--sg-spacing-y":(0,p.getSpacing)((0,g.getBaseValue)(l)),"--sg-cols":null===(t=(0,g.getBaseValue)(s))||void 0===t?void 0:t.toString()}),y=(0,c.keys)(i.breakpoints).reduce((e,t)=>(e[t]||(e[t]={}),"object"==typeof o&&void 0!==o[t]&&(e[t]["--sg-spacing-x"]=(0,p.getSpacing)(o[t])),"object"==typeof l&&void 0!==l[t]&&(e[t]["--sg-spacing-y"]=(0,p.getSpacing)(l[t])),"object"==typeof s&&void 0!==s[t]&&(e[t]["--sg-cols"]=s[t]),e),{}),v=(0,m.getSortedBreakpoints)((0,c.keys)(y),i.breakpoints).filter(e=>(0,c.keys)(y[e.value]).length>0).map(e=>({query:"(min-width: ".concat(i.breakpoints[e.value],")"),styles:y[e.value]}));return(0,r.jsx)(h.InlineStyles,{styles:u,media:v,selector:n})}function v(e){return"object"==typeof e&&null!==e?(0,c.keys)(e):[]}function x(e){var t;let{spacing:o,verticalSpacing:a,cols:s,selector:n}=e,i=void 0===a?o:a,l=(0,d.filterProps)({"--sg-spacing-x":(0,p.getSpacing)((0,g.getBaseValue)(o)),"--sg-spacing-y":(0,p.getSpacing)((0,g.getBaseValue)(i)),"--sg-cols":null===(t=(0,g.getBaseValue)(s))||void 0===t?void 0:t.toString()}),c=function(e){let{spacing:t,verticalSpacing:o,cols:r}=e;return Array.from(new Set([...v(t),...v(o),...v(r)])).sort((e,t)=>(0,u.px)(e)-(0,u.px)(t))}({spacing:o,verticalSpacing:a,cols:s}),m=c.reduce((e,t)=>(e[t]||(e[t]={}),"object"==typeof o&&void 0!==o[t]&&(e[t]["--sg-spacing-x"]=(0,p.getSpacing)(o[t])),"object"==typeof i&&void 0!==i[t]&&(e[t]["--sg-spacing-y"]=(0,p.getSpacing)(i[t])),"object"==typeof s&&void 0!==s[t]&&(e[t]["--sg-cols"]=s[t]),e),{}),f=c.map(e=>({query:"simple-grid (min-width: ".concat(e,")"),styles:m[e]}));return(0,r.jsx)(h.InlineStyles,{styles:l,container:f,selector:n})}var b={container:"m_925c2d2c",root:"m_2415a157"};let S={cols:1,spacing:"md",type:"media"},w=(0,l.factory)((e,t)=>{let o=(0,a.useProps)("SimpleGrid",S,e),{classNames:l,className:c,style:u,styles:d,unstyled:p,vars:m,cols:g,verticalSpacing:f,spacing:h,type:v,...w}=o,B=(0,s.useStyles)({name:"SimpleGrid",classes:b,props:o,className:c,style:u,classNames:l,styles:d,unstyled:p,vars:m}),j=(0,n.useRandomClassName)();return"container"===v?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{...o,selector:".".concat(j)}),(0,r.jsx)("div",{...B("container"),children:(0,r.jsx)(i.Box,{ref:t,...B("root",{className:j}),...w})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{...o,selector:".".concat(j)}),(0,r.jsx)(i.Box,{ref:t,...B("root",{className:j}),...w})]})});w.classes=b,w.displayName="@mantine/core/SimpleGrid"},32492:(e,t,o)=>{"use strict";o.d(t,{Text:()=>f});var r=o(95155);o(12115);var a=o(14370),s=o(19108),n=o(29282),i=o(50174),l=o(31634),c=o(2094),u=o(71419),d=o(70365),p={root:"m_b6d8b162"};let m={inherit:!1},g=(0,s.createVarsResolver)((e,t)=>{let{variant:o,lineClamp:r,gradient:s,size:l,color:c}=t;return{root:{"--text-fz":(0,a.getFontSize)(l),"--text-lh":(0,a.getLineHeight)(l),"--text-gradient":"gradient"===o?(0,i.getGradient)(s,e):void 0,"--text-line-clamp":"number"==typeof r?r.toString():void 0,"--text-color":c?(0,n.getThemeColor)(c,e):void 0}}}),f=(0,d.polymorphicFactory)((e,t)=>{let o=(0,l.useProps)("Text",m,e),{lineClamp:a,truncate:s,inline:n,inherit:i,gradient:d,span:f,__staticSelector:h,vars:y,className:v,style:x,classNames:b,styles:S,unstyled:w,variant:B,mod:j,size:_,...G}=o,N=(0,c.useStyles)({name:["Text",h],props:o,classes:p,className:v,style:x,classNames:b,styles:S,unstyled:w,vars:y,varsResolver:g});return(0,r.jsx)(u.Box,{...N("root",{focusable:!0}),ref:t,component:f?"span":"p",variant:B,mod:[{"data-truncate":function(e){return"start"===e?"start":"end"===e||e?"end":void 0}(s),"data-line-clamp":"number"==typeof a,"data-inline":n,"data-inherit":i},j],size:_,...G})});f.classes=p,f.displayName="@mantine/core/Text"},57294:(e,t,o)=>{"use strict";function r(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}o.d(t,{getBaseValue:()=>r})},43862:(e,t,o)=>{"use strict";o.d(t,{getBreakpointValue:()=>a});var r=o(7325);function a(e,t){return e in t?(0,r.px)(t[e]):(0,r.px)(e)}},70420:(e,t,o)=>{"use strict";o.d(t,{getSortedBreakpoints:()=>a});var r=o(43862);function a(e,t){let o=e.map(e=>({value:e,px:(0,r.getBreakpointValue)(e,t)}));return o.sort((e,t)=>e.px-t.px),o}},7325:(e,t,o)=>{"use strict";function r(e){let t="string"==typeof e&&e.includes("var(--mantine-scale)")?e.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim():e;return"number"==typeof t?t:"string"==typeof t?t.includes("calc")||t.includes("var")?t:t.includes("px")?Number(t.replace("px","")):t.includes("rem")?16*Number(t.replace("rem","")):t.includes("em")?16*Number(t.replace("em","")):Number(t):NaN}o.d(t,{px:()=>r})}},e=>{var t=t=>e(e.s=t);e.O(0,[321,440,42,441,517,358],()=>t(2651)),_N_E=e.O()}]);