(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ef09d4344e98a758bac7:function(e,t,n){"use strict";n.r(t);var r,o=n("8af190b70a6bc55c6f1b"),a=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("a28fc3c963a1d4d1a2e5"),l=n("0d7f0986bcd2f33d8a2a"),u=n("ab4cb61bcb2dc161defb"),f=n("ab039aecd4a1d4fedc0e"),d=n("0b3cb19af78752326f59"),s=n("eb656803928a435bd3cc"),p=n("66543f9bb6e90e461320"),m=n("045dd844c9ae122c636a"),b=n("6e05b15597c94fea0ef3"),y=n("422249433a2d25af359d"),h=n("c8e6563c3537109b383a"),g=n("d6f259ffb10cc810b5a4"),v=n("5ca68c6edf7ca33c5f8f"),j=n("76abbe2db5a955046df2"),w=n("ab7d7caa0ee3a73c9e57"),O=n("761b1f7fdd256e4f5426"),x=n("a7c39d8357e500a5b832"),L=n("968c3c585cf17da94a14"),_=n("0785de3f40b134973d35"),E=n("6542cd13fd5dd1bcffd4"),C=n("a72b40110d9c31c9b5c5"),S=n("f64ff5b2dfbac1021ef4"),I=n("d3dfb88bd55587d538d0"),A="app.components.GroupLayers",k=Object(f.defineMessages)({columnLayer:{id:"".concat(A,".columnLayer"),defaultMessage:"Layer"},columnProject:{id:"".concat(A,".columnProject"),defaultMessage:"Project"},columnIndicator:{id:"".concat(A,".columnIndicator"),defaultMessage:"Topic"},columnKey:{id:"".concat(A,".columnKey"),defaultMessage:"Key"},columnInfo:{id:"".concat(A,".columnInfo"),defaultMessage:"Read more"},info:{id:"".concat(A,".info"),defaultMessage:"Info"}});function P(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var T=d.default.div.withConfig({displayName:"GroupLayers__Styled",componentId:"plf17t-0"})(["display:table;table-layout:fixed;margin-top:12px;margin-bottom:20px;width:100%;"]),N=d.default.div.withConfig({displayName:"GroupLayers__ListHeader",componentId:"plf17t-1"})(["display:table-header-group;"]),F=d.default.div.withConfig({displayName:"GroupLayers__ListHeaderRow",componentId:"plf17t-2"})(["display:table-row;"]),D=d.default.div.withConfig({displayName:"GroupLayers__ListHeaderCell",componentId:"plf17t-3"})(["display:table-cell;font-size:12px;line-height:14px;border-bottom:1px solid ",";vertical-align:middle;color:",";white-space:nowrap;"],function(e){return e.theme.global.colors["light-4"]},function(e){return e.theme.global.colors["dark-4"]}),G=Object(d.default)(D).withConfig({displayName:"GroupLayers__ListHeaderKey",componentId:"plf17t-4"})(["width:45px;text-align:center;"]),U=Object(d.default)(D).withConfig({displayName:"GroupLayers__ListHeaderInfo",componentId:"plf17t-5"})(["width:65px;text-align:center;"]),B=d.default.div.withConfig({displayName:"GroupLayers__ListBody",componentId:"plf17t-6"})(["display:table-row-group;"]),W=d.default.div.withConfig({displayName:"GroupLayers__ListBodyRow",componentId:"plf17t-7"})(["display:table-row;"]),$=d.default.div.withConfig({displayName:"GroupLayers__ListBodyCell",componentId:"plf17t-8"})(["display:table-cell;vertical-align:middle;height:54px;padding:6px 0;border-bottom:1px solid ",";"],function(e){return e.theme.global.colors["light-4"]}),z=Object(d.default)($).withConfig({displayName:"GroupLayers__ListBodyCellCenter",componentId:"plf17t-9"})(["text-align:center;"]),H=Object(d.default)(function(e){return a.a.createElement(p.a,M({},e,{plain:!0}))}).withConfig({displayName:"GroupLayers__InfoButton",componentId:"plf17t-10"})(["font-family:'wwfregular';text-transform:uppercase;line-height:16px;background:",";color:",";padding:0 ",";border-radius:50px;height:24px;&:hover{background:",";}"],function(e){return e.theme.global.colors.black},function(e){return e.theme.global.colors.white},function(e){return e.theme.global.edgeSize.small},function(e){return e.theme.global.colors.dark}),K=d.default.div.withConfig({displayName:"GroupLayers__KeyWrap",componentId:"plf17t-11"})(["display:block;width:24px;height:24px;margin:0 auto;"]),R=P(x.q,{color:"dark-4"});var q,J=function(e){var t=e.layersConfig,n=e.activeLayers,r=e.onToggleLayer,o=e.onLayerInfo,i=e.locale,c=e.projects,l=e.isPolicy,u=e.showArchived,d=[];return t&&t.forEach(function(e){var t,n;l&&e.indicators?e.indicators.indicators.filter(function(e){var t=e.archive&&Object(L.a)(e.archive,1);return u?t:!t}).forEach(function(t){d.push({id:"".concat(e.id,"_").concat(t.id),title:t.short?t.short[i]||t.short[_.DEFAULT_LOCALE]:t.title[i]||t.title[_.DEFAULT_LOCALE],isArchive:!!t.archive&&Object(L.a)(t.archive,1),config:e,configIndicator:t})}):(c?(t="".concat(g.n.id,"-").concat(e.project_id),n=e["project_title_".concat(i)]||e["project_title_".concat(_.DEFAULT_LOCALE)]):(t=e.id,n=e.title[i]||e.title[_.DEFAULT_LOCALE]),d.push({id:t,title:n,config:e}))}),P(T,{},void 0,P(N,{},void 0,P(F,{},void 0,P(D,{},void 0,P(s.a,{direction:"row",gap:"small",align:"center"},void 0,R,c&&a.a.createElement(f.FormattedMessage,k.columnProject),l&&a.a.createElement(f.FormattedMessage,k.columnIndicator),!l&&!c&&a.a.createElement(f.FormattedMessage,k.columnLayer))),P(G,{},void 0,a.a.createElement(f.FormattedMessage,k.columnKey)),o&&P(U,{},void 0,a.a.createElement(f.FormattedMessage,k.columnInfo)))),P(B,{},void 0,d&&d.map(function(e){var t=e.id,i=e.title,l=e.config;return P(W,{},t,P($,{},void 0,P(I.a,{checked:n.indexOf(t)>-1,onToggle:function(){return r(t)},label:i})),P(z,{},void 0,(l.key||l["styles-by-value"])&&P(K,{},void 0,P(S.a,{config:c?g.n:l}))),o&&P(z,{},void 0,P(H,{onClick:function(){return o(t)},label:a.a.createElement(f.FormattedMessage,k.info)})))})))},Q=n("87ceb6d3cf914cd0f6ca");function V(e,t,n,r){q||(q="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});return{$$typeof:q,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ee=Object(d.default)(function(e){return a.a.createElement(p.a,Z({plain:!0},e))}).withConfig({displayName:"ButtonDeleteLayers__TabDelete",componentId:"sc-1m79krv-0"})(["position:absolute;bottom:98%;border-radius:9999px;background:",";left:50%;transform:translate(-50%);min-width:21px;height:21px;color:",";text-align:center;font-weight:700;"],function(e){return e.theme.global.colors.white},function(e){return e.theme.global.colors.brandDark}),te=Object(d.default)(s.a).withConfig({displayName:"ButtonDeleteLayers__WrapContent",componentId:"sc-1m79krv-1"})(["pointer-events:none;"]),ne=V(x.j,{color:"brandDark"});var re,oe=function(e){var t=e.layerCount,n=e.updateLayers,r=e.active,a=X(Object(o.useState)(!1),2),i=a[0],c=a[1];return V(ee,{tabActive:r,onClick:function(){return n()},label:V(te,{justify:"center",align:"center",fill:!0},void 0,i?ne:V(v.a,{size:"xxsmall",style:{paddingTop:"1px"}},void 0,t)),onMouseEnter:function(){return c(!0)},onMouseOut:function(){return c(!1)},onBlur:function(){return c(!1)}})},ae=Object(f.defineMessages)({title:{id:"".concat("app.containers.PanelExplore",".title"),defaultMessage:"Map layers"}});function ie(e,t,n,r){re||(re="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});return{$$typeof:re,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ce(e){return function(e){if(Array.isArray(e))return le(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return le(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var fe=Object(d.default)(function(e){return a.a.createElement(s.a,ue({},e,{elevation:"medium"}))}).withConfig({displayName:"PanelExplore__Styled",componentId:"sc-39h5rt-0"})(["position:absolute;right:0;top:0;bottom:0;width:100%;pointer-events:all;@media (min-width:","){width:","px;}"],function(e){return e.theme.sizes.medium.minpx},function(e){return e.panelWidth||400}),de=Object(d.default)(function(e){return a.a.createElement(s.a,ue({background:"brand",justify:"between"},e,{elevation:"small",responsive:!1}))}).withConfig({displayName:"PanelExplore__PanelHeader",componentId:"sc-39h5rt-1"})(["position:absolute;right:0;left:0;top:0;width:100%;height:140px;@media (min-width:","){height:150px;}"],function(e){return e.theme.sizes.medium.minpx}),se=d.default.div.withConfig({displayName:"PanelExplore__PanelBody",componentId:"sc-39h5rt-2"})(["position:absolute;right:0;left:0;top:150px;width:100%;bottom:0;padding:12px 12px 96px;overflow-y:scroll;"]),pe=Object(d.default)(function(e){return a.a.createElement(s.a,ue({margin:{top:"medium"}},e,{align:"center",responsive:!1}))}).withConfig({displayName:"PanelExplore__TitleWrap",componentId:"sc-39h5rt-3"})([""]),me=Object(d.default)(v.a).withConfig({displayName:"PanelExplore__Title",componentId:"sc-39h5rt-4"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;margin-top:3px;"]),be=Object(d.default)(function(e){return a.a.createElement(s.a,ue({},e,{direction:"row",gap:"xsmall"}))}).withConfig({displayName:"PanelExplore__Tabs",componentId:"sc-39h5rt-5"})([""]),ye=Object(d.default)(function(e){return a.a.createElement(s.a,ue({},e,{margin:{left:"xsmall"}}))}).withConfig({displayName:"PanelExplore__TabLinkWrapper",componentId:"sc-39h5rt-6"})(["position:relative;"]),he=Object(d.default)(function(e){return a.a.createElement(p.a,ue({plain:!0},e))}).withConfig({displayName:"PanelExplore__TabLink",componentId:"sc-39h5rt-7"})(["font-family:'wwfregular';text-transform:uppercase;font-weight:normal;line-height:1;padding:0 ",";color:",";opacity:1;border-bottom:4px solid;border-color:",";&:hover{color:",";}"],function(e){return e.theme.global.edgeSize.ms},function(e){var t=e.theme,n=e.active;return t.global.colors[n?"white":"brandLight"]},function(e){var t=e.theme;return e.active?t.global.colors.white:"transparent"},function(e){return e.theme.global.colors.white}),ge=Object(d.default)(function(e){return a.a.createElement(v.a,ue({size:"xlarge"},e))}).withConfig({displayName:"PanelExplore__TabLinkAnchor",componentId:"sc-39h5rt-8"})([""]),ve=Object(d.default)(function(e){return a.a.createElement(s.a,ue({flex:{shrink:0}},e))}).withConfig({displayName:"PanelExplore__SectionLayerGroup",componentId:"sc-39h5rt-9"})([""]),je=Object(d.default)(function(e){return a.a.createElement(j.a,ue({},e,{level:3}))}).withConfig({displayName:"PanelExplore__TitleGroup",componentId:"sc-39h5rt-10"})(["font-family:'wwfregular';font-weight:normal;margin-bottom:0;letter-spacing:0.1px;font-size:28px;line-height:29px;"]),we=Object(d.default)(w.a).withConfig({displayName:"PanelExplore__DescriptionGroup",componentId:"sc-39h5rt-11"})(["margin-bottom:8px;"]),Oe="px",xe={tab:0},Le=function(e,t,n){if(t.length>0){if(e===g.m)return t.filter(function(e){return Object(y.e)(e,"".concat(g.n.id,"-"))});if(e===g.j)return t.filter(function(e){return Object(y.e)(e,g.k)});if(n)return t.filter(function(t){var r=n.find(function(e){return e.id===t});return r&&r.category===e})}return[]},_e=function(e,t){return ce(e).sort(function(e,n){var r=e["project_title_".concat(t)]||e["project_title_".concat(_.DEFAULT_LOCALE)],o=n["project_title_".concat(t)]||n["project_title_".concat(_.DEFAULT_LOCALE)];return Object(y.d)(r,o)})},Ee=ie(x.p,{});var Ce=Object(c.b)({projects:function(e){return Object(E.c)(e,{key:"projects"})},layersConfig:function(e){return Object(E.p)(e)},exploreConfig:function(e){return Object(E.i)(e)},locale:function(e){return Object(E.q)(e)},uiState:function(e){return Object(E.B)(e,{key:Oe})},activeLayers:function(e){return Object(E.a)(e)}});var Se,Ie=Object(i.connect)(Ce,function(e){return{onSetTab:function(t,n){return e(Object(C.v)(Oe,Object.assign({},xe,n,{tab:t})))},onLayerInfo:function(t){e(Object(C.o)(t)),e(Object(C.w)())},onSetLayers:function(t){return e(Object(C.p)(t))},onToggleLayer:function(t){return e(Object(C.x)(t))}}}),Ae=Object(u.compose)(Ie)(function(e){var t=e.onClose,n=e.onLayerInfo,r=e.onToggleLayer,i=e.onSetTab,c=e.projects,l=e.layersConfig,u=e.exploreConfig,d=e.locale,s=e.uiState,p=e.activeLayers,m=e.onSetLayers,b=(s?Object.assign({},xe,s):xe).tab,y=Object(o.useRef)();Object(o.useEffect)(function(){y.current.scrollTop=0},[s]);var v=u&&u[b],j=v&&Le(v.id,p,l),w=j&&p.filter(function(e){return-1===j.indexOf(e)}),x=v&&v.id===g.m,E=v&&v.id===g.j;return ie(O.a.Consumer,{},void 0,function(e){return ie(fe,{background:"white",panelWidth:Object(h.b)(e)},void 0,ie("div",{},void 0,ie(de,{},void 0,ie(Q.a,{onClick:function(){return t()},hasPadding:!0}),ie(pe,{},void 0,Ee,ie(me,{},void 0,a.a.createElement(f.FormattedMessage,ae.title))),ie(be,{},void 0,l&&u&&u.map(function(e,t){var n=Le(e.id,p,l),r=n?p.filter(function(e){return-1===n.indexOf(e)}):[];return ie(ye,{},e.id,n.length>0&&ie(oe,{updateLayers:function(){return m(r)},layerCount:n.length,active:Object(L.a)(b,t)}),ie(he,{onClick:function(){return i(t,s)},active:Object(L.a)(b,t),disabled:Object(L.a)(b,t),label:ie(ge,{active:Object(L.a)(b,t)},void 0,e.title[d]||e.title[_.DEFAULT_LOCALE])}))}))),a.a.createElement(se,{ref:y},!E&&l&&v&&v.groups&&v.groups.map(function(e){return ie(ve,{},e.id,ie(je,{},void 0,e.title[d]||e.title[_.DEFAULT_LOCALE]),e.description&&ie(we,{},void 0,e.description[d]||e.description[_.DEFAULT_LOCALE]),!x&&ie(J,{group:e,layersConfig:l.filter(function(t){return t.category===v.id&&t.group===e.id}),locale:d,activeLayers:p,onLayerInfo:n,onToggleLayer:r}),x&&ie(J,{group:e,projects:!0,layersConfig:_e(c,d),locale:d,activeLayers:p,onLayerInfo:n,onToggleLayer:r}))}),!x&&E&&l&&v&&v.groups&&v.groups.map(function(e){return ie(ve,{},e.id,ie(je,{},void 0,e.title[d]||e.title[_.DEFAULT_LOCALE]),e.description&&ie(we,{},void 0,e.description[d]||e.description[_.DEFAULT_LOCALE]),ie(J,{group:e,showArchived:"archive"===e.id,layersConfig:l.filter(function(e){return e.category===v.id}),isPolicy:!0,locale:d,activeLayers:p,onLayerInfo:n,onToggleLayer:function(e){m(p.indexOf(e)>-1?w:[].concat(ce(w),[e]))}}))}))))})}),ke=n("f9c0d22799479965d07c"),Pe=n("02ed36e7ccc5625439c9"),Me=Object(f.defineMessages)({showLayerPanel:{id:"".concat("app.containers.ModuleExplore",".showLayerPanel"),defaultMessage:"Layers"},showProjects:{id:"".concat("app.containers.ModuleExplore",".showProjects"),defaultMessage:"Show WWF-projects"},hideProjects:{id:"".concat("app.containers.ModuleExplore",".hideProjects"),defaultMessage:"Hide WWF-projects"},showProjectsShort:{id:"".concat("app.containers.ModuleExplore",".showProjectsShort"),defaultMessage:"Show projects"},hideProjectsShort:{id:"".concat("app.containers.ModuleExplore",".hideProjectsShort"),defaultMessage:"Hide projects"}});function Te(e,t,n,r){Se||(Se="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});return{$$typeof:Se,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function Ne(e){return function(e){if(Array.isArray(e))return Fe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return Fe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fe(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function De(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Ge(){return(Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"ModuleExplore",function(){return Qe});var Ue=Object(d.default)(function(e){return a.a.createElement(s.a,Ge({gap:"small",direction:"row"},e))}).withConfig({displayName:"ModuleExplore__Buttons",componentId:"sc-1nskavd-0"})(["position:absolute;right:12px;top:22px;pointer-events:all;"]),Be=Object(d.default)(function(e){return a.a.createElement(p.a,Ge({plain:!0,reverse:!0},e))}).withConfig({displayName:"ModuleExplore__ShowButton",componentId:"sc-1nskavd-1"})(["font-family:'wwfregular';text-transform:uppercase;line-height:16px;background:",";color:",";border-radius:20px;padding:2px 13px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);&:hover{background:",";}@media (min-width:","){padding:5px 15px 5px 21px;}"],function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"white":"brand"]},function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"black":"white"]},function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"lightHover":"brandDark"]},function(e){return e.theme.sizes.medium.minpx}),We=d.default.div.withConfig({displayName:"ModuleExplore__ProjectButtonWrap",componentId:"sc-1nskavd-2"})(["position:absolute;right:","px;top:20px;pointer-events:all;"],function(e){return e.asideOffset+20}),$e=function(e){var t=e.showAll,n=e.lids,r=e.pids,o=e.onClick,i=e.small,c=De(e,["showAll","lids","pids","onClick","small"]),l="";return l=i?t?Me.showProjectsShort:Me.hideProjectsShort:t?Me.showProjects:Me.hideProjects,a.a.createElement(Be,Ge({projects:!0,onClick:function(){o(t?Object(b.uniq)([].concat(Ne(n),Ne(r.map(function(e){return"".concat(g.n.id,"-").concat(e)})))):n.filter(function(e){return!Object(y.e)(e,"".concat(g.n.id,"-"))}))},label:a.a.createElement(f.FormattedMessage,l)},c))},ze="mx",He={layersMemo:null,show:!0},Ke={show:!0},Re=Te(x.E,{color:"black"}),qe=Te(x.E,{color:"black"}),Je=Te(x.p,{color:"white"});function Qe(e){var t=e.onSetLayers,n=e.layerIds,r=e.projects,i=e.uiState,c=e.uiURL,u=e.onMemoLayers,d=e.activeLayers,s=e.firstLanding,p=e.onSetLanding,b=e.onShow,v=e.intl,j=e.size,w=e.onShowKey,O=(i?Object.assign({},He,i):He).layersMemo,x=(c?Object.assign({},Ke,c):Ke).show;Object(o.useEffect)(function(){O?t(O):g.h.explore.layers&&(s&&0!==d.length||t(g.h.explore.layers)),s&&p()},[]),Object(o.useEffect)(function(){w()},[]),Object(o.useEffect)(function(){u(d,i)},[d]),Object(o.useEffect)(function(){"small"===j&&b(!1,c)},[j]);var L=r?r.map(function(e){return e.project_id}):[],_=n.filter(function(e){if(Object(y.e)(e,"".concat(g.n.id,"-"))){var t=e.replace("".concat(g.n.id,"-"),"");return L.indexOf(t)>-1}return!1}).map(function(e){return e.replace("".concat(g.n.id,"-"),"")}),E=r&&_.length>=r.length;return Te("div",{},void 0,Te(l.Helmet,{},void 0,Te("title",{},void 0,"".concat(v.formatMessage(Pe.a.module_explore_metaTitle)))),Te(ke.a,{},void 0,x&&"small"!==j&&Te(We,{asideOffset:Object(h.b)(j)},void 0,Te($e,{showAll:!E,lids:n,pids:L,onClick:t,small:Object(h.d)(j,"small"),icon:Re})),x&&"small"!==j&&Te(Ae,{onClose:function(){return b(!1,c)}}),x&&"small"===j&&Te(m.a,{full:!0},void 0,Te(Ae,{onClose:function(){return b(!1,c)}})),!x&&Te(Ue,{},void 0,"small"!==j&&Te($e,{showAll:!E,lids:n,pids:L,onClick:t,small:Object(h.d)(j,"small"),icon:qe}),Te(Be,{onClick:function(){b(!0,c)},icon:Je,label:a.a.createElement(f.FormattedMessage,Me.showLayerPanel)}))))}var Ve=Object(c.b)({layerIds:function(e){return Object(E.a)(e)},projects:function(e){return Object(E.c)(e,{key:"projects"})},uiState:function(e){return Object(E.A)(e,{key:ze})},uiURL:function(e){return Object(E.B)(e,{key:ze})},activeLayers:function(e){return Object(E.a)(e)},firstLanding:function(e){return Object(E.j)(e)}});var Xe=Object(i.connect)(Ve,function(e){return{onShowKey:function(){return e(Object(C.s)(!0))},onSetLanding:function(){return e(Object(C.n)())},onSetLayers:function(t){return e(Object(C.p)(t))},onMemoLayers:function(t,n){return e(Object(C.u)(ze,Object.assign({},He,n,{layersMemo:t})))},onShow:function(t,n){return e(Object(C.v)(ze,Object.assign({},Ke,n,{show:t})))}}});t.default=Object(u.compose)(Xe)(Object(f.injectIntl)(Qe))}}]);