"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[1252],{31252:function(e,n,t){t.r(n),t.d(n,{previewWebStyleSymbol:function(){return a}});var i=t(86755),h=t(32578),r=t(67967);function a(e,n,t){var a=e.thumbnail&&e.thumbnail.url;return a?(0,i.default)(a,{responseType:"image"}).then((function(e){var n=function(e,n){var t=!/\\.svg$/i.test(e.src)&&n&&n.disableUpsampling,i=Math.max(e.width,e.height),a=n&&null!=n.maxSize?(0,h.F2)(n.maxSize):r.b_.maxSize;t&&(a=Math.min(i,a));var u="number"==typeof(null===n||void 0===n?void 0:n.size)?null===n||void 0===n?void 0:n.size:null,l=Math.min(a,null!=u?(0,h.F2)(u):i);if(l!==i){var o=0!==e.width&&0!==e.height?e.width/e.height:1;o>=1?(e.width=l,e.height=l/o):(e.width=l*o,e.height=l)}return e}(e.data,t);return t&&t.node?(t.node.appendChild(n),t.node):n})):e.fetchSymbol().then((function(e){return n(e,t)}))}}}]);