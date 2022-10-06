"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[8513],{78513:function(e,t,r){r.r(t),r.d(t,{default:function(){return Q}});var n=r(1413),a=r(15861),i=r(97326),o=r(11752),l=r(61120),y=r(37762),u=r(15671),s=r(43144),p=r(60136),c=r(29388),f=r(87757),d=r(98248),m=(r(32224),r(2572)),v=(r(98856),r(48739)),b=r(77284),g=r(37924),h=r(77822),S=r(9182),w=r(47862),C=r(70562),O=r(35569),Z=(r(61340),r(96326)),_=r(48916),N=r(57),k=r(68593),x=r(392),J=r(94613),L=r(29082),T=r(70913),M=r(79143),I=r(83859),R=r(32387),D=r(4405),j=r(5900),E=r(47004),F=r(2892),G=r(42548),P=r(69930),W=r(24053),z=r(17719),B=r(26208),A=r(13179);function X(e){return e.layers.some((function(e){return null!=e.layerDefinition.visibilityField}))}var q=new F.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),U=new F.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0}),V=function(e){(0,p.Z)(r,e);var t=(0,c.Z)(r);function r(e){var n;return(0,u.Z)(this,r),(n=t.call(this,e)).visibilityMode="inherited",n}return(0,s.Z)(r,[{key:"initialize",value:function(){var e,t=this,r=(0,y.Z)(this.graphics);try{for(r.s();!(e=r.n()).done;){e.value.sourceLayer=this.layer}}catch(n){r.e(n)}finally{r.f()}this.graphics.on("after-add",(function(e){e.item.sourceLayer=t.layer})),this.graphics.on("after-remove",(function(e){e.item.sourceLayer=null}))}},{key:"sublayers",get:function(){return this.graphics}}]),r}(T.Z);(0,d._)([(0,O.Cb)({readOnly:!0})],V.prototype,"sublayers",null),(0,d._)([(0,O.Cb)()],V.prototype,"layer",void 0),(0,d._)([(0,O.Cb)()],V.prototype,"layerId",void 0),(0,d._)([(0,O.Cb)({readOnly:!0})],V.prototype,"visibilityMode",void 0),V=(0,d._)([(0,_.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],V);var H=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new G.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new P.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new W.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new W.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new z.Z).toJSON()}],K=function(e){(0,p.Z)(r,e);var t=(0,c.Z)(r);function r(e){var n;return(0,u.Z)(this,r),(n=t.call(this,e)).capabilities={operations:{supportsMapNotesEditing:!0}},n.featureCollections=null,n.featureCollectionJSON=null,n.featureCollectionType="notes",n.legendEnabled=!1,n.minScale=0,n.maxScale=0,n.spatialReference=B.Z.WGS84,n.sublayers=new v.Z(H.map((function(e){return new V({id:e.id,layerId:e.layerId,title:e.title,layer:(0,i.Z)(n)})}))),n.title="Map Notes",n.type="map-notes",n.visibilityMode="inherited",n}return(0,s.Z)(r,[{key:"readCapabilities",value:function(e,t,r){return{operations:{supportsMapNotesEditing:!X(t)&&"portal-item"!==(null===r||void 0===r?void 0:r.origin)}}}},{key:"readFeatureCollections",value:function(e,t,r){if(!X(t))return null;var n=t.layers.map((function(e){var t=new L.default;return t.read(e,r),t}));return new v.Z({items:n})}},{key:"readLegacyfeatureCollectionJSON",value:function(e,t){return X(t)?(0,g.d9)(t.featureCollection):null}},{key:"readFullExtent",value:function(e,t){if(!t.layers.length||t.layers.every((function(e){return!e.layerDefinition.extent})))return new A.Z({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:B.Z.WGS84});var r=B.Z.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((function(e,t){var r=t.layerDefinition.extent;return r?A.Z.fromJSON(r).union(e):e}),new A.Z({spatialReference:r}))}},{key:"readMinScale",value:function(e,t){var r,n=(0,y.Z)(t.layers);try{for(n.s();!(r=n.n()).done;){var a=r.value;if(null!=a.layerDefinition.minScale)return a.layerDefinition.minScale}}catch(i){n.e(i)}finally{n.f()}return 0}},{key:"readMaxScale",value:function(e,t){var r,n=(0,y.Z)(t.layers);try{for(n.s();!(r=n.n()).done;){var a=r.value;if(null!=a.layerDefinition.maxScale)return a.layerDefinition.maxScale}}catch(i){n.e(i)}finally{n.f()}return 0}},{key:"multipointLayer",get:function(){return this._findSublayer("multipointLayer")}},{key:"pointLayer",get:function(){return this._findSublayer("pointLayer")}},{key:"polygonLayer",get:function(){return this._findSublayer("polygonLayer")}},{key:"polylineLayer",get:function(){return this._findSublayer("polylineLayer")}},{key:"readSpatialReference",value:function(e,t){return t.layers.length?B.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):B.Z.WGS84}},{key:"readSublayers",value:function(e,t,r){var n=this;if(X(t))return null;var a,i=[],o=t.layers.reduce((function(e,t){var r;return Math.max(e,null!==(r=t.layerDefinition.id)&&void 0!==r?r:-1)}),-1)+1,l=(0,y.Z)(t.layers);try{var u=function(){var e,t,r=a.value,l=r.layerDefinition,y=r.featureSet,u=null!==(e=l.geometryType)&&void 0!==e?e:y.geometryType,s=null!==(t=l.id)&&void 0!==t?t:o++,p=H.find((function(e){var t,r,n;return u===e.geometryTypeJSON&&(null===(t=l.drawingInfo)||void 0===t||null===(r=t.renderer)||void 0===r||null===(n=r.symbol)||void 0===n?void 0:n.type)===e.identifyingSymbol.type}));if(p){var c=new V({id:p.id,title:l.name,layerId:s,layer:n,graphics:y.features.map((function(e){var t=e.geometry,r=e.symbol,n=e.attributes,a=e.popupInfo;return m.Z.fromJSON({attributes:n,geometry:t,symbol:r,popupTemplate:a})}))});i.push(c)}};for(l.s();!(a=l.n()).done;)u()}catch(s){l.e(s)}finally{l.f()}return new v.Z(i)}},{key:"writeSublayers",value:function(e,t,r,n){var a,i=this,o=this.minScale,l=this.maxScale;if(!(0,h.Wi)(e)){var u=e.some((function(e){return e.graphics.length>0}));if(this.capabilities.operations.supportsMapNotesEditing){var s,p=[],c=this.spatialReference.toJSON(),f=(0,y.Z)(e);try{e:for(f.s();!(s=f.n()).done;){var d,m=s.value,v=(0,y.Z)(m.graphics);try{for(v.s();!(d=v.n()).done;){var g=d.value;if((0,h.pC)(g.geometry)){c=g.geometry.spatialReference.toJSON();break e}}}catch(Z){v.e(Z)}finally{v.f()}}}catch(Z){f.e(Z)}finally{f.f()}var S,C=(0,y.Z)(H);try{var O=function(){var t=S.value,r=e.find((function(e){return t.id===e.id}));i._writeMapNoteSublayer(p,r,t,o,l,c,n)};for(C.s();!(S=C.n()).done;)O()}catch(Z){C.e(Z)}finally{C.f()}(0,w.RB)("featureCollection.layers",p,t)}else u&&(null===n||void 0===n||null===(a=n.messages)||void 0===a||a.push(new b.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")))}}},{key:"textLayer",get:function(){return this._findSublayer("textLayer")}},{key:"load",value:function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}},{key:"read",value:function(e,t){"featureCollection"in e&&(e=(0,g.d9)(e),Object.assign(e,e.featureCollection)),(0,o.Z)((0,l.Z)(r.prototype),"read",this).call(this,e,t)}},{key:"beforeSave",value:function(){var e=(0,a.Z)(f.mark((function e(){var t,r,n,a,i,o,l,u,s,p;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,h.Wi)(this.sublayers)){e.next=2;break}return e.abrupt("return");case 2:t=null,r=[],n=(0,y.Z)(this.sublayers),e.prev=5,n.s();case 7:if((a=n.n()).done){e.next=40;break}i=a.value,o=(0,y.Z)(i.graphics),e.prev=10,o.s();case 12:if((l=o.n()).done){e.next=30;break}if(u=l.value,!(0,h.pC)(u.geometry)){e.next=28;break}if(s=u.geometry,!t){e.next=26;break}if(e.t0=(0,J.fS)(s.spatialReference,t),e.t0){e.next=24;break}if(e.t1=(0,k.Up)(s.spatialReference,t)||(0,k.kR)(),e.t1){e.next=23;break}return e.next=23,(0,k.zD)();case 23:u.geometry=(0,k.iV)(s,t);case 24:e.next=27;break;case 26:t=s.spatialReference;case 27:r.push(u);case 28:e.next=12;break;case 30:e.next=35;break;case 32:e.prev=32,e.t2=e.catch(10),o.e(e.t2);case 35:return e.prev=35,o.f(),e.finish(35);case 38:e.next=7;break;case 40:e.next=45;break;case 42:e.prev=42,e.t3=e.catch(5),n.e(e.t3);case 45:return e.prev=45,n.f(),e.finish(45);case 48:return e.next=50,(0,x.aX)(r.map((function(e){return e.geometry})));case 50:p=e.sent,r.forEach((function(e,t){return e.geometry=p[t]}));case 52:case"end":return e.stop()}}),e,this,[[5,42,45,48],[10,32,35,38]])})));return function(){return e.apply(this,arguments)}}()},{key:"_findSublayer",value:function(e){var t,r;return(0,h.Wi)(this.sublayers)?null:null!==(t=null===(r=this.sublayers)||void 0===r?void 0:r.find((function(t){return t.id===e})))&&void 0!==t?t:null}},{key:"_writeMapNoteSublayer",value:function(e,t,r,n,a,i,o){var l=[];if(!(0,h.Wi)(t)){var u,s=(0,y.Z)(t.graphics);try{for(s.s();!(u=s.n()).done;){var p=u.value;this._writeMapNote(l,p,r.geometryType,o)}}catch(c){s.e(c)}finally{s.f()}this._normalizeObjectIds(l,q),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,g.d9)(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:n,maxScale:a,objectIdField:"OBJECTID",fields:[q.toJSON(),U.toJSON()],spatialReference:i},featureSet:{features:l,geometryType:r.geometryTypeJSON}})}}},{key:"_writeMapNote",value:function(e,t,r,a){var i,o;if(!(0,h.Wi)(t)){var l=t.geometry,y=t.symbol,u=t.popupTemplate;if(!(0,h.Wi)(l))if(l.type===r)if((0,h.Wi)(y))null===a||void 0===a||null===(o=a.messages)||void 0===o||o.push(new C.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));else{var s={attributes:(0,n.Z)({},t.attributes),geometry:l.toJSON(),symbol:y.toJSON()};(0,h.pC)(u)&&(s.popupInfo=u.toJSON()),e.push(s)}else null===a||void 0===a||null===(i=a.messages)||void 0===i||i.push(new C.Z("map-notes-layer:invalid-geometry-type",'Geometry "'.concat(l.type,'" cannot be saved in "').concat(r,'" layer'),{graphic:t}))}}},{key:"_normalizeObjectIds",value:function(e,t){var r,n=t.name,a=(0,I.S)(n,e)+1,i=new Set,o=(0,y.Z)(e);try{for(o.s();!(r=o.n()).done;){var l=r.value;l.attributes||(l.attributes={});var u=l.attributes;(null==u[n]||i.has(u[n]))&&(u[n]=a++),i.add(u[n])}}catch(s){o.e(s)}finally{o.f()}}}]),r}((0,R.h)((0,E.M)((0,D.q)((0,j.I)((0,S.R)(M.Z))))));(0,d._)([(0,O.Cb)({readOnly:!0})],K.prototype,"capabilities",void 0),(0,d._)([(0,Z.r)(["portal-item","web-map"],"capabilities",["layers"])],K.prototype,"readCapabilities",null),(0,d._)([(0,O.Cb)({readOnly:!0})],K.prototype,"featureCollections",void 0),(0,d._)([(0,Z.r)(["web-map","portal-item"],"featureCollections",["layers"])],K.prototype,"readFeatureCollections",null),(0,d._)([(0,O.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],K.prototype,"featureCollectionJSON",void 0),(0,d._)([(0,Z.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],K.prototype,"readLegacyfeatureCollectionJSON",null),(0,d._)([(0,O.Cb)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],K.prototype,"featureCollectionType",void 0),(0,d._)([(0,O.Cb)({json:{write:!1}})],K.prototype,"fullExtent",void 0),(0,d._)([(0,Z.r)(["web-map","portal-item"],"fullExtent",["layers"])],K.prototype,"readFullExtent",null),(0,d._)([(0,O.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy:function(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],K.prototype,"legendEnabled",void 0),(0,d._)([(0,O.Cb)({type:["show","hide"]})],K.prototype,"listMode",void 0),(0,d._)([(0,O.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],K.prototype,"minScale",void 0),(0,d._)([(0,Z.r)(["web-map","portal-item"],"minScale",["layers"])],K.prototype,"readMinScale",null),(0,d._)([(0,O.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],K.prototype,"maxScale",void 0),(0,d._)([(0,Z.r)(["web-map","portal-item"],"maxScale",["layers"])],K.prototype,"readMaxScale",null),(0,d._)([(0,O.Cb)({readOnly:!0})],K.prototype,"multipointLayer",null),(0,d._)([(0,O.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],K.prototype,"operationalLayerType",void 0),(0,d._)([(0,O.Cb)({readOnly:!0})],K.prototype,"pointLayer",null),(0,d._)([(0,O.Cb)({readOnly:!0})],K.prototype,"polygonLayer",null),(0,d._)([(0,O.Cb)({readOnly:!0})],K.prototype,"polylineLayer",null),(0,d._)([(0,O.Cb)({type:B.Z})],K.prototype,"spatialReference",void 0),(0,d._)([(0,Z.r)(["web-map","portal-item"],"spatialReference",["layers"])],K.prototype,"readSpatialReference",null),(0,d._)([(0,O.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],K.prototype,"sublayers",void 0),(0,d._)([(0,Z.r)("web-map","sublayers",["layers"])],K.prototype,"readSublayers",null),(0,d._)([(0,N.c)("web-map","sublayers")],K.prototype,"writeSublayers",null),(0,d._)([(0,O.Cb)({readOnly:!0})],K.prototype,"textLayer",null),(0,d._)([(0,O.Cb)()],K.prototype,"title",void 0),(0,d._)([(0,O.Cb)({readOnly:!0,json:{read:!1}})],K.prototype,"type",void 0);var Q=K=(0,d._)([(0,_.j)("esri.layers.MapNotesLayer")],K)},83859:function(e,t,r){r.d(t,{S:function(){return i},X:function(){return a}});var n=r(37762),a=1;function i(e,t){var r,a=0,i=(0,n.Z)(t);try{for(i.s();!(r=i.n()).done;){var o,l=null===(o=r.value.attributes)||void 0===o?void 0:o[e];"number"==typeof l&&isFinite(l)&&(a=Math.max(a,l))}}catch(y){i.e(y)}finally{i.f()}return a}}}]);