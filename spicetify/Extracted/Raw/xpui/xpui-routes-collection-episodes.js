"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6080],{92738:(e,t,r)=>{r.d(t,{k:()=>d});var i=r(30758),n=r(97500),a=r.n(n),l=r(7008),s=r(22912),o=r(27565),c=r(86070);const d=(0,i.memo)((function(e){const{breakpoint:t,className:r,showSeparator:i,isActive:n,...d}=e;return(0,c.jsx)(l.v,{className:a()(r,o.A.entityRow,{[o.A.separator]:i,[o.A.active]:n}),hoverBackgroundColor:"backgroundTintedHighlight",activeBackgroundColor:"backgroundTintedBase",layout:t===s.e.SMALL?"regular":"wide",hoverAnimationDuration:"0ms",horizontalGap:t===s.e.SMALL?"12px":"16px",paddingBlockStart:"12px",paddingBlockEnd:"12px",...d})}))},79083:(e,t,r)=>{r.d(t,{X:()=>d});var i=r(15231),n=r(27235),a=r(44817),l=r(98913);const s="dK79XxAEu3SEKJ2jS_Qy",o="guiUbDD6Ga8Qpatq2jQ8";var c=r(86070);const d=({isExplicit:e,is19PlusOnly:t,isPaid:r,children:d})=>(0,c.jsxs)("div",{className:s,children:[e&&(0,c.jsx)(a.g,{}),r&&(0,c.jsx)(n.K,{}),t&&(0,c.jsx)(l.q,{size:16}),(0,c.jsx)(i.E,{variant:"bodySmall",className:o,children:d})]})},46669:(e,t,r)=>{r.d(t,{q:()=>a});var i=r(61108),n=r(86070);const a=e=>(0,n.jsx)(i.R,{size:"small",version:i.H.secondary,...e})},35544:(e,t,r)=>{r.d(t,{k:()=>s});var i=r(1360),n=r(42838),a=r(27565),l=r(86070);const s=({description:e,children:t})=>(0,l.jsxs)("div",{className:a.A.body,children:[e&&(0,l.jsx)(i.v,{lineClamp:2,as:"div",dir:"auto",children:(0,l.jsx)(n.q,{asTextContent:!0,html:e})}),t]})},11725:(e,t,r)=>{r.d(t,{F:()=>a});var i=r(27565),n=r(86070);const a=({actions:e,playButton:t})=>(0,n.jsxs)("div",{className:i.A.footer,children:[(0,n.jsx)("div",{className:i.A.actions,children:e}),t]})},64818:(e,t,r)=>{r.d(t,{e:()=>o});var i=r(22912),n=r(56192),a=r(1514),l=r(35481),s=r(86070);const o=({images:e,breakpoint:t,type:r,name:o})=>{const c=(0,l._)(),d=t===i.e.SMALL?a.Qe.SIZE_64:a.Qe.SIZE_112;return(0,s.jsx)(n.b,{fadeIn:!0,images:c(e,a.BZ[d]),shape:n.u.ROUNDED_CORNERS,size:d,iconSize:t===i.e.SMALL?"medium":"xlarge",type:r,title:o,loadingMode:"eager"})}},8284:(e,t,r)=>{r.d(t,{U:()=>l});var i=r(5052),n=r(27565),a=r(86070);const l=({children:e})=>(0,a.jsx)(i.d,{lineClamp:2,as:"div",dir:"auto",className:n.A.title,children:e})},71823:(e,t,r)=>{r.d(t,{Z:()=>g});var i=r(30758),n=r(77),a=r(1133),l=r(15231),s=r(74946),o=r(41331),c=r(61535);const d="hOOwEKqNuXrNvOCB1SgZ",u="csEdkIN9z2LjJIuZraqz";var A=r(86070);const g=({uri:e})=>{const[t,r]=(0,c.A)(e),g=(0,n.Zp)(),E=(0,i.useCallback)((()=>{r(!1),g("/",{replace:!0})}),[g,r]);return(0,A.jsxs)("div",{className:d,children:[(0,A.jsx)(a.b,{size:"xxlarge"}),(0,A.jsxs)("div",{className:u,children:[(0,A.jsx)(l.E,{as:"p",variant:"titleSmall",children:o.Ru.get("forbidden-page.title")}),(0,A.jsx)(l.E,{as:"p",variant:"bodySmall",children:o.Ru.get("forbidden-page.description")})]}),t&&(0,A.jsx)(s.$,{colorSet:"invertedLight",onClick:E,children:o.Ru.get("remove_from_your_library")})]})}},68716:(e,t,r)=>{r.d(t,{Hm:()=>l,gU:()=>s});var i=r(30758),n=r(86070);const a=(0,i.createContext)(null);function l({children:e,playlist:t,metadataOptions:r,contentsOptions:l}){return(0,n.jsx)(a.Provider,{value:(0,i.useMemo)((()=>({playlist:t,metadataOptions:r,contentsOptions:l})),[l,r,t]),children:e})}function s(){const e=(0,i.useContext)(a);if(null===e)throw new Error("Trying to use 'ListPlatformDataContext' without 'ListPlatformDataProvider'!");return e}},92044:(e,t,r)=>{r.d(t,{db:()=>l,jP:()=>s});var i=r(30758),n=r(86070);const a=(0,i.createContext)({setFilterPredicate:()=>{throw new Error("setFilterPredicate must be used within a ListPlatformFilterPredicatesProvider")},filterPredicate:null}),l=(0,i.memo)((function({children:e}){const[t,r]=(0,i.useState)(null),l=(0,i.useMemo)((()=>({filterPredicate:t,setFilterPredicate:r})),[t]);return(0,n.jsx)(a.Provider,{value:l,children:e})}));function s(){return(0,i.useContext)(a)}},67584:(e,t,r)=>{r.d(t,{K_:()=>u,ll:()=>d});var i=r(30758),n=r(68716),a=r(54021),l=r(29800),s=r(20631),o=r(86070);const c=(0,i.createContext)(null);function d({children:e}){const{playlist:t,contentsOptions:r}=(0,n.gU)(),d=(0,l.m)(),u=(0,i.useCallback)((async(e,i)=>await d.getContents(t.metadata.uri,{...r,offset:e,limit:i})),[d,r,t.metadata.uri]),A=(0,a.E)({nrItems:t.contents.totalLength,fetch:u,limit:50,initialItems:t.contents.items});return(0,s.H)(t.metadata.uri,A.invalidateCache),(0,o.jsx)(c.Provider,{value:A,children:e})}function u(){const e=(0,i.useContext)(c);if(null===e)throw new Error("Trying to use 'ListPlatformItemsContext' without 'ListPlatformItemsProvider'!");return e}},22348:(e,t,r)=>{r.d(t,{Zr:()=>s,kW:()=>o});var i=r(30758),n=r(35951),a=r(86070);const l=(0,i.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a ListPlatformSortProvider")},sortState:null}),s=i.memo((function({uri:e,children:t}){return(0,a.jsx)(n.E,{uri:e,defaultState:null,sortContext:l,children:t})}));function o(){return(0,i.useContext)(l)}},63758:(e,t,r)=>{r.d(t,{W:()=>x});var i=r(30758),n=r(41331),a=r(71823),l=r(7029),s=r(20641),o=r(68716),c=r(92044),d=r(67584),u=r(22348),A=r(39733),g=r(19019);var E=r(88853),h=r(29800),m=r(86070);const p=({children:e,uri:t})=>{const r=(0,h.m)().getCapabilities(),{filter:d}=(0,i.useContext)(s.g),{sortState:p}=(0,u.kW)(),{filterPredicate:x}=(0,c.jP)(),{metadataOptions:y,contentsOptions:C}=((e,t,r)=>{const n=(0,A.NC)(g.G6N);return(0,i.useMemo)((()=>({metadataOptions:{decorateFormatListData:!0,withSync:!0,hydrateCollaboratorsWithMembers:n},contentsOptions:{offset:0,limit:25,filter:e,sort:t??void 0,filterPredicates:r?[r]:[]}})),[n,e,t,r])})(d,p,x),{data:S,isLoading:T,isError:D}=(0,E.W)(t,y,C);return!S||T?(0,m.jsx)(l.A,{hasError:D,errorMessage:n.Ru.get("error.not_found.title.playlist"),loadOffline:r.canModifyOffline}):S.metadata.permissions&&!S.metadata.permissions.canView?(0,m.jsx)(a.Z,{uri:t}):(0,m.jsx)(o.Hm,{playlist:S,metadataOptions:y,contentsOptions:C,children:e})},x=({children:e,uri:t})=>(0,m.jsx)(s.s,{uri:t,children:(0,m.jsx)(c.db,{children:(0,m.jsx)(u.Zr,{uri:t,children:(0,m.jsx)(p,{uri:t,children:(0,m.jsx)(d.ll,{children:e})})})})})},69026:(e,t,r)=>{r.d(t,{M:()=>c});var i=r(57574),n=r(30758);const a=[],l=(e,t)=>{const r=[];let i=e,n=t;for(;i>0;){const t=Math.ceil(i/n);r.push({first:e-i,nrItems:t}),i-=t,n--}return r};var s=r(86070);const o=e=>{const{itemsInNode:t,renderItem:r,renderPlaceholder:n,estimatedHeight:a,scrollNodeRef:c,nrRowsOverscan:d=10,nrInitialInView:u=0,firstIndex:A,heights:g,fanOut:E=2}=e,{ref:h,inView:m,entry:p}=(0,i.Wx)({root:c.current,rootMargin:d*a+"px 0px",initialInView:A<u}),x=`${A}-${t}`;g[x]??=a*t,p?.boundingClientRect?.height&&(g[x]=p.boundingClientRect.height);const y=g[x];return 0===t?null:m?1===t?(0,s.jsx)("div",{ref:h,role:"presentation",children:r(A,y)}):(0,s.jsx)("div",{ref:h,role:"presentation",children:l(t,E).map((({first:t,nrItems:r},i)=>(0,s.jsx)(o,{...e,itemsInNode:r,firstIndex:A+t},i)))}):(0,s.jsx)("div",{ref:h,role:"presentation",children:n(`${y}px`)})},c=e=>{const t=(e=>{const t=a.find((t=>t.key===e))?.heights||{},r=(0,n.useCallback)((t=>{if(!e)return;const r=a.findIndex((t=>t.key===e));-1===r?a.push({key:e,heights:t}):(a[r].heights=t,a.push(a.splice(r,1)[0])),a.length>10&&a.shift()}),[e]),i=(0,n.useRef)({...t});return(0,n.useEffect)((()=>()=>{r(i.current)}),[r]),i.current})(e.persistanceKey);return(0,s.jsx)(o,{...e,itemsInNode:e.totalCount,firstIndex:0,heights:t,nrInitialInView:e.nrInitialInView})}},56302:(e,t,r)=>{r.d(t,{u:()=>i});let i=function(e){return e.TITLE="title",e.SUBTITLE="subTitle",e}({})},22912:(e,t,r)=>{r.d(t,{$:()=>l,e:()=>a});var i=r(69798),n=r(57968);const a={SMALL:"small",LARGE:"large"},l=()=>(0,n.y)()===i.E.SMALL?"small":"large"},34504:(e,t,r)=>{r.d(t,{d:()=>h});var i=r(30758),n=r(65114),a=r(2061),l=r(41331),s=r(33396),o=r(22348),c=r(87402),d=r(29800),u=r(86070);const A=i.memo((function({sortOptions:e,defaultSortField:t,enableViewModeMenu:r}){const n=(0,d.m)(),{canSort:a}=n.getCapabilities(),{sortState:A,setSortState:g}=(0,o.kW)(),E=(0,i.useCallback)((e=>{const t=c.nw[e];g((0,c.Wc)(t,A))}),[g,A]),h=e.map((e=>c.kA[e]));"custom-order"===t&&h.unshift({key:"custom-order",value:l.Ru.get("sort.custom-order")});const m=c.kA[A?.field??t];return a?(0,u.jsx)(s.g,{options:h,onSelect:E,selected:m,sortOrder:(0,c.Qi)(A?.order??null),heading:l.Ru.get("drop_down.sort_by"),enableViewModeMenu:r}):null}));var g=r(78487);const E="cRlDGz_DCN_UOCt4Khg1",h=i.memo((function({filterPlaceholder:e,sortOptions:t,defaultSortField:r,enableViewModeMenu:l=!1}){const s=(0,d.m)(),{canSort:o,canFilter:c}=s.getCapabilities(),{spec:h,logger:m}=(0,g.r)(n.E,{}),p=(0,i.useCallback)((()=>{m.logInteraction(h.filterFieldFactory().keyStrokeFilter())}),[m,h]),x=(0,i.useCallback)((()=>{m.logInteraction(h.filterFieldFactory().hitClearFilter())}),[m,h]);return(0,u.jsxs)("div",{className:E,children:[c?(0,u.jsx)(i.Suspense,{fallback:null,children:(0,u.jsx)(a.S,{placeholder:e,onFilter:p,onClear:x})}):null,o?(0,u.jsx)(A,{sortOptions:t,defaultSortField:r,enableViewModeMenu:l}):null]})}))},28521:(e,t,r)=>{r.d(t,{g:()=>i.gU});var i=r(68716)},87402:(e,t,r)=>{r.d(t,{Ap:()=>m,Qi:()=>A,Wc:()=>c,g6:()=>h,hK:()=>p,kA:()=>d,nw:()=>u});var i=r(41331),n=r(76276),a=r(99153);const l=[a.nw.ADDED_AT,a.nw.PUBLISH_DATE],s=e=>l.includes(e)?a.xB.DESC:a.xB.ASC,o={[a.xB.ASC]:a.xB.DESC,[a.xB.DESC]:a.xB.ASC},c=(e,t)=>null===e?null:t?.field!==e?{field:e,order:s(e)}:{field:e,order:o[t.order]},d={[a.nw.TITLE]:{key:"title",get value(){return i.Ru.get("sort.title")}},[a.nw.ARTIST]:{key:"artist",get value(){return i.Ru.get("sort.artist")}},[a.nw.ALBUM]:{key:"album",get value(){return i.Ru.get("sort.album")}},[a.nw.ADDED_BY]:{key:"added-by",get value(){return i.Ru.get("sort.added-by")}},[a.nw.ADDED_AT]:{key:"added-at",get value(){return i.Ru.get("collection.sort.recently-added")}},[a.nw.DURATION]:{key:"duration",get value(){return i.Ru.get("sort.duration")}},[a.nw.SHOW_NAME]:{key:"show-name",get value(){return i.Ru.get("collection.sort.creator")}},[a.nw.PUBLISH_DATE]:{key:"publish-date",get value(){return i.Ru.get("tracklist.header.release-date")}},"custom-order":{key:"custom-order",get value(){return i.Ru.get("sort.custom-order")}}},u={title:a.nw.TITLE,artist:a.nw.ARTIST,album:a.nw.ALBUM,"added-by":a.nw.ADDED_BY,"added-at":a.nw.ADDED_AT,duration:a.nw.DURATION,"show-name":a.nw.SHOW_NAME,"publish-date":a.nw.PUBLISH_DATE,"custom-order":null};function A(e){return null===e?n.H.NONE:e===a.xB.ASC?n.H.ASC:n.H.DESC}const g={[n.$.TITLE_AND_ARTIST]:[a.nw.TITLE,a.nw.ARTIST],[n.$.TITLE]:[a.nw.TITLE],[n.$.ADDED_BY]:[a.nw.ADDED_BY],[n.$.ADDED_AT]:[a.nw.ADDED_AT],[n.$.DURATION]:[a.nw.DURATION],[n.$.ARTIST]:[a.nw.ARTIST],[n.$.ALBUM]:[a.nw.ALBUM],[n.$.ALBUM_OR_PODCAST]:[a.nw.ALBUM,a.nw.SHOW_NAME],[n.$.ALBUM_OR_SHOW]:[a.nw.ALBUM,a.nw.SHOW_NAME],[n.$.ACTIONS]:[],[n.$.RELEASE_DATE]:[a.nw.PUBLISH_DATE],[n.$.INDEX]:[],[n.$.PLAYS]:[],[n.$.ADD]:[],[n.$.EVENT_DATE]:[],[n.$.EVENT_INFO]:[],[n.$.CONCERT_DATE]:[],[n.$.CONCERT_VENUE]:[],[n.$.TITLE_AND_AUTHOR]:[a.nw.TITLE],[n.$.AUTHOR]:[],[n.$.BPM]:[],[n.$.KEY]:[],[n.$.VIBE]:[]},E={[n.H.NONE]:null,[n.H.DESC]:a.xB.DESC,[n.H.ASC]:a.xB.ASC,[n.H.SECONDARY_DESC]:a.xB.DESC,[n.H.SECONDARY_ASC]:a.xB.ASC},h=e=>e.filter((e=>g[e].length>0)),m=(e,t)=>{const r=e.find((e=>t?.field&&g[e].includes(t.field)));if(!r||!t?.field)return{column:null,order:n.H.ASC};return g[r].indexOf(t.field)>0?{column:r,order:t.order===a.xB.ASC?n.H.SECONDARY_ASC:n.H.SECONDARY_DESC}:{column:r,order:t.order===a.xB.ASC?n.H.ASC:n.H.DESC}},p=(e,t,r)=>{const i=g[e].length>1?5:3;let a=null,l=null;if(e===t.column){let s=(t.order+1)%i;s!==n.H.NONE||r||(s+=1);const o=[n.H.SECONDARY_ASC,n.H.SECONDARY_DESC].includes(s)?1:0;a=g[e][o],l=E[s]}else a=g[e][0],l=E[n.H.ASC];return null===l?null:{field:a,order:l}}},12761:(e,t,r)=>{r.r(t),r.d(t,{default:()=>qt});var i=r(30758),n=r(3275),a=r(39733),l=r(41331),s=r(55384),o=r(62462),c=r(52182),d=r(7029),u=r(4888),A=r(20641),g=r(35951),E=r(76276),h=r(43111),m=r(50427);let p=function(e){return e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER",e}({});const x={"show-alphabetical":p.SHOW_ALPHABETICAL,"book-alphabetical":p.BOOK_ALPHABETICAL,"episode-alphabetical":p.EPISODE_ALPHABETICAL,"playlist-alphabetical":p.PLAYLIST_ALPHABETICAL,"album-alphabetical":p.ALBUM_ALPHABETICAL,"recently-added":p.ADDED_AT,"creator-name":p.CREATOR_NAME,"creator-name-alphabetical":p.CREATOR_NAME_ALPHABETICAL,"album-creator-name":p.ALBUM_CREATOR_NAME,"recently-played":p.RECENTLY_PLAYED,"playlist-most-relevant":p.MOST_RELEVANT,"playlist-custom-order":p.CUSTOM_ORDER},y={[p.RECENTLY_PLAYED]:{key:"recently-played",get value(){return l.Ru.get("collection.sort.recently-played")}},[p.ADDED_AT]:{key:"recently-added",get value(){return l.Ru.get("collection.sort.recently-added")}},[p.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return l.Ru.get("collection.sort.alphabetical")}},[p.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return l.Ru.get("collection.sort.alphabetical")}},[p.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return l.Ru.get("collection.sort.alphabetical")}},[p.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return l.Ru.get("collection.sort.alphabetical")}},[p.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return l.Ru.get("collection.sort.creator")}},[p.CREATOR_NAME]:{key:"creator-name",get value(){return l.Ru.get("collection.sort.creator")}},[p.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return l.Ru.get("collection.sort.alphabetical")}},[p.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return l.Ru.get("collection.sort.alphabetical")}},[p.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return l.Ru.get("collection.sort.most-relevant")}},[p.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return l.Ru.get("collection.sort.custom-order")}}};p.ADDED_AT,p.ALBUM_ALPHABETICAL,p.CREATOR_NAME,p.ADDED_AT,h.uY.ADDED_AT,h.xB.DESC,p.ALBUM_ALPHABETICAL,h.uY.NAME,h.xB.ASC,p.CREATOR_NAME,h.uY.ARTIST_NAME,h.xB.ASC;p.ADDED_AT,p.CREATOR_NAME_ALPHABETICAL,p.ADDED_AT,h.af.ADDED_AT,h.xB.DESC,p.CREATOR_NAME_ALPHABETICAL,h.af.NAME,h.xB.ASC;p.ADDED_AT,p.SHOW_ALPHABETICAL,p.ADDED_AT,h.WW.ADDED_AT,h.xB.DESC,p.SHOW_ALPHABETICAL,h.WW.NAME,h.xB.ASC;p.ADDED_AT,p.BOOK_ALPHABETICAL,p.ADDED_AT,h.Ev.ADDED_AT,p.BOOK_ALPHABETICAL,h.Ev.NAME;p.MOST_RELEVANT,p.RECENTLY_PLAYED,p.ADDED_AT,p.PLAYLIST_ALPHABETICAL,p.CUSTOM_ORDER,p.ADDED_AT,m.nw.ADDED_AT,m.xB.DESC,p.RECENTLY_PLAYED,m.nw.RECENTLY_PLAYED,m.xB.ASC,p.PLAYLIST_ALPHABETICAL,m.nw.NAME,m.xB.ASC,p.MOST_RELEVANT,m.nw.RELEVANCE,m.xB.DESC,p.CUSTOM_ORDER;p.ADDED_AT,p.ADDED_AT,p.ADDED_AT,p.MOST_RELEVANT,p.ADDED_AT;var C=r(86070);const S=e=>e===p.ADDED_AT?h.xB.DESC:h.xB.ASC,T={option:p.ADDED_AT,order:h.xB.DESC},D={[h.xB.ASC]:h.xB.DESC,[h.xB.DESC]:h.xB.ASC},L=(0,i.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:T}),f=i.memo((function({uri:e,children:t,defaultSortOption:r}){const i={option:r,order:S(r)};return(0,C.jsx)(g.E,{uri:e,defaultState:i,sortContext:L,children:t})}));var P=r(99842),b=r(13948),_=r(52690),R=r(13799),I=r(65114),j=r(2061),v=r(33396);const O=i.memo((function({sortOptions:e,onSort:t}){const{sortState:r,setSortState:n}=(0,i.useContext)(L),a=(0,i.useCallback)((e=>{const i=x[e];t?.(i),n(((e,t,r)=>t!==e?{option:e,order:S(e)}:{option:e,order:D[r]})(i,r.option,r.order))}),[t,n,r.option,r.order]),l=e.map((e=>y[e])),s=y[r.option];return(0,C.jsx)(v.g,{options:l,onSelect:a,selected:s,sortOrder:(o=r.order,o===h.xB.ASC?E.H.ASC:E.H.DESC)});var o}));var w=r(78487);const N="gWfUTJg52F5eTzM6M82w",B=i.memo((function({canSort:e,canFilter:t,filterPlaceholder:r,sortOptions:n}){const{spec:a,logger:l}=(0,w.r)(I.E,{}),s=(0,i.useCallback)((()=>{l.logInteraction(a.filterFieldFactory().keyStrokeFilter())}),[l,a]),o=(0,i.useCallback)((()=>{l.logInteraction(a.filterFieldFactory().hitClearFilter())}),[l,a]);return(0,C.jsxs)("div",{className:N,children:[t?(0,C.jsx)(i.Suspense,{fallback:null,children:(0,C.jsx)(j.S,{placeholder:r,onFilter:s,onClear:o})}):null,e?(0,C.jsx)(O,{sortOptions:n}):null]})}));var k=r(34504);const M={[h.ci.NAME]:u.lU.TITLE,[h.ci.SHOW_NAME]:u.lU.SHOW,[h.ci.ADDED_AT]:u.lU.ADDED_AT},H=[p.ADDED_AT,p.CREATOR_NAME,p.EPISODE_ALPHABETICAL],U={[p.ADDED_AT]:h.ci.ADDED_AT,[p.CREATOR_NAME]:h.ci.SHOW_NAME,[p.EPISODE_ALPHABETICAL]:h.ci.NAME};const F=(e,t)=>{if(function(e){return H.includes(e)}(e))return{field:U[e],order:t}},Y=(e,t)=>{if(!H.includes(e))return;return(e=>{if(!e?.field)return;const t=M[e.field];if(!t)return;return u.SL[t].map((t=>e.order?`${t} ${e.order}`:t)).join(",")})(F(e,t))};var W=r(3782),$=r(19019),V=r(98550),z=r(99153);const K="wmGcau34_eXQOX37kUTc",Q="Yxy9nPtcdgz7zbBsWVKg",G=({metadata:e,canSort:t,backgroundColor:r,isPlaying:i,isOnline:n,togglePlay:a})=>{const s=(0,V.f)(),{uri:o,name:c}=e,d=e.totalLength>0,u=(0,W.j)();return(0,C.jsx)(P.E,{backgroundColor:r,children:(0,C.jsxs)(b.S,{children:[d&&(0,C.jsx)(R.D,{onClick:()=>a(),isPlaying:i,size:u,uri:o,disabled:!n,ariaPlayLabel:l.Ru.get("playlist.a11y.play",c),ariaPauseLabel:l.Ru.get("playlist.a11y.pause",c)}),t&&(0,C.jsx)("div",{className:Q,children:(0,C.jsx)(_.u,{property:$.ucV,renderNewExperience:()=>(0,C.jsx)(k.d,{sortOptions:[z.nw.TITLE,z.nw.ADDED_AT,z.nw.PUBLISH_DATE,z.nw.SHOW_NAME],defaultSortField:z.nw.ADDED_AT,filterPlaceholder:l.Ru.get("playlist.search_in_playlist")}),renderOldExperience:()=>(0,C.jsx)(B,{canSort:s.getCapabilities().canSort,canFilter:s.getCapabilities().canFilter,filterPlaceholder:l.Ru.get("playlist.search_in_playlist"),sortOptions:H})})})]})})};var q=r(93720),X=r(12953),Z=r(43830),J=r(581),ee=r(56665),te=r(19194),re=r(27235),ie=r(68031),ne=r(45292),ae=r(68702),le=r(11244),se=r(44817),oe=r(98913),ce=r(78330),de=r(57968),ue=r(61535),Ae=r(98882),ge=r(74493),Ee=r(86317),he=r(35293),me=r(42668);const pe="sxxBMk7G1OGo4uYIgPdQ",xe="wpP88qSwGpDQbc_ogyXW",ye={small:64,standard:300,large:640,xlarge:1024},Ce=i.memo((function({index:e,contextUri:t,episode:r,onRemove:n,usePlayContextItem:l}){const s=(0,i.useRef)(r.duration.milliseconds-r.playedState.timeLeft.milliseconds),o=r.uri,[c,d]=(0,i.useState)(r.playedState.state===he.M.Completed),{filter:u}=(0,i.useContext)(A.g),{draggable:g,onDragStart:E}=(0,ie.P)(),h=(0,de.y)(),m=(0,ne.W)(),[p]=(0,ue.A)(o,!0),{isPlayable:x}=(0,ae.g)(r.uri,{isPlayable:r.isPlayable}),y=(0,le.n)(),{isPlaying:S,isActive:T,togglePlay:D}=l({uri:o,index:e}),[L]=(0,ge.S)(1e4,(e=>e?.item?.uri===o));(0,i.useEffect)((()=>{S&&(s.current=L)}),[S,L]);const{isPlaying:f,isActive:P,togglePlay:b}=(0,Ae.P)({uri:o,pages:[{items:[{type:Ee.c.EPISODE,uri:o,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,i.useEffect)((()=>{p||n()}),[p,n]),(0,i.useEffect)((()=>{S||r.duration.milliseconds<=s.current&&d(!0)}),[S,r.duration.milliseconds]);const _=(0,i.useCallback)((e=>{e||(s.current=0),d(e)}),[]),R=(0,i.useCallback)((e=>{if(e.target!==e.currentTarget)return;let i=`${r.name}`;r.show?.name&&(i+=` • ${r.show.name}`),E(e,{itemUris:[o],dragLabelText:i,contextUri:t})}),[t,r.name,r.show?.name,o,E]),I=(0,i.useCallback)((()=>{m({type:"click",targetUri:o,intent:"navigate"})}),[o,m]),j=(0,i.useCallback)((()=>{y?(m({type:"click",intent:S?"pause":"play"}),D()):(m({type:"click",intent:f?"pause":"play"}),b())}),[y,S,f,m,D,b]),v=(0,i.useCallback)((e=>(0,C.jsx)(te.M,{searchWords:[u],textToHighlight:e})),[u]),O=r.podcastSubscription?.isPaywalled??!1,w=r.podcastSubscription?.isUserSubscribed??!1,{badges:N}=(0,me.b)({isExplicit:r.isExplicit,isMOGEFRestricted:r.is19PlusOnly,isPaywalled:O});let B=!1;(T||!y&&P)&&(B=!0);const k=(0,a.NC)($.cKd,{loadingValue:!1});return p?(0,C.jsxs)(ce.pZ,{value:"row",index:e,children:[(0,C.jsx)("hr",{className:pe,"aria-hidden":!0}),(0,C.jsx)(q.h,{menu:(0,C.jsx)(X.b,{uri:o,contextUri:t,showUri:r.show?.uri,isPlayed:c,onMarkAsPlayed:_}),children:k?(0,C.jsx)(J.k,{requestId:r.requestId,index:e,uri:o,uid:o,size:h,images:r.images.map((e=>({url:e.url,width:e.width||(e.label?ye[e.label]:null),height:e.height||(e.label?ye[e.label]:null)}))),isPaywalled:O,isUserSubscribed:w,name:r.name,highlightText:v,showName:r.show?.name,showUri:r.show?.uri,description:r.description,isPlayable:x,fullyPlayed:c,durationMs:r.duration.milliseconds,releaseDate:r.release.date||"",resumePositionMs:s.current,draggable:g,handleDragStart:R,handlePlaybackClick:j,handleClick:I,isCurrentlyPlaying:B,isPlaying:y?S:f,position:B?L:void 0,episodeSharingInfo:null,onMarkAsPlayed:_,badges:(0,C.jsxs)(C.Fragment,{children:[N.explicit&&(0,C.jsx)(se.g,{}),N.paid&&(0,C.jsx)(re.K,{}),N.nineteen&&(0,C.jsx)(oe.q,{size:16})]}),playButtonWrapper:e=>(0,C.jsx)(ee.f,{enabled:O&&!w,showUri:r.show?.uri||void 0,children:e})}):(0,C.jsx)(Z.R,{requestId:r.requestId,index:e,uri:o,uid:o,size:h,images:r.images.map((e=>({url:e.url,width:e.width||(e.label?ye[e.label]:null),height:e.height||(e.label?ye[e.label]:null)}))),isPaywalled:O,isUserSubscribed:w,name:r.name,highlightText:v,showName:r.show?.name,showUri:r.show?.uri,description:r.description,isPlayable:x,fullyPlayed:c,durationMs:r.duration.milliseconds,releaseDate:r.release.date||"",resumePositionMs:s.current,handleDragStart:R,handlePlaybackClick:j,handleClick:I,isCurrentlyPlaying:B,isPlaying:y?S:f,position:B?L:void 0,episodeSharingInfo:null,onMarkAsPlayed:_,badges:(0,C.jsxs)(C.Fragment,{children:[N.explicit&&(0,C.jsx)(se.g,{}),N.paid&&(0,C.jsx)(re.K,{}),N.nineteen&&(0,C.jsx)(oe.q,{size:16})]}),playButtonWrapper:e=>(0,C.jsx)(ee.f,{enabled:O&&!w,showUri:r.show?.uri||void 0,children:e})})})]}):null}));var Se=r(88869),Te=r(69798),De=r(66037);const Le=i.memo((function({contextUri:e,usePlayContextItem:t}){const r=(0,V.f)(),{sortState:n}=(0,i.useContext)(L),[a,l]=(0,i.useState)({totalLength:0,unfilteredTotalLength:0,offset:0,items:[],limit:50}),s=(0,i.useRef)(!1),o=(0,i.useRef)(0),c=(0,i.useRef)(0),{filter:d}=(0,i.useContext)(A.g),u=(0,i.useCallback)((()=>{c.current++}),[]),{ref:g,breakpoint:E}=(0,De.x)({[Te.E.MEDIUM]:0,[Te.E.LARGE]:600}),h=(0,i.useCallback)(((e=!1)=>{const t=o.current;null!==t&&(s.current||(s.current=!0,(async e=>{const t=await r.getEpisodes({offset:e-c.current,limit:50,sort:F(n.option,n.order),filter:d});return c.current=0,t})(Number(t)).then((r=>{l((i=>{const n=Number(r.offset)+r.items.length,a=e?[]:[...i.items];return a.splice(Number(t),r.items.length,...r.items),o.current=n<r.totalLength?n:null,{...r,items:a}})),s.current=!1}))))}),[d,r,n]);return(0,i.useEffect)((()=>{o.current=0,h(!0)}),[h]),(0,C.jsx)(de.o.Provider,{value:E,children:(0,C.jsx)(ce.pZ,{value:"track-list",children:(0,C.jsx)("div",{ref:g,children:(0,C.jsx)(Se._,{onReachBottom:h,triggerOnInitialLoad:!0,children:a.items.map(((r,i)=>(0,C.jsx)("div",{className:xe,children:(0,C.jsx)(Ce,{index:i,episode:r,contextUri:e,onRemove:u,usePlayContextItem:t},`${r.uri}/${i}`)},`${i}${r.uri}`)))})})})})}));var fe=r(15231),Pe=r(59092),be=r(36041),_e=r(16373),Re=r(99168),Ie=r(90436),je=r(87188),ve=r(27275),Oe=r(4631),we=r(56192);const Ne=({metadata:e,backgroundColor:t,isPlaying:r,isOnline:n,togglePlay:a})=>{const{uri:s,name:o,images:c,totalLength:d,owner:u}=e,A=(0,i.useMemo)((()=>({id:u.username,uri:u.uri,name:u.username,displayName:u.displayName||void 0,images:u.images||[]})),[u]);return(0,C.jsxs)(Pe.z,{backgroundColor:t,children:[(0,C.jsxs)(Re.h,{children:[(0,C.jsx)(R.D,{size:"medium",onClick:()=>a(),isPlaying:r,uri:s,disabled:!n,ariaPlayLabel:l.Ru.get("playlist.a11y.play",o),ariaPauseLabel:l.Ru.get("playlist.a11y.pause",o)}),(0,C.jsx)(Ie.X,{text:o})]}),(0,C.jsx)(be.K,{images:c,name:o,shape:we.u.ROUNDED_CORNERS,renderImage:()=>(0,C.jsx)(Oe.b,{})}),(0,C.jsxs)(_e.Y,{children:[(0,C.jsx)(fe.E,{variant:"bodySmallBold",children:l.Ru.get("playlist")}),(0,C.jsx)(ve.mm,{canEdit:!1,onClick:()=>{},children:o}),(0,C.jsx)(je.t,{creators:[A],totalItems:d,hasEpisodes:!0})]})]})};var Be=r(41978),ke=r(59677),Me=r(31744),He=r(27338),Ue=r(92044);const Fe={get[z.YB.AVAILABLE_OFFLINE](){return l.Ru.get("download.available-offline")},get[z.YB.UNPLAYED](){return l.Ru.get("shows.filter.unplayed")},get[z.YB.IN_PROGRESS](){return l.Ru.get("shows.filter.in-progress")}};var Ye=r(29800);const We=({filterPredicates:e,className:t})=>{const{canFilter:r}=(0,Ye.m)().getCapabilities(),{filterPredicate:i,setFilterPredicate:n}=(0,Ue.jP)();return r?i?(0,C.jsxs)("div",{className:t,children:[(0,C.jsx)(Me.m,{onClick:()=>n(null),"aria-label":l.Ru.get("web-player.your-library-x.clear_filters")}),(0,C.jsx)(He.v,{onClick:()=>n(null),selected:!0,selectedColorSet:"invertedLight",children:Fe[i]},i)]}):(0,C.jsx)("div",{className:t,children:e.map((e=>(0,C.jsx)(He.v,{onClick:()=>n(i?null:e),selected:i===e,selectedColorSet:"invertedLight",children:Fe[e]},e)))}):null};var $e=r(28521),Ve=r(63758),ze=r(97500),Ke=r.n(ze),Qe=r(77),Ge=r(87500),qe=r(41257),Xe=r(2304),Ze=r(39314),Je=r(19477),et=r(14392),tt=r(31352),rt=r(33e3),it=r(79083),nt=r(46669),at=r(92738);var lt=r(35544),st=r(11725),ot=r(64818),ct=r(8284),dt=r(56302),ut=r(22912),At=r(91360),gt=r(45647),Et=r(97074),ht=r(63128),mt=r(71115),pt=r(72888),xt=r(65312),yt=r(60285),Ct=r(72553),St=r(4139),Tt=r(19845),Dt=r(27565);const Lt=(0,i.memo)((function({episode:e,contextUri:t,usePlayContextItem:r,index:n,sharingInfo:a,uid:s,showSeparator:o=!1,highlightText:c=(e=>e),...d}){const{name:u,description:A,isExplicit:g,show:E,type:h,uri:m,duration:p,is19PlusOnly:x,mediaType:y,release:S,images:T}=e,D=(0,St.s)(),{spec:L}=(0,w.r)(qe.m,{data:{position:n,uri:m}}),f=E?.name,P=E?.uri,b=(0,ke.o_)(P)?.toURLPath(!0),_=e.podcastSubscription?.isPaywalled??!1,R=e.podcastSubscription?.isUserSubscribed??!1,I=_&&!R,j=y?.includes(he.C.Video)??!1,v=(0,Qe.Zp)(),O=(0,ke.o_)(m).toURLPath(!0),N=(0,ut.$)(),[B,k]=(0,ue.A)(m),M=(0,xt.T)(m),{isPlaying:H,isActive:U,togglePlay:F}=r({uri:m,index:n}),Y=N===ut.e.SMALL?"small":"medium",{resumePositionMs:W,onToggleMarkAsPlayed:$,isFullyPlayed:V}=((e,t)=>{const{uri:r,duration:n,playedState:a}=e,l=(0,i.useRef)(n.milliseconds-a.timeLeft.milliseconds),[s,o]=(0,i.useState)(a.state===he.M.Completed),[c]=(0,ge.S)(1e4,(e=>e?.item?.uri===r)),d=(0,i.useCallback)((e=>{e||(l.current=0),o(e)}),[]);return(0,i.useEffect)((()=>{t&&(l.current=c)}),[t,c]),{resumePositionMs:l.current,isFullyPlayed:s,onToggleMarkAsPlayed:d}})(e,H),z=[u,...f?[f]:[]].join(" • "),{draggable:K,onDragStart:Q}=(0,ie.P)({itemUris:[m],dragLabelText:z}),G=(0,ht.v)(m),Z=(0,i.useCallback)((e=>{if(e.stopPropagation(),I)D.logInteraction(L.playButtonFactory().hitShowPaywall({paywalledItem:m}));else{const e=(0,mt.$I)({isPlaying:H,isActive:U,spec:L.playButtonFactory(),logger:D,uri:m});F({loggingParams:e})}}),[U,H,D,L,F,I,m]),J=(0,C.jsx)(ct.U,{children:c(u,dt.u.TITLE)}),te=(0,C.jsx)(lt.k,{description:A,children:(0,C.jsx)(it.X,{isExplicit:!!g,is19PlusOnly:x,isPaid:_,children:p.milliseconds&&(0,C.jsx)(Tt.j,{isPlaying:!1,fullyPlayed:V,durationMs:p.milliseconds,position:W,releaseDate:S.date})})}),re=(0,C.jsx)(X.b,{uri:m,uid:s,contextUri:t,showUri:P,isPlayed:V,onMarkAsPlayed:$}),ne=(0,C.jsx)(Xe.M,{className:Ke()({[Dt.A.visibleAction]:B}),isAdded:B,onClick:()=>{k(!B)},size:Y,isEpisode:!0,condensedAll:!0}),ae=(0,C.jsx)(Et.g,{size:Y,uri:m}),le=(0,C.jsxs)(C.Fragment,{children:[G?ae:ne,(0,C.jsx)(Ze.I,{className:Ke()({[Dt.A.visibleAction]:(0,pt.X)(M)}),uri:m,size:Y,canDownload:!_||_&&R,onClick:(e,t)=>{t===yt.NV.ADD&&D.logInteraction(L.downloadButtonFactory().hitDownload({itemToDownload:m}))},condensedAll:!0}),(0,C.jsx)(et.w,{uri:m,sharingInfo:a??null,interactionData:{intent:"share",type:"click"},size:Y,onClick:()=>{D.logInteraction(L.shareButtonFactory().hitShare({entityToBeShared:m,shareId:a?.shareId??""}))},condensedAll:!0}),(0,C.jsx)(tt.b,{menu:re,children:(0,C.jsx)(Je.e,{label:l.Ru.get("more.label.context",u),size:Y,onClick:()=>{D.logInteraction(L.contextMenuButtonFactory().hitUiReveal())},condensedAll:!0})})]}),se=(0,C.jsx)(st.F,{actions:le,playButton:(0,C.jsx)(ee.f,{enabled:_&&!R,showUri:P||void 0,children:(0,C.jsx)(nt.q,{onClick:Z,isPlaying:H,ariaPlayLabel:l.Ru.get("tracklist.a11y.play",u,f),ariaPauseLabel:l.Ru.get("tracklist.a11y.pause",u,f),locked:I})})}),oe=(0,C.jsx)(ot.e,{images:T,name:u,type:h,breakpoint:N}),ce=(0,C.jsxs)(Ge.j,{lineClamp:2,children:[j&&(0,C.jsx)(gt.T,{}),f&&b&&(0,C.jsx)(q.h,{menu:(0,C.jsx)(rt.H,{uri:P??""}),onShow:()=>{D.logInteraction(L.podcastLinkFactory().secondaryHitUiReveal())},children:(0,C.jsx)(At.N,{to:b,onClick:()=>{D.logInteraction(L.podcastLinkFactory().hitUiNavigate({destination:b}))},children:(0,C.jsx)(fe.E,{variant:"bodySmall",semanticColor:"textSubdued",children:c(f,dt.u.SUBTITLE)})})})]});return(0,C.jsx)(Ct.r,{spec:L,children:(0,C.jsx)(q.h,{menu:re,onShow:()=>{D.logInteraction(L.secondaryHitUiReveal())},children:(0,C.jsx)(at.k,{draggable:K,onDragStart:Q,breakpoint:N,id:`book-${m}`,media:oe,title:J,body:te,subtitle:ce,footer:se,isActive:U,onClick:()=>{v(O)},showSeparator:o,...d})})})}));var ft=r(75374),Pt=r(68716),bt=r(67584),_t=r(69026),Rt=r(70329),It=r(20631);const jt=({renderItem:e})=>{const t=(0,Rt.v7)(),{getItem:r,nrValidItems:n,invalidateCache:a}=(0,bt.K_)(),{playlist:{metadata:l}}=(0,Pt.gU)();(0,It.H)(l.uri,a);const s=(0,i.useCallback)((e=>(0,C.jsx)("div",{style:{height:e}})),[]),o=(0,i.useCallback)(((t,i)=>{const n=r(t);return n?e(n,t):s(`${i}px`)}),[r,e,s]),c="POP"===(0,Qe.wQ)()?0:10;return(0,C.jsx)(ft.R,{firstInteractiveIsWrapper:!0,"aria-rowcount":n,"aria-colcount":6,children:(0,C.jsx)(_t.M,{totalCount:n,estimatedHeight:200,renderItem:o,renderPlaceholder:s,scrollNodeRef:t,nrRowsOverscan:10,persistanceKey:l.uri,nrInitialInView:c})})};var vt=r(70414);const Ot=({children:e,index:t})=>(0,C.jsx)(vt.W,{"aria-posinset":t,children:e});var wt=r(38361);const Nt=(0,i.memo)((function({usePlayContextItem:e,contextUri:t}){const{contentsOptions:{filter:r}}=(0,$e.g)(),n=(0,i.useCallback)(((e,t)=>"string"!=typeof r?e:t===dt.u.TITLE||t===dt.u.SUBTITLE?(0,C.jsx)(te.M,{searchWords:[r],textToHighlight:e}):e),[r]),a=(0,i.useCallback)(((r,i)=>(0,wt.xp)(r)?(0,C.jsx)(Ot,{index:i,children:(0,C.jsx)(Lt,{index:i,episode:r,contextUri:t,usePlayContextItem:e,showSeparator:0!==i,highlightText:n})},`${r.uri}/${i}`):null),[t,n,e]);return(0,C.jsx)(jt,{renderItem:a})}));function Bt(e){return{url:e.url,width:e.width,height:e.height}}var kt=r(39397),Mt=r(35369),Ht=r(99559),Ut=r(70279),Ft=r(86652);const Yt="zX8QX7OLPnU9eLrJV3Cd",Wt="hILz7Al7z5E0yyQdBo_K",$t=()=>{const e=(0,Mt.z)("#006450"),t=(0,le.n)(),{user:r}=(0,Be.d4)(Ht.Ht),a=(0,Ye.m)(),{canSort:s,canFilter:d}=a.getCapabilities(),{playlist:{metadata:u},contentsOptions:A}=(0,$e.g)(),g=(0,i.useMemo)((()=>{const e=(e=>({type:Ee.c.USER,uri:e?.uri??"",username:e?.id??"",displayName:e?.display_name??null,images:e?.images?.map(Bt)??[]}))(r);return{...u,owner:e,name:l.Ru.get("sidebar.your_episodes")}}),[u,r]),{isPlaying:E,togglePlay:h,usePlayContextItem:m}=(0,Ae.P)((0,Ft.A)(g.uri,A),{featureIdentifier:"your_library",referrerIdentifier:"your_library"},{shuffle:!1,repeat:Ut.p.REPEAT_NONE}),p=r?(0,ke.fH)(r.id,"your-episodes").toURI():"";return(0,C.jsxs)("section",{className:Yt,"data-testid":"your-episodes-page",children:[(0,C.jsx)(o.Q,{children:l.Ru.get("sidebar.your_episodes")}),(0,C.jsx)(Ne,{metadata:g,backgroundColor:e,isPlaying:E,isOnline:t,togglePlay:h}),(0,C.jsxs)("div",{children:[(0,C.jsx)(G,{metadata:g,backgroundColor:e,isPlaying:E,isOnline:t,togglePlay:h,canSort:s||d}),(0,C.jsxs)("div",{className:"contentSpacing",children:[(0,C.jsx)(We,{className:Wt,filterPredicates:[z.YB.UNPLAYED,z.YB.AVAILABLE_OFFLINE,z.YB.IN_PROGRESS]}),g.totalLength>0?(0,C.jsx)(Nt,{usePlayContextItem:m,contextUri:p}):(0,C.jsx)(c.p,{message:l.Ru.get("collection.empty-page.episodes-subtitle"),title:l.Ru.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:l.Ru.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,C.jsx)(n.P,{"aria-hidden":"true"})})]})]})]})},Vt=(0,i.memo)((function(){return(0,C.jsx)(Ve.W,{uri:kt.H,children:(0,C.jsx)($t,{})})}));var zt=r(10465),Kt=r(98333);const Qt=({metadata:e,canSort:t})=>{const r=(0,Mt.z)("#006450"),a=(0,le.n)(),{sortState:d}=(0,i.useContext)(L),{filter:g}=(0,i.useContext)(A.g),{isPlaying:E,togglePlay:h,usePlayContextItem:m}=(0,Ae.P)({uri:e.uri,metadata:{[Kt.W.SORTING_CRITERIA]:Y(d.option,d.order),[Kt.W.FILTERING_PREDICATE]:(0,u.ly)(g)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"},{shuffle:!1,repeat:Ut.p.REPEAT_NONE});return(0,C.jsxs)("section",{className:K,"data-testid":"your-episodes-page",children:[(0,C.jsx)(o.Q,{children:l.Ru.get("sidebar.your_episodes")}),(0,C.jsx)(Ne,{metadata:e,backgroundColor:r,isPlaying:E,isOnline:a,togglePlay:h}),(0,C.jsxs)("div",{children:[(0,C.jsx)(G,{metadata:e,backgroundColor:r,isPlaying:E,isOnline:a,togglePlay:h,canSort:t}),(0,C.jsx)("div",{className:"contentSpacing",children:e.totalLength>0?(0,C.jsx)(Le,{contextUri:e.uri,usePlayContextItem:m}):(0,C.jsx)(c.p,{message:l.Ru.get("collection.empty-page.episodes-subtitle"),title:l.Ru.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:l.Ru.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,C.jsx)(s.v,{href:"/genre/podcasts-web",children:(0,C.jsx)(n.P,{"aria-hidden":"true","aria-label":l.Ru.get("collection.empty-page.episodes-title")})})})})]})]})},Gt=(0,i.memo)((function(){const e=(0,V.f)().getCapabilities(),t=(0,zt.u)();return t?(0,C.jsx)(f,{uri:t.uri,defaultSortOption:p.ADDED_AT,children:(0,C.jsx)(A.s,{uri:t.uri,children:(0,C.jsx)(Qt,{metadata:t,canSort:e.canSortTracksAndEpisodes&&t.totalLength>0})})}):(0,C.jsx)(d.A,{hasError:!1,errorMessage:l.Ru.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})})),qt=(0,i.memo)((function(){return(0,a.NC)($.ucV)?(0,C.jsx)(Vt,{}):(0,C.jsx)(Gt,{})}))},86652:(e,t,r)=>{function i(e,t){return{uri:e,playlistQueryOptions:t}}r.d(t,{A:()=>i})},27565:(e,t,r)=>{r.d(t,{A:()=>i});const i={entityRow:"ci11tAmTK1LnxThQkXPy",actions:"_2sJPwAAp1wY1Ftke6iFe",visibleAction:"yuNzasMLs7hvemHI4d8Q",active:"dNymWGRudMrTI6ot9FBg",title:"luWcW9hkbLdFxRQB0yGb",body:"abYR6tZoE7BdzThmWTb0",footer:"GOcKQxqNMhGzbGiAXBig",separator:"yFQjuDAhri_egM1pwn70"}}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map