"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[7100],{97100:function(e,r,t){t.r(r),t.d(r,{fetchFeatureService:function(){return O},fromUrl:function(){return y}});var n=t(1413),a=t(15861),u=t(87757),s=t(86755),l=t(77284),o=t(77822),i=t(68868),c=t(86043),p=t(73909);function y(e){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(u.mark((function e(r){var a,s,l,o,i;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=null===(a=r.properties)||void 0===a?void 0:a.customParameters,e.next=3,b(r.url,s);case 3:if(l=e.sent,o=(0,n.Z)((0,n.Z)({},r.properties),{},{url:r.url}),l.sublayerIds){e.next=7;break}return e.abrupt("return",(null!=l.layerOrTableId&&(o.layerId=l.layerOrTableId,o.sourceJSON=l.sourceJSON),new l.Constructor(o)));case 7:return e.next=10,t.e(4155).then(t.bind(t,4155));case 10:return e.t0=e.sent.default,e.t1={title:l.parsedUrl.title},i=new e.t0(e.t1),e.abrupt("return",(v(i,l,o),i));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,r){return e?e.find((function(e){return e.id===r})):null}function v(e,r,t){function a(e,a){var u=(0,n.Z)((0,n.Z)({},t),{},{layerId:e,sublayerTitleMode:"service-name"});return(0,o.pC)(a)&&(u.sourceJSON=a),new r.Constructor(u)}r.sublayerIds.forEach((function(t){var n=a(t,f(r.sublayerInfos,t));e.add(n)})),r.tableIds.forEach((function(t){var n=a(t,f(r.tableInfos,t));e.tables.add(n)}))}function b(e,r){return h.apply(this,arguments)}function h(){return h=(0,a.Z)(u.mark((function e(r,t){var n,a,s,i,p,y,d,f,v,b,h,I,S;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,c.Qc)(r),e.t0=(0,o.Wi)(n),!e.t0){e.next=6;break}return e.next=5,m(r,t);case 5:n=e.sent;case 6:if(!(0,o.Wi)(n)){e.next=8;break}throw new l.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});case 8:s=(a=n).serverType,i=a.sublayer,y={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},e.t1=s,e.next="MapServer"===e.t1?13:"ImageServer"===e.t1?15:"SceneServer"===e.t1?17:19;break;case 13:return p=null!=i?"FeatureLayer":g(r,t).then((function(e){return e?"TileLayer":"MapImageLayer"})),e.abrupt("break",20);case 15:return p=Z(r,{customParameters:t}).then((function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==(null===r||void 0===r?void 0:r.toUpperCase())||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"})),e.abrupt("break",20);case 17:return p=Z(n.url.path,{customParameters:t}).then((function(e){if(e){if("Voxel"===(null===e||void 0===e?void 0:e.layerType))return"VoxelLayer";if(null!==e&&void 0!==e&&e.layers&&Array.isArray(e.layers)&&e.layers.length>0){var r,t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},n=null===(r=e.layers[0])||void 0===r?void 0:r.layerType;if(null!=t[n])return t[n]}}return"SceneLayer"})),e.abrupt("break",20);case 19:p=y[s];case 20:return d={FeatureLayer:!0,SceneLayer:!0},v={parsedUrl:n,Constructor:null,layerOrTableId:(f="FeatureServer"===s)?i:null,sublayerIds:null,tableIds:null},e.next=25,p;case 25:if(b=e.sent,!d[b]||null!=i){e.next=32;break}return e.next=29,x(r,s,t);case 29:S=e.sent,f&&(v.sublayerInfos=S.layerInfos,v.tableInfos=S.tableInfos),1!==S.layerIds.length+S.tableIds.length?(v.sublayerIds=S.layerIds,v.tableIds=S.tableIds):f&&(v.layerOrTableId=null!==(h=S.layerIds[0])&&void 0!==h?h:S.tableIds[0],v.sourceJSON=null!==(I=S.layerInfos[0])&&void 0!==I?I:S.tableInfos[0]);case 32:return e.next=34,P(b);case 34:return v.Constructor=e.sent,e.abrupt("return",v);case 36:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function m(e,r){return I.apply(this,arguments)}function I(){return I=(0,a.Z)(u.mark((function e(r,t){var n,a,s,l,p,y;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(r,{customParameters:t});case 2:if(a=e.sent,s=null,l=null,"Feature Layer"===(p=a.type)||"Table"===p?(s="FeatureServer",l=a.id):"indexedVector"===p?s="VectorTileServer":a.hasOwnProperty("mapName")?s="MapServer":a.hasOwnProperty("bandCount")&&a.hasOwnProperty("pixelSizeX")?s="ImageServer":a.hasOwnProperty("maxRecordCount")&&a.hasOwnProperty("allowGeometryUpdates")?s="FeatureServer":a.hasOwnProperty("streamUrls")?s="StreamServer":S(a)?(s="SceneServer",l=a.id):a.hasOwnProperty("layers")&&S(null===(n=a.layers)||void 0===n?void 0:n[0])&&(s="SceneServer"),s){e.next=7;break}return e.abrupt("return",null);case 7:return y=null!=l?(0,c.DR)(r):null,e.abrupt("return",{title:(0,o.pC)(y)&&a.name||(0,i.vt)(r),serverType:s,sublayer:l,url:{path:(0,o.pC)(y)?y.serviceUrl:(0,i.mN)(r).path}});case 9:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function S(e){return(null===e||void 0===e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}function x(e,r,t){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)(u.mark((function e(r,t,n){var a,s,l,o,i,c,p;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=!1,"FeatureServer"!==t){e.next=8;break}return e.next=4,O(r,{customParameters:n});case 4:i=e.sent,o=!!i.layersJSON,l=i.layersJSON||i.serviceJSON,e.next=11;break;case 8:return e.next=10,Z(r,{customParameters:n});case 10:l=e.sent;case 11:return c=null===(a=l)||void 0===a?void 0:a.layers,p=null===(s=l)||void 0===s?void 0:s.tables,e.abrupt("return",{layerIds:(null===c||void 0===c?void 0:c.map((function(e){return e.id})).reverse())||[],tableIds:(null===p||void 0===p?void 0:p.map((function(e){return e.id})).reverse())||[],layerInfos:o?c:[],tableInfos:o?p:[]});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return!e.type||"Feature Layer"===e.type}function O(e,r){return L.apply(this,arguments)}function L(){return(L=(0,a.Z)(u.mark((function e(r,t){var n,a,s,l,o;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(r,t);case 2:if((s=(s=e.sent)||{}).layers=(null===(n=s.layers)||void 0===n?void 0:n.filter(k))||[],l={serviceJSON:s},!(s.currentVersion<10.5)){e.next=7;break}return e.abrupt("return",l);case 7:return e.next=9,Z(r+"/layers",t);case 9:return o=e.sent,e.abrupt("return",(l.layersJSON={layers:(null===o||void 0===o||null===(a=o.layers)||void 0===a?void 0:a.filter(k))||[],tables:(null===o||void 0===o?void 0:o.tables)||[]},l));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return T.apply(this,arguments)}function T(){return(T=(0,a.Z)(u.mark((function e(r){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.T[r])());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,r){return C.apply(this,arguments)}function C(){return(C=(0,a.Z)(u.mark((function e(r,t){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(r,{customParameters:t});case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,r){return F.apply(this,arguments)}function F(){return(F=(0,a.Z)(u.mark((function e(r,t){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.default)(r,{responseType:"json",query:(0,n.Z)((0,n.Z)({f:"json"},null===t||void 0===t?void 0:t.customParameters),{},{token:null===t||void 0===t?void 0:t.apiKey})});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);