"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[6424],{64286:function(r,n,e){e.d(n,{Z:function(){return h}});var t=e(15861),o=e(15671),a=e(43144),i=e(87757);function f(r,n){var e=r.length-n,t=0;do{for(var o=n;o>0;o--)r[t+n]+=r[t],t++;e-=n}while(e>0)}function u(r,n,e){for(var t=0,o=r.length,a=o/e;o>n;){for(var i=n;i>0;--i)r[t+n]+=r[t],++t;o-=n}for(var f=r.slice(),u=0;u<a;++u)for(var c=0;c<e;++c)r[e*u+c]=f[(e-c-1)*a+u]}function c(r,n,e,t,o,a){if(!n||1===n)return r;for(var i=0;i<o.length;++i){if(o[i]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(o[i]!==o[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var c=o[0]/8,h=2===a?1:o.length,s=0;s<t&&!(s*h*e*c>=r.byteLength);++s){var l=void 0;if(2===n){switch(o[0]){case 8:l=new Uint8Array(r,s*h*e*c,h*e*c);break;case 16:l=new Uint16Array(r,s*h*e*c,h*e*c/2);break;case 32:l=new Uint32Array(r,s*h*e*c,h*e*c/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(o[0]," bits per sample."))}f(l,h)}else 3===n&&u(l=new Uint8Array(r,s*h*e*c,h*e*c),h,c)}return r}var h=function(){function r(){(0,o.Z)(this,r)}return(0,a.Z)(r,[{key:"decode",value:function(){var r=(0,t.Z)(i.mark((function r(n,e){var t,o,a,f,u;return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.decodeBlock(e);case 2:if(t=r.sent,1===(o=n.Predictor||1)){r.next=9;break}return a=!n.StripOffsets,f=a?n.TileWidth:n.ImageWidth,u=a?n.TileLength:n.RowsPerStrip||n.ImageLength,r.abrupt("return",c(t,o,f,u,n.BitsPerSample,n.PlanarConfiguration));case 9:return r.abrupt("return",t);case 10:case"end":return r.stop()}}),r,this)})));return function(n,e){return r.apply(this,arguments)}}()}]),r}()},6424:function(r,n,e){e.r(n),e.d(n,{default:function(){return h}});var t=e(15671),o=e(43144),a=e(60136),i=e(29388),f=e(64286);function u(r,n){for(var e=n.length-1;e>=0;e--)r.push(n[e]);return r}function c(r){for(var n=new Uint16Array(4093),e=new Uint8Array(4093),t=0;t<=257;t++)n[t]=4096,e[t]=t;var o=258,a=9,i=0;function f(){o=258,a=9}function c(r){var n=function(r,n,e){var t=n%8,o=Math.floor(n/8),a=8-t,i=n+e-8*(o+1),f=8*(o+2)-(n+e),u=8*(o+2)-n;if(f=Math.max(0,f),o>=r.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),257;var c=r[o]&Math.pow(2,8-t)-1,h=c<<=e-a;if(o+1<r.length){var s=r[o+1]>>>f;h+=s<<=Math.max(0,e-u)}if(i>8&&o+2<r.length){var l=8*(o+3)-(n+e);h+=r[o+2]>>>l}return h}(r,i,a);return i+=a,n}function h(r,t){return e[o]=t,n[o]=r,++o-1}function s(r){for(var t=[],o=r;4096!==o;o=n[o])t.push(e[o]);return t}var l=[];f();for(var d,v=new Uint8Array(r),w=c(v);257!==w;){if(256===w){for(f(),w=c(v);256===w;)w=c(v);if(257===w)break;if(w>256)throw new Error("corrupted code at scanline ".concat(w));u(l,s(w)),d=w}else if(w<o){var p=s(w);u(l,p),h(d,p[p.length-1]),d=w}else{var g=s(d);if(!g)throw new Error("Bogus entry. Not in dictionary, ".concat(d," / ").concat(o,", position: ").concat(i));u(l,g),l.push(g[g.length-1]),h(d,g[g.length-1]),d=w}o+1>=Math.pow(2,a)&&(12===a?d=void 0:a++),w=c(v)}return new Uint8Array(l)}var h=function(r){(0,a.Z)(e,r);var n=(0,i.Z)(e);function e(){return(0,t.Z)(this,e),n.apply(this,arguments)}return(0,o.Z)(e,[{key:"decodeBlock",value:function(r){return c(r).buffer}}]),e}(f.Z)}}]);