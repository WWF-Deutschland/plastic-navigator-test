(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4e7d534eebf4a8229e5a":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),a=n.n(r),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("a28fc3c963a1d4d1a2e5"),l=n("0d7f0986bcd2f33d8a2a"),d=n("ab4cb61bcb2dc161defb"),u=n("ab039aecd4a1d4fedc0e"),s=n("0785de3f40b134973d35"),f=n("0b3cb19af78752326f59"),m=n("eb656803928a435bd3cc"),p=n("66543f9bb6e90e461320"),b=n("5ca68c6edf7ca33c5f8f"),h=n("045dd844c9ae122c636a"),y=n("6e8b196ad89c220e8d8c"),g=n("d6f259ffb10cc810b5a4"),v=n("f9c0d22799479965d07c"),w=n("a7c39d8357e500a5b832"),x=n("33be1ae2924e03abfdcb"),j=n("ba66d5f7bcc119f48e96"),O=n("5fcb57e842c486d08175"),S=n("6542cd13fd5dd1bcffd4"),_=n("1b0ed09bed43ca221d1b"),T=n("a72b40110d9c31c9b5c5"),I=n("422249433a2d25af359d"),E=n("02ed36e7ccc5625439c9"),C="app.containers.ModulePolicy",L=Object(u.defineMessages)({showLayerPanel:{id:"".concat(C,".showLayerPanel"),defaultMessage:"Policy info"},selectTopics:{id:"".concat(C,".selectTopics"),defaultMessage:"Select a policy topic to explore"},selectArchivedTopics:{id:"".concat(C,".selectArchivedTopics"),defaultMessage:"Archived topics"},select:{id:"".concat(C,".select"),defaultMessage:"Select"}}),M=n("7a0805d5a888ddc3ee44"),A=n.n(M);function k(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=r;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}if(t&&a)for(var d in a)void 0===t[d]&&(t[d]=a[d]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var z=Object(f.default)(function(e){return a.a.createElement(p.a,H({plain:!0},e))}).withConfig({displayName:"TopicCard__TopicButton",componentId:"sc-1scya3m-0"})(["&:hover{box-shadow:rgba(0,0,0,0.2) 0px 2px 4px;}"]),F=Object(f.default)(function(e){return a.a.createElement(m.a,H({elevation:"small",pad:"small"},e))}).withConfig({displayName:"TopicCard__TopicInner",componentId:"sc-1scya3m-1"})(["position:relative;background-color:",";"],function(e){var t=e.isHover,n=e.theme;return t?n.global.colors.brand:"white"}),U=Object(f.default)(function(e){return a.a.createElement(m.a,H({margin:{bottom:"large"}},e))}).withConfig({displayName:"TopicCard__TopicButtonWrap",componentId:"sc-1scya3m-2"})(["width:100%;min-width:200px;max-width:300px;@media (min-width:","){width:50%;}@media (min-width:","){padding:0 6px;&:first-child{padding-left:0;}&:last-child{padding-right:0;}width:","%;}"],function(e){return e.theme.sizes.medium.minpx},function(e){return e.theme.sizes.large.minpx},function(e){var t=e.count;return e.secondary?25:100/t}),D=Object(f.default)(function(e){return a.a.createElement(b.a,H({size:"small"},e))}).withConfig({displayName:"TopicCard__Teaser",componentId:"sc-1scya3m-3"})(["color:",";"],function(e){var t=e.isHover,n=e.theme;return t?"white":n.global.colors.text.light}),R=Object(f.default)(function(e){return a.a.createElement(b.a,H({size:"xlarge"},e))}).withConfig({displayName:"TopicCard__TitleShort",componentId:"sc-1scya3m-4"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;margin-top:3px;text-align:center;color:",";"],function(e){var t=e.isHover,n=e.theme;return t?"white":n.global.colors.brand}),$=f.default.div.withConfig({displayName:"TopicCard__Select",componentId:"sc-1scya3m-5"})(["position:",";bottom:0;left:50%;transform:translate(0,","%);"],function(e){return e.secondary?"static":"absolute"},function(e){return e.secondary?0:50}),B=f.default.div.withConfig({displayName:"TopicCard__SelectText",componentId:"sc-1scya3m-6"})(["background-color:",";border-radius:99999px;padding:10px 25px 11px;box-shadow:rgba(0,0,0,0.2) 0px 2px 4px;color:white;font-family:wwfregular;text-transform:uppercase;font-size:20px;line-height:1;transform:translate(-50%,0);"],function(e){var t=e.isHover,n=e.theme;return t?n.global.colors.brandDarker:n.global.colors.brand}),J=f.default.div.withConfig({displayName:"TopicCard__SelectTextSecondary",componentId:"sc-1scya3m-7"})(["color:",";font-family:wwfregular;text-transform:uppercase;font-size:18px;line-height:1;"],function(e){var t=e.isHover,n=e.theme;return t?"white":n.global.colors.brand});var K,V=Object(u.injectIntl)(Object(f.withTheme)(function(e){var t=e.intl,n=e.onTopicSelect,o=e.topic,i=e.count,c=e.theme,l=e.secondary,d=t.locale,f=P(Object(r.useState)(!1),2),p=f[0],b=f[1];return k(U,{className:"mpx-topic-select",count:i,secondary:l},void 0,k(z,{plain:!0,hoverIndicator:!1,onClick:function(){return n(o.id)},onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)}},void 0,k(F,{isHover:p},void 0,!l&&k(m.a,{align:"center"},void 0,k(function(e){return g.l[o.id](e)},{color:p?"white":c.global.colors.brand}),k(R,{isHover:p},void 0,o["short_".concat(d)]||o["short_".concat(s.DEFAULT_LOCALE)])),k(m.a,{align:"center",margin:{top:"small",bottom:l?"small":"medium"}},void 0,k(D,{isHover:p},void 0,k(A.a,{source:o["teaser_".concat(d)]||o["teaser_".concat(s.DEFAULT_LOCALE)]}))),k($,{secondary:l,isHover:p},void 0,!l&&k(B,{isHover:p},void 0,a.a.createElement(u.FormattedMessage,L.select)),l&&k(J,{isHover:p},void 0,a.a.createElement(u.FormattedMessage,L.select))))))}));function W(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t,n,o){K||(K="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:K,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}(e,t)||q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){if(e){if("string"===typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"ModulePolicy",function(){return me});var Z=Object(f.default)(function(e){return a.a.createElement(m.a,Q({gap:"small",direction:"row"},e))}).withConfig({displayName:"ModulePolicy__Buttons",componentId:"sc-1xkx6al-0"})(["position:absolute;right:12px;top:22px;pointer-events:all;"]),ee=Object(f.default)(function(e){return a.a.createElement(p.a,Q({plain:!0,reverse:!0},e))}).withConfig({displayName:"ModulePolicy__ShowButton",componentId:"sc-1xkx6al-1"})(["font-family:'wwfregular';text-transform:uppercase;line-height:16px;background:",";color:",";border-radius:20px;padding:2px 13px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);&:hover{background:",";}@media (min-width:","){padding:5px 15px 5px 21px;}"],function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"white":"brand"]},function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"black":"white"]},function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"lightHover":"brandDark"]},function(e){return e.theme.sizes.medium.minpx}),te=Object(f.default)(function(e){return a.a.createElement(m.a,Q({flex:{shrink:0},pad:"medium"},e))}).withConfig({displayName:"ModulePolicy__Overview",componentId:"sc-1xkx6al-2"})(["min-width:100%;min-width:","px;@media (min-width:","){min-width:","px;}@media (min-width:","){min-width:","px;}@media (min-width:","){min-width:","px;}@media (min-width:","){min-width:","px;}"],function(e){return e.theme.dimensions.modal.width[0]},function(e){return e.theme.sizes.medium.minpx},function(e){return e.theme.dimensions.modal.width[1]},function(e){return e.theme.sizes.large.minpx},function(e){return e.theme.dimensions.modal.width[2]},function(e){return e.theme.sizes.xlarge.minpx},function(e){return e.theme.dimensions.modal.width[3]},function(e){return e.theme.sizes.xxlarge.minpx},function(e){return e.theme.dimensions.modal.width[4]}),ne=Object(f.default)(b.a).withConfig({displayName:"ModulePolicy__TitleShort",componentId:"sc-1xkx6al-3"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;margin-top:3px;"]),oe=Object(f.default)(function(e){return a.a.createElement(b.a,Q({size:"xxxlarge"},e))}).withConfig({displayName:"ModulePolicy__Title",componentId:"sc-1xkx6al-4"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;margin-top:3px;"]),re=Object(f.default)(function(e){return a.a.createElement(b.a,Q({size:"xlarge"},e))}).withConfig({displayName:"ModulePolicy__TitleSelect",componentId:"sc-1xkx6al-5"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;margin-top:3px;border-bottom:1px solid rgb(218,218,218);padding-bottom:10px;"]),ae=Object(f.default)(function(e){return a.a.createElement(b.a,Q({size:"large"},e))}).withConfig({displayName:"ModulePolicy__TitleSelectArchived",componentId:"sc-1xkx6al-6"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;margin-top:3px;border-bottom:1px solid rgb(218,218,218);padding-bottom:10px;"]),ie="mpol",ce={layersMemo:null,viewMemo:null},le={show:!0},de=function(e){return!!e.find(function(e){return Object(I.f)(e,g.k)})},ue=function(e){return e.find(function(e){return Object(I.f)(e,g.k)})},se=X(w.x,{color:"black"}),fe=X(w.x,{color:"white",size:"26px"});function me(e){var t=e.onSetLayers,n=e.uiState,o=e.onMemo,i=e.activeLayers,c=e.firstLanding,d=e.onSetLanding,f=e.intl,p=e.onSetLayerInfo,b=e.onSetItemInfo,w=e.info,S=e.uiURL,_=e.onShow,T=e.onHideLayerInfo,C=e.onShowKey,M=e.config,A=e.moduleLayer,k=e.itemInfo,P=f.locale,N=Object(y.c)(w),H=(n?Object.assign({},ce,n):ce).viewMemo,z=(S?Object.assign({},ce,S):le).show;Object(r.useEffect)(function(){c&&d()},[]),Object(r.useEffect)(function(){de(i)?C(!0):C(!1)},[i]),Object(r.useEffect)(function(){T(),""===w&&z&&_(!0,S)}),Object(r.useEffect)(function(){if(""===w&&H&&p(H),de(i)){var e=ue(i);Y(Object(y.a)(w),1)[0]!==e&&p(e)}},[w,i]),Object(r.useEffect)(function(){var e={};Object(I.f)(N,g.h.policy.featuredLayer)&&(e=Object.assign({},{viewMemo:w})),o(e,n)},[i,w]);var F=de(i),U=a.a.useRef(null),D=M&&M.find(function(e){return e.id===g.k}),R=A&&A.data.tables&&A.data.tables.topics&&A.data.tables.topics.data&&A.data.tables.topics.data.data.filter(function(e){return"1"!==e.archived}),$=A&&A.data.tables&&A.data.tables.topics&&A.data.tables.topics.data&&A.data.tables.topics.data.data.filter(function(e){return"1"===e.archived});return X("div",{},void 0,X(l.Helmet,{},void 0,X("title",{},void 0,"".concat(f.formatMessage(E.a.module_explore_metaTitle)))),a.a.createElement(v.a,{ref:U},!F&&D&&U&&X(h.a,{modal:!0,animate:!1,position:"top",margin:{top:"xxlarge"},style:{overflowY:"auto"}},void 0,X(te,{className:"mpx-module-overview"},void 0,X(O.a,{header:X(m.a,{},void 0,X(m.a,{align:"center"},void 0,X(m.a,{},void 0,se,X(ne,{},void 0,D["title-short"][P]||D["title-short"][s.DEFAULT_LOCALE]))),X(m.a,{align:"center",margin:{vertical:"small"}},void 0,X(oe,{},void 0,D.title[P]||D.title[s.DEFAULT_LOCALE]))),config:D,inject:[{tag:"[SELECT-TOPICS-CURRENT]",el:X(m.a,{margin:{top:"medium",bottom:"small"},gap:"small"},void 0,X(re,{},void 0,a.a.createElement(u.FormattedMessage,L.selectTopics)),X(m.a,{direction:"row",margin:{top:"small"},wrap:!0},void 0,R&&R.map(function(e){return X(V,{count:R.length,topic:e,onTopicSelect:function(e){return t([].concat(W(i),["".concat(g.k,"_").concat(e)]))}},e.id)})))},{tag:"[SELECT-TOPICS-ARCHIVE]",el:X(m.a,{margin:{top:"medium",bottom:"small"}},void 0,X(ae,{},void 0,a.a.createElement(u.FormattedMessage,L.selectArchivedTopics)),X(m.a,{direction:"row",margin:{top:"small"}},void 0,$&&$.map(function(e){return X(V,{secondary:!0,count:$.length,topic:e,onTopicSelect:function(e){return t([].concat(W(i),["".concat(g.k,"_").concat(e)]))}},e.id)})))}]}))),F&&X(Z,{},void 0,X(ee,{onClick:function(){_(!0,S)},icon:fe,label:a.a.createElement(u.FormattedMessage,L.showLayerPanel)})),F&&w&&z&&X(x.a,{isModule:!0,view:w,onClose:function(){return _(!1,S)},onHome:function(){return t(g.h.policy.layers)},onSetTopic:function(e){t([g.h.policy.layers,"".concat(g.k,"_").concat(e)])},currentModule:g.h.policy}),F&&k&&X(j.a,{isModule:!0,item:k,onClose:function(){return b()},onSetTopic:function(e){var n=e.layerIdX,o=e.topicId,r=e.itemId,a=e.type;b("".concat(n,"_").concat(o,"|").concat(a,"-").concat(r)),t([g.h.policy.layers,"".concat(g.k,"_").concat(o)])},currentModule:g.h.policy})))}var pe=Object(c.b)({uiState:function(e){return Object(S.A)(e,{key:ie})},activeLayers:function(e){return Object(S.a)(e)},firstLanding:function(e){return Object(S.j)(e)},info:function(e){return Object(S.l)(e)},itemInfo:function(e){return Object(S.n)(e)},uiURL:function(e){return Object(S.B)(e,{key:ie})},config:function(e){return Object(_.c)(e)},moduleLayer:function(e){return Object(_.b)(e,g.h.policy.featuredLayer)}});var be=Object(i.connect)(pe,function(e){return{onShowKey:function(t){return e(Object(T.s)(t))},onSetLanding:function(){return e(Object(T.n)())},onSetLayers:function(t){return e(Object(T.p)(t))},onSetLayerInfo:function(t){e(Object(T.o)(t))},onSetItemInfo:function(t){e(Object(T.m)(t))},onShow:function(t,n){return e(Object(T.v)(ie,Object.assign({},le,n,{show:t})))},onHideLayerInfo:function(){return e(Object(T.w)(!1))},onMemo:function(t,n){e(Object(T.u)(ie,Object.assign({},ce,n,t)))}}});t.default=Object(d.compose)(be)(Object(u.injectIntl)(me))}}]);