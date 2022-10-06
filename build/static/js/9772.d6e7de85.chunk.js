"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[9772,312],{39772:function(e,t,r){r.r(t),r.d(t,{default:function(){return Te}});var i,n=r(15861),a=r(1413),l=r(15671),o=r(43144),s=r(97326),u=r(60136),c=r(29388),p=r(87757),d=r(98248),f=r(86755),y=r(48739),v=r(77284),m=r(39370),h=r(37924),g=r(9182),w=r(47862),b=r(71453),x=r(27970),S=r(68868),C=r(35569),M=(r(61340),r(96326)),_=r(48916),I=r(57),T=r(13179),Z=r(79143),L=r(70312),k=r(32387),P=r(4405),E=r(5900),R=r(15976),O=r(47004),j=r(13996),F=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.lods.length-1;(0,l.Z)(this,e),this.tileInfo=t,this.minLOD=r,this.maxLOD=i}return(0,o.Z)(e,[{key:"getAvailability",value:function(e,t,r){var i=this.tileInfo.lodAt(e);return!i||e<this.minLOD||e>this.maxLOD?"unavailable":i.cols&&i.rows?r>=i.cols[0]&&r<=i.cols[1]&&t>=i.rows[0]&&t<=i.rows[1]?"available":"unavailable":"available"}},{key:"fetchAvailability",value:function(){var e=(0,n.Z)(p.mark((function e(t,r,i,n){return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Yn)(n);case 2:return e.abrupt("return",this.getAvailability(t,r,i));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n){return e.apply(this,arguments)}}()},{key:"fetchAvailabilityUpsample",value:function(){var e=(0,n.Z)(p.mark((function e(t,r,i,n,a){var l,o;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Yn)(a);case 2:n.level=t,n.row=r,n.col=i,(l=this.tileInfo).updateTileInfo(n);case 7:if("unavailable"===(o=this.getAvailability(n.level,n.row,n.col))){e.next=10;break}return e.abrupt("return",o);case 10:if(l.upsampleTile(n)){e.next=12;break}return e.abrupt("return","unavailable");case 12:e.next=7;break;case 14:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n,a){return e.apply(this,arguments)}}()}]),e}(),A=r(5761),U=r(8410),V=(r(59537),r(65343),i=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(e){var i;return(0,l.Z)(this,r),(i=t.call(this,e)).fullExtent=null,i.id=null,i.tileInfo=null,i}return(0,o.Z)(r,[{key:"clone",value:function(){var e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}}]),r}(U.wq));(0,d._)([(0,C.Cb)({type:T.Z,json:{read:{source:"fullExtent"}}})],V.prototype,"fullExtent",void 0),(0,d._)([(0,C.Cb)({type:String,json:{read:{source:"id"}}})],V.prototype,"id",void 0),(0,d._)([(0,C.Cb)({type:j.Z,json:{read:{source:"tileInfo"}}})],V.prototype,"tileInfo",void 0);var N,D=V=i=(0,d._)([(0,_.j)("esri.layer.support.TileMatrixSet")],V),W=N=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(e){var i;return(0,l.Z)(this,r),(i=t.call(this,e)).id=null,i.title=null,i.description=null,i.legendUrl=null,i}return(0,o.Z)(r,[{key:"clone",value:function(){var e=new N;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}}]),r}(U.wq);(0,d._)([(0,C.Cb)({json:{read:{source:"id"}}})],W.prototype,"id",void 0),(0,d._)([(0,C.Cb)({json:{read:{source:"title"}}})],W.prototype,"title",void 0),(0,d._)([(0,C.Cb)({json:{read:{source:"abstract"}}})],W.prototype,"description",void 0),(0,d._)([(0,C.Cb)({json:{read:{source:"legendUrl"}}})],W.prototype,"legendUrl",void 0),(0,d._)([(0,C.Cb)({json:{read:{source:"isDefault"}}})],W.prototype,"isDefault",void 0),(0,d._)([(0,C.Cb)({json:{read:{source:"keywords"}}})],W.prototype,"keywords",void 0);var B,q=W=N=(0,d._)([(0,_.j)("esri.layer.support.WMTSStyle")],W),K=B=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(e){var i;return(0,l.Z)(this,r),(i=t.call(this,e)).fullExtent=null,i.fullExtents=null,i.imageFormats=null,i.id=null,i.layer=null,i.styles=null,i.tileMatrixSetId=null,i.tileMatrixSets=null,i}return(0,o.Z)(r,[{key:"description",get:function(){return this._get("description")},set:function(e){this._set("description",e)}},{key:"readFullExtent",value:function(e,t){return(e=t.fullExtent)?T.Z.fromJSON(e):null}},{key:"readFullExtents",value:function(e,t){var r;return null!==(r=t.fullExtents)&&void 0!==r&&r.length?t.fullExtents.map((function(e){return T.Z.fromJSON(e)})):t.tileMatrixSets.map((function(e){return T.Z.fromJSON(e.fullExtent)})).filter((function(e){return e}))}},{key:"imageFormat",get:function(){var e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e},set:function(e){var t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}},{key:"styleId",get:function(){var e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e},set:function(e){this._set("styleId",e)}},{key:"title",get:function(){return this._get("title")},set:function(e){this._set("title",e)}},{key:"tileMatrixSet",get:function(){var e=this;return this.tileMatrixSets?this.tileMatrixSets.find((function(t){return t.id===e.tileMatrixSetId})):null}},{key:"clone",value:function(){var e=new B;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}}]),r}(U.wq);(0,d._)([(0,C.Cb)()],K.prototype,"description",null),(0,d._)([(0,C.Cb)()],K.prototype,"fullExtent",void 0),(0,d._)([(0,M.r)("fullExtent",["fullExtent"])],K.prototype,"readFullExtent",null),(0,d._)([(0,C.Cb)({readOnly:!0})],K.prototype,"fullExtents",void 0),(0,d._)([(0,M.r)("fullExtents",["fullExtents","tileMatrixSets"])],K.prototype,"readFullExtents",null),(0,d._)([(0,C.Cb)()],K.prototype,"imageFormat",null),(0,d._)([(0,C.Cb)({json:{read:{source:"formats"}}})],K.prototype,"imageFormats",void 0),(0,d._)([(0,C.Cb)()],K.prototype,"id",void 0),(0,d._)([(0,C.Cb)()],K.prototype,"layer",void 0),(0,d._)([(0,C.Cb)()],K.prototype,"styleId",null),(0,d._)([(0,C.Cb)({type:y.Z.ofType(q),json:{read:{source:"styles"}}})],K.prototype,"styles",void 0),(0,d._)([(0,C.Cb)({value:null,json:{write:{ignoreOrigin:!0}}})],K.prototype,"title",null),(0,d._)([(0,C.Cb)()],K.prototype,"tileMatrixSetId",void 0),(0,d._)([(0,C.Cb)({readOnly:!0})],K.prototype,"tileMatrixSet",null),(0,d._)([(0,C.Cb)({type:y.Z.ofType(D),json:{read:{source:"tileMatrixSets"}}})],K.prototype,"tileMatrixSets",void 0);var H,J,Y=K=B=(0,d._)([(0,_.j)("esri.layers.support.WMTSSublayer")],K),z=r(37762),G=r(29439),Q=r(77822),X=r(3717),$=r(42930),ee=r(51033),te=r(85886),re=r(78174),ie=90.71428571428571;function ne(e){var t=e.replace(/ows:/gi,"");if(!se("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new v.Z("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function ae(e,t){var r,i,n;e=e.replace(/ows:/gi,"");var a=(new DOMParser).parseFromString(e,"text/xml").documentElement,l=new Map,o=new Map,s=se("Contents",a);if(!s)throw new v.Z("wmtslayer:wmts-capabilities-xml-is-not-valid");var u,c,p=null===(r=se("OperationsMetadata",a))||void 0===r?void 0:r.querySelector("[name='GetTile']"),d=null===p||void 0===p?void 0:p.getElementsByTagName("Get"),f=d&&Array.prototype.slice.call(d),y=null!==(i=(null===t||void 0===t||null===(n=t.url)||void 0===n?void 0:n.indexOf("https"))>-1)&&void 0!==i&&i,m=t.serviceMode,h=t&&t.url;if(f&&f.length&&f.some((function(e){var t=se("Constraint",e);return!t||de("AllowedValues","Value",m,t)?(h=e.attributes[0].nodeValue,!0):(!t||de("AllowedValues","Value","RESTful",t)||de("AllowedValues","Value","REST",t)?c=e.attributes[0].nodeValue:t&&!de("AllowedValues","Value","KVP",t)||(u=e.attributes[0].nodeValue),!1)})),!h)if(c)h=c,m="RESTful";else if(u)h=u,m="KVP";else{var g=se("ServiceMetadataURL",a);h=g&&g.getAttribute("xlink:href")}var w=h.indexOf("1.0.0/");-1===w&&"RESTful"===m?h+="/":w>-1&&(h=h.substring(0,w)),"KVP"===m&&(h+=w>-1?"":"?"),y&&(h=h.replace(/^http:/i,"https:"));var b=pe("ServiceIdentification>ServiceTypeVersion",a),x=pe("ServiceIdentification>AccessConstraints",a),S=/^none$/i.test(x)?null:x,C=ue("Layer",s),M=ue("TileMatrixSet",s),_=C.map((function(e){var t=pe("Identifier",e);return l.set(t,e),fe(t,e,M,y,b)}));return{copyright:S,dimensionMap:o,layerMap:l,layers:_,serviceMode:m,tileUrl:h}}function le(e){return e.layers.forEach((function(e){e.tileMatrixSets.forEach((function(e){var t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((function(r){r.scale=96*r.scale/t.dpi,r.resolution=Ce(t.spatialReference.wkid,r.scale*ie/96,e.id)})),t.dpi=96)}))})),e}function oe(e){return e.nodeType===Node.ELEMENT_NODE}function se(e,t){for(var r=0;r<t.childNodes.length;r++){var i=t.childNodes[r];if(oe(i)&&i.nodeName===e)return i}return null}function ue(e,t){for(var r=[],i=0;i<t.childNodes.length;i++){var n=t.childNodes[i];oe(n)&&n.nodeName===e&&r.push(n)}return r}function ce(e,t){for(var r=[],i=0;i<t.childNodes.length;i++){var n=t.childNodes[i];oe(n)&&n.nodeName===e&&r.push(n)}return r.map((function(e){return e.textContent}))}function pe(e,t){return e.split(">").forEach((function(e){t&&(t=se(e,t))})),t&&t.textContent}function de(e,t,r,i){var n;return Array.prototype.slice.call(i.childNodes).some((function(i){if(i.nodeName.includes(e)){var a=se(t,i),l=a&&a.textContent;if(l===r||r.split(":")&&r.split(":")[1]===l)return n=i,!0}return!1})),n}function fe(e,t,r,i,n){var a=pe("Abstract",t),l=ce("Format",t);return{id:e,fullExtent:me(t),fullExtents:he(t),description:a,formats:l,styles:ge(t,i),title:pe("Title",t),tileMatrixSets:we(n,t,r)}}function ye(e,t){var r,i=[],n=null===(r=e.layerMap)||void 0===r?void 0:r.get(t);if(n){var a,l,o,s,u=ue("ResourceURL",n),c=ue("Dimension",n);return c.length&&(a=pe("Identifier",c[0]),l=ce("Default",c[0])||ce("Value",c[0])),c.length>1&&(o=pe("Identifier",c[1]),s=ce("Default",c[1])||ce("Value",c[1])),e.dimensionMap.set(t,{dimensions:l,dimensions2:s}),u.forEach((function(e){var t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(a&&l.length)if(t.includes("{"+a+"}"))t=t.replace("{"+a+"}","{dimensionValue}");else{var r=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");r>-1&&(t=t.substring(0,r)+"{dimensionValue}"+t.substring(r+a.length+2))}if(o&&s.length)if(t.includes("{"+o+"}"))t=t.replace("{"+o+"}","{dimensionValue2}");else{var n=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}");n>-1&&(t=t.substring(0,n)+"{dimensionValue2}"+t.substring(n+o.length+2))}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),i}}function ve(e,t,r,i,n,a,l,o){var s,u,c=function(e,t,r){var i=ye(e,t),n=i.filter((function(e){return e.format===r}));return n.length?n:i}(e,t,i);if(!((null===c||void 0===c?void 0:c.length)>0))return"";var p=e.dimensionMap,d=null===(s=p.get(t).dimensions)||void 0===s?void 0:s[0],f=null===(u=p.get(t).dimensions2)||void 0===u?void 0:u[0];return c[l%c.length].template.replace(/\{Style\}/gi,n).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,d).replace(/\{dimensionValue2\}/gi,f)}function me(e){var t=se("WGS84BoundingBox",e),r=t?pe("LowerCorner",t).split(" "):["-180","-90"],i=t?pe("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function he(e){var t=[];return(0,re.h)(e,{BoundingBox:function(e){if(e.getAttribute("crs")){var r,i,n,a,l=e.getAttribute("crs").toLowerCase(),o=be(l),s=l.includes("epsg")&&(0,te.A)(o.wkid);(0,re.h)(e,{LowerCorner:function(e){var t,n,a;t=e.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),n=(0,G.Z)(t,2),r=n[0],i=n[1],s&&(r=(a=[i,r])[0],i=a[1])},UpperCorner:function(e){var t,r,i;t=e.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),r=(0,G.Z)(t,2),n=r[0],a=r[1],s&&(n=(i=[a,n])[0],a=i[1])}}),t.push({xmin:r,ymin:i,xmax:n,ymax:a,spatialReference:o})}}}),t}function ge(e,t){return ue("Style",e).map((function(e){var r=se("LegendURL",e),i=se("Keywords",e),n=i&&ce("Keyword",i),a=r&&r.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:pe("Abstract",e),id:pe("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:n,legendUrl:a,title:pe("Title",e)}}))}function we(e,t,r){return ue("TileMatrixSetLink",t).map((function(t){return function(e,t,r){var i=se("TileMatrixSet",t).textContent,n=ce("TileMatrix",t),a=r.find((function(e){var t=se("Identifier",e),r=t&&t.textContent;return!!(r===i||i.split(":")&&i.split(":")[1]===r)})),l=se("TileMatrixSetLimits",t),o=l&&ue("TileMatrixLimits",l),s=new Map;if(null!==o&&void 0!==o&&o.length){var u,c=(0,z.Z)(o);try{for(c.s();!(u=c.n()).done;){var p=u.value,d=se("TileMatrix",p).textContent,f=+se("MinTileRow",p).textContent,y=+se("MaxTileRow",p).textContent,v=+se("MinTileCol",p).textContent,m=+se("MaxTileCol",p).textContent;s.set(d,{minCol:v,maxCol:m,minRow:f,maxRow:y})}}catch(_){c.e(_)}finally{c.f()}}var h=pe("SupportedCRS",a).toLowerCase(),g=function(e,t){return xe(se("TileMatrix",e),t)}(a,h),w=g.spatialReference,b=se("TileMatrix",a),x=[parseInt(pe("TileWidth",b),10),parseInt(pe("TileHeight",b),10)],S=[];n.length?n.forEach((function(e,t){var r=de("TileMatrix","Identifier",e,a);S.push(Se(r,h,t,i,s))})):ue("TileMatrix",a).forEach((function(e,t){S.push(Se(e,h,t,i,s))}));var C=function(e,t,r,i,n){var a,l,o,s,u,c,p=se("BoundingBox",t);if(p&&(a=pe("LowerCorner",p).split(" "),l=pe("UpperCorner",p).split(" ")),a&&a.length>1&&l&&l.length>1)o=parseFloat(a[0]),u=parseFloat(a[1]),s=parseFloat(l[0]),c=parseFloat(l[1]);else{var d=se("TileMatrix",t),f=parseInt(pe("MatrixWidth",d),10),y=parseInt(pe("MatrixHeight",d),10);o=r.x,c=r.y,s=o+f*i[0]*n.resolution,u=c-y*i[1]*n.resolution}return function(e,t){return"1.0.0"===e&&(0,te.A)(t.wkid)}(e,r.spatialReference)?new T.Z(u,o,c,s,r.spatialReference):new T.Z(o,u,s,c,r.spatialReference)}(e,a,g,x,S[0]).toJSON(),M=new j.Z({dpi:96,spatialReference:w,size:x,origin:g,lods:S}).toJSON();return{id:i,fullExtent:C,tileInfo:M}}(e,t,r)}))}function be(e){e=e.toLowerCase();var t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);var r=function(e){return e.includes("crs84")||e.includes("crs:84")?H.CRS84:e.includes("crs83")||e.includes("crs:83")?H.CRS83:e.includes("crs27")||e.includes("crs:27")?H.CRS27:null}(e);return(0,Q.pC)(r)&&(t=r),{wkid:t}}function xe(e,t){var r=be(t),i=pe("TopLeftCorner",e).split(" ").map((function(e){return parseFloat(e)})),n=(0,G.Z)(i,2),a=n[0],l=n[1],o=t.includes("epsg")&&(0,te.A)(r.wkid);return new X.Z(o?{x:l,y:a,spatialReference:r}:{x:a,y:l,spatialReference:r})}function Se(e,t,r,i,n){var a,l=be(t),o=pe("Identifier",e),s=parseFloat(pe("ScaleDenominator",e)),u=Ce(l.wkid,s,i);s*=96/ie;var c=+pe("MatrixWidth",e),p=+pe("MatrixHeight",e),d=null!==(a=n.get(o))&&void 0!==a?a:{},f=d.maxCol,y=void 0===f?c-1:f,v=d.maxRow,m=void 0===v?p-1:v,h=d.minCol,g=void 0===h?0:h,w=d.minRow,b=void 0===w?0:w,x=xe(e,t);return{cols:[g,y],level:r,levelValue:o,origin:[x.x,x.y],scale:s,resolution:u,rows:[b,m]}}function Ce(e,t,r){return 7*t/25e3/(ee.Z.hasOwnProperty(""+e)?ee.Z.values[ee.Z[e]]:"default028mm"===r?6370997*Math.PI/180:(0,$.e8)(e).metersPerDegree)}(J=H||(H={}))[J.CRS84=4326]="CRS84",J[J.CRS83=4269]="CRS83",J[J.CRS27=4267]="CRS27";var Me={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},_e=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]),Ie=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;(0,l.Z)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n)))._sublayersHandles=new m.Z,e.copyright="",e.customParameters=null,e.customLayerParameters=null,e.fullExtent=null,e.operationalLayerType="WebTiledLayer",e.resourceInfo=null,e.serviceMode="RESTful",e.sublayers=null,e.type="wmts",e.version="1.0.0",e.own([(0,x.YP)((function(){return e.activeLayer}),(function(t,r){r&&(r.layer=null),t&&(t.layer=(0,s.Z)(e))}),x.Z_),(0,x.YP)((function(){return e.sublayers}),(function(t,r){r&&(r.forEach((function(e){e.layer=null})),e._sublayersHandles.removeAll(),e._sublayersHandles=null),t&&(t.forEach((function(t){t.layer=(0,s.Z)(e)})),e._sublayersHandles||(e._sublayersHandles=new m.Z),e._sublayersHandles.add([t.on("after-add",(function(t){t.item.layer=(0,s.Z)(e)})),t.on("after-remove",(function(e){e.item.layer=null}))]))}),x.Z_)]),e}return(0,o.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,a.Z)({url:e},t):e}},{key:"load",value:function(e){var t=this;if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(b.r9).then((function(){return t._fetchService(e)})).catch((function(e){throw(0,b.r9)(e),new v.Z("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}},{key:"activeLayer",get:function(){return this._get("activeLayer")},set:function(e){this._set("activeLayer",e)}},{key:"readActiveLayerFromService",value:function(e,t,r){var i=this;this.activeLayer||(this.activeLayer=new Y);var n=t.layers.find((function(e){return e.id===i.activeLayer.id}));return n||(n=t.layers[0]),this.activeLayer.read(n,r),this.activeLayer}},{key:"readActiveLayerFromItemOrWebDoc",value:function(e,t){var r=t.templateUrl,i=t.wmtsInfo,n=r?this._getLowerCasedUrlParams(r):null,a=null===i||void 0===i?void 0:i.layerIdentifier,l=null,o=null===i||void 0===i?void 0:i.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(l=o[0]):l=o);var s=null===n||void 0===n?void 0:n.format,u=null===n||void 0===n?void 0:n.style;return new Y({id:a,imageFormat:s,styleId:u,tileMatrixSetId:l})}},{key:"writeActiveLayer",value:function(e,t,r,i){var n=this.activeLayer;t.templateUrl=this.getUrlTemplate(n.id,n.tileMatrixSetId,n.imageFormat,n.styleId);var l=(0,w.hS)("tileMatrixSet.tileInfo",n);t.tileInfo=l?l.toJSON(i):null,t.wmtsInfo=(0,a.Z)((0,a.Z)({},t.wmtsInfo),{},{layerIdentifier:n.id,tileMatrixSet:n.tileMatrixSetId})}},{key:"readCustomParameters",value:function(e,t){var r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}},{key:"fullExtents",get:function(){return this.activeLayer.fullExtents}},{key:"readServiceMode",value:function(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}},{key:"readSublayersFromService",value:function(e,t,r){return function(e,t){return e.map((function(e){var r=new Y;return r.read(e,t),r}))}(t.layers,r)}},{key:"supportedSpatialReferences",get:function(){return this.activeLayer.tileMatrixSets.map((function(e){return e.tileInfo.spatialReference})).toArray()}},{key:"tilemapCache",get:function(){var e,t,r=null===(e=this.activeLayer)||void 0===e||null===(t=e.tileMatrixSet)||void 0===t?void 0:t.tileInfo;return new F(r)}},{key:"title",get:function(){var e,t;return null!==(e=null===(t=this.activeLayer)||void 0===t?void 0:t.title)&&void 0!==e?e:"Layer"},set:function(e){e?this._override("title",e):this._clearOverride("title")}},{key:"url",get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}},{key:"createWebTileLayer",value:function(e){var t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,n=new A.B({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(n.customLayerParameters=this.customLayerParameters),this.customParameters&&(n.customParameters=this.customParameters),new L.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:n})}},{key:"fetchTile",value:function(e,t,r){var i=this.getTileUrl(e,t,r);return(0,f.default)(i,{responseType:"image"}).then((function(e){return e.data}))}},{key:"findSublayerById",value:function(e){return this.sublayers.find((function(t){return t.id===e}))}},{key:"getTileUrl",value:function(e,t,r){var i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],n=i?i.levelValue?i.levelValue:"".concat(i.level):"".concat(e),a=this.resourceInfo?"":ve({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,n,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,n).replace(/\{row\}/gi,"".concat(t)).replace(/\{col\}/gi,"".concat(r))),a=this._appendCustomLayerParameters(a)}},{key:"getUrlTemplate",value:function(e,t,r,i){if(!this.resourceInfo){var n=function(e,t,r,i){var n=e.dimensionMap,a=ye(e,t),l="";if(a&&a.length>0){var o=n.get(t).dimensions&&n.get(t).dimensions[0],s=n.get(t).dimensions2&&n.get(t).dimensions2[0];(l=a[0].template).indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=(l=(l=(l=(l=(l=(l=l.replace(/\{Style\}/gi,i)).replace(/\{TileMatrixSet\}/gi,r)).replace(/\{TileMatrix\}/gi,"{level}")).replace(/\{TileRow\}/gi,"{row}")).replace(/\{TileCol\}/gi,"{col}")).replace(/\{dimensionValue\}/gi,o)).replace(/\{dimensionValue2\}/gi,s)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(n)return n}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){var a="";return Me[r.toLowerCase()]&&(a=Me[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+a}return""}},{key:"_fetchService",value:function(){var e=(0,n.Z)(p.mark((function e(t){var r,i;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.resourceInfo){e.next=4;break}"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),r={ssl:!1,data:this.resourceInfo},e.next=25;break;case 4:return e.prev=4,e.next=7,this._getCapabilities(this.serviceMode,t);case 7:ne((r=e.sent).data),e.next=25;break;case 11:return e.prev=11,e.t0=e.catch(4),i="KVP"===this.serviceMode?"RESTful":"KVP",e.prev=14,e.next=17,this._getCapabilities(i,t);case 17:ne((r=e.sent).data),this.serviceMode=i,e.next=25;break;case 22:throw e.prev=22,e.t1=e.catch(14),new v.Z("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e.t1});case 25:this.resourceInfo?r.data=le(r.data):r.data=ae(r.data,{serviceMode:this.serviceMode,url:this.url}),r.data&&this.read(r.data,{origin:"service"});case 26:case"end":return e.stop()}}),e,this,[[4,11],[14,22]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_getCapabilities",value:function(){var e=(0,n.Z)(p.mark((function e(t,r){var i;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this._getCapabilitiesUrl(t),e.next=3,(0,f.default)(i,(0,a.Z)((0,a.Z)({},r),{},{responseType:"text"}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getTileMatrixSetById",value:function(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((function(t){return t.id===e}))}},{key:"_appendCustomParameters",value:function(e){return this._appendParameters(e,this.customParameters)}},{key:"_appendCustomLayerParameters",value:function(e){return this._appendParameters(e,(0,a.Z)((0,a.Z)({},(0,h.d9)(this.customParameters)),this.customLayerParameters))}},{key:"_appendParameters",value:function(e,t){var r=(0,S.mN)(e),i=(0,a.Z)((0,a.Z)({},r.query),t),n=(0,S.B7)(i);return""===n?r.path:"".concat(r.path,"?").concat(n)}},{key:"_getCapabilitiesUrl",value:function(e){this.url=this.url.split("?")[0];var t="KVP"===e?"".concat(this.url,"?request=GetCapabilities&service=WMTS&version=").concat(this.version):"".concat(this.url,"/").concat(this.version,"/WMTSCapabilities.xml");return this._appendCustomParameters(t)}},{key:"_getLowerCasedUrlParams",value:function(e){if(!e)return null;var t=(0,S.mN)(e).query;if(!t)return null;var r={};return Object.keys(t).forEach((function(e){r[e.toLowerCase()]=t[e]})),r}},{key:"_mergeParams",value:function(e,t){var r=this._getLowerCasedUrlParams(t);if(r){var i=Object.keys(r);i.length&&(e=e?(0,h.d9)(e):{},i.forEach((function(t){e.hasOwnProperty(t)||_e.has(t)||(e[t]=r[t])})))}return e}}]),r}((0,k.h)((0,R.Q)((0,O.M)((0,P.q)((0,E.I)((0,g.R)(Z.Z)))))));(0,d._)([(0,C.Cb)()],Ie.prototype,"dimensionMap",void 0),(0,d._)([(0,C.Cb)()],Ie.prototype,"layerMap",void 0),(0,d._)([(0,C.Cb)({type:Y,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],Ie.prototype,"activeLayer",null),(0,d._)([(0,M.r)("service","activeLayer",["layers"])],Ie.prototype,"readActiveLayerFromService",null),(0,d._)([(0,M.r)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],Ie.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,d._)([(0,I.c)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:j.Z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],Ie.prototype,"writeActiveLayer",null),(0,d._)([(0,C.Cb)({type:String,value:"",json:{write:!0}})],Ie.prototype,"copyright",void 0),(0,d._)([(0,C.Cb)({type:["show","hide"]})],Ie.prototype,"listMode",void 0),(0,d._)([(0,C.Cb)({json:{read:!0,write:!0}})],Ie.prototype,"blendMode",void 0),(0,d._)([(0,C.Cb)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],Ie.prototype,"customParameters",void 0),(0,d._)([(0,M.r)(["portal-item","web-document"],"customParameters")],Ie.prototype,"readCustomParameters",null),(0,d._)([(0,C.Cb)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],Ie.prototype,"customLayerParameters",void 0),(0,d._)([(0,C.Cb)({type:T.Z,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],Ie.prototype,"fullExtent",void 0),(0,d._)([(0,C.Cb)({readOnly:!0})],Ie.prototype,"fullExtents",null),(0,d._)([(0,C.Cb)({type:["WebTiledLayer"]})],Ie.prototype,"operationalLayerType",void 0),(0,d._)([(0,C.Cb)()],Ie.prototype,"resourceInfo",void 0),(0,d._)([(0,C.Cb)()],Ie.prototype,"serviceMode",void 0),(0,d._)([(0,M.r)(["portal-item","web-document"],"serviceMode",["templateUrl"])],Ie.prototype,"readServiceMode",null),(0,d._)([(0,C.Cb)({type:y.Z.ofType(Y)})],Ie.prototype,"sublayers",void 0),(0,d._)([(0,M.r)("service","sublayers",["layers"])],Ie.prototype,"readSublayersFromService",null),(0,d._)([(0,C.Cb)({readOnly:!0})],Ie.prototype,"supportedSpatialReferences",null),(0,d._)([(0,C.Cb)({readOnly:!0})],Ie.prototype,"tilemapCache",null),(0,d._)([(0,C.Cb)({json:{read:{source:"title"}}})],Ie.prototype,"title",null),(0,d._)([(0,C.Cb)({json:{read:!1},readOnly:!0,value:"wmts"})],Ie.prototype,"type",void 0),(0,d._)([(0,C.Cb)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],Ie.prototype,"url",null),(0,d._)([(0,C.Cb)()],Ie.prototype,"version",void 0);var Te=Ie=(0,d._)([(0,_.j)("esri.layers.WMTSLayer")],Ie)},70312:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var i=r(37762),n=r(1413),a=r(15671),l=r(43144),o=r(60136),s=r(29388),u=r(98248),c=(r(32224),r(86755)),p=r(77284),d=r(9182),f=r(51370),y=r(68868),v=r(35569),m=(r(59537),r(65343),r(61340),r(96326)),h=r(48916),g=r(57),w=r(79143),b=r(32387),x=r(4405),S=r(5900),C=r(15976),M=r(47004),_=r(22400),I=r(13996),T=r(5761),Z=r(13179),L=r(26208),k=r(3717),P=function(e){(0,o.Z)(r,e);var t=(0,s.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).copyright="",e.fullExtent=new Z.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,L.Z.WebMercator),e.legendEnabled=!1,e.isReference=null,e.popupEnabled=!1,e.spatialReference=L.Z.WebMercator,e.subDomains=null,e.tileInfo=new I.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new k.Z({x:-20037508.342787,y:20037508.342787,spatialReference:L.Z.WebMercator}),spatialReference:L.Z.WebMercator,lods:[new _.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new _.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new _.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new _.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new _.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new _.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new _.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new _.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new _.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new _.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new _.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new _.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new _.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new _.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new _.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new _.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new _.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new _.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new _.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new _.Z({level:19,scale:1128.497176,resolution:.298582141647617}),new _.Z({level:20,scale:564.248588,resolution:.14929107082380833}),new _.Z({level:21,scale:282.124294,resolution:.07464553541190416}),new _.Z({level:22,scale:141.062147,resolution:.03732276770595208}),new _.Z({level:23,scale:70.5310735,resolution:.01866138385297604})]}),e.type="web-tile",e.urlTemplate=null,e.wmtsInfo=null,e}return(0,l.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,n.Z)({urlTemplate:e},t):e}},{key:"load",value:function(e){var t=this,r=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var r=new y.R9(t.urlTemplate);!(t.subDomains&&t.subDomains.length>0)&&r.authority.includes("{subDomain}")&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new p.Z("web-tile-layer:load","WebTileLayer (title: '".concat(t.title,"', id: '").concat(t.id,"') ").concat(e))}));return this.addResolvingPromise(r),Promise.resolve(this)}},{key:"levelValues",get:function(){var e=[];if(!this.tileInfo)return null;var t,r=(0,i.Z)(this.tileInfo.lods);try{for(r.s();!(t=r.n()).done;){var n=t.value;e[n.level]=n.levelValue||n.level}}catch(a){r.e(a)}finally{r.f()}return e}},{key:"readSpatialReference",value:function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&L.Z.fromJSON(t.fullExtent.spatialReference)}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,n=new y.R9(t),a=n.scheme?n.scheme+"://":"//",l=a+n.authority+"/";if(n.authority.includes("{subDomain}")){if(r&&r.length>0&&n.authority.split(".").length>1){var o,s=(0,i.Z)(r);try{for(s.s();!(o=s.n()).done;){var u=o.value;e.push(a+n.authority.replace(/\{subDomain\}/gi,u)+"/")}}catch(c){s.e(c)}finally{s.f()}}}else e.push(l);return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new y.R9(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}},{key:"readUrlTemplate",value:function(e,t){return e||t.templateUrl}},{key:"writeUrlTemplate",value:function(e,t){e&&(0,y.oC)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=(0,y.Fv)(e)),t.templateUrl=e}},{key:"fetchTile",value:function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=i.signal,l=this.getTileUrl(e,t,r),o={responseType:"image",signal:a,query:(0,n.Z)({},this.refreshParameters)};return(0,c.default)(l,o).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,t,r){var i=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+(0,f.gx)(this.urlPath,{level:i,z:i,col:r,x:r,row:t,y:t})}}]),r}((0,b.h)((0,C.Q)((0,M.M)((0,x.q)((0,S.I)((0,d.R)(w.Z)))))));(0,u._)([(0,v.Cb)({type:String,value:"",json:{write:!0}})],P.prototype,"copyright",void 0),(0,u._)([(0,v.Cb)({type:Z.Z,json:{write:!0},nonNullable:!0})],P.prototype,"fullExtent",void 0),(0,u._)([(0,v.Cb)({readOnly:!0,json:{read:!1,write:!1}})],P.prototype,"legendEnabled",void 0),(0,u._)([(0,v.Cb)({type:["show","hide"]})],P.prototype,"listMode",void 0),(0,u._)([(0,v.Cb)({json:{read:!0,write:!0}})],P.prototype,"blendMode",void 0),(0,u._)([(0,v.Cb)()],P.prototype,"levelValues",null),(0,u._)([(0,v.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],P.prototype,"isReference",void 0),(0,u._)([(0,v.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],P.prototype,"operationalLayerType",void 0),(0,u._)([(0,v.Cb)({readOnly:!0,json:{read:!1,write:!1}})],P.prototype,"popupEnabled",void 0),(0,u._)([(0,v.Cb)({type:L.Z})],P.prototype,"spatialReference",void 0),(0,u._)([(0,m.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],P.prototype,"readSpatialReference",null),(0,u._)([(0,v.Cb)({type:[String],json:{write:!0}})],P.prototype,"subDomains",void 0),(0,u._)([(0,v.Cb)({type:I.Z,json:{write:!0}})],P.prototype,"tileInfo",void 0),(0,u._)([(0,v.Cb)({readOnly:!0})],P.prototype,"tileServers",null),(0,u._)([(0,v.Cb)({json:{read:!1}})],P.prototype,"type",void 0),(0,u._)([(0,v.Cb)()],P.prototype,"urlPath",null),(0,u._)([(0,v.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],P.prototype,"urlTemplate",void 0),(0,u._)([(0,m.r)("urlTemplate",["urlTemplate","templateUrl"])],P.prototype,"readUrlTemplate",null),(0,u._)([(0,g.c)("urlTemplate",{templateUrl:{type:String}})],P.prototype,"writeUrlTemplate",null),(0,u._)([(0,v.Cb)({type:T.B,json:{write:!0}})],P.prototype,"wmtsInfo",void 0);var E=P=(0,u._)([(0,h.j)("esri.layers.WebTileLayer")],P)},85886:function(e,t,r){r.d(t,{A:function(){return a}});var i=r(29439),n=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function a(e){return n.some((function(t){var r=(0,i.Z)(t,2),n=r[0],a=r[1];return e>=n&&e<=a}))}},78174:function(e,t,r){r.d(t,{H:function(){return o},h:function(){return l}});var i=r(37762),n=r(87757),a=n.mark(o);function l(e,t){var r,n=(0,i.Z)(e.children);try{for(n.s();!(r=n.n()).done;){var a=r.value;if(a.localName in t){var o=t[a.localName];if("function"==typeof o){var s=o(a);s&&l(a,s)}else l(a,o)}}}catch(u){n.e(u)}finally{n.f()}}function o(e,t){var r,l,s,u;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=(0,i.Z)(e.children),n.prev=1,r.s();case 3:if((l=r.n()).done){n.next=15;break}if(!((s=l.value).localName in t)){n.next=13;break}if("function"!=typeof(u=t[s.localName])){n.next=12;break}return n.next=10,u(s);case 10:n.next=13;break;case 12:return n.delegateYield(o(s,u),"t0",13);case 13:n.next=3;break;case 15:n.next=20;break;case 17:n.prev=17,n.t1=n.catch(1),r.e(n.t1);case 20:return n.prev=20,r.f(),n.finish(20);case 23:case"end":return n.stop()}}),a,null,[[1,17,20,23]])}},5761:function(e,t,r){r.d(t,{B:function(){return f}});var i,n=r(15671),a=r(43144),l=r(60136),o=r(29388),s=r(98248),u=r(8410),c=r(37924),p=r(35569),d=(r(61340),r(48916)),f=i=function(e){(0,l.Z)(r,e);var t=(0,o.Z)(r);function r(e){return(0,n.Z)(this,r),t.call(this,e)}return(0,a.Z)(r,[{key:"clone",value:function(){return new i({customLayerParameters:(0,c.d9)(this.customLayerParameters),customParameters:(0,c.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}}]),r}(u.wq);(0,s._)([(0,p.Cb)({json:{type:Object,write:!0}})],f.prototype,"customLayerParameters",void 0),(0,s._)([(0,p.Cb)({json:{type:Object,write:!0}})],f.prototype,"customParameters",void 0),(0,s._)([(0,p.Cb)({type:String,json:{write:!0}})],f.prototype,"layerIdentifier",void 0),(0,s._)([(0,p.Cb)({type:String,json:{write:!0}})],f.prototype,"tileMatrixSet",void 0),(0,s._)([(0,p.Cb)({type:String,json:{write:!0}})],f.prototype,"url",void 0),f=i=(0,s._)([(0,d.j)("esri.layer.support.WMTSLayerInfo")],f)}}]);