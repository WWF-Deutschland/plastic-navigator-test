(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ef09d4344e98a758bac7:function(e,t,n){"use strict";n.r(t);var r,o=n("8af190b70a6bc55c6f1b"),a=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("a28fc3c963a1d4d1a2e5"),l=n("0d7f0986bcd2f33d8a2a"),u=n("ab4cb61bcb2dc161defb"),f=n("ab039aecd4a1d4fedc0e"),d=n("0b3cb19af78752326f59"),s=n("eb656803928a435bd3cc"),p=n("66543f9bb6e90e461320"),b=n("045dd844c9ae122c636a"),m=n("6e05b15597c94fea0ef3"),h=n("422249433a2d25af359d"),y=n("c8e6563c3537109b383a"),g=n("d6f259ffb10cc810b5a4"),v=n("5ca68c6edf7ca33c5f8f"),j=n("76abbe2db5a955046df2"),w=n("ab7d7caa0ee3a73c9e57"),O=n("761b1f7fdd256e4f5426"),x=n("a7c39d8357e500a5b832"),L=n("968c3c585cf17da94a14"),_=n("0785de3f40b134973d35"),E=n("6542cd13fd5dd1bcffd4"),C=n("a72b40110d9c31c9b5c5"),S=n("f64ff5b2dfbac1021ef4"),I=n("d3dfb88bd55587d538d0"),A="app.components.GroupLayers",k=Object(f.defineMessages)({columnLayer:{id:"".concat(A,".columnLayer"),defaultMessage:"Layer"},columnProject:{id:"".concat(A,".columnProject"),defaultMessage:"Project"},columnIndicator:{id:"".concat(A,".columnIndicator"),defaultMessage:"Topic"},columnKey:{id:"".concat(A,".columnKey"),defaultMessage:"Key"},columnInfo:{id:"".concat(A,".columnInfo"),defaultMessage:"Read more"},info:{id:"".concat(A,".info"),defaultMessage:"Info"}});function P(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var T=d.default.div.withConfig({displayName:"GroupLayers__Styled",componentId:"plf17t-0"})(["display:table;table-layout:fixed;margin-top:12px;margin-bottom:20px;width:100%;"]),N=d.default.div.withConfig({displayName:"GroupLayers__ListHeader",componentId:"plf17t-1"})(["display:table-header-group;"]),F=d.default.div.withConfig({displayName:"GroupLayers__ListHeaderRow",componentId:"plf17t-2"})(["display:table-row;"]),D=d.default.div.withConfig({displayName:"GroupLayers__ListHeaderCell",componentId:"plf17t-3"})(["display:table-cell;font-size:12px;line-height:14px;border-bottom:1px solid ",";vertical-align:middle;color:",";white-space:nowrap;"],function(e){return e.theme.global.colors["light-4"]},function(e){return e.theme.global.colors["dark-4"]}),G=Object(d.default)(D).withConfig({displayName:"GroupLayers__ListHeaderKey",componentId:"plf17t-4"})(["width:45px;text-align:center;"]),U=Object(d.default)(D).withConfig({displayName:"GroupLayers__ListHeaderInfo",componentId:"plf17t-5"})(["width:65px;text-align:center;"]),B=d.default.div.withConfig({displayName:"GroupLayers__ListBody",componentId:"plf17t-6"})(["display:table-row-group;"]),z=d.default.div.withConfig({displayName:"GroupLayers__ListBodyRow",componentId:"plf17t-7"})(["display:table-row;"]),W=d.default.div.withConfig({displayName:"GroupLayers__ListBodyCell",componentId:"plf17t-8"})(["display:table-cell;vertical-align:middle;height:54px;padding:6px 0;border-bottom:1px solid ",";"],function(e){return e.theme.global.colors["light-4"]}),$=Object(d.default)(W).withConfig({displayName:"GroupLayers__ListBodyCellCenter",componentId:"plf17t-9"})(["text-align:center;"]),H=Object(d.default)(function(e){return a.a.createElement(p.a,M({},e,{plain:!0}))}).withConfig({displayName:"GroupLayers__InfoButton",componentId:"plf17t-10"})(["font-family:'wwfregular';text-transform:uppercase;line-height:16px;background:",";color:",";padding:0 ",";border-radius:50px;height:24px;&:hover{background:",";}"],function(e){return e.theme.global.colors.black},function(e){return e.theme.global.colors.white},function(e){return e.theme.global.edgeSize.small},function(e){return e.theme.global.colors.dark}),K=d.default.div.withConfig({displayName:"GroupLayers__KeyWrap",componentId:"plf17t-11"})(["display:block;width:24px;height:24px;margin:0 auto;"]),R=P(x.q,{color:"dark-4"});var q,J=function(e){var t=e.layersConfig,n=e.activeLayers,r=e.onToggleLayer,o=e.onLayerInfo,i=e.locale,c=e.projects,l=e.isPolicy,u=e.showArchived,d=[];return t&&t.forEach(function(e){var t,n;l&&e.indicators?e.indicators.indicators.filter(function(e){var t=e.archive&&Object(L.a)(e.archive,1);return u?t:!t}).forEach(function(t){d.push({id:"".concat(e.id,"_").concat(t.id),title:t.short?t.short[i]||t.short[_.DEFAULT_LOCALE]:t.title[i]||t.title[_.DEFAULT_LOCALE],isArchive:!!t.archive&&Object(L.a)(t.archive,1),config:e,configIndicator:t})}):(c?(t="".concat(g.n.id,"-").concat(e.project_id),n=e["project_title_".concat(i)]||e["project_title_".concat(_.DEFAULT_LOCALE)]):(t=e.id,n=e.title[i]||e.title[_.DEFAULT_LOCALE]),d.push({id:t,title:n,config:e}))}),P(T,{},void 0,P(N,{},void 0,P(F,{},void 0,P(D,{},void 0,P(s.a,{direction:"row",gap:"small",align:"center"},void 0,R,c&&a.a.createElement(f.FormattedMessage,k.columnProject),l&&a.a.createElement(f.FormattedMessage,k.columnIndicator),!l&&!c&&a.a.createElement(f.FormattedMessage,k.columnLayer))),P(G,{},void 0,a.a.createElement(f.FormattedMessage,k.columnKey)),o&&P(U,{},void 0,a.a.createElement(f.FormattedMessage,k.columnInfo)))),P(B,{},void 0,d&&d.map(function(e){var t=e.id,i=e.title,l=e.config;return P(z,{},t,P(W,{},void 0,P(I.a,{checked:n.indexOf(t)>-1,onToggle:function(){return r(t)},label:i})),P($,{},void 0,(l.key||l["styles-by-value"])&&P(K,{},void 0,P(S.a,{config:c?g.n:l}))),o&&P($,{},void 0,P(H,{onClick:function(){return o(t)},label:a.a.createElement(f.FormattedMessage,k.info)})))})))};function Q(e,t,n,r){q||(q="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});return{$$typeof:q,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Z=Object(d.default)(function(e){return a.a.createElement(p.a,Y({plain:!0},e))}).withConfig({displayName:"ButtonDeleteLayers__TabDelete",componentId:"sc-1m79krv-0"})(["position:absolute;bottom:98%;border-radius:9999px;background:",";left:50%;transform:translate(-50%);min-width:21px;height:21px;color:",";text-align:center;font-weight:700;"],function(e){return e.theme.global.colors.white},function(e){return e.theme.global.colors.brandDark}),ee=Object(d.default)(s.a).withConfig({displayName:"ButtonDeleteLayers__WrapContent",componentId:"sc-1m79krv-1"})(["pointer-events:none;"]),te=Q(x.j,{color:"brandDark"});var ne,re=function(e){var t=e.layerCount,n=e.updateLayers,r=e.active,a=V(Object(o.useState)(!1),2),i=a[0],c=a[1];return Q(Z,{tabActive:r,onClick:function(){return n()},label:Q(ee,{justify:"center",align:"center",fill:!0},void 0,i?te:Q(v.a,{size:"xxsmall",style:{paddingTop:"1px"}},void 0,t)),onMouseEnter:function(){return c(!0)},onMouseOut:function(){return c(!1)},onBlur:function(){return c(!1)}})},oe=Object(f.defineMessages)({title:{id:"".concat("app.containers.PanelExplore",".title"),defaultMessage:"Map layers"}});function ae(e,t,n,r){ne||(ne="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});return{$$typeof:ne,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ie(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ce(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ue=Object(d.default)(function(e){return a.a.createElement(s.a,le({},e,{elevation:"medium"}))}).withConfig({displayName:"PanelExplore__Styled",componentId:"sc-39h5rt-0"})(["position:absolute;right:0;top:0;bottom:0;width:100%;pointer-events:all;@media (min-width:","){width:","px;}"],function(e){return e.theme.sizes.medium.minpx},function(e){return e.panelWidth||400}),fe=Object(d.default)(function(e){return a.a.createElement(s.a,le({background:"brand",justify:"between"},e,{elevation:"small",responsive:!1}))}).withConfig({displayName:"PanelExplore__PanelHeader",componentId:"sc-39h5rt-1"})(["position:absolute;right:0;left:0;top:0;width:100%;height:140px;@media (min-width:","){height:150px;}"],function(e){return e.theme.sizes.medium.minpx}),de=d.default.div.withConfig({displayName:"PanelExplore__PanelBody",componentId:"sc-39h5rt-2"})(["position:absolute;right:0;left:0;top:150px;width:100%;bottom:0;padding:12px 12px 96px;overflow-y:scroll;"]),se=Object(d.default)(function(e){return a.a.createElement(s.a,le({margin:{top:"medium"}},e,{align:"center",responsive:!1}))}).withConfig({displayName:"PanelExplore__TitleWrap",componentId:"sc-39h5rt-3"})([""]),pe=Object(d.default)(v.a).withConfig({displayName:"PanelExplore__Title",componentId:"sc-39h5rt-4"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;margin-top:3px;"]),be=Object(d.default)(function(e){return a.a.createElement(s.a,le({},e,{direction:"row",gap:"xsmall"}))}).withConfig({displayName:"PanelExplore__Tabs",componentId:"sc-39h5rt-5"})([""]),me=Object(d.default)(function(e){return a.a.createElement(s.a,le({},e,{margin:{left:"xsmall"}}))}).withConfig({displayName:"PanelExplore__TabLinkWrapper",componentId:"sc-39h5rt-6"})(["position:relative;"]),he=Object(d.default)(function(e){return a.a.createElement(p.a,le({plain:!0},e))}).withConfig({displayName:"PanelExplore__TabLink",componentId:"sc-39h5rt-7"})(["font-family:'wwfregular';text-transform:uppercase;font-weight:normal;line-height:1;padding:0 ",";color:",";opacity:1;border-bottom:4px solid;border-color:",";&:hover{color:",";}"],function(e){return e.theme.global.edgeSize.ms},function(e){var t=e.theme,n=e.active;return t.global.colors[n?"white":"brandLight"]},function(e){var t=e.theme;return e.active?t.global.colors.white:"transparent"},function(e){return e.theme.global.colors.white}),ye=Object(d.default)(function(e){return a.a.createElement(v.a,le({size:"xlarge"},e))}).withConfig({displayName:"PanelExplore__TabLinkAnchor",componentId:"sc-39h5rt-8"})([""]),ge=Object(d.default)(function(e){return a.a.createElement(s.a,le({flex:{shrink:0}},e))}).withConfig({displayName:"PanelExplore__SectionLayerGroup",componentId:"sc-39h5rt-9"})([""]),ve=Object(d.default)(function(e){return a.a.createElement(j.a,le({},e,{level:3}))}).withConfig({displayName:"PanelExplore__TitleGroup",componentId:"sc-39h5rt-10"})(["font-family:'wwfregular';font-weight:normal;margin-bottom:0;letter-spacing:0.1px;font-size:28px;line-height:29px;"]),je=Object(d.default)(w.a).withConfig({displayName:"PanelExplore__DescriptionGroup",componentId:"sc-39h5rt-11"})(["margin-bottom:8px;"]),we=ae(x.h,{}),Oe=Object(d.default)(function(e){return a.a.createElement(p.a,le({icon:we,plain:!0,alignSelf:"end"},e))}).withConfig({displayName:"PanelExplore__ButtonClose",componentId:"sc-39h5rt-12"})(["position:absolute;top:15px;right:15px;padding:10px;border-radius:99999px;background:",";box-shadow:0px 2px 4px rgba(0,0,0,0.1);&:hover{background:",";}"],function(e){return e.theme.global.colors.brandDark},function(e){return e.theme.global.colors.brandDarker}),xe="px",Le={tab:0},_e=function(e,t,n){if(t.length>0){if(e===g.m)return t.filter(function(e){return Object(h.c)(e,"".concat(g.n.id,"-"))});if(e===g.j)return t.filter(function(e){return Object(h.c)(e,g.k)});if(n)return t.filter(function(t){var r=n.find(function(e){return e.id===t});return r&&r.category===e})}return[]},Ee=function(e,t){return ie(e).sort(function(e,n){var r=e["project_title_".concat(t)]||e["project_title_".concat(_.DEFAULT_LOCALE)],o=n["project_title_".concat(t)]||n["project_title_".concat(_.DEFAULT_LOCALE)];return Object(h.b)(r,o)})},Ce=ae(x.p,{});var Se=Object(c.b)({projects:function(e){return Object(E.c)(e,{key:"projects"})},layersConfig:function(e){return Object(E.o)(e)},exploreConfig:function(e){return Object(E.i)(e)},locale:function(e){return Object(E.p)(e)},uiState:function(e){return Object(E.A)(e,{key:xe})},activeLayers:function(e){return Object(E.a)(e)}});var Ie,Ae=Object(i.connect)(Se,function(e){return{onSetTab:function(t,n){return e(Object(C.u)(xe,Object.assign({},Le,n,{tab:t})))},onLayerInfo:function(t){e(Object(C.n)(t)),e(Object(C.v)())},onSetLayers:function(t){return e(Object(C.o)(t))},onToggleLayer:function(t){return e(Object(C.w)(t))}}}),ke=Object(u.compose)(Ae)(function(e){var t=e.onClose,n=e.onLayerInfo,r=e.onToggleLayer,i=e.onSetTab,c=e.projects,l=e.layersConfig,u=e.exploreConfig,d=e.locale,s=e.uiState,p=e.activeLayers,b=e.onSetLayers,m=(s?Object.assign({},Le,s):Le).tab,h=Object(o.useRef)();Object(o.useEffect)(function(){h.current.scrollTop=0},[s]);var v=u&&u[m],j=v&&_e(v.id,p,l),w=j&&p.filter(function(e){return-1===j.indexOf(e)}),x=v&&v.id===g.m,E=v&&v.id===g.j;return ae(O.a.Consumer,{},void 0,function(e){return ae(ue,{background:"white",panelWidth:Object(y.b)(e)},void 0,ae("div",{},void 0,ae(fe,{},void 0,ae(Oe,{onClick:function(){return t()}}),ae(se,{},void 0,Ce,ae(pe,{},void 0,a.a.createElement(f.FormattedMessage,oe.title))),ae(be,{},void 0,l&&u&&u.map(function(e,t){var n=_e(e.id,p,l),r=n?p.filter(function(e){return-1===n.indexOf(e)}):[];return ae(me,{},e.id,n.length>0&&ae(re,{updateLayers:function(){return b(r)},layerCount:n.length,active:Object(L.a)(m,t)}),ae(he,{onClick:function(){return i(t,s)},active:Object(L.a)(m,t),disabled:Object(L.a)(m,t),label:ae(ye,{active:Object(L.a)(m,t)},void 0,e.title[d]||e.title[_.DEFAULT_LOCALE])}))}))),a.a.createElement(de,{ref:h},!E&&l&&v&&v.groups&&v.groups.map(function(e){return ae(ge,{},e.id,ae(ve,{},void 0,e.title[d]||e.title[_.DEFAULT_LOCALE]),e.description&&ae(je,{},void 0,e.description[d]||e.description[_.DEFAULT_LOCALE]),!x&&ae(J,{group:e,layersConfig:l.filter(function(t){return t.category===v.id&&t.group===e.id}),locale:d,activeLayers:p,onLayerInfo:n,onToggleLayer:r}),x&&ae(J,{group:e,projects:!0,layersConfig:Ee(c,d),locale:d,activeLayers:p,onLayerInfo:n,onToggleLayer:r}))}),!x&&E&&l&&v&&v.groups&&v.groups.map(function(e){return ae(ge,{},e.id,ae(ve,{},void 0,e.title[d]||e.title[_.DEFAULT_LOCALE]),e.description&&ae(je,{},void 0,e.description[d]||e.description[_.DEFAULT_LOCALE]),ae(J,{group:e,showArchived:"archive"===e.id,layersConfig:l.filter(function(e){return e.category===v.id}),isPolicy:!0,locale:d,activeLayers:p,onLayerInfo:n,onToggleLayer:function(e){b(p.indexOf(e)>-1?w:[].concat(ie(w),[e]))}}))}))))})}),Pe=n("f9c0d22799479965d07c"),Me=n("02ed36e7ccc5625439c9"),Te=Object(f.defineMessages)({showLayerPanel:{id:"".concat("app.containers.ModuleExplore",".showLayerPanel"),defaultMessage:"Layers"},showProjects:{id:"".concat("app.containers.ModuleExplore",".showProjects"),defaultMessage:"Show WWF-projects"},hideProjects:{id:"".concat("app.containers.ModuleExplore",".hideProjects"),defaultMessage:"Hide WWF-projects"},showProjectsShort:{id:"".concat("app.containers.ModuleExplore",".showProjectsShort"),defaultMessage:"Show projects"},hideProjectsShort:{id:"".concat("app.containers.ModuleExplore",".hideProjectsShort"),defaultMessage:"Hide projects"}});function Ne(e,t,n,r){Ie||(Ie="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});return{$$typeof:Ie,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function Fe(e){return function(e){if(Array.isArray(e))return De(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return De(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return De(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function De(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ge(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Ue(){return(Ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"ModuleExplore",function(){return Ve});var Be=Object(d.default)(function(e){return a.a.createElement(s.a,Ue({gap:"small",direction:"row"},e))}).withConfig({displayName:"ModuleExplore__Buttons",componentId:"sc-1nskavd-0"})(["position:absolute;right:12px;top:22px;pointer-events:all;"]),ze=Object(d.default)(function(e){return a.a.createElement(p.a,Ue({plain:!0,reverse:!0},e))}).withConfig({displayName:"ModuleExplore__ShowButton",componentId:"sc-1nskavd-1"})(["font-family:'wwfregular';text-transform:uppercase;line-height:16px;background:",";color:",";border-radius:20px;padding:2px 13px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);&:hover{background:",";}@media (min-width:","){padding:5px 15px 5px 21px;}"],function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"white":"brand"]},function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"black":"white"]},function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"lightHover":"brandDark"]},function(e){return e.theme.sizes.medium.minpx}),We=d.default.div.withConfig({displayName:"ModuleExplore__ProjectButtonWrap",componentId:"sc-1nskavd-2"})(["position:absolute;right:","px;top:20px;pointer-events:all;"],function(e){return e.asideOffset+20}),$e=function(e){var t=e.showAll,n=e.lids,r=e.pids,o=e.onClick,i=e.small,c=Ge(e,["showAll","lids","pids","onClick","small"]),l="";return l=i?t?Te.showProjectsShort:Te.hideProjectsShort:t?Te.showProjects:Te.hideProjects,a.a.createElement(ze,Ue({projects:!0,onClick:function(){o(t?Object(m.uniq)([].concat(Fe(n),Fe(r.map(function(e){return"".concat(g.n.id,"-").concat(e)})))):n.filter(function(e){return!Object(h.c)(e,"".concat(g.n.id,"-"))}))},label:a.a.createElement(f.FormattedMessage,l)},c))},He="mx",Ke={layersMemo:null,show:!0},Re={show:!0},qe=Ne(x.E,{color:"black"}),Je=Ne(x.E,{color:"black"}),Qe=Ne(x.p,{color:"white"});function Ve(e){var t=e.onSetLayers,n=e.layerIds,r=e.projects,i=e.uiState,c=e.uiURL,u=e.onMemoLayers,d=e.activeLayers,s=e.firstLanding,p=e.onSetLanding,m=e.onShow,v=e.intl,j=e.size,w=e.onShowKey,O=(i?Object.assign({},Ke,i):Ke).layersMemo,x=(c?Object.assign({},Re,c):Re).show;Object(o.useEffect)(function(){O?t(O):g.h.explore.layers&&(s&&0!==d.length||t(g.h.explore.layers)),s&&p()},[]),Object(o.useEffect)(function(){w()},[]),Object(o.useEffect)(function(){u(d,i)},[d]),Object(o.useEffect)(function(){"small"===j&&m(!1,c)},[j]);var L=r?r.map(function(e){return e.project_id}):[],_=n.filter(function(e){if(Object(h.c)(e,"".concat(g.n.id,"-"))){var t=e.replace("".concat(g.n.id,"-"),"");return L.indexOf(t)>-1}return!1}).map(function(e){return e.replace("".concat(g.n.id,"-"),"")}),E=r&&_.length>=r.length;return Ne("div",{},void 0,Ne(l.Helmet,{},void 0,Ne("title",{},void 0,"".concat(v.formatMessage(Me.a.module_explore_metaTitle)))),Ne(Pe.a,{},void 0,x&&"small"!==j&&Ne(We,{asideOffset:Object(y.b)(j)},void 0,Ne($e,{showAll:!E,lids:n,pids:L,onClick:t,small:Object(y.d)(j,"small"),icon:qe})),x&&"small"!==j&&Ne(ke,{onClose:function(){return m(!1,c)}}),x&&"small"===j&&Ne(b.a,{full:!0},void 0,Ne(ke,{onClose:function(){return m(!1,c)}})),!x&&Ne(Be,{},void 0,"small"!==j&&Ne($e,{showAll:!E,lids:n,pids:L,onClick:t,small:Object(y.d)(j,"small"),icon:Je}),Ne(ze,{onClick:function(){m(!0,c)},icon:Qe,label:a.a.createElement(f.FormattedMessage,Te.showLayerPanel)}))))}var Xe=Object(c.b)({layerIds:function(e){return Object(E.a)(e)},projects:function(e){return Object(E.c)(e,{key:"projects"})},uiState:function(e){return Object(E.z)(e,{key:He})},uiURL:function(e){return Object(E.A)(e,{key:He})},activeLayers:function(e){return Object(E.a)(e)},firstLanding:function(e){return Object(E.j)(e)}});var Ye=Object(i.connect)(Xe,function(e){return{onShowKey:function(){return e(Object(C.r)(!0))},onSetLanding:function(){return e(Object(C.m)())},onSetLayers:function(t){return e(Object(C.o)(t))},onMemoLayers:function(t,n){return e(Object(C.t)(He,Object.assign({},Ke,n,{layersMemo:t})))},onShow:function(t,n){return e(Object(C.u)(He,Object.assign({},Re,n,{show:t})))}}});t.default=Object(u.compose)(Ye)(Object(f.injectIntl)(Ve))}}]);