"use strict";var H=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var me=Object.getOwnPropertyNames;var le=Object.prototype.hasOwnProperty;var ce=(e,t)=>{for(var n in t)H(e,n,{get:t[n],enumerable:!0})},ue=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of me(t))!le.call(e,a)&&a!==n&&H(e,a,{get:()=>t[a],enumerable:!(s=ae(t,a))||s.enumerable});return e};var de=e=>ue(H({},"__esModule",{value:!0}),e);var fe={};ce(fe,{default:()=>se});module.exports=de(fe);var i=require("@raycast/api"),ie=require("react");var R=require("react");var l=require("@raycast/api"),A=require("child_process"),Q=require("crypto"),u=require("fs"),z=require("path");var I=e=>{let t=Math.floor(e/3600),n=String(Math.floor(e%3600/60)).padStart(2,"0"),s=String(Math.floor(e%60)).padStart(2,"0");return`${t===0?"":t+":"}${n}:${s}`},G=e=>{let t=new Date(e),n=[t.getFullYear().toString(),t.getMonth().toString().padStart(2,"0"),t.getDate().toString().padStart(2,"0")],s=[t.getHours(),t.getMinutes(),t.getSeconds()].map(f=>f.toString().padStart(2,"0")),a=n.join("-"),p=s.join(":");return`${a} ${p}`},j=e=>(e.d1=e.d1=="----"?void 0:e.d1,e.d2=e.d2=="----"?void 0:e.d2,Math.round((e.d1?new Date(e.d1):new Date).getTime()-(e.d2?new Date(e.d2):new Date).getTime())/1e3);var w=l.environment.supportPath+"/customTimers.json",we=l.environment.supportPath+"/defaultPresetVisibles.json",M=(e=!1)=>{let t=(0,l.getPreferenceValues)();if(parseFloat(t.volumeSetting)>5){let n="\u26A0\uFE0F Timer alert volume should not be louder than 5 (it can get quite loud!)";return e?(0,l.showHUD)(n):(0,l.showToast)({style:l.Toast.Style.Failure,title:n}),!1}return!0};async function F(e,t="Untitled",n="default"){(0,l.popToRoot)();let a=(l.environment.supportPath+"/"+new Date().toISOString()+"---"+e+".timer").replace(/:/g,"__");(0,u.writeFileSync)(a,t);let p=(0,l.getPreferenceValues)(),f=`${l.environment.assetsPath+"/"+(n==="default"?p.selectedSound:n)}`,h=[`sleep ${e}`];h.push(`if [ -f "${a}" ]; then osascript -e 'display notification "Timer \\"${t}\\" complete" with title "Ding!"'`);let N=`afplay "${f}" --volume ${p.volumeSetting.replace(",",".")}`;if(p.selectedSound==="speak_timer_name"?h.push(`say "${t}"`):h.push(N),p.ringContinuously){let g=`${a}`.replace(".timer",".dismiss");(0,u.writeFileSync)(g,".dismiss file for Timers"),h.push(`while [ -f "${g}" ]; do ${N}; done`)}h.push(`rm "${a}"; else echo "Timer deleted"; fi`),(0,A.exec)(h.join(" && "),(g,P)=>{if(g){console.log(`error: ${g.message}`);return}if(P){console.log(`stderr: ${P}`);return}}),await(0,l.showHUD)(`Timer "${t}" started for ${I(e)}! \u{1F389}`)}function K(e){let t=l.environment.supportPath+"/"+e,n=`if [ -f "${t}" ]; then rm "${t}"; else echo "Timer deleted"; fi`,s=t.replace(".timer",".dismiss"),a=`if [ -f "${s}" ]; then rm "${s}"; else echo "Timer deleted"; fi`;(0,A.execSync)(n),(0,A.execSync)(a)}function X(){let e=[];return(0,u.readdirSync)(l.environment.supportPath).forEach(n=>{if((0,z.extname)(n)==".timer"){let s={name:"",secondsSet:-99,timeLeft:-99,originalFile:n,timeEnds:new Date};s.name=(0,u.readFileSync)(l.environment.supportPath+"/"+n).toString();let a=n.split("---");s.secondsSet=Number(a[1].split(".")[0]);let p=a[0].replace(/__/g,":");s.timeLeft=Math.max(0,Math.round(s.secondsSet-j({d2:p}))),s.timeEnds=new Date(p),s.timeEnds.setSeconds(s.timeEnds.getSeconds()+s.secondsSet),e.push(s)}}),e.sort((n,s)=>n.timeLeft-s.timeLeft),e}function Z(e,t){let n=l.environment.supportPath+"/"+e;(0,u.writeFileSync)(n,t)}function C(){(0,u.existsSync)(w)||(0,u.writeFileSync)(w,JSON.stringify({}))}function L(e){C();let t=JSON.parse((0,u.readFileSync)(w,"utf8"));t[(0,Q.randomUUID)()]=e,(0,u.writeFileSync)(w,JSON.stringify(t))}function J(){C();let e=JSON.parse((0,u.readFileSync)(w,"utf8"));return Object.fromEntries(Object.entries(e).map(([t,n])=>n.showInMenuBar===void 0?[t,{...n,showInMenuBar:!0}]:[t,n]))}function ee(e,t){C();let n=JSON.parse((0,u.readFileSync)(w,"utf8"));n[e].name=t,(0,u.writeFileSync)(w,JSON.stringify(n))}function te(e){C();let t=JSON.parse((0,u.readFileSync)(w,"utf8"));delete t[e],(0,u.writeFileSync)(w,JSON.stringify(t))}function ne(e){C();let t=JSON.parse((0,u.readFileSync)(w,"utf8")),n=t[e].showInMenuBar;t[e].showInMenuBar=n===void 0?!1:!n,(0,u.writeFileSync)(w,JSON.stringify(t))}var E=require("@raycast/api");function W(){let[e,t]=(0,R.useState)(void 0),[n,s]=(0,R.useState)({}),[a,p]=(0,R.useState)(e===void 0),f=()=>{C();let o=X();t(o);let c=J();s(c),p(!1)};return{timers:e,customTimers:n,isLoading:a,refreshTimers:f,handleStartTimer:(o,c,U=!1)=>{M(U)&&(F(o,c),f())},handleStopTimer:o=>{t(e?.filter(c=>c.originalFile!==o.originalFile)),K(o.originalFile),f()},handleStartCT:(o,c=!1)=>{M(c)&&(F(o.timeInSeconds,o.name,o.selectedSound),f())},handleCreateCT:o=>{let c={name:o.name,timeInSeconds:o.secondsSet,selectedSound:"default",showInMenuBar:!0};L(c),f()},handleDeleteCT:async o=>{let c={title:"Delete this preset?",icon:E.Icon.Trash,message:"You won't be able to recover it.",dismissAction:{title:"Cancel",style:E.Alert.ActionStyle.Cancel},primaryAction:{title:"Delete",style:E.Alert.ActionStyle.Destructive}};await(0,E.confirmAlert)(c)&&(te(o),f())},handleToggleCTVisibility:async o=>{ne(o),f()}}}var S=require("@raycast/api");var V=require("@raycast/api");var b=require("fs");var k=V.environment.supportPath+"/raycast-stopwatches.json",pe=()=>{(!(0,b.existsSync)(k)||(0,b.readFileSync)(k).toString()=="")&&(0,b.writeFileSync)(k,"[]")};var oe=(e,t)=>{pe();let s=JSON.parse((0,b.readFileSync)(k,"utf8")).map(a=>a.swID==e?{...a,name:t}:a);(0,b.writeFileSync)(k,JSON.stringify(s))};var $=require("react/jsx-runtime");function x(e){let t=n=>{if(n===""||n===e.currentName)new S.Toast({style:S.Toast.Style.Failure,title:"No new name given!"}).show();else{switch((0,S.popToRoot)(),e.originalFile){case"customTimer":ee(e.ctID?e.ctID:"-99",n);break;case"stopwatch":oe(e.ctID?e.ctID:"-99",n);break;default:Z(e.originalFile,n);break}new S.Toast({style:S.Toast.Style.Success,title:`Renamed to ${n}!`}).show()}};return(0,$.jsx)(S.Form,{actions:(0,$.jsx)(S.ActionPanel,{children:(0,$.jsx)(S.Action.SubmitForm,{title:"Rename",onSubmit:n=>t(n.newName)})}),children:(0,$.jsx)(S.Form.TextField,{id:"newName",title:"New name",placeholder:e.currentName})})}var d=require("@raycast/api"),B=require("react");var D=require("@raycast/api"),re=[{title:"Alarm Clock",icon:D.Icon.Alarm,value:"alarmClock.wav"},{title:"Dismembered Woodpecker",icon:D.Icon.Bird,value:"dismemberedWoodpecker.wav"},{title:"Flute Riff",icon:D.Icon.Music,value:"fluteRiff.wav"},{title:"Level Up",icon:D.Icon.Trophy,value:"levelUp.wav"},{title:"Piano Chime",icon:D.Icon.Music,value:"pianoChime.wav"},{title:"Terminator",icon:D.Icon.BarCode,value:"terminator.wav"},{title:"Speak Timer Name",icon:D.Icon.Person,value:"speak_timer_name"}];var y=require("react/jsx-runtime");function Y(e){let t=Object.values(e.arguments).some(r=>r!==""),[n,s]=(0,B.useState)(),[a,p]=(0,B.useState)(),[f,h]=(0,B.useState)(),N=(0,d.getPreferenceValues)(),g=r=>{if(C(),r.hours===""&&r.minutes===""&&r.seconds==="")new d.Toast({style:d.Toast.Style.Failure,title:"No values set for timer length!"}).show();else if(isNaN(Number(r.hours)))s("Hours must be a number!");else if(isNaN(Number(r.minutes)))p("Minutes must be a number!");else if(isNaN(Number(r.seconds)))h("Seconds must be a number!");else{if(!M())return;(0,d.closeMainWindow)();let T=r.name?r.name:"Untitled",q=3600*Number(r.hours)+60*Number(r.minutes)+Number(r.seconds);F(q,T,r.selectedSound),r.willBeSaved&&L({name:r.name,timeInSeconds:q,selectedSound:r.selectedSound,showInMenuBar:!0})}},P=()=>{n&&n.length>0&&s(void 0)},O=()=>{a&&a.length>0&&p(void 0)},v=()=>{f&&f.length>0&&h(void 0)},_=[{id:"hours",title:"Hours",placeholder:"0",err:n,drop:P,validator:r=>{let T=r.target.value;isNaN(Number(T))?s("Hours must be a number!"):P()}},{id:"minutes",title:"Minutes",placeholder:"00",err:a,drop:O,validator:r=>{let T=r.target.value;isNaN(Number(T))?p("Minutes must be a number!"):O()}},{id:"seconds",title:"Seconds",placeholder:"00",err:f,drop:v,validator:r=>{let T=r.target.value;isNaN(Number(T))?h("Seconds must be a number!"):v()}}];return N.newTimerInputOrder!=="hhmmss"&&_.reverse(),(0,y.jsxs)(d.Form,{actions:(0,y.jsx)(d.ActionPanel,{children:(0,y.jsx)(d.Action.SubmitForm,{title:"Start Custom Timer",onSubmit:r=>g(r)})}),children:[_.map((r,T)=>(0,y.jsx)(d.Form.TextField,{id:r.id,title:r.title,placeholder:r.placeholder,defaultValue:e.arguments[r.id],error:r.err,onChange:r.drop,onBlur:r.validator},T)),(0,y.jsxs)(d.Form.Dropdown,{id:"selectedSound",defaultValue:"default",title:"Sound",children:[(0,y.jsx)(d.Form.Dropdown.Item,{value:"default",title:"Default"}),re.map((r,T)=>(0,y.jsx)(d.Form.Dropdown.Item,{title:r.value===N.selectedSound?`${r.title} (currently selected)`:r.title,value:r.value,icon:r.icon},T))]}),(0,y.jsx)(d.Form.TextField,{id:"name",title:"Name",placeholder:"Pour Tea",autoFocus:t}),(0,y.jsx)(d.Form.Checkbox,{id:"willBeSaved",label:"Save as preset"})]})}var m=require("react/jsx-runtime");function se(e){if(e.launchContext?.timerID){let c=J()[e.launchContext.timerID];if(c==null)(0,i.showToast)({style:i.Toast.Style.Failure,title:"This custom timer no longer exists!"});else{F(c.timeInSeconds,c.name,c.selectedSound);return}}let{timers:t,customTimers:n,isLoading:s,refreshTimers:a,handleStopTimer:p,handleStartCT:f,handleCreateCT:h,handleDeleteCT:N}=W(),{push:g}=(0,i.useNavigation)();(0,ie.useEffect)(()=>{a(),setInterval(()=>{a()},1e3)},[]);let P={tag:{value:"Running",color:i.Color.Yellow}},O={tag:{value:"Finished!",color:i.Color.Green}},v=o=>`raycast://extensions/ThatNerd/timers/manageTimers?context=${encodeURIComponent(JSON.stringify({timerID:o}))}`;return(0,m.jsxs)(i.List,{isLoading:s,children:[(0,m.jsxs)(i.List.Section,{title:t?.length!==0&&t!=null?"Currently Running":"No Timers Running",children:[t?.map(o=>(0,m.jsx)(i.List.Item,{icon:{source:i.Icon.Clock,tintColor:o.timeLeft===0?i.Color.Green:i.Color.Yellow},title:o.name,subtitle:I(o.timeLeft)+" left",accessories:[{text:I(o.secondsSet)+" originally"},{text:`${o.timeLeft===0?"Ended":"Ends"} at ${G(o.timeEnds)}`},o.timeLeft===0?O:P],actions:(0,m.jsxs)(i.ActionPanel,{children:[(0,m.jsx)(i.Action,{title:"Stop Timer",onAction:()=>p(o)}),(0,m.jsx)(i.Action,{title:"Rename Timer",onAction:()=>g((0,m.jsx)(x,{currentName:o.name,originalFile:o.originalFile,ctID:null}))}),(0,m.jsx)(i.Action,{title:"Save Timer as Preset",shortcut:{modifiers:["cmd","shift"],key:"enter"},onAction:()=>h(o)})]})},o.originalFile)),(0,m.jsx)(i.List.Item,{icon:i.Icon.Clock,title:"Create a new timer",subtitle:"Press Enter to start a timer",actions:(0,m.jsx)(i.ActionPanel,{children:(0,m.jsx)(i.Action,{title:"Start Timer",onAction:()=>g((0,m.jsx)(Y,{arguments:{hours:"",minutes:"",seconds:""}}))})})},0)]}),(0,m.jsx)(i.List.Section,{title:"Custom Timers",children:Object.keys(n)?.sort((o,c)=>n[o].timeInSeconds-n[c].timeInSeconds).map(o=>(0,m.jsx)(i.List.Item,{icon:i.Icon.Clock,title:n[o].name,subtitle:I(n[o].timeInSeconds),actions:(0,m.jsxs)(i.ActionPanel,{children:[(0,m.jsx)(i.Action,{title:"Start Timer",onAction:()=>f(n[o])}),(0,m.jsx)(i.Action,{title:"Rename Timer",onAction:()=>g((0,m.jsx)(x,{currentName:n[o].name,originalFile:"customTimer",ctID:o}))}),(0,m.jsx)(i.Action,{title:"Delete Custom Timer",shortcut:{modifiers:["ctrl"],key:"x"},onAction:()=>N(o)}),(0,m.jsx)(i.Action.CreateQuicklink,{quicklink:{name:n[o].name,link:v(o)},title:"Add Preset to Root Search"})]})},o))})]})}