"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[5092],{58539:function(e,t,n){function i(){return new Float32Array(3)}function r(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function a(e,t,n){var i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=n,i}function s(){return i()}function u(){return a(1,1,1)}function o(){return a(1,0,0)}function l(){return a(0,1,0)}function h(){return a(0,0,1)}n.d(t,{a:function(){return r},c:function(){return i},f:function(){return a}});var c=s(),f=u(),v=o(),d=l(),y=h();Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:r,fromValues:a,createView:function(e,t){return new Float32Array(e,t,3)},zeros:s,ones:u,unitX:o,unitY:l,unitZ:h,ZEROS:c,ONES:f,UNIT_X:v,UNIT_Y:d,UNIT_Z:y},Symbol.toStringTag,{value:"Module"}))},38212:function(e,t,n){n.d(t,{SR:function(){return y},Ui:function(){return d}});var i=n(43144),r=n(15671),a=n(37762),s=n(29439),u=n(77822),o=n(82626),l=n(61069),h=n(46377),c=n(685),f=n(51630),v=n(94613);function d(e){return p(e,!0)}function y(e){return p(e,!1)}function p(e,t){if((0,u.Wi)(e))return null;var n=e.spatialReference,i=(0,v.C5)(n),r="toJSON"in e?e.toJSON():e;if(!i)return r;var a=(0,v.sS)(n)?102100:4326,s=f.UZ[a].maxX,o=f.UZ[a].minX;if((0,c.wp)(r))return _(r,s,o);if((0,c.aW)(r))return r.points=r.points.map((function(e){return _(e,s,o)})),r;if((0,c.YX)(r))return m(r,i);if((0,c.oU)(r)||(0,c.l9)(r)){var h=(0,l.$P)(C,r),d={xmin:h[0],ymin:h[1],xmax:h[2],ymax:h[3]},y=(0,f.XZ)(d.xmin,o)*(2*s),p=0===y?r:(0,f.Sy)(r,y);return d.xmin+=y,d.xmax+=y,d.xmax>s?Z(p,s,t):d.xmin<o?Z(p,o,t):p}return r}function m(e,t){if(!t)return e;var n=function(e,t){var n=[],i=e.ymin,r=e.ymax,a=e.xmin,u=e.xmax,o=e.xmax-e.xmin,l=(0,s.Z)(t.valid,2),h=l[0],c=l[1],f=x(e.xmin,t),v=f.x,d=f.frameId,y=x(e.xmax,t),p=y.x,m=y.frameId,_=v===p&&o>0;if(o>2*c){var w={xmin:a<u?v:p,ymin:i,xmax:c,ymax:r},Z={xmin:h,ymin:i,xmax:a<u?p:v,ymax:r},C={xmin:0,ymin:i,xmax:c,ymax:r},b={xmin:h,ymin:i,xmax:0,ymax:r},I=[],R=[];g(w,C)&&I.push(d),g(w,b)&&R.push(d),g(Z,C)&&I.push(m),g(Z,b)&&R.push(m);for(var S=d+1;S<m;S++)I.push(S),R.push(S);n.push(new k(w,[d]),new k(Z,[m]),new k(C,I),new k(b,R))}else v>p||_?n.push(new k({xmin:v,ymin:i,xmax:c,ymax:r},[d]),new k({xmin:h,ymin:i,xmax:p,ymax:r},[m])):n.push(new k({xmin:v,ymin:i,xmax:p,ymax:r},[d]));return n}(e,t).map((function(e){return e.extent}));return n.length<2?n[0]||e:n.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:n.map((function(e){return[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]}))}}function _(e,t,n){if(Array.isArray(e)){var i=e[0];if(i>t){var r=(0,f.XZ)(i,t);e[0]=i+r*(-2*t)}else if(i<n){var a=(0,f.XZ)(i,n);e[0]=i+a*(-2*n)}}else{var s=e.x;if(s>t){var u=(0,f.XZ)(s,t);e.x+=u*(-2*t)}else if(s<n){var o=(0,f.XZ)(s,n);e.x+=o*(-2*n)}}return e}function x(e,t){var n,i=(0,s.Z)(t.valid,2),r=i[0],a=i[1],u=2*a,o=0;return e>a?(e-=(n=Math.ceil(Math.abs(e-a)/u))*u,o=n):e<r&&(e+=(n=Math.ceil(Math.abs(e-r)/u))*u,o=-n),{x:e,frameId:o}}function g(e,t){var n=t.xmin,i=t.ymin,r=t.xmax,a=t.ymax;return w(e,n,i)&&w(e,n,a)&&w(e,r,a)&&w(e,r,i)}function w(e,t,n){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax}function Z(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!(0,c.l9)(e);if(i&&(0,h.Zy)(e),n)return(new b).cut(e,t);for(var r=i?e.rings:e.paths,s=i?4:2,u=r.length,o=-2*t,l=0;l<u;l++){var f=r[l];if(f&&f.length>=s){var v,d=[],y=(0,a.Z)(f);try{for(y.s();!(v=y.n()).done;){var p=v.value;d.push([p[0]+o,p[1]])}}catch(m){y.e(m)}finally{y.f()}r.push(d)}}return i?e.rings=r:e.paths=r,e}var k=(0,i.Z)((function e(t,n){(0,r.Z)(this,e),this.extent=t,this.frameIds=n})),C=(0,o.Ue)(),b=function(){function e(){(0,r.Z)(this,e),this.linesIn=[],this.linesOut=[]}return(0,i.Z)(e,[{key:"cut",value:function(e,t){var n;if(this.xCut=t,e.rings)this.closed=!0,n=e.rings,this.minPts=4;else{if(!e.paths)return null;this.closed=!1,n=e.paths,this.minPts=2}var i,r=(0,a.Z)(n);try{for(r.s();!(i=r.n()).done;){var s=i.value;if(s&&!(s.length<this.minPts)){var u,o=!0,l=(0,a.Z)(s);try{for(l.s();!(u=l.n()).done;){var h=u.value;o?(this.moveTo(h),o=!1):this.lineTo(h)}}catch(g){l.e(g)}finally{l.f()}this.closed&&this.close()}}}catch(g){r.e(g)}finally{r.f()}this._pushLineIn(),this._pushLineOut(),n=[];var c,f=(0,a.Z)(this.linesIn);try{for(f.s();!(c=f.n()).done;){var v=c.value;v&&v.length>=this.minPts&&n.push(v)}}catch(g){f.e(g)}finally{f.f()}var d,y=-2*this.xCut,p=(0,a.Z)(this.linesOut);try{for(p.s();!(d=p.n()).done;){var m=d.value;if(m&&m.length>=this.minPts){var _,x=(0,a.Z)(m);try{for(x.s();!(_=x.n()).done;){_.value[0]+=y}}catch(g){x.e(g)}finally{x.f()}n.push(m)}}}catch(g){p.e(g)}finally{p.f()}return this.closed?e.rings=n:e.paths=n,e}},{key:"moveTo",value:function(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}},{key:"lineTo",value:function(e){var t=this._side(e[0]);if(t*this._prevSide==-1){var n=this._intersect(this._prevPt,e);this._lineTo(this.xCut,n,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}},{key:"close",value:function(){var e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this.lineIn),this._checkClosingPt(this.lineOut)}},{key:"_moveTo",value:function(e,t,n){this.closed?(this.lineIn.push([n<=0?e:this.xCut,t]),this.lineOut.push([n>=0?e:this.xCut,t])):(n<=0&&this.lineIn.push([e,t]),n>=0&&this.lineOut.push([e,t]))}},{key:"_lineTo",value:function(e,t,n){this.closed?(this._addPolyVertex(this.lineIn,n<=0?e:this.xCut,t),this._addPolyVertex(this.lineOut,n>=0?e:this.xCut,t)):n<0?(0===this._prevSide&&this._pushLineOut(),this.lineIn.push([e,t])):n>0?(0===this._prevSide&&this._pushLineIn(),this.lineOut.push([e,t])):this._prevSide<0?(this.lineIn.push([e,t]),this.lineOut.push([e,t])):this._prevSide>0&&(this.lineOut.push([e,t]),this.lineIn.push([e,t]))}},{key:"_addPolyVertex",value:function(e,t,n){var i=e.length;i>1&&e[i-1][0]===t&&e[i-2][0]===t?e[i-1][1]=n:e.push([t,n])}},{key:"_checkClosingPt",value:function(e){var t=e.length;t>3&&e[0][0]===this.xCut&&e[t-2][0]===this.xCut&&e[1][0]===this.xCut&&(e[0][1]=e[t-2][1],e.pop())}},{key:"_side",value:function(e){return e<this.xCut?-1:e>this.xCut?1:0}},{key:"_intersect",value:function(e,t){var n=(this.xCut-e[0])/(t[0]-e[0]);return e[1]+n*(t[1]-e[1])}},{key:"_pushLineIn",value:function(){this.lineIn&&this.lineIn.length>=this.minPts&&this.linesIn.push(this.lineIn),this.lineIn=[]}},{key:"_pushLineOut",value:function(){this.lineOut&&this.lineOut.length>=this.minPts&&this.linesOut.push(this.lineOut),this.lineOut=[]}}]),e}()},95092:function(e,t,n){n.r(t),n.d(t,{default:function(){return ae}});var i=n(29439),r=n(15861),a=n(37762),s=n(15671),u=n(43144),o=n(11752),l=n(61120),h=n(60136),c=n(29388),f=n(87757),v=n(98248),d=(n(32224),n(48739)),y=n(84615),p=n(95181),m=n(77822),_=n(71453),x=n(27970),g=n(35569),w=(n(59537),n(65343),n(61340),n(48916)),Z=n(82626),k=n(86749),C=n(76535),b=n(41125),I=n(68593),R=n(38212),S=function(e){(0,h.Z)(n,e);var t=(0,c.Z)(n);function n(e){return(0,s.Z)(this,n),t.call(this,e)}return(0,u.Z)(n,[{key:"bounds",get:function(){var e=this.coords;return(0,m.Wi)(e)?null:(0,Z.oJ)(e.extent)}},{key:"coords",get:function(){var e,t=null===(e=(0,m.Wg)(this.element.georeference))||void 0===e?void 0:e.coords;return(0,I.dz)(t,this.spatialReference).geometry}},{key:"normalizedCoords",get:function(){return b.Z.fromJSON((0,R.Ui)(this.coords))}},{key:"normalizedBounds",get:function(){return(0,m.pC)(this.normalizedCoords)?(0,Z.oJ)(this.normalizedCoords.extent):null}}]),n}(C.Z);(0,v._)([(0,g.Cb)()],S.prototype,"spatialReference",void 0),(0,v._)([(0,g.Cb)()],S.prototype,"element",void 0),(0,v._)([(0,g.Cb)()],S.prototype,"bounds",null),(0,v._)([(0,g.Cb)()],S.prototype,"coords",null),(0,v._)([(0,g.Cb)()],S.prototype,"normalizedCoords",null),(0,v._)([(0,g.Cb)()],S.prototype,"normalizedBounds",null),S=(0,v._)([(0,w.j)("esri.layers.support.media.MediaElementView")],S);n(51065),n(59404),n(31154);var M=n(49685),T=n(57331),O=n(77284),P=n(81573),V=n(25766),E=n(69953),A=n(19240),U=n(34507),q=n(74724),W=n(94879),D=n(78945),L=function(e){(0,h.Z)(n,e);var t=(0,c.Z)(n);function n(e){var i;return(0,s.Z)(this,n),(i=t.call(this)).elementView=e,i.isWrapAround=!1,i._vertices=new Float32Array(20),i._handles=[],i._handles.push((0,x.YP)((function(){return i.elementView.element.opacity}),(function(e){return i.opacity=e}),x.nn),(0,x.YP)((function(){return[i.elementView.coords]}),(function(){i.requestRender()}),x.nn),(0,x.gx)((function(){return i.elementView.element.loaded}),(function(){var e=i.elementView.element;i.ready(),"video"===e.type&&(0,m.pC)(e.content)&&i._handles.push((0,P.on)(e.content,"play",(function(){return i.requestRender()})))}),x.nn)),e.element.load().catch((function(t){y.Z.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new O.Z("element-load-error","Element cannot be displayed",{element:e,error:t}))})),i}return(0,u.Z)(n,[{key:"destroy",value:function(){var e;this._handles.forEach((function(e){return e.remove()})),null!==(e=this.texture)&&void 0!==e&&e.dispose(),this.texture=null}},{key:"dvsMat3",get:function(){return this.parent.dvsMat3}},{key:"beforeRender",value:function(e){var t=e.context,i=this.elementView.element.content;if((0,m.pC)(i)){var r=i instanceof HTMLImageElement,a=i instanceof HTMLVideoElement,s=r?i.naturalWidth:a?i.videoWidth:i.width,u=r?i.naturalHeight:a?i.videoHeight:i.height;this.texture?a&&!i.paused&&(this.texture.setData(i),this.requestRender(),((0,D.Z)(t.gl)||(0,V.wt)(s)&&(0,V.wt)(u))&&this.texture.generateMipmap()):(this.texture=new q.x(t,{pixelFormat:U.VI.RGBA,dataType:U.Br.UNSIGNED_BYTE,samplingMode:U.cw.LINEAR,wrapMode:U.e8.CLAMP_TO_EDGE,width:s,height:u},i),((0,D.Z)(t.gl)||(0,V.wt)(s)&&(0,V.wt)(u))&&this.texture.generateMipmap(),a&&!i.paused&&this.requestRender())}(0,o.Z)((0,l.Z)(n.prototype),"beforeRender",this).call(this,e)}},{key:"_createTransforms",value:function(){return null}},{key:"updateDrawCoords",value:function(e,t){var n=this.elementView.coords;if(!(0,m.Wi)(n)){var r=(0,i.Z)(n.rings[0],4),a=r[0],s=r[1],u=r[2],o=r[3],l=this._vertices,h=e.x,c=e.y,f=0!==t;f?l.set([s[0]-h,s[1]-c,a[0]-h,a[1]-c,u[0]-h,u[1]-c,o[0]-h,o[1]-c,o[0]-h,o[1]-c,s[0]+t-h,s[1]-c,s[0]+t-h,s[1]-c,a[0]+t-h,a[1]-c,u[0]+t-h,u[1]-c,o[0]+t-h,o[1]-c]):l.set([s[0]-h,s[1]-c,a[0]-h,a[1]-c,u[0]-h,u[1]-c,o[0]-h,o[1]-c]),this.isWrapAround=f}}},{key:"getVAO",value:function(e,t,n){if((0,m.Wi)(this.elementView.coords))return null;var i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=A.f.createVertex(e,U.l1.DYNAMIC_DRAW,i);var r=A.f.createVertex(e,U.l1.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new W.U(e,n,t,{geometry:this._geometryVbo,tex:r})}return this._vao}}]),n}(E.s),z=n(93433),N=n(32578),X=n(7781),j=n(31165),B=n(31561),F=n(58539),Y=n(392),Q=n(94613),G=n(97638),H=n(10542),J=n(9661),$=function(e){(0,h.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,s.Z)(this,n),(e=t.apply(this,arguments))._localOrigin=(0,N.vW)(0,0),e._viewStateId=-1,e._dvsMat3=(0,j.c)(),e.requiresDedicatedFBO=!1,e}return(0,u.Z)(n,[{key:"dvsMat3",get:function(){return this._dvsMat3}},{key:"beforeRender",value:function(e){this._updateMatrices(e),this._updateOverlays(e,this.children);var t,n=(0,a.Z)(this.children);try{for(n.s();!(t=n.n()).done;){t.value.beforeRender(e)}}catch(i){n.e(i)}finally{n.f()}}},{key:"prepareRenderPasses",value:function(e){var t=this,i=e.registerRenderPass({name:"overlay",brushes:[H.U.overlay],target:function(){return t.children},drawPhase:J.jx.MAP});return[].concat((0,z.Z)((0,o.Z)((0,l.Z)(n.prototype),"prepareRenderPasses",this).call(this,e)),[i])}},{key:"_updateMatrices",value:function(e){var t=e.state,n=t.id,i=t.size,r=t.pixelRatio,a=t.resolution,s=t.rotation,u=t.viewpoint,o=t.displayMat3;if(this._viewStateId!==n){var l=Math.PI/180*s,h=r*i[0],c=r*i[1],f=u.targetGeometry,v=f.x,d=f.y,y=(0,Y.or)(v,t.spatialReference);this._localOrigin.x=y,this._localOrigin.y=d;var p=a*h,m=a*c,_=(0,X.b)(this._dvsMat3);(0,X.m)(_,_,o),(0,X.c)(_,_,(0,B.f)(h/2,c/2)),(0,X.d)(_,_,(0,F.f)(h/p,-c/m,1)),(0,X.r)(_,_,-l),this._viewStateId=n}}},{key:"_updateOverlays",value:function(e,t){var n=e.state,r=n.rotation,s=n.spatialReference,u=n.worldScreenWidth,o=n.size,l=n.viewpoint,h=this._localOrigin,c=0;if(s.isWrappable){var f=o[0],v=o[1],d=180/Math.PI*r,y=Math.abs(Math.cos(d)),p=Math.abs(Math.sin(d)),_=Math.round(f*y+v*p),x=(0,i.Z)((0,Q.C5)(s).valid,2),g=x[0],w=x[1],Z=(0,G.ut)(s),k=l.targetGeometry,C=k.x,b=[C,k.y],I=[0,0];n.toScreen(I,b);var R,S=[0,0];R=_>u?.5*u:.5*_;var M=Math.floor((C+.5*Z)/Z),T=g+M*Z,O=w+M*Z,P=[I[0]+R,0];n.toMap(S,P),S[0]>O&&(c=Z),P[0]=I[0]-R,n.toMap(S,P),S[0]<T&&(c=-Z);var V,E=(0,a.Z)(t);try{for(E.s();!(V=E.n()).done;){var A=V.value,U=A.elementView.bounds;if(!(0,m.Wi)(U)){var q=(0,i.Z)(U,3),W=q[0],D=q[2];W<g&&D>g?A.updateDrawCoords(h,Z):D>w&&W<w?A.updateDrawCoords(h,-Z):A.updateDrawCoords(h,c)}}}catch(N){E.e(N)}finally{E.f()}}else{var L,z=(0,a.Z)(t);try{for(z.s();!(L=z.n()).done;){L.value.updateDrawCoords(h,c)}}catch(N){z.e(N)}finally{z.f()}}}}]),n}(n(9163).Z),K=n(74605),ee=n(26828),te=n(13179),ne=function(e){(0,h.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,s.Z)(this,n),(e=t.apply(this,arguments))._overlayContainer=null,e._fetchQueue=null,e._tileStrategy=null,e._elementReferences=new Map,e.layer=null,e.elements=new d.Z,e}return(0,u.Z)(n,[{key:"attach",value:function(){var e=this;this.handles.add((0,x.on)((function(){return e.layer.source}),"refresh",(function(){var t,n=(0,a.Z)(e._tileStrategy.tiles);try{for(n.s();!(t=n.n()).done;){var i=t.value;e._updateTile(i)}}catch(r){n.e(r)}finally{n.f()}e.requestUpdate()}))),this._overlayContainer=new $,this.container.addChild(this._overlayContainer),this._fetchQueue=new M.Z({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:function(t,n){return e._queryElements(t,n)}}),this._tileStrategy=new T.Z({cachePolicy:"purge",resampling:!0,acquireTile:function(t){return e._acquireTile(t)},releaseTile:function(t){return e._releaseTile(t)},tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}},{key:"detach",value:function(){this.handles.removeAll(),this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear()}},{key:"supportsSpatialReference",value:function(e){return!0}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"update",value:function(e){this._tileStrategy.update(e)}},{key:"hitTest",value:function(){var e=(0,r.Z)(f.mark((function e(t,n){var i,r,s,u,o,l,h;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=[],r=[t.x,t.y],s=(0,a.Z)(this.elements);try{for(s.s();!(u=s.n()).done;)l=u.value,h=null===(o=(0,m.Wg)(l.georeference))||void 0===o?void 0:o.coords,(0,m.pC)(h)&&(0,k.wP)(h.rings,r)&&i.push({type:"media",element:l,layer:this.layer,mapPoint:t})}catch(n){s.e(n)}finally{s.f()}return e.abrupt("return",i.reverse());case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){return null!=this.layer.source&&(0,o.Z)((0,l.Z)(n.prototype),"canResume",this).call(this)}},{key:"doRefresh",value:function(){var e=(0,r.Z)(f.mark((function e(){return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"_acquireTile",value:function(e){var t=new re(e.clone());return this._updateTile(t),t}},{key:"_updateTile",value:function(e){var t=this;this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then((function(n){var r=e.setElements(n),a=(0,i.Z)(r,2),s=a[0],u=a[1];t._acquireElements(e,s),t._releaseElements(e,u),t.requestUpdate()}),(function(e){(0,_.D_)(e)||y.Z.getLogger(t.declaredClass).error(e)})))}},{key:"_releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),e.elements&&this._releaseElements(e,e.elements),this.requestUpdate()}},{key:"_queryElements",value:function(){var e=(0,r.Z)(f.mark((function e(t,n){var i,r;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.layer.source,!(0,m.Wi)(i)){e.next=3;break}return e.abrupt("return",[]);case 3:return this.view.featuresTilingScheme.getTileBounds(ie,t,!0),r=new te.Z({xmin:ie[0],ymin:ie[1],xmax:ie[2],ymax:ie[3],spatialReference:this.view.spatialReference}),e.abrupt("return",i.queryElements(r,n));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_acquireElements",value:function(e,t){var n=this,i=this.layer.source,r=this.view.spatialReference;if(!(0,m.Wi)(i)){var s,u=(0,a.Z)(t);try{var o=function(){var t=s.value;(0,p.s1)(n._elementReferences,t.uid,(function(){var e=new S({element:t,spatialReference:r}),i=new L(e);return n._overlayContainer.addChild(i),n.elements.add(t),{tiles:new Set,projectedElement:e,overlay:i}})).tiles.add(e)};for(u.s();!(s=u.n()).done;)o()}catch(l){u.e(l)}finally{u.f()}}}},{key:"_releaseElements",value:function(e,t){var n,i=(0,a.Z)(t);try{for(i.s();!(n=i.n()).done;){var r=n.value,s=this._elementReferences.get(r.uid);s.tiles.delete(e),s.tiles.size||(this._overlayContainer.removeChild(s.overlay),s.overlay.destroy(),s.projectedElement.destroy(),this._elementReferences.delete(r.uid),this.elements.remove(r))}}catch(u){i.e(u)}finally{i.f()}}}]),n}((0,K.y)(ee.Z));(0,v._)([(0,g.Cb)()],ne.prototype,"_fetchQueue",void 0),(0,v._)([(0,g.Cb)()],ne.prototype,"layer",void 0),(0,v._)([(0,g.Cb)({readOnly:!0})],ne.prototype,"elements",void 0),ne=(0,v._)([(0,w.j)("esri.views.2d.layers.MediaLayerView2D")],ne);var ie=(0,Z.Ue)(),re=function(){function e(t){(0,s.Z)(this,e),this.key=t,this.elements=null,this.isReady=!1,this.visible=!0}return(0,u.Z)(e,[{key:"setElements",value:function(e){var t=[],n=new Set(this.elements);this.elements=e;var i,r=(0,a.Z)(e);try{for(r.s();!(i=r.n()).done;){var s=i.value;n.has(s)?n.delete(s):t.push(s)}}catch(u){r.e(u)}finally{r.f()}return this.isReady=!0,[t,Array.from(n)]}}]),e}(),ae=ne}}]);