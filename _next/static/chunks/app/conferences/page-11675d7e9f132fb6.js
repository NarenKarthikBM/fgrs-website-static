(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{14732:(e,a,t)=>{Promise.resolve().then(t.bind(t,85600))},85600:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>w});var o=t(95155),r=t(50366),n=t(51202),l=t(1288),s=t(84059),i=t(25429),c=t(50174),d=t(70189),u=t(32492),f=t(45177),m=t(88805),h=t(42740),p=t(12115),y=t(66910);let g=e=>e.map(e=>({title:e.Title,authors:e.Authors,year:e["Year / Type"],edition:e.Edition,pdfLink:e.PDF}));function w(){let e=(0,r.useMantineTheme)(),[a,t]=p.useState(null);return p.useEffect(()=>{(async function(){let e=await (0,y.K5)();console.log(e),t(g(e))})()},[]),(0,o.jsx)(n.Container,{size:"lg",mih:"100vh",children:(0,o.jsxs)(l.Stack,{align:"center",my:"2em",children:[(0,o.jsx)(s.Title,{c:"primaryBlue.9",size:"36px",fw:700,order:1,children:"Conferences"}),a?Array.from(new Set(a.map(e=>e.year))).map((t,r)=>(0,o.jsx)(i.Card,{shadow:"xs",radius:"lg",p:"2em",my:"2em",w:"100%",style:{background:(0,c.getGradient)({deg:130,from:"secondaryBlue.1",to:"secondaryBlue.2"},e),color:"#FFFFFF",border:"1px solid #4D95EA",boxShadow:"0px 0px 25px 0px rgba(77, 149, 234, 0.50)"},children:(0,o.jsxs)(l.Stack,{align:"center",my:"2em",children:[(0,o.jsx)(s.Title,{c:"primaryBlue.9",size:"36px",fw:700,order:1,children:t}),(0,o.jsx)(l.Stack,{align:"center",my:"1em",gap:"xs",children:a.filter(e=>e.year==t).map((e,r)=>[(0,o.jsx)(d.Group,{align:"center",gap:"xs",children:(0,o.jsxs)(u.Text,{c:"primaryBlue.9",size:"lg",fw:500,children:[(0,o.jsx)("b",{children:e.authors})," &quote;",e.title,"&quote; (",(0,o.jsx)("b",{children:e.edition}),")"," ",(0,o.jsx)("a",{href:e.pdfLink,target:"_blank",rel:"noopener noreferrer",children:"[PDF]"})]},r)},r),(0,o.jsx)(f.Divider,{w:"100%",color:"primaryBlue.9",hidden:r==a.filter(e=>e.year==t).length-1},"Divider".concat(r))])})]})},r)):(0,o.jsx)(m.Center,{children:(0,o.jsx)(h.Loader,{})})]})})}},66910:(e,a,t)=>{"use strict";t.d(a,{Ri:()=>n,NE:()=>D,d1:()=>i,cL:()=>g,K5:()=>w,F$:()=>b,zG:()=>h,ON:()=>F,vp:()=>S,ar:()=>m,v5:()=>f,w9:()=>x,TB:()=>p,SI:()=>y,JJ:()=>v});var o=t(29159),r=t.n(o);let n=[{label:"Precipitation",method:"sum",units:"mm",summary_conversions:1,gradient_stops:[{offset:100,color:"blue.1"},{offset:80,color:"blue.3"},{offset:60,color:"cyan.4"},{offset:40,color:"teal.5"},{offset:20,color:"green.6"},{offset:0,color:"navy.7"}],domain:[-5,250],curveType:"monotone"},{label:"Temperature",method:"mean",units:"\xb0C",summary_conversions:1,gradient_stops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.2"}],domain:[0,50]},{label:"Humidity",method:"mean",units:"%",summary_conversions:1,gradient_stops:[{offset:0,color:"gray.6"},{offset:20,color:"indigo.5"},{offset:40,color:"blue.2"},{offset:60,color:"cyan.4"},{offset:80,color:"lime.3"},{offset:100,color:"yellow.2"}],domain:[0,100]},{label:"Wind Speed",method:"mean",units:"m/s",summary_conversions:1,gradient_stops:[{offset:0,color:"purple.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:60,color:"lime.4"},{offset:80,color:"cyan.4"},{offset:100,color:"blue.2"}],domain:[0,6]},{label:"Evaporation",method:"sum",units:"mm",summary_conversions:1,gradient_stops:[{offset:0,color:"red.7"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:60,color:"lime.4"},{offset:80,color:"teal.3"},{offset:100,color:"blue.1"}],domain:[0,20]},{label:"Solar Radiation",method:"sum",units:"kW/m\xb2",summary_conversions:.001,gradient_stops:[{offset:0,color:"red.8"},{offset:20,color:"red.6"},{offset:40,color:"orange.5"},{offset:60,color:"yellow.4"},{offset:80,color:"cyan.3"},{offset:100,color:"blue.1"}],domain:[0,1e3]}],l=e=>"https://docs.google.com/spreadsheets/d/".concat(e,"/export?format=csv"),s=async e=>{let a="";try{let t=await fetch(e);200===t.status?a=await t.text():console.log("Error code ".concat(t.json()))}catch(e){console.log(e)}return a},i=async()=>{let e=await s(l("1M0SwA724iOsYpOhrRG29OLcmmYLDJH0z53NJ5IvhBys")),a=r().parse(e,{header:!0}),t={};return a.data.forEach(e=>{t[e.Key]=e.Value}),t},c=e=>e.summary_conversions?e.summary_conversions:1,d=(e,a)=>Math.round(u(e,a)/e.length*10)/10,u=(e,a)=>{let t=n.find(e=>e.label===a),o=void 0!=t?c(t):1,r=0;return e.forEach(e=>{""===e[a]||void 0===e[a]||isNaN(Number(e[a]))||(r+=parseFloat(e[a])*o)}),Math.round(10*r)/10},f=async e=>{let a=await s(l("IISER"==e?"1RxP8XakApUISJeT1rucSnE8nzO3B--mo9XgUX9GMkN8":"11ao5WArlgDzg_VNYBmuyA4jElQ7hBIfvYaauO2gJ0PE")),t=r().parse(a,{header:!0}),o=new Date,i=t.data.slice(2).map(e=>{let[a,t,o]=e.Date.trim().split("/");return{...e,Date:"".concat(o,"-").concat(t,"-").concat(a),Precipitation:""===e.Precipitation?"0":e.Precipitation,Temperature:""===e.Temperature?"0":e.Temperature,Humidity:""===e.Humidity?"0":e.Humidity,WindSpeed:""===e["Wind Speed"]?"0":e["Wind Speed"],Evaporation:""===e.Evaporation?"0":e.Evaporation,SolarRadiation:""===e["Solar Radiation"]?"0":e["Solar Radiation"]}}),c=i.map(e=>new Date(e.Date).getTime()),f=new Date(Math.max.apply(null,c)),m=i.filter(e=>{let a=new Date(e.Date);return a.getMonth()===f.getMonth()&&a.getFullYear()===f.getFullYear()}),h=i.filter(e=>{let a=new Date(e.Date);return a.getMonth()===o.getMonth()&&a.getFullYear()===o.getFullYear()}),p=i.filter(e=>new Date(e.Date).getFullYear()===o.getFullYear()),y=i.filter(e=>new Date(e.Date).getFullYear()===o.getFullYear()-1);return{data:i,lastYearData:y,lastMonthData:m,thisYearData:p,thisMonthData:h,summary:n.map(e=>({title:e.label,lastMonthLabel:f.toLocaleString("default",{month:"short",year:"numeric"}),lastMonth:"sum"==e.method?"".concat(u(m,e.label)," ").concat(e.units):"".concat(d(m,e.label)," ").concat(e.units),thisMonth:"sum"==e.method?"".concat(u(h,e.label)," ").concat(e.units):"".concat(d(h,e.label)," ").concat(e.units),thisYear:"sum"==e.method?"".concat(u(p,e.label)," ").concat(e.units):"".concat(d(p,e.label)," ").concat(e.units),lastYear:"sum"==e.method?"".concat(u(y,e.label)," ").concat(e.units):"".concat(d(y,e.label)," ").concat(e.units),lastYearLabel:(o.getFullYear()-1).toString()}))}},m=async()=>{let e=await s(l("1Q9VDO6nWZvhChAvBqRiAQUmH0-8fxOXdsJbC5ma33HQ"));return r().parse(e,{header:!0}).data},h=async()=>{let e=await s(l("1qmfcuwPVUiWMPiTbf7agQItGaihYZy0hth4nXTQf0vk"));return r().parse(e,{header:!0}).data},p=async()=>{let e=await s(l("1LC1-mhA2rsW7mQwbo8X_V-bbSgaxmevf_iZ6JtDfO00"));return r().parse(e,{header:!0}).data},y=async()=>{let e=await s(l("1PBUcN9zDawYCztE0nwgvXI4RCEX44xD0WAlS1z_EP1s"));return r().parse(e,{header:!0}).data},g=async()=>{let e=await s(l("1SQCQVknUuG17P4dTUkuWZXNR0VSoYtf6rpPGBcxSIbw"));return r().parse(e,{header:!0}).data},w=async()=>{let e=await s(l("17QF15uBDXh6Y_B9EC-Xwg1gl93cXIiFV0feLRlqQL1A"));return r().parse(e,{header:!0}).data},b=async()=>{let e=await s(l("10RTHFDR2ppkU8pLXqgZLF4bUzVELT1ZFysOFEdgXa5Q"));return r().parse(e,{header:!0}).data},x=async()=>{let e=await s(l("1KOdQyI9gDGfcOf34gxMBV8Tm9XH0VW4u-mIQXwIyMXo"));return r().parse(e,{header:!0}).data},v=async()=>{let e=await s(l("1X1E3_NLsS1zJd47EXF2pjNcOIqWqvJu2q-V7wDH_Sg0"));return r().parse(e,{header:!0}).data},D=async()=>{let e=await s(l("1F4Jn7QcRKVpw5RKVn8v1GmSPI-Hq2mkZ7hF0E4ID3Eg"));return r().parse(e,{header:!0}).data},S=async e=>{let a=await s(l(e));return r().parse(a,{header:!0}).data},F=async()=>{let e=await s(l("1QxSC3gOOpP0KFmxSwCtHo7-AiGarcGVM2s42tum_3VI"));return r().parse(e,{header:!0}).data}}},e=>{var a=a=>e(e.s=a);e.O(0,[321,440,411,441,517,358],()=>a(14732)),_N_E=e.O()}]);