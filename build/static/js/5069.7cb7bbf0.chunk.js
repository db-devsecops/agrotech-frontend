"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[5069,9281],{19281:function(e,t,i){i.d(t,{e7:function(){return h},cM:function(){return d},Ru:function(){return l},pB:function(){return u},bA:function(){return c}});var n=i(29439),r=i(25766),s=i(82626),o=i(61069),a=i(46377);function u(e,t,i,n){if(null==n||e.hasZ||(n=void 0),"point"===e.type)return e.x+=t,e.y+=i,e.hasZ&&null!=n&&(e.z+=n),e;if("multipoint"===e.type){for(var r=e.points,s=0;s<r.length;s++)r[s]=f(r[s],t,i,n);return e}if("extent"===e.type)return e.xmin+=t,e.xmax+=t,e.ymin+=i,e.ymax+=i,null!=n&&(e.zmin+=n,e.zmax+=n),e;for(var o=(0,a.nA)(e),u="polyline"===e.type?e.paths:e.rings,h=0;h<o.length;h++)for(var c=o[h],l=0;l<c.length;l++)c[l]=f(c[l],t,i,n);return"paths"in e?e.paths=u:e.rings=u,e}function h(e,t,i,n,r){var s=e.clone(),o=n.resolution;if("point"===s.type){if(r)u(s,t*o,-i*o);else{var h=n.state.transform,c=n.state.inverseTransform,l=h[0]*s.x+h[2]*s.y+h[4],d=h[1]*s.x+h[3]*s.y+h[5];s.x=c[0]*(l+t)+c[2]*(d+i)+c[4],s.y=c[1]*(l+t)+c[3]*(d+i)+c[5]}return s}if("multipoint"===s.type){if(r)u(s,t*o,-i*o);else for(var f=s.points,p=n.state.transform,g=n.state.inverseTransform,y=0;y<f.length;y++){var m=f[y],x=p[0]*m[0]+p[2]*m[1]+p[4],k=p[1]*m[0]+p[3]*m[1]+p[5],_=g[0]*(x+t)+g[2]*(k+i)+g[4],V=g[1]*(x+t)+g[3]*(k+i)+g[5];f[y]=v(m,_,V,void 0)}return s}if("extent"===s.type){if(r)u(s,t*o,-i*o);else{var E=n.state.transform,Z=n.state.inverseTransform,T=E[0]*s.xmin+E[2]*s.ymin+E[4],C=E[1]*s.xmin+E[3]*s.ymin+E[5],w=E[0]*s.xmax+E[2]*s.ymax+E[4],D=E[1]*s.xmax+E[3]*s.ymax+E[5];s.xmin=Z[0]*(T+t)+Z[2]*(C+i)+Z[4],s.ymin=Z[1]*(T+t)+Z[3]*(C+i)+Z[5],s.xmax=Z[0]*(w+t)+Z[2]*(D+i)+Z[4],s.ymax=Z[1]*(w+t)+Z[3]*(D+i)+Z[5]}return s}if(r)u(s,t*o,-i*o);else{for(var M=(0,a.nA)(s),P="polyline"===s.type?s.paths:s.rings,A=n.state.transform,S=n.state.inverseTransform,R=0;R<M.length;R++)for(var z=M[R],U=0;U<z.length;U++){var O=z[U],G=A[0]*O[0]+A[2]*O[1]+A[4],I=A[1]*O[0]+A[3]*O[1]+A[5],b=S[0]*(G+t)+S[2]*(I+i)+S[4],X=S[1]*(G+t)+S[3]*(I+i)+S[5];z[U]=v(O,b,X,void 0)}"paths"in s?s.paths=P:s.rings=P}return s}function c(e,t,i,r){if("point"===e.type){var u=e.x,h=e.y,c=r?r[0]:u,l=r?r[1]:h,d=e.clone(),f=(u-c)*t+c,p=(h-l)*i+l;return d.x=f,d.y=p,d}if("multipoint"===e.type){for(var g=(0,a.nA)(e),y=(0,s.Ue)(),m=(0,o.C6)(y,[g]),x=(0,n.Z)(m,4),k=x[0],_=x[1],V=x[2],E=x[3],Z=r?r[0]:(k+V)/2,T=r?r[1]:(E+_)/2,C=e.clone(),w=C.points,D=0;D<w.length;D++){var M=w[D],P=(0,n.Z)(M,2),A=(P[0]-Z)*t+Z,S=(P[1]-T)*i+T;w[D]=v(M,A,S,void 0)}return C}if("extent"===e.type){var R=e.xmin,z=e.xmax,U=e.ymin,O=e.ymax,G=r?r[0]:(R+z)/2,I=r?r[1]:(O+U)/2,b=e.clone();if(b.xmin=(R-G)*t+G,b.ymax=(O-I)*i+I,b.xmax=(z-G)*t+G,b.ymin=(U-I)*i+I,b.xmin>b.xmax){var X=b.xmin,L=b.xmax;b.xmin=L,b.xmax=X}if(b.ymin>b.ymax){var H=b.ymin,N=b.ymax;b.ymin=N,b.ymax=H}return b}for(var W=(0,a.nA)(e),Y=(0,s.Ue)(),q=(0,o.C6)(Y,W),B=(0,n.Z)(q,4),F=B[0],J=B[1],j=B[2],Q=B[3],K=r?r[0]:(F+j)/2,$=r?r[1]:(Q+J)/2,ee=e.clone(),te="polyline"===ee.type?ee.paths:ee.rings,ie=0;ie<W.length;ie++)for(var ne=W[ie],re=0;re<ne.length;re++){var se=ne[re],oe=(0,n.Z)(se,2),ae=(oe[0]-K)*t+K,ue=(oe[1]-$)*i+$;te[ie][re]=v(se,ae,ue,void 0)}return"paths"in ee?ee.paths=te:ee.rings=te,ee}function l(e,t,i,n,r,s){var o=Math.sqrt((i-e)*(i-e)+(n-t)*(n-t));return Math.sqrt((r-e)*(r-e)+(s-t)*(s-t))/o}function d(e,t,i){var n=Math.atan2(t.y-i.y,t.x-i.x)-Math.atan2(e.y-i.y,e.x-i.x),s=Math.atan2(Math.sin(n),Math.cos(n));return(0,r.BV)(s)}function f(e,t,i,n){return v(e,e[0]+t,e[1]+i,null!=e[2]&&null!=n?e[2]+n:void 0)}function v(e,t,i,n){var r=[t,i];return e.length>2&&r.push(null!=n?n:e[2]),e.length>3&&r.push(e[3]),r}},81747:function(e,t,i){i.d(t,{Y6:function(){return y}});var n,r,s=i(15671),o=i(43144),a=i(43528),u=i(75047),h=i(24336),c=i(45187),l=i(73714),d=i(74070),f=i(3717);(r=n||(n={}))[r.Z=0]="Z",r[r.M=1]="M";var v=function(){function e(t){(0,s.Z)(this,e),this.spatialReference=t}return(0,o.Z)(e,[{key:"createVector",value:function(){return this._tag((0,u.a)())}},{key:"pointToVector",value:function(e){return this._tag((0,u.f)(e.x,e.y))}},{key:"arrayToVector",value:function(e){return this._tag((0,u.f)(e[0],e[1]))}},{key:"vectorToArray",value:function(e){return[e[0],e[1]]}},{key:"pointToArray",value:function(e){return[e.x,e.y]}},{key:"vectorToPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new f.Z;return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}},{key:"arrayToPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new f.Z;return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}},{key:"vectorToDehydratedPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"};return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}},{key:"lerp",value:function(e,t,i,n){return(0,a.l)(n,e,t,i)}},{key:"addDelta",value:function(e,t,i){e[0]+=t,e[1]+=i}},{key:"distance",value:function(e,t){return(0,a.j)(e,t)}},{key:"getZ",value:function(e,t){return t}},{key:"hasZ",value:function(){return!1}},{key:"getM",value:function(e,t){return t}},{key:"hasM",value:function(){return!1}},{key:"clone",value:function(e){return this._tag((0,u.b)(e))}},{key:"copy",value:function(e,t){return(0,a.c)(t,e)}},{key:"fromXYZ",value:function(e){return this._tag((0,u.f)(e[0],e[1]))}},{key:"toXYZ",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,c.f)(e[0],e[1],t)}},{key:"_tag",value:function(e){return e}}]),e}(),p=function(){function e(t,i){(0,s.Z)(this,e),this.valueType=t,this.spatialReference=i}return(0,o.Z)(e,[{key:"createVector",value:function(){return this._tag((0,c.c)())}},{key:"pointToVector",value:function(e){return this._tag((0,c.f)(e.x,e.y,this.valueType===n.Z?e.z:e.m))}},{key:"arrayToVector",value:function(e){return this._tag((0,c.f)(e[0],e[1],e[2]||0))}},{key:"vectorToArray",value:function(e){return[e[0],e[1],e[2]]}},{key:"pointToArray",value:function(e){return this.valueType===n.Z?[e.x,e.y,e.z]:[e.x,e.y,e.m]}},{key:"vectorToPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new f.Z;return t.x=e[0],t.y=e[1],t.z=this.valueType===n.Z?e[2]:void 0,t.m=this.valueType===n.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}},{key:"arrayToPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new f.Z;return t.x=e[0],t.y=e[1],t.z=this.valueType===n.Z?e[2]:void 0,t.m=this.valueType===n.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}},{key:"vectorToDehydratedPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"},i=this.valueType===n.Z,r=this.valueType===n.M;return t.x=e[0],t.y=e[1],t.z=i?e[2]:void 0,t.m=r?e[2]:void 0,t.hasZ=i,t.hasM=r,t.spatialReference=this.spatialReference,t}},{key:"lerp",value:function(e,t,i,n){return(0,h.h)(n,e,t,i)}},{key:"addDelta",value:function(e,t,i,r){e[0]+=t,e[1]+=i,this.valueType===n.Z&&(e[2]+=r)}},{key:"distance",value:function(e,t){return this.valueType===n.Z?(0,h.i)(e,t):(0,a.j)(e,t)}},{key:"getZ",value:function(e,t){return this.valueType===n.Z?e[2]:t}},{key:"hasZ",value:function(){return this.valueType===n.Z}},{key:"getM",value:function(e,t){return this.valueType===n.M?e[2]:t}},{key:"hasM",value:function(){return this.valueType===n.M}},{key:"clone",value:function(e){return this._tag((0,c.d)(e))}},{key:"copy",value:function(e,t){return(0,h.c)(t,e)}},{key:"fromXYZ",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this._tag((0,c.f)(e[0],e[1],this.valueType===n.Z?e.length>2?e[2]:t:i))}},{key:"toXYZ",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._tag((0,c.f)(e[0],e[1],this.valueType===n.Z?e[2]:t))}},{key:"_tag",value:function(e){return e}}]),e}(),g=function(){function e(t){(0,s.Z)(this,e),this.spatialReference=t}return(0,o.Z)(e,[{key:"createVector",value:function(){return this._tag((0,d.c)())}},{key:"pointToVector",value:function(e){return this._tag((0,d.f)(e.x,e.y,e.z,e.m))}},{key:"arrayToVector",value:function(e){return this._tag((0,d.f)(e[0],e[1],e[2]||0,e[3]||0))}},{key:"vectorToArray",value:function(e){return[e[0],e[1],e[2],e[3]]}},{key:"pointToArray",value:function(e){return[e.x,e.y,e.z,e.m]}},{key:"vectorToPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new f.Z;return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}},{key:"arrayToPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new f.Z;return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}},{key:"vectorToDehydratedPoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"};return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}},{key:"lerp",value:function(e,t,i,n){return(0,l.l)(n,e,t,i)}},{key:"addDelta",value:function(e,t,i,n){e[0]+=t,e[1]+=i,e[2]+=n}},{key:"distance",value:function(e,t){return(0,h.i)(e,t)}},{key:"getZ",value:function(e){return e[2]}},{key:"hasZ",value:function(){return!0}},{key:"getM",value:function(e){return e[3]}},{key:"hasM",value:function(){return!0}},{key:"clone",value:function(e){return this._tag((0,d.b)(e))}},{key:"copy",value:function(e,t){return(0,l.c)(t,e)}},{key:"fromXYZ",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this._tag((0,d.f)(e[0],e[1],e.length>2?e[2]:t,i))}},{key:"toXYZ",value:function(e){return(0,c.f)(e[0],e[1],e[2])}},{key:"_tag",value:function(e){return e}}]),e}();function y(e,t,i){return e&&t?new g(i):t?new p(n.M,i):e?new p(n.Z,i):new v(i)}},95976:function(e,t,i){i.d(t,{wA:function(){return m},kS:function(){return y},XE:function(){return x},Xz:function(){return g}});var n=i(37762),r=i(60136),s=i(29388),o=i(15671),a=i(43144),u=i(59537),h=i(65796),c=i(77822),l=i(41125),d=i(64029),f=i(81747),v=i(94613),p=i(49034);var g=function(){function e(t){(0,o.Z)(this,e),this.component=t,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}return(0,a.Z)(e,[{key:"pos",get:function(){return this._pos},set:function(e){this._pos=e,this.component.unnormalizeVertexPositions()}}]),e}(),y=(0,a.Z)((function e(t,i,n){(0,o.Z)(this,e),this.component=t,this.leftVertex=i,this.rightVertex=n,this.type="edge",i.rightEdge=this,n.leftEdge=this})),m=function(){function e(t,i){(0,o.Z)(this,e),this.spatialReference=t,this.viewingMode=i,this.vertices=[],this.edges=[]}return(0,a.Z)(e,[{key:"unnormalizeVertexPositions",value:function(){this.vertices.length<=1||function(e,t){if(t.supported){var i=1/0,n=-1/0,r=t.upperBoundX-t.lowerBoundX;e.forEach((function(e){for(var s=e.pos[0];s<t.lowerBoundX;)s+=r;for(;s>t.upperBoundX;)s-=r;i=Math.min(i,s),n=Math.max(n,s),e.pos[0]=s}));var s=n-i;r-s<s&&e.forEach((function(e){e.pos[0]<0&&(e.pos[0]+=r)}))}}(this.vertices,function(e,t){var i=(0,v.C5)(e);return t===p.JY.Global&&i?{supported:!0,lowerBoundX:i.valid[0],upperBoundX:i.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}(this.spatialReference,this.viewingMode))}},{key:"updateVertexIndex",value:function(e,t){if(0!==this.vertices.length){var i=this.vertices[0],n=null,r=e,s=t;do{(n=r).index=s++,r=n.rightEdge?n.rightEdge.rightVertex:null}while(null!=r&&r!==i);n.leftEdge&&n!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(n),this.vertices.length-1)}}},{key:"getFirstVertex",value:function(){return 0===this.vertices.length?null:this.vertices[0]}},{key:"getLastVertex",value:function(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]}},{key:"isClosed",value:function(){return this.vertices.length>2&&null!==this.vertices[0].leftEdge}},{key:"swapVertices",value:function(e,t){var i=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=i}},{key:"iterateVertices",value:function(e){if(0!==this.vertices.length){var t=this.vertices[0],i=t;do{e(i,i.index),i=(0,c.pC)(i.rightEdge)?i.rightEdge.rightVertex:null}while(i!==t&&null!=i)}}}]),e}(),x=function(e){(0,r.Z)(i,e);var t=(0,s.Z)(i);function i(e,n){var r;return(0,o.Z)(this,i),(r=t.call(this)).type=e,r.coordinateHelper=n,r._geometry=null,r.dirty=!0,r.components=[],r}return(0,a.Z)(i,[{key:"geometry",get:function(){if(this.dirty){switch(this.type){case"point":this._geometry=this._toPoint();break;case"polyline":this._geometry=this._toPolyline();break;case"polygon":this._geometry=this._toPolygon()}this.dirty=!1}return this._geometry}},{key:"spatialReference",get:function(){return this.coordinateHelper.spatialReference}},{key:"notifyChanges",value:function(e){this.dirty=!0,this.emit("change",e)}},{key:"_toPoint",value:function(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}},{key:"_toPolyline",value:function(){var e,t=[],i=this.coordinateHelper.vectorToArray,r=(0,n.Z)(this.components);try{for(r.s();!(e=r.n()).done;){var s=e.value;if(!(s.vertices.length<1)){var o=[],a=s.vertices.find((function(e){return null==e.leftEdge})),u=a;do{o.push(i(a.pos)),a=a.rightEdge?a.rightEdge.rightVertex:null}while(a&&a!==u);t.push(o)}}}catch(h){r.e(h)}finally{r.f()}return new d.Z({paths:t,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}},{key:"_toPolygon",value:function(){var e,t=[],i=this.coordinateHelper.vectorToArray,r=(0,n.Z)(this.components);try{for(r.s();!(e=r.n()).done;){var s=e.value;if(!(s.vertices.length<1)){var o=[],a=s.vertices[0],u=a,h=u;do{o.push(i(u.pos)),u=(0,c.pC)(u.rightEdge)?u.rightEdge.rightVertex:null}while(u&&u!==h);s.isClosed()&&o.push(i(a.pos)),t.push(o)}}}catch(d){r.e(d)}finally{r.f()}return new l.Z({rings:t,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}}],[{key:"fromGeometry",value:function(e,t){var r=e.spatialReference,s=(0,f.Y6)(e.hasZ,e.hasM,r),o=new i(e.type,s);switch(e.type){case"polygon":for(var a=e.rings,h=0;h<a.length;++h){for(var c=a[h],l=new m(r,t),d=c.length>2&&(0,u.fS)(c[0],c[c.length-1]),v=d?c.length-1:c.length,p=0;p<v;++p){var x=s.arrayToVector(c[p]),k=new g(l);l.vertices.push(k),k.pos=x,k.index=p}for(var _=l.vertices.length-1,V=0;V<_;++V){var E=l.vertices[V],Z=l.vertices[V+1],T=new y(l,E,Z);l.edges.push(T)}if(d){var C=new y(l,l.vertices[l.vertices.length-1],l.vertices[0]);l.edges.push(C)}o.components.push(l)}break;case"polyline":var w,D=(0,n.Z)(e.paths);try{for(D.s();!(w=D.n()).done;){for(var M=w.value,P=new m(r,t),A=M.length,S=0;S<A;++S){var R=s.arrayToVector(M[S]),z=new g(P);P.vertices.push(z),z.pos=R,z.index=S}for(var U=P.vertices.length-1,O=0;O<U;++O){var G=P.vertices[O],I=P.vertices[O+1],b=new y(P,G,I);P.edges.push(b)}o.components.push(P)}}catch(H){D.e(H)}finally{D.f()}break;case"point":var X=new m(r,t),L=new g(X);L.index=0,L.pos=s.pointToVector(e),X.vertices.push(L),o.components.push(X)}return o}}]),i}(h.Z)},93499:function(e,t,i){i.d(t,{c:function(){return Z}});var n=i(15671),r=i(43144),s=i(60136),o=i(29388),a=i(65796),u=i(77822),h=i(95976),c=i(44674),l=function(){function e(t,i,r){(0,n.Z)(this,e),this.editGeometry=t,this.component=i,this.pos=r,this.addedVertex=null,this.originalEdge=null,this.left=null,this.right=null}return(0,r.Z)(e,[{key:"apply",value:function(){var e="redo";(0,u.Wi)(this.addedVertex)&&(e="apply",this.addedVertex=new h.Xz(this.component));var t=this.component.getLastVertex();if((0,u.Wi)(t))this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,this.addedVertex.index=0;else{var i=null;t.rightEdge&&(this.originalEdge=t.rightEdge,i=this.originalEdge.rightVertex,this.component.edges.splice(this.component.edges.indexOf(this.originalEdge),1)),this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,(0,u.Wi)(this.left)&&(this.left=new h.kS(this.component,t,this.addedVertex)),this.component.edges.push(this.left),t.rightEdge=this.left,(0,u.pC)(this.originalEdge)&&(0,u.pC)(i)&&((0,u.Wi)(this.right)&&(this.right=new h.kS(this.component,this.addedVertex,i)),this.component.edges.push(this.right),i.leftEdge=this.right),this.component.updateVertexIndex(this.addedVertex,t.index+1)}this.editGeometry.notifyChanges({operation:e,addedVertices:[this.addedVertex]})}},{key:"undo",value:function(){if((0,u.Wi)(this.addedVertex))return null;this.component.vertices.splice(this.component.vertices.indexOf(this.addedVertex),1),(0,u.pC)(this.left)&&(this.component.edges.splice(this.component.edges.indexOf(this.left),1),this.left.leftVertex.rightEdge=null),(0,u.pC)(this.right)&&(this.component.edges.splice(this.component.edges.indexOf(this.right),1),this.right.rightVertex.leftEdge=null),(0,u.pC)(this.originalEdge)&&(this.component.edges.push(this.originalEdge),this.originalEdge.leftVertex.rightEdge=this.originalEdge,this.originalEdge.rightVertex.leftEdge=this.originalEdge),(0,u.pC)(this.left)?this.component.updateVertexIndex(this.left.leftVertex,this.left.leftVertex.index):this.component.updateVertexIndex(this.addedVertex,0),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.addedVertex]})}},{key:"accumulate",value:function(){return!1}}]),e}(),d=i(36465),f=function(){function e(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;(0,n.Z)(this,e),this.editGeometry=t,this.vertices=i,this.minNumberOfVertices=r,this.removedVertices=null}return(0,r.Z)(e,[{key:"apply",value:function(){var e=this,t="redo";null==this.removedVertices?(this.removedVertices=[],this.vertices.forEach((function(t){var i=e._removeVertex(t);(0,u.pC)(i)&&e.removedVertices.push(i)})),t="apply"):this.removedVertices.forEach((function(t){e._removeVertex(t.removedVertex)})),this.editGeometry.notifyChanges({operation:t,removedVertices:this.vertices})}},{key:"undo",value:function(){var e=this;this.removedVertices.forEach((function(t){e._undoRemoveVertex(t)})),this.editGeometry.notifyChanges({operation:"undo",addedVertices:this.vertices})}},{key:"accumulate",value:function(){return!1}},{key:"_removeVertex",value:function(e){var t=e.component;if(t.vertices.length<=this.minNumberOfVertices)return null;var i={removedVertex:e,createdEdge:null},n=e.leftEdge,r=e.rightEdge;return t.vertices.splice(t.vertices.indexOf(e),1),n&&(t.edges.splice(t.edges.indexOf(n),1),n.leftVertex.rightEdge=null),r&&(t.edges.splice(t.edges.indexOf(r),1),r.rightVertex.leftEdge=null),0===e.index&&r&&this.vertices.length>0&&t.swapVertices(t.vertices.indexOf(r.rightVertex),0),n&&r&&(i.createdEdge=new h.kS(t,n.leftVertex,r.rightVertex),t.edges.push(i.createdEdge)),r&&t.updateVertexIndex(r.rightVertex,r.rightVertex.index-1),i}},{key:"_undoRemoveVertex",value:function(e){var t=e.removedVertex,i=e.removedVertex.component,n=t.leftEdge,r=t.rightEdge;e.createdEdge&&i.edges.splice(i.edges.indexOf(e.createdEdge),1),i.vertices.push(t),n&&(i.edges.push(n),n.leftVertex.rightEdge=n),r&&(i.edges.push(r),r.rightVertex.leftEdge=r),i.updateVertexIndex(t,t.index)}}]),e}(),v=function(){function e(t,i,r){(0,n.Z)(this,e),this.editGeometry=t,this.edge=i,this.t=r,this.createdVertex=null,this.left=null,this.right=null}return(0,r.Z)(e,[{key:"apply",value:function(){var e="redo",t=this.edge,i=t.component,n=t.leftVertex,r=t.rightVertex;i.edges.splice(i.edges.indexOf(t),1),(0,u.Wi)(this.createdVertex)&&(e="apply",this.createdVertex=new h.Xz(t.component)),i.vertices.push(this.createdVertex),this.createdVertex.pos=this.editGeometry.coordinateHelper.lerp(t.leftVertex.pos,t.rightVertex.pos,this.t,this.editGeometry.coordinateHelper.createVector()),(0,u.Wi)(this.left)&&(this.left=new h.kS(i,n,this.createdVertex)),this.left.leftVertex.leftEdge?i.edges.push(this.left):i.edges.unshift(this.left),n.rightEdge=this.left,(0,u.Wi)(this.right)&&(this.right=new h.kS(i,this.createdVertex,r)),i.edges.push(this.right),r.leftEdge=this.right,i.updateVertexIndex(this.createdVertex,n.index+1),this.editGeometry.notifyChanges({operation:e,addedVertices:[this.createdVertex]})}},{key:"undo",value:function(){if((0,u.Wi)(this.createdVertex)||(0,u.Wi)(this.left)||(0,u.Wi)(this.right))return null;var e=this.edge,t=e.component,i=this.createdVertex.leftEdge,n=this.createdVertex.rightEdge,r=i.leftVertex,s=n.rightVertex;t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this.left),1),t.edges.splice(t.edges.indexOf(this.right),1),this.edge.leftVertex.leftEdge?t.edges.push(this.edge):t.edges.unshift(this.edge),r.rightEdge=e,s.leftEdge=e,t.updateVertexIndex(r,r.index),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}},{key:"accumulate",value:function(){return!1}}]),e}(),p=function(){function e(t,i,r){(0,n.Z)(this,e),this.editGeometry=t,this.vertex=i,this.pos=r}return(0,r.Z)(e,[{key:"apply",value:function(){var e=(0,u.Wi)(this.originalPosition);e&&(this.originalPosition=this.vertex.pos),this._apply(e?"apply":"redo")}},{key:"undo",value:function(){this.vertex.pos=(0,u.Wg)(this.originalPosition),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:[this.vertex]})}},{key:"accumulate",value:function(t){return t instanceof e&&t.vertex===this.vertex&&(this.pos=t.pos,this._apply("apply"),!0)}},{key:"_apply",value:function(e){this.vertex.pos=this.pos,this.editGeometry.components.forEach((function(e){return e.unnormalizeVertexPositions()})),this.editGeometry.notifyChanges({operation:e,updatedVertices:[this.vertex]})}}]),e}(),g=i(59537),y=function(){function e(t,i){(0,n.Z)(this,e),this.editGeometry=t,this.component=i,this.createdEdge=null}return(0,r.Z)(e,[{key:"apply",value:function(){var e="redo";if((0,u.Wi)(this.createdEdge)){e="apply";var t=this.component.getFirstVertex(),i=this.component.getLastVertex();if(this.component.isClosed()||this.component.vertices.length<3||(0,u.Wi)(t)||(0,u.Wi)(i))return;this.createdEdge=new h.kS(this.component,i,t)}this.createdEdge.leftVertex.rightEdge=this.createdEdge,this.createdEdge.rightVertex.leftEdge=this.createdEdge,this.component.edges.push(this.createdEdge),this.editGeometry.notifyChanges({operation:e})}},{key:"undo",value:function(){(0,u.Wi)(this.createdEdge)||((0,g.Od)(this.component.edges,this.createdEdge),this.createdEdge.leftVertex.rightEdge=null,this.createdEdge.rightVertex.leftEdge=null,this.editGeometry.notifyChanges({operation:"undo"}))}},{key:"accumulate",value:function(){return!1}}]),e}(),m=i(97894),x=i(1915),k=i(73073),_=i(8179),V=i(37762),E=function(){function e(){(0,n.Z)(this,e),this.operations=[],this.closed=!1}return(0,r.Z)(e,[{key:"close",value:function(){this.closed=!0}},{key:"apply",value:function(){var e,t=(0,V.Z)(this.operations);try{for(t.s();!(e=t.n()).done;){e.value.apply()}}catch(i){t.e(i)}finally{t.f()}}},{key:"undo",value:function(){for(var e=this.operations.length-1;e>=0;e--)this.operations[e].undo()}},{key:"accumulate",value:function(e){if(this.closed)return!1;var t=this.operations.length?this.operations[this.operations.length-1]:null;return t&&t.accumulate(e)||(this.operations.push(e),e.apply()),!0}}]),e}(),Z=function(e){(0,s.Z)(i,e);var t=(0,o.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this)).data=e,r.undoStack=[],r.redoStack=[],r.listener=r.data.on("change",(function(e){e.addedVertices&&r.emit("vertex-add",{type:"vertex-add",vertices:e.addedVertices,operation:e.operation}),e.removedVertices&&r.emit("vertex-remove",{type:"vertex-remove",vertices:e.removedVertices,operation:e.operation}),e.updatedVertices&&r.emit("vertex-update",{type:"vertex-update",vertices:e.updatedVertices,operation:e.operation})})),r}return(0,r.Z)(i,[{key:"destroy",value:function(){this.listener.remove()}},{key:"splitEdge",value:function(e,t){return this._apply(new v(this.data,e,t))}},{key:"updateVertices",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.O.ACCUMULATE_STEPS;return this._apply(new d.y(this.data,e,t),i)}},{key:"moveVertices",value:function(e,t,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:c.O.ACCUMULATE_STEPS;return this.updateVertices(e,new m.z(this.data.coordinateHelper,t,i,n),r)}},{key:"scaleVertices",value:function(e,t,i,n,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:c.O.ACCUMULATE_STEPS,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:d.w.CUMULATIVE;return this.updateVertices(e,new _.q(t,i,n,r,o),s)}},{key:"rotateVertices",value:function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c.O.ACCUMULATE_STEPS,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:d.w.CUMULATIVE;return this.updateVertices(e,new k.S(t,i,r),n)}},{key:"removeVertices",value:function(e){return this._apply(new f(this.data,e,this._minNumVerticesPerType))}},{key:"appendVertex",value:function(e){return 0===this.data.components.length?null:this._apply(new l(this.data,this.data.components[0],e))}},{key:"setVertexPosition",value:function(e,t){return this._apply(new p(this.data,e,t))}},{key:"offsetEdge",value:function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c.O.ACCUMULATE_STEPS;return this.updateVertices([t.leftVertex,t.rightVertex],new x.A(this.data.coordinateHelper,e,t,i),n)}},{key:"closeComponent",value:function(e){return this.data.components.includes(e)?this._apply(new y(this.data,e)):null}},{key:"canRemoveVertex",value:function(){return this.data.components[0].vertices.length>this._minNumVerticesPerType}},{key:"createUndoGroup",value:function(){var e=new E;return this._apply(e),{remove:function(){return e.close()}}}},{key:"undo",value:function(){if(this.undoStack.length>0){var e=this.undoStack.pop();return e.undo(),this.redoStack.push(e),e}return null}},{key:"redo",value:function(){if(this.redoStack.length>0){var e=this.redoStack.pop();return e.apply(),this.undoStack.push(e),e}return null}},{key:"canUndo",get:function(){return this.undoStack.length>0}},{key:"canRedo",get:function(){return this.redoStack.length>0}},{key:"lastOperation",get:function(){return this.undoStack.length>0?this.undoStack[this.undoStack.length-1]:null}},{key:"_minNumVerticesPerType",get:function(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}},{key:"_apply",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.O.ACCUMULATE_STEPS;return t!==c.O.NEW_STEP&&!(0,u.Wi)(this.lastOperation)&&this.lastOperation.accumulate(e)||(e.apply(),this.undoStack.push(e),this.redoStack=[]),e}}],[{key:"fromGeometry",value:function(e,t){return new i(h.XE.fromGeometry(e,t))}}]),i}(a.Z)},44674:function(e,t,i){var n;i.d(t,{O:function(){return n}}),function(e){e[e.NEW_STEP=0]="NEW_STEP",e[e.ACCUMULATE_STEPS=1]="ACCUMULATE_STEPS"}(n||(n={}))},97894:function(e,t,i){i.d(t,{z:function(){return s}});var n=i(15671),r=i(43144),s=function(){function e(t,i,r,s){(0,n.Z)(this,e),this.helper=t,this.dx=i,this.dy=r,this.dz=s}return(0,r.Z)(e,[{key:"_move",value:function(e,t,i,n){this.helper.addDelta(e.pos,t,i,n)}},{key:"apply",value:function(e){this._move(e,this.dx,this.dy,this.dz)}},{key:"undo",value:function(e){this._move(e,-this.dx,-this.dy,-this.dz)}},{key:"canAccumulate",value:function(t){return t instanceof e}},{key:"accumulate",value:function(e,t){this._move(e,t.dx,t.dy,t.dz)}},{key:"accumulateParams",value:function(e){this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz}}]),e}()},1915:function(e,t,i){i.d(t,{A:function(){return m},v:function(){return n}});var n,r,s,o=i(29439),a=i(15671),u=i(43144),h=i(25766),c=i(77822),l=i(43528),d=i(75047),f=i(24336),v=i(45187),p=i(29166),g=i(44805),y=i(76368),m=function(){function e(t,i,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.IMMEDIATE;(0,a.Z)(this,e),this.helper=t,this.planeType=i,this.edge=n,this.distance=s,this._plane=(0,p.Ue)(),this._offsetPlane=(0,p.Ue)(),this._minDistance=-1/0,this._maxDistance=1/0,o===r.IMMEDIATE&&this._initialize()}return(0,u.Z)(e,[{key:"plane",get:function(){return this._plane}},{key:"requiresSplitEdgeLeft",get:function(){return!this._left.isOriginalDirection}},{key:"requiresSplitEdgeRight",get:function(){return!this._right.isOriginalDirection}},{key:"edgeDirection",get:function(){return this._edgeDirection}},{key:"_initialize",value:function(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}},{key:"_initializeNeighbors",value:function(){var e,t,i,n,r=this._toXYZ(this.edge.leftVertex.pos),s=this._toXYZ(null===(e=this.edge.leftVertex.leftEdge)||void 0===e||null===(t=e.leftVertex)||void 0===t?void 0:t.pos),o=this._toXYZ(this.edge.rightVertex.pos),a=this._toXYZ(null===(i=this.edge.rightVertex.rightEdge)||void 0===i||null===(n=i.rightVertex)||void 0===n?void 0:n.pos);this._edgeDirection=(0,f.r)((0,v.c)(),r,o),this._left=this._computeNeighbor(r,s,this._edgeDirection),this._right=this._computeNeighbor(o,a,this._edgeDirection)}},{key:"_toXYZ",value:function(e){return(0,c.pC)(e)?this.helper.toXYZ(e):null}},{key:"_computeNeighbor",value:function(e,t,i){if((0,c.Wi)(t))return{start:e,end:t,direction:(0,v.f)(-i[1],i[0],0),isOriginalDirection:!0};var n=(0,f.r)((0,v.c)(),e,t),r=!this._passesBisectingAngleThreshold(n,i);return{start:e,end:t,direction:r?this._bisectVectorsPerpendicular(i,n):n,isOriginalDirection:!r}}},{key:"_passesBisectingAngleThreshold",value:function(e,t){var i=Math.abs((0,g.EU)(t,e));return i>=x&&i<=Math.PI-x}},{key:"_bisectVectorsPerpendicular",value:function(e,t){var i=(0,f.e)(e,t)<0?e:(0,f.o)((0,v.c)(),e),n=Math.abs((0,f.e)(i,t));if(!(n<.001||n>.999))return this._bisectDirection(i,t);var r=(0,f.f)((0,v.c)(),i,[0,0,1]);return(0,f.n)(r,r)}},{key:"_bisectDirection",value:function(e,t){var i=(0,f.a)((0,v.c)(),e,t);return(0,f.n)(i,i)}},{key:"_initializePlane",value:function(){var e=this._computeNormalDirection(this._left),t=this._computeNormalDirection(this._right);(0,f.e)(e,t)<0&&(0,f.o)(t,t),(0,p.Yq)(this._left.start,this._bisectDirection(e,t),this._plane)}},{key:"_computeNormalDirection",value:function(e){var t=(0,f.f)((0,v.c)(),e.direction,this._edgeDirection);(0,f.n)(t,t);var i=(0,f.f)((0,v.c)(),this._edgeDirection,t);return this.planeType===n.XY&&(i[2]=0),(0,f.n)(i,i)}},{key:"_initializeDistanceConstraints",value:function(){(0,c.pC)(this._left.end)&&!this.requiresSplitEdgeLeft&&this._updateDistanceConstraint((0,p.jH)(this._plane,this._left.end)),(0,c.pC)(this._right.end)&&!this.requiresSplitEdgeRight&&this._updateDistanceConstraint((0,p.jH)(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}},{key:"_updateDistanceConstraint",value:function(e){e<=0&&(this._minDistance=Math.max(this._minDistance,e)),e>=0&&(this._maxDistance=Math.min(this._maxDistance,e))}},{key:"_updateIntersectDistanceConstraint",value:function(e){var t=(0,p.mJ)(e),i=this._edgeDirection,n=(0,f.a)((0,v.c)(),this._left.start,this._left.direction),r=(0,f.a)((0,v.c)(),this._right.start,this._right.direction),s=this._pointInBasis2D((0,d.a)(),t,i,this._left.start),a=this._pointInBasis2D((0,d.a)(),t,i,n),u=this._pointInBasis2D((0,d.a)(),t,i,this._right.start),h=this._pointInBasis2D((0,d.a)(),t,i,r),c=(0,y.dU)({start:a,end:s,type:y.SP.LINE},{start:h,end:u,type:y.SP.LINE}),g=(0,o.Z)(c,1)[0];if(g){var m=(0,l.g)((0,d.a)(),s,a);(0,l.i)(m,m);var x=(0,l.g)((0,d.a)(),g,a),k=(0,l.h)(m,x),_=(0,f.a)((0,v.c)(),n,(0,f.g)((0,v.c)(),this._left.direction,-k)),V=(0,p.jH)(e,_);this._updateDistanceConstraint(V)}}},{key:"_pointInBasis2D",value:function(e,t,i,n){return e[0]=(0,g.SR)(t,n),e[1]=(0,g.SR)(i,n),e}},{key:"_offset",value:function(e,t){var i=this;Number.isFinite(this._minDistance)&&(t=Math.max(this._minDistance,t)),Number.isFinite(this._maxDistance)&&(t=Math.min(this._maxDistance,t)),(0,p.JG)(this._offsetPlane,this._plane),this._offsetPlane[3]-=t;var n=function(e,t,n){return(0,c.pC)(t)&&(0,p.fn)(i._offsetPlane,e,(0,f.a)((0,v.c)(),e,t),n)},r=(0,v.c)();(e===this.edge.leftVertex?n(this._left.start,this._left.direction,r):n(this._right.start,this._right.direction,r))&&this.helper.copy(this.helper.fromXYZ(r,void 0,this.helper.getM(e.pos)),e.pos)}},{key:"signedDistanceToPoint",value:function(e){return(0,p.jH)(this.plane,this.helper.toXYZ(this.helper.pointToVector(e)))}},{key:"apply",value:function(e){this._offset(e,this.distance)}},{key:"undo",value:function(e){this._offset(e,0)}},{key:"canAccumulate",value:function(t){return t instanceof e&&this.edge.leftVertex.index===t.edge.leftVertex.index&&this.edge.rightVertex.index===t.edge.rightVertex.index&&this.edge.component===t.edge.component&&this._maybeEqualsVec3(this._left.direction,t._left.direction)&&this._maybeEqualsVec3(this._right.direction,t._right.direction)&&(0,f.z)((0,p.mJ)(this._plane),(0,p.mJ)(t._plane))}},{key:"accumulate",value:function(e,t){var i=this._plane[3]-t._plane[3]+t.distance;this._offset(e,i)}},{key:"accumulateParams",value:function(e){var t=e.distance-e._plane[3];this.distance=t+this._plane[3]}},{key:"clone",value:function(){var t=new e(this.helper,this.planeType,this.edge,this.distance,r.DEFERRED);return(0,p.JG)(t._plane,this._plane),(0,p.JG)(t._offsetPlane,this._offsetPlane),t._maxDistance=this._maxDistance,t._minDistance=this._minDistance,t._left=this._cloneNeighbor(this._left),t._right=this._cloneNeighbor(this._right),t._edgeDirection=(0,f.c)((0,v.c)(),this._edgeDirection),t}},{key:"_maybeEqualsVec3",value:function(e,t){return(0,c.Wi)(e)&&(0,c.Wi)(t)||(0,c.pC)(e)&&(0,c.pC)(t)&&(0,f.z)(e,t)}},{key:"_cloneNeighbor",value:function(e){var t=e.start,i=e.end,n=e.direction,r=e.isOriginalDirection;return{start:(0,f.c)((0,v.c)(),t),end:(0,c.pC)(i)?(0,f.c)((0,v.c)(),i):null,direction:(0,f.c)((0,v.c)(),n),isOriginalDirection:r}}}]),e}(),x=(0,h.Vl)(15);(s=n||(n={}))[s.XYZ=0]="XYZ",s[s.XY=1]="XY",function(e){e[e.IMMEDIATE=0]="IMMEDIATE",e[e.DEFERRED=1]="DEFERRED"}(r||(r={}))},73073:function(e,t,i){i.d(t,{S:function(){return u}});var n=i(15671),r=i(43144),s=i(59537),o=i(43528),a=i(36465),u=function(){function e(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.w.CUMULATIVE;(0,n.Z)(this,e),this.origin=t,this.angle=i,this.accumulationType=r}return(0,r.Z)(e,[{key:"_rotate",value:function(e,t){(0,o.r)(e.pos,e.pos,this.origin,t)}},{key:"apply",value:function(e){this._rotate(e,this.angle)}},{key:"undo",value:function(e){this._rotate(e,-this.angle)}},{key:"canAccumulate",value:function(t){return t instanceof e&&(0,s.fS)(this.origin,t.origin)}},{key:"accumulate",value:function(e,t){var i=t.accumulationType===a.w.REPLACE;this._rotate(e,i?t.angle-this.angle:t.angle)}},{key:"accumulateParams",value:function(e){var t=e.accumulationType===a.w.REPLACE;this.angle=t?e.angle:this.angle+e.angle}}]),e}()},8179:function(e,t,i){i.d(t,{q:function(){return h}});var n=i(15671),r=i(43144),s=i(59537),o=i(75047),a=i(43528),u=i(36465),h=function(){function e(t,i,r,s){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:u.w.CUMULATIVE;(0,n.Z)(this,e),this.origin=t,this.axis1=i,this.factor1=r,this.factor2=s,this.accumulationType=a,this.axis2=(0,o.f)(i[1],-i[0])}return(0,r.Z)(e,[{key:"_scale",value:function(e,t,i){(0,a.q)(e.pos,e.pos,this.origin,this.axis1,t),(0,a.q)(e.pos,e.pos,this.origin,this.axis2,i)}},{key:"apply",value:function(e){this._scale(e,this.factor1,this.factor2)}},{key:"undo",value:function(e){this._scale(e,1/this.factor1,1/this.factor2)}},{key:"canAccumulate",value:function(t){return t instanceof e&&(0,s.fS)(this.origin,t.origin)&&(0,s.fS)(this.axis1,t.axis1)}},{key:"accumulate",value:function(e,t){t.accumulationType===u.w.REPLACE?this._scale(e,t.factor1/this.factor1,t.factor2/this.factor2):this._scale(e,t.factor1,t.factor2)}},{key:"accumulateParams",value:function(e){var t=e.accumulationType===u.w.REPLACE;this.factor1=t?e.factor1:this.factor1*e.factor1,this.factor2=t?e.factor2:this.factor2*e.factor2}}]),e}()},36465:function(e,t,i){i.d(t,{w:function(){return n},y:function(){return o}});var n,r=i(15671),s=i(43144),o=function(){function e(t,i,n){(0,r.Z)(this,e),this.editGeometry=t,this.vertices=i,this.operation=n,this.undone=!1}return(0,s.Z)(e,[{key:"apply",value:function(){var e=this;this.vertices.forEach((function(t){return e.operation.apply(t)})),this.editGeometry.components.forEach((function(e){return e.unnormalizeVertexPositions()})),this.editGeometry.notifyChanges({operation:this.undone?"redo":"apply",updatedVertices:this.vertices})}},{key:"undo",value:function(){var e=this;this.vertices.forEach((function(t){return e.operation.undo(t)})),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:this.vertices}),this.undone=!0}},{key:"canAccumulate",value:function(e){if(this.undone||e.vertices.length!==this.vertices.length)return!1;for(var t=0;t<e.vertices.length;++t)if(e.vertices[t]!==this.vertices[t])return!1;return this.operation.canAccumulate(e.operation)}},{key:"accumulate",value:function(t){var i=this;return!!(t instanceof e&&this.canAccumulate(t))&&(this.vertices.forEach((function(e){return i.operation.accumulate(e,t.operation)})),this.operation.accumulateParams(t.operation),this.editGeometry.components.forEach((function(e){return e.unnormalizeVertexPositions()})),this.editGeometry.notifyChanges({operation:"apply",updatedVertices:this.vertices}),!0)}}]),e}();!function(e){e[e.CUMULATIVE=0]="CUMULATIVE",e[e.REPLACE=1]="REPLACE"}(n||(n={}))},43746:function(e,t,i){i.d(t,{N:function(){return s}});var n=i(15671),r=i(43144),s=function(){function e(t){(0,n.Z)(this,e),this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.editGeometryOperations=t.editGeometryOperations,this.elevationInfo=t.elevationInfo,this.pointer=t.pointer,this.vertexHandle=t.vertexHandle,this.excludeFeature=t.excludeFeature,this.visualizer=t.visualizer}return(0,r.Z)(e,[{key:"coordinateHelper",get:function(){return this.editGeometryOperations.data.coordinateHelper}}]),e}()},46606:function(e,t,i){i.d(t,{a:function(){return d}});var n=i(37762),r=i(15671),s=i(43144),o=i(44441),a=i(6315),u=i(48641),h=i(39755),c=i(2309),l=i(48783),d=function(){function e(){(0,r.Z)(this,e)}return(0,s.Z)(e,[{key:"draw",value:function(e,t){var i,r=this._getUniqueHints(e),s=[],d=(0,n.Z)(r);try{for(d.s();!(i=d.n()).done;){var f=i.value;f instanceof a.w&&s.push(this.visualizeIntersectionPoint(f,t)),f instanceof u.w&&s.push(this.visualizeLine(f,t)),f instanceof h.L&&s.push(this.visualizeParallelSign(f,t)),f instanceof l.y&&s.push(this.visualizeRightAngleQuad(f,t)),f instanceof c.n&&s.push(this.visualizePoint(f,t))}}catch(v){d.e(v)}finally{d.f()}return(0,o.AL)(s)}},{key:"_getUniqueHints",value:function(e){var t,i=[],r=(0,n.Z)(e);try{for(r.s();!(t=r.n()).done;){var s,o=t.value,a=!0,u=(0,n.Z)(i);try{for(u.s();!(s=u.n()).done;){var h=s.value;if(o.equals(h)){a=!1;break}}}catch(c){u.e(c)}finally{u.f()}a&&i.push(o)}}catch(c){r.e(c)}finally{r.f()}return i}}]),e}()},2309:function(e,t,i){i.d(t,{n:function(){return u}});var n=i(15671),r=i(43144),s=i(60136),o=i(29388),a=i(1233),u=function(e){(0,s.Z)(i,e);var t=(0,o.Z)(i);function i(e,r){var s;return(0,n.Z)(this,i),(s=t.call(this,r)).point=e,s}return(0,r.Z)(i,[{key:"equals",value:function(e){return e instanceof i&&(0,a.Xv)(this.point,e.point)}}]),i}(i(54082).r)}}]);