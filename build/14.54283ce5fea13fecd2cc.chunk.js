(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4e7d534eebf4a8229e5a":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),a=n.n(r),c=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),i=n("a28fc3c963a1d4d1a2e5"),l=n("0d7f0986bcd2f33d8a2a"),u=n("ab4cb61bcb2dc161defb"),d=n("ab039aecd4a1d4fedc0e"),s=n("0785de3f40b134973d35"),f=n("0b3cb19af78752326f59"),p=n("eb656803928a435bd3cc"),m=n("66543f9bb6e90e461320"),b=n("5ca68c6edf7ca33c5f8f"),g=n("761b1f7fdd256e4f5426"),h=n("6e8b196ad89c220e8d8c"),y=n("d6f259ffb10cc810b5a4"),v=n("f9c0d22799479965d07c"),x=n("371651b8f7b5168787e0"),w=n("a7c39d8357e500a5b832"),O=n("33be1ae2924e03abfdcb"),j=n("ba66d5f7bcc119f48e96"),C=n("5fcb57e842c486d08175"),S=n("6542cd13fd5dd1bcffd4"),_=n("1b0ed09bed43ca221d1b"),T=n("a72b40110d9c31c9b5c5"),E=n("422249433a2d25af359d"),I=n("eeb78fbc9451886113b2"),k=n("02ed36e7ccc5625439c9"),A="app.containers.ModulePolicy",M=Object(d.defineMessages)({showLayerPanel:{id:"".concat(A,".showLayerPanel"),defaultMessage:"Policy info"},selectTopics:{id:"".concat(A,".selectTopics"),defaultMessage:"Select a policy topic to explore"},selectCurrentTopics:{id:"".concat(A,".selectCurrentTopics"),defaultMessage:"Select to explore on map"},selectArchivedTopics:{id:"".concat(A,".selectArchivedTopics"),defaultMessage:"Archived topics"},select:{id:"".concat(A,".select"),defaultMessage:"Select"},show:{id:"".concat(A,".show"),defaultMessage:"Show"},showOnMap:{id:"".concat(A,".showOnMap"),defaultMessage:"Show on Map"}}),L=n("7a0805d5a888ddc3ee44"),N=n.n(L),H=n("c8e6563c3537109b383a");function P(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,c=arguments.length-3;if(t||0===c||(t={children:void 0}),1===c)t.children=r;else if(c>1){for(var i=new Array(c),l=0;l<c;l++)i[l]=arguments[l+3];t.children=i}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(o=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var D=Object(f.default)(function(e){return a.a.createElement(m.a,U({plain:!0},e))}).withConfig({displayName:"TopicCard__TopicButton",componentId:"sc-1scya3m-0"})(["background:",";box-shadow:",";&:hover{background:",";}"],function(e){var t=e.theme;return e.secondary?t.global.colors.topicCards.secondary.background:t.global.colors.topicCards.default.background},function(e){return e.secondary?"rgba(0, 0, 0, 0.2) 0px 2px 4px":"none"},function(e){var t=e.theme;return e.secondary?t.global.colors.topicCards.secondary.background:t.global.colors.topicCards.default.backgroundHover}),$=Object(f.default)(function(e){return a.a.createElement(p.a,U({elevation:"small",pad:"small",responsive:!1},e))}).withConfig({displayName:"TopicCard__TopicInner",componentId:"sc-1scya3m-1"})(["position:relative;background-color:",";box-shadow:none;&:hover{box-shadow:",";background:",";}border:",";"],function(e){var t=e.theme;return e.secondary?t.global.colors.topicCards.secondary.background:t.global.colors.topicCards.default.background},function(e){var t=e.theme;return e.secondary?"none":"".concat(t.global.colors.topicCards.default.backgroundHover," 4px 2px 4px")},function(e){var t=e.theme;return e.secondary?t.global.colors.topicCards.secondary.backgroundHover:t.global.colors.topicCards.default.backgroundHover},function(e){return e.secondary?"none":"1px solid white"}),B=Object(f.default)(function(e){return a.a.createElement(p.a,e)}).withConfig({displayName:"TopicCard__Styled",componentId:"sc-1scya3m-2"})(["width:100%;hyphens:auto;@media (min-width:","){width:50%;padding:0 6px;}@media (min-width:","){width:","%;}"],function(e){return e.theme.sizes.medium.minpx},function(e){return e.theme.sizes.large.minpx},function(e){var t=e.count;return e.secondary?50:100/t}),R=Object(f.default)(function(e){return a.a.createElement(b.a,U({size:"small"},e))}).withConfig({displayName:"TopicCard__Teaser",componentId:"sc-1scya3m-3"})(["color:",";"],function(e){var t=e.theme;return e.secondary?t.global.colors.text.light:"white"}),W=Object(f.default)(function(e){return a.a.createElement(b.a,U({size:"xlarge"},e))}).withConfig({displayName:"TopicCard__TitleShort",componentId:"sc-1scya3m-4"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;margin-top:3px;text-align:",";color:",";"],function(e){return e.secondary?"left":"center"},function(e){var t=e.theme;return e.secondary?t.global.colors.brand:"white"}),J=Object(f.default)(function(e){return a.a.createElement(p.a,e)}).withConfig({displayName:"TopicCard__ShowButton",componentId:"sc-1scya3m-5"})(["position:absolute;bottom:","px;left:",";right:",";transform:translate(",");box-shadow:"," 0px 2px 4px;padding:4px 16px 5px;background-color:white;border-radius:99999px;@media (min-width:","){padding:",";}"],function(e){return e.isOffset?0:8},function(e){return e.isOffset?"50%":"auto"},function(e){return e.isOffset?"auto":"12px"},function(e){return e.isOffset?"-50%,50%":"0,0"},function(e){var t=e.secondary,n=e.theme;return t?"rgba(0, 0, 0, 0.2)":n.global.colors.topicCards.default.buttonFontHover},function(e){return e.theme.sizes.large.minpx},function(e){return e.secondary?"5px 28px 7px":"6px 26px 8px"}),K=Object(f.default)(function(e){return a.a.createElement(b.a,e)}).withConfig({displayName:"TopicCard__ShowText",componentId:"sc-1scya3m-6"})(["color:",";font-family:wwfregular;text-transform:uppercase;line-height:1;font-size:16px;@media (min-width:","){font-size:",";}"],function(e){var t=e.isHover,n=e.secondary,o=e.theme,r=n?o.global.colors.topicCards.secondary:o.global.colors.topicCards.default;return t?r.buttonFontHover:r.buttonFont},function(e){return e.theme.sizes.large.minpx},function(e){return e.secondary?"20px":"24px"});function q(e,t){return e?"40px":"small"===t?"60px":"70px"}var V,X=Object(d.injectIntl)(Object(f.withTheme)(function(e){var t=e.intl,n=e.onTopicSelect,o=e.topic,c=e.count,i=e.secondary,l=t.locale,u=z(Object(r.useState)(!1),2),f=u[0],m=u[1],b=a.a.useContext(g.a),h=Object(H.e)(b,"large")&&!i;return P(B,{className:"mpx-topic-select",count:c,secondary:i,margin:{bottom:h?"large":"medium"}},void 0,P(D,{plain:!0,hoverIndicator:!1,secondary:i,onClick:function(){return n(o.id)},onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)}},void 0,P($,{isHover:f,secondary:i},void 0,P(p.a,{align:i?"start":"center"},void 0,P(function(e){return y.l[o.id](e)},{color:i?"brand":"white",size:q(i,b)}),P(W,{isHover:f,secondary:i},void 0,o["short_".concat(l)]||o["short_".concat(s.DEFAULT_LOCALE)])),P(p.a,{align:i?"start":"center",responsive:!1,margin:{top:"small",bottom:h?"medium":"ml"}},void 0,P(R,{isHover:f,secondary:i},void 0,P(N.a,{source:o["teaser_".concat(l)]||o["teaser_".concat(s.DEFAULT_LOCALE)]}))),P(J,{secondary:i,isHover:f,isOffset:h},void 0,P(K,{isHover:f,isOffset:h,secondary:i},void 0,a.a.createElement(d.FormattedMessage,M.show))))))}));function G(e,t,n,o){V||(V="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var c=new Array(a),i=0;i<a;i++)c[i]=arguments[i+3];t.children=c}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:V,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(o=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var ee=Object(f.default)(function(e){return a.a.createElement(m.a,Z({plain:!0},e))}).withConfig({displayName:"AggregateTopicCard__TopicButton",componentId:"sc-1lgmudm-0"})([""]),te=Object(f.default)(function(e){return a.a.createElement(p.a,Z({pad:"medium"},e))}).withConfig({displayName:"AggregateTopicCard__TopicInner",componentId:"sc-1lgmudm-1"})(["position:relative;background-color:",";&:hover{box-shadow:"," 4px 2px 4px;}"],function(e){return e.theme.global.colors.topicCards.aggregate.background},function(e){return e.theme.global.colors.topicCards.aggregate.dropShadow}),ne=Object(f.default)(function(e){return a.a.createElement(p.a,e)}).withConfig({displayName:"AggregateTopicCard__Styled",componentId:"sc-1lgmudm-2"})(["width:100%;height:100%;hyphens:auto;"]),oe=Object(f.default)(function(e){return a.a.createElement(b.a,e)}).withConfig({displayName:"AggregateTopicCard__Teaser",componentId:"sc-1lgmudm-3"})(["color:",";text-align:center;"],function(e){return e.theme.global.colors.text.light}),re=Object(f.default)(function(e){return a.a.createElement(b.a,e)}).withConfig({displayName:"AggregateTopicCard__TitleShort",componentId:"sc-1lgmudm-4"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;text-align:center;color:",";"],function(e){return e.theme.global.colors.brand}),ae=Object(f.default)(function(e){return a.a.createElement(p.a,e)}).withConfig({displayName:"AggregateTopicCard__ShowOnMapButton",componentId:"sc-1lgmudm-5"})(["border-radius:99999px;background-color:",";box-shadow:rgba(0,0,0,0.2) 0px 2px 4px;padding:7px 20px 9px;@media (min-width:","){padding:10px 28px 12px;}"],function(e){var t=e.isHover,n=e.theme;return t?n.global.colors.brandDarker:n.global.colors.brand},function(e){return e.theme.sizes.large.minpx}),ce=Object(f.default)(function(e){return a.a.createElement(b.a,e)}).withConfig({displayName:"AggregateTopicCard__ShowText",componentId:"sc-1lgmudm-6"})(["color:white;font-family:wwfregular;text-transform:uppercase;line-height:1;font-size:24px;@media (min-width:","){font-size:28px;}"],function(e){return e.theme.sizes.large.minpx});var ie,le=Object(d.injectIntl)(Object(f.withTheme)(function(e){var t=e.intl,n=e.onTopicSelect,o=e.topic,c=e.theme,i=t.locale,l=Q(Object(r.useState)(!1),2),u=l[0],f=l[1],m="small"===a.a.useContext(g.a);return G(ne,{className:"mpx-topic-select"},void 0,G(ee,{plain:!0,hoverIndicator:!1,onClick:function(){return n(o.id)},onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)}},void 0,G(te,{isHover:u},void 0,G(p.a,{align:"center",gap:"small"},void 0,G(function(e){return y.l[o.id](e)},{color:c.global.colors.brand,size:m?"70px":"90px"}),G(re,{isHover:u,size:m?"xxlarge":"xxxlarge"},void 0,o["short_".concat(i)]||o["short_".concat(s.DEFAULT_LOCALE)])),G(p.a,{align:"center",margin:{horizontal:m?"medium":"xlarge"}},void 0,G(p.a,{margin:{top:"medium",bottom:"small"}},void 0,G(oe,{isHover:u,size:m?"medium":"large"},void 0,G(N.a,{source:o["teaser_".concat(i)]||o["teaser_".concat(s.DEFAULT_LOCALE)]}))),G(p.a,{align:"center",margin:"medium"},void 0,G(ae,{isHover:u},void 0,G(ce,{isHover:u},void 0,a.a.createElement(d.FormattedMessage,M.showOnMap))))))))}));function ue(e){return function(e){if(Array.isArray(e))return pe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||fe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t,n,o){ie||(ie="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var c=new Array(a),i=0;i<a;i++)c[i]=arguments[i+3];t.children=c}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:ie,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(o=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return n}(e,t)||fe(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e,t){if(e){if("string"===typeof e)return pe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pe(e,t):void 0}}function pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"ModulePolicy",function(){return Me});var be=Object(f.default)(function(e){return a.a.createElement(p.a,me({margin:{top:"medium",bottom:"small"},pad:"medium",gap:"small",background:"brand"},e))}).withConfig({displayName:"ModulePolicy__CurrentTopicsWrapper",componentId:"sc-1xkx6al-0"})(["box-shadow:4px 4px 4px rgba(0,0,0,0.2);"]),ge=Object(f.default)(function(e){return a.a.createElement(p.a,e)}).withConfig({displayName:"ModulePolicy__ArchivedTopicsWrapper",componentId:"sc-1xkx6al-1"})([""]),he=Object(f.default)(function(e){return a.a.createElement(p.a,me({gap:"small",direction:"row"},e))}).withConfig({displayName:"ModulePolicy__Buttons",componentId:"sc-1xkx6al-2"})(["position:absolute;right:12px;top:22px;pointer-events:all;"]),ye=Object(f.default)(function(e){return a.a.createElement(m.a,me({plain:!0,reverse:!0},e))}).withConfig({displayName:"ModulePolicy__ShowButton",componentId:"sc-1xkx6al-3"})(["font-family:'wwfregular';text-transform:uppercase;line-height:16px;background:",";color:",";border-radius:20px;padding:2px 13px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);&:hover{background:",";}@media (min-width:","){padding:5px 15px 5px 21px;}"],function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"white":"brand"]},function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"black":"white"]},function(e){var t=e.theme,n=e.projects;return t.global.colors[n?"lightHover":"brandDark"]},function(e){return e.theme.sizes.medium.minpx}),ve=Object(f.default)(b.a).withConfig({displayName:"ModulePolicy__TitleShort",componentId:"sc-1xkx6al-4"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;margin-top:3px;"]),xe=Object(f.default)(function(e){return a.a.createElement(b.a,e)}).withConfig({displayName:"ModulePolicy__Title",componentId:"sc-1xkx6al-5"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;margin-top:3px;"]),we=Object(f.default)(function(e){return a.a.createElement(b.a,me({size:"xlarge"},e))}).withConfig({displayName:"ModulePolicy__TitleSelect",componentId:"sc-1xkx6al-6"})(["font-family:'wwfregular';text-transform:uppercase;line-height:1;margin-top:10px;"]),Oe=Object(f.default)(function(e){return a.a.createElement(p.a,me({},e,{align:"center",margin:{top:"large"}}))}).withConfig({displayName:"ModulePolicy__TitleSelectWrapper",componentId:"sc-1xkx6al-7"})([""]),je=Object(f.default)(function(e){return a.a.createElement(p.a,e)}).withConfig({displayName:"ModulePolicy__TopicCardWrap",componentId:"sc-1xkx6al-8"})(["width:100%;"]),Ce=Object(f.default)(function(e){return a.a.createElement(p.a,me({},e,{background:"white"}))}).withConfig({displayName:"ModulePolicy__AggregateCardWrap",componentId:"sc-1xkx6al-9"})(["box-shadow:4px 4px 4px ",";"],function(e){return e.theme.global.colors.brandDark}),Se="mpol",_e={layersMemo:null,viewMemo:null},Te={show:!0},Ee=function(e){return!!e.find(function(e){return Object(E.g)(e,y.k)})},Ie=function(e){return e.find(function(e){return Object(E.g)(e,y.k)})},ke=de(w.x,{color:"black"}),Ae=de(w.x,{color:"white",size:"26px"});function Me(e){var t=e.onSetLayers,n=e.uiState,o=e.onMemo,c=e.activeLayers,i=e.firstLanding,u=e.onSetLanding,f=e.intl,m=e.onSetLayerInfo,b=e.onSetItemInfo,w=e.info,S=e.uiURL,_=e.onShow,T=e.onHideLayerInfo,A=e.onShowKey,L=e.config,N=e.moduleLayer,H=e.itemInfo,P=f.locale,z=Object(h.c)(w),F=n?Object.assign({},_e,n):_e,U=F.layersMemo,D=F.viewMemo,$=(S?Object.assign({},_e,S):Te).show;Object(r.useEffect)(function(){U?t(U):y.h.policy.layers&&(i&&0!==c.length||t(y.h.policy.layers)),i&&u()},[]),Object(r.useEffect)(function(){Ee(c)?A(!0):A(!1)},[c]),Object(r.useEffect)(function(){T(),""===w&&$&&_(!0,S)}),Object(r.useEffect)(function(){if(""===w&&D&&m(D),Ee(c)){var e=Ie(c);se(Object(h.a)(w),1)[0]!==e&&m(e)}},[w,c]),Object(r.useEffect)(function(){var e={};Object(E.g)(z,y.h.policy.featuredLayer)&&(e=Object.assign({},{viewMemo:w})),o(e,n)},[c,w]);var B=Ee(c),R=a.a.useRef(null),W=L&&L.find(function(e){return e.id===y.k}),J=N&&N.data.tables&&N.data.tables.topics&&N.data.tables.topics.data&&N.data.tables.topics.data.data&&N.data.tables.topics.data.data.filter(function(e){return!Object(I.w)(e)}),K=J&&J.filter(function(e){return!Object(I.u)(e)&&!Object(I.v)(e)}),q=J&&J.filter(function(e){return!Object(I.u)(e)&&Object(I.v)(e)}),V=J&&J.find(function(e){return Object(I.u)(e)});if(V){var G=V.aggregate.split(",").map(function(e){return e.trim()});K=K.filter(function(e){return G.indexOf(e.id)>-1})}var Q=a.a.useContext(g.a);return de("div",{},void 0,de(l.Helmet,{},void 0,de("title",{},void 0,"".concat(f.formatMessage(k.a.module_policy_metaTitle)))),a.a.createElement(v.a,{ref:R},!B&&W&&R&&de(x.a,{content:de(C.a,{header:de(p.a,{},void 0,de(p.a,{align:"center"},void 0,ke,de(ve,{},void 0,W["title-short"][P]||W["title-short"][s.DEFAULT_LOCALE])),de(p.a,{align:"center",margin:{vertical:"small"}},void 0,de(xe,{size:"small"===Q?"xxlarge":"xxxlarge"},void 0,W.title[P]||W.title[s.DEFAULT_LOCALE]))),config:W,inject:[{tag:"[SELECT-TOPICS-CURRENT]",el:V||K?de(p.a,{},void 0,de(we,{},void 0,a.a.createElement(d.FormattedMessage,M.selectCurrentTopics)),de(be,{},void 0,V&&de(Ce,{},void 0,de(le,{topic:V,onTopicSelect:function(e){return t([].concat(ue(c),["".concat(y.k,"_").concat(e)]))}},V.id)),K&&de(Oe,{},void 0,de(we,{size:"large"},void 0,a.a.createElement(d.FormattedMessage,M.selectTopics))),K&&de(je,{direction:"small"===Q?"column":"row",margin:{top:"small"},wrap:!0},void 0,K.map(function(e){return de(X,{count:K.length,topic:e,invertColor:!0,onTopicSelect:function(e){return t([].concat(ue(c),["".concat(y.k,"_").concat(e)]))}},e.id)})))):null},{tag:"[SELECT-TOPICS-ARCHIVE]",el:de(ge,{margin:{top:"medium",bottom:"small"}},void 0,de(we,{},void 0,a.a.createElement(d.FormattedMessage,M.selectArchivedTopics)),de(p.a,{direction:"row",margin:{top:"medium"}},void 0,q&&q.map(function(e){return de(X,{secondary:!0,count:q.length,topic:e,onTopicSelect:function(e){return t([].concat(ue(c),["".concat(y.k,"_").concat(e)]))}},e.id)})))}]})}),B&&de(he,{},void 0,de(ye,{onClick:function(){_(!0,S)},icon:Ae,label:a.a.createElement(d.FormattedMessage,M.showLayerPanel)})),B&&w&&$&&de(O.a,{isModule:!0,view:w,onClose:function(){return _(!1,S)},onHome:function(){return t(y.h.policy.layers)},onSetTopic:function(e){t([y.h.policy.layers,"".concat(y.k,"_").concat(e)])},currentModule:y.h.policy}),B&&H&&de(j.a,{isModule:!0,item:H,onClose:function(){return b()},onSetTopic:function(e){var n=e.layerIdX,o=e.topicId,r=e.itemId,a=e.type;b("".concat(n,"_").concat(o,"|").concat(a,"-").concat(r)),t([y.h.policy.layers,"".concat(y.k,"_").concat(o)])},currentModule:y.h.policy})))}var Le=Object(i.b)({uiState:function(e){return Object(S.C)(e,{key:Se})},activeLayers:function(e){return Object(S.a)(e)},firstLanding:function(e){return Object(S.k)(e)},info:function(e){return Object(S.m)(e)},itemInfo:function(e){return Object(S.o)(e)},uiURL:function(e){return Object(S.D)(e,{key:Se})},config:function(e){return Object(_.c)(e)},moduleLayer:function(e){return Object(_.b)(e,y.h.policy.featuredLayer)}});var Ne=Object(c.connect)(Le,function(e){return{onShowKey:function(t){return e(Object(T.u)(t))},onSetLanding:function(){return e(Object(T.o)())},onSetLayers:function(t){return e(Object(T.r)(t))},onSetLayerInfo:function(t){e(Object(T.q)({layerId:t}))},onSetItemInfo:function(t){e(Object(T.n)(t))},onShow:function(t,n){return e(Object(T.x)(Se,Object.assign({},Te,n,{show:t})))},onHideLayerInfo:function(){return e(Object(T.y)(!1))},onMemo:function(t,n){e(Object(T.w)(Se,Object.assign({},_e,n,t)))}}});t.default=Object(u.compose)(Ne)(Object(d.injectIntl)(Me))}}]);