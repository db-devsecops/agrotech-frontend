"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[3505],{13505:function(e,t,a){a.r(t),a.d(t,{getContrastingBackgroundTheme:function(){return _},getRenderSymbolParameters:function(){return F},previewSymbol2D:function(){return C}});var n=a(1413),l=a(15861),i=a(87757),o=a(22533),r=a(77284),u=a(32578),s=a(64160),c=a(67967),d=a(8415);function h(e){var t=e.r,a=e.g,n=e.b,l=e.a;return l<1&&(t=Math.round(l*t+255*(1-l)),a=Math.round(l*a+255*(1-l)),n=Math.round(l*n+255*(1-l))),new o.Z({r:t,g:a,b:n})}function m(e){var t=h(e);return.2126*t.r+.7152*t.g+.0722*t.b}var v="picture-fill",p=c.b_.size,f=c.b_.maxSize,y=c.b_.maxOutlineSize,g=c.b_.lineWidth,w=225,b=document.createElement("canvas");function k(e,t){var a=b.getContext("2d"),n=[];return t&&(t.weight&&n.push(t.weight),t.size&&n.push(t.size+"px"),t.family&&n.push(t.family)),a.font=n.join(" "),a.measureText(e).width}function M(e){if(0===e.length)return 0;if(e.length>2){var t=(0,u.Wz)(1),a=parseFloat(e);switch(e.slice(-2)){case"px":return a;case"pt":return a*t;case"in":return 72*a*t;case"pc":return 12*a*t;case"mm":return 2.8346456692913384*a*t;case"cm":return 28.346456692913385*a*t}}return parseFloat(e)}function x(e){var t=null===e||void 0===e?void 0:e.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,u.F2)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,u.F2)(t.height):null}}function z(e,t){return L.apply(this,arguments)}function L(){return L=(0,l.Z)(i.mark((function e(t,a){var n,l,o;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.fill,l=t.color,"pattern"!==(null===n||void 0===n?void 0:n.type)||!l||t.type===v){e.next=6;break}return e.next=4,(0,s.Od)(n.src,l.toCss(!0));case 4:o=e.sent,n.src=o,a.fill=n;case 6:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function Z(e,t){return e>t?"dark":"light"}function F(e,t){var a,l,i="number"==typeof(null===t||void 0===t?void 0:t.size)?null===t||void 0===t?void 0:t.size:null,o=null!=i?(0,u.F2)(i):null,r=null!=(null===t||void 0===t?void 0:t.maxSize)?(0,u.F2)(t.maxSize):null,d=null!=(null===t||void 0===t?void 0:t.rotation)?t.rotation:"angle"in e?e.angle:null,h=(0,s._M)(e),m=(0,s.mx)(e);"dark"!==_(e,245)||(null===t||void 0===t?void 0:t.ignoreWhiteSymbols)||(m=(0,n.Z)((0,n.Z)({width:.75},m),{},{color:"#bdc3c7"}));var w={shape:null,fill:h,stroke:m,offset:[0,0]};(null===(a=m)||void 0===a?void 0:a.width)&&(m.width=Math.min(m.width,y));var b=(null===(l=m)||void 0===l?void 0:l.width)||0,z=null!=(null===t||void 0===t?void 0:t.size)&&(null==(null===t||void 0===t?void 0:t.scale)||(null===t||void 0===t?void 0:t.scale)),L=0,Z=0,F=!1;switch(e.type){case"simple-marker":var C=e.style,S=Math.min(null!=o?o:(0,u.F2)(e.size),r||f);switch(L=S,Z=S,C){case"circle":w.shape={type:"circle",cx:0,cy:0,r:.5*S},z||(L+=b,Z+=b);break;case"cross":w.shape={type:"path",path:[{command:"M",values:[0,.5*Z]},{command:"L",values:[L,.5*Z]},{command:"M",values:[.5*L,0]},{command:"L",values:[.5*L,Z]}]};break;case"diamond":w.shape={type:"path",path:[{command:"M",values:[0,.5*Z]},{command:"L",values:[.5*L,0]},{command:"L",values:[L,.5*Z]},{command:"L",values:[.5*L,Z]},{command:"Z",values:[]}]},z||(L+=b,Z+=b);break;case"square":w.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[L,0]},{command:"L",values:[L,Z]},{command:"L",values:[0,Z]},{command:"Z",values:[]}]},z||(L+=b,Z+=b),d&&(F=!0);break;case"triangle":w.shape={type:"path",path:[{command:"M",values:[.5*L,0]},{command:"L",values:[L,Z]},{command:"L",values:[0,Z]},{command:"Z",values:[]}]},z||(L+=b,Z+=b),d&&(F=!0);break;case"x":w.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[L,Z]},{command:"M",values:[L,0]},{command:"L",values:[0,Z]}]},d&&(F=!0);break;case"path":w.shape={type:"path",path:e.path||""},z||(L+=b,Z+=b),d&&(F=!0),z=!0}break;case"simple-line":var j,D=x(t),O=D.width,q=D.height,E=null!=q?q:Math.min(null!=o?o:b,r||y),P=null!=O?O:g;m.width=E,L=P,Z=E;var T=(null===w||void 0===w||null===(j=w.stroke)||void 0===j?void 0:j.cap)||"butt",W="round"===T;z=!0,w.stroke.cap="butt"===T?"square":T,w.shape={type:"path",path:[{command:"M",values:[W?E/2:0,Z/2]},{command:"L",values:[W?L-E/2:L,Z/2]}]};break;case v:case"simple-fill":var A="object"==typeof(null===t||void 0===t?void 0:t.symbolConfig)&&(null===t||void 0===t?void 0:t.symbolConfig.isSquareFill),B=x(t),R=B.width,V=B.height;L=A&&null!=R?R:null!=o?o:p,Z=A&&null!=V?V:L,z||(L+=b,Z+=b),z=!0,w.shape=A?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[L,0]},{command:"L",values:[L,Z]},{command:"L",values:[0,Z]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:c.JZ.fill[0];break;case"picture-marker":var H=(0,u.F2)(e.width),J=(0,u.F2)(e.height),G=null!=o?o:Math.max(H,J),I=H/J;H=I<=1?Math.ceil(G*I):G,J=I<=1?G:Math.ceil(G/I),L=Math.min(H,r||f),Z=Math.min(J,r||f),w.shape={type:"image",x:-Math.round(L/2),y:-Math.round(Z/2),width:L,height:Z,src:e.url||""},d&&(F=!0);break;case"text":var K=e,N=K.text||"Aa",Q=K.font,U=Math.min(null!=o?o:(0,u.F2)(Q.size),r||f),X=k(N,{weight:Q.weight,size:U,family:Q.family}),Y=/[\uE600-\uE6FF]/.test(N);L=Y?U:X,Z=U;var $=.25*M((Q?U:0).toString());Y&&($+=5),w.shape={type:"text",text:N,x:K.xoffset||0,y:K.yoffset||$,align:"middle",alignBaseline:K.verticalAlignment,decoration:Q&&Q.decoration,rotated:K.rotated,kerning:K.kerning},w.font=Q&&{size:U,style:Q.style,decoration:Q.decoration,weight:Q.weight,family:Q.family}}return{shapeDescriptor:w,size:[L,Z],renderOptions:{node:null===t||void 0===t?void 0:t.node,scale:z,opacity:null===t||void 0===t?void 0:t.opacity,rotation:d,useRotationSize:F,effectView:null===t||void 0===t?void 0:t.effectView}}}function C(e,t){return S.apply(this,arguments)}function S(){return S=(0,l.Z)(i.mark((function e(t,a){var l,o,u,s,h,m;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=F(t,a),o=l.shapeDescriptor,u=l.size,s=l.renderOptions,o.shape){e.next=3;break}throw new r.Z("symbolPreview: renderPreviewHTML2D","symbol not supported.");case 3:return e.next=5,z(t,o);case 5:return h=[[o]],"object"==typeof(null===a||void 0===a?void 0:a.symbolConfig)&&null!==a&&void 0!==a&&a.symbolConfig.applyColorModulation&&(m=.6*u[0],h.unshift([(0,n.Z)((0,n.Z)({},o),{},{offset:[-m,0],fill:(0,c.dc)(o.fill,-.3)})]),h.push([(0,n.Z)((0,n.Z)({},o),{},{offset:[m,0],fill:(0,c.dc)(o.fill,.3)})]),u[0]+=2*m,s.scale=!1),e.abrupt("return",(0,d.w)(h,u,s));case 8:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w,a=(0,s._M)(e),n=(0,s.mx)(e),l=!a||"type"in a?null:new o.Z(a),i=null!==n&&void 0!==n&&n.color?new o.Z(null===n||void 0===n?void 0:n.color):null,r=l?Z(m(l),t):null,u=i?Z(m(i),t):null;return u?r?r===u?r:t>=w?"light":"dark":u:r}}}]);