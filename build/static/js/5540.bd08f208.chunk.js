"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[5540],{77703:function(e,n,i){i.d(n,{Ll:function(){return l},JO:function(){return r},N1:function(){return s},li:function(){return c},Rl:function(){return d},N4:function(){return u},it:function(){return v},YF:function(){return m},r2:function(){return f},Rq:function(){return A},WP:function(){return p},Vf:function(){return h},gc:function(){return g},Md:function(){return x},EW:function(){return N},dd:function(){return w},id:function(){return j},h:function(){return b},E2:function(){return C},_8:function(){return R},fr:function(){return Z},Fq:function(){return D},tE:function(){return S},OE:function(){return k},ku:function(){return B}});var t=i(1413),a=i(83684),o=i(11979),l=function(e,n){return function(i,l,r){var s=r.api;return new Promise((function(i,l){(0,o.DI)(e,a.k5.editApplication),s((0,t.Z)((0,t.Z)({},a.k5.editApplication),{},{body:n})).then((function(e){i(e)})).catch((function(e){l(e)}))}))}},r=function(e,n){return function(i,l,r){var s=r.api;return new Promise((function(i,l){(0,o.DI)(e,a.k5.deleteApplication),s((0,t.Z)((0,t.Z)({},a.k5.deleteApplication),{},{body:n})).then((function(e){i(e)})).catch((function(e){l(e)}))}))}},s=function(e,n){return function(i,l,r){var s=r.api;return new Promise((function(i,l){(0,o.DI)(e,a.k5.addComments),s((0,t.Z)((0,t.Z)({},a.k5.addComments),{},{body:n})).then((function(e){i(e)})).catch((function(e){l(e)}))}))}},c=function(e){return function(n,i,l){var r=l.api;return new Promise((function(n,i){(0,o.DI)(e,a.k5.getComments),r((0,t.Z)({},a.k5.getComments)).then((function(e){n(e)})).catch((function(e){i(e)}))}))}},d=function(e,n){return function(i,l,r){var s=r.api;return new Promise((function(i,l){(0,o.DI)(e,a.k5.getAllApplications),s((0,t.Z)((0,t.Z)({},a.k5.getAllApplications),{},{body:n})).then((function(e){i(e)})).catch((function(e){var n=e.message;l(n)}))}))}},u=function(){return function(e,n,i){var o=i.api;return new Promise((function(e,n){o((0,t.Z)({},a.k5.getApplicationStatusCount)).then((function(n){e(n)})).catch((function(e){var i=e.message;n(i)}))}))}},v=function(){return function(e,n,i){var o=i.api;return new Promise((function(e,n){o((0,t.Z)({},a.k5.getCroptypesName)).then((function(n){e(n)})).catch((function(e){var i=e.message;n(i)}))}))}},m=function(e){return function(n,i,l){var r=l.api;return new Promise((function(n,i){(0,o.DI)(e,a.k5.getBulkUploadHistory),r((0,t.Z)({},a.k5.getBulkUploadHistory)).then((function(e){n(e)})).catch((function(e){var n=e.message;i(n)}))}))}},f=function(e){return function(n,i,l){var r=l.api;return new Promise((function(n,i){(0,o.DI)(e,a.k5.getSingleBulkUploadHistory),r((0,t.Z)({},a.k5.getSingleBulkUploadHistory)).then((function(e){n(e)})).catch((function(e){var n=e.message;i(n)}))}))}},A=function(){return function(e,n,i){var o=i.api;return new Promise((function(e,n){o((0,t.Z)({},a.k5.getDataGraphInprogress)).then((function(n){e(n)})).catch((function(e){var i=e.message;n(i)}))}))}},p=function(){return function(e,n,i){var o=i.api;return new Promise((function(e,n){o((0,t.Z)({},a.k5.getDataGraphApproved)).then((function(n){e(n)})).catch((function(e){var i=e.message;n(i)}))}))}},h=function(){return function(e,n,i){var o=i.api;return new Promise((function(e,n){o((0,t.Z)({},a.k5.getDataGraphResolvedCases)).then((function(n){e(n)})).catch((function(e){var i=e.message;n(i)}))}))}},g=function(){return function(e,n,i){var o=i.api;return new Promise((function(e,n){o((0,t.Z)({},a.k5.getDataGraphRejected)).then((function(n){e(n)})).catch((function(e){var i=e.message;n(i)}))}))}},x=function(){return function(e,n,i){var o=i.api;return new Promise((function(e,n){o((0,t.Z)({},a.k5.getApplicationReportStatusCount)).then((function(n){e(n)})).catch((function(e){var i=e.message;n(i)}))}))}},N=function(){return function(e,n,i){var o=i.api;return new Promise((function(e,n){o((0,t.Z)({},a.k5.getLandApprovedCount)).then((function(n){e(n)})).catch((function(e){var i=e.message;n(i)}))}))}},w=function(e,n){return function(i,l,r){var s=r.api;return new Promise((function(i,l){(0,o.DI)(e,a.k5.getAllDistricts),s((0,t.Z)((0,t.Z)({},a.k5.getAllDistricts),{},{body:n})).then((function(e){i(e)})).catch((function(e){var n=e.message;l(n)}))}))}},j=function(e){return function(n,i,o){var l=o.api;return new Promise((function(n,i){l((0,t.Z)((0,t.Z)({},a.Sb.approveAllApplication),{},{body:e})).then((function(e){var i=e.data;n(i)})).catch((function(e){i(e)}))}))}},b=function(e){return function(n,i,o){var l=o.api;return new Promise((function(n,i){l((0,t.Z)((0,t.Z)({},a.Sb.approveSelectedApplication),{},{body:e})).then((function(e){n(e)})).catch((function(e){var n=e.message;i(n)}))}))}},C=function(e){return function(n,i,o){var l=o.api;return new Promise((function(n,i){l((0,t.Z)((0,t.Z)({},a.Sb.flagApplication),{},{body:e})).then((function(e){n(e)})).catch((function(e){var n=e.message;i(n)}))}))}},R=function(e){return function(n,i,l){var r=l.api;return new Promise((function(n,i){(0,o.DI)(e,a.k5.getApplicationData),r((0,t.Z)({},a.k5.getApplicationData)).then((function(e){n(e)})).catch((function(e){var n=e.message;i(n)}))}))}},Z=function(e){return function(n,i,o){var l=o.api;return new Promise((function(n,i){l((0,t.Z)((0,t.Z)({},a.k5.editReports),{},{body:e})).then((function(e){n(e)})).catch((function(e){i(e)}))}))}},D=function(e){return function(n,i,o){var l=o.api;return new Promise((function(n,i){l((0,t.Z)((0,t.Z)({},a.k5.newCommentApplication),{},{body:e})).then((function(e){n(e)})).catch((function(e){i(e)}))}))}},S=function(e,n){return function(i,o,l){var r=l.api;return new Promise((function(i,o){r((0,t.Z)((0,t.Z)({},a.k5.uploadReportImage),{},{body:e,options:n})).then((function(e){i(e)})).catch((function(e){o(e)}))}))}},k=function(e){return function(n,i,l){var r=l.api;return new Promise((function(n,i){(0,o.DI)(e,a.k5.generateReport),r((0,t.Z)({},a.k5.generateReport)).then((function(e){n(e)})).catch((function(e){var n=e.message;i(n)}))}))}},B=function(e){return function(e,n,i){var o=i.api;return new Promise((function(e,n){o((0,t.Z)({},a.k5.getApplicationCommentsCount)).then((function(n){e(n)})).catch((function(e){var i=e.message;n(i)}))}))}}},49865:function(e,n,i){i.d(n,{Z:function(){return s}});i(47313);var t=i(54268),a=i(88052),o=i(48119),l=i(46495),r=i(46417);function s(e){var n=e.setComment,i=e.addComments,s=e.comment,c=e.comments,d=e.isViewMoreClicked,u=e.setIsViewMoreClicked,v=e.onCommentResolveHandler,m=e.isNewComment,f=d?c:null===c||void 0===c?void 0:c.slice(0,2);return(0,r.jsxs)("div",{className:"comments-section",children:[(0,r.jsx)("p",{className:"comment-header",children:"Add Comments "}),(0,r.jsx)("textarea",{name:"firstName",className:"comments-textArea",placeholder:"Type text here",autoComplete:"off",value:s,onChange:function(e){return n(e.target.value)}}),(0,r.jsx)("img",{src:a,alt:"send icon",className:"send-icon",onClick:i}),(0,r.jsx)("div",{className:"comments-view",children:null===f||void 0===f?void 0:f.map((function(e){var n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"comment-text",children:[(0,r.jsx)(o.Z,{sx:{bgcolor:t.Z[500]},alt:"Remy Sharp",src:"/broken-image.jpg",children:null===e||void 0===e||null===(n=e.userName)||void 0===n?void 0:n[0].toUpperCase()}),(0,r.jsx)("div",{className:"comment-by",children:e.userName})]},e._id),(0,r.jsx)("div",{className:"comment-text",children:e.comment})]})}))}),(0,r.jsxs)("div",{className:"view-more-btn",children:[m?(0,r.jsx)(l.Z,{text:"Resolve Comment",trigger:function(){var e;return v(null===(e=c[0])||void 0===e?void 0:e.applicationId)}}):(0,r.jsx)(r.Fragment,{}),(null===c||void 0===c?void 0:c.length)>2&&(0,r.jsx)("button",{className:d?"view-less":"view-more",onClick:function(){return u(!d)},children:"View ".concat(d?"Less":"More")})]})]})}},79325:function(e,n,i){i.d(n,{Z:function(){return l}});i(47313);var t=i(97890),a=i(24323),o=i(46417);function l(e){var n=e.title,i=e.path,l=e.activeTab,r=(0,t.s0)();return(0,o.jsxs)("div",{className:"report-header",children:[(0,o.jsx)("img",{src:a,alt:"backIcon",className:"backIcon",onClick:function(){r(i,{state:{activeTab:l}})}}),(0,o.jsx)("span",{children:n})]})}},46495:function(e,n,i){i.d(n,{Z:function(){return a}});i(47313);var t=i(46417);function a(e){var n=e.text,i=e.trigger;return(0,t.jsx)("button",{className:"green-btn",onClick:i,children:n})}},75540:function(e,n,i){i.r(n),i.d(n,{default:function(){return w}});var t=i(47313),a=i(29439),o=i(79325),l=i(97890),r=i(70816),s=i.n(r),c=(i(72632),i(13439)),d=i(46495),u=i(74931),v=i(1084),m=i(9038),f=i(7861),A=i(77703),p=i(8512),h=i(49865),g=(i(88282),i(46417));var x=function(e){var n,i,r,v,m,A,x,N,w,j,b,C,R,Z,D,S,k,B,O,P,E,I,y,M,Q,U,V,F,z,q,Y,L=sessionStorage.getItem("token"),J=(0,f.Z)(L),T=(0,l.TH)().state,X=(0,l.s0)(),G=(0,t.useState)({}),K=(0,a.Z)(G,2),H=K[0],W=K[1],_=(0,t.useState)(""),$=(0,a.Z)(_,2),ee=$[0],ne=$[1],ie=(0,t.useState)(""),te=(0,a.Z)(ie,2),ae=te[0],oe=te[1],le=(0,t.useState)([]),re=(0,a.Z)(le,2),se=re[0],ce=re[1],de=(0,t.useState)(!1),ue=(0,a.Z)(de,2),ve=ue[0],me=ue[1],fe=(0,t.useState)(new Date),Ae=(0,a.Z)(fe,2),pe=(Ae[0],Ae[1],function(){var n,i={id:null===T||void 0===T||null===(n=T.data)||void 0===n?void 0:n._id};e.getComments(i).then((function(e){ce(e.data.applicationComment)})).catch((function(e){p.Am.error(e.data,{autoClose:1e3})}))});return(0,t.useEffect)((function(){W(T.data),pe()}),[T.data]),console.log(null===T||void 0===T||null===(n=T.data)||void 0===n||null===(i=n.applicationDetails)||void 0===i?void 0:i.status),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.Ix,{}),"ROLE_5"===J.roleId&&(0,g.jsxs)("div",{className:"approve-dropdown",children:[(0,g.jsx)("select",{className:"select",name:"roles",id:"roles",onChange:function(e){ne(e.target.value)},children:[{value:"",name:"Select an Option"},{value:"APPROVED",name:"Approve"},{value:"REJECTED",name:"Reject"},{value:"PENDING",name:"Pending"}].filter((function(e){var n,i;return e.value!==(null===T||void 0===T||null===(n=T.data)||void 0===n||null===(i=n.applicationDetails)||void 0===i?void 0:i.status)})).map((function(e){return(0,g.jsx)("option",{value:e.value,children:e.name})}))}),(0,g.jsx)(d.Z,{text:"Update Status",trigger:function(){var n,i,t={status:ee},a={id:null===T||void 0===T||null===(n=T.data)||void 0===n||null===(i=n.applicationDetails)||void 0===i?void 0:i.id};e.editApplications(a,t).then((function(e){p.Am.success(e.message,{autoClose:1e3}),setTimeout((function(){X("/application-management")}),2e3)})).catch((function(e){p.Am.error(e.data,{autoClose:1e3})}))}})]}),(0,g.jsxs)("div",{className:"application-main",children:[(0,g.jsx)(o.Z,{title:"Input Applications",path:"/application-management"}),(0,g.jsx)("div",{className:"details-section",children:(0,g.jsx)("h3",{children:"View Details"})}),(0,g.jsxs)("div",{className:"farmers-details",children:[(0,g.jsx)("h3",{children:"Application Details"}),(0,g.jsx)("div",{className:"farmers-details-inner",children:(0,g.jsxs)("div",{className:"grid-main",children:[(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"CIF/COL/Account Number"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(r=H.applicationDetails)||void 0===r?void 0:r.accountNumber)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Branch Code"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(v=H.applicationDetails)||void 0===v?void 0:v.bankBranchCode)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Created Date"}),(0,g.jsx)("div",{className:"details-span-bold",children:s()(null===H||void 0===H||null===(m=H.applicationDetails)||void 0===m?void 0:m.createdAt).format("DD-MM-YYYY")||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Farmer First Name"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(A=H.applicationDetails)||void 0===A?void 0:A.firstName)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Farmer Last Name"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(x=H.applicationDetails)||void 0===x?void 0:x.lastName)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Father/Spouse name"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(N=H.applicationDetails)||void 0===N?void 0:N.spouseName)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Farmer Residential Address"}),(0,g.jsx)("div",{className:"details-span-bold",dangerouslySetInnerHTML:{__html:(null===H||void 0===H||null===(w=H.applicationDetails)||void 0===w?void 0:w.address)||"-"}})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Mobile number"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(j=H.applicationDetails)||void 0===j?void 0:j.mobileNumber)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Gender"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(b=H.applicationDetails)||void 0===b||null===(C=b.gender)||void 0===C?void 0:C.toUpperCase())||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Loan Reference Number"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(R=H.applicationDetails)||void 0===R?void 0:R.loanReferenceNumber)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"KCC Account Number"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(Z=H.applicationDetails)||void 0===Z?void 0:Z.kccAccountNumber)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Survey Number"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(D=H.applicationDetails)||void 0===D?void 0:D.surveyNo)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Khata Details"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(S=H.applicationDetails)||void 0===S?void 0:S.khataDetails)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Plot Number"}),(0,g.jsx)("div",{className:"details-span-bold",children:null!==H&&void 0!==H&&H.plotNo?H.plotNo:"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Land Location (Vilage / Town)"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(k=H.applicationDetails)||void 0===k?void 0:k.village)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Mandal"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(B=H.applicationDetails)||void 0===B?void 0:B.zone)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"District"}),(0,g.jsx)("div",{className:"details-span-bold",children:(null===H||void 0===H||null===(O=H.applicationDetails)||void 0===O?void 0:O.district)||"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Land Area Of Farmer"}),(0,g.jsx)("div",{className:"details-span-bold",children:null!==H&&void 0!==H&&null!==(P=H.applicationDetails)&&void 0!==P&&P.landArea?"".concat(null===H||void 0===H||null===(E=H.applicationDetails)||void 0===E?void 0:E.landArea," ACRES"):"NA"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"AO"}),(0,g.jsx)("div",{className:"details-span-bold",children:null!==H&&void 0!==H&&null!==(I=H.branchDetails)&&void 0!==I&&I.AO?null===H||void 0===H||null===(y=H.branchDetails)||void 0===y?void 0:y.AO:"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"RBO"}),(0,g.jsx)("div",{className:"details-span-bold",children:null!==H&&void 0!==H&&null!==(M=H.branchDetails)&&void 0!==M&&M.RBO?null===H||void 0===H||null===(Q=H.branchDetails)||void 0===Q?void 0:Q.RBO:"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Branch Name"}),(0,g.jsx)("div",{className:"details-span-bold",children:null!==H&&void 0!==H&&null!==(U=H.branchDetails)&&void 0!==U&&U.branchName?null===H||void 0===H||null===(V=H.branchDetails)||void 0===V?void 0:V.branchName:"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"No Of Applications"}),(0,g.jsx)("div",{className:"details-span-bold",children:null!==H&&void 0!==H&&null!==(F=H.branchDetails)&&void 0!==F&&F.numberOfApplications?null===H||void 0===H||null===(z=H.branchDetails)||void 0===z?void 0:z.numberOfApplications:"-"})]}),(0,g.jsxs)("div",{className:"detailsRowOne",children:[(0,g.jsx)("div",{className:"details-header",children:"Branch District"}),(0,g.jsx)("div",{className:"details-span-bold",children:null!==H&&void 0!==H&&null!==(q=H.branchDetails)&&void 0!==q&&q.district?null===H||void 0===H||null===(Y=H.branchDetails)||void 0===Y?void 0:Y.district:"-"})]})]})})]})]}),(0,g.jsxs)("div",{className:"viewAll-application",onClick:function(){var e;X("/view-customer-details",{state:{branchCode:null===H||void 0===H||null===(e=H.applicationDetails)||void 0===e?void 0:e.bankBranchCode,backRoute:"/application-management"}})},children:[(0,g.jsx)("img",{src:c,alt:"cardboard"}),(0,g.jsx)("p",{children:"View all application"}),(0,g.jsx)("img",{src:u,alt:"arrow"})]}),(0,g.jsx)(h.Z,{addComments:function(){var n,i={comment:ae},t={id:null===T||void 0===T||null===(n=T.data)||void 0===n?void 0:n._id};ae.replace(/^\s+|\s+$/g,"")?e.addComments(t,i).then((function(e){p.Am.success(e.message,{autoClose:1e3}),oe(""),pe()})).catch((function(e){p.Am.error(e.data,{autoClose:1e3})})):p.Am.error("Please add Comments..",{autoClose:1e3})},comment:ae,comments:se,setComment:oe,isViewMoreClicked:ve,setIsViewMoreClicked:me})]})},N=(0,v.$j)(null,(function(e){return(0,m.DE)({editApplications:A.Ll,addComments:A.N1,getComments:A.li},e)}))(x);function w(){return(0,g.jsx)(N,{})}},48119:function(e,n,i){i.d(n,{Z:function(){return N}});var t=i(29439),a=i(63366),o=i(87462),l=i(47313),r=i(83061),s=i(50317),c=i(88564),d=i(29394),u=i(81171),v=i(46417),m=(0,u.Z)((0,v.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=i(22131);function A(e){return(0,f.Z)("MuiAvatar",e)}(0,i(655).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],h=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,n){var i=e.ownerState;return[n.root,n[i.variant],i.colorDefault&&n.colorDefault]}})((function(e){var n=e.theme,i=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:n.typography.fontFamily,fontSize:n.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===i.variant&&{borderRadius:n.shape.borderRadius},"square"===i.variant&&{borderRadius:0},i.colorDefault&&{color:n.palette.background.default,backgroundColor:"light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600]})})),g=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,n){return n.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),x=(0,c.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,n){return n.fallback}})({width:"75%",height:"75%"});var N=l.forwardRef((function(e,n){var i=(0,d.Z)({props:e,name:"MuiAvatar"}),c=i.alt,u=i.children,m=i.className,f=i.component,N=void 0===f?"div":f,w=i.imgProps,j=i.sizes,b=i.src,C=i.srcSet,R=i.variant,Z=void 0===R?"circular":R,D=(0,a.Z)(i,p),S=null,k=function(e){var n=e.crossOrigin,i=e.referrerPolicy,a=e.src,o=e.srcSet,r=l.useState(!1),s=(0,t.Z)(r,2),c=s[0],d=s[1];return l.useEffect((function(){if(a||o){d(!1);var e=!0,t=new Image;return t.onload=function(){e&&d("loaded")},t.onerror=function(){e&&d("error")},t.crossOrigin=n,t.referrerPolicy=i,t.src=a,o&&(t.srcset=o),function(){e=!1}}}),[n,i,a,o]),c}((0,o.Z)({},w,{src:b,srcSet:C})),B=b||C,O=B&&"error"!==k,P=(0,o.Z)({},i,{colorDefault:!O,component:N,variant:Z}),E=function(e){var n=e.classes,i={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(i,A,n)}(P);return S=O?(0,v.jsx)(g,(0,o.Z)({alt:c,src:b,srcSet:C,sizes:j,ownerState:P,className:E.img},w)):null!=u?u:B&&c?c[0]:(0,v.jsx)(x,{className:E.fallback}),(0,v.jsx)(h,(0,o.Z)({as:N,ownerState:P,className:(0,r.Z)(E.root,m),ref:n},D,{children:S}))}))},54268:function(e,n){n.Z={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"}},81171:function(e,n,i){i.d(n,{Z:function(){return g}});var t=i(87462),a=i(47313),o=i(63366),l=i(83061),r=i(50317),s=i(91615),c=i(29394),d=i(88564),u=i(22131);function v(e){return(0,u.Z)("MuiSvgIcon",e)}(0,i(655).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=i(46417),f=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],A=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var i=e.ownerState;return[n.root,"inherit"!==i.color&&n["color".concat((0,s.Z)(i.color))],n["fontSize".concat((0,s.Z)(i.fontSize))]]}})((function(e){var n,i,t,a,o,l,r,s,c,d,u,v,m,f,A,p,h,g=e.theme,x=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=g.transitions)||null==(i=n.create)?void 0:i.call(n,"fill",{duration:null==(t=g.transitions)||null==(a=t.duration)?void 0:a.shorter}),fontSize:{inherit:"inherit",small:(null==(o=g.typography)||null==(l=o.pxToRem)?void 0:l.call(o,20))||"1.25rem",medium:(null==(r=g.typography)||null==(s=r.pxToRem)?void 0:s.call(r,24))||"1.5rem",large:(null==(c=g.typography)||null==(d=c.pxToRem)?void 0:d.call(c,35))||"2.1875"}[x.fontSize],color:null!=(u=null==(v=g.palette)||null==(m=v[x.color])?void 0:m.main)?u:{action:null==(f=g.palette)||null==(A=f.action)?void 0:A.active,disabled:null==(p=g.palette)||null==(h=p.action)?void 0:h.disabled,inherit:void 0}[x.color]}})),p=a.forwardRef((function(e,n){var i=(0,c.Z)({props:e,name:"MuiSvgIcon"}),a=i.children,d=i.className,u=i.color,p=void 0===u?"inherit":u,h=i.component,g=void 0===h?"svg":h,x=i.fontSize,N=void 0===x?"medium":x,w=i.htmlColor,j=i.inheritViewBox,b=void 0!==j&&j,C=i.titleAccess,R=i.viewBox,Z=void 0===R?"0 0 24 24":R,D=(0,o.Z)(i,f),S=(0,t.Z)({},i,{color:p,component:g,fontSize:N,inheritViewBox:b,viewBox:Z}),k={};b||(k.viewBox=Z);var B=function(e){var n=e.color,i=e.fontSize,t=e.classes,a={root:["root","inherit"!==n&&"color".concat((0,s.Z)(n)),"fontSize".concat((0,s.Z)(i))]};return(0,r.Z)(a,v,t)}(S);return(0,m.jsxs)(A,(0,t.Z)({as:g,className:(0,l.Z)(B.root,d),ownerState:S,focusable:"false",color:w,"aria-hidden":!C||void 0,role:C?"img":void 0,ref:n},k,D,{children:[a,C?(0,m.jsx)("title",{children:C}):null]}))}));p.muiName="SvgIcon";var h=p;function g(e,n){var i=function(i,a){return(0,m.jsx)(h,(0,t.Z)({"data-testid":"".concat(n,"Icon"),ref:a},i,{children:e}))};return i.muiName=h.muiName,a.memo(a.forwardRef(i))}},72632:function(){},74931:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAASCAYAAAAdZl26AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADvSURBVHgB1ZUxEoIwEEV3hR6HE8RwEgu1lBvIESxsrKRzRvEM6jW04gZ6AGbiCaBXEtkZoANSLq9KMlv8l53ZdYApMpFXf+lP80f+7qtzgCEUHgxE1TH0V77qk5gAQ7TWaXM2xtyCJNh01bLsQPEsXt7C+yBiWD91doKlAGErwVaAsJFgLUAMSaA4iQhGgAPO2qBpJKASirJddkd5lgZGCkmwHKOWqPJbpq7+6RmMAHQxRsBmH6gq91ztlUIYAfIiD6Ahrq9teLqwF+gLT7AWGApPsBWwCU+wFLANT/Aco7r92N7wrKkW7FYchRiq+wPLmZM5aBLe1gAAAABJRU5ErkJggg=="},24323:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACsSURBVHgBnZHBDQIhEEXBtQBvBLjYglCQlOBWoG14WluwA+2AEvQC3NyjF4J/oiZqXIP7k2FmEl4m84ezDxlj1pxzl3NeeO97NqDJF2iD8vgLepO1dokoiB2r1RiIE4RMgMdebSV3IvCCYsb+Uz8tpbQwpKOJyFUT8e9uHNx0jx07VqmGnhijl1Ke6RRKqTn6fRX4hLXWHOWqBm5emxDCgWDs7YQQ25TSdQi8ARteRXW+qdqtAAAAAElFTkSuQmCC"},13439:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHBSURBVHgBtZVRTsJAEIZn1hofNIEb2PYEHAFOoJ5AOAGQCMQnypMxaMQTgCfQGwAnkBO09QZ95IF2/bcUQm1pKcE/IVva2a8z/06mbL6YY5JUp2MVUNvu2aO/tzUFlSRnHPCcikpQU7Ks4ioFDCko3mpRQZlD856YSmnPtN0/uqWX6YLKlCP30XXzYmJguqSKIDHN2ePiZ1Ah8AqbzmmSuUOSRwcoBo5KbNAJJOifFD+8oV49xGO7Y4ceo009KWVbf9J1oa33BaugpiqPewz/0JezLCozu9vwlbxTawhldJNcX+NFtbjHXXeBpUYFtIEGQRDuEyymrPHn0R5vy4+gKilxJm7wqMyS52kej/fBQk81lL+MZ6qg5qvZx9ywEPPhdJ1WwmME6/vAQoqGv/QpOigdoK8EtOPUVWyax0wZMp6NiSoXUe9Ym8bQ+Aa0sgsNk6CiEnQNyMJ+sFvhVCROQBMZK2Fi9RFYTWNicw12qJa8RZxU99KgMbCabOJKvEVDX1mSmAmqE3zyB2gpj3z6QfYeoKO0JLSovBJf8hTQCvwaOD3HomzlzpNNxi1en1nqZ+YYCeURmB6auoEZcBKo0i+xRs7STekM4AAAAABJRU5ErkJggg=="},88052:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIaSURBVHgBxVRbTipBEO2BISTww92Bdwfs4I4rYO4KmLsCLx9A+BI/CAmQoCsQVyCuwHEFugNnCfMBPzw9p6k27TCgKMZKGrqnq86pOl3dSn2zOeqI1u12Pdd1/ziO83+9Xsf1ev23q75oAD0BaBVTT4YCOP9i/nyKoN1ul4rFYoBpxYAmDSR3BxHsAoUcMcCeVIJoPp+P9P57oPl8vgwJzgFUBlApAXpBrbG+xfzECo2o/84KeFi5XI66+gZUdA0x7iaTyQjkseh/L+CRDG+1Wl0ZLNcGhXMF2QQEFcBX0Ol0qkEt/zfgi8XiFOtH7oFg/Iag3+8/i6Od6QOCRq1WK0qpcAs8m816mLPa0I7JqG2jptEh4OJXkQRvbH9NwAPBxj/JnPIEAHkeDAbXnU6n/B74cDgsISmfPsvlMrQJtrqo1+uVeRMxrVqfGcS+PkvJnDEBYq7ph2RPtyqwrdFoPMEpAADbjOUSxMMYpoHrLB2nmiZPagVJ410oFAo+QM5JgA7522w2X7tEZGOTKPz/qtVq8d4KUghiVDWSalQmkzmz96V79NOQBP8QgTFkd6k2D5jHO2O+G3lg47S4DxNIdvqGImtdBeVRm/MxVX6egCZVMGufrYm1L+vxrpiDCFgFtNZgs9mMrawrwct5cxQCGrLVMuGwdVdhRGjZ8GgEuCOh2lw8Qxju8z+YQOzCTPbJ8yXjCyyv8M/aC3eSGZ+Suk2QAAAAAElFTkSuQmCC"}}]);