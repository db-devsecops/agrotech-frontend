"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[2867],{52867:function(e,t,a){a.r(t),a.d(t,{applyEdits:function(){return f}});var r=a(1413),n=a(15861),s=a(87757),i=a(2572),d=a(48739),u=a(77284),o=a(37924),l=a(77822),p=a(68868),c=a(392);function h(e){return e&&null!=e.applyEdits}function f(e,t,a){return y.apply(this,arguments)}function y(){return y=(0,n.Z)(s.mark((function e(t,a,r){var n,i,d,u,l,p,c,h,f,y,m=arguments;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.length>3&&void 0!==m[3]?m[3]:{},u={edits:r,result:new Promise((function(e,t){i=e,d=t}))},t.emit("apply-edits",u),e.prev=3,e.next=6,b(t,a,r,n);case 6:return p=e.sent,c=p.results,h=p.edits,f=function(e){return e.filter((function(e){return!e.error})).map(o.d9)},y={edits:h,addedFeatures:f(c.addFeatureResults),updatedFeatures:f(c.updateFeatureResults),deletedFeatures:f(c.deleteFeatureResults),addedAttachments:f(c.addAttachmentResults),updatedAttachments:f(c.updateAttachmentResults),deletedAttachments:f(c.deleteAttachmentResults)},e.abrupt("return",(null!==(l=c.editedFeatureResults)&&void 0!==l&&l.length&&(y.editedFeatures=c.editedFeatureResults),(y.addedFeatures.length||y.updatedFeatures.length||y.deletedFeatures.length||y.addedAttachments.length||y.updatedAttachments.length||y.deletedAttachments.length)&&t.emit("edits",y),i(y),c));case 14:throw e.prev=14,e.t0=e.catch(3),d(e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[3,14]])}))),y.apply(this,arguments)}function b(e,t,a,r){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(s.mark((function e(t,a,r,n){var i,d,o;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:if(h(a)){e.next=4;break}throw new u.Z("".concat(t.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:t});case 4:if(t.editingEnabled){e.next=6;break}throw new u.Z("".concat(t.type,"-layer:editing-disabled"),"Editing is disabled for layer",{layer:t});case 6:return e.next=8,g(t,r,n);case 8:if(i=e.sent,d=i.edits,o=i.options,!(d.addFeatures.length||d.updateFeatures.length||d.deleteFeatures.length||d.addAttachments.length||d.updateAttachments.length||d.deleteAttachments.length)){e.next=19;break}return e.t1=d,e.next=15,a.applyEdits(d,o);case 15:e.t2=e.sent,e.t0={edits:e.t1,results:e.t2},e.next=20;break;case 19:e.t0={edits:d,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}};case 20:return e.abrupt("return",e.t0);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t,a){return w.apply(this,arguments)}function w(){return w=(0,n.Z)(s.mark((function e(t,a,n){var i,o,l,p,c;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=a&&(a.addFeatures||a.updateFeatures||a.deleteFeatures),o=a&&(a.addAttachments||a.updateAttachments||a.deleteAttachments),a&&(i||o)){e.next=3;break}throw new u.Z("".concat(t.type,"-layer:missing-parameters"),"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");case 3:if(t.capabilities.data.isVersioned||!n||!n.gdbVersion){e.next=5;break}throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");case 5:if(t.capabilities.editing.supportsRollbackOnFailure||!n||!n.rollbackOnFailureEnabled){e.next=7;break}throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");case 7:if(t.capabilities.editing.supportsGlobalId||!n||!n.globalIdUsed){e.next=9;break}throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");case 9:if(t.capabilities.editing.supportsGlobalId||!o){e.next=11;break}throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");case 11:if(n&&n.globalIdUsed||!o){e.next=13;break}throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");case 13:if(null!=(l=(0,r.Z)({},n)).rollbackOnFailureEnabled||t.capabilities.editing.supportsRollbackOnFailure||(l.rollbackOnFailureEnabled=!0),!1!==l.rollbackOnFailureEnabled||"original-and-current-features"!==l.returnServiceEditsOption){e.next=16;break}throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");case 16:if(t.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference||!l.returnServiceEditsInSourceSR){e.next=18;break}throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");case 18:if(!l.returnServiceEditsInSourceSR||"original-and-current-features"===l.returnServiceEditsOption){e.next=20;break}throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");case 20:if((p=(0,r.Z)({},a)).addFeatures=a&&d.Z.isCollection(a.addFeatures)?a.addFeatures.toArray():p.addFeatures||[],p.updateFeatures=a&&d.Z.isCollection(a.updateFeatures)?a.updateFeatures.toArray():p.updateFeatures||[],p.deleteFeatures=a&&d.Z.isCollection(a.deleteFeatures)?a.deleteFeatures.toArray():p.deleteFeatures||[],!p.addFeatures.length||t.capabilities.operations.supportsAdd){e.next=23;break}throw new u.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support adding features.");case 23:if(!p.updateFeatures.length||t.capabilities.operations.supportsUpdate){e.next=25;break}throw new u.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support updating features.");case 25:if(!p.deleteFeatures.length||t.capabilities.operations.supportsDelete){e.next=27;break}throw new u.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support deleting features.");case 27:return p.addAttachments=p.addAttachments||[],p.updateAttachments=p.updateAttachments||[],p.deleteAttachments=p.deleteAttachments||[],p.addFeatures=p.addFeatures.map(x),p.updateFeatures=p.updateFeatures.map(x),c=n&&n.globalIdUsed,p.addFeatures.forEach((function(e){return v(e,t,c)})),p.updateFeatures.forEach((function(e){return Z(e,t,c)})),p.deleteFeatures.forEach((function(e){return A(e,t,c)})),p.addAttachments.forEach((function(e){return I(e,t)})),p.updateAttachments.forEach((function(e){return I(e,t)})),e.next=32,k(p);case 32:return e.t0=e.sent,e.t1=l,e.abrupt("return",{edits:e.t0,options:e.t1});case 35:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function F(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&(0,l.pC)(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new u.Z("".concat(t.type,"-layer:z-unsupported"),"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new u.Z("".concat(t.type,"-layer:m-unsupported"),"Layer does not support m values while feature has m values.")}}function v(e,t,a){F(e,t,a)}function A(e,t,a){F(e,t,a)}function Z(e,t,a){if(F(e,t,a),"geometry"in e&&(0,l.pC)(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new u.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support geometry updates.")}function I(e,t){var a=e.feature,r=e.attachment;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name)&&!r.name)throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){var n=(0,p.sJ)(r.data);if(n&&!n.isBase64)throw new u.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function k(e){return E.apply(this,arguments)}function E(){return E=(0,n.Z)(s.mark((function e(t){var a,r,n,i,d,u;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.addFeatures,r=t.updateFeatures,n=a.concat(r).map((function(e){return e.geometry})),e.next=5,(0,c.aX)(n);case 5:return i=e.sent,d=a.length,u=r.length,e.abrupt("return",(i.slice(0,d).forEach((function(e,a){return t.addFeatures[a].geometry=e})),i.slice(d,d+u).forEach((function(e,a){return t.updateFeatures[a].geometry=e})),t));case 9:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function x(e){var t=new i.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}}]);