"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[4242],{55460:function(e,t,r){r.d(t,{R:function(){return g}});var n=r(1413),i=r(15671),a=r(43144),o=r(60136),s=r(29388),u=r(98248),l=r(76535),p=r(82447),c=r(77822),f=r(69496),y=r(35569),d=(r(59537),r(65343),r(61340),r(48916)),h=r(2798),v=r(63160),m=r(97466),b={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},g=function(e){(0,o.Z)(r,e);var t=(0,s.Z)(r);function r(e){var n;return(0,i.Z)(this,r),(n=t.call(this,e)).floors=null,n.scale=0,n}return(0,a.Z)(r,[{key:"destroy",value:function(){this.layer=null}},{key:"dynamicLayers",get:function(){var e=this;if(!this.hasDynamicLayers)return null;var t=this.visibleSublayers.map((function(t){var r=(0,v.f)(e.floors,t);return t.toExportImageJSON(r)}));return t.length?JSON.stringify(t):null}},{key:"hasDynamicLayers",get:function(){return this.layer&&(0,m.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}},{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("sublayer-update",(function(e){return t.notifyChange(b[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map((function(e){return e.id})).join(","):"show:-1":null}},{key:"layerDefs",get:function(){var e,t=this,r=!(null===(e=this.floors)||void 0===e||!e.length),n=this.visibleSublayers.filter((function(e){return null!=e.definitionExpression||r&&null!=e.floorInfo}));return n.length?JSON.stringify(n.reduce((function(e,r){var n=(0,v.f)(t.floors,r),i=(0,f._)(n,r.definitionExpression);return(0,c.pC)(i)&&(e[r.id]=i),e}),{})):null}},{key:"version",get:function(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");var e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this,t=[];if(!this.layer)return t;var r=this.layer.sublayers;r&&r.forEach((function r(n){var i=e.scale,a=0===i,o=0===n.minScale||i<=n.minScale,s=0===n.maxScale||i>=n.maxScale;n.visible&&(a||o&&s)&&(n.sublayers?n.sublayers.forEach(r):t.unshift(n))}));var n=this._get("visibleSublayers");return!n||n.length!==t.length||n.some((function(e,r){return t[r]!==e}))?t:n}},{key:"toJSON",value:function(){var e=this.layer,t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t=(0,n.Z)((0,n.Z)({},t),{},{layers:this.layers,layerDefs:this.layerDefs}),t}}]),r}((0,p.p)(l.Z));(0,u._)([(0,y.Cb)({readOnly:!0})],g.prototype,"dynamicLayers",null),(0,u._)([(0,y.Cb)()],g.prototype,"floors",void 0),(0,u._)([(0,y.Cb)({readOnly:!0})],g.prototype,"hasDynamicLayers",null),(0,u._)([(0,y.Cb)()],g.prototype,"layer",null),(0,u._)([(0,y.Cb)({readOnly:!0})],g.prototype,"layers",null),(0,u._)([(0,y.Cb)({readOnly:!0})],g.prototype,"layerDefs",null),(0,u._)([(0,y.Cb)({type:Number})],g.prototype,"scale",void 0),(0,u._)([(0,y.Cb)(h.qG)],g.prototype,"timeExtent",void 0),(0,u._)([(0,y.Cb)({readOnly:!0})],g.prototype,"version",null),(0,u._)([(0,y.Cb)({readOnly:!0})],g.prototype,"visibleSublayers",null),g=(0,u._)([(0,d.j)("esri.layers.mixins.ExportImageParameters")],g)},97466:function(e,t,r){r.d(t,{FN:function(){return s},ac:function(){return l},QV:function(){return o}});var n=r(37762),i=r(77822),a=r(4888);function o(e,t,r){return t.flatten((function(e){return e.sublayers})).length!==e.length||(!!e.some((function(e){return e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r}))||!u(e,t))}function s(e,t,r){return!!e.some((function(e){var t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&((0,i.Wi)(t.gdbVersion)||t.gdbVersion===r))||e.originIdOf("renderer")>a.s3.SERVICE||e.originIdOf("labelingInfo")>a.s3.SERVICE||e.originIdOf("opacity")>a.s3.SERVICE||e.originIdOf("labelsVisible")>a.s3.SERVICE}))||!u(e,t)}function u(e,t){if(!e||!e.length||(0,i.Wi)(t))return!0;var r=t.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).map((function(e){return e.id})).toArray();if(e.length>r.length)return!1;var a,o=0,s=r.length,u=(0,n.Z)(e);try{for(u.s();!(a=u.n()).done;){for(var l=a.value.id;o<s&&r[o]!==l;)o++;if(o>=s)return!1}}catch(p){u.e(p)}finally{u.f()}return!0}function l(e){return!!e&&e.some((function(e){return null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale}))}},34288:function(e,t,r){function n(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,n=0;n<e.length;n++){var i=e[n].size;"number"==typeof i&&(t+=i,r++)}return t/r}(e.stops):t}function a(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.maxSize,n=t.minSize;return(i(r,e)+i(n,e))/2})),n=0,a=r.length;if(0===a)return e;for(var o=0;o<a;o++)n+=r[o];var s=Math.floor(n/a);return Math.max(s,e)}function o(e){var t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;var i="visualVariables"in t?a(r,t.visualVariables):r;if("simple"===t.type)return n(i,t.symbol);if("unique-value"===t.type){var o=i;return t.uniqueValueInfos.forEach((function(e){o=n(o,e.symbol)})),o}if("class-breaks"===t.type){var s=i;return t.classBreakInfos.forEach((function(e){s=n(s,e.symbol)})),s}return"dot-density"===t.type||t.type,i}r.d(t,{k:function(){return o}})},54242:function(e,t,r){r.r(t),r.d(t,{default:function(){return ve}});var n=r(1413),i=r(15861),a=r(15671),o=r(43144),s=r(60136),u=r(29388),l=r(87757),p=r(98248),c=r(84615),f=r(71453),y=r(27970),d=r(35569),h=(r(59537),r(65343)),v=r(61340),m=r(48916),b=r(97169),g=r(86650),x=r(74605),w=r(22645),Z=r(80940),_=r(75967),C=r(26828),k=r(93433),I=r(11752),S=r(61120),E=r(77284),P=r(77822),O=r(13179),N=r(89716),V=r(2798),R=r(55460),F=r(63160),j=r(34288),M=r(37762),D=r(86755),L=r(392),U=r(41325),q=r(69496),T=r(685),A=r(97466),G=function(e){return e.spatialReference.wkid||JSON.stringify(e.spatialReference)};function J(e,t){var r=e.toJSON(),n=r.dpi,i=r.gdbVersion,a=r.geometry,o=r.geometryPrecision,s=r.height,u=r.layerOption,l=r.mapExtent,p=r.maxAllowableOffset,c=r.returnFieldName,f=r.returnGeometry,y=r.returnUnformattedValues,d=r.returnZ,h=r.spatialReference,v=r.timeExtent,m=r.tolerance,b=r.width,g=Q(e),x=g.dynamicLayers,w=g.layerDefs,Z=g.layerIds,_=t&&(0,P.pC)(t.geometry)?t.geometry:null,C={geometryPrecision:o,maxAllowableOffset:p,returnFieldName:c,returnGeometry:f,returnUnformattedValues:y,returnZ:d,tolerance:m},k=_&&_.toJSON()||a;if(C.imageDisplay="".concat(b,",").concat(s,",").concat(n),i&&(C.gdbVersion=i),k&&(delete k.spatialReference,C.geometry=JSON.stringify(k),C.geometryType=(0,T.Ji)(k)),h?C.sr=h.wkid||JSON.stringify(h):k&&k.spatialReference?C.sr=G(k):l&&l.spatialReference&&(C.sr=G(l)),C.time=v?[v.start,v.end].join(","):null,l){var I=l.xmin,S=l.ymin,E=l.xmax,O=l.ymax;C.mapExtent="".concat(I,",").concat(S,",").concat(E,",").concat(O)}return w&&(C.layerDefs=w),x&&!w&&(C.dynamicLayers=x),C.layers="popup"===u?"visible":u,Z&&!x&&(C.layers+=":".concat(Z.join(","))),C}function Q(e){var t,r,n=e.mapExtent,i=e.floors,a=e.width,o=e.sublayers,s=e.layerIds,u=e.layerOption,l=e.gdbVersion,p=null===o||void 0===o||null===(t=o.find((function(e){return null!=e.layer})))||void 0===t||null===(r=t.layer)||void 0===r?void 0:r.serviceSublayers,c="popup"===u,f={},y=(0,N.yZ)({extent:n,width:a,spatialReference:null===n||void 0===n?void 0:n.spatialReference}),d=[];if(null!==o&&void 0!==o&&o.forEach((function e(t){var r=0===y,n=0===t.minScale||y<=t.minScale,i=0===t.maxScale||y>=t.maxScale;if(t.visible&&(r||n&&i))if(t.sublayers)t.sublayers.forEach(e);else{if(!1===(null===s||void 0===s?void 0:s.includes(t.id))||c&&(!t.popupTemplate||!t.popupEnabled))return;d.unshift(t)}})),o&&!d.length)f.layerIds=[];else{var h=(0,A.FN)(d,p,l),v=d.map((function(e){var t=(0,F.f)(i,e);return e.toExportImageJSON(t)}));if(h)f.dynamicLayers=JSON.stringify(v);else{if(o){var m=d.map((function(e){return e.id}));s&&(m=m.filter((function(e){return s.includes(e)}))),f.layerIds=m}else(null===s||void 0===s?void 0:s.length)&&(f.layerIds=s);var b=function(e,t){var r=!(null===e||void 0===e||!e.length),n=t.filter((function(e){return null!=e.definitionExpression||r&&null!=e.floorInfo}));return n.length?n.map((function(t){var r=(0,F.f)(e,t),n=(0,q._)(r,t.definitionExpression);return{id:t.id,definitionExpression:n}})):null}(i,d);if((0,P.pC)(b)&&b.length){var g,x={},w=(0,M.Z)(b);try{for(w.s();!(g=w.n()).done;){var Z=g.value;Z.definitionExpression&&(x[Z.id]=Z.definitionExpression)}}catch(_){w.e(_)}finally{w.f()}Object.keys(x).length&&(f.layerDefs=JSON.stringify(x))}}}return f}var B,z=r(32224),H=r(14574),W=r(8410),K=r(26208),Y=B=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).dpi=96,n.floors=null,n.gdbVersion=null,n.geometry=null,n.geometryPrecision=null,n.height=400,n.layerIds=null,n.layerOption="top",n.mapExtent=null,n.maxAllowableOffset=null,n.returnFieldName=!0,n.returnGeometry=!1,n.returnM=!1,n.returnUnformattedValues=!0,n.returnZ=!1,n.spatialReference=null,n.sublayers=null,n.timeExtent=null,n.tolerance=null,n.width=400,n}return(0,o.Z)(r,null,[{key:"from",value:function(e){return(0,v.TJ)(B,e)}}]),r}(W.wq);(0,p._)([(0,d.Cb)({type:Number,json:{write:!0}})],Y.prototype,"dpi",void 0),(0,p._)([(0,d.Cb)()],Y.prototype,"floors",void 0),(0,p._)([(0,d.Cb)({type:String,json:{write:!0}})],Y.prototype,"gdbVersion",void 0),(0,p._)([(0,d.Cb)({types:z.qM,json:{read:T.im,write:!0}})],Y.prototype,"geometry",void 0),(0,p._)([(0,d.Cb)({type:Number,json:{write:!0}})],Y.prototype,"geometryPrecision",void 0),(0,p._)([(0,d.Cb)({type:Number,json:{write:!0}})],Y.prototype,"height",void 0),(0,p._)([(0,d.Cb)({type:[Number],json:{write:!0}})],Y.prototype,"layerIds",void 0),(0,p._)([(0,d.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],Y.prototype,"layerOption",void 0),(0,p._)([(0,d.Cb)({type:O.Z,json:{write:!0}})],Y.prototype,"mapExtent",void 0),(0,p._)([(0,d.Cb)({type:Number,json:{write:!0}})],Y.prototype,"maxAllowableOffset",void 0),(0,p._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],Y.prototype,"returnFieldName",void 0),(0,p._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],Y.prototype,"returnGeometry",void 0),(0,p._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],Y.prototype,"returnM",void 0),(0,p._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],Y.prototype,"returnUnformattedValues",void 0),(0,p._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],Y.prototype,"returnZ",void 0),(0,p._)([(0,d.Cb)({type:K.Z,json:{write:!0}})],Y.prototype,"spatialReference",void 0),(0,p._)([(0,d.Cb)()],Y.prototype,"sublayers",void 0),(0,p._)([(0,d.Cb)({type:H.Z,json:{write:!0}})],Y.prototype,"timeExtent",void 0),(0,p._)([(0,d.Cb)({type:Number,json:{write:!0}})],Y.prototype,"tolerance",void 0),(0,p._)([(0,d.Cb)({type:Number,json:{write:!0}})],Y.prototype,"width",void 0);var X=Y=B=(0,p._)([(0,m.j)("esri.rest.support.IdentifyParameters")],Y),$=r(2572),ee=r(96326),te=r(57),re=r(2908),ne=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).displayFieldName=null,n.feature=null,n.layerId=null,n.layerName=null,n}return(0,o.Z)(r,[{key:"readFeature",value:function(e,t){return $.Z.fromJSON({attributes:(0,n.Z)({},t.attributes),geometry:(0,n.Z)({},t.geometry)})}},{key:"writeFeature",value:function(e,t){if(e){var r=e.attributes,i=e.geometry;r&&(t.attributes=(0,n.Z)({},r)),(0,P.pC)(i)&&(t.geometry=i.toJSON(),t.geometryType=re.P$.toJSON(i.type))}}}]),r}(W.wq);(0,p._)([(0,d.Cb)({type:String,json:{write:!0}})],ne.prototype,"displayFieldName",void 0),(0,p._)([(0,d.Cb)({type:$.Z})],ne.prototype,"feature",void 0),(0,p._)([(0,ee.r)("feature",["attributes","geometry"])],ne.prototype,"readFeature",null),(0,p._)([(0,te.c)("feature")],ne.prototype,"writeFeature",null),(0,p._)([(0,d.Cb)({type:Number,json:{write:!0}})],ne.prototype,"layerId",void 0),(0,p._)([(0,d.Cb)({type:String,json:{write:!0}})],ne.prototype,"layerName",void 0);var ie=ne=(0,p._)([(0,m.j)("esri.rest.support.IdentifyResult")],ne);function ae(e,t,r){return oe.apply(this,arguments)}function oe(){return oe=(0,i.Z)(l.mark((function e(t,r,i){var a,o;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(r=ue(r)).geometry?[r.geometry]:[],o=(0,U.en)(t),e.abrupt("return",(o.path+="/identify",(0,L.aX)(a).then((function(e){var t=J(r,{geometry:e&&e[0]}),a=(0,U.cv)((0,n.Z)((0,n.Z)({},o.query),{},{f:"json"},t)),s=(0,U.lA)(a,i);return(0,D.default)(o.path,s).then(se).then((function(e){return le(e,r.sublayers)}))}))));case 2:case"end":return e.stop()}}),e)}))),oe.apply(this,arguments)}function se(e){var t=e.data;t.results=t.results||[];var r={results:[]};return r.results=t.results.map((function(e){return ie.fromJSON(e)})),r}function ue(e){return X.from(e)}function le(e,t){if(null===t||void 0===t||!t.length)return e;var r=new Map;t.forEach((function e(t){r.set(t.id,t),t.sublayers&&t.sublayers.forEach(e)}));var n,i=(0,M.Z)(e.results);try{for(i.s();!(n=i.n()).done;){var a=n.value;a.feature.sourceLayer=r.get(a.layerId)}}catch(o){i.e(o)}finally{i.f()}return e}var pe=r(37698),ce=r(55486),fe=r(35270),ye=r(51601),de=c.Z.getLogger("esri.views.2d.layers.MapImageLayerView2D"),he=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;return(0,a.Z)(this,r),(e=t.apply(this,arguments))._highlightGraphics=new b.J,e}return(0,o.Z)(r,[{key:"update",value:function(e){this.strategy.update(e).catch((function(e){(0,f.D_)(e)||de.error(e)}))}},{key:"attach",value:function(){var e=this,t=this.layer,r=t.imageMaxWidth,n=t.imageMaxHeight,i=t.version,a=i>=10.3,o=i>=10;this._bitmapContainer=new g.c,this.container.addChild(this._bitmapContainer);var s=new w.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:function(){return e.requestUpdate()},container:new Z.Z(this.view.featuresTilingScheme)});this.container.addChild(s.container),this.strategy=new _.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:n,imageRotationSupported:a,imageNormalizationSupported:o,hidpi:!0}),this.handles.add((0,y.YP)((function(){return e.exportImageVersion}),(function(){return e.requestUpdate()})),"exportImageVersion"),this.handles.add((0,y.YP)((function(){var t;return null===(t=e.view)||void 0===t?void 0:t.floors}),(function(){return e.requestUpdate()})),"view.floors"),this.requestUpdate()}},{key:"detach",value:function(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"highlight",value:function(e,t){var r=this;return this._highlightGraphics.add(e),{remove:function(){r._highlightGraphics.remove(e)}}}},{key:"supportsSpatialReference",value:function(e){return this.layer.serviceSupportsSpatialReference(e)}},{key:"createFetchPopupFeaturesQueryGeometry",value:function(e,t){return(0,ye.K)(e,t,this.view)}},{key:"doRefresh",value:function(){var e=(0,i.Z)(l.mark((function e(){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"fetchImage",value:function(e,t,r,i){return this.layer.fetchImage(e,t,r,(0,n.Z)({timeExtent:this.timeExtent,floors:this.view.floors},i))}}]),r}(function(e){var t=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,a.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"initialize",value:function(){this.exportImageParameters=new R.R({layer:this.layer})}},{key:"destroy",value:function(){this.exportImageParameters.destroy(),this.exportImageParameters=null}},{key:"exportImageVersion",get:function(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}},{key:"fetchPopupFeatures",value:function(){var e=(0,i.Z)(l.mark((function e(t,r){var n,i,a,o,s,u,p,c;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=this.layer,t){e.next=3;break}throw new E.Z("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:p});case 3:if(c=null===(n=null===(i=this.layer.capabilities)||void 0===i||null===(a=i.operations)||void 0===a?void 0:a.supportsQuery)||void 0===n||n,(null===(o=null===(s=this.layer.capabilities)||void 0===s||null===(u=s.operations)||void 0===u?void 0:u.supportsIdentify)||void 0===o||o)&&this.layer.version>=10.5||c){e.next=6;break}throw new E.Z("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:p});case 6:return e.abrupt("return",c?this._fetchPopupFeaturesUsingQueries(t,r):this._fetchPopupFeaturesUsingIdentify(t,r));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e;return!!(0,I.Z)((0,S.Z)(r.prototype),"canResume",this).call(this)&&!(null!==(e=this.timeExtent)&&void 0!==e&&e.isEmpty)}},{key:"_fetchPopupFeaturesUsingIdentify",value:function(){var e=(0,i.Z)(l.mark((function e(t,r){var n,i,a;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._createIdentifyParameters(t,r);case 2:if(n=e.sent,!(0,P.Wi)(n)){e.next=5;break}return e.abrupt("return",[]);case 5:return e.next=7,ae(this.layer.parsedUrl,n);case 7:return i=e.sent,a=i.results,e.abrupt("return",a.map((function(e){return e.feature})));case 10:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_createIdentifyParameters",value:function(){var e=(0,i.Z)(l.mark((function e(t,r){var n,a,o,s,u,p,c,f,y,d,v,m,b,g,x=this;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=this.view,s=o.floors,u=o.spatialReference,p=o.scale,c=(0,P.pC)(r)?r.event:null,e.next=7,this._collectPopupProviders(this.layer.sublayers,p,r);case 7:if((f=e.sent).length){e.next=10;break}return e.abrupt("return",null);case 10:return e.next=12,Promise.all(f.map((function(e){return e.sublayer.load().catch((function(){}))})));case 12:if(y=Math.min((0,h.Z)("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce((function(e,t){return t.renderer?(0,j.k)({renderer:t.renderer,event:c}):e}),2)),d=this.createFetchPopupFeaturesQueryGeometry(t,y),v=(0,N.dp)(p,u),m=Math.round(d.width/v),b=new O.Z({xmin:d.center.x-v*m,ymin:d.center.y-v*m,xmax:d.center.x+v*m,ymax:d.center.y+v*m,spatialReference:d.spatialReference}),e.t0=!1===(null===(n=this.layer.capabilities)||void 0===n||null===(a=n.operations)||void 0===a?void 0:a.supportsQuery),e.t0){e.next=22;break}return e.next=21,new Promise((function(e){var t=!1;Promise.all(f.map(function(){var r=(0,i.Z)(l.mark((function r(n){var i,a;return l.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(i=n.popupTemplate)){r.next=9;break}return r.next=4,x._loadArcadeModules(i);case 4:if(a=r.sent,!t){r.next=7;break}return r.abrupt("return");case 7:(null===a||void 0===a?void 0:a.arcadeUtils.hasGeometryOperations(i))&&(t=!0,e(!0));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())).finally((function(){return e(!1)}))}));case 21:e.t0=e.sent;case 22:return g=e.t0,e.abrupt("return",new X({floors:s,gdbVersion:this.layer.gdbVersion,geometry:t,height:m,layerOption:"popup",mapExtent:b,maxAllowableOffset:g?0:v,returnGeometry:!0,spatialReference:u,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:y,width:m}));case 24:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_fetchPopupFeaturesUsingQueries",value:function(){var e=(0,i.Z)(l.mark((function e(t,r){var n,a,o,s=this;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._collectPopupProviders(this.layer.sublayers,this.view.scale,r);case 2:return n=e.sent,a=(0,P.pC)(r)?r.event:null,o=n.map(function(){var e=(0,i.Z)(l.mark((function e(r){var n,i,o,u,p,c,f,y,d,h;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.sublayer,i=r.popupTemplate,e.next=3,n.load().catch((function(){}));case 3:return o=n.createQuery(),u=(0,j.k)({renderer:n.renderer,event:a}),p=s.createFetchPopupFeaturesQueryGeometry(t,u),o.geometry=p,e.next=7,(0,ce.e)(n,i);case 7:if(o.outFields=e.sent,!("floors"in s.view)){e.next=11;break}y=null===(c=s.view)||void 0===c||null===(f=c.floors)||void 0===f?void 0:f.clone(),d=(0,F.f)(y,n),(0,P.pC)(d)&&(o.where=o.where?"(".concat(o.where,") AND (").concat(d,")"):d);case 11:return e.next=13,s._loadArcadeModules(i);case 13:return(h=e.sent)&&h.arcadeUtils.hasGeometryOperations(i)||(o.maxAllowableOffset=p.width/u),e.next=17,n.queryFeatures(o);case 17:return e.abrupt("return",e.sent.features);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=7,(0,f.as)(o);case 7:return e.abrupt("return",e.sent.reduce((function(e,t){return t.value?[].concat((0,k.Z)(e),(0,k.Z)(t.value)):e}),[]).filter((function(e){return null!=e})));case 8:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_collectPopupProviders",value:function(){var e=(0,i.Z)(l.mark((function e(t,r,a){var o,s,u;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],s=function(){var e=(0,i.Z)(l.mark((function e(t){var i,u,p;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0===t.minScale||r<=t.minScale,u=0===t.maxScale||r>=t.maxScale,t.visible&&i&&u&&(t.sublayers?t.sublayers.forEach(s):t.popupEnabled&&(p=(0,ce.V)(t,(0,n.Z)((0,n.Z)({},a),{},{defaultPopupTemplateEnabled:!1})),(0,P.pC)(p)&&o.unshift({sublayer:t,popupTemplate:p})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=t.toArray().reverse().map(s),e.next=3,Promise.all(u);case 3:return e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_loadArcadeModules",value:function(e){var t;if(null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((function(e){return"expression"===e.type})))return(0,pe.LC)()}}]),r}(e);return(0,p._)([(0,d.Cb)()],t.prototype,"exportImageParameters",void 0),(0,p._)([(0,d.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,p._)([(0,d.Cb)()],t.prototype,"layer",void 0),(0,p._)([(0,d.Cb)()],t.prototype,"suspended",void 0),(0,p._)([(0,d.Cb)(V.qG)],t.prototype,"timeExtent",void 0),t=(0,p._)([(0,m.j)("esri.views.layers.MapImageLayerView")],t)}((0,fe.Z)((0,x.y)(C.Z))));(0,p._)([(0,d.Cb)()],he.prototype,"strategy",void 0),(0,p._)([(0,d.Cb)()],he.prototype,"updating",void 0);var ve=he=(0,p._)([(0,m.j)("esri.views.2d.layers.MapImageLayerView2D")],he)},80940:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(15671),i=r(43144),a=r(11752),o=r(61120),s=r(60136),u=r(29388),l=r(98248),p=(r(84615),r(61340),r(59537),r(65343),r(27445),r(48916)),c=r(9661),f=r(50222),y=r(34507),d=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"doRender",value:function(e){e.drawPhase===c.jx.HIGHLIGHT&&(0,a.Z)((0,o.Z)(r.prototype),"doRender",this).call(this,e)}},{key:"renderChildren",value:function(e){if(this.attributeView.bindTextures(e.context),this.children.some((function(e){return e.hasData}))){(0,a.Z)((0,o.Z)(r.prototype),"renderChildren",this).call(this,e);var t=e.painter.effects.highlight;t.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(y.lk.COLOR_BUFFER_BIT),this._renderChildren(e,t.defines.concat(["highlightAll"])),t.draw(e),t.unbind()}}}]),r}(f.Z),h=d=(0,l._)([(0,p.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],d)},55486:function(e,t,r){r.d(t,{V:function(){return p},e:function(){return u}});var n=r(93433),i=r(15861),a=r(87757),o=r(77822),s=r(42569);function u(e){return l.apply(this,arguments)}function l(){return l=(0,i.Z)(a.mark((function e(t){var r,i,u,l,p,c,f,y,d,h=arguments;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=h.length>1&&void 0!==h[1]?h[1]:t.popupTemplate,!(0,o.Wi)(r)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,r.getRequiredFields(t.fieldsIndex);case 5:if(i=e.sent,u=r.lastEditInfoEnabled,l=t.objectIdField,p=t.typeIdField,c=t.globalIdField,f=t.relationships,!i.includes("*")){e.next=13;break}return e.abrupt("return",["*"]);case 13:if(!u){e.next=19;break}return e.next=16,(0,s.CH)(t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=[];case 20:return y=e.t0,d=(0,s.Q0)(t.fieldsIndex,[].concat((0,n.Z)(i),(0,n.Z)(y))),e.abrupt("return",(p&&d.push(p),d&&l&&t.fieldsIndex.has(l)&&!d.includes(l)&&d.push(l),d&&c&&t.fieldsIndex.has(c)&&!d.includes(c)&&d.push(c),f&&f.forEach((function(e){var r=e.keyField;d&&r&&t.fieldsIndex.has(r)&&!d.includes(r)&&d.push(r)})),d));case 23:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e,t){return e.popupTemplate?e.popupTemplate:(0,o.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,o.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},51601:function(e,t,r){r.d(t,{K:function(){return s},D:function(){return u}});r(32224);var n=r(77822),i=r(28562),a=r(34288),o=r(13179);function s(e,t,r){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new o.Z;if("2d"===r.type)a=t*r.resolution;else if("3d"===r.type){var u=r.overlayPixelSizeInMapUnits(e),l=r.basemapSpatialReference;a=(0,n.pC)(l)&&!l.equals(r.spatialReference)?(0,i.c9)(l)/(0,i.c9)(r.spatialReference):t*u}var p=e.x-a,c=e.y-a,f=e.x+a,y=e.y+a,d=r.spatialReference;return s.xmin=Math.min(p,f),s.ymin=Math.min(c,y),s.xmax=Math.max(p,f),s.ymax=Math.max(c,y),s.spatialReference=d,s}function u(e,t,r){var i=r.toMap(e);return!(0,n.Wi)(i)&&s(i,(0,a.k)(),r,l).intersects(t)}var l=new o.Z}}]);