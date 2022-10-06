"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[244],{77314:function(e,t,i){i.d(t,{Z:function(){return f}});var n=i(15671),r=i(43144),s=i(60136),a=i(29388),o=i(98248),u=i(82447),l=i(35569),c=(i(59537),i(65343),i(61340),i(48916)),h=function(e){(0,s.Z)(i,e);var t=(0,a.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).tiles=new Map,r}return(0,r.Z)(i,[{key:"destroy",value:function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}},{key:"updating",get:function(){return this.isUpdating()}},{key:"acquireTile",value:function(e){var t=this,i=this.createTile(e);return i.once("isReady",(function(){return t.notifyChange("updating")})),this.tiles.set(e.id,i),i}},{key:"forceAttributeTextureUpload",value:function(){}},{key:"forEachTile",value:function(e){this.tiles.forEach(e)}},{key:"releaseTile",value:function(e){this.tiles.delete(e.key.id),this.disposeTile(e)}},{key:"isUpdating",value:function(){var e=!0;return this.tiles.forEach((function(t){e=e&&t.isReady})),!e}},{key:"setHighlight",value:function(){}},{key:"invalidateLabels",value:function(){}},{key:"requestUpdate",value:function(){this.layerView.requestUpdate()}}]),i}(u.r);(0,o._)([(0,l.Cb)()],h.prototype,"layer",void 0),(0,o._)([(0,l.Cb)()],h.prototype,"layerView",void 0),(0,o._)([(0,l.Cb)()],h.prototype,"tileInfoView",void 0),(0,o._)([(0,l.Cb)()],h.prototype,"updating",null);var f=h=(0,o._)([(0,c.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],h)},244:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}});var n=i(15671),r=i(43144),s=i(60136),a=i(29388),o=i(98248),u=(i(84615),i(61340),i(59537),i(65343),i(27445),i(48916)),l=i(40087),c=i(88977),h=i(77314),f=function(){function e(){(0,n.Z)(this,e),this.gradient=null,this.height=512,this.width=512}return(0,r.Z)(e,[{key:"render",value:function(e){(0,l.hy)(e,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}]),e}(),y=function(e){(0,s.Z)(i,e);var t=(0,a.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e))._intensityInfo={minDensity:0,maxDensity:0},r.type="heatmap",r.featuresView={attributeView:{initialize:function(){},requestUpdate:function(){}},requestRender:function(){}},r._container=new c.s(e.tileInfoView),r}return(0,r.Z)(i,[{key:"createTile",value:function(e){var t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}},{key:"onConfigUpdate",value:function(){var e=this,t=this.layer.renderer;if("heatmap"===t.type){var i=t.minDensity,n=t.maxDensity,r=t.colorStops;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=n,this._gradient=(0,l.uI)(r),this.tiles.forEach((function(t){var r=t.bitmap.source;r&&(r.minDensity=i,r.maxDensity=n,r.gradient=e._gradient,t.bitmap.invalidateTexture())}))}}},{key:"hitTest",value:function(){return Promise.resolve([])}},{key:"install",value:function(e){e.addChild(this._container)}},{key:"uninstall",value:function(e){this._container.removeAllChildren(),e.removeChild(this._container)}},{key:"disposeTile",value:function(e){this._container.removeChild(e),e.destroy()}},{key:"supportsRenderer",value:function(e){return e&&"heatmap"===e.type}},{key:"onTileData",value:function(e){var t=this.tiles.get(e.tileKey);if(t){var i=e.intensityInfo,n=this._intensityInfo,r=n.minDensity,s=n.maxDensity,a=t.bitmap.source||new f;a.intensities=i&&i.matrix||null,a.minDensity=r,a.maxDensity=s,a.gradient=this._gradient,t.bitmap.source=a,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}}},{key:"onTileError",value:function(e){console.error(e)}},{key:"lockGPUUploads",value:function(){}},{key:"unlockGPUUploads",value:function(){}},{key:"fetchResource",value:function(e,t){return console.error(e),Promise.reject()}}]),i}(h.Z),d=y=(0,o._)([(0,u.j)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],y)}}]);