"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[8778],{70804:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(71002),a=n(89611),i=n(60136);function o(){o=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,i){var o=new RegExp(e,r);return t.set(o,i||t.get(e)),(0,a.Z)(o,n.prototype)}function u(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return(0,i.Z)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=u(n,this)),n},n.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var i=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof a){var o=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=(0,r.Z)(e[e.length-1])&&(e=[].slice.call(e)).push(u(e,o)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},o.apply(this,arguments)}},60818:function(e,t,n){n.d(t,{lG:function(){return E},q9:function(){return y},my:function(){return N},O3:function(){return P}});var r=n(29439),a=n(37762),i=n(87757),o=n(77284),u=n(71023),s=n(52300),c=n(42569),l=i.mark(v),p=i.mark(m),f=i.mark(g),d={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function y(e){return d[e]}function v(e){var t,n,r;return i.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:i.t0=e.type,i.next="Feature"===i.t0?3:"FeatureCollection"===i.t0?6:25;break;case 3:return i.next=5,e;case 5:return i.abrupt("break",25);case 6:t=(0,a.Z)(e.features),i.prev=7,t.s();case 9:if((n=t.n()).done){i.next=17;break}if(r=n.value,i.t1=r,!i.t1){i.next=15;break}return i.next=15,r;case 15:i.next=9;break;case 17:i.next=22;break;case 19:i.prev=19,i.t2=i.catch(7),t.e(i.t2);case 22:return i.prev=22,t.f(),i.finish(22);case 25:case"end":return i.stop()}}),l,null,[[7,19,22,25]])}function m(e){var t,n,r,o,u,s,c,l,f;return i.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(e){i.next=2;break}return i.abrupt("return",null);case 2:i.t0=e.type,i.next="Point"===i.t0?5:"LineString"===i.t0||"MultiPoint"===i.t0?8:"MultiLineString"===i.t0||"Polygon"===i.t0?10:"MultiPolygon"===i.t0?27:58;break;case 5:return i.next=7,e.coordinates;case 7:return i.abrupt("break",58);case 8:return i.delegateYield(e.coordinates,"t1",9);case 9:return i.abrupt("break",58);case 10:t=(0,a.Z)(e.coordinates),i.prev=11,t.s();case 13:if((n=t.n()).done){i.next=18;break}return r=n.value,i.delegateYield(r,"t2",16);case 16:i.next=13;break;case 18:i.next=23;break;case 20:i.prev=20,i.t3=i.catch(11),t.e(i.t3);case 23:return i.prev=23,t.f(),i.finish(23);case 26:return i.abrupt("break",58);case 27:o=(0,a.Z)(e.coordinates),i.prev=28,o.s();case 30:if((u=o.n()).done){i.next=50;break}s=u.value,c=(0,a.Z)(s),i.prev=33,c.s();case 35:if((l=c.n()).done){i.next=40;break}return f=l.value,i.delegateYield(f,"t4",38);case 38:i.next=35;break;case 40:i.next=45;break;case 42:i.prev=42,i.t5=i.catch(33),c.e(i.t5);case 45:return i.prev=45,c.f(),i.finish(45);case 48:i.next=30;break;case 50:i.next=55;break;case 52:i.prev=52,i.t6=i.catch(28),o.e(i.t6);case 55:return i.prev=55,o.f(),i.finish(55);case 58:case"end":return i.stop()}}),p,null,[[11,20,23,26],[28,52,55,58],[33,42,45,48]])}function g(e){var t,n,r,o,c,l,p,d,v,m,g,h,b,w=arguments;return i.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=w.length>1&&void 0!==w[1]?w[1]:{},n=t.geometryType,r=t.objectIdField,o=(0,a.Z)(e),i.prev=3,o.s();case 5:if((c=o.n()).done){i.next=18;break}if(p=c.value,d=p.geometry,v=p.properties,m=p.id,!d||y(d.type)===n){i.next=10;break}return i.abrupt("continue",16);case 10:return h=null!==(l=(g=v||{})[r])&&void 0!==l?l:null,r&&null!=m&&!g[r]&&(g[r]=h=m),b=new u.u_(d?x(new s.Z,d,t):null,g,null,h),i.next=16,b;case 16:i.next=5;break;case 18:i.next=23;break;case 20:i.prev=20,i.t0=i.catch(3),o.e(i.t0);case 23:return i.prev=23,o.f(),i.finish(23);case 26:case"end":return i.stop()}}),f,null,[[3,20,23,26]])}function h(e){var t,n=(0,a.Z)(e);try{for(n.s();!(t=n.n()).done;){if(t.value.length>2)return!0}}catch(r){n.e(r)}finally{n.f()}return!1}function b(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],a=e[(n+1)%e.length];t+=r[0]*a[1]-a[0]*r[1]}return t<=0}function w(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function x(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return S(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,i=(0,a.Z)(t.coordinates);try{for(i.s();!(r=i.n()).done;){S(e,r.value,n)}}catch(o){i.e(o)}finally{i.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,i=(0,a.Z)(t.coordinates);try{for(i.s();!(r=i.n()).done;){var o=r.value;k(e,o[0],n);for(var u=1;u<o.length;u++)Z(e,o[u],n)}}catch(s){i.e(s)}finally{i.f()}return e}(e,t,n);case"Point":return function(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;k(e,r[0],n);for(var a=1;a<r.length;a++)Z(e,r[a],n);return e}(e,t,n)}}function k(e,t,n){var r=w(t);!function(e){return!b(e)}(r)?S(e,r,n):T(e,r,n)}function Z(e,t,n){var r=w(t);!function(e){return b(e)}(r)?S(e,r,n):T(e,r,n)}function S(e,t,n){var r,i=(0,a.Z)(t);try{for(i.s();!(r=i.n()).done;){F(e,r.value,n)}}catch(o){i.e(o)}finally{i.f()}e.lengths.push(t.length)}function T(e,t,n){for(var r=t.length-1;r>=0;r--)F(e,t[r],n);e.lengths.push(t.length)}function F(e,t,n){var a=(0,r.Z)(t,3),i=a[0],o=a[1],u=a[2];e.coords.push(i,o),n.hasZ&&e.coords.push(u||0)}function C(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function P(e){if(!e)throw new o.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!r.test(n))throw new o.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function N(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=[],o=new Set,u=new Set,s=!1,l=null,p=!1,f=r.geometryType,d=void 0===f?null:f,g=!1,b=(0,a.Z)(v(e));try{var w=function(){var e=n.value,r=e.geometry,a=e.properties,c=e.id;if((!r||(d||(d=y(r.type)),y(r.type)===d))&&(s||(s=h(m(r))),p||(p=null!=c)&&(t=typeof c,l=Object.keys(a).filter((function(e){return a[e]===c}))),p&&null!=c&&(l.length>1?l=l.filter((function(e){return a[e]===c})):1===l.length&&(l=a[l[0]]===c?l:[])),!g&&a)){var f=!0;for(var v in a)if(!o.has(v)){var b=a[v];if(null!=b){var w=C(b);"unknown"!==w?(u.delete(v),o.add(v),i.push({name:v,alias:v,type:w})):u.add(v)}else f=!1,u.add(v)}g=f}};for(b.s();!(n=b.n()).done;)w()}catch(T){b.e(T)}finally{b.f()}var x=l&&1===l.length&&l[0]||null;if(x){var k,Z=(0,a.Z)(i);try{for(Z.s();!(k=Z.n()).done;){var S=k.value;if(S.name===x&&(0,c.H7)(S)){S.type="esriFieldTypeOID";break}}}catch(T){Z.e(T)}finally{Z.f()}}return{fields:i,geometryType:d,hasZ:s,objectIdFieldName:x,objectIdFieldType:t,unknownFields:Array.from(u)}}function E(e,t){return Array.from(g(v(e),t))}},78778:function(e,t,n){n.d(t,{M8:function(){return P},ft:function(){return H},FU:function(){return O},Bm:function(){return re},be:function(){return Y},eB:function(){return J}});var r=n(1413),a=n(29439),i=n(37762),o=n(93433),u=n(70804),s=n(15861),c=n(87757),l=(n(32224),n(86755)),p=n(77284),f=n(82142),d=n(77822),y=n(71453),v=n(68868),m=n(68593),g=n(94613),h=n(2908),b=n(60818);function w(e){var t;return null!==(t=function(e){var t,n,r,a,i=x.exec(e);if(!i)return null;var o=i.groups,u=+o.year,s=+o.month-1,c=+o.day,l=+(null!==(t=o.hours)&&void 0!==t?t:"0"),p=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),f=+(null!==(r=o.seconds)&&void 0!==r?r:"0");if(l>23)return null;if(p>59)return null;if(f>59)return null;var d,y=null!==(a=o.ms)&&void 0!==a?a:"0",v=y?+y.padEnd(3,"0").substring(0,3):0;if(o.isUTC)d=Date.UTC(u,s,c,l,p,f,v);else if(o.offsetSign){var m=+o.offsetHours,g=+o.offsetMinutes;d=6e4*("+"===o.offsetSign?-1:1)*(60*m+g)+Date.UTC(u,s,c,l,p,f,v)}else d=new Date(u,s,c,l,p,f,v).getTime();return Number.isNaN(d)?null:d}(e))&&void 0!==t?t:function(e){var t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}var x=(0,u.Z)(/^(?:(\x2D?\d{4,})\x2D(\d{2})\x2D(\d{2}))(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?)?(?:(Z)|(?:(\+|\x2D)(\d{2}):(\d{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11}),k=n(78174),Z=n(2892),S=n(26208),T=n(13179),F="xlink:href",C="2.0.0",P="__esri_wfs_id__",N="wfs-layer:getWFSLayerTypeInfo-error",E="wfs-layer:empty-service",G="wfs-layer:feature-type-not-found",R="wfs-layer:malformed-json",D="wfs-layer:unknown-geometry-type",A="wfs-layer:unknown-field-type",M="wfs-layer:unsupported-spatial-reference",j="wfs-layer:unsupported-wfs-version";function O(e,t){return U.apply(this,arguments)}function U(){return U=(0,s.Z)(c.mark((function e(t,n){var a;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=L,e.next=3,(0,l.default)(t,{responseType:"text",query:(0,r.Z)({SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:C},null===n||void 0===n?void 0:n.customParameters),signal:null===n||void 0===n?void 0:n.signal});case 3:return e.t1=e.sent.data,a=(0,e.t0)(e.t1),e.abrupt("return",(V(t,a),a));case 6:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function L(e){var t=oe(e);(function(e){var t=e.firstElementChild.getAttribute("version");if(t&&t!==C)throw new p.Z(j,"Unsupported WFS version ".concat(t,". Supported version: ").concat(C))})(t),se(t);var n=t.firstElementChild,r=(0,f.Fs)(function(e){return(0,k.H)(e,{FeatureTypeList:{FeatureType:function(e){var t,n={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},r=new Set([4326]),s=function(e){var t,n,a=parseInt(null===(t=e.textContent.match((0,u.Z)(/(\d+$)/i,{wkid:1})))||void 0===t||null===(n=t.groups)||void 0===n?void 0:n.wkid,10);Number.isNaN(a)||r.add(a)};return(0,k.h)(e,{Name:function(e){var t=ue(e.textContent),r=t.name,a=t.prefix;n.typeName="".concat(a,":").concat(r),n.name=r,n.namespacePrefix=a,n.namespaceUri=e.lookupNamespaceURI(a)},Abstract:function(e){n.description=e.textContent},Title:function(e){n.title=e.textContent},WGS84BoundingBox:function(e){n.extent=function(e){var t,n,r,o,u,s=(0,i.Z)(e.children);try{for(s.s();!(u=s.n()).done;){var c=u.value;switch(c.localName){case"LowerCorner":var l=c.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),p=(0,a.Z)(l,2);t=p[0],n=p[1];break;case"UpperCorner":var f=c.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),d=(0,a.Z)(f,2);r=d[0],o=d[1]}}}catch(y){s.e(y)}finally{s.f()}return{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:g.Zn}}(e)},DefaultSRS:s,DefaultCRS:s,OtherSRS:s,OtherCRS:s}),n.title||(n.title=n.name),(t=n.supportedSpatialReferences).push.apply(t,(0,o.Z)(r)),n}}})}(n));return{operations:W(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}var I=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function W(e){var t=!1,n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,k.h)(e,{OperationsMetadata:{Operation:function(e){switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:function(e){n.GetCapabilities.url=e.getAttribute(F)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:function(e){n.DescribeFeatureType.url=e.getAttribute(F)}}}};case"GetFeature":return{DCP:{HTTP:{Get:function(e){n.GetFeature.url=e.getAttribute(F)}}},Parameter:function(e){if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:function(e){var t=e.textContent;I.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:function(e){switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:function(e){t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:function(e){n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new p.Z("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if((0,d.Wi)(n.GetFeature.outputFormat))throw new p.Z("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return n}function V(e,t){(0,v.$U)(e)&&((0,v.D6)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,v.hO)(t.operations.DescribeFeatureType.url)),(0,v.D6)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,v.hO)(t.operations.GetFeature.url)))}function H(e,t,n){return(0,f.sE)(e,(function(e){return n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t}))}function Y(e,t,n){return X.apply(this,arguments)}function X(){return X=(0,s.Z)(c.mark((function e(t,n,r){var a,i,o,u,s,l,p,f,d,y,v,m=arguments;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=m.length>3&&void 0!==m[3]?m[3]:{},e.next=3,$(t,n,r,i);case 3:return o=e.sent,u=o.featureType,s=o.extent,e.next=8,q(t,u.typeName,i);case 8:return l=e.sent,p=l.fields,f=l.geometryType,d=l.swapXY,y=l.objectIdField,v=l.geometryField,e.abrupt("return",{url:t.operations.GetCapabilities.url,name:u.name,namespaceUri:u.namespaceUri,fields:p,geometryField:v,geometryType:f,objectIdField:y,spatialReference:null!==(a=i.spatialReference)&&void 0!==a?a:S.Z.WGS84,extent:s,swapXY:d,wfsCapabilities:t,customParameters:i.customParameters});case 15:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}function $(e,t,n){return _.apply(this,arguments)}function _(){return _=(0,s.Z)(c.mark((function e(t,n,a){var i,o,u,s,l,f,y=arguments;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=y.length>3&&void 0!==y[3]?y[3]:{},o=i.spatialReference,u=void 0===o?S.Z.WGS84:o,s=t.readFeatureTypes(),l=n?H(s,n,a):s.next().value,!(0,d.Wi)(l)){e.next=4;break}throw n?new p.Z(G,"The type '".concat(n,"' could not be found in the service")):new p.Z(E,"The service is empty");case 4:if(f=new T.Z((0,r.Z)((0,r.Z)({},l.extent),{},{spatialReference:u})),(0,g.fS)(u,g.Zn)){e.next=15;break}return e.prev=6,e.next=9,(0,m.iQ)(g.Zn,u,void 0,i);case 9:f=(0,m.iV)(f,g.Zn),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),new p.Z(M,"Projection not supported");case 15:return e.abrupt("return",{extent:f,spatialReference:u,featureType:l});case 16:case"end":return e.stop()}}),e,null,[[6,12]])}))),_.apply(this,arguments)}function q(e,t){return z.apply(this,arguments)}function z(){return z=(0,s.Z)(c.mark((function e(t,n){var i,o,u,s,l,f,v,m,g,h,b=arguments;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=b.length>2&&void 0!==b[2]?b[2]:{},e.next=3,(0,y.as)([K(t.operations.DescribeFeatureType.url,n,i),B(t,n,i)]);case 3:if(o=e.sent,u=(0,a.Z)(o,2),s=u[0],l=u[1],!s.error&&!l.error){e.next=9;break}throw new p.Z(N,"An error occurred while getting info about the feature type '".concat(n,"'"),{error:s.error||l.error});case 9:if(f=s.value,v=f.fields,m=f.errors,g=s.value.geometryType||l.value.geometryType,h=l.value.swapXY,!(0,d.Wi)(g)){e.next=12;break}throw new p.Z(D,"The geometry type could not be determined for type '".concat(n),{typeName:n,geometryType:g,fields:v,errors:m});case 12:return e.abrupt("return",(0,r.Z)((0,r.Z)({},J(v)),{},{geometryType:g,swapXY:h}));case 13:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}function J(e){var t,n=e.find((function(e){return"geometry"===e.type})),r=e.find((function(e){return"oid"===e.type}));return e=e.filter((function(e){return"geometry"!==e.type})),r||(r=new Z.Z({name:P,type:"oid",alias:P}),e.unshift(r)),{geometryField:null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:null,objectIdField:r.name,fields:e}}function B(e,t){return Q.apply(this,arguments)}function Q(){return Q=(0,s.Z)(c.mark((function e(t,n){var i,o,u,s,p,f,d,y,v,m,g,w,x,k,Z=arguments;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Z.length>2&&void 0!==Z[2]?Z[2]:{},s=!1,e.next=4,Promise.all([re(t.operations.GetFeature.url,n,t.operations.GetFeature.outputFormat,(0,r.Z)((0,r.Z)({},o),{},{count:1})),(0,l.default)(t.operations.GetFeature.url,{responseType:"text",query:ie(n,void 0,(0,r.Z)((0,r.Z)({},o),{},{count:1})),signal:null===o||void 0===o?void 0:o.signal})]);case 4:if(p=e.sent,f=(0,a.Z)(p,2),d=f[0],y=f[1],!(v="FeatureCollection"===d.type&&(null===(i=d.features[0])||void 0===i?void 0:i.geometry))){e.next=22;break}e.t0=(u=h.Mk.fromJSON((0,b.q9)(v.type)),v.type),e.next="Point"===e.t0?13:"LineString"===e.t0||"MultiPoint"===e.t0?15:"MultiLineString"===e.t0||"Polygon"===e.t0?17:"MultiPolygon"===e.t0?19:20;break;case 13:return m=v.coordinates,e.abrupt("break",20);case 15:return m=v.coordinates[0],e.abrupt("break",20);case 17:return m=v.coordinates[0][0],e.abrupt("break",20);case 19:m=v.coordinates[0][0][0];case 20:(g=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(y.data))&&(w=m[0].toFixed(3),x=m[1].toFixed(3),k=parseFloat(g[1]).toFixed(3),w===parseFloat(g[2]).toFixed(3)&&x===k&&(s=!0));case 22:return e.abrupt("return",{geometryType:u,swapXY:s});case 23:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function K(e,t,n){return ee.apply(this,arguments)}function ee(){return ee=(0,s.Z)(c.mark((function e(t,n,a){return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=te,e.t1=n,e.next=4,(0,l.default)(t,{responseType:"text",query:(0,r.Z)({SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:C,TYPENAME:n},null===a||void 0===a?void 0:a.customParameters),signal:null===a||void 0===a?void 0:a.signal});case 4:return e.t2=e.sent.data,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 6:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}function te(e,t){var n=ue(e).name,r=oe(t);se(r);var a=(0,f.sE)((0,k.H)(r.firstElementChild,{element:function(e){return{name:e.getAttribute("name"),typeName:ue(e.getAttribute("type")).name}}}),(function(e){return e.name===n}));if((0,d.pC)(a)){var o=(0,f.sE)((0,k.H)(r.firstElementChild,{complexType:function(e){return e}}),(function(e){return e.getAttribute("name")===a.typeName}));if((0,d.pC)(o))return function(e){var t,n,r,a,o=[],u=[],s=(0,k.H)(e,{complexContent:{extension:{sequence:{element:function(e){return e}}}}}),c=(0,i.Z)(s);try{for(c.s();!(a=c.n()).done;){var l=a.value,f=l.getAttribute("name");if(f){var d=void 0,y=void 0;if(l.hasAttribute("type")?d=ue(l.getAttribute("type")).name:(0,k.h)(l,{simpleType:{restriction:function(e){return d=ue(e.getAttribute("base")).name,{maxLength:function(e){y=+e.getAttribute("value")}}}}}),d){var v="true"===l.getAttribute("nillable"),m=!1;switch(d.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":u.push(new Z.Z({name:f,alias:f,type:"integer",nullable:v}));break;case"float":case"double":case"decimal":u.push(new Z.Z({name:f,alias:f,type:"double",nullable:v}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":u.push(new Z.Z({name:f,alias:f,type:"string",nullable:v,length:null!==(t=y)&&void 0!==t?t:255}));break;case"datetime":case"date":u.push(new Z.Z({name:f,alias:f,type:"date",nullable:v,length:null!==(n=y)&&void 0!==n?n:36}));break;case"pointpropertytype":r="point",m=!0;break;case"multipointpropertytype":r="multipoint",m=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",m=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",m=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":m=!0,o.push(new p.Z(D,"geometry type '".concat(d,"' is not supported"),{type:(new XMLSerializer).serializeToString(e)}));break;default:o.push(new p.Z(A,"Unknown field type '".concat(d,"'"),{type:(new XMLSerializer).serializeToString(e)}))}m&&u.push(new Z.Z({name:f,alias:f,type:"geometry",nullable:v}))}}}}catch(w){c.e(w)}finally{c.f()}for(var g=0,h=u;g<h.length;g++){var b=h[g];if("integer"===b.type&&!b.nullable&&ne.has(b.name.toLowerCase())){b.type="oid";break}}return{geometryType:r,fields:u,errors:o}}(o)}throw new p.Z(G,"Type '".concat(e,"' not found in document"),{document:(new XMLSerializer).serializeToString(r)})}var ne=new Set(["objectid","fid"]);function re(e,t,n,r){return ae.apply(this,arguments)}function ae(){return ae=(0,s.Z)(c.mark((function e(t,n,r,a){var i,o,u,s;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.default)(t,{responseType:"text",query:ie(n,r,a),signal:null===a||void 0===a?void 0:a.signal});case 2:if(i=e.sent,o=(o=i.data).replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3'),e.prev=5,null===a||void 0===a||null===(u=a.dateFields)||void 0===u||!u.length){e.next=9;break}return s=new Set(a.dateFields),e.abrupt("return",JSON.parse(o,(function(e,t){return s.has(e)?w(t):t})));case 9:return e.abrupt("return",JSON.parse(o));case 12:throw e.prev=12,e.t0=e.catch(5),new p.Z(R,"Error while parsing the\xa0response",{response:o,error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[5,12]])}))),ae.apply(this,arguments)}function ie(e,t,n){return(0,r.Z)({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:C,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null===n||void 0===n?void 0:n.startIndex,COUNT:null===n||void 0===n?void 0:n.count},null===n||void 0===n?void 0:n.customParameters)}function oe(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function ue(e){var t=e.split(":"),n=(0,a.Z)(t,2),r=n[0],i=n[1];return{prefix:i?r:"",name:null!==i&&void 0!==i?i:r}}function se(e){var t,n;if((0,k.h)(e.firstElementChild,{Exception:function(e){return t=e.getAttribute("exceptionCode"),{ExceptionText:function(e){n=e.textContent}}}}),t)throw new p.Z("wfs-layer:".concat(t),n)}},78174:function(e,t,n){n.d(t,{H:function(){return u},h:function(){return o}});var r=n(37762),a=n(87757),i=a.mark(u);function o(e,t){var n,a=(0,r.Z)(e.children);try{for(a.s();!(n=a.n()).done;){var i=n.value;if(i.localName in t){var u=t[i.localName];if("function"==typeof u){var s=u(i);s&&o(i,s)}else o(i,u)}}}catch(c){a.e(c)}finally{a.f()}}function u(e,t){var n,o,s,c;return a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=(0,r.Z)(e.children),a.prev=1,n.s();case 3:if((o=n.n()).done){a.next=15;break}if(!((s=o.value).localName in t)){a.next=13;break}if("function"!=typeof(c=t[s.localName])){a.next=12;break}return a.next=10,c(s);case 10:a.next=13;break;case 12:return a.delegateYield(u(s,c),"t0",13);case 13:a.next=3;break;case 15:a.next=20;break;case 17:a.prev=17,a.t1=a.catch(1),n.e(a.t1);case 20:return a.prev=20,n.f(),a.finish(20);case 23:case"end":return a.stop()}}),i,null,[[1,17,20,23]])}}}]);