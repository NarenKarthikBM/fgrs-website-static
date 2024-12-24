(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{1151:(e,t,a)=>{Promise.resolve().then(a.bind(a,79425))},66910:(e,t,a)=>{"use strict";a.d(t,{Ri:()=>s,NE:()=>S,d1:()=>i,cL:()=>v,K5:()=>g,F$:()=>x,zG:()=>f,ON:()=>_,vp:()=>C,ar:()=>p,v5:()=>m,w9:()=>w,TB:()=>h,SI:()=>y,JJ:()=>b});var r=a(29159),o=a.n(r);let s=[{label:"Precipitation",method:"sum",units:"mm",summary_conversions:1,gradient_stops:[{offset:100,color:"blue.1"},{offset:80,color:"blue.3"},{offset:60,color:"cyan.4"},{offset:40,color:"teal.5"},{offset:20,color:"green.6"},{offset:0,color:"navy.7"}],domain:[0,200]},{label:"Temperature",method:"mean",units:"\xb0C",summary_conversions:1,gradient_stops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.2"}],domain:[0,50]},{label:"Humidity",method:"mean",units:"%",summary_conversions:1,gradient_stops:[{offset:0,color:"gray.6"},{offset:20,color:"indigo.5"},{offset:40,color:"blue.2"},{offset:60,color:"cyan.4"},{offset:80,color:"lime.3"},{offset:100,color:"yellow.2"}],domain:[0,100]},{label:"Wind Speed",method:"mean",units:"m/s",summary_conversions:1,gradient_stops:[{offset:0,color:"purple.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:60,color:"lime.4"},{offset:80,color:"cyan.4"},{offset:100,color:"blue.2"}],domain:[0,6]},{label:"Evaporation",method:"sum",units:"mm",summary_conversions:1,gradient_stops:[{offset:0,color:"red.7"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:60,color:"lime.4"},{offset:80,color:"teal.3"},{offset:100,color:"blue.1"}],domain:[0,20]},{label:"Solar Radiation",method:"sum",units:"kW/m\xb2",summary_conversions:.001,gradient_stops:[{offset:0,color:"red.8"},{offset:20,color:"red.6"},{offset:40,color:"orange.5"},{offset:60,color:"yellow.4"},{offset:80,color:"cyan.3"},{offset:100,color:"blue.1"}],domain:[0,1e3]}],n=e=>"https://docs.google.com/spreadsheets/d/".concat(e,"/export?format=csv"),l=async e=>{let t="";try{let a=await fetch(e);200===a.status?t=await a.text():console.log("Error code ".concat(a.json()))}catch(e){console.log(e)}return t},i=async()=>{let e=await l(n("1M0SwA724iOsYpOhrRG29OLcmmYLDJH0z53NJ5IvhBys")),t=o().parse(e,{header:!0}),a={};return t.data.forEach(e=>{a[e.Key]=e.Value}),a},c=e=>e.summary_conversions?e.summary_conversions:1,d=(e,t)=>Math.round(u(e,t)/e.length*10)/10,u=(e,t)=>{let a=s.find(e=>e.label===t),r=void 0!=a?c(a):1,o=0;return e.forEach(e=>{""===e[t]||void 0===e[t]||isNaN(Number(e[t]))||(o+=parseFloat(e[t])*r)}),Math.round(10*o)/10},m=async e=>{let t=await l(n("IISER"==e?"1RxP8XakApUISJeT1rucSnE8nzO3B--mo9XgUX9GMkN8":"11ao5WArlgDzg_VNYBmuyA4jElQ7hBIfvYaauO2gJ0PE")),a=o().parse(t,{header:!0}),r=new Date,i=a.data.slice(2).map(e=>{let[t,a,r]=e.Date.trim().split("/");return{...e,Date:"".concat(r,"-").concat(a,"-").concat(t),Precipitation:""===e.Precipitation?"0":e.Precipitation,Temperature:""===e.Temperature?"0":e.Temperature,Humidity:""===e.Humidity?"0":e.Humidity,WindSpeed:""===e["Wind Speed"]?"0":e["Wind Speed"],Evaporation:""===e.Evaporation?"0":e.Evaporation,SolarRadiation:""===e["Solar Radiation"]?"0":e["Solar Radiation"]}}),c=i.filter(e=>{let t=new Date(e.Date);return t.getMonth()===r.getMonth()&&t.getFullYear()===r.getFullYear()}),m=i.filter(e=>new Date(e.Date).getFullYear()===r.getFullYear());return{data:i,thisYearData:m,thisMonthData:c,summary:s.map(e=>({title:e.label,thisMonth:"sum"==e.method?"".concat(u(c,e.label)," ").concat(e.units):"".concat(d(c,e.label)," ").concat(e.units),thisYear:"sum"==e.method?"".concat(u(m,e.label)," ").concat(e.units):"".concat(d(m,e.label)," ").concat(e.units)}))}},p=async()=>{let e=await l(n("1Q9VDO6nWZvhChAvBqRiAQUmH0-8fxOXdsJbC5ma33HQ"));return o().parse(e,{header:!0}).data},f=async()=>{let e=await l(n("1qmfcuwPVUiWMPiTbf7agQItGaihYZy0hth4nXTQf0vk"));return o().parse(e,{header:!0}).data},h=async()=>{let e=await l(n("1LC1-mhA2rsW7mQwbo8X_V-bbSgaxmevf_iZ6JtDfO00"));return o().parse(e,{header:!0}).data},y=async()=>{let e=await l(n("1PBUcN9zDawYCztE0nwgvXI4RCEX44xD0WAlS1z_EP1s"));return o().parse(e,{header:!0}).data},v=async()=>{let e=await l(n("1SQCQVknUuG17P4dTUkuWZXNR0VSoYtf6rpPGBcxSIbw"));return o().parse(e,{header:!0}).data},g=async()=>{let e=await l(n("17QF15uBDXh6Y_B9EC-Xwg1gl93cXIiFV0feLRlqQL1A"));return o().parse(e,{header:!0}).data},x=async()=>{let e=await l(n("10RTHFDR2ppkU8pLXqgZLF4bUzVELT1ZFysOFEdgXa5Q"));return o().parse(e,{header:!0}).data},w=async()=>{let e=await l(n("1KOdQyI9gDGfcOf34gxMBV8Tm9XH0VW4u-mIQXwIyMXo"));return o().parse(e,{header:!0}).data},b=async()=>{let e=await l(n("1X1E3_NLsS1zJd47EXF2pjNcOIqWqvJu2q-V7wDH_Sg0"));return o().parse(e,{header:!0}).data},S=async()=>{let e=await l(n("1F4Jn7QcRKVpw5RKVn8v1GmSPI-Hq2mkZ7hF0E4ID3Eg"));return o().parse(e,{header:!0}).data},C=async e=>{let t=await l(n(e));return o().parse(t,{header:!0}).data},_=async()=>{let e=await l(n("1QxSC3gOOpP0KFmxSwCtHo7-AiGarcGVM2s42tum_3VI"));return o().parse(e,{header:!0}).data}},79425:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var r=a(95155),o=a(50366),s=a(51202),n=a(1288),l=a(84059),i=a(25429),c=a(50174),d=a(32492),u=a(45177),m=a(88805),p=a(42740),f=a(12115),h=a(66910);let y=e=>e.map(e=>({update:e.Update,year:parseInt(e.Year),date:e.Date}));function v(){let e=(0,o.useMantineTheme)(),[t,a]=f.useState(null);return f.useEffect(()=>{(async function(){let e=await (0,h.JJ)();console.log(e),a(y(e))})()},[]),(0,r.jsx)(s.Container,{size:"lg",mih:"100vh",children:(0,r.jsxs)(n.Stack,{align:"center",my:"2em",children:[(0,r.jsx)(l.Title,{c:"primaryBlue.9",size:"36px",fw:700,order:1,children:"Updates"}),t?t.map(e=>e.year).filter((e,t,a)=>a.indexOf(e)===t).map((a,o)=>(0,r.jsxs)(i.Card,{shadow:"xs",radius:"lg",p:"2em",my:"2em",w:"100%",style:{background:(0,c.getGradient)({deg:130,from:"secondaryBlue.1",to:"secondaryBlue.2"},e),color:"#FFFFFF",border:"1px solid #4D95EA",boxShadow:"0px 0px 25px 0px rgba(77, 149, 234, 0.50)"},children:[(0,r.jsx)(l.Title,{ta:"center",c:"primaryBlue.9",size:"36px",fw:700,order:1,children:a}),(0,r.jsx)(n.Stack,{align:"center",my:"1em",gap:"xs",children:t.filter(e=>e.year==a).map((e,t)=>[(0,r.jsxs)(d.Text,{c:"primaryBlue.9",size:"lg",fw:500,children:[e.update," (",e.date,")"]},t),(0,r.jsx)(u.Divider,{w:"100%",color:"primaryBlue.9"},"Divider".concat(t))])})]},o)):(0,r.jsx)(m.Center,{children:(0,r.jsx)(p.Loader,{})})]})})}},86246:(e,t,a)=>{"use strict";a.d(t,{f:()=>s,u:()=>o}),a(12115);var r=a(89864);a(95155);let[o,s]=(0,r.createSafeContext)("Card component was not found in tree")},25429:(e,t,a)=>{"use strict";a.d(t,{Card:()=>y});var r=a(95155),o=a(12115),s=a(14370),n=a(19108),l=a(31634),i=a(2094),c=a(70365),d=a(88148),u=a(86246),m=a(65946),p=a(1684);let f={},h=(0,n.createVarsResolver)((e,t)=>{let{padding:a}=t;return{root:{"--card-padding":(0,s.getSpacing)(a)}}}),y=(0,c.polymorphicFactory)((e,t)=>{let a=(0,l.useProps)("Card",f,e),{classNames:s,className:n,style:c,styles:y,unstyled:v,vars:g,children:x,padding:w,...b}=a,S=(0,i.useStyles)({name:"Card",props:a,classes:p.A,className:n,style:c,classNames:s,styles:y,unstyled:v,vars:g,varsResolver:h}),C=o.Children.toArray(x),_=C.map((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===m.CardSection?(0,o.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===C.length-1||void 0}):e);return(0,r.jsx)(u.u,{value:{getStyles:S},children:(0,r.jsx)(d.Paper,{ref:t,unstyled:v,...S("root"),...b,children:_})})});y.classes=p.A,y.displayName="@mantine/core/Card",y.Section=m.CardSection},1684:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var r={root:"m_e615b15f",section:"m_599a2148"}},65946:(e,t,a)=>{"use strict";a.d(t,{CardSection:()=>d});var r=a(95155);a(12115);var o=a(31634),s=a(71419),n=a(70365),l=a(86246),i=a(1684);let c={},d=(0,n.polymorphicFactory)((e,t)=>{let{classNames:a,className:n,style:i,styles:d,vars:u,withBorder:m,inheritPadding:p,mod:f,...h}=(0,o.useProps)("CardSection",c,e),y=(0,l.f)();return(0,r.jsx)(s.Box,{ref:t,mod:[{"with-border":m,"inherit-padding":p},f],...y.getStyles("section",{className:n,style:i,styles:d,classNames:a}),...h})});d.classes=i.A,d.displayName="@mantine/core/CardSection"},88805:(e,t,a)=>{"use strict";a.d(t,{Center:()=>d});var r=a(95155);a(12115);var o=a(31634),s=a(2094),n=a(71419),l=a(70365),i={root:"m_4451eb3a"};let c={},d=(0,l.polymorphicFactory)((e,t)=>{let a=(0,o.useProps)("Center",c,e),{classNames:l,className:d,style:u,styles:m,unstyled:p,vars:f,inline:h,mod:y,...v}=a,g=(0,s.useStyles)({name:"Center",props:a,classes:i,className:d,style:u,classNames:l,styles:m,unstyled:p,vars:f});return(0,r.jsx)(n.Box,{ref:t,mod:[{inline:h},y],...g("root"),...v})});d.classes=i,d.displayName="@mantine/core/Center"},45177:(e,t,a)=>{"use strict";a.d(t,{Divider:()=>f});var r=a(95155);a(12115);var o=a(14370),s=a(19108),n=a(29282),l=a(31634),i=a(2094),c=a(71419),d=a(3558),u={root:"m_3eebeb36",label:"m_9e365f20"};let m={orientation:"horizontal"},p=(0,s.createVarsResolver)((e,t)=>{let{color:a,variant:r,size:s}=t;return{root:{"--divider-color":a?(0,n.getThemeColor)(a,e):void 0,"--divider-border-style":r,"--divider-size":(0,o.getSize)(s,"divider-size")}}}),f=(0,d.factory)((e,t)=>{let a=(0,l.useProps)("Divider",m,e),{classNames:o,className:s,style:n,styles:d,unstyled:f,vars:h,color:y,orientation:v,label:g,labelPosition:x,mod:w,...b}=a,S=(0,i.useStyles)({name:"Divider",classes:u,props:a,className:s,style:n,classNames:o,styles:d,unstyled:f,vars:h,varsResolver:p});return(0,r.jsx)(c.Box,{ref:t,mod:[{orientation:v,"with-label":!!g},w],...S("root"),...b,role:"separator",children:g&&(0,r.jsx)(c.Box,{component:"span",mod:{position:x},...S("label"),children:g})})});f.classes=u,f.displayName="@mantine/core/Divider"},88148:(e,t,a)=>{"use strict";a.d(t,{Paper:()=>p});var r=a(95155);a(12115);var o=a(14370),s=a(19108),n=a(31634),l=a(2094),i=a(71419),c=a(70365),d={root:"m_1b7284a3"};let u={},m=(0,s.createVarsResolver)((e,t)=>{let{radius:a,shadow:r}=t;return{root:{"--paper-radius":void 0===a?void 0:(0,o.getRadius)(a),"--paper-shadow":(0,o.getShadow)(r)}}}),p=(0,c.polymorphicFactory)((e,t)=>{let a=(0,n.useProps)("Paper",u,e),{classNames:o,className:s,style:c,styles:p,unstyled:f,withBorder:h,vars:y,radius:v,shadow:g,variant:x,mod:w,...b}=a,S=(0,l.useStyles)({name:"Paper",props:a,classes:d,className:s,style:c,classNames:o,styles:p,unstyled:f,vars:y,varsResolver:m});return(0,r.jsx)(i.Box,{ref:t,mod:[{"data-with-border":h},w],...S("root"),variant:x,...b})});p.classes=d,p.displayName="@mantine/core/Paper"},32492:(e,t,a)=>{"use strict";a.d(t,{Text:()=>h});var r=a(95155);a(12115);var o=a(14370),s=a(19108),n=a(29282),l=a(50174),i=a(31634),c=a(2094),d=a(71419),u=a(70365),m={root:"m_b6d8b162"};let p={inherit:!1},f=(0,s.createVarsResolver)((e,t)=>{let{variant:a,lineClamp:r,gradient:s,size:i,color:c}=t;return{root:{"--text-fz":(0,o.getFontSize)(i),"--text-lh":(0,o.getLineHeight)(i),"--text-gradient":"gradient"===a?(0,l.getGradient)(s,e):void 0,"--text-line-clamp":"number"==typeof r?r.toString():void 0,"--text-color":c?(0,n.getThemeColor)(c,e):void 0}}}),h=(0,u.polymorphicFactory)((e,t)=>{let a=(0,i.useProps)("Text",p,e),{lineClamp:o,truncate:s,inline:n,inherit:l,gradient:u,span:h,__staticSelector:y,vars:v,className:g,style:x,classNames:w,styles:b,unstyled:S,variant:C,mod:_,size:E,...D}=a,F=(0,c.useStyles)({name:["Text",y],props:a,classes:m,className:g,style:x,classNames:w,styles:b,unstyled:S,vars:v,varsResolver:f});return(0,r.jsx)(d.Box,{...F("root",{focusable:!0}),ref:t,component:h?"span":"p",variant:C,mod:[{"data-truncate":function(e){return"start"===e?"start":"end"===e||e?"end":void 0}(s),"data-line-clamp":"number"==typeof o,"data-inline":n,"data-inherit":l},_],size:E,...D})});h.classes=m,h.displayName="@mantine/core/Text"},89864:(e,t,a)=>{"use strict";a.d(t,{createSafeContext:()=>s});var r=a(95155),o=a(12115);function s(e){let t=(0,o.createContext)(null);return[e=>{let{children:a,value:o}=e;return(0,r.jsx)(t.Provider,{value:o,children:a})},()=>{let a=(0,o.useContext)(t);if(null===a)throw Error(e);return a}]}}},e=>{var t=t=>e(e.s=t);e.O(0,[321,440,441,517,358],()=>t(1151)),_N_E=e.O()}]);