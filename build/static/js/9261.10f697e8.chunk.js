"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[9261],{30966:function(e,t,n){n.d(t,{k:function(){return r}});n(65343);function r(e,t){return!!i(e.spatialReference,t.spatialReference)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.m===t.m}function i(e,t){return e===t||e&&t&&e.equals(t)}},24928:function(e,t,n){n.d(t,{Wh:function(){return l},Pj:function(){return c},FS:function(){return p},TF:function(){return d},MS:function(){return m},S6:function(){return h},Tx:function(){return f},R3:function(){return y}});var r=n(37762),i=n(43144),a=n(15671),o=(n(85111),n(65343),n(77822)),s=(n(26208),n(79104)),u=n(82626),l=(n(98861),n(2908),n(2892),n(30966),(0,i.Z)((function e(t,n,r){(0,a.Z)(this,e),this.uid=t,this.geometry=n,this.attributes=r,this.visible=!0,this.objectId=null,this.centroid=null})));function h(e){return(0,o.pC)(e.geometry)}var c=(0,i.Z)((function e(){(0,a.Z)(this,e),this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}));function f(e,t,n,r){return{x:e,y:t,z:n,hasZ:null!=n,hasM:!1,spatialReference:r,type:"point"}}function y(e){if((0,o.Wi)(e))return 0;switch(e.type){case"point":return 1;case"polyline":var t,n=0,i=(0,r.Z)(e.paths);try{for(i.s();!(t=i.n()).done;){n+=t.value.length}}catch(h){i.e(h)}finally{i.f()}return n;case"polygon":var a,s=0,u=(0,r.Z)(e.rings);try{for(u.s();!(a=u.n()).done;){s+=a.value.length}}catch(h){u.e(h)}finally{u.f()}return s;case"multipoint":return e.points.length;case"extent":return 2;case"mesh":var l=e.vertexAttributes&&e.vertexAttributes.position;return l?l.length/3:0;default:return}}function p(e,t){switch((0,s.cS)(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(var n=0;n<e.paths.length;n++)(0,s.Wi)(t,e.paths[n],e.hasZ);break;case"polygon":for(var r=0;r<e.rings.length;r++)(0,s.Wi)(t,e.rings[r],e.hasZ);break;case"multipoint":(0,s.Wi)(t,e.points,e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}}function d(e,t){switch((0,u.cS)(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(var n=0;n<e.paths.length;n++)(0,u.Wi)(t,e.paths[n]);break;case"polygon":for(var r=0;r<e.rings.length;r++)(0,u.Wi)(t,e.rings[r]);break;case"multipoint":(0,u.Wi)(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function m(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}(0,s.Ue)(),(0,u.Ue)()},59261:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(1413),i=n(15671),a=n(43144),o=n(37762),s=n(46237),u=n(77822),l=n(39201),h=n(26208),c=n(55402),f=n(24928),y=n(90289),p=n(2892);function d(e,t){return t}function m(e,t,n,r){switch(n){case 0:return b(e,t+r,0);case 1:return"lowerLeft"===e.originPosition?b(e,t+r,1):function(e,t,n){var r=e.translate,i=e.scale;return r[n]-t*i[n]}(e,t+r,1)}}function v(e,t,n,r){return 2===n?b(e,t,2):m(e,t,n,r)}function g(e,t,n,r){return 2===n?b(e,t,3):m(e,t,n,r)}function k(e,t,n,r){return 3===n?b(e,t,3):v(e,t,n,r)}function b(e,t,n){var r=e.translate,i=e.scale;return r[n]+t*i[n]}var x=function(){function e(t){(0,i.Z)(this,e),this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=d,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=function(){}}return(0,a.Z)(e,[{key:"createFeatureResult",value:function(){return new f.Pj}},{key:"finishFeatureResult",value:function(e){if(this.options.applyTransform&&(e.transform=null),this._attributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,e.hasZ){var t=(0,c.k)(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!(0,u.Wi)(t)){var n,r=(0,o.Z)(e.features);try{for(r.s();!(n=r.n()).done;){t(n.value.geometry)}}catch(i){r.e(i)}finally{r.f()}}}}},{key:"createSpatialReference",value:function(){return new h.Z}},{key:"addField",value:function(e,t){e.fields.push(p.Z.fromJSON(t));var n=e.fields.map((function(e){return e.name}));this._attributesConstructor=function(){var e,t=(0,o.Z)(n);try{for(t.s();!(e=t.n()).done;){this[e.value]=null}}catch(r){t.e(r)}finally{t.f()}}}},{key:"addFeature",value:function(e,t){var n=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(n>0)for(var r in t.attributes){var i=t.attributes[r];"string"==typeof i&&i.length>n&&(t.attributes[r]="")}e.features.push(t)}},{key:"addQueryGeometry",value:function(e,t){var n=t.queryGeometry,r=t.queryGeometryType,i=(0,y.$g)(n.clone(),n,!1,!1,this.transform),a=(0,y.di)(i,r,!1,!1),o=null;switch(r){case"esriGeometryPoint":o="point";break;case"esriGeometryPolygon":o="polygon";break;case"esriGeometryPolyline":o="polyline";break;case"esriGeometryMultipoint":o="multipoint"}a.type=o,e.queryGeometryType=r,e.queryGeometry=a}},{key:"prepareFeatures",value:function(e){var t=this;switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this._deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=function(e,n,r){return t.addCoordinatePoint(e,n,r)},this.createGeometry=function(e){return t.createPointGeometry(e)};break;case"polygon":this.addCoordinate=function(e,n,r){return t._addCoordinatePolygon(e,n,r)},this.createGeometry=function(e){return t._createPolygonGeometry(e)};break;case"polyline":this.addCoordinate=function(e,n,r){return t._addCoordinatePolyline(e,n,r)},this.createGeometry=function(e){return t._createPolylineGeometry(e)};break;case"multipoint":this.addCoordinate=function(e,n,r){return t._addCoordinateMultipoint(e,n,r)},this.createGeometry=function(e){return t._createMultipointGeometry(e)};break;case"mesh":case"extent":break;default:(0,s.Bg)(e.geometryType)}}},{key:"createFeature",value:function(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new f.Wh((0,l.D)(),null,new this._attributesConstructor)}},{key:"allocateCoordinates",value:function(){var e=this.lengths.reduce((function(e,t){return e+t}),0);this.coordinateBuffer=new Float64Array(e*this.vertexDimension),this.coordinateBufferPtr=0}},{key:"addLength",value:function(e,t,n){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}},{key:"createPointGeometry",value:function(e){var t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}},{key:"addCoordinatePoint",value:function(e,t,n){switch(t=this.applyTransform(this.transform,t,n,0),n){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}}},{key:"_transformPathLikeValue",value:function(e,t){var n=0;return t<=1&&(n=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,n)}},{key:"_addCoordinatePolyline",value:function(e,t,n){this._dehydratedAddPointsCoordinate(e.paths,t,n)}},{key:"_addCoordinatePolygon",value:function(e,t,n){this._dehydratedAddPointsCoordinate(e.rings,t,n)}},{key:"_addCoordinateMultipoint",value:function(e,t,n){0===n&&e.points.push([]);var r=this._transformPathLikeValue(t,n);e.points[e.points.length-1].push(r)}},{key:"_createPolygonGeometry",value:function(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_createPolylineGeometry",value:function(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_createMultipointGeometry",value:function(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_dehydratedAddPointsCoordinate",value:function(e,t,n){0===n&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);var r=this._transformPathLikeValue(t,n),i=e[e.length-1];0===n&&i.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=r}},{key:"_deriveApplyTransform",value:function(e){var t=e.hasZ,n=e.hasM;return t&&n?k:t?v:n?g:m}}]),e}(),C=n(68543),P=function(){function e(){(0,i.Z)(this,e)}return(0,a.Z)(e,[{key:"_parseFeatureQuery",value:function(e){var t=(0,C.C)(e.buffer,new x(e.options)),n=(0,r.Z)((0,r.Z)({},t),{},{spatialReference:t.spatialReference.toJSON(),fields:t.fields?t.fields.map((function(e){return e.toJSON()})):void 0});return Promise.resolve(n)}}]),e}();function Z(){return new P}}}]);