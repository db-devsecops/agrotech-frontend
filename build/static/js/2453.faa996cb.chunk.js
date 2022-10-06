"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[2453],{95610:function(e,r,t){t.d(r,{h:function(){return u},Y:function(){return i}});var n=t(68868),a=t(43459);function u(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||a.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,n.mN)(e.itemUrl):null,portal:e.portal||a.Z.getDefault(),portalItem:e}}},82453:function(e,r,t){t.r(r),t.d(r,{getFirstLayerOrTableId:function(){return k},getNumLayersAndTables:function(){return L},load:function(){return p},preprocessFSItemData:function(){return g}});var n=t(15861),a=t(87757),u=t(77284),i=t(73909),o=t(43459),l=t(95610),s=t(18185),c=t(12148);function p(e,r){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a.mark((function e(r,t){var n;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=r.instance.portalItem)||!n.id){e.next=6;break}return e.next=4,n.load(t);case 4:return d(r),e.abrupt("return",v(r,t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){var r=e.instance.portalItem;if(!e.supportedTypes.includes(r.type))throw new u.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function v(e,r){return y.apply(this,arguments)}function y(){return y=(0,n.Z)(a.mark((function e(r,t){var n,u,i,o,c,p;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.instance,u=n.portalItem,i=u.url,o=u.title,c=(0,l.h)(u),"group"!==n.type){e.next=3;break}return e.abrupt("return",(n.read({title:o},c),h(n,r)));case 3:return i&&n.read({url:i},c),e.next=6,I(r,t);case 6:return p=e.sent,e.abrupt("return",(p&&n.read(p,c),n.resourceReferences={portalItem:u,paths:c.readResourcePaths},n.read({title:o},c),(0,s.y)(n,c)));case 8:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function h(e,r){var t,o,l=e.portalItem.type;switch(l){case"Feature Service":case"Feature Collection":t=i.T.FeatureLayer;break;case"Stream Service":t=i.T.StreamLayer;break;case"Scene Service":t=i.T.SceneLayer;break;default:throw new u.Z("portal:unsupported-item-type-as-group","The item type '".concat(l,"' is not supported as a 'IGroupLayer'"))}return t().then((function(e){return o=e,I(r)})).then(function(){var r=(0,n.Z)(a.mark((function r(t){return a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==l){r.next=7;break}return r.next=3,g(t,e.portalItem.url);case 3:t=r.sent,r.t0=b(e,o,t),r.next=8;break;case 7:r.t0=L(t)>0?b(e,o,t):m(e,o);case 8:return r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function m(e,r){return e.portalItem.url?(0,c.b)(e.portalItem.url).then((function(t){var n,a;function u(e){return{id:e.id,name:e.name}}t&&b(e,r,{layers:null===(n=t.layers)||void 0===n?void 0:n.map(u),tables:null===(a=t.tables)||void 0===a?void 0:a.map(u)})})):Promise.resolve()}function b(e,r,t){var n=t.layers||[],a=t.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((function(e){var r;"Table"===(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)&&a.push(e)})),n=n.filter((function(e){var r;return"Table"!==(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)}))),n.reverse().forEach((function(n){var a=w(e,r,t,n);e.add(a)})),a.reverse().forEach((function(n){var a=w(e,r,t,n);e.tables.add(a)}))}function w(e,r,t,n){var a=new r({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var u={origin:"portal-item",portal:e.portalItem.portal||o.Z.getDefault()};a.read(n,u);var i=t.showLegend;null!=i&&a.read({showLegend:i},u)}return a}function I(e,r){if(!1===e.supportsData)return Promise.resolve(void 0);var t=e.instance;return t.portalItem.fetchData("json",r).catch((function(){return null})).then(function(){var e=(0,n.Z)(a.mark((function e(r){var n,u;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Z(t)){e.next=3;break}return u=!0,e.abrupt("return",(r&&L(r)>0&&(null==t.layerId&&(t.layerId=k(r)),(n=T(r,t.layerId))&&(1===L(r)&&(u=!1),null!=r.showLegend&&(n.showLegend=r.showLegend))),u&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),n));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}function g(e,r){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(a.mark((function e(r,t){var n,u,i;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null===(n=r)||void 0===n?void 0:n.layers)&&null!=(null===(u=r)||void 0===u?void 0:u.tables)){e.next=5;break}return e.next=3,(0,c.b)(t);case 3:i=e.sent,(r=r||{}).layers=r.layers||(null===i||void 0===i?void 0:i.layers),r.tables=r.tables||(null===i||void 0===i?void 0:i.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function T(e,r){var t=e.layers;if(t)for(var n=0;n<t.length;n++)if(t[n].id===r)return t[n];var a=e.tables;if(a)for(var u=0;u<a.length;u++)if(a[u].id===r)return a[u];return null}function L(e){var r,t,n,a;return(null!==(r=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==r?r:0)+(null!==(n=null===e||void 0===e||null===(a=e.tables)||void 0===a?void 0:a.length)&&void 0!==n?n:0)}function Z(e){return"stream"!==e.type&&"layerId"in e}},12148:function(e,r,t){t.d(r,{b:function(){return i}});var n=t(15861),a=t(87757),u=t(86755);function i(e){return o.apply(this,arguments)}function o(){return o=(0,n.Z)(a.mark((function e(r){var t,n;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.default)(r,{responseType:"json",query:{f:"json"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}}}]);