(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[352],{18642:(e,t,a)=>{Promise.resolve().then(a.bind(a,23976))},66910:(e,t,a)=>{"use strict";a.d(t,{Ri:()=>s,NE:()=>S,d1:()=>l,cL:()=>y,K5:()=>w,F$:()=>x,zG:()=>p,ON:()=>_,vp:()=>E,ar:()=>u,v5:()=>f,w9:()=>b,TB:()=>h,SI:()=>g,JJ:()=>v});var r=a(29159),o=a.n(r);let s=[{label:"Precipitation",method:"sum",units:"mm",summary_conversions:1,gradient_stops:[{offset:100,color:"blue.1"},{offset:80,color:"blue.3"},{offset:60,color:"cyan.4"},{offset:40,color:"teal.5"},{offset:20,color:"green.6"},{offset:0,color:"navy.7"}],domain:[0,200]},{label:"Temperature",method:"mean",units:"\xb0C",summary_conversions:1,gradient_stops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.2"}],domain:[0,50]},{label:"Humidity",method:"mean",units:"%",summary_conversions:1,gradient_stops:[{offset:0,color:"gray.6"},{offset:20,color:"indigo.5"},{offset:40,color:"blue.2"},{offset:60,color:"cyan.4"},{offset:80,color:"lime.3"},{offset:100,color:"yellow.2"}],domain:[0,100]},{label:"Wind Speed",method:"mean",units:"m/s",summary_conversions:1,gradient_stops:[{offset:0,color:"purple.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:60,color:"lime.4"},{offset:80,color:"cyan.4"},{offset:100,color:"blue.2"}],domain:[0,6]},{label:"Evaporation",method:"sum",units:"mm",summary_conversions:1,gradient_stops:[{offset:0,color:"red.7"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:60,color:"lime.4"},{offset:80,color:"teal.3"},{offset:100,color:"blue.1"}],domain:[0,20]},{label:"Solar Radiation",method:"sum",units:"kW/m\xb2",summary_conversions:.001,gradient_stops:[{offset:0,color:"red.8"},{offset:20,color:"red.6"},{offset:40,color:"orange.5"},{offset:60,color:"yellow.4"},{offset:80,color:"cyan.3"},{offset:100,color:"blue.1"}],domain:[0,1e3]}],n=e=>"https://docs.google.com/spreadsheets/d/".concat(e,"/export?format=csv"),i=async e=>{let t="";try{let a=await fetch(e);200===a.status?t=await a.text():console.log("Error code ".concat(a.json()))}catch(e){console.log(e)}return t},l=async()=>{let e=await i(n("1M0SwA724iOsYpOhrRG29OLcmmYLDJH0z53NJ5IvhBys")),t=o().parse(e,{header:!0}),a={};return t.data.forEach(e=>{a[e.Key]=e.Value}),a},c=e=>e.summary_conversions?e.summary_conversions:1,d=(e,t)=>Math.round(m(e,t)/e.length*10)/10,m=(e,t)=>{let a=s.find(e=>e.label===t),r=void 0!=a?c(a):1,o=0;return e.forEach(e=>{""===e[t]||void 0===e[t]||isNaN(Number(e[t]))||(o+=parseFloat(e[t])*r)}),Math.round(10*o)/10},f=async e=>{let t=await i(n("IISER"==e?"1RxP8XakApUISJeT1rucSnE8nzO3B--mo9XgUX9GMkN8":"11ao5WArlgDzg_VNYBmuyA4jElQ7hBIfvYaauO2gJ0PE")),a=o().parse(t,{header:!0}),r=new Date,l=a.data.slice(2).map(e=>{let[t,a,r]=e.Date.trim().split("/");return{...e,Date:"".concat(r,"-").concat(a,"-").concat(t),Precipitation:""===e.Precipitation?"0":e.Precipitation,Temperature:""===e.Temperature?"0":e.Temperature,Humidity:""===e.Humidity?"0":e.Humidity,WindSpeed:""===e["Wind Speed"]?"0":e["Wind Speed"],Evaporation:""===e.Evaporation?"0":e.Evaporation,SolarRadiation:""===e["Solar Radiation"]?"0":e["Solar Radiation"]}}),c=l.filter(e=>{let t=new Date(e.Date);return t.getMonth()===r.getMonth()&&t.getFullYear()===r.getFullYear()}),f=l.filter(e=>new Date(e.Date).getFullYear()===r.getFullYear());return{data:l,thisYearData:f,thisMonthData:c,summary:s.map(e=>({title:e.label,thisMonth:"sum"==e.method?"".concat(m(c,e.label)," ").concat(e.units):"".concat(d(c,e.label)," ").concat(e.units),thisYear:"sum"==e.method?"".concat(m(f,e.label)," ").concat(e.units):"".concat(d(f,e.label)," ").concat(e.units)}))}},u=async()=>{let e=await i(n("1Q9VDO6nWZvhChAvBqRiAQUmH0-8fxOXdsJbC5ma33HQ"));return o().parse(e,{header:!0}).data},p=async()=>{let e=await i(n("1qmfcuwPVUiWMPiTbf7agQItGaihYZy0hth4nXTQf0vk"));return o().parse(e,{header:!0}).data},h=async()=>{let e=await i(n("1LC1-mhA2rsW7mQwbo8X_V-bbSgaxmevf_iZ6JtDfO00"));return o().parse(e,{header:!0}).data},g=async()=>{let e=await i(n("1PBUcN9zDawYCztE0nwgvXI4RCEX44xD0WAlS1z_EP1s"));return o().parse(e,{header:!0}).data},y=async()=>{let e=await i(n("1SQCQVknUuG17P4dTUkuWZXNR0VSoYtf6rpPGBcxSIbw"));return o().parse(e,{header:!0}).data},w=async()=>{let e=await i(n("17QF15uBDXh6Y_B9EC-Xwg1gl93cXIiFV0feLRlqQL1A"));return o().parse(e,{header:!0}).data},x=async()=>{let e=await i(n("10RTHFDR2ppkU8pLXqgZLF4bUzVELT1ZFysOFEdgXa5Q"));return o().parse(e,{header:!0}).data},b=async()=>{let e=await i(n("1KOdQyI9gDGfcOf34gxMBV8Tm9XH0VW4u-mIQXwIyMXo"));return o().parse(e,{header:!0}).data},v=async()=>{let e=await i(n("1X1E3_NLsS1zJd47EXF2pjNcOIqWqvJu2q-V7wDH_Sg0"));return o().parse(e,{header:!0}).data},S=async()=>{let e=await i(n("1F4Jn7QcRKVpw5RKVn8v1GmSPI-Hq2mkZ7hF0E4ID3Eg"));return o().parse(e,{header:!0}).data},E=async e=>{let t=await i(n(e));return o().parse(t,{header:!0}).data},_=async()=>{let e=await i(n("1QxSC3gOOpP0KFmxSwCtHo7-AiGarcGVM2s42tum_3VI"));return o().parse(e,{header:!0}).data}},23976:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var r=a(95155),o=a(51202),s=a(1288),n=a(84059),i=a(97088),l=a(88805),c=a(42740),d=a(12115),m=a(25429),f=a(65406),u=a(32492),p=a(41297),h=a(50366),g=a(50174);let y=e=>{let{imgURL:t,title:a,authors:o,edition:i,link:l,pdf:c}=e,d=(0,h.useMantineTheme)();return(0,r.jsxs)(m.Card,{shadow:"sm",radius:"lg",p:"lg",style:{background:(0,g.getGradient)({deg:130,from:"primaryBlue.4",to:"secondaryBlue.3"},d),color:"#FFFFFF",border:"1px solid #4D95EA",boxShadow:"0px 0px 25px 0px rgba(77, 149, 234, 0.50)"},className:"hoverBtn",mx:"md",children:[(0,r.jsx)(f.Image,{src:t,alt:a,width:"100%",style:{aspectRatio:1.79},radius:"lg",fit:"cover"}),(0,r.jsxs)(s.Stack,{gap:"md",align:"center",mt:"1em",children:[(0,r.jsx)(n.Title,{ta:"center",fw:700,size:"20px",c:"white",children:a}),(0,r.jsx)(u.Text,{ta:"center",fw:700,size:"16px",c:"white",children:o}),(0,r.jsx)(u.Text,{ta:"center",fw:400,size:"12px",c:"white",children:i}),(0,r.jsx)(p.Button,{style:{boxShadow:"0px 0px 10px 0px rgba(46, 129, 243, 0.25)",border:"1px solid #2C5B90"},className:"hoverBtn",component:"a",href:l,target:"_blank",radius:"xl",fullWidth:!0,variant:"gradient",gradient:{from:"#3688E7",to:"#73A0D6",deg:90},children:"View Link"}),(0,r.jsx)(p.Button,{style:{boxShadow:"0px 0px 10px 0px rgba(46, 129, 243, 0.25)",border:"1px solid #2C5B90"},className:"hoverBtn",component:"a",href:c,target:"_blank",radius:"xl",fullWidth:!0,variant:"gradient",gradient:{from:"#3688E7",to:"#73A0D6",deg:90},children:"View PDF"})]})]})};var w=a(66910);let x=e=>e.map(e=>({imgURL:0!=e["Publication Image URL"].length?e["Publication Image URL"]:"https://eu.ui-avatars.com/api/?name=".concat(e.Edition[0],"&size=175"),title:e.Title,authors:e.Authors,edition:e.Edition,link:e.Link,pdf:e.PDF,year:e["Year / Type"]}));function b(){let[e,t]=d.useState(null);return d.useEffect(()=>{(async function(){t(x(await (0,w.SI)()))})()},[]),(0,r.jsx)(o.Container,{size:"lg",mih:"100vh",children:(0,r.jsxs)(s.Stack,{align:"center",my:"2em",children:[(0,r.jsx)(n.Title,{c:"primaryBlue.9",size:"36px",fw:700,order:1,children:"Publications"}),e?Array.from(new Set(e.map(e=>e.year))).map((t,a)=>(0,r.jsxs)(s.Stack,{align:"center",my:"2em",children:[(0,r.jsx)(n.Title,{c:"primaryBlue.9",size:"36px",fw:700,order:1,children:t}),(0,r.jsx)(i.SimpleGrid,{cols:{base:1,md:2,lg:3},mt:"lg",w:"100%",verticalSpacing:"2em",children:e.filter(e=>e.year==t).map((e,t)=>(0,r.jsx)(l.Center,{children:(0,r.jsx)(y,{imgURL:e.imgURL,title:e.title,authors:e.authors,edition:e.edition,link:e.link,pdf:e.pdf})},t))})]},a)):(0,r.jsx)(l.Center,{children:(0,r.jsx)(c.Loader,{})})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[321,440,42,102,441,517,358],()=>t(18642)),_N_E=e.O()}]);