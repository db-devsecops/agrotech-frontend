"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[9145],{99145:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(15861),i=r(1413),a=r(15671),o=r(43144),s=r(11752),c=r(61120),u=r(60136),l=r(29388),p=r(87757),d=r(98248),y=r(77284),f=r(77822),h=r(27970),v=r(35569),m=(r(59537),r(65343),r(61340),r(48916)),_=r(43632),O=r(86307),S=r(8348);function b(e,t){if((0,f.Wi)(e)&&(0,f.Wi)(t))return null;var r={};return(0,f.pC)(t)&&(r.geometry=t.toJSON()),(0,f.pC)(e)&&(r.where=e),r}var g=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;return(0,a.Z)(this,r),(e=t.apply(this,arguments))._enabledDataReceived=!1,e.errorString=null,e.connectionStatus="disconnected",e}return(0,o.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add([(0,h.YP)((function(){var t;return null===(t=e.layer)||void 0===t?void 0:t.purgeOptions}),(function(){return e._update()})),(0,h.YP)((function(){return e.suspended}),(function(t){t?e._proxy.pauseStream():e._proxy.resumeStream()}))])}},{key:"connectionError",get:function(){if(this.errorString)return new y.Z("stream-controller",this.errorString)}},{key:"on",value:function(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));var n=(0,s.Z)((0,c.Z)(r.prototype),"on",this).call(this,e,t),i=this;return{remove:function(){n.remove(),"data-received"===e&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}},{key:"queryLatestObservations",value:function(e,t){var r=this;if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new y.Z("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((function(e){var t=_.default.fromJSON(e);return t.features.forEach((function(e){e.layer=r.layer,e.sourceLayer=r.layer})),t}))}},{key:"detach",value:function(){(0,s.Z)((0,c.Z)(r.prototype),"detach",this).call(this),this.connectionStatus="disconnected"}},{key:"_createClientOptions",value:function(){var e=this;return(0,i.Z)((0,i.Z)({},(0,s.Z)((0,c.Z)(r.prototype),"_createClientOptions",this).call(this)),{},{setProperty:function(t){e.set(t.propertyName,t.value)}})}},{key:"_createTileRendererHash",value:function(e){var t="".concat(JSON.stringify(this.layer.purgeOptions),".").concat(JSON.stringify(b(this.layer.definitionExpression,this.layer.geometryDefinition)),")");return(0,s.Z)((0,c.Z)(r.prototype),"_createTileRendererHash",this).call(this,e)+t}},{key:"_createServiceOptions",value:function(){var e=(0,n.Z)(p.mark((function e(){var t,r,n,i,a,o;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.layer,r=t.objectIdField,n=t.fields.map((function(e){return e.toJSON()})),i=(0,S.oq)(t.geometryType),a=t.timeInfo&&t.timeInfo.toJSON()||null,o=t.spatialReference?t.spatialReference.toJSON():null,e.abrupt("return",{type:"stream",fields:n,geometryType:i,objectIdField:r,timeInfo:a,source:this.layer.parsedUrl,serviceFilter:b(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:t.customParameters});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),r}(O.default);(0,d._)([(0,v.Cb)()],g.prototype,"errorString",void 0),(0,d._)([(0,v.Cb)({readOnly:!0})],g.prototype,"connectionError",null),(0,d._)([(0,v.Cb)()],g.prototype,"connectionStatus",void 0);var Z=g=(0,d._)([(0,m.j)("esri.views.2d.layers.StreamLayerView2D")],g)}}]);