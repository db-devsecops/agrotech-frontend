"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[7523],{27523:function(e,t,r){r.r(t),r.d(t,{default:function(){return ie}});var i=r(15861),n=r(15671),a=r(43144),s=r(60136),o=r(29388),u=r(87757),l=r(98248),c=r(2572),h=r(48739),p=r(27970),d=r(35569),y=(r(59537),r(65343),r(61340),r(48916)),v=r(97169),f=r(55282),m=r(74605),g=r(22645),w=r(80940),x=r(76535),b=r(84615),_=r(77822),k=r(71453),Z=r(12913),P=r(86650),C=r(37493),R=r(42686),E=r(75967),V=b.Z.getLogger("esri.views.2d.layers.imagery.ImageryView2D"),S=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).attached=!1,e.container=new C.W,e.updateRequested=!1,e.type="imagery",e._bitmapView=new P.c,e}return(0,a.Z)(r,[{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||this.isUpdating()}},{key:"update",value:function(e){this.strategy.update(e).catch((function(e){(0,k.D_)(e)||V.error(e)}))}},{key:"hitTest",value:function(e){return new c.Z({attributes:{},geometry:e.clone(),layer:this.layer})}},{key:"attach",value:function(){var e=this;this.container.addChild(this._bitmapView);var t=this.layer.version>=10,r=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new E.Z({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:r,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:function(){return e.requestUpdate()}})}},{key:"detach",value:function(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}},{key:"redraw",value:function(){var e=this;this.strategy.updateExports((function(t){t.source instanceof HTMLImageElement?t.requestRender():e.layer.applyRenderer({pixelBlock:t.source.pixelBlock}).then((function(r){var i=t.source;i.pixelBlock=r.pixelBlock,i.filter=function(t){return e.layer.applyFilter(t)},e.container.requestRender()}))}))}},{key:"requestUpdate",value:function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"getPixelData",value:function(){if(this.updating)return null;var e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){var t=this.view.extent,r=e.map((function(e){return e.source})).filter((function(e){return e.extent&&e.extent.intersects(t)})).map((function(e){return{extent:e.extent,pixelBlock:e.originalPixelBlock}})),i=(0,Z.Kh)(r,t);return(0,_.pC)(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}},{key:"_fetchImage",value:function(e,t,r,i){var n=this;return(i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((function(e){return e.imageElement?e.imageElement:n.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((function(t){var r=new R.Z(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=function(e){return n.layer.applyFilter(e)},r}))}))}}]),r}(x.Z);(0,l._)([(0,d.Cb)()],S.prototype,"attached",void 0),(0,l._)([(0,d.Cb)()],S.prototype,"container",void 0),(0,l._)([(0,d.Cb)()],S.prototype,"layer",void 0),(0,l._)([(0,d.Cb)()],S.prototype,"strategy",void 0),(0,l._)([(0,d.Cb)()],S.prototype,"timeExtent",void 0),(0,l._)([(0,d.Cb)()],S.prototype,"view",void 0),(0,l._)([(0,d.Cb)()],S.prototype,"updateRequested",void 0),(0,l._)([(0,d.Cb)()],S.prototype,"updating",null),(0,l._)([(0,d.Cb)()],S.prototype,"type",void 0);var D=S=(0,l._)([(0,y.j)("esri.views.2d.layers.imagery.ImageryView2D")],S),q=r(86755),B=r(82447),T=r(13179),F=r(17445),I=r(88708),z=r(93433),A=r(11752),U=r(61120),j=r(80964),M=r(9661),O=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).symbolTypes=["triangle"],e}return(0,a.Z)(r,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"prepareRenderPasses",value:function(e){var t=this,i=e.registerRenderPass({name:"imagery (vf)",brushes:[j.Z],target:function(){return t.children},drawPhase:M.jx.MAP});return[].concat((0,z.Z)((0,A.Z)((0,U.Z)(r.prototype),"prepareRenderPasses",this).call(this,e)),[i])}},{key:"doRender",value:function(e){var t=this;this.visible&&e.drawPhase===M.jx.MAP&&this.symbolTypes.forEach((function(i){e.renderPass=i,(0,A.Z)((0,U.Z)(r.prototype),"doRender",t).call(t,e)}))}}]),r}(r(9163).Z),H=r(29439),G=r(2475),N=b.Z.getLogger("esri.views.2d.layers.imagery.VectorFieldView2D"),L=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).update=(0,k.Ds)((function(e,t){return i._update(e,t).catch((function(e){(0,k.D_)(e)||N.error(e)}))})),i}return(0,a.Z)(r,[{key:"updating",get:function(){return!!this._loading}},{key:"redraw",value:function(e){if(this.container.children.length){var t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender()}}},{key:"_update",value:function(){var e=(0,i.Z)(u.mark((function e(t,r,i){var n,a,s,o,l,c,h,p;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stationary){e.next=2;break}return e.abrupt("return");case 2:return n=t.state,a=n.extent,s=n.spatialReference,o=new T.Z({xmin:a.xmin,ymin:a.ymin,xmax:a.xmax,ymax:a.ymax,spatialReference:s}),l=(0,H.Z)(t.state.size,2),c=l[0],h=l[1],this._loading=this.fetchPixels(o,c,h,i),e.next=6,this._loading;case 6:p=e.sent,this._addToDisplay(p,r,t.state),this._loading=null;case 8:case"end":return e.stop()}}),e,this)})));return function(t,r,i){return e.apply(this,arguments)}}()},{key:"_addToDisplay",value:function(e,t,r){if((0,_.Wi)(e.pixelBlock))return this.container.children.forEach((function(e){return e.destroy()})),void this.container.removeAllChildren();var i=e.extent,n=e.pixelBlock,a=new G.F(n);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=i.xmin,a.y=i.ymax,a.pixelRatio=r.pixelRatio,a.rotation=r.rotation,a.resolution=r.resolution,a.width=n.width*t.symbolTileSize,a.height=n.height*t.symbolTileSize,this.container.children.forEach((function(e){return e.destroy()})),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a)}}]),r}(x.Z);(0,l._)([(0,d.Cb)()],L.prototype,"fetchPixels",void 0),(0,l._)([(0,d.Cb)()],L.prototype,"container",void 0),(0,l._)([(0,d.Cb)()],L.prototype,"_loading",void 0),(0,l._)([(0,d.Cb)()],L.prototype,"updating",null);var W=L=(0,l._)([(0,y.j)("esri.views.2d.layers.imagery.ImageryVFStrategy")],L),J=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).attached=!1,e.container=new O,e.type="imageryVF",e._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},e._fetchpixels=function(){var t=(0,i.Z)(u.mark((function t(r,i,n,a){var s,o,l,c,h,p,d,y,v,f;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._projectFullExtentPromise;case 2:if(s=t.sent,o=e.layer.renderer.symbolTileSize,l=(0,I.BH)(r,i,n,o,s),c=l.extent,h=l.width,p=l.height,!(0,_.pC)(s)||s.intersects(r)){t.next=10;break}return t.abrupt("return",{extent:c,pixelBlock:null});case 10:if(d={bbox:"".concat(c.xmin,", ").concat(c.ymin,", ").concat(c.xmax,", ").concat(c.ymax),exportParametersVersion:e.layer.exportImageServiceParameters.version,symbolTileSize:o,time:JSON.stringify(e.timeExtent||"")},!e._canReuseVectorFieldData(d)){t.next=16;break}if(y=e.getPixelData(),!(0,_.pC)(y)){t.next=16;break}if("".concat(y.extent.xmin,", ").concat(y.extent.ymin,", ").concat(y.extent.xmax,", ").concat(y.extent.ymax)!==d.bbox){t.next=16;break}return t.abrupt("return",y);case 16:return t.next=18,e.layer.fetchImage(c,h,p,{timeExtent:e.timeExtent,requestAsImageElement:!1,signal:a});case 18:if(v=t.sent,f=v.pixelData,e._dataParameters=d,!(0,_.Wi)(f.pixelBlock)){t.next=22;break}return t.abrupt("return",{extent:c,pixelBlock:null});case 22:return t.abrupt("return",{extent:c,pixelBlock:"vector-uv"===e.layer.rasterInfo.dataType?(0,_.Wg)((0,I.KC)(f.pixelBlock,"vector-uv")):f.pixelBlock});case 23:case"end":return t.stop()}}),t)})));return function(e,r,i,n){return t.apply(this,arguments)}}(),e}return(0,a.Z)(r,[{key:"updating",get:function(){return!this.attached||this._strategy.updating}},{key:"attach",value:function(){var e=this;this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new W({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add((0,p.YP)((function(){return e.layer.renderer}),(function(t){return e._updateSymbolizerParams(t)}),p.tX),"vector-field-view-update")}},{key:"detach",value:function(){this._strategy.destroy(),this.container.children.forEach((function(e){return e.destroy()})),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null}},{key:"getPixelData",value:function(){if(this.updating||!this.container.children.length)return null;var e=this.container.children[0].rawPixelData;return{extent:e.extent,pixelBlock:e.pixelBlock}}},{key:"hitTest",value:function(e){return new c.Z({attributes:{},geometry:e.clone(),layer:this.layer})}},{key:"update",value:function(e){this._strategy.update(e,this._symbolizerParams)}},{key:"redraw",value:function(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams)}},{key:"_canReuseVectorFieldData",value:function(e){var t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=this._dataParameters.symbolTileSize===e.symbolTileSize,n=this._dataParameters.bbox===e.bbox;return t&&r&&i&&n}},{key:"_getProjectedFullExtent",value:function(){var e=(0,i.Z)(u.mark((function e(t){var r;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,F.tB)(this.layer.fullExtent,t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.prev=8,e.next=11,(0,q.default)(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}});case 11:return r=e.sent.data.featureCollection.layers[0].layerDefinition.extent,e.abrupt("return",r?T.Z.fromJSON(r):null);case 15:return e.prev=15,e.t1=e.catch(8),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,this,[[0,6],[8,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_updateSymbolizerParams",value:function(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}}]),r}(B.r);(0,l._)([(0,d.Cb)()],J.prototype,"attached",void 0),(0,l._)([(0,d.Cb)()],J.prototype,"container",void 0),(0,l._)([(0,d.Cb)()],J.prototype,"layer",void 0),(0,l._)([(0,d.Cb)()],J.prototype,"timeExtent",void 0),(0,l._)([(0,d.Cb)()],J.prototype,"type",void 0),(0,l._)([(0,d.Cb)()],J.prototype,"view",void 0),(0,l._)([(0,d.Cb)()],J.prototype,"updating",null);var Y=J=(0,l._)([(0,y.j)("esri.views.2d.layers.imagery.VectorFieldView2D")],J),X=r(77284),K=r(3717),Q=r(2798),$=r(71169),ee=r(55486),te=r(26828),re=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments))._exportImageVersion=-1,e._highlightGraphics=new v.J,e.subview=null,e}return(0,a.Z)(r,[{key:"pixelData",get:function(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}},{key:"updating",get:function(){return!!(!this.subview||"updating"in this.subview&&this.subview.updating)}},{key:"hitTest",value:function(){var e=(0,i.Z)(u.mark((function e(t,r){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.subview?[{type:"graphic",graphic:this.subview.hitTest(t),layer:this.layer,mapPoint:t}]:null);case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"update",value:function(e){var t;null===(t=this.subview)||void 0===t||t.update(e)}},{key:"attach",value:function(){var e=this;this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new g.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:function(){return e.requestUpdate()},container:new w.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([(0,p.YP)((function(){var t;return null!==(t=e.layer.blendMode)&&void 0!==t?t:"normal"}),(function(t){return e.subview.container.blendMode=t}),p.tX),(0,p.YP)((function(){var t;return null!==(t=e.layer.effect)&&void 0!==t?t:null}),(function(t){return e.subview.container.effect=t}),p.tX),(0,p.YP)((function(){return e.layer.exportImageServiceParameters.version}),(function(t){t&&e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}),p.Z_),(0,p.YP)((function(){return e.timeExtent}),(function(t){e.subview.timeExtent=t,"redraw"in e.subview?e.requestUpdate():e.subview.redrawOrRefetch()}),p.Z_),this.layer.on("redraw",(function(){"redraw"in e.subview?e.subview.redraw():e.subview.redrawOrRefetch()})),(0,p.YP)((function(){return e.layer.renderer}),(function(){return e._setSubView()}))],"imagerylayerview-update")}},{key:"detach",value:function(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),null!==(e=this.subview)&&void 0!==e&&e.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,null!==(t=this._highlightView)&&void 0!==t&&t.destroy(),this._exportImageVersion=-1}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"highlight",value:function(e,t){var r=this;if(!((Array.isArray(e)?e[0]:h.Z.isCollection(e)?e.getItemAt(0):e)instanceof c.Z))return{remove:function(){}};var i=[];return Array.isArray(e)||h.Z.isCollection(e)?i=e.map((function(e){return e.clone()})):e instanceof c.Z&&(i=[e.clone()]),this._highlightGraphics.addMany(i),{remove:function(){r._highlightGraphics.removeMany(i)}}}},{key:"doRefresh",value:function(){var e=(0,i.Z)(u.mark((function e(){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return!this.subview||this.subview.updating}},{key:"_setSubView",value:function(){var e;if(this.view){var t=null===(e=this.layer.renderer)||void 0===e?void 0:e.type,r="imagery";if("vector-field"===t?r="imageryVF":"flow"===t&&(r="flow"),this.subview){var i;if(this.subview.type===r)return this._attachSubview(this.subview),void("flow"===this.subview.type&&this.subview.redrawOrRefetch());this._detachSubview(this.subview),null===(i=this.subview)||void 0===i||i.destroy()}this.subview="imagery"===r?new D({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===r?new Y({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new f.Z({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}}},{key:"_attachSubview",value:function(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}},{key:"_detachSubview",value:function(e){(null===e||void 0===e?void 0:e.attached)&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}}]),r}(function(e){var t=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).view=null,e}return(0,a.Z)(r,[{key:"fetchPopupFeatures",value:function(){var e=(0,i.Z)(u.mark((function e(t,r){var i,n,a,s,o,l,c,h,p,d,y;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.layer,t){e.next=3;break}throw new X.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});case 3:if(n=i.popupEnabled,a=(0,ee.V)(i,r),n&&!(0,_.Wi)(a)){e.next=6;break}throw new X.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:a});case 6:return e.next=8,a.getRequiredFields();case 8:return s=e.sent,(o=new $.Z).timeExtent=this.timeExtent,o.geometry=t,o.outFields=s,o.outSpatialReference=t.spatialReference,l=this.view.resolution,c="2d"===this.view.type?new K.Z(l,l,this.view.spatialReference):new K.Z(.5*l,.5*l,this.view.spatialReference),h=a.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},p=h.returnTopmostRaster,d=h.showNoDataRecords,y={returnDomainValues:!0,returnTopmostRaster:p,pixelSize:c,showNoDataRecords:d,signal:(0,_.pC)(r)?r.signal:null},e.abrupt("return",i.queryVisibleRasters(o,y).then((function(e){return e})));case 13:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e;return!!(0,A.Z)((0,U.Z)(r.prototype),"canResume",this).call(this)&&!(null!==(e=this.timeExtent)&&void 0!==e&&e.isEmpty)}}]),r}(e);return(0,l._)([(0,d.Cb)()],t.prototype,"layer",void 0),(0,l._)([(0,d.Cb)()],t.prototype,"suspended",void 0),(0,l._)([(0,d.Cb)(Q.qG)],t.prototype,"timeExtent",void 0),(0,l._)([(0,d.Cb)()],t.prototype,"view",void 0),t=(0,l._)([(0,y.j)("esri.views.layers.ImageryLayerView")],t)}((0,r(35270).Z)((0,m.y)(te.Z))));(0,l._)([(0,d.Cb)()],re.prototype,"pixelData",null),(0,l._)([(0,d.Cb)({readOnly:!0})],re.prototype,"updating",null),(0,l._)([(0,d.Cb)()],re.prototype,"subview",void 0);var ie=re=(0,l._)([(0,y.j)("esri.views.2d.layers.ImageryLayerView2D")],re)},80940:function(e,t,r){r.d(t,{Z:function(){return v}});var i=r(15671),n=r(43144),a=r(11752),s=r(61120),o=r(60136),u=r(29388),l=r(98248),c=(r(84615),r(61340),r(59537),r(65343),r(27445),r(48916)),h=r(9661),p=r(50222),d=r(34507),y=function(e){(0,o.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,n.Z)(r,[{key:"doRender",value:function(e){e.drawPhase===h.jx.HIGHLIGHT&&(0,a.Z)((0,s.Z)(r.prototype),"doRender",this).call(this,e)}},{key:"renderChildren",value:function(e){if(this.attributeView.bindTextures(e.context),this.children.some((function(e){return e.hasData}))){(0,a.Z)((0,s.Z)(r.prototype),"renderChildren",this).call(this,e);var t=e.painter.effects.highlight;t.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(d.lk.COLOR_BUFFER_BIT),this._renderChildren(e,t.defines.concat(["highlightAll"])),t.draw(e),t.unbind()}}}]),r}(p.Z),v=y=(0,l._)([(0,c.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],y)}}]);