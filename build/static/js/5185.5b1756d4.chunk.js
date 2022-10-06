"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[5185],{27152:function(e,t,n){n.d(t,{B:function(){return m}});var r=n(15861),i=n(1413),o=n(37762),a=n(87757),s=n(77822),l=n(7713),u=n(68868),p=n(56444),c=n(18100),y=n(4888),f=n(35569);function v(e){return d[function(e){return e instanceof Blob?e.type:function(e){var t=(0,u.Ml)(e);return b[t]||h}(e.url)}(e)]||g}var d={},h="text/plain",g=d[h],b={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(var C in b)d[b[C]]=C;var _=n(41381);function m(e){var t=(0,s.pC)(e)&&e.origins?e.origins:[void 0];return function(n,r){var a,p=function(e,t,n){if((0,s.pC)(e)&&"resource"===e.type)return function(e,t,n){var r=(0,c.VZ)(t,n);return{type:String,read:function(e,t,n){var i=(0,_.r)(e,t,n);return r.type===String?i:"function"==typeof r.type?new r.type({url:i}):void 0},write:{writer:function(t,o,a,p){if(!p||!p.resources)return"string"==typeof t?void(o[a]=(0,_.t)(t,p)):void(o[a]=t.write({},p));var c=function(e){return(0,s.Wi)(e)?null:"string"==typeof e?e:e.url}(t),f=c?(0,_.t)(c,(0,i.Z)((0,i.Z)({},p),{},{verifyItemRelativeUrls:p&&p.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),_.M.NO):null,d=r.type!==String&&(!(0,l.l)(this)||p&&p.origin&&this.originIdOf(n)>(0,y.M9)(p.origin));p&&p.portalItem&&(0,s.pC)(f)&&!(0,u.YP)(f)?d?function(e,t,n,r,i,o,a,s){var l=a.portalItem.resourceFromPath(r),p=j(n,r,a);v(p)===(0,u.Ml)(l.path)?(Z(e,t,l,p,a.resources.toUpdate),i[o]=r):w(e,t,n,r,i,o,a,s)}(this,n,t,f,o,a,p,e):function(e,t,n,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e)}),t[n]=e}(f,o,a,p):p&&p.portalItem&&((0,s.Wi)(f)||(0,s.pC)((0,_.i)(f))||(0,u.jc)(f)||d)?w(this,n,t,f,o,a,p,e):o[a]=f}}}}(e,t,n);switch((0,s.pC)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":return{read:_.p.read,write:_.p.write}}}(e,n,r),d=(0,o.Z)(t);try{for(d.s();!(a=d.n()).done;){var h=a.value,g=(0,f.CJ)(n,h,r);for(var b in p)g[b]=p[b]}}catch(C){d.e(C)}finally{d.f()}}}function w(e,t,n,r,i,o,a,l){var c=(0,p.D)(),y=j(n,r,a),f=(0,u.v_)((0,s.U2)(l,"prefix"),c),d="".concat(f,".").concat(v(y)),h=a.portalItem.resourceFromPath(d);(0,u.jc)(r)&&a.resources.pendingOperations.push(function(e){return I.apply(this,arguments)}(r).then((function(e){h.path="".concat(f,".").concat(v(e)),i[o]=h.itemRelativeUrl})).catch((function(){}))),Z(e,t,h,y,a.resources.toAdd),i[o]=h.itemRelativeUrl}function Z(e,t,n,r,i){i.push({resource:n,content:r,finish:function(n){!function(e,t,n){"string"==typeof e[t]?e[t]=n.url:e[t].url=n.url}(e,t,n)}})}function j(e,t,n){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(n))],{type:"application/json"})}function I(){return I=(0,r.Z)(a.mark((function e(t){var r,i,o;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(n,86755));case 2:return r=e.sent.default,e.next=5,r(t,{responseType:"blob"});case 5:return i=e.sent,o=i.data,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}},25185:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r=n(15861),i=n(15671),o=n(43144),a=n(60136),s=n(29388),l=n(87757),u=n(98248),p=n(37762),c=n(76535),y=n(48630),f=n(73516),v=n(8410),d=n(77822),h=n(35569),g=(n(59537),n(65343),n(61340),n(48916)),b=0,C=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).id="".concat(Date.now().toString(16),"-analysis-").concat(b++),r.title=null,r}return(0,o.Z)(n,[{key:"parent",get:function(){return this._get("parent")},set:function(e){var t=this.parent;if((0,d.pC)(t))switch(t.type){case"line-of-sight":t.removeAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}},{key:"isEditable",get:function(){return this.requiredPropertiesForEditing.every(d.pC)}}]),n}((0,v.eC)((0,y.J)((0,f.IG)(c.Z))));(0,u._)([(0,h.Cb)({type:String,constructOnly:!0,clonable:!1})],C.prototype,"id",void 0),(0,u._)([(0,h.Cb)({type:String})],C.prototype,"title",void 0),(0,u._)([(0,h.Cb)({constructOnly:!0})],C.prototype,"type",void 0),(0,u._)([(0,h.Cb)({clonable:!1,value:null})],C.prototype,"parent",null),(0,u._)([(0,h.Cb)({readOnly:!0})],C.prototype,"extent",void 0),(0,u._)([(0,h.Cb)({readOnly:!0})],C.prototype,"isEditable",null),(0,u._)([(0,h.Cb)({readOnly:!0})],C.prototype,"requiredPropertiesForEditing",void 0),(0,u._)([(0,h.Cb)({readOnly:!0})],C.prototype,"nonEditableMessage",void 0);var _=C=(0,u._)([(0,g.j)("esri.analysis.Analysis")],C);function m(e,t){return w(e)===w(t)}function w(e){if((0,d.Wi)(e))return null;var t,n=null!=e.layer?e.layer.id:"";return null==(t=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid)?null:"o-".concat(n,"-").concat(t)}var Z={json:{write:{writer:function(e,t){var n;(0,d.Wi)(e)||null==(null===(n=e.layer)||void 0===n?void 0:n.objectIdField)||null==e.attributes||(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}};var j=n(27152),I=n(3717),x=n(18107),O=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).position=null,r.elevationInfo=null,r.feature=null,r}return(0,o.Z)(n,[{key:"equals",value:function(e){return(0,d._W)(this.position,e.position)&&(0,d._W)(this.elevationInfo,e.elevationInfo)&&m(this.feature,e.feature)}}]),n}((0,v.eC)((0,y.J)(c.Z)));(0,u._)([(0,h.Cb)({type:I.Z}),(0,j.B)()],O.prototype,"position",void 0),(0,u._)([(0,h.Cb)({type:x.ZP}),(0,j.B)()],O.prototype,"elevationInfo",void 0),(0,u._)([(0,h.Cb)(Z)],O.prototype,"feature",void 0);var k=O=(0,u._)([(0,g.j)("esri.analysis.LineOfSightAnalysisObserver")],O),E=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).position=null,r.elevationInfo=null,r.feature=null,r}return(0,o.Z)(n,[{key:"equals",value:function(e){return(0,d._W)(this.position,e.position)&&(0,d._W)(this.elevationInfo,e.elevationInfo)&&m(this.feature,e.feature)}}]),n}((0,v.eC)(y.j));(0,u._)([(0,h.Cb)({type:I.Z}),(0,j.B)()],E.prototype,"position",void 0),(0,u._)([(0,h.Cb)({type:x.ZP}),(0,j.B)()],E.prototype,"elevationInfo",void 0),(0,u._)([(0,h.Cb)(Z)],E.prototype,"feature",void 0);var S=E=(0,u._)([(0,g.j)("esri.analysis.LineOfSightAnalysisTarget")],E),P=n(48739),R=n(68901),W=n(27970),F=n(68593),z=n(79104),L=n(91904),A=P.Z.ofType(S),U=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).type="line-of-sight",r.observer=null,r.extent=null,r.nonEditableMessage="Assign an observer location to the analysis to allow editing.",r}return(0,o.Z)(n,[{key:"initialize",value:function(){var e=this;this.own((0,W.YP)((function(){return e._computeExtent()}),(function(t){((0,d.Wi)(t)||(0,d.Wi)(t.pending))&&e._set("extent",(0,d.pC)(t)?t.extent:null)}),W.tX))}},{key:"targets",get:function(){return this._get("targets")||new A},set:function(e){this._set("targets",(0,R.Z)(e,this.targets,A))}},{key:"spatialReference",get:function(){return(0,d.pC)(this.observer)&&(0,d.pC)(this.observer.position)?this.observer.position.spatialReference:null}},{key:"requiredPropertiesForEditing",get:function(){return[(0,d.yw)(this.observer,(function(e){return e.position}))]}},{key:"waitComputeExtent",value:function(){var e=(0,r.Z)(l.mark((function e(){var t;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this._computeExtent(),e.abrupt("return",(0,d.pC)(t)?(0,d.Wg)(t.pending):null);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_computeExtent",value:function(){var e=this.spatialReference;if((0,d.Wi)(this.observer)||(0,d.Wi)(this.observer.position)||(0,d.Wi)(e))return null;var t,n=function(e){return"absolute-height"===(0,L.VW)(e.position,e.elevationInfo)},r=this.observer.position,i=(0,z.al)(r.x,r.y,r.z,r.x,r.y,r.z),o=(0,p.Z)(this.targets);try{for(o.s();!(t=o.n()).done;){var a=t.value;if((0,d.pC)(a.position)){var s=(0,F.dz)(a.position,e);if((0,d.pC)(s.pending))return{pending:s.pending,extent:null};if((0,d.pC)(s.geometry)){var l=s.geometry,u=l.x,c=l.y,y=l.z;(0,z.pp)(i,[u,c,y])}}}}catch(v){o.e(v)}finally{o.f()}var f=(0,z.HH)(i,e);return n(this.observer)&&this.targets.every(n)||(f.zmin=null,f.zmax=null),{pending:null,extent:f}}},{key:"clear",value:function(){this.observer=null,this.targets.removeAll()}}]),n}(_);(0,u._)([(0,h.Cb)({type:["line-of-sight"]})],U.prototype,"type",void 0),(0,u._)([(0,h.Cb)({type:k,json:{read:!0,write:!0}})],U.prototype,"observer",void 0),(0,u._)([(0,h.Cb)({cast:R.R,type:A,nonNullable:!0,json:{read:!0,write:!0}})],U.prototype,"targets",null),(0,u._)([(0,h.Cb)({value:null,readOnly:!0})],U.prototype,"extent",void 0),(0,u._)([(0,h.Cb)({readOnly:!0})],U.prototype,"spatialReference",null),(0,u._)([(0,h.Cb)({readOnly:!0})],U.prototype,"requiredPropertiesForEditing",null),(0,u._)([(0,h.Cb)({readOnly:!0})],U.prototype,"nonEditableMessage",void 0);var M=U=(0,u._)([(0,g.j)("esri.analysis.LineOfSightAnalysis")],U),q=n(9182),B=n(79143),N=n(4405),T=P.Z.ofType(S),J=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).type="line-of-sight",r.operationalLayerType="LineOfSightLayer",r.analysis=new M,r.opacity=1,r}return(0,o.Z)(n,[{key:"initialize",value:function(){var e=this;this.own((0,W.YP)((function(){return e.analysis}),(function(t,n){(0,d.pC)(n)&&n.parent===e&&(n.parent=null),(0,d.pC)(t)&&(t.parent=e)}),W.tX))}},{key:"load",value:function(){var e=(0,r.Z)(l.mark((function e(){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",((0,d.pC)(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"observer",get:function(){return(0,d.yw)(this.analysis,(function(e){return e.observer}))},set:function(e){(0,d.yw)(this.analysis,(function(t){return t.observer=e}))}},{key:"targets",get:function(){return(0,d.pC)(this.analysis)?this.analysis.targets:null},set:function(e){(0,d.yw)(this.analysis,(function(t){return t.targets=e}))}},{key:"fullExtent",get:function(){return(0,d.pC)(this.analysis)?this.analysis.extent:null}},{key:"spatialReference",get:function(){return(0,d.pC)(this.analysis)?this.analysis.spatialReference:null}},{key:"removeAnalysis",value:function(e){this.analysis===e&&(this.analysis=new M)}}]),n}((0,N.q)((0,q.R)(B.Z)));(0,u._)([(0,h.Cb)({json:{read:!1},readOnly:!0})],J.prototype,"type",void 0),(0,u._)([(0,h.Cb)({type:["LineOfSightLayer"]})],J.prototype,"operationalLayerType",void 0),(0,u._)([(0,h.Cb)({type:k,json:{read:!0,write:{ignoreOrigin:!0}}})],J.prototype,"observer",null),(0,u._)([(0,h.Cb)({type:T,json:{read:!0,write:{ignoreOrigin:!0}}})],J.prototype,"targets",null),(0,u._)([(0,h.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],J.prototype,"analysis",void 0),(0,u._)([(0,h.Cb)({readOnly:!0})],J.prototype,"fullExtent",null),(0,u._)([(0,h.Cb)({readOnly:!0})],J.prototype,"spatialReference",null),(0,u._)([(0,h.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],J.prototype,"opacity",void 0),(0,u._)([(0,h.Cb)({type:["show","hide"]})],J.prototype,"listMode",void 0);var Y=J=(0,u._)([(0,g.j)("esri.layers.LineOfSightLayer")],J)}}]);