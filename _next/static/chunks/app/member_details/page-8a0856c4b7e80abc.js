(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{6938:(e,t,a)=>{Promise.resolve().then(a.bind(a,56354))},66910:(e,t,a)=>{"use strict";a.d(t,{Ri:()=>n,NE:()=>b,d1:()=>i,cL:()=>g,K5:()=>x,F$:()=>w,zG:()=>f,ON:()=>S,vp:()=>j,ar:()=>h,v5:()=>u,w9:()=>k,TB:()=>p,SI:()=>y,JJ:()=>v});var r=a(29159),o=a.n(r);let n=[{label:"Precipitation",method:"sum",units:"mm",summary_conversions:1,gradient_stops:[{offset:100,color:"blue.1"},{offset:80,color:"blue.3"},{offset:60,color:"cyan.4"},{offset:40,color:"teal.5"},{offset:20,color:"green.6"},{offset:0,color:"navy.7"}],domain:[-5,250],curveType:"monotone"},{label:"Temperature",method:"mean",units:"\xb0C",summary_conversions:1,gradient_stops:[{offset:0,color:"red.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:70,color:"lime.5"},{offset:80,color:"cyan.5"},{offset:100,color:"blue.2"}],domain:[0,50]},{label:"Humidity",method:"mean",units:"%",summary_conversions:1,gradient_stops:[{offset:0,color:"gray.6"},{offset:20,color:"indigo.5"},{offset:40,color:"blue.2"},{offset:60,color:"cyan.4"},{offset:80,color:"lime.3"},{offset:100,color:"yellow.2"}],domain:[0,100]},{label:"Wind Speed",method:"mean",units:"m/s",summary_conversions:1,gradient_stops:[{offset:0,color:"purple.6"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:60,color:"lime.4"},{offset:80,color:"cyan.4"},{offset:100,color:"blue.2"}],domain:[0,6]},{label:"Evaporation",method:"sum",units:"mm",summary_conversions:1,gradient_stops:[{offset:0,color:"red.7"},{offset:20,color:"orange.6"},{offset:40,color:"yellow.5"},{offset:60,color:"lime.4"},{offset:80,color:"teal.3"},{offset:100,color:"blue.1"}],domain:[0,20]},{label:"Solar Radiation",method:"sum",units:"kW/m\xb2",summary_conversions:.001,gradient_stops:[{offset:0,color:"red.8"},{offset:20,color:"red.6"},{offset:40,color:"orange.5"},{offset:60,color:"yellow.4"},{offset:80,color:"cyan.3"},{offset:100,color:"blue.1"}],domain:[0,1e3]}],s=e=>"https://docs.google.com/spreadsheets/d/".concat(e,"/export?format=csv"),l=async e=>{let t="";try{let a=await fetch(e);200===a.status?t=await a.text():console.log("Error code ".concat(a.json()))}catch(e){console.log(e)}return t},i=async()=>{let e=await l(s("1M0SwA724iOsYpOhrRG29OLcmmYLDJH0z53NJ5IvhBys")),t=o().parse(e,{header:!0}),a={};return t.data.forEach(e=>{a[e.Key]=e.Value}),a},c=e=>e.summary_conversions?e.summary_conversions:1,m=(e,t)=>Math.round(d(e,t)/e.length*10)/10,d=(e,t)=>{let a=n.find(e=>e.label===t),r=void 0!=a?c(a):1,o=0;return e.forEach(e=>{""===e[t]||void 0===e[t]||isNaN(Number(e[t]))||(o+=parseFloat(e[t])*r)}),Math.round(10*o)/10},u=async e=>{let t=await l(s("IISER"==e?"1RxP8XakApUISJeT1rucSnE8nzO3B--mo9XgUX9GMkN8":"11ao5WArlgDzg_VNYBmuyA4jElQ7hBIfvYaauO2gJ0PE")),a=o().parse(t,{header:!0}),r=new Date,i=a.data.slice(2).map(e=>{let[t,a,r]=e.Date.trim().split("/");return{...e,Date:"".concat(r,"-").concat(a,"-").concat(t),Precipitation:""===e.Precipitation?"0":e.Precipitation,Temperature:""===e.Temperature?"0":e.Temperature,Humidity:""===e.Humidity?"0":e.Humidity,WindSpeed:""===e["Wind Speed"]?"0":e["Wind Speed"],Evaporation:""===e.Evaporation?"0":e.Evaporation,SolarRadiation:""===e["Solar Radiation"]?"0":e["Solar Radiation"]}}),c=i.map(e=>new Date(e.Date).getTime()),u=new Date(Math.max.apply(null,c)),h=i.filter(e=>{let t=new Date(e.Date);return t.getMonth()===u.getMonth()&&t.getFullYear()===u.getFullYear()}),f=i.filter(e=>{let t=new Date(e.Date);return t.getMonth()===r.getMonth()&&t.getFullYear()===r.getFullYear()}),p=i.filter(e=>new Date(e.Date).getFullYear()===r.getFullYear()),y=i.filter(e=>new Date(e.Date).getFullYear()===r.getFullYear()-1);return{data:i,lastYearData:y,lastMonthData:h,thisYearData:p,thisMonthData:f,summary:n.map(e=>({title:e.label,lastMonthLabel:u.toLocaleString("default",{month:"short",year:"numeric"}),lastMonth:"sum"==e.method?"".concat(d(h,e.label)," ").concat(e.units):"".concat(m(h,e.label)," ").concat(e.units),thisMonth:"sum"==e.method?"".concat(d(f,e.label)," ").concat(e.units):"".concat(m(f,e.label)," ").concat(e.units),thisYear:"sum"==e.method?"".concat(d(p,e.label)," ").concat(e.units):"".concat(m(p,e.label)," ").concat(e.units),lastYear:"sum"==e.method?"".concat(d(y,e.label)," ").concat(e.units):"".concat(m(y,e.label)," ").concat(e.units),lastYearLabel:(r.getFullYear()-1).toString()}))}},h=async()=>{let e=await l(s("1Q9VDO6nWZvhChAvBqRiAQUmH0-8fxOXdsJbC5ma33HQ"));return o().parse(e,{header:!0}).data},f=async()=>{let e=await l(s("1qmfcuwPVUiWMPiTbf7agQItGaihYZy0hth4nXTQf0vk"));return o().parse(e,{header:!0}).data},p=async()=>{let e=await l(s("1LC1-mhA2rsW7mQwbo8X_V-bbSgaxmevf_iZ6JtDfO00"));return o().parse(e,{header:!0}).data},y=async()=>{let e=await l(s("1PBUcN9zDawYCztE0nwgvXI4RCEX44xD0WAlS1z_EP1s"));return o().parse(e,{header:!0}).data},g=async()=>{let e=await l(s("1SQCQVknUuG17P4dTUkuWZXNR0VSoYtf6rpPGBcxSIbw"));return o().parse(e,{header:!0}).data},x=async()=>{let e=await l(s("17QF15uBDXh6Y_B9EC-Xwg1gl93cXIiFV0feLRlqQL1A"));return o().parse(e,{header:!0}).data},w=async()=>{let e=await l(s("10RTHFDR2ppkU8pLXqgZLF4bUzVELT1ZFysOFEdgXa5Q"));return o().parse(e,{header:!0}).data},k=async()=>{let e=await l(s("1KOdQyI9gDGfcOf34gxMBV8Tm9XH0VW4u-mIQXwIyMXo"));return o().parse(e,{header:!0}).data},v=async()=>{let e=await l(s("1X1E3_NLsS1zJd47EXF2pjNcOIqWqvJu2q-V7wDH_Sg0"));return o().parse(e,{header:!0}).data},b=async()=>{let e=await l(s("1F4Jn7QcRKVpw5RKVn8v1GmSPI-Hq2mkZ7hF0E4ID3Eg"));return o().parse(e,{header:!0}).data},j=async e=>{let t=await l(s(e));return o().parse(t,{header:!0}).data},S=async()=>{let e=await l(s("1QxSC3gOOpP0KFmxSwCtHo7-AiGarcGVM2s42tum_3VI"));return o().parse(e,{header:!0}).data}},56354:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>L});var r=a(95155),o=a(50366),n=a(51202),s=a(1288),l=a(84059),i=a(88805),c=a(42740),m=a(25429),d=a(50174),u=a(70189),h=a(65406),f=a(49299),p=a(80042),y=a(32492),g=a(45177),x=a(32173),w=a(68239),k=a(34234),v=a(25281),b=a(83187),j=a(12115),S=a(66910);let D=e=>{let t={emailID:"",twitterLink:"",linkedinLink:"",facebookLink:"",achievements:[],conferenceWorkshopSchool:[]};return e.forEach(e=>{"Email ID"==e.Key&&(t.emailID=e.Values),"Twitter Link"==e.Key&&(t.twitterLink=e.Values),"LinkedIn Link"==e.Key&&(t.linkedinLink=e.Values),"Facebook Link"==e.Key&&(t.facebookLink=e.Values),"Achievements"==e.Key&&(t.achievements=Object.values(e).filter(e=>0!=e.length&&"Achievements"!=e)),"Conference / Workshop / School"==e.Key&&(t.conferenceWorkshopSchool=Object.values(e).filter(e=>0!=e.length&&"Conference / Workshop / School"!=e).map(e=>{let t=e.match(/\[(https?:\/\/[^\]]+)\]/),a=t?t[1]:"";return{text:e.replace(/\[https?:\/\/[^\]]+\]/,"").trim(),url:a}}))}),t},I=e=>e.map(e=>({imgURL:0!=e["Image URL"].length?e["Image URL"]:"https://eu.ui-avatars.com/api/?name=".concat(e.Name.split(" ").join("+"),"&size=175"),name:e.Name,position:e.Position,description:e.Description,detailsSheetID:e["Details Sheet"]}));function L(){let e=(0,o.useMantineTheme)(),[t,a]=j.useState(null),[L,B]=j.useState(void 0),[E,_]=j.useState(null);return(j.useEffect(()=>{{let e=new URLSearchParams(window.location.search),t={};for(let[a,r]of e.entries())t[a]=r;a(e.get("name"))}},[]),j.useEffect(()=>{(async function(){let e=await (0,S.ar)();if(t){let a=I(e).filter(e=>e.name===decodeURIComponent(t))[0]||null;B(a),_(D(await (0,S.vp)(a.detailsSheetID)))}})()},[t]),L)?void 0==L?(0,r.jsx)(n.Container,{size:"lg",mih:"100vh",children:(0,r.jsx)(i.Center,{children:(0,r.jsx)(c.Loader,{})})}):(0,r.jsx)(n.Container,{size:"lg",mih:"100vh",children:(0,r.jsx)(s.Stack,{align:"center",my:"2em",children:(0,r.jsx)(m.Card,{shadow:"xs",radius:"lg",p:"2em",my:"2em",w:"100%",maw:"900px",style:{background:(0,d.getGradient)({deg:130,from:"secondaryBlue.1",to:"secondaryBlue.2"},e),color:"#FFFFFF",border:"1px solid #4D95EA",boxShadow:"0px 0px 25px 0px rgba(77, 149, 234, 0.50)"},children:(0,r.jsxs)(u.Group,{justify:"space-evenly",children:[(0,r.jsxs)(s.Stack,{align:"center",maw:"200px",children:[(0,r.jsx)(h.Image,{src:L.imgURL,alt:"Dr. Kumar Gaurav",w:175,h:175,radius:"lg"}),(0,r.jsx)(l.Title,{ta:"center",c:"primaryBlue.9",size:"24px",fw:700,order:1,children:L.name}),(0,r.jsx)(l.Title,{ta:"center",c:"primaryBlue.7",size:"16px",fw:700,order:2,children:L.position}),E?(0,r.jsxs)(u.Group,{gap:0,className:"footerSocial",justify:"flex-end",wrap:"nowrap",children:[E.emailID&&(0,r.jsx)(f.ActionIcon,{size:"lg",color:"primaryBlue.9",variant:"subtle",component:"a",href:"mailto:".concat(E.emailID),children:(0,r.jsx)(w.A,{size:18,stroke:2})}),E.twitterLink&&(0,r.jsx)(f.ActionIcon,{size:"lg",color:"primaryBlue.9",variant:"subtle",component:"a",href:E.twitterLink,children:(0,r.jsx)(k.A,{size:18,stroke:2})}),E.linkedinLink&&(0,r.jsx)(f.ActionIcon,{size:"lg",color:"primaryBlue.9",variant:"subtle",component:"a",href:E.linkedinLink,children:(0,r.jsx)(v.A,{size:18,stroke:2})}),E.facebookLink&&(0,r.jsx)(f.ActionIcon,{size:"lg",color:"primaryBlue.9",variant:"subtle",component:"a",href:E.facebookLink,children:(0,r.jsx)(b.A,{size:18,stroke:2})})]}):(0,r.jsxs)(s.Stack,{children:[(0,r.jsx)(p.Skeleton,{c:"dark",height:25,width:"100%"}),(0,r.jsx)(p.Skeleton,{c:"dark",height:25,width:"100%"}),(0,r.jsx)(p.Skeleton,{c:"dark",height:25,width:"100%"})]})]}),(0,r.jsxs)(s.Stack,{gap:"xs",maw:"400px",children:[(0,r.jsx)(l.Title,{c:"primaryBlue.7",size:"24px",fw:700,order:2,children:"About Me"}),(0,r.jsx)(y.Text,{fw:700,c:"primaryBlue.9",children:L.description}),(0,r.jsx)(g.Divider,{color:"primaryBlue.9",my:"md"}),(0,r.jsx)(l.Title,{c:"primaryBlue.7",size:"24px",fw:700,order:2,children:"Achievements"}),E?(0,r.jsx)(y.Text,{fw:700,c:"primaryBlue.9",children:E.achievements.join(", ")}):(0,r.jsx)(p.Skeleton,{c:"dark",height:25,width:"100%"}),(0,r.jsx)(g.Divider,{color:"primaryBlue.9",my:"md"}),(0,r.jsx)(l.Title,{c:"primaryBlue.7",size:"24px",fw:700,order:2,children:"Conference / Workshop / School"}),(0,r.jsx)(x.List,{spacing:"md",children:E?E.conferenceWorkshopSchool.map((t,a)=>(0,r.jsx)(x.List.Item,{c:"primaryBlue.9",children:(0,r.jsxs)(y.Text,{fw:700,c:"primaryBlue.9",children:[t.text," ",(0,r.jsx)("span",{style:{color:e.colors.secondaryBlue[6],textDecoration:"underline"},children:(0,r.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:"(Link)"})})]},a)},a)):(0,r.jsx)(x.List.Item,{children:(0,r.jsx)(p.Skeleton,{c:"dark",height:25,width:"100%"})})})]})]})})})}):(0,r.jsx)(n.Container,{size:"lg",mih:"100vh",children:(0,r.jsx)(s.Stack,{align:"center",my:"2em",children:(0,r.jsx)(l.Title,{c:"primaryBlue.9",size:"36px",fw:700,order:1})})})}},88805:(e,t,a)=>{"use strict";a.d(t,{Center:()=>m});var r=a(95155);a(12115);var o=a(31634),n=a(2094),s=a(71419),l=a(70365),i={root:"m_4451eb3a"};let c={},m=(0,l.polymorphicFactory)((e,t)=>{let a=(0,o.useProps)("Center",c,e),{classNames:l,className:m,style:d,styles:u,unstyled:h,vars:f,inline:p,mod:y,...g}=a,x=(0,n.useStyles)({name:"Center",props:a,classes:i,className:m,style:d,classNames:l,styles:u,unstyled:h,vars:f});return(0,r.jsx)(s.Box,{ref:t,mod:[{inline:p},y],...x("root"),...g})});m.classes=i,m.displayName="@mantine/core/Center"},65406:(e,t,a)=>{"use strict";a.d(t,{Image:()=>f});var r=a(95155),o=a(12115),n=a(14370),s=a(19108),l=a(31634),i=a(2094),c=a(71419),m=a(70365),d={root:"m_9e117634"};let u={},h=(0,s.createVarsResolver)((e,t)=>{let{radius:a,fit:r}=t;return{root:{"--image-radius":void 0===a?void 0:(0,n.getRadius)(a),"--image-object-fit":r}}}),f=(0,m.polymorphicFactory)((e,t)=>{let a=(0,l.useProps)("Image",u,e),{classNames:n,className:s,style:m,styles:f,unstyled:p,vars:y,onError:g,src:x,radius:w,fit:k,fallbackSrc:v,mod:b,...j}=a,[S,D]=(0,o.useState)(!x);(0,o.useEffect)(()=>D(!x),[x]);let I=(0,i.useStyles)({name:"Image",classes:d,props:a,className:s,style:m,classNames:n,styles:f,unstyled:p,vars:y,varsResolver:h});return S&&v?(0,r.jsx)(c.Box,{component:"img",ref:t,src:v,...I("root"),onError:g,mod:["fallback",b],...j}):(0,r.jsx)(c.Box,{component:"img",ref:t,...I("root"),src:x,onError:e=>{null==g||g(e),D(!0)},mod:b,...j})});f.classes=d,f.displayName="@mantine/core/Image"}},e=>{var t=t=>e(e.s=t);e.O(0,[321,440,278,248,441,517,358],()=>t(6938)),_N_E=e.O()}]);