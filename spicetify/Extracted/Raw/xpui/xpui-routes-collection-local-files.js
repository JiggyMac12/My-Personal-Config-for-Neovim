"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4389],{29651:(e,t,l)=>{l.d(t,{d:()=>T});var r=l(30758),s=l(41331),i=l(4888),a=l(33396),n=l(76484),o=l(76276);const c={"custom-order":n.RB,"title-and-artist-title":{column:o.$.TITLE_AND_ARTIST,order:o.H.ASC},"title-and-artist-artist":{column:o.$.TITLE_AND_ARTIST,order:o.H.SECONDARY_ASC},title:{column:o.$.TITLE,order:o.H.ASC},artist:{column:o.$.ARTIST,order:o.H.ASC},"added-by":{column:o.$.ADDED_BY,order:o.H.ASC},"added-at":{column:o.$.ADDED_AT,order:o.H.ASC},duration:{column:o.$.DURATION,order:o.H.ASC},album:{column:o.$.ALBUM,order:o.H.ASC},"album-or-podcast":{column:o.$.ALBUM_OR_PODCAST,order:o.H.ASC},"album-or-show":{column:o.$.ALBUM_OR_SHOW,order:o.H.ASC}},u={"title-and-artist-title":o.$.TITLE_AND_ARTIST,"title-and-artist-artist":o.$.TITLE_AND_ARTIST,title:o.$.TITLE,artist:o.$.ARTIST,"added-by":o.$.ADDED_BY,"added-at":o.$.ADDED_AT,duration:o.$.DURATION,album:o.$.ALBUM,"album-or-podcast":o.$.ALBUM_OR_PODCAST,"album-or-show":o.$.ALBUM_OR_SHOW},d={[o.H.NONE]:o.H.NONE,[o.H.ASC]:o.H.DESC,[o.H.DESC]:o.H.ASC,[o.H.SECONDARY_ASC]:o.H.SECONDARY_DESC,[o.H.SECONDARY_DESC]:o.H.SECONDARY_ASC},m=(o.$.INDEX,{[o.$.INDEX]:{key:"custom-order",get value(){return s.Ru.get("sort.custom-order")}},[o.$.TITLE_AND_ARTIST]:{key:"title",get value(){return s.Ru.get("sort.title")}},[o.$.TITLE]:{key:"title",get value(){return s.Ru.get("sort.title")}},[o.$.ARTIST]:{key:"artist",get value(){return s.Ru.get("sort.artist")}},[o.$.ADDED_BY]:{key:"added-by",get value(){return s.Ru.get("sort.added-by")}},[o.$.ADDED_AT]:{key:"added-at",get value(){return s.Ru.get("sort.date-added")}},[o.$.DURATION]:{key:"duration",get value(){return s.Ru.get("sort.duration")}},[o.$.EVENT_DATE]:null,[o.$.EVENT_INFO]:null,[o.$.ALBUM]:{key:"album",get value(){return s.Ru.get("sort.album")}},[o.$.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return s.Ru.get("sort.album-or-podcast")}},[o.$.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return s.Ru.get("sort.album-or-show")}},[o.$.PLAYS]:null,[o.$.RELEASE_DATE]:null,[o.$.ADD]:null,[o.$.ACTIONS]:null,[o.$.CONCERT_VENUE]:null,[o.$.CONCERT_DATE]:null,[o.$.TITLE_AND_AUTHOR]:{key:"title",get value(){return s.Ru.get("sort.title")}},[o.$.AUTHOR]:null,[o.$.BPM]:null,[o.$.KEY]:null,[o.$.VIBE]:null});var g=l(86070);function x(e){return!!e}const T=({columns:e,disabled:t,onSort:l})=>{const T=[...e],A=T.indexOf(o.$.TITLE_AND_ARTIST),p=T.indexOf(o.$.TITLE_AND_AUTHOR);-1!==A&&T.splice(A,1,o.$.TITLE,o.$.ARTIST),-1!==p&&T.splice(p,1);const{sortState:y,setSortState:C}=(0,r.useContext)(n.cL),R=function(e){return null===e.column?m[o.$.INDEX]:(0,i.kj)(e.column,e)?m[o.$.ARTIST]:m[e.column]}(y),h=(0,r.useCallback)((e=>{l?.(),C(((e,t,l)=>e?t!==u[e]?c[e]:{column:u[e],order:d[l]}:n.RB)(e,y.column,y.order))}),[l,C,y.column,y.order]),S=(0,r.useCallback)((()=>null!==y.column),[y.column]),I=T.map((e=>m[e])).filter(x);return(0,g.jsx)(a.g,{options:I,onSelect:h,selected:R,isSelectionChanged:S,sortOrder:y.order,heading:s.Ru.get("drop_down.sort_by"),disabled:t,enableViewModeMenu:!0})}},95789:(e,t,l)=>{l.r(t),l.d(t,{default:()=>be});var r=l(30758),s=l(2569),i=l(18230),a=l(13390),n=l(61585),o=l(28821),c=l(41331),u=l(52182),d=l(13796),m=l(59092),g=l(16373),x=l(99168),T=l(90436),A=l(27275),p=l(7029),y=l(13799),C=l(4888),R=l(20641),h=l(76484),S=l(6488),I=l(76276),b=l(99842),j=l(13948),E=l(65114),D=l(2061),f=l(29651),$=l(1335),_=l(78487);const k="ijkY1leciNts_lZ000bI",P="nyi5paBf0kJsz7Py0DaI";var N=l(86070);const v=r.memo((({tracklistDomRef:e})=>{const{spec:t,logger:l}=(0,_.r)(E.E,{}),s=(0,r.useCallback)((()=>{l.logInteraction(t.filterFieldFactory().keyStrokeFilter())}),[l,t]),i=(0,r.useCallback)((()=>{l.logInteraction(t.filterFieldFactory().hitClearFilter())}),[l,t]),a=(0,$.w)().filter((({columnType:e})=>h.ws.includes(e))).map((({columnType:e})=>e));return(0,N.jsxs)("div",{className:P,children:[(0,N.jsx)(r.Suspense,{fallback:null,children:(0,N.jsx)(D.S,{placeholder:c.Ru.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:e,onFilter:s,onClear:i})}),(0,N.jsx)(f.d,{columns:a})]})}));var O=l(96935),L=l(15339),M=l(3782),H=l(71115),U=l(66311),B=l(72553);const w=r.memo((function({tracklistDomRef:e,togglePlay:t,isPlaying:l,isActive:s,backgroundColor:i,spec:a,logger:n}){const o=(0,L.X)(),u=(0,r.useMemo)((()=>a.shuffleButtonContainerFactory()),[a]),d=(0,M.j)(),m=(0,r.useCallback)((()=>{const e=(0,H.$I)({isPlaying:l,isActive:s,spec:a.playButtonFactory(),logger:n,uri:U.bV});t({loggingParams:e})}),[s,l,n,a,t]);return(0,N.jsx)(b.E,{backgroundColor:i,children:(0,N.jsxs)(j.S,{children:[(0,N.jsx)(y.D,{size:d,onClick:m,isPlaying:l,uri:U.bV}),o&&(0,N.jsx)(B.r,{spec:u,children:(0,N.jsx)(O.Y,{entityName:c.Ru.get("local-files"),contextUri:U.bV,activationPlacement:"bottomEnd",size:d})}),(0,N.jsx)(B.r,{spec:a,children:(0,N.jsx)(v,{tracklistDomRef:e})})]})})}));var F=l(6408),Y=l(93720),V=l(89162),X=l(19194),z=l(76020),W=l(50597),Z=l(73689),q=l(69197),K=l(58571),J=l(65647),Q=l(9689),G=l(765),ee=l(62385),te=l(70045),le=l(78089),re=l(71321),se=l(77131),ie=l(68732),ae=l(76774),ne=l(3068),oe=l(44817),ce=l(78330),ue=l(42668);const de=r.memo((function({uri:e,uid:t,name:l,duration_ms:s,artists:i,album:a,is19PlusOnly:n,isExplicit:o,isPlayable:u,index:d,contextUri:m,imgUrl:g,usePlayContextItem:x,isCompactMode:T=!1}){const{spec:A}=(0,_.r)(F.i,{data:{position:d,reason:"",uri:e}}),{filter:p}=(0,r.useContext)(R.g),{isActive:y,isPlaying:C,triggerPlay:h,togglePlay:S}=x({uid:t,uri:e,index:d}),{badges:b,hasBadges:j}=(0,ue.b)({isExplicit:o}),E=i?.map((e=>e.name)).join(c.Ru.getSeparator())||"",D=(0,$.w)();return(0,N.jsx)(ce.pZ,{value:"row",index:d,children:(0,N.jsx)(Y.h,{menu:(0,N.jsx)(V.A,{uri:e,uid:t,contextUri:m}),children:(0,N.jsx)(ie.w,{uri:e,contextUri:m,isActive:y,index:d,onTriggerPlay:(e,t)=>{h({loggingParams:t})},ariaRowIndex:d+1,isPlayable:u,ageRestricted:n,dragMetadata:{name:l,createdBy:E},spec:A,isCompactMode:T,children:D.map((({columnType:r,options:n},o)=>{const u=(0,ae.y)(o,r,D);switch(r){case I.$.INDEX:return(0,N.jsx)(u,{ariaColIndex:o,children:(0,N.jsx)(G.$,{uri:e,playAriaLabel:c.Ru.get("tracklist.a11y.play",l,E),isPlaying:C,isActive:y,onClick:(e,t)=>{S({loggingParams:t})},spec:A,children:(0,N.jsx)(te.a,{children:d+1})})},o);case I.$.TITLE_AND_ARTIST:return(0,N.jsxs)(u,{ariaColIndex:o,children:[(0,N.jsx)(K.e,{src:g}),(0,N.jsxs)(J.l,{children:[(0,N.jsx)(se.p,{titleText:l,children:(0,N.jsx)(X.M,{searchWords:[p],textToHighlight:l})}),j&&(0,N.jsx)(Z.P,{children:b.explicit?(0,N.jsx)(oe.g,{}):null}),(0,N.jsx)(le.p,{children:i&&(0,N.jsx)(z.E,{nonInteractive:!0,artists:i,filter:p})})]})]},o);case I.$.TITLE:return(0,N.jsx)(u,{ariaColIndex:o,children:(0,N.jsxs)(Q.q,{children:[(0,N.jsx)(se.p,{titleText:l,children:(0,N.jsx)(X.M,{searchWords:[p],textToHighlight:l})}),j&&(0,N.jsx)(Z.P,{children:b.explicit?(0,N.jsx)(oe.g,{}):null})]})},o);case I.$.ARTIST:return(0,N.jsx)(u,{ariaColIndex:o,children:(0,N.jsx)(re.Y,{children:i&&(0,N.jsx)(z.E,{nonInteractive:!0,artists:i,filter:p})})},o);case I.$.ALBUM:return(0,N.jsx)(u,{ariaColIndex:o,children:a?.name&&(0,N.jsx)(W.g,{nonInteractive:!0,uri:a?.uri,name:a?.name,children:(0,N.jsx)(X.M,{searchWords:[p],textToHighlight:a?.name})})},o);case I.$.DURATION:return(0,N.jsxs)(u,{ariaColIndex:o,children:[(0,N.jsx)(ne.d,{uri:e}),!n?.hideDuration&&(0,N.jsx)(q.P,{duration:s}),(0,N.jsx)(ee.Y,{menu:(0,N.jsx)(V.A,{uri:e,uid:t,contextUri:m}),label:c.Ru.get("more.label.track",l,E),spec:A})]},o);default:return null}}))})})})}),((e,t)=>e.uri===t.uri&&e.index===t.index&&e.isCompactMode===t.isCompactMode));var me=l(20507),ge=l(92686);const xe=new Set(h.ws),Te=r.memo((function({uri:e,tracks:t,sortState:l,handleSort:s,usePlayContextItem:i,tracklistDomRef:a,isCompactMode:n=!1}){const o=(0,$.w)(),u=(0,r.useRef)(null),d=(0,r.useCallback)(((t,l)=>{const r=(0,ge.g)(t.album?.images,{desiredSize:40,desiredLabel:"small"});return(0,N.jsx)(de,{index:l,contextUri:e,uri:t.uri,uid:t.uid,isPlayable:t.isPlayable,duration_ms:t.duration.milliseconds,name:t.name,artists:t.artists,album:t.album||void 0,isExplicit:t.isExplicit,is19PlusOnly:t.is19PlusOnly,type:t.type,imgUrl:r?.url||"",usePlayContextItem:i,isCompactMode:n},t.uid)}),[e,i,n]),m=(0,r.useCallback)((e=>({uri:e.uri,uid:e.uid})),[]);return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(ce.pZ,{value:"playlist-tracklist",children:(0,N.jsx)(me.S4,{ariaLabel:c.Ru.get("local-files"),hasHeaderRow:!0,columns:o,sortableColumns:xe,sortState:l,onSort:s,renderRow:d,resolveItem:m,tracks:t,nrTracks:t.length,limit:100,outerRef:u,outerDomRef:a,isCompactMode:n,columnPersistenceKey:"playlist-tracklist"},e)})})}));var Ae=l(80545),pe=l(35369),ye=l(19870),Ce=l(97167),Re=l(98882),he=l(4139);const Se=[I.$.INDEX,I.$.TITLE_AND_ARTIST,I.$.ALBUM,I.$.DURATION],Ie=()=>{const{filter:e}=(0,r.useContext)(R.g),{sortState:t,setSortState:l}=(0,r.useContext)(h.cL),b=(0,Ce.A)(),j=(0,ye.P)(),E=(0,pe.z)(a.Qmy),D=(0,r.useRef)(null),{spec:f}=(0,_.r)(o.Z,{data:{uri:U.bV}}),$=(0,r.useMemo)((()=>f.actionBarFactory()),[f]),P=(0,r.useMemo)((()=>f.tracklistFactory()),[f]),v=(0,he.s)(),{isCompactMode:O}=(0,Ae.a)(),L=(({isCompactMode:e=!1})=>{const t=[...Se];return e&&t.splice(t.indexOf(I.$.TITLE_AND_ARTIST),1,I.$.TITLE,I.$.ARTIST),t})({isCompactMode:O}),M=(0,r.useCallback)(((e,r)=>{l((0,C.So)(e,t)),v.logInteraction(f.tracklistFactory().columnHeaderFactory({identifier:e,position:r||0}).hitSort())}),[l,t,v,f]),{data:H}=(0,s.I)({queryKey:["local-files",t,e],queryFn:()=>b.getTracks((0,C.Xt)(t),e),staleTime:0,gcTime:3e5,placeholderData:i.rX,enabled:j}),{isActive:F,isPlaying:Y,togglePlay:V,usePlayContextItem:X}=(0,Re.P)({uri:U.bV,pages:[{items:(H??[]).map((e=>({...e,provider:null})))}]},{featureIdentifier:"local_files"});return H?e||H.length&&j?(0,N.jsx)(S.a,{columns:L,children:(0,N.jsxs)("div",{role:"presentation",className:k,children:[(0,N.jsxs)(m.z,{backgroundColor:E,children:[(0,N.jsxs)(x.h,{children:[(0,N.jsx)(y.D,{size:"medium",onClick:()=>V(),isPlaying:Y,uri:U.bV}),(0,N.jsx)(T.X,{text:c.Ru.get("local-files")})]}),(0,N.jsxs)(g.Y,{children:[(0,N.jsx)(A.mm,{children:c.Ru.get("local-files")}),(0,N.jsx)(d.Z,{children:c.Ru.get("local-files.description")})]})]}),(0,N.jsx)(w,{togglePlay:V,isPlaying:Y,isActive:F,backgroundColor:E,tracklistDomRef:D,spec:$,logger:v}),(0,N.jsx)("div",{className:"contentSpacing",children:(0,N.jsx)(B.r,{spec:P,children:(0,N.jsx)(Te,{tracks:H,uri:U.bV,handleSort:M,sortState:t,usePlayContextItem:X,tracklistDomRef:D,isCompactMode:O})})})]})}):(0,N.jsx)(u.p,{linkTo:"/preferences",linkTitle:c.Ru.get("local-files.empty-button"),message:c.Ru.get("local-files.empty-description"),title:c.Ru.get("local-files.empty-header"),children:(0,N.jsx)(n.s,{size:"xxlarge","aria-hidden":"true"})}):(0,N.jsx)(p.A,{hasError:!1,errorMessage:c.Ru.get("error.request-artist-failure"),loadOffline:!0})},be=()=>(0,N.jsx)(h.sn,{uri:"spotify:internal:local-files",children:(0,N.jsx)(R.s,{uri:"spotify:internal:local-files",children:(0,N.jsx)(Ie,{})})})},19870:(e,t,l)=>{l.d(t,{P:()=>s});var r=l(19993);function s(){return(0,r.y)()[0]}},19993:(e,t,l)=>{l.d(t,{y:()=>i});var r=l(30758),s=l(97167);function i(){const e=(0,s.A)(),[t,l]=(0,r.useState)(e.getIsEnabled());(0,r.useEffect)((()=>{const t=e.subscribeIsEnabled(l);return()=>t()}),[e]);return[t,(0,r.useCallback)((t=>e.setIsEnabled(t)),[e])]}}}]);
//# sourceMappingURL=xpui-routes-collection-local-files.js.map