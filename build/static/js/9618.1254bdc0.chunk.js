"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[9618],{26781:function(e,t,r){function n(){return[1,0,0,0,1,0,0,0,1]}function o(e,t){return new Float64Array(e,t,9)}r.d(t,{a:function(){return o},c:function(){return n}});Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,r,n,o,a,i,u,f){return[e,t,r,n,o,a,i,u,f]},createView:o},Symbol.toStringTag,{value:"Module"}))},86356:function(e,t,r){r.d(t,{c:function(){return h},g:function(){return l},i:function(){return v},j:function(){return S},k:function(){return y},m:function(){return s},r:function(){return R},s:function(){return c}});var n=r(26781),o=r(57914),a=r(45187),i=r(56508),u=r(24336),f=r(73714);function c(e,t,r){r*=.5;var n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function l(e,t){var r=2*Math.acos(t[3]),n=Math.sin(r/2);return n>i.E?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function s(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],u=r[0],f=r[1],c=r[2],l=r[3];return e[0]=n*l+i*u+o*c-a*f,e[1]=o*l+i*f+a*u-n*c,e[2]=a*l+i*c+n*f-o*u,e[3]=i*l-n*u-o*f-a*c,e}function d(e,t,r,n){var o,a,u,f,c,l=t[0],s=t[1],d=t[2],v=t[3],h=r[0],b=r[1],y=r[2],p=r[3];return(a=l*h+s*b+d*y+v*p)<0&&(a=-a,h=-h,b=-b,y=-y,p=-p),1-a>i.E?(o=Math.acos(a),u=Math.sin(o),f=Math.sin((1-n)*o)/u,c=Math.sin(n*o)/u):(f=1-n,c=n),e[0]=f*l+c*h,e[1]=f*s+c*b,e[2]=f*d+c*y,e[3]=f*v+c*p,e}function v(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=r*r+n*n+o*o+a*a,u=i?1/i:0;return e[0]=-r*u,e[1]=-n*u,e[2]=-o*u,e[3]=a*u,e}function h(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function b(e,t){var r,n=t[0]+t[4]+t[8];if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{var o=0;t[4]>t[0]&&(o=1),t[8]>t[3*o+o]&&(o=2);var a=(o+1)%3,i=(o+2)%3;r=Math.sqrt(t[3*o+o]-t[3*a+a]-t[3*i+i]+1),e[o]=.5*r,r=.5/r,e[3]=(t[3*a+i]-t[3*i+a])*r,e[a]=(t[3*a+o]+t[3*o+a])*r,e[i]=(t[3*i+o]+t[3*o+i])*r}return e}function y(e,t,r,n){var o=.5*Math.PI/180;t*=o,r*=o,n*=o;var a=Math.sin(t),i=Math.cos(t),u=Math.sin(r),f=Math.cos(r),c=Math.sin(n),l=Math.cos(n);return e[0]=a*f*l-i*u*c,e[1]=i*u*l+a*f*c,e[2]=i*f*c-a*u*l,e[3]=i*f*l+a*u*c,e}var p=f.c,g=f.s,w=f.a,A=s,O=f.b,I=f.d,m=f.l,M=f.e,T=M,U=f.f,C=U,E=f.n,S=f.g,F=f.h;function R(e,t,r){var n=(0,u.e)(t,r);return n<-.999999?((0,u.f)(Z,L,t),(0,u.u)(Z)<1e-6&&(0,u.f)(Z,N,t),(0,u.n)(Z,Z),c(e,Z,Math.PI),e):n>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,u.f)(Z,t,r),e[0]=Z[0],e[1]=Z[1],e[2]=Z[2],e[3]=1+n,E(e,e))}var Z=(0,a.c)(),L=(0,a.f)(1,0,0),N=(0,a.f)(0,1,0);var P=(0,o.a)(),D=(0,o.a)();var B=(0,n.c)();Object.freeze(Object.defineProperty({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:c,getAxisAngle:l,multiply:s,rotateX:function(e,t,r){r*=.5;var n=t[0],o=t[1],a=t[2],i=t[3],u=Math.sin(r),f=Math.cos(r);return e[0]=n*f+i*u,e[1]=o*f+a*u,e[2]=a*f-o*u,e[3]=i*f-n*u,e},rotateY:function(e,t,r){r*=.5;var n=t[0],o=t[1],a=t[2],i=t[3],u=Math.sin(r),f=Math.cos(r);return e[0]=n*f-a*u,e[1]=o*f+i*u,e[2]=a*f+n*u,e[3]=i*f-o*u,e},rotateZ:function(e,t,r){r*=.5;var n=t[0],o=t[1],a=t[2],i=t[3],u=Math.sin(r),f=Math.cos(r);return e[0]=n*f+o*u,e[1]=o*f-n*u,e[2]=a*f+i*u,e[3]=i*f-a*u,e},calculateW:function(e,t){var r=t[0],n=t[1],o=t[2];return e[0]=r,e[1]=n,e[2]=o,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-o*o)),e},slerp:d,random:function(e){var t=(0,i.R)(),r=(0,i.R)(),n=(0,i.R)(),o=Math.sqrt(1-t),a=Math.sqrt(t);return e[0]=o*Math.sin(2*Math.PI*r),e[1]=o*Math.cos(2*Math.PI*r),e[2]=a*Math.sin(2*Math.PI*n),e[3]=a*Math.cos(2*Math.PI*n),e},invert:v,conjugate:h,fromMat3:b,fromEuler:y,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:p,set:g,add:w,mul:A,scale:O,dot:I,lerp:m,length:M,len:T,squaredLength:U,sqrLen:C,normalize:E,exactEquals:S,equals:F,rotationTo:R,sqlerp:function(e,t,r,n,o,a){return d(P,t,o,a),d(D,r,n,a),d(e,P,D,2*a*(1-a)),e},setAxes:function(e,t,r,n){var o=B;return o[0]=r[0],o[3]=r[1],o[6]=r[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],E(e,b(e,o))}},Symbol.toStringTag,{value:"Module"}))},57914:function(e,t,r){function n(){return[0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3]]}function a(e,t){return new Float64Array(e,t,4)}r.d(t,{I:function(){return i},a:function(){return n},b:function(){return o},c:function(){return a}});var i=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:o,fromValues:function(e,t,r,n){return[e,t,r,n]},createView:a,IDENTITY:i},Symbol.toStringTag,{value:"Module"}))},58539:function(e,t,r){function n(){return new Float32Array(3)}function o(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function a(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}function i(){return n()}function u(){return a(1,1,1)}function f(){return a(1,0,0)}function c(){return a(0,1,0)}function l(){return a(0,0,1)}r.d(t,{a:function(){return o},c:function(){return n},f:function(){return a}});var s=i(),d=u(),v=f(),h=c(),b=l();Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:o,fromValues:a,createView:function(e,t){return new Float32Array(e,t,3)},zeros:i,ones:u,unitX:f,unitY:c,unitZ:l,ZEROS:s,ONES:d,UNIT_X:v,UNIT_Y:h,UNIT_Z:b},Symbol.toStringTag,{value:"Module"}))},99618:function(e,t,r){r.r(t),r.d(t,{default:function(){return Te}});var n=r(37762),o=r(15671),a=r(43144),i=r(77822),u=r(28007),f=r(86356);function c(){var e=new Float32Array(4);return e[3]=1,e}Object.freeze(Object.defineProperty({__proto__:null,create:c,clone:function(e){var t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,r,n){var o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=n,o},createView:function(e,t){return new Float32Array(e,t,4)}},Symbol.toStringTag,{value:"Module"}));var l=r(24336),s=r(58539),d=r(68593),v=r(26208),h=r(15761),b=r(65661),y=r(28244),p=r(1413),g=r(77284),w=r(37924),A=r(84615),O=!0,I=0,m=10,M=10,T=12,U=16;function C(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+I,m)),version:t.getUint16(r+M,O),checksum:t.getUint32(r+T,O)}}var E=0,S=4,F=8,R=16,Z=24,L=32,N=40,P=48,D=56,B=64,V=72,z=80,_=84,x=88;function k(e){var t=new DataView(e,0),r=0,n=C(e,t,r),o=n.identifier,a=n.version;if(r+=U,"LEPCC     "!==o)throw new g.Z("lepcc-decode-error","Bad identifier");if(a>1)throw new g.Z("lepcc-decode-error","Unknown version");var i=function(e,t){return{sizeLo:e.getUint32(t+E,O),sizeHi:e.getUint32(t+S,O),minX:e.getFloat64(t+F,O),minY:e.getFloat64(t+R,O),minZ:e.getFloat64(t+Z,O),maxX:e.getFloat64(t+L,O),maxY:e.getFloat64(t+N,O),maxZ:e.getFloat64(t+P,O),errorX:e.getFloat64(t+D,O),errorY:e.getFloat64(t+B,O),errorZ:e.getFloat64(t+V,O),count:e.getUint32(t+z,O),reserved:e.getUint32(t+_,O)}}(t,r);if(r+=x,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new g.Z("lepcc-decode-error","Bad size");var u=new Float64Array(3*i.count),f=[],c=[],l=[],s=[];if(r=j(e,r,f),r=j(e,r,c),r=j(e,r,l),(r=j(e,r,s))!==e.byteLength)throw new g.Z("lepcc-decode-error","Bad length");for(var d=0,v=0,h=0;h<f.length;h++){v+=f[h];for(var b=0,y=0;y<c[h];y++){b+=l[d];var p=s[d];u[3*d]=Math.min(i.maxX,i.minX+2*i.errorX*b),u[3*d+1]=Math.min(i.maxY,i.minY+2*i.errorY*v),u[3*d+2]=Math.min(i.maxZ,i.minZ+2*i.errorZ*p),d++}}return{errorX:i.errorX,errorY:i.errorY,errorZ:i.errorZ,result:u}}function j(e,t,r){var n=[];t=X(e,t,n);for(var o=[],a=0;a<n.length;a++){o.length=0,t=X(e,t,o);for(var i=0;i<o.length;i++)r.push(o[i]+n[a])}return t}function X(e,t,r){var n=new DataView(e,t),o=n.getUint8(0),a=31&o,i=!!(32&o),u=(192&o)>>6,f=0;if(0===u)f=n.getUint32(1,O),t+=5;else if(1===u)f=n.getUint16(1,O),t+=3;else{if(2!==u)throw new g.Z("lepcc-decode-error","Bad count type");f=n.getUint8(1),t+=2}if(i)throw new g.Z("lepcc-decode-error","LUT not implemented");for(var c=Math.ceil(f*a/8),l=new Uint8Array(e,t,c),s=0,d=0,v=0,h=-1>>>32-a,b=0;b<f;b++){for(;d<a;)s|=l[v]<<d,d+=8,v+=1;r[b]=s&h,s>>>=a,(d-=a)+a>32&&(s|=l[v-1]>>8-d)}return t+v}var q=0,Y=4,G=8,H=12,J=14,W=15,K=16;function Q(e){var t=new DataView(e,0),r=0,n=C(e,t,r),o=n.identifier,a=n.version;if(r+=U,"ClusterRGB"!==o)throw new g.Z("lepcc-decode-error","Bad identifier");if(a>1)throw new g.Z("lepcc-decode-error","Unknown version");var i=function(e,t){return{sizeLo:e.getUint32(t+q,O),sizeHi:e.getUint32(t+Y,O),count:e.getUint32(t+G,O),colorMapCount:e.getUint16(t+H,O),lookupMethod:e.getUint8(t+J),compressionMethod:e.getUint8(t+W)}}(t,r);if(r+=K,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new g.Z("lepcc-decode-error","Bad size");if((2===i.lookupMethod||1===i.lookupMethod)&&0===i.compressionMethod){if(3*i.colorMapCount+i.count+r!==e.byteLength||i.colorMapCount>256)throw new g.Z("lepcc-decode-error","Bad count");for(var u=new Uint8Array(e,r,3*i.colorMapCount),f=new Uint8Array(e,r+3*i.colorMapCount,i.count),c=new Uint8Array(3*i.count),l=0;l<i.count;l++){var s=f[l];c[3*l]=u[3*s],c[3*l+1]=u[3*s+1],c[3*l+2]=u[3*s+2]}return c}if(0===i.lookupMethod&&0===i.compressionMethod){if(3*i.count+r!==e.byteLength||0!==i.colorMapCount)throw new g.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(i.lookupMethod<=2&&1===i.compressionMethod){if(r+3!==e.byteLength||1!==i.colorMapCount)throw new g.Z("lepcc-decode-error","Bad count");for(var d=t.getUint8(r),v=t.getUint8(r+1),h=t.getUint8(r+2),b=new Uint8Array(3*i.count),y=0;y<i.count;y++)b[3*y]=d,b[3*y+1]=v,b[3*y+2]=h;return b}throw new g.Z("lepcc-decode-error","Bad method "+i.lookupMethod+","+i.compressionMethod)}var $=0,ee=4,te=8,re=12,ne=14,oe=15,ae=16;function ie(e){var t=new DataView(e,0),r=0,n=C(e,t,r),o=n.identifier,a=n.version;if(r+=U,"Intensity "!==o)throw new g.Z("lepcc-decode-error","Bad identifier");if(a>1)throw new g.Z("lepcc-decode-error","Unknown version");var i=function(e,t){return{sizeLo:e.getUint32(t+$,O),sizeHi:e.getUint32(t+ee,O),count:e.getUint32(t+te,O),scaleFactor:e.getUint16(t+re,O),bitsPerPoint:e.getUint8(t+ne),reserved:e.getUint8(t+oe)}}(t,r);if(r+=ae,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new g.Z("lepcc-decode-error","Bad size");var u=new Uint16Array(i.count);if(8===i.bitsPerPoint){if(i.count+r!==e.byteLength)throw new g.Z("lepcc-decode-error","Bad size");for(var f=new Uint8Array(e,r,i.count),c=0;c<i.count;c++)u[c]=f[c]*i.scaleFactor}else if(16===i.bitsPerPoint){if(2*i.count+r!==e.byteLength)throw new g.Z("lepcc-decode-error","Bad size");for(var l=new Uint16Array(e,r,i.count),s=0;s<i.count;s++)u[s]=l[s]*i.scaleFactor}else{var d=[];if(X(e,r,d)!==e.byteLength)throw new g.Z("lepcc-decode-error","Bad size");for(var v=0;v<i.count;v++)u[v]=d[v]*i.scaleFactor}return u}var ue=r(61879),fe=A.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function ce(e,t,r){for(var n="",o=0;o<r;){var a=e[t+o];if(a<128)n+=String.fromCharCode(a),o++;else if(a>=192&&a<224){if(o+1>=r)throw new g.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");var i=(31&a)<<6|63&e[t+o+1];n+=String.fromCharCode(i),o+=2}else if(a>=224&&a<240){if(o+2>=r)throw new g.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var u=(15&a)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];n+=String.fromCharCode(u),o+=3}else{if(!(a>=240&&a<248))throw new g.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(o+3>=r)throw new g.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var f=(7&a)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(f>=65536){var c=55296+(f-65536>>10),l=56320+(1023&f);n+=String.fromCharCode(c,l)}else n+=String.fromCharCode(f);o+=4}}return n}function le(e,t){for(var r={byteOffset:0,byteCount:0,fields:Object.create(null)},n=0,o=0;o<t.length;o++){var a=t[o],i=a.valueType||a.type,u=ye[i];r.fields[a.property]=u(e,n),n+=be[i].BYTES_PER_ELEMENT}return r.byteCount=n,r}function se(e,t){return new(0,be[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function de(e,t,r){if(t!==e&&fe.error("Invalid ".concat(r," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new g.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}var ve={position:ue.T.POSITION,normal:ue.T.NORMAL,color:ue.T.COLOR,uv0:ue.T.UV0,region:ue.T.UVREGION};function he(e,t,r){if("lepcc-rgb"===e.encoding)return Q(t);if("lepcc-intensity"===e.encoding)return ie(t);if(null!=e.encoding&&""!==e.encoding)throw new g.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(fe.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(fe.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var n=function(e,t,r){for(var n=null!=t.header?le(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:n,byteOffset:n.byteCount,byteCount:0,entries:Object.create(null)},a=n.byteCount,i=0;i<t.ordering.length;i++){var u=t.ordering[i],f=(0,w.d9)(t[u]);if(f.count=n.fields.count,"String"===f.valueType){if(f.byteOffset=a,f.byteCount=n.fields[u+"ByteCount"],"UTF-8"!==f.encoding)throw new g.Z("unsupported-encoding","Unsupported String encoding.",{encoding:f.encoding})}else{if(!pe(f.valueType))throw new g.Z("unsupported-value-type","Unsupported binary valueType",{valueType:f.valueType});var c=ge(f.valueType);a+=a%c!=0?c-a%c:0,f.byteOffset=a,f.byteCount=c*f.valuesPerElement*f.count}a+=f.byteCount,o.entries[u]=f}return o.byteCount=a-o.byteOffset,o}(t,e,r);de(n.byteOffset+n.byteCount,t.byteLength,"attribute");var o=n.entries.attributeValues||n.entries.objectIds;if(o){if("String"===o.valueType){var a=n.entries.attributeByteCounts,i=se(t,a),u=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,o);return function(e,t,r){var n,o,a=[],i=0;for(o=0;o<e;o+=1){if((n=t[o])>0){if(a.push(ce(r,i,n-1)),0!==r[i+n-1])throw new g.Z("string-array-error","Invalid string array: missing null termination.")}else a.push(null);i+=n}return a}(a.count,i,u)}return se(t,o)}throw new g.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}var be={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},ye={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}};function pe(e){return be.hasOwnProperty(e)}function ge(e){return pe(e)?be[e].BYTES_PER_ELEMENT:0}function we(e,t){if(null==e.encoding||""===e.encoding){var r=function(e,t){var r,o=le(e,t&&t.header),a=o.byteCount,i={isDraco:!1,header:o,byteOffset:o.byteCount,byteCount:0,vertexAttributes:{}},u=o.fields,f=null!=u.vertexCount?u.vertexCount:u.count,c=(0,n.Z)(t.ordering);try{for(c.s();!(r=c.n()).done;){var l=r.value;if(t.vertexAttributes[l]){var s=(0,p.Z)((0,p.Z)({},t.vertexAttributes[l]),{},{byteOffset:a,count:f}),d=ve[l]?ve[l]:"_"+l;i.vertexAttributes[d]=s,a+=ge(s.valueType)*s.valuesPerElement*f}}}catch(M){c.e(M)}finally{c.f()}var v=u.faceCount;if(t.faces&&v){i.faces={};var h,b=(0,n.Z)(t.ordering);try{for(b.s();!(h=b.n()).done;){var y=h.value;if(t.faces[y]){var g=(0,p.Z)((0,p.Z)({},t.faces[y]),{},{byteOffset:a,count:v});i.faces[y]=g,a+=ge(g.valueType)*g.valuesPerElement*v}}}catch(M){b.e(M)}finally{b.f()}}var w=u.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&w){i.featureAttributes={};var A,O=(0,n.Z)(t.featureAttributeOrder);try{for(O.s();!(A=O.n()).done;){var I=A.value;if(t.featureAttributes[I]){var m=(0,p.Z)((0,p.Z)({},t.featureAttributes[I]),{},{byteOffset:a,count:w});i.featureAttributes[I]=m,a+=("UInt64"===m.valueType?8:ge(m.valueType))*m.valuesPerElement*w}}}catch(M){O.e(M)}finally{O.f()}}return de(a,e.byteLength,"geometry"),i.byteCount=a-i.byteOffset,i}(t,e);if((0,i.Wi)(r.vertexAttributes.position))return;for(var o=se(t,r.vertexAttributes.position),a=r.header.fields,u=[a.offsetX,a.offsetY,a.offsetZ],f=[a.scaleX,a.scaleY,a.scaleZ],c=o.length/3,l=new Float64Array(3*c),s=0;s<c;s++)l[3*s]=o[3*s]*f[0]+u[0],l[3*s+1]=o[3*s+1]*f[1]+u[1],l[3*s+2]=o[3*s+2]*f[2]+u[2];return l}if("lepcc-xyz"===e.encoding)return k(t).result}function Ae(e,t,r){return(0,i.pC)(e)&&e.attributeInfo.useElevation?function(e,t){for(var r=new Float64Array(t),n=0;n<t;n++)r[n]=e[3*n+2];return r}(t,r):(0,i.pC)(e)?he(e.attributeInfo.storageInfo,e.buffer,r):null}function Oe(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}function Ie(e){var t,r=0,o=(0,n.Z)(e||[]);try{for(o.s();!(t=o.n()).done;){r|=1<<t.value}}catch(a){o.e(a)}finally{o.f()}return r}var me=function(){function e(){(0,o.Z)(this,e)}return(0,a.Z)(e,[{key:"transform",value:function(e){var t=this._transform(e),r=[t.points.buffer,t.rgb.buffer];(0,i.pC)(t.pointIdFilterMap)&&r.push(t.pointIdFilterMap.buffer);var o,a=(0,n.Z)(t.attributes);try{for(a.s();!(o=a.n()).done;){var f=o.value;"buffer"in f.values&&(0,u.eP)(f.values.buffer)&&f.values.buffer!==t.rgb.buffer&&r.push(f.values.buffer)}}catch(c){a.e(c)}finally{a.f()}return Promise.resolve({result:t,transferList:r})}},{key:"_transform",value:function(e){var t=we(e.schema,e.geometryBuffer),r=t.length/3,o=null,a=[],u=Ae(e.primaryAttributeData,t,r);(0,i.pC)(e.primaryAttributeData)&&u&&a.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:u});var f=Ae(e.modulationAttributeData,t,r);(0,i.pC)(e.modulationAttributeData)&&f&&a.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:f});var c=function(e,t,r,n){var o=e.rendererJSON,a=e.isRGBRenderer,i=null,u=null;if(t&&a)i=t;else if(t&&"pointCloudUniqueValueRenderer"===o.type){var f=(u=y.Z.fromJSON(o)).colorUniqueValueInfos;i=new Uint8Array(3*n);for(var c=Oe(u.fieldTransformType),l=0;l<n;l++)for(var s=(c?c(t[l]):t[l])+"",d=0;d<f.length;d++)if(f[d].values.includes(s)){i[3*l]=f[d].color.r,i[3*l+1]=f[d].color.g,i[3*l+2]=f[d].color.b;break}}else if(t&&"pointCloudStretchRenderer"===o.type){var v=(u=b.Z.fromJSON(o)).stops;i=new Uint8Array(3*n);for(var p=Oe(u.fieldTransformType),g=0;g<n;g++){var w=p?p(t[g]):t[g],A=v.length-1;if(w<v[0].value)i[3*g]=v[0].color.r,i[3*g+1]=v[0].color.g,i[3*g+2]=v[0].color.b;else if(w>=v[A].value)i[3*g]=v[A].color.r,i[3*g+1]=v[A].color.g,i[3*g+2]=v[A].color.b;else for(var O=1;O<v.length;O++)if(w<v[O].value){var I=(w-v[O-1].value)/(v[O].value-v[O-1].value);i[3*g]=v[O].color.r*I+v[O-1].color.r*(1-I),i[3*g+1]=v[O].color.g*I+v[O-1].color.g*(1-I),i[3*g+2]=v[O].color.b*I+v[O-1].color.b*(1-I);break}}}else if(t&&"pointCloudClassBreaksRenderer"===o.type){var m=(u=h.Z.fromJSON(o)).colorClassBreakInfos;i=new Uint8Array(3*n);for(var M=Oe(u.fieldTransformType),T=0;T<n;T++)for(var U=M?M(t[T]):t[T],C=0;C<m.length;C++)if(U>=m[C].minValue&&U<=m[C].maxValue){i[3*T]=m[C].color.r,i[3*T+1]=m[C].color.g,i[3*T+2]=m[C].color.b;break}}else{i=new Uint8Array(3*n);for(var E=0;E<i.length;E++)i[E]=255}if(r&&u&&u.colorModulation)for(var S=u.colorModulation.minValue,F=u.colorModulation.maxValue,R=0;R<n;R++){var Z=r[R],L=Z>=F?1:Z<=S?.3:.3+.7*(Z-S)/(F-S);i[3*R]=L*i[3*R],i[3*R+1]=L*i[3*R+1],i[3*R+2]=L*i[3*R+2]}return i}(e.rendererInfo,u,f,r);if(e.filterInfo&&e.filterInfo.length>0&&(0,i.pC)(e.filterAttributesData)){var l=e.filterAttributesData.map((function(e){var n=Ae(e,t,r),o={attributeInfo:e.attributeInfo,values:n};return a.push(o),o}));o=new Uint32Array(r),r=function(e,t,r,o,a){for(var i=e.length/3,u=0,f=0;f<i;f++){for(var c=!0,l=0;l<o.length&&c;l++){var s=o[l].filterJSON,d=a[l].values[f];switch(s.type){case"pointCloudValueFilter":var v="exclude"===s.mode;s.values.includes(d)===v&&(c=!1);break;case"pointCloudBitfieldFilter":var h=Ie(s.requiredSetBits),b=Ie(s.requiredClearBits);(d&h)===h&&0==(d&b)||(c=!1);break;case"pointCloudReturnFilter":var y,p=15&d,g=d>>>4&15,w=g>1,A=1===p,O=p===g,I=!1,m=(0,n.Z)(s.includedReturns);try{for(m.s();!(y=m.n()).done;){var M=y.value;if("last"===M&&O||"firstOfMany"===M&&A&&w||"lastOfMany"===M&&O&&w||"single"===M&&!w){I=!0;break}}}catch(T){m.e(T)}finally{m.f()}I||(c=!1)}}c&&(r[u]=f,e[3*u]=e[3*f],e[3*u+1]=e[3*f+1],e[3*u+2]=e[3*f+2],t[3*u]=t[3*f],t[3*u+1]=t[3*f+1],t[3*u+2]=t[3*f+2],u++)}return u}(t,c,o,e.filterInfo,l)}var s,d=(0,n.Z)(e.userAttributesData);try{for(d.s();!(s=d.n()).done;){var p=s.value,g=Ae(p,t,r);a.push({attributeInfo:p.attributeInfo,values:g})}}catch(A){d.e(A)}finally{d.f()}3*r<c.length&&(c=new Uint8Array(c.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(t,r,e.elevationOffset);var w=this._transformCoordinates(t,r,e.obb,v.Z.fromJSON(e.inSR),v.Z.fromJSON(e.outSR));return{obb:e.obb,points:w,rgb:c,attributes:a,pointIdFilterMap:o}}},{key:"_transformCoordinates",value:function(e,t,r,n,o){if(!(0,d.CM)(e,n,0,e,o,0,t))throw Error("Can't reproject");var a=(0,s.f)(r.center[0],r.center[1],r.center[2]),i=(0,s.c)(),u=(0,s.c)();(0,f.c)(Me,r.quaternion);for(var c=new Float32Array(3*t),v=0;v<t;v++)i[0]=e[3*v]-a[0],i[1]=e[3*v+1]-a[1],i[2]=e[3*v+2]-a[2],(0,l.q)(u,i,Me),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(u[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(u[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(u[2])),c[3*v]=i[0],c[3*v+1]=i[1],c[3*v+2]=i[2];return c}},{key:"_applyElevationOffsetInPlace",value:function(e,t,r){if(0!==r)for(var n=0;n<t;n++)e[3*n+2]+=r}}]),e}(),Me=c();function Te(){return new me}},61879:function(e,t,r){var n;r.d(t,{T:function(){return n}}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(n||(n={}))}}]);