"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[1821],{77703:function(n,t,e){e.d(t,{Ll:function(){return c},JO:function(){return a},N1:function(){return u},li:function(){return s},Rl:function(){return l},N4:function(){return f},it:function(){return d},YF:function(){return p},r2:function(){return h},Rq:function(){return g},WP:function(){return m},Vf:function(){return v},gc:function(){return A},Md:function(){return Z},EW:function(){return k},dd:function(){return x},id:function(){return C},h:function(){return w},E2:function(){return b},_8:function(){return j},fr:function(){return P},Fq:function(){return y},tE:function(){return I},OE:function(){return B},ku:function(){return D}});var o=e(1413),i=e(83684),r=e(11979),c=function(n,t){return function(e,c,a){var u=a.api;return new Promise((function(e,c){(0,r.DI)(n,i.k5.editApplication),u((0,o.Z)((0,o.Z)({},i.k5.editApplication),{},{body:t})).then((function(n){e(n)})).catch((function(n){c(n)}))}))}},a=function(n,t){return function(e,c,a){var u=a.api;return new Promise((function(e,c){(0,r.DI)(n,i.k5.deleteApplication),u((0,o.Z)((0,o.Z)({},i.k5.deleteApplication),{},{body:t})).then((function(n){e(n)})).catch((function(n){c(n)}))}))}},u=function(n,t){return function(e,c,a){var u=a.api;return new Promise((function(e,c){(0,r.DI)(n,i.k5.addComments),u((0,o.Z)((0,o.Z)({},i.k5.addComments),{},{body:t})).then((function(n){e(n)})).catch((function(n){c(n)}))}))}},s=function(n){return function(t,e,c){var a=c.api;return new Promise((function(t,e){(0,r.DI)(n,i.k5.getComments),a((0,o.Z)({},i.k5.getComments)).then((function(n){t(n)})).catch((function(n){e(n)}))}))}},l=function(n,t){return function(e,c,a){var u=a.api;return new Promise((function(e,c){(0,r.DI)(n,i.k5.getAllApplications),u((0,o.Z)((0,o.Z)({},i.k5.getAllApplications),{},{body:t})).then((function(n){e(n)})).catch((function(n){var t=n.message;c(t)}))}))}},f=function(){return function(n,t,e){var r=e.api;return new Promise((function(n,t){r((0,o.Z)({},i.k5.getApplicationStatusCount)).then((function(t){n(t)})).catch((function(n){var e=n.message;t(e)}))}))}},d=function(){return function(n,t,e){var r=e.api;return new Promise((function(n,t){r((0,o.Z)({},i.k5.getCroptypesName)).then((function(t){n(t)})).catch((function(n){var e=n.message;t(e)}))}))}},p=function(n){return function(t,e,c){var a=c.api;return new Promise((function(t,e){(0,r.DI)(n,i.k5.getBulkUploadHistory),a((0,o.Z)({},i.k5.getBulkUploadHistory)).then((function(n){t(n)})).catch((function(n){var t=n.message;e(t)}))}))}},h=function(n){return function(t,e,c){var a=c.api;return new Promise((function(t,e){(0,r.DI)(n,i.k5.getSingleBulkUploadHistory),a((0,o.Z)({},i.k5.getSingleBulkUploadHistory)).then((function(n){t(n)})).catch((function(n){var t=n.message;e(t)}))}))}},g=function(){return function(n,t,e){var r=e.api;return new Promise((function(n,t){r((0,o.Z)({},i.k5.getDataGraphInprogress)).then((function(t){n(t)})).catch((function(n){var e=n.message;t(e)}))}))}},m=function(){return function(n,t,e){var r=e.api;return new Promise((function(n,t){r((0,o.Z)({},i.k5.getDataGraphApproved)).then((function(t){n(t)})).catch((function(n){var e=n.message;t(e)}))}))}},v=function(){return function(n,t,e){var r=e.api;return new Promise((function(n,t){r((0,o.Z)({},i.k5.getDataGraphResolvedCases)).then((function(t){n(t)})).catch((function(n){var e=n.message;t(e)}))}))}},A=function(){return function(n,t,e){var r=e.api;return new Promise((function(n,t){r((0,o.Z)({},i.k5.getDataGraphRejected)).then((function(t){n(t)})).catch((function(n){var e=n.message;t(e)}))}))}},Z=function(){return function(n,t,e){var r=e.api;return new Promise((function(n,t){r((0,o.Z)({},i.k5.getApplicationReportStatusCount)).then((function(t){n(t)})).catch((function(n){var e=n.message;t(e)}))}))}},k=function(){return function(n,t,e){var r=e.api;return new Promise((function(n,t){r((0,o.Z)({},i.k5.getLandApprovedCount)).then((function(t){n(t)})).catch((function(n){var e=n.message;t(e)}))}))}},x=function(n,t){return function(e,c,a){var u=a.api;return new Promise((function(e,c){(0,r.DI)(n,i.k5.getAllDistricts),u((0,o.Z)((0,o.Z)({},i.k5.getAllDistricts),{},{body:t})).then((function(n){e(n)})).catch((function(n){var t=n.message;c(t)}))}))}},C=function(n){return function(t,e,r){var c=r.api;return new Promise((function(t,e){c((0,o.Z)((0,o.Z)({},i.Sb.approveAllApplication),{},{body:n})).then((function(n){var e=n.data;t(e)})).catch((function(n){e(n)}))}))}},w=function(n){return function(t,e,r){var c=r.api;return new Promise((function(t,e){c((0,o.Z)((0,o.Z)({},i.Sb.approveSelectedApplication),{},{body:n})).then((function(n){t(n)})).catch((function(n){var t=n.message;e(t)}))}))}},b=function(n){return function(t,e,r){var c=r.api;return new Promise((function(t,e){c((0,o.Z)((0,o.Z)({},i.Sb.flagApplication),{},{body:n})).then((function(n){t(n)})).catch((function(n){var t=n.message;e(t)}))}))}},j=function(n){return function(t,e,c){var a=c.api;return new Promise((function(t,e){(0,r.DI)(n,i.k5.getApplicationData),a((0,o.Z)({},i.k5.getApplicationData)).then((function(n){t(n)})).catch((function(n){var t=n.message;e(t)}))}))}},P=function(n){return function(t,e,r){var c=r.api;return new Promise((function(t,e){c((0,o.Z)((0,o.Z)({},i.k5.editReports),{},{body:n})).then((function(n){t(n)})).catch((function(n){e(n)}))}))}},y=function(n){return function(t,e,r){var c=r.api;return new Promise((function(t,e){c((0,o.Z)((0,o.Z)({},i.k5.newCommentApplication),{},{body:n})).then((function(n){t(n)})).catch((function(n){e(n)}))}))}},I=function(n,t){return function(e,r,c){var a=c.api;return new Promise((function(e,r){a((0,o.Z)((0,o.Z)({},i.k5.uploadReportImage),{},{body:n,options:t})).then((function(n){e(n)})).catch((function(n){r(n)}))}))}},B=function(n){return function(t,e,c){var a=c.api;return new Promise((function(t,e){(0,r.DI)(n,i.k5.generateReport),a((0,o.Z)({},i.k5.generateReport)).then((function(n){t(n)})).catch((function(n){var t=n.message;e(t)}))}))}},D=function(n){return function(n,t,e){var r=e.api;return new Promise((function(n,t){r((0,o.Z)({},i.k5.getApplicationCommentsCount)).then((function(t){n(t)})).catch((function(n){var e=n.message;t(e)}))}))}}},79325:function(n,t,e){e.d(t,{Z:function(){return c}});e(47313);var o=e(97890),i=e(24323),r=e(46417);function c(n){var t=n.title,e=n.path,c=n.activeTab,a=(0,o.s0)();return(0,r.jsxs)("div",{className:"report-header",children:[(0,r.jsx)("img",{src:i,alt:"backIcon",className:"backIcon",onClick:function(){a(e,{state:{activeTab:c}})}}),(0,r.jsx)("span",{children:t})]})}},46495:function(n,t,e){e.d(t,{Z:function(){return i}});e(47313);var o=e(46417);function i(n){var t=n.text,e=n.trigger;return(0,o.jsx)("button",{className:"green-btn",onClick:e,children:t})}},24554:function(n,t,e){e.d(t,{Z:function(){return a}});var o=e(29439),i=e(47313),r=e(97548),c=e(46417);function a(n){var t=n.selectPage,e=n.pageNumbers,a=n.totalItemsCount,u=n.totalItemsPerPage,s=n.pageName,l=n.isPrevPage,f=(0,i.useState)(!1),d=(0,o.Z)(f,2),p=d[0],h=d[1],g=(0,i.useState)(l&&localStorage.getItem(s)?Number(localStorage.getItem(s)):1),m=(0,o.Z)(g,2),v=m[0],A=m[1];return p?(0,c.jsx)(r.Z,{itemsCountPerPage:u,totalItemsCount:a,pageRangeDisplayed:e,disabledClass:!0,activeClass:"pagination-active",innerClass:"pagination-button",hideFirstLastPages:!0,prevPageText:"\xab",nextPageText:"\xbb"}):(0,c.jsx)(r.Z,{activePage:v,itemsCountPerPage:u,totalItemsCount:a,pageRangeDisplayed:e,onChange:function(n){h(!0),t(n),function(n,t){localStorage.setItem(t,n)}(n,s),A(n),setTimeout((function(){h(!1)}),100)},disabledClass:!0,activeClass:"pagination-active",innerClass:"pagination-button",hideFirstLastPages:!0,prevPageText:"\xab",nextPageText:"\xbb"})}},21821:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var o=e(47313),i=e(29439),r=e(1084),c=e(9038),a=e(77703),u=e(4942),s=e(88564),l=e(66835),f=e(57861),d=e(70941),p=e(19438),h=e(51629),g=e(23477),m=e(24076),v=e(82295),A=e(97890),Z=e(58821),k=e(70816),x=e.n(k),C=e(46417),w=(0,s.ZP)(d.Z)((function(n){var t;n.theme;return t={},(0,u.Z)(t,"&.".concat(p.Z.head),{backgroundColor:"#FBFBFB",color:"#999999",fontFamily:"Inter",fontSize:16,height:10}),(0,u.Z)(t,"&.".concat(p.Z.body),{color:"#000000",fontFamily:"Inter"}),t})),b=(0,s.ZP)(m.Z)((function(n){n.theme;return{"&:nth-of-type(even)":{backgroundColor:"#FBFBFB",height:10},"&:last-child td, &:last-child th":{border:0}}}));function j(n){var t=n.row,e=n.sno,o=n.index,i=(0,A.s0)();return(0,C.jsxs)(b,{children:[(0,C.jsx)(w,{component:"th",scope:"row",children:e[o]}),(0,C.jsx)(w,{component:"th",scope:"row",children:null===t||void 0===t?void 0:t.bulkUploadId}),(0,C.jsx)(w,{component:"th",scope:"row",children:x()(null===t||void 0===t?void 0:t.createdAt).format("LLL")}),(0,C.jsx)(w,{component:"th",scope:"row",children:null===t||void 0===t?void 0:t.fileName}),(0,C.jsx)(w,{component:"th",scope:"row",children:null===t||void 0===t?void 0:t.createdApplicationCount}),(0,C.jsx)(w,{component:"th",scope:"row",children:null===t||void 0===t?void 0:t.notUpdatedApplicationCount}),(0,C.jsx)(w,{component:"th",scope:"row",children:null===t||void 0===t?void 0:t.updatedApplicationCount}),(0,C.jsx)(w,{children:(0,C.jsx)("div",{className:"action-items",children:(0,C.jsx)(Z.rCC,{className:"view-icon",color:"#228b22",onClick:function(){return n=t.bulkUploadId,void i("/single-bulk",{state:{bulkUploadId:n}});var n},size:20})})})]})}e(66282);var P=(0,s.ZP)(d.Z)((function(n){var t;n.theme;return t={},(0,u.Z)(t,"&.".concat(p.Z.head),{backgroundColor:"#FBFBFB",color:"#999999",fontFamily:"Inter",fontSize:16,height:10}),(0,u.Z)(t,"&.".concat(p.Z.body),{color:"#000000",fontFamily:"Inter"}),t}));function y(n){var t=n.bulkUploadData,e=n.sno;return(0,C.jsx)(h.Z,{component:v.Z,sx:{maxHeight:650},children:(0,C.jsxs)(l.Z,{sx:{minWidth:700},stickyHeader:!0,"aria-label":"sticky table",children:[(0,C.jsx)(g.Z,{children:(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(P,{style:{width:10},children:"S.No."}),(0,C.jsx)(P,{style:{width:10},children:"Bulk Upload ID"}),(0,C.jsx)(P,{style:{width:50,cursor:"pointer"},children:"Uploaded At"}),(0,C.jsx)(P,{style:{width:50,cursor:"pointer"},children:"File Name"}),(0,C.jsx)(P,{style:{width:50,cursor:"pointer"},children:"Created Application Count"}),(0,C.jsx)(P,{style:{width:80,cursor:"pointer"},children:"Not Updated Application Count"}),(0,C.jsx)(P,{style:{width:80,cursor:"pointer"},children:"Updated Application Count"}),(0,C.jsx)(P,{style:{width:80,cursor:"pointer"},children:"Actions"})]})}),(null===t||void 0===t?void 0:t.length)>0?(0,C.jsx)(f.Z,{children:t.map((function(n,t){return(0,C.jsx)(j,{row:n,sno:e,index:t})}))}):(0,C.jsx)("div",{className:"no-data",children:(0,C.jsx)("h1",{children:"No Records Found"})})]})})}var I=e(79325),B=e(24554),D=e(46495),S=e(7861);var N=function(n){var t=sessionStorage.getItem("token"),e=(0,S.Z)(t),r=(0,o.useState)([]),c=(0,i.Z)(r,2),a=c[0],u=c[1],s=(0,o.useState)(1),l=(0,i.Z)(s,2),f=l[0],d=l[1],p=(0,o.useState)(1),h=(0,i.Z)(p,2),g=h[0],m=h[1],v=(0,o.useState)(1),A=(0,i.Z)(v,2),Z=A[0],k=A[1],x=(0,o.useState)([]),w=(0,i.Z)(x,2),b=w[0],j=w[1];return(0,o.useEffect)((function(){!function(){var t={page:f,branchCode:null!==e&&void 0!==e&&e.branchCode?null===e||void 0===e?void 0:e.branchCode:""};n.getBulkUploadHistory(t).then((function(n){u(n.data.list),j(n.data.pageMeta.sNo),d(n.data.pageMeta.page),m(n.data.pageMeta.totalPages),k(n.data.pageMeta.total)})).catch((function(n){console.log(n)}))}()}),[f]),(0,C.jsxs)("div",{className:"bulk-container",children:[(0,C.jsx)(I.Z,{title:"KCC Applications",path:"/kcc-applications"}),(0,C.jsxs)("div",{className:"display-spaceBetween",children:[(0,C.jsx)("h3",{children:"Bulk Upload History"}),(0,C.jsx)(D.Z,{text:"Download Bulk History",trigger:function(){window.open("https://apipreprod.agrotechindia.co.in/api/v1/application/historyDownload".concat(null!==e&&void 0!==e&&e.branchCode?"?branchCode= ".concat(null===e||void 0===e?void 0:e.branchCode):""))}})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)(y,{bulkUploadData:a,sno:b}),(0,C.jsx)(B.Z,{pageNumbers:g>3?3:g,totalItemsCount:Z,selectPage:function(n){d(n)}})]})]})},F=(0,r.$j)(null,(function(n){return(0,c.DE)({getBulkUploadHistory:a.YF},n)}))(N);function U(){return(0,C.jsx)(F,{})}},66282:function(){},24323:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACsSURBVHgBnZHBDQIhEEXBtQBvBLjYglCQlOBWoG14WluwA+2AEvQC3NyjF4J/oiZqXIP7k2FmEl4m84ezDxlj1pxzl3NeeO97NqDJF2iD8vgLepO1dokoiB2r1RiIE4RMgMdebSV3IvCCYsb+Uz8tpbQwpKOJyFUT8e9uHNx0jx07VqmGnhijl1Ke6RRKqTn6fRX4hLXWHOWqBm5emxDCgWDs7YQQ25TSdQi8ARteRXW+qdqtAAAAAElFTkSuQmCC"}}]);