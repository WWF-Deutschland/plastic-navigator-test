(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ad9f6020006dcf95ec37:function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("a28fc3c963a1d4d1a2e5"),i=n("0d7f0986bcd2f33d8a2a"),s=n("ab4cb61bcb2dc161defb"),u=n("ab039aecd4a1d4fedc0e"),l=n("0b3cb19af78752326f59"),d=n("eb656803928a435bd3cc"),f=n("66543f9bb6e90e461320"),b=n("761b1f7fdd256e4f5426"),p=n("045dd844c9ae122c636a"),m=n("d6f259ffb10cc810b5a4"),g=n("adc20f99e57c573c589c"),y=n("d95b0cf107403b178365"),v=n("c8e6563c3537109b383a"),h=n("968c3c585cf17da94a14"),_=n("a7c39d8357e500a5b832"),j=n("da67b01eafe6c5aeeace"),O=n("ab7e87eba3b6ee302e04"),x=n("76ece85fcd21b6cc5f0c"),w=n("d02bbf3fc84cb2a5f54d"),E=n("824fbef8e45d46ce8bcf"),S=n("680d9676fa8f30f6a96f"),k=n("1babca734aeb0846f8a7"),M=n("5b42af1dd84f0af13496"),A=n("6917858057d82f8c6e08"),R=n("ab7d7caa0ee3a73c9e57"),T=n("5ca68c6edf7ca33c5f8f"),D=n("76abbe2db5a955046df2"),P=n("b4095948cd13c8ec6368"),C=n("d11a8f0bb6e09a1b2c13"),L=n("422249433a2d25af359d"),I=n("9bd72a5c9fd46870e6a9"),F="app/PanelTransfers/LOAD_DATA",N="app/PanelTransfers/DATA_REQUESTED",Z="app/PanelTransfers/DATA_LOAD_SUCCESS",U="app/PanelTransfers/DATA_LOAD_ERROR",W="apDp/PanelTransfers/SET_ANALYSIS",$="apDp/PanelTransfers/SET_DIRECTION",z="apDp/PanelTransfers/SET_NODE";function q(e,t){return{type:F,key:e,path:t}}function G(e,t,n){return{type:Z,key:e,data:t,time:n}}function H(e,t){return{type:N,key:e,time:t}}function B(e,t){return{type:U,error:e,key:t}}var K,J=n("6542cd13fd5dd1bcffd4"),Y=function(e,t){var n=e.id;return"uni"===e.dir&&e.nodes[t]?"".concat(n,"-nodes-").concat(t):"omni"===e.dir?"".concat(n,"-nodes"):null},Q=function(e){return"".concat(e.id,"-transfers")},V=n("01e2cd22dd17a35e4094"),X={analysis:"gyres",data:{},dataRequested:{},dataReady:{}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;return Object(V.a)(e,function(e){switch(t.type){case N:console.log("Request layer:",t.key),e.dataRequested[t.key]=t.time;break;case Z:console.log("Success loading layer:",t.key),e.data[t.key]=t.data,e.dataReady[t.key]=t.time;break;case U:console.log("Error loading transfer data... giving up!",t.key),e.dataRequested[t.key]=t.time}})},te=Object(c.a)(J.r,function(e){return e.has("transfer")?e.get("transfer"):null}),ne=Object(c.a)(J.r,function(e){return e.has("dir")?e.get("dir"):null}),re=Object(c.a)(J.r,function(e){return e.has("node")?e.get("node"):null}),ae=function(e){return e.panelTransfers||X},oe=Object(c.a)(ae,function(e){return e.data}),ce=(Object(c.a)(function(e,t){return t},oe,function(e,t){return t[e]}),Object(c.a)(function(e,t){return t},oe,function(e,t){if(t&&e){var n,r=t[Q(e)];return r=r&&r.filter(function(e){return e.value&&""!==e.value.trim()&&!Object(h.a)(e.value,0)}),"uni"===e.dir?n={from:t[Y(e,"from")],to:t[Y(e,"to")]}:(n=t[Y(e)])&&"countries"===e.id&&(n=n.filter(function(e){return"Union EEZ and country"===e.POL_TYPE})),{transfer:r,nodes:n}}return null})),ie=Object(c.a)(ae,function(e){return e.dataRequested}),se=Object(c.a)(function(e,t){return t},ie,function(e,t){return t[e]}),ue=Object(c.a)(ae,function(e){return e.dataReady}),le=Object(c.a)(function(e,t){return t},ue,function(e,t){return t[e]}),de=(Object(c.a)(ue,ie,function(e,t){return!(!e||!t)&&Object.keys(e).length!==Object.keys(t).reduce(function(e,n){return t[n]?e+1:e},0)}),"app.containers.PanelTransfers"),fe=Object(u.defineMessages)({title:{id:"".concat(de,".title"),defaultMessage:"Analyse plastic flows"},mode_gyres:{id:"".concat(de,".mode_gyres"),defaultMessage:"Regions to gyres"},mode_countries:{id:"".concat(de,".mode_countries"),defaultMessage:"Between countries*"},title_to_gyres:{id:"".concat(de,".title_to_gyres"),defaultMessage:"Where does the floating debris originate that accumulates in gyre?"},title_from_gyres:{id:"".concat(de,".title_from_gyres"),defaultMessage:"Where do ocean currents take marine debris when entering the oceans from a selected region?"},title_to_countries:{id:"".concat(de,".title_to_countries"),defaultMessage:"Where does the floating debris originate that enters a country's EEZ?"},title_from_countries:{id:"".concat(de,".title_from_countries"),defaultMessage:"Where do ocean currents take marine debris when entering the oceans from a selected country?"},intro_to_gyres:{id:"".concat(de,".intro_to_gyres"),defaultMessage:"See relative emissions of marine debris by region*"},intro_from_gyres:{id:"".concat(de,".intro_from_gyres"),defaultMessage:"See a region's relative contributions to the different gyres*"},intro_to_countries:{id:"".concat(de,".intro_to_countries"),defaultMessage:"See relative contributions of marine debris from multiple country EEZs"},intro_from_countries:{id:"".concat(de,".intro_from_countries"),defaultMessage:"See a country's relative contributions of marine debris to the different country EEZs"},hint_countries:{id:"".concat(de,".hint_countries"),defaultMessage:"* In this analysis 'countries' refers to countries' individual Exclusive Economic Zones (EEZ)"},hint_gyres:{id:"".concat(de,".hint_gyres"),defaultMessage:"* In this analysis 'regions' are based on one or more countries' Exclusive Economic Zones (EEZ)"},label_direction_countries:{id:"".concat(de,".label_direction_countries"),defaultMessage:"Select direction"},label_direction_gyres:{id:"".concat(de,".label_direction_gyres"),defaultMessage:"Select direction"},button_from_countries:{id:"".concat(de,".button_from_countries"),defaultMessage:"Emitting"},button_to_countries:{id:"".concat(de,".button_to_countries"),defaultMessage:"Receiving"},button_from_gyres:{id:"".concat(de,".button_from_gyres"),defaultMessage:"Region"},button_to_gyres:{id:"".concat(de,".button_to_gyres"),defaultMessage:"Gyre"},select_label_from_countries:{id:"".concat(de,".select_label_from_countries"),defaultMessage:"Select country EEZ"},select_label_to_countries:{id:"".concat(de,".select_label_to_countries"),defaultMessage:"Select country EEZ"},select_placeholder_from_countries:{id:"".concat(de,".select_placeholder_from_countries"),defaultMessage:"Emitting country EEZ"},select_placeholder_to_countries:{id:"".concat(de,".select_placeholder_to_countries"),defaultMessage:"Receiving country EEZ"},select_label_from_gyres:{id:"".concat(de,".select_label_from_gyres"),defaultMessage:"Select region"},select_label_to_gyres:{id:"".concat(de,".select_label_to_gyres"),defaultMessage:"Select gyre"},select_placeholder_from_gyres:{id:"".concat(de,".select_placeholder_from_gyres"),defaultMessage:"Emitting region"},select_placeholder_to_gyres:{id:"".concat(de,".select_placeholder_to_gyres"),defaultMessage:"Receiving gyre"},noDataForNode:{id:"".concat(de,".noDataForNode"),defaultMessage:"No data for previously selected option"}});function be(e,t,n,r){K||(K="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var c=new Array(o),i=0;i<o;i++)c[i]=arguments[i+3];t.children=c}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:K,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function pe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return me(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ye=l.default.div.withConfig({displayName:"Analysis__Styled",componentId:"t2xtz9-0"})(["width:100%;"]),ve=Object(l.default)(function(e){return a.a.createElement(R.a,ge({size:"xxsmall"},e))}).withConfig({displayName:"Analysis__Hint",componentId:"t2xtz9-1"})(["font-style:italic;"]),he=Object(l.default)(function(e){return a.a.createElement(T.a,ge({size:"small"},e))}).withConfig({displayName:"Analysis__Label",componentId:"t2xtz9-2"})(["color:",";display:block;"],function(e){return e.theme.global.colors.grey}),_e=Object(l.default)(function(e){return a.a.createElement(f.a,ge({plain:!0},e))}).withConfig({displayName:"Analysis__ButtonDirection",componentId:"t2xtz9-3"})(["font-family:'wwfregular';text-transform:uppercase;line-height:16px;background:",";color:",";border-radius:5px;padding:2px 13px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);&:hover{background:",";color:",";}opacity:1 !important;@media (min-width:","){padding:5px 15px;}"],function(e){var t=e.theme,n=e.active;return t.global.colors[n?"brand":"light"]},function(e){var t=e.theme,n=e.active;return t.global.colors[n?"white":"grey"]},function(e){var t=e.theme,n=e.disabled;return t.global.colors[n?"brand":"brandDark"]},function(e){return e.theme.global.colors.white},function(e){return e.theme.sizes.medium.minpx}),je=function(e,t,n,r,a,o){var c=r.id;if("gyres"===c&&t.nodes&&t.nodes[n]&&t.transfer)return t.nodes[n].filter(function(e){return t.transfer.find(function(t){return t[n]===e.code})}).map(function(e){return{value:e.code,label:e["name_".concat(a)]}}).sort(function(t,n){return e&&Object(h.a)(t.value,e)?-1:e&&Object(h.a)(n.value,e)?1:0});if("countries"===c&&t.nodes&&t.transfer){var i=o&&o.length>1&&new RegExp(Object(C.deburr)(Object(L.a)(o)),"i");return t.nodes.filter(function(r){return(!i||Object(h.a)(e,r.MRGID_EEZ)||i.test(Object(C.deburr)(Object(L.a)(r.UNION))))&&t.transfer.find(function(e){return e[n]===r.MRGID_EEZ})}).map(function(e){return{value:e.MRGID_EEZ,label:e.UNION}}).sort(function(t,n){return e&&Object(h.a)(t.value,e)?-1:e&&Object(h.a)(n.value,e)?1:Object(C.deburr)(Object(L.a)(t.label))>Object(C.deburr)(Object(L.a)(n.label))?1:-1})}return[]},Oe=function(e,t,n,r,a){var o=r.id,c="to"===n?"from":"to",i=t.transfer&&t.transfer.filter(function(t){return Object(h.a)(t[n],e)}).sort(function(e,t){return parseFloat(e.value)>parseFloat(t.value)?-1:1}),s=i&&i.reduce(function(e,t){var n=t.value;return e+parseFloat(n)},0);return i&&"gyres"===o?i.map(function(e){var n=t.nodes&&t.nodes[c].find(function(t){return Object(h.a)(t.code,e[c])});return{code:e[c],label:n?n["name_".concat(a)]:e[c],value:parseFloat(e.value),ratio:parseFloat(e.value)/s}}):i&&"countries"===o?i.map(function(e){var n=t.nodes&&t.nodes.find(function(t){return Object(h.a)(t.MRGID_EEZ,e[c])});return{code:e[c],label:n?n.UNION:e[c],value:parseFloat(e.value),ratio:parseFloat(e.value)/s}}):[]},xe=function(e){return Object(I.b)(100*parseFloat(e),2,!0)};var we=Object(c.b)({data:function(e,t){var n=t.analysisConfig;return ce(e,n)}});var Ee,Se=Object(o.connect)(we,function(e){return{onLoadData:function(t){e(q(Q(t),t.transfer.data)),"uni"===t.dir?(e(q(Y(t,"from"),t.nodes.from.data)),e(q(Y(t,"to"),t.nodes.to.data))):e(q(Y(t),t.nodes.data))}}}),ke=Object(s.compose)(Se)(Object(u.injectIntl)(function(e){var t=e.id,n=e.analysisConfig,o=e.onLoadData,c=e.data,i=e.direction,s=e.onSetDirection,l=e.onSetNode,f=e.node,b=e.intl,p=pe(Object(r.useState)(null),2),m=p[0],g=p[1];Object(r.useEffect)(function(){o(n)},[t]);var y=b.locale,v=je(f,c,i,n,y,m),h=!f||!!v.find(function(e){return e.value===f}),_=h&&Oe(f,c,i,n,y);return be(ye,{},void 0,be(D.a,{level:4},void 0,a.a.createElement(u.FormattedMessage,fe["title_".concat(i,"_").concat(t)])),be(R.a,{},void 0,a.a.createElement(u.FormattedMessage,fe["intro_".concat(i,"_").concat(t)])),fe["hint_".concat(t)]&&be(ve,{},void 0,a.a.createElement(u.FormattedMessage,fe["hint_".concat(t)])),be(he,{},void 0,a.a.createElement(u.FormattedMessage,fe["label_direction_".concat(t)])),be(d.a,{direction:"row",gap:"xxsmall"},void 0,["from","to"].map(function(e){return be(_e,{active:i===e,disabled:i===e,onClick:function(){return s(e)},label:a.a.createElement(u.FormattedMessage,fe["button_".concat(e,"_").concat(t)])},e)})),be("div",{},void 0,be(he,{},void 0,a.a.createElement(u.FormattedMessage,fe["select_label_".concat(i,"_").concat(t)])),"gyres"===t&&be(P.a,{id:"select-".concat(t),name:"select-".concat(t),labelKey:"label",valueKey:{key:"value",reduce:!0},value:f||"",options:v,placeholder:a.a.createElement(u.FormattedMessage,fe["select_placeholder_".concat(i,"_").concat(t)]),onChange:function(e){var t=e.value;return l(t!==f?t:null)}}),"countries"===t&&be(P.a,{id:"select-".concat(t),name:"select-".concat(t),labelKey:"label",valueKey:{key:"value",reduce:!0},value:f||"",options:v,placeholder:a.a.createElement(u.FormattedMessage,fe["select_placeholder_".concat(i,"_").concat(t)]),onOpen:function(){return g("")},onChange:function(e){var t=e.value;return l(t!==f?t:null)},onSearch:function(e){var t=e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&");return g(t)}}),!h&&be(ve,{},void 0,a.a.createElement(u.FormattedMessage,fe.noDataForNode)),h&&_&&_.length>0&&be("table",{},void 0,be("thead",{},void 0,be("tr",{},void 0,be("th",{style:{textAlign:"left"}},void 0,"Name"),be("th",{style:{textAlign:"right"}},void 0,"%"))),be("tbody",{},void 0,_.map(function(e){return be("tr",{},e.code,be("td",{},void 0,e.label),be("td",{style:{textAlign:"right"}},void 0,"".concat(xe(e.ratio)," %")))})))))})),Me=n("d782b72bc5b680c7122c"),Ae=n("3aced5b508e7389026da"),Re=n("f178464512c7054bce4f"),Te=n.n(Re),De=(n("891a3600be771f0bff85"),n("c25aa7756a768876b4dc"),regeneratorRuntime.mark(Ze)),Pe=regeneratorRuntime.mark(Ue),Ce=regeneratorRuntime.mark(We),Le=regeneratorRuntime.mark($e),Ie=regeneratorRuntime.mark(ze),Fe=regeneratorRuntime.mark(qe),Ne=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.f;return regeneratorRuntime.mark(function r(){var a,o,c,i,s=arguments;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:for(a=0,o=s.length,c=new Array(o),i=0;i<o;i++)c[i]=s[i];case 2:if(!(a<n)){r.next=17;break}return a+=1,r.prev=4,r.next=7,Me.call.apply(void 0,[e].concat(c));case 7:return r.abrupt("break",17);case 10:if(r.prev=10,r.t0=r.catch(4),!(a>=n)){r.next=15;break}return r.next=15,t.apply(void 0,[r.t0].concat(c));case 15:r.next=2;break;case 17:case"end":return r.stop()}},r,null,[[4,10]])})};function Ze(e,t){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.key,r.next=3,Object(Me.put)(B(e,n));case 3:case"end":return r.stop()}},De)}function Ue(e){var t,n,r,a,o,c,i,s;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.key,n=e.path,u.next=3,Object(Me.select)(se,t);case 3:return r=u.sent,u.next=6,Object(Me.select)(le,t);case 6:if(a=u.sent,!n||!t||r||a){u.next=46;break}return o="".concat(m.l.DATA,"/").concat(n),u.prev=9,u.next=12,Object(Me.put)(H(t,Date.now()));case 12:return u.next=14,fetch(o);case 14:return c=u.sent,u.next=17,c.ok;case 17:if(!u.sent){u.next=36;break}if("function"!==typeof c.text){u.next=34;break}return u.next=22,c.text();case 22:if(!(i=u.sent)){u.next=31;break}return u.next=26,Te.a.parse(i,{header:!0,skipEmptyLines:!0});case 26:return s=u.sent,u.next=29,Object(Me.put)(G(t,s.data,Date.now()));case 29:u.next=34;break;case 31:return u.next=33,Object(Me.put)(H(t,!1));case 33:throw new Error(c.statusText);case 34:u.next=39;break;case 36:return u.next=38,Object(Me.put)(H(t,!1));case 38:throw new Error(c.statusText);case 39:u.next=46;break;case 41:return u.prev=41,u.t0=u.catch(9),u.next=45,Object(Me.put)(H(t,!1));case 45:throw new Error(u.t0);case 46:case"end":return u.stop()}},Pe,null,[[9,41]])}function We(e){var t,n,r,a,o;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.id,c.next=3,Object(Me.select)(J.p);case 3:if(n=c.sent,(r=new URLSearchParams(n.search)).set("transfer",t),a=r.toString(),(o=a.length>0?"?".concat(a):"")===n.search){c.next=11;break}return c.next=11,Object(Me.put)(Object(Ae.push)("".concat(n.pathname).concat(o)));case 11:case"end":return c.stop()}},Ce)}function $e(e){var t,n,r,a,o;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.direction,c.next=3,Object(Me.select)(J.p);case 3:if(n=c.sent,(r=new URLSearchParams(n.search)).set("dir",t),a=r.toString(),(o=a.length>0?"?".concat(a):"")===n.search){c.next=11;break}return c.next=11,Object(Me.put)(Object(Ae.push)("".concat(n.pathname).concat(o)));case 11:case"end":return c.stop()}},Le)}function ze(e){var t,n,r,a,o;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.node,c.next=3,Object(Me.select)(J.p);case 3:if(n=c.sent,r=new URLSearchParams(n.search),t&&""!==t.trim()?r.set("node",t):r.delete("node"),a=r.toString(),(o=a.length>0?"?".concat(a):"")===n.search){c.next=11;break}return c.next=11,Object(Me.put)(Object(Ae.push)("".concat(n.pathname).concat(o)));case 11:case"end":return c.stop()}},Ie)}function qe(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Me.takeEvery)(F,Ne(Ue,Ze,m.f));case 2:return e.next=4,Object(Me.takeLatest)(W,We);case 4:return e.next=6,Object(Me.takeLatest)($,$e);case 6:return e.next=8,Object(Me.takeLatest)(z,ze);case 8:case"end":return e.stop()}},Fe)}function Ge(e,t,n,r){Ee||(Ee="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var c=new Array(o),i=0;i<o;i++)c[i]=arguments[i+3];t.children=c}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:Ee,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function He(){return(He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Be=Object(l.default)(function(e){return a.a.createElement(d.a,He({},e,{elevation:"medium"}))}).withConfig({displayName:"PanelTransfers__Styled",componentId:"j8k72h-0"})(["position:absolute;right:0;top:0;bottom:0;width:100%;pointer-events:all;@media (min-width:","){width:","px;}"],function(e){return e.theme.sizes.medium.minpx},function(e){return e.panelWidth||400}),Ke=Ge(_.p,{});var Je=Object(c.b)({activeAnalysis:function(e){return te(e)},direction:function(e){return ne(e)},node:function(e){return re(e)}});var Ye,Qe=Object(o.connect)(Je,function(e){return{onSetAnalysis:function(t){return e(function(e){return{type:W,id:e}}(t))},onSetDirection:function(t){return e({type:$,direction:t})},onSetNode:function(t){return e(function(e){return{type:z,node:e}}(t))}}}),Ve=Object(s.compose)(Qe)(function(e){var t=e.onClose,n=e.analysesConfig,o=e.activeAnalysis,c=e.onSetAnalysis,i=e.direction,s=e.onSetDirection,l=e.onSetNode,d=e.node;Object(y.a)({key:"panelTransfers",reducer:ee}),Object(g.a)({key:"panelTransfers",saga:qe});var f=Object(r.useRef)();return Object(r.useEffect)(function(){f.current.scrollTop=0},[o]),Object(r.useEffect)(function(){o?s("gyres"===o?"to":"from"):c("gyres")},[o]),Object(r.useEffect)(function(){"gyres"===o&&l("")},[i]),Ge(b.a.Consumer,{},void 0,function(e){return Ge(Be,{background:"white",panelWidth:Object(v.b)(e)},void 0,Ge(E.a,{},void 0,Ge(A.a,{onClick:function(){return t()}}),Ge(k.a,{},void 0,Ke,Ge(S.a,{},void 0,a.a.createElement(u.FormattedMessage,fe.title))),Ge(j.a,{},void 0,n&&n.map(function(e){var t=e.id;return Ge(x.a,{},t,Ge(O.a,{onClick:function(){return c(t)},active:o===t,disabled:o===t,label:Ge(w.a,{active:o===t},void 0,a.a.createElement(u.FormattedMessage,fe["mode_".concat(t)]))}))}))),a.a.createElement(M.a,{ref:f},o&&n&&Ge(ke,{id:o,direction:i,onSetDirection:s,node:d,onSetNode:l,analysisConfig:n.find(function(e){var t=e.id;return Object(h.a)(t,o)})})))})}),Xe=n("f9c0d22799479965d07c"),et=n("a72b40110d9c31c9b5c5"),tt=n("02ed36e7ccc5625439c9"),nt="app.containers.PanelExplore",rt=Object(u.defineMessages)({showLayerPanel:{id:"".concat(nt,".showLayerPanel"),defaultMessage:"Layers"},showProjects:{id:"".concat(nt,".showProjects"),defaultMessage:"Show WWF-projects"},hideProjects:{id:"".concat(nt,".hideProjects"),defaultMessage:"Hide WWF-projects"},showProjectsShort:{id:"".concat(nt,".showProjectsShort"),defaultMessage:"Show projects"},hideProjectsShort:{id:"".concat(nt,".hideProjectsShort"),defaultMessage:"Hide projects"}});function at(e,t,n,r){Ye||(Ye="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var c=new Array(o),i=0;i<o;i++)c[i]=arguments[i+3];t.children=c}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:Ye,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ot(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return ct(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ct(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ct(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function it(){return(it=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"ModuleTransfers",function(){return bt});var st=Object(l.default)(function(e){return a.a.createElement(d.a,it({gap:"small",direction:"row"},e))}).withConfig({displayName:"ModuleTransfers__Buttons",componentId:"sc-1sdlb11-0"})(["position:absolute;right:12px;top:22px;pointer-events:all;"]),ut=Object(l.default)(function(e){return a.a.createElement(f.a,it({plain:!0,reverse:!0},e))}).withConfig({displayName:"ModuleTransfers__ShowButton",componentId:"sc-1sdlb11-1"})(["font-family:'wwfregular';text-transform:uppercase;line-height:16px;background:",";color:",";border-radius:20px;padding:2px 13px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);&:hover{background:",";}@media (min-width:","){padding:5px 15px 5px 21px;}"],function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"white":"brand"]},function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"black":"white"]},function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"lightHover":"brandDark"]},function(e){return e.theme.sizes.medium.minpx}),lt="ModuleTransfers",dt={layersMemo:null},ft=at(_.p,{color:"white"});function bt(e){var t=e.onSetLayers,n=e.uiState,o=e.onMemoLayers,c=e.activeLayers,s=e.firstLanding,l=e.onSetLanding,d=e.intl,f=e.analysesConfig,g=(n?Object.assign({},dt,n):dt).layersMemo;Object(r.useEffect)(function(){g?t(g):m.g.transfers.layers&&!s&&t(m.g.transfers.layers),s&&l()},[]),Object(r.useEffect)(function(){o(c,n)},[c]);var y=ot(Object(r.useState)(!0),2),v=y[0],h=y[1],_=ot(Object(r.useState)(!1),2),j=_[0],O=_[1];return at(b.a.Consumer,{},void 0,function(e){return at("div",{},void 0,at(i.Helmet,{},void 0,at("title",{},void 0,"".concat(d.formatMessage(tt.a.module_transfers_metaTitle)))),at(Xe.a,{},void 0,v&&"small"!==e&&at(Ve,{analysesConfig:f,onClose:function(){return h(!1)}}),j&&"small"===e&&at(p.a,{full:!0},void 0,at(Ve,{analysesConfig:f,onClose:function(){return O(!1)}})),(!v&&"small"!==e||!j&&"small"===e)&&at(st,{},void 0,at(ut,{onClick:function(){h(!0),O(!0)},icon:ft,label:a.a.createElement(u.FormattedMessage,rt.showLayerPanel)}))))})}var pt=Object(c.b)({uiState:function(e){return Object(J.w)(e,{key:lt})},activeLayers:function(e){return Object(J.a)(e)},firstLanding:function(e){return Object(J.j)(e)},analysesConfig:function(e){return Object(J.c)(e,{key:"transfers"})}});var mt=Object(o.connect)(pt,function(e){return{onSetLanding:function(){return e(Object(et.m)())},onSetLayers:function(t){return e(Object(et.o)(t))},onMemoLayers:function(t,n){return e(Object(et.r)(lt,Object.assign({},dt,n,{layersMemo:t})))}}});t.default=Object(s.compose)(mt)(Object(u.injectIntl)(bt))}}]);