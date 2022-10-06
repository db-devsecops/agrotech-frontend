"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[4724],{74724:function(t,_,e){e.d(_,{x:function(){return N}});var E=e(1413),T=e(15671),R=e(43144),r=(e(65343),e(25766)),A=e(77822),n=e(87529),i=e(3571),a=e(34507),o=e(78945),N=function(){function t(_,e){var R=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if((0,T.Z)(this,t),this._context=_,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,_.instanceCounter.increment(a._g.Texture,this),this._descriptor=(0,E.Z)({target:a.No.TEXTURE_2D,samplingMode:a.cw.LINEAR,wrapMode:a.e8.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1},e),_.type!==i.zO.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),u(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===a.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(R):this.setData(R)}return(0,R.Z)(t,[{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._descriptor}},{key:"isDirty",get:function(){return this._samplingModeDirty||this._wrapModeDirty}},{key:"dispose",value:function(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(a._g.Texture,this))}},{key:"release",value:function(){this.dispose()}},{key:"resize",value:function(t,_){var e=this._descriptor;if(e.width!==t||e.height!==_){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");e.width=t,e.height=_,this._descriptor.target===a.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}},{key:"_setDataCubeMap",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,_=a.No.TEXTURE_CUBE_MAP_POSITIVE_X;_<=a.No.TEXTURE_CUBE_MAP_NEGATIVE_Z;_++)this._setData(t,_)}},{key:"setData",value:function(t){this._setData(t)}},{key:"_setData",value:function(_,e){var E,T,R=this;if(this._context&&this._context.gl){var r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===_&&(_=null);var i=this._descriptor;null!==(E=e)&&void 0!==E||(e=i.target);var N=u(e);null===_&&(i.width=i.width||4,i.height=i.height||4,N&&(i.depth=null!==(T=i.depth)&&void 0!==T?T:1));var s=this._context.bindTexture(this,t.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(t.TEXTURE_UNIT_FOR_UPDATES),t._validateTexture(this._context,i),this._configurePixelStorage();var O=i.pixelFormat,M=i.internalFormat?i.internalFormat:this._deriveInternalFormat(O,i.dataType);if(S(_)){var D=_.width,c=_.height;_ instanceof HTMLVideoElement&&(D=_.videoWidth,c=_.videoHeight),i.width&&i.height,N&&i.depth,i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(e,M,i.hasMipmap,D,c,1),this._texImage(e,0,M,D,c,1,_),(0,n.zu)(r),i.hasMipmap&&this.generateMipmap(),void 0===i.width&&(i.width=D),void 0===i.height&&(i.height=c),N&&void 0===i.depth&&(i.depth=1)}else{var L=i.width,P=i.height,U=i.depth;if(null!=L&&null!=P||console.error("Width and height must be specified!"),N&&null==U&&console.error("Depth must be specified!"),i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(e,M,i.hasMipmap,L,P,U),r.DEPTH24_STENCIL8&&M===r.DEPTH_STENCIL&&(M=r.DEPTH24_STENCIL8),I(_)){var l=_.levels,h=C(e,L,P,U),p=Math.min(h-1,l.length-1);(0,o.Z)(r)?r.texParameteri(i.target,r.TEXTURE_MAX_LEVEL,p):i.hasMipmap=i.hasMipmap&&h===l.length;var G=M;if(!function(t){return t in a.q_}(G))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel((function(t,_,E,T){var r=l[Math.min(t,l.length-1)];R._compressedTexImage(e,t,G,_,E,T,r)}),p)}else(0,A.pC)(_)?(this._texImage(e,0,M,L,P,U,_),(0,n.zu)(r),i.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel((function(t,_,E,T){R._texImage(e,t,M,_,E,T,null),(0,n.zu)(r)}))}t._applySamplingMode(r,this._descriptor),t._applyWrapMode(r,this._descriptor),t._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,n.zu)(r),this._context.bindTexture(s,t.TEXTURE_UNIT_FOR_UPDATES)}}},{key:"updateData",value:function(_,e,E,T,R,r){r||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var A=this._context.gl,n=this._descriptor,i=n.pixelFormat,a=n.internalFormat,o=n.dataType,N=n.isImmutable,u=n.target;if(N&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");var C=this._context.bindTexture(this,t.TEXTURE_UNIT_FOR_UPDATES);(e<0||E<0||T>n.width||R>n.height||e+T>n.width||E+R>n.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),S(r)?A.texSubImage2D(u,_,e,E,i,o,r):I(r)?A.compressedTexSubImage2D(u,_,e,E,T,R,a,r.levels[_]):A.texSubImage2D(u,_,e,E,T,R,i,o,r),this._context.bindTexture(C,t.TEXTURE_UNIT_FOR_UPDATES)}},{key:"updateData3D",value:function(_,e,E,T,R,r,A,n){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var i=this._context.gl;if(!(0,o.Z)(i))throw new Error("3D textures are not supported in WebGL1");var a=this._descriptor,N=a.pixelFormat,S=a.dataType,C=a.isImmutable,s=a.target,O=a.internalFormat;if(C&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");u(s)||console.warn("Attempting to set 3D texture data on a non-3D texture");var M=this._context.bindTexture(this,t.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(t.TEXTURE_UNIT_FOR_UPDATES),(e<0||E<0||T<0||R>a.width||r>a.height||A>a.depth||e+R>a.width||E+r>a.height||T+A>a.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),I(n))n=n.levels[_],i.compressedTexSubImage3D(s,_,e,E,T,R,r,A,O,n);else{var D=n;i.texSubImage3D(s,_,e,E,T,R,r,A,N,S,D)}this._context.bindTexture(M,t.TEXTURE_UNIT_FOR_UPDATES)}},{key:"generateMipmap",value:function(){var _=this._descriptor;if(!_.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");_.hasMipmap=!0,this._samplingModeDirty=!0,t._validateTexture(this._context,_)}_.samplingMode===a.cw.LINEAR?(this._samplingModeDirty=!0,_.samplingMode=a.cw.LINEAR_MIPMAP_NEAREST):_.samplingMode===a.cw.NEAREST&&(this._samplingModeDirty=!0,_.samplingMode=a.cw.NEAREST_MIPMAP_NEAREST);var e=this._context.bindTexture(this,t.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(t.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(_.target),this._context.bindTexture(e,t.TEXTURE_UNIT_FOR_UPDATES)}},{key:"setSamplingMode",value:function(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}},{key:"setWrapMode",value:function(_){_!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=_,t._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}},{key:"applyChanges",value:function(){var _=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(t._applySamplingMode(_,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(t._applyWrapMode(_,e),this._wrapModeDirty=!1)}},{key:"_deriveInternalFormat",value:function(t,_){if(this._context.type===i.zO.WEBGL1)return t;switch(_){case a.Br.FLOAT:switch(t){case a.VI.RGBA:return a.lP.RGBA32F;case a.VI.RGB:return a.lP.RGB32F;default:throw new Error("Unable to derive format")}case a.Br.UNSIGNED_BYTE:switch(t){case a.VI.RGBA:return a.lP.RGBA8;case a.VI.RGB:return a.lP.RGB8}default:return t}}},{key:"_configurePixelStorage",value:function(){var t=this._context.gl,_=this._descriptor,e=_.unpackAlignment,E=_.flipped,T=_.preMultiplyAlpha;t.pixelStorei(t.UNPACK_ALIGNMENT,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T?1:0)}},{key:"_texStorage",value:function(t,_,e,E,T,R){var r=this._context.gl;if(!(0,o.Z)(r))throw new Error("Immutable textures are not supported in WebGL1");if(!function(t){return t in a.lP}(_))throw new Error("Immutable textures must have a sized internal format");if(this._descriptor.isImmutable){var A=e?C(t,E,T,R):1;u(t)?r.texStorage3D(t,A,_,E,T,R):r.texStorage2D(t,A,_,E,T),this._wasImmutablyAllocated=!0}}},{key:"_texImage",value:function(t,_,e,E,T,R,r){var n=this._context.gl,a=null,o=this._context.type===i.zO.WEBGL2,N=u(t),I=this._descriptor,C=I.isImmutable,s=I.pixelFormat,O=I.dataType;if(o&&(a=n),o||!S(r))if(C){if((0,A.pC)(r)){var M=r;N?a.texSubImage3D(t,_,0,0,0,E,T,R,s,O,M):n.texSubImage2D(t,_,0,0,E,T,s,O,M)}}else{var D=(0,A.Wg)(r);N?a.texImage3D(t,_,e,E,T,R,0,s,O,D):n.texImage2D(t,_,e,E,T,0,s,O,D)}else n.texImage2D(t,0,e,s,O,r)}},{key:"_compressedTexImage",value:function(t,_,e,E,T,R,r){var n=this._context.gl,a=null,o=u(t),N=this._descriptor.isImmutable;if(o){if(this._context.type!==i.zO.WEBGL2)throw new Error("3D textures are not supported in WebGL1");a=n}N?(0,A.pC)(r)&&(o?a.compressedTexSubImage3D(t,_,0,0,0,E,T,R,e,r):n.compressedTexSubImage2D(t,_,0,0,E,T,e,r)):o?a.compressedTexImage3D(t,_,e,E,T,R,0,r):n.compressedTexImage2D(t,_,e,E,T,0,r)}},{key:"_forEachMipmapLevel",value:function(t){for(var _=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,e=this._descriptor,E=e.width,T=e.height,R=e.depth,r=e.hasMipmap,A=e.target,n=A===a.No.TEXTURE_3D,i=0;t(i,E,T,R),r&&(1!==E||1!==T||n&&1!==R)&&!(i>=_);++i)E=Math.max(1,E>>1),T=Math.max(1,T>>1),n&&(R=Math.max(1,R>>1))}}],[{key:"_validateTexture",value:function(t,_){(_.width<0||_.height<0||_.depth<0)&&console.error("Negative dimension parameters are not allowed!");var e=(0,o.Z)(t.gl),E=(0,r.wt)(_.width)&&(0,r.wt)(_.height);e||!_.isImmutable&&!u(_.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),e||E||("number"==typeof _.wrapMode?_.wrapMode!==a.e8.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):_.wrapMode.s===a.e8.CLAMP_TO_EDGE&&_.wrapMode.t===a.e8.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),_.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}},{key:"_applySamplingMode",value:function(t,_){var e=_.samplingMode,E=_.samplingMode;e===a.cw.LINEAR_MIPMAP_NEAREST||e===a.cw.LINEAR_MIPMAP_LINEAR?(e=a.cw.LINEAR,_.hasMipmap||(E=a.cw.LINEAR)):e!==a.cw.NEAREST_MIPMAP_NEAREST&&e!==a.cw.NEAREST_MIPMAP_LINEAR||(e=a.cw.NEAREST,_.hasMipmap||(E=a.cw.NEAREST)),t.texParameteri(_.target,t.TEXTURE_MAG_FILTER,e),t.texParameteri(_.target,t.TEXTURE_MIN_FILTER,E)}},{key:"_applyWrapMode",value:function(t,_){"number"==typeof _.wrapMode?(t.texParameteri(_.target,t.TEXTURE_WRAP_S,_.wrapMode),t.texParameteri(_.target,t.TEXTURE_WRAP_T,_.wrapMode)):(t.texParameteri(_.target,t.TEXTURE_WRAP_S,_.wrapMode.s),t.texParameteri(_.target,t.TEXTURE_WRAP_T,_.wrapMode.t))}},{key:"_applyAnisotropicFilteringParameters",value:function(t,_){var e,E=t.capabilities.textureFilterAnisotropic;E&&t.gl.texParameterf(_.target,E.TEXTURE_MAX_ANISOTROPY,null!==(e=_.maxAnisotropy)&&void 0!==e?e:1)}}]),t}();function I(t){return(0,A.pC)(t)&&"type"in t&&"compressed"===t.type}function S(t){return(0,A.pC)(t)&&!I(t)&&!function(t){return(0,A.pC)(t)&&"byteLength"in t}(t)}function u(t){return t===a.No.TEXTURE_3D||t===a.No.TEXTURE_2D_ARRAY}function C(t,_,e){var E=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,T=Math.max(_,e);return t===a.No.TEXTURE_3D&&(T=Math.max(T,E)),Math.round(Math.log(T)/Math.LN2)+1}N.TEXTURE_UNIT_FOR_UPDATES=0},78945:function(t,_,e){function E(t){return window.WebGL2RenderingContext&&t instanceof window.WebGL2RenderingContext}e.d(_,{Z:function(){return E}})},87529:function(t,_,e){e.d(_,{zu:function(){return i},hZ:function(){return A},CG:function(){return n}});var E=e(77284),T=e(65343),R=e(84615).Z.getLogger("esri/views/webgl");var r=!!(0,T.Z)("enable-feature:webgl-debug");function A(){return r}function n(){return r}function i(t){if(A()){var _=t.getError();if(_){var e=function(t,_){switch(_){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(t,_),T=(new Error).stack;R.error(new E.Z("webgl-error","WebGL error occured",{message:e,stack:T}))}}}},34507:function(t,_,e){var E,T,R,r,A,n,i,a,o,N,I,S,u,C,s,O,M,D,c,L,P,U;e.d(_,{Ld:function(){return p},zi:function(){return R},db:function(){return r},w0:function(){return A},lk:function(){return E},Y5:function(){return B},VY:function(){return h},wb:function(){return o},q_:function(){return G},Wf:function(){return i},g:function(){return a},Lu:function(){return x},OU:function(){return U},LR:function(){return n},qi:function(){return L},VI:function(){return C},Br:function(){return O},MX:function(){return T},Tg:function(){return M},_g:function(){return l},Ho:function(){return c},lP:function(){return s},xS:function(){return N},V7:function(){return F},Lm:function(){return P},cw:function(){return I},No:function(){return u},e8:function(){return S},Se:function(){return d},l1:function(){return D}}),function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(E||(E={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(T||(T={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(R||(R={})),function(t){t[t.ADD=32774]="ADD",t[t.SUBTRACT=32778]="SUBTRACT",t[t.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(r||(r={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(A||(A={})),function(t){t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(n||(n={})),function(t){t[t.CW=2304]="CW",t[t.CCW=2305]="CCW"}(i||(i={})),function(t){t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT"}(a||(a={})),function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"}(o||(o={})),function(t){t[t.ZERO=0]="ZERO",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP"}(N||(N={})),function(t){t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(I||(I={})),function(t){t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(S||(S={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(u||(u={})),function(t){t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.RG=33319]="RG",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER"}(C||(C={})),function(t){t[t.RGBA4=32854]="RGBA4",t[t.R16F=33325]="R16F",t[t.RG16F=33327]="RG16F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.R32F=33326]="R32F",t[t.RG32F=33328]="RG32F",t[t.RGBA32F=34836]="RGBA32F",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB5_A1=32855]="RGB5_A1",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.RGB16F=34843]="RGB16F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGB565=36194]="RGB565",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2=32857]="RGB10_A2",t[t.RGB10_A2UI=36975]="RGB10_A2UI"}(s||(s={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.INT=5124]="INT",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(O||(O={})),function(t){t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(M||(M={})),function(t){t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_READ=35045]="STATIC_READ",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.STREAM_COPY=35042]="STREAM_COPY"}(D||(D={})),function(t){t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER"}(c||(c={})),function(t){t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(L||(L={})),function(t){t[t.TEXTURE=0]="TEXTURE",t[t.RENDER_BUFFER=1]="RENDER_BUFFER",t[t.CUBEMAP=2]="CUBEMAP"}(P||(P={})),function(t){t[t.NONE=0]="NONE",t[t.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",t[t.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(U||(U={}));var l,h,p=33984;!function(t){t[t.Texture=0]="Texture",t[t.BufferObject=1]="BufferObject",t[t.VertexArrayObject=2]="VertexArrayObject",t[t.Shader=3]="Shader",t[t.Program=4]="Program",t[t.FramebufferObject=5]="FramebufferObject",t[t.Renderbuffer=6]="Renderbuffer",t[t.Sync=7]="Sync",t[t.COUNT=8]="COUNT"}(l||(l={})),function(t){t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(h||(h={}));var G,d,m,f,B,F,g,x=33306;!function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(G||(G={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT=5124]="INT",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(d||(d={})),function(t){t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS"}(m||(m={})),function(t){t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED"}(f||(f={})),function(t){t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED"}(B||(B={})),function(t){t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(F||(F={})),function(t){t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(g||(g={}))}}]);