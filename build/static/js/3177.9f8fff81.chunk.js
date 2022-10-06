"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[3177],{34288:function(e,t,r){function n(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,n=0;n<e.length;n++){var i=e[n].size;"number"==typeof i&&(t+=i,r++)}return t/r}(e.stops):t}function a(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.maxSize,n=t.minSize;return(i(r,e)+i(n,e))/2})),n=0,a=r.length;if(0===a)return e;for(var u=0;u<a;u++)n+=r[u];var s=Math.floor(n/a);return Math.max(s,e)}function u(e){var t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;var i="visualVariables"in t?a(r,t.visualVariables):r;if("simple"===t.type)return n(i,t.symbol);if("unique-value"===t.type){var u=i;return t.uniqueValueInfos.forEach((function(e){u=n(u,e.symbol)})),u}if("class-breaks"===t.type){var s=i;return t.classBreakInfos.forEach((function(e){s=n(s,e.symbol)})),s}return"dot-density"===t.type||t.type,i}r.d(t,{k:function(){return u}})},68905:function(e,t,r){r.d(t,{Y:function(){return c}});var n=r(15671),i=r(43144),a=r(60136),u=r(29388),s=r(98248),l=(r(84615),r(61340),r(59537),r(65343),r(27445),r(48916)),o=r(88977),c=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"attach",value:function(){this.view.timeline.record("".concat(this.layer.title," (BitmapTileLayer) Attach")),this._bitmapView=new o.s(this._tileInfoView),this.container.addChild(this._bitmapView)}},{key:"detach",value:function(){var e;this.container.removeChild(this._bitmapView),null===(e=this._bitmapView)||void 0===e||e.removeAllChildren()}}]),r}(e);return t=(0,s._)([(0,l.j)("esri.views.2d.layers.BitmapTileLayerView2D")],t)}},33177:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n=r(1413),i=r(29439),a=r(15861),u=r(15671),s=r(43144),l=r(11752),o=r(61120),c=r(60136),h=r(29388),f=r(87757),p=r(98248),v=r(84615),y=r(71453),d=r(27970),m=r(35569),w=(r(59537),r(65343),r(61340),r(48916)),g=r(94613),_=r(68905),b=r(74605),k=r(19255),x=r(59404),Z=r(31154),I=r(49685),V=r(57331),T=r(26828),C=r(35270),q=r(93433),S=r(77284),R=r(77822),M=r(34288),F=r(51601),Q=[0,0],L=function(e){(0,c.Z)(r,e);var t=(0,h.Z)(r);function r(){var e;return(0,u.Z)(this,r),(e=t.apply(this,arguments))._tileStrategy=null,e._fetchQueue=null,e.layer=null,e}return(0,s.Z)(r,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}},{key:"update",value:function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}},{key:"attach",value:function(){var e=this,t="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new x.Z(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new I.Z({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:function(t,r){return e.fetchTile(t,r)}}),this._tileStrategy=new V.Z({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add((0,d.YP)((function(){return e.resampling}),(function(){e.doRefresh()}))),(0,l.Z)((0,o.Z)(r.prototype),"attach",this).call(this)}},{key:"detach",value:function(){(0,l.Z)((0,o.Z)(r.prototype),"detach",this).call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"supportsSpatialReference",value:function(e){var t;return(0,g.fS)(null===(t=this.layer.tileInfo)||void 0===t?void 0:t.spatialReference,e)}},{key:"createFetchPopupFeaturesQueryGeometry",value:function(e,t){return(0,F.K)(e,t,this.view)}},{key:"doRefresh",value:function(){var e=(0,a.Z)(f.mark((function e(){var t=this;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(e){return t._enqueueTileFetch(e)})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){var e,t;return null!==(e=null===(t=this._fetchQueue)||void 0===t?void 0:t.updating)&&void 0!==e&&e}},{key:"acquireTile",value:function(e){var t,r,n,a,u=this._bitmapView.createTile(e),s=u.bitmap;return t=this._tileInfoView.getTileCoords(Q,u.key),r=(0,i.Z)(t,2),s.x=r[0],s.y=r[1],s.resolution=this._tileInfoView.getTileResolution(u.key),n=this._tileInfoView.tileInfo.size,a=(0,i.Z)(n,2),s.width=a[0],s.height=a[1],this._enqueueTileFetch(u),this._bitmapView.addChild(u),this.requestUpdate(),u}},{key:"releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"fetchTile",value:function(){var e=(0,a.Z)(f.mark((function e(t){var r,i,a,u,s,l,o,c,h,p,v=arguments;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=v.length>1&&void 0!==v[1]?v[1]:{},i="tilemapCache"in this.layer?this.layer.tilemapCache:null,a=r.signal,u=r.resamplingLevel,s=void 0===u?0:u,i){e.next=22;break}return e.prev=3,e.next=6,this._fetchImage(t,a);case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),(0,y.D_)(e.t0)||this.resampling){e.next=13;break}return e.abrupt("return",(0,k.V)(this._tileInfoView.tileInfo.size));case 13:if(!(s<3)){e.next=21;break}if(!(l=this._tileInfoView.getTileParentId(t.id))){e.next=21;break}return o=new Z.Z(l),e.next=19,this.fetchTile(o,(0,n.Z)((0,n.Z)({},r),{},{resamplingLevel:s+1}));case 19:return c=e.sent,e.abrupt("return",(0,k.i)(this._tileInfoView,c,o,t));case 21:throw e.t0;case 22:return h=new Z.Z(0,0,0,0),e.prev=23,e.next=26,i.fetchAvailabilityUpsample(t.level,t.row,t.col,h,{signal:a});case 26:if(h.level===t.level||this.resampling){e.next=28;break}return e.abrupt("return",(0,k.V)(this._tileInfoView.tileInfo.size));case 28:return e.next=30,this._fetchImage(h,a);case 30:p=e.sent,e.next=40;break;case 33:if(e.prev=33,e.t1=e.catch(23),!(0,y.D_)(e.t1)){e.next=37;break}throw e.t1;case 37:return e.next=39,this._fetchImage(t,a);case 39:p=e.sent;case 40:return e.abrupt("return",this.resampling?(0,k.i)(this._tileInfoView,p,h,t):p);case 41:case"end":return e.stop()}}),e,this,[[3,9],[23,33]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_enqueueTileFetch",value:function(){var e=(0,a.Z)(f.mark((function e(t){var r,n=this;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._fetchQueue.has(t.key.id)){e.next=12;break}return e.prev=1,e.next=4,this._fetchQueue.push(t.key);case 4:r=e.sent,t.bitmap.source=r,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",(function(){return n.requestUpdate()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(0,y.D_)(e.t0)||v.Z.getLogger(this.declaredClass).error(e.t0);case 11:this.requestUpdate();case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchImage",value:function(){var e=(0,a.Z)(f.mark((function e(t,r){return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchTile(t.level,t.row,t.col,{signal:r}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(function(e){var t=function(e){(0,c.Z)(r,e);var t=(0,h.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r,[{key:"fetchPopupFeatures",value:function(){var e=(0,a.Z)(f.mark((function e(t,r){var n,i,u,s=this;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.layer,t){e.next=3;break}throw new S.Z("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:n});case 3:if("tile"===n.type){e.next=5;break}throw new S.Z("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:n.type});case 5:return i=this.get("view.scale"),u=n.allSublayers.toArray().filter((function(e){var t=0===e.minScale||i<=e.minScale,r=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&r})),e.abrupt("return",(0,y.as)(u.map(function(){var e=(0,a.Z)(f.mark((function e(n){var i,a,u;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.createQuery(),a=(0,R.pC)(r)?r.event:null,u=(0,M.k)({renderer:n.renderer,event:a}),i.geometry=s.createFetchPopupFeaturesQueryGeometry(t,u),e.next=4,n.popupTemplate.getRequiredFields();case 4:return i.outFields=e.sent,e.next=7,n.queryFeatures(i);case 7:return e.abrupt("return",e.sent.features);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){var t;return(t=[]).concat.apply(t,(0,q.Z)(e.map((function(e){return e.value})).filter(Boolean)))})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(e);return(0,p._)([(0,m.Cb)()],t.prototype,"layer",void 0),t=(0,p._)([(0,w.j)("esri.layers.mixins.TileLayerView")],t)}((0,C.Z)((0,_.Y)((0,b.y)(T.Z)))));(0,p._)([(0,m.Cb)()],L.prototype,"_fetchQueue",void 0),(0,p._)([(0,m.Cb)()],L.prototype,"resampling",null);var z=L=(0,p._)([(0,w.j)("esri.views.2d.layers.TileLayerView2D")],L)},19255:function(e,t,r){r.d(t,{V:function(){return a},i:function(){return i}});var n=r(29439);function i(e,t,r,n){if(r.level===n.level)return t;var i=e.tileInfo.size,u=e.getTileResolution(r.level),s=e.getTileResolution(n.level),l=e.getLODInfoAt(n.level),o=l.getXForColumn(n.col),c=l.getYForRow(n.row),h=(l=e.getLODInfoAt(r.level)).getXForColumn(r.col),f=l.getYForRow(r.row),p=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/i[0],v=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/i[1],y=Math.round(p*((o-h)/u)),d=Math.round(v*(-(c-f)/u)),m=Math.round(p*i[0]*(s/u)),w=Math.round(v*i[1]*(s/u)),g=a(i);return g.getContext("2d").drawImage(t,y,d,m,w,0,0,i[0],i[1]),g}function a(e){var t,r,i=document.createElement("canvas");return t=e,r=(0,n.Z)(t,2),i.width=r[0],i.height=r[1],i}},35270:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(15671),i=r(43144),a=r(60136),u=r(29388),s=r(98248),l=r(84615),o=r(71453),c=r(27970),h=r(35569),f=(r(59537),r(65343),r(61340),r(48916)),p=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add((0,c.on)((function(){return e.layer}),"refresh",(function(t){e.doRefresh(t.dataChanged).catch((function(t){(0,o.D_)(t)||l.Z.getLogger(e.declaredClass).error(t)}))})),"RefreshableLayerView")}}]),r}(e);return(0,s._)([(0,h.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,f.j)("esri.layers.mixins.RefreshableLayerView")],t)}},51601:function(e,t,r){r.d(t,{K:function(){return s},D:function(){return l}});r(32224);var n=r(77822),i=r(28562),a=r(34288),u=r(13179);function s(e,t,r){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new u.Z;if("2d"===r.type)a=t*r.resolution;else if("3d"===r.type){var l=r.overlayPixelSizeInMapUnits(e),o=r.basemapSpatialReference;a=(0,n.pC)(o)&&!o.equals(r.spatialReference)?(0,i.c9)(o)/(0,i.c9)(r.spatialReference):t*l}var c=e.x-a,h=e.y-a,f=e.x+a,p=e.y+a,v=r.spatialReference;return s.xmin=Math.min(c,f),s.ymin=Math.min(h,p),s.xmax=Math.max(c,f),s.ymax=Math.max(h,p),s.spatialReference=v,s}function l(e,t,r){var i=r.toMap(e);return!(0,n.Wi)(i)&&s(i,(0,a.k)(),r,o).intersects(t)}var o=new u.Z}}]);