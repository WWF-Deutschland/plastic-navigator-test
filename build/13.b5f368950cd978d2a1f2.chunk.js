(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ef09d4344e98a758bac7:function(e,t,o){"use strict";o.r(t);var n,r=o("8af190b70a6bc55c6f1b"),a=o.n(r),i=(o("8a2d1b95e05b6a321e74"),o("d7dd51e1bf6bfc2c9c3d")),l=o("a28fc3c963a1d4d1a2e5"),c=o("0d7f0986bcd2f33d8a2a"),d=o("ab4cb61bcb2dc161defb"),f=o("ab039aecd4a1d4fedc0e"),s=o("0b3cb19af78752326f59"),u=o("eb656803928a435bd3cc"),p=o("66543f9bb6e90e461320"),m=o("761b1f7fdd256e4f5426"),b=o("045dd844c9ae122c636a"),y=o("24437210edfad996691f"),g=o("6e05b15597c94fea0ef3"),h=o("422249433a2d25af359d"),v=o("d6f259ffb10cc810b5a4"),j=o("5ca68c6edf7ca33c5f8f"),w=o("76abbe2db5a955046df2"),O=o("ab7d7caa0ee3a73c9e57"),L=o("0fa1f005d5c81eaf9110"),_=o("c8e6563c3537109b383a"),x=o("0785de3f40b134973d35"),C=o("6542cd13fd5dd1bcffd4"),E=o("a72b40110d9c31c9b5c5"),I=o("1a492921026f78aead80"),P=o("f64ff5b2dfbac1021ef4"),S="app.components.GroupLayers",M=Object(f.defineMessages)({columnLayer:{id:"".concat(S,".columnLayer"),defaultMessage:"Layer"},columnProject:{id:"".concat(S,".columnProject"),defaultMessage:"Project"},columnKey:{id:"".concat(S,".columnKey"),defaultMessage:"Key"},columnInfo:{id:"".concat(S,".columnInfo"),defaultMessage:"Read more"},info:{id:"".concat(S,".info"),defaultMessage:"Info"}});function k(e,t,o,r){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=r;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}if(t&&a)for(var d in a)void 0===t[d]&&(t[d]=a[d]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var A=s.default.div.withConfig({displayName:"GroupLayers__Styled",componentId:"plf17t-0"})(["display:table;table-layout:fixed;margin-top:20px;margin-bottom:20px;"]),T=s.default.div.withConfig({displayName:"GroupLayers__ListHeader",componentId:"plf17t-1"})(["display:table-header-group;"]),G=s.default.div.withConfig({displayName:"GroupLayers__ListHeaderRow",componentId:"plf17t-2"})(["display:table-row;"]),F=s.default.div.withConfig({displayName:"GroupLayers__ListHeaderCell",componentId:"plf17t-3"})(["display:table-cell;font-size:14px;border-bottom:1px solid;vertical-align:middle;color:",";"],function(e){return e.theme.global.colors["dark-4"]}),B=Object(s.default)(F).withConfig({displayName:"GroupLayers__ListHeaderKey",componentId:"plf17t-4"})(["width:60px;text-align:center;"]),H=Object(s.default)(F).withConfig({displayName:"GroupLayers__ListHeaderInfo",componentId:"plf17t-5"})(["width:60px;text-align:center;"]),W=s.default.div.withConfig({displayName:"GroupLayers__ListBody",componentId:"plf17t-6"})(["display:table-row-group;"]),z=s.default.div.withConfig({displayName:"GroupLayers__ListBodyRow",componentId:"plf17t-7"})(["display:table-row;"]),D=s.default.div.withConfig({displayName:"GroupLayers__ListBodyCell",componentId:"plf17t-8"})(["display:table-cell;vertical-align:middle;height:54px;padding:6px 0;border-bottom:1px solid ",";"],function(e){return e.theme.global.colors["light-4"]}),$=Object(s.default)(D).withConfig({displayName:"GroupLayers__ListBodyCellCenter",componentId:"plf17t-9"})(["text-align:center;"]),K=s.default.span.withConfig({displayName:"GroupLayers__Label",componentId:"plf17t-10"})(["line-height:18px;"]),U=Object(s.default)(function(e){return a.a.createElement(p.a,N({},e,{plain:!0}))}).withConfig({displayName:"GroupLayers__InfoButton",componentId:"plf17t-11"})(["font-family:'wwfregular';text-transform:uppercase;letter-spacing:0.05em;background:",";color:",";padding:0 ",";border-radius:5px;"],function(e){return e.theme.global.colors.black},function(e){return e.theme.global.colors.white},function(e){return e.theme.global.edgeSize.xsmall}),q=Object(s.default)(I.a).withConfig({displayName:"GroupLayers__StyledCheckBox",componentId:"plf17t-12"})(["margin-right:6px;"]),R=s.default.div.withConfig({displayName:"GroupLayers__KeyWrap",componentId:"plf17t-13"})(["display:block;width:24px;height:24px;margin:0 auto;"]),J=k(y.a,{size:"small",color:"dark-4"});var Q,V=function(e){var t=e.layersConfig,o=e.activeLayers,n=e.onToggleLayer,r=e.onLayerInfo,i=e.locale,l=e.projects;return k(A,{},void 0,k(T,{},void 0,k(G,{},void 0,k(F,{},void 0,k(u.a,{direction:"row",gap:"small",align:"center"},void 0,J,a.a.createElement(f.FormattedMessage,M[l?"columnProject":"columnLayer"]))),!l&&k(B,{},void 0,a.a.createElement(f.FormattedMessage,M.columnKey)),k(H,{},void 0,a.a.createElement(f.FormattedMessage,M.columnInfo)))),k(W,{},void 0,t&&t.map(function(e){var t=l?"".concat(v.j.id,"-").concat(e.project_id):e.id,c=l?t:e.id,d=l?e["project_title_".concat(i)]||e["project_title_".concat(x.DEFAULT_LOCALE)]:e.title[i]||e.title[x.DEFAULT_LOCALE];return k(z,{},t,k(D,{},void 0,k(q,{checked:o.indexOf(t)>-1,onChange:function(){return n(t)},label:k(K,{},void 0,d)})),!l&&k($,{},void 0,k(R,{},void 0,k(P.a,{config:e}))),k($,{},void 0,k(U,{onClick:function(){return r(c)},label:a.a.createElement(f.FormattedMessage,M.info)})))})))},X=Object(f.defineMessages)({title:{id:"".concat("app.containers.PanelExplore",".title"),defaultMessage:"Map layers"}});function Y(e,t,o,n){Q||(Q="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var i=new Array(a),l=0;l<a;l++)i[l]=arguments[l+3];t.children=i}if(t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});return{$$typeof:Q,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var ee=Object(s.default)(function(e){return a.a.createElement(u.a,Z({},e,{elevation:"medium"}))}).withConfig({displayName:"PanelExplore__Styled",componentId:"sc-39h5rt-0"})(["position:absolute;right:0;top:0;bottom:0;width:","px;pointer-events:all;overflow-y:auto;"],function(e){return e.panelWidth||400}),te=Object(s.default)(function(e){return a.a.createElement(u.a,Z({background:"black"},e))}).withConfig({displayName:"PanelExplore__PanelHeader",componentId:"sc-39h5rt-1"})([""]),oe=Object(s.default)(function(e){return a.a.createElement(u.a,Z({},e,{pad:"small"}))}).withConfig({displayName:"PanelExplore__PanelBody",componentId:"sc-39h5rt-2"})([""]),ne=Object(s.default)(function(e){return a.a.createElement(u.a,Z({},e,{pad:{horizontal:"small",bottom:"small"}}))}).withConfig({displayName:"PanelExplore__TitleWrap",componentId:"sc-39h5rt-3"})([""]),re=Object(s.default)(j.a).withConfig({displayName:"PanelExplore__Title",componentId:"sc-39h5rt-4"})(["font-family:'wwfregular';text-transform:uppercase;letter-spacing:0.05em;"]),ae=Object(s.default)(function(e){return a.a.createElement(u.a,Z({},e,{direction:"row",gap:"hair"}))}).withConfig({displayName:"PanelExplore__Tabs",componentId:"sc-39h5rt-5"})(["padding:1px;"]),ie=Object(s.default)(function(e){return a.a.createElement(p.a,Z({plain:!0},e))}).withConfig({displayName:"PanelExplore__TabLink",componentId:"sc-39h5rt-6"})(["font-family:'wwfregular';text-transform:uppercase;font-weight:normal;letter-spacing:0.05em;padding:0 ",";color:",";opacity:1;border-bottom:3px solid;border-color:",";"],function(e){return e.theme.global.edgeSize.small},function(e){var t=e.theme,o=e.active;return t.global.colors[o?"white":"light-4"]},function(e){var t=e.theme;return e.active?t.global.colors.white:"transparent"}),le=Object(s.default)(j.a).withConfig({displayName:"PanelExplore__TabLinkAnchor",componentId:"sc-39h5rt-7"})([""]),ce=Object(s.default)(u.a).withConfig({displayName:"PanelExplore__SectionLayerGroup",componentId:"sc-39h5rt-8"})([""]),de=Object(s.default)(function(e){return a.a.createElement(w.a,Z({},e,{level:4}))}).withConfig({displayName:"PanelExplore__TitleGroup",componentId:"sc-39h5rt-9"})(["font-family:'wwfregular';text-transform:uppercase;font-weight:normal;letter-spacing:0.05em;margin-bottom:0;"]),fe=Object(s.default)(O.a).withConfig({displayName:"PanelExplore__DescriptionGroup",componentId:"sc-39h5rt-10"})(["margin-bottom:0;"]),se="PanelExplore",ue={tab:0,layersMemo:null,prrojectsMemo:null},pe=Y(L.a,{size:"xlarge"}),me=Y(y.a,{size:"xlarge"});var be=Object(l.b)({projects:function(e){return Object(C.c)(e,{key:"projects"})},layersConfig:function(e){return Object(C.k)(e)},exploreConfig:function(e){return Object(C.i)(e)},locale:function(e){return Object(C.l)(e)},uiState:function(e){return Object(C.t)(e,{key:se})},activeLayers:function(e){return Object(C.a)(e)}});var ye,ge=Object(i.connect)(be,function(e){return{onSetTab:function(t,o){return e(Object(E.q)(se,Object.assign({},ue,o,{tab:t})))},onMemoLayers:function(t,o){return e(Object(E.q)(se,Object.assign({},ue,o,{layersMemo:t})))},onMemoProjects:function(t,o){return e(Object(E.q)(se,Object.assign({},ue,o,{projectsMemo:t})))},onLayerInfo:function(t){return e(Object(E.m)(t))},onToggleLayer:function(t){return e(Object(E.r)(t))},onSetLayers:function(t){return e(Object(E.n)(t))}}}),he=Object(d.compose)(ge)(function(e){var t=e.onClose,o=e.onLayerInfo,n=e.onToggleLayer,i=e.onSetLayers,l=e.onMemoLayers,c=e.onSetTab,d=e.projects,s=e.layersConfig,u=e.exploreConfig,b=e.locale,y=e.uiState,g=e.activeLayers,h=y?Object.assign({},ue,y):ue,j=h.tab,w=h.layersMemo;Object(r.useEffect)(function(){!w||g&&0!==g.length||i(w)},[]),Object(r.useEffect)(function(){l(g,y)},[g]);var O=u&&u[j];return Y(m.a.Consumer,{},void 0,function(e){return Y(ee,{background:"white",panelWidth:Object(_.b)(e)},void 0,Y("div",{},void 0,Y(te,{},void 0,Y(p.a,{onClick:function(){return t()},icon:pe,plain:!0,alignSelf:"end"}),Y(ne,{},void 0,me,Y(re,{},void 0,a.a.createElement(f.FormattedMessage,X.title))),Y(ae,{},void 0,u&&u.map(function(e,t){return Y(ie,{onClick:function(){return c(t,y)},active:j===t,disabled:j===t,label:Y(le,{active:j===t},void 0,e.title[b]||e.title[x.DEFAULT_LOCALE])},e.id)}))),Y(oe,{},void 0,s&&O&&O.id!==v.i&&O.groups&&O.groups.map(function(e){return Y(ce,{},e.id,Y(de,{},void 0,e.title[b]||e.title[x.DEFAULT_LOCALE]),e.description&&Y(fe,{},void 0,e.description[b]||e.description[x.DEFAULT_LOCALE]),Y(V,{group:e,layersConfig:s.filter(function(t){return t.category===O.id&&t.group===e.id}),locale:b,activeLayers:g,onLayerInfo:o,onToggleLayer:n}))}),s&&O&&O.id!==v.i&&!O.groups&&Y(ce,{},void 0,Y(V,{group:O,layersConfig:s.filter(function(e){return e.category===O.id}),locale:b,activeLayers:g,onLayerInfo:o,onToggleLayer:n})),d&&O&&O.id===v.i&&Y(ce,{},void 0,Y(V,{group:O.id,layersConfig:d,projects:!0,locale:b,activeLayers:g,onLayerInfo:o,onToggleLayer:n})))))})}),ve=o("f9c0d22799479965d07c"),je=Object(f.defineMessages)({showLayerPanel:{id:"".concat("app.containers.PanelExplore",".showLayerPanel"),defaultMessage:"Layers"},showProjects:{id:"".concat("app.containers.PanelExplore",".showProjects"),defaultMessage:"Show WWF-projects"},hideProjects:{id:"".concat("app.containers.PanelExplore",".hideProjects"),defaultMessage:"Hide WWF-projects"},showProjectsShort:{id:"".concat("app.containers.PanelExplore",".showProjectsShort"),defaultMessage:"Show projects"},hideProjectsSHort:{id:"".concat("app.containers.PanelExplore",".hideProjectsShort"),defaultMessage:"Hide projects"}});function we(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var o=[],n=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){r=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}return o}(e,t)||_e(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Oe(e,t,o,n){ye||(ye="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var i=new Array(a),l=0;l<a;l++)i[l]=arguments[l+3];t.children=i}if(t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});return{$$typeof:ye,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function Le(e){return function(e){if(Array.isArray(e))return xe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||_e(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _e(e,t){if(e){if("string"===typeof e)return xe(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?xe(e,t):void 0}}function xe(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}o.d(t,"ModuleExplore",function(){return Ne});var Ee=Object(s.default)(function(e){return a.a.createElement(u.a,Ce({},e,{direction:"row"}))}).withConfig({displayName:"ModuleExplore__Buttons",componentId:"sc-1nskavd-0"})(["position:absolute;right:20px;top:20px;pointer-events:all;"]),Ie=Object(s.default)(function(e){return a.a.createElement(p.a,Ce({plain:!0,reverse:!0},e))}).withConfig({displayName:"ModuleExplore__ShowButton",componentId:"sc-1nskavd-1"})(["font-family:'wwfregular';text-transform:uppercase;letter-spacing:0.05em;background:",";color:",";border-radius:20px;padding:5px 15px;"],function(e){return e.theme.global.colors.black},function(e){return e.theme.global.colors.white}),Pe=s.default.div.withConfig({displayName:"ModuleExplore__ProjectButtonWrap",componentId:"sc-1nskavd-2"})(["position:absolute;right:","px;top:20px;pointer-events:all;"],function(e){return e.asideOffset+20}),Se=function(e){var t=e.showAll,o=e.lids,n=e.pids,r=e.onClick;return Oe(Ie,{onClick:function(){r(t?Object(g.uniq)([].concat(Le(o),Le(n.map(function(e){return"".concat(v.j.id,"-").concat(e)})))):o.filter(function(e){return!Object(h.a)(e,"".concat(v.j.id,"-"))}))},label:t?a.a.createElement(f.FormattedMessage,je.showProjects):a.a.createElement(f.FormattedMessage,je.hideProjects)})},Me=Oe(c.Helmet,{},void 0,Oe("title",{},void 0,"ModuleExplore"),Oe("meta",{name:"description",content:"Description of ModuleExplore"})),ke=Oe(y.a,{color:"white"});function Ne(e){var t=e.onSetLayers,o=e.layerIds,n=e.projects,i=we(Object(r.useState)(!0),2),l=i[0],c=i[1],d=we(Object(r.useState)(!1),2),s=d[0],u=d[1],p=n?n.map(function(e){return e.project_id}):[],y=o.filter(function(e){if(Object(h.a)(e,"".concat(v.j.id,"-"))){var t=e.replace("".concat(v.j.id,"-"),"");return p.indexOf(t)>-1}return!1}).map(function(e){return e.replace("".concat(v.j.id,"-"),"")}),g=n&&y.length>=n.length;return Oe(m.a.Consumer,{},void 0,function(e){return Oe("div",{},void 0,Me,Oe(ve.a,{},void 0,l&&"small"!==e&&Oe(Pe,{asideOffset:Object(_.b)(e)},void 0,Oe(Se,{showAll:!g,lids:o,pids:p,onClick:t})),l&&"small"!==e&&Oe(he,{onClose:function(){return c(!1)}}),s&&"small"===e&&Oe(b.a,{full:!0},void 0,Oe(he,{onClose:function(){return u(!1)}})),(!l&&"small"!==e||!s&&"small"===e)&&Oe(Ee,{},void 0,Oe(Se,{showAll:!g,lids:o,pids:p,onClick:t}),Oe(Ie,{onClick:function(){c(!0),u(!0)},icon:ke,label:a.a.createElement(f.FormattedMessage,je.showLayerPanel)}))))})}var Ae=Object(l.b)({layerIds:function(e){return Object(C.a)(e)},projects:function(e){return Object(C.c)(e,{key:"projects"})}});var Te=Object(i.connect)(Ae,function(e){return{onSetLayers:function(t){e(Object(E.n)(t))}}});t.default=Object(d.compose)(Te)(Ne)}}]);