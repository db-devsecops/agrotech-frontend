"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[5652],{90501:function(e,n,a){a.d(n,{j0:function(){return s},Yy:function(){return r},jI:function(){return o},Kb:function(){return c},V3:function(){return d},g3:function(){return u},RG:function(){return p}});var l=a(1413),i=a(83684),t=a(11979),s=function(e){return function(n,a,t){var s=t.api;return new Promise((function(n,a){s((0,l.Z)((0,l.Z)({},i.z2.addLands),{},{body:e})).then((function(e){n(e)})).catch((function(e){a(e)}))}))}},r=function(e,n){return function(a,t,s){var r=s.api;return new Promise((function(a,t){r((0,l.Z)((0,l.Z)({},i.z2.uploadLands),{},{body:e,options:n})).then((function(e){a(e)})).catch((function(e){var n=e.message;t(n)}))}))}},o=function(e,n){return function(a,s,r){var o=r.api;return new Promise((function(a,s){(0,t.DI)(e,i.z2.updateLands),o((0,l.Z)((0,l.Z)({},i.z2.updateLands),{},{body:n})).then((function(e){a(e)})).catch((function(e){var n=e.message;s(n)}))}))}},c=function(e,n){return function(a,s,r){var o=r.api;return new Promise((function(a,s){(0,t.DI)(e,i.z2.getLands),o((0,l.Z)((0,l.Z)({},i.z2.getLands),{},{body:n})).then((function(e){a(e)})).catch((function(e){var n=e.message;s(n)}))}))}},d=function(e){return function(n,a,s){var r=s.api;return new Promise((function(n,a){(0,t.DI)(e,i.z2.deleteLand),r((0,l.Z)({},i.z2.deleteLand)).then((function(e){n(e)})).catch((function(e){var n=e.message;a(n)}))}))}},u=function(e){return function(n,a,s){var r=s.api;return new Promise((function(n,a){(0,t.DI)(e,i.z2.downloadLand),r((0,l.Z)({},i.z2.downloadLand)).then((function(e){n(e)})).catch((function(e){var n=e.message;a(n)}))}))}},p=function(e){return function(n,a,t){var s=t.api;return new Promise((function(n,a){s((0,l.Z)((0,l.Z)({},i.z2.downloadSelectedLand),{},{body:e})).then((function(e){n(e)})).catch((function(e){var n=e.message;a(n)}))}))}}},80034:function(e,n,a){a.d(n,{Z:function(){return C}});var l=a(47313),i=a(45214),t=a(32945),s=a(77874),r=a(46417),o=function(e){var n=e.bgcolor,a=e.progress,l={height:e.height,width:700,borderRadius:40,marginTop:10},i={height:10,width:"".concat(a,"%"),backgroundColor:n,borderRadius:40,textAlign:"right"};return(0,r.jsx)("div",{style:l,children:(0,r.jsx)("div",{style:i,children:(0,r.jsx)("span",{style:{padding:5,color:"black",fontWeight:900}})})})},c=a(82763),d=a(29439),u=a(57829),p=a(65033),h=a(66835),m=a(57861),v=a(70941),A=a(51629),x=a(23477),j=a(24076),f=a(82295),N=a(71255);a(14042);function g(e){var n=e.row,a=l.useState(!1),i=(0,d.Z)(a,2),t=i[0],s=i[1];return console.log(null===n||void 0===n?void 0:n.surveyNo.split(",").join(", ")),(0,r.jsxs)(l.Fragment,{children:[(0,r.jsxs)(j.Z,{sx:{"& > *":{borderBottom:"unset"}},children:[(0,r.jsx)(v.Z,{component:"th",scope:"row",children:null===n||void 0===n?void 0:n.accountNumber}),(0,r.jsx)(v.Z,{className:"line-break",children:null===n||void 0===n?void 0:n.address}),(0,r.jsx)(v.Z,{children:null===n||void 0===n?void 0:n.applicationId}),(0,r.jsx)(v.Z,{children:null===n||void 0===n?void 0:n.bankBranchCode}),(0,r.jsx)(v.Z,{children:null===n||void 0===n?void 0:n.district}),(0,r.jsx)(v.Z,{children:(0,r.jsxs)("div",{className:"eye-container",children:[(0,r.jsx)("img",{src:N,alt:"greenEye"}),(0,r.jsx)("div",{className:"view-details-btn",onClick:function(){return s(!t)},children:"View ".concat(t?"Less":"More")})]})})]}),(0,r.jsx)(j.Z,{children:(0,r.jsx)(v.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:8,children:(0,r.jsx)(p.Z,{in:t,timeout:"auto",unmountOnExit:!0,children:(0,r.jsx)(u.Z,{sx:{margin:1},children:(0,r.jsxs)("div",{className:"collapse-row",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"First name"}),(0,r.jsx)("p",{className:"collapse-content",children:null===n||void 0===n?void 0:n.firstName})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Gender"}),(0,r.jsx)("p",{className:"collapse-content",children:null===n||void 0===n?void 0:n.gender})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Is Bulk"}),(0,r.jsx)("p",{className:"collapse-content",children:null!==n&&void 0!==n&&n.isBulkUpload?"True":"False"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"KCC Account Number"}),(0,r.jsx)("p",{className:"collapse-content",children:null!==n&&void 0!==n&&n.kccAccountNumber?null===n||void 0===n?void 0:n.kccAccountNumber:"-"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Khata Details"}),(0,r.jsx)("p",{className:"collapse-content",children:null!==n&&void 0!==n&&n.khataDetails?null===n||void 0===n?void 0:n.khataDetails:"-"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Land Area"}),(0,r.jsx)("p",{className:"collapse-content",children:null!==n&&void 0!==n&&n.landArea?null===n||void 0===n?void 0:n.landArea:"-"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Loan Reference Number"}),(0,r.jsx)("p",{className:"collapse-content",children:null!==n&&void 0!==n&&n.loanReferenceNumber?null===n||void 0===n?void 0:n.loanReferenceNumber:"-"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Mobile Number"}),(0,r.jsx)("p",{className:"collapse-content",children:null!==n&&void 0!==n&&n.mobileNumber?null===n||void 0===n?void 0:n.mobileNumber:"-"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Mortage Details"}),(0,r.jsx)("p",{className:"collapse-content",children:null!==n&&void 0!==n&&n.mortageDetails?null===n||void 0===n?void 0:n.mortageDetails:"-"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Pin Code"}),(0,r.jsx)("p",{className:"collapse-content",children:null!==n&&void 0!==n&&n.pincode?null===n||void 0===n?void 0:n.pincode:"-"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Status"}),(0,r.jsx)("p",{className:"collapse-content",children:null!==n&&void 0!==n&&n.status?null===n||void 0===n?void 0:n.status:"-"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Spouse Name"}),(0,r.jsx)("p",{className:"collapse-content",children:null!==n&&void 0!==n&&n.spouseName?null===n||void 0===n?void 0:n.spouseName:"-"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Survey Number"}),(0,r.jsx)("p",{className:"collapse-content line-break",children:null!==n&&void 0!==n&&n.surveyNo?null===n||void 0===n?void 0:n.surveyNo.split(",").join(", "):"-"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Village"}),(0,r.jsx)("p",{className:"collapse-content",children:null!==n&&void 0!==n&&n.village?null===n||void 0===n?void 0:n.village:"-"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"collapse-title",children:"Rejection Reason"}),(0,r.jsx)("p",{className:"collapse-content red-text line-break",children:(0,r.jsx)("b",{children:null!==n&&void 0!==n&&n.rejectionReason?null===n||void 0===n?void 0:n.rejectionReason:"-"})})]})]})})})})})]})}function b(e){var n=e.applicationData,a=e.title;return(0,r.jsxs)("div",{style:{margin:20},children:[(0,r.jsx)("h3",{children:a}),(null===n||void 0===n?void 0:n.length)>0?(0,r.jsx)(A.Z,{component:f.Z,children:(0,r.jsxs)(h.Z,{"aria-label":"collapsible table",children:[(0,r.jsx)(x.Z,{children:(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(v.Z,{children:"Account Number"}),(0,r.jsx)(v.Z,{children:"Address"}),(0,r.jsx)(v.Z,{children:"Application ID"}),(0,r.jsx)(v.Z,{children:"Bank Branch Code"}),(0,r.jsx)(v.Z,{children:"District"}),(0,r.jsx)(v.Z,{children:"Action"})]})}),(0,r.jsx)(m.Z,{children:(null===n||void 0===n?void 0:n.length)>0&&(null===n||void 0===n?void 0:n.map((function(e){return(0,r.jsx)(g,{row:e},e.name)})))})]})}):(0,r.jsx)(r.Fragment,{children:"No Data Updated"})]})}function C(e){var n=e.selectFile,a=e.uploadProgress,l=e.uploadFileName,d=(e.title,e.createdApplications),u=e.updatedApplications,p=e.notUpdatedApplications,h=e.from,m=e.singleUpload,v=e.filesArray,A=Array.from(v);return(0,r.jsxs)("div",{className:"application-body",children:[(0,r.jsx)("h4",{children:"Bulk Upload"}),(null===u||void 0===u?void 0:u.length)>0||(null===p||void 0===p?void 0:p.length)>0||(null===d||void 0===d?void 0:d.length)>0||"Report Compilation"===h?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("div",{className:"pdf-iframe",children:(0,r.jsx)("iframe",{style:{backgroundColor:"#FFFFFF"},src:"".concat(c,"#toolbar=0&navpanes=0&transparent=0"),type:"application/pdf",frameBorder:"none",className:"embeded-pdf",height:"800px",width:"850px"})}),(0,r.jsxs)("div",{class:"upload-btn-wrapper",children:[(0,r.jsx)("div",{className:"red-button-container",children:(0,r.jsx)(i.Z,{text:"ADD Upload"})}),(0,r.jsx)("input",{onChange:n,type:"file",multiple:"Report Compilation"===h&&!!m,accept:"KCC Applications"===h?"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel":"Report Compilation"===h?"application/pdf":"",name:"myfile"})]}),l?(0,r.jsxs)("div",{className:"excel-container",children:["Report Compilation"===h?(0,r.jsx)("img",{src:s,alt:"PDFIcon",className:"excelIcon"}):(0,r.jsx)("img",{src:t,alt:"excelIcon",className:"excelIcon"}),(0,r.jsxs)("div",{className:"excel-title",children:[(0,r.jsx)("div",{children:null===A||void 0===A?void 0:A.map((function(e){return(0,r.jsx)("p",{children:e.name})}))}),(0,r.jsxs)("div",{className:"progress-main",children:[(0,r.jsx)(o,{bgcolor:"#F7941D",progress:"".concat(a)}),100===a?(0,r.jsx)("div",{className:"progress-text",children:"Upload completed"}):(0,r.jsx)(r.Fragment,{})]})]})]}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("div",{className:"other-applications",children:(null===u||void 0===u?void 0:u.length)>0||(null===p||void 0===p?void 0:p.length)>0||(null===d||void 0===d?void 0:d.length)>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{applicationData:d,title:"Created Applications"}),(0,r.jsx)(b,{applicationData:u,title:"Applications Updated"}),(0,r.jsx)(b,{applicationData:p,title:"Applications Not Updated"})]}):(0,r.jsx)(r.Fragment,{})})]})}},79325:function(e,n,a){a.d(n,{Z:function(){return s}});a(47313);var l=a(97890),i=a(24323),t=a(46417);function s(e){var n=e.title,a=e.path,s=e.activeTab,r=(0,l.s0)();return(0,t.jsxs)("div",{className:"report-header",children:[(0,t.jsx)("img",{src:i,alt:"backIcon",className:"backIcon",onClick:function(){r(a,{state:{activeTab:s}})}}),(0,t.jsx)("span",{children:n})]})}},46495:function(e,n,a){a.d(n,{Z:function(){return i}});a(47313);var l=a(46417);function i(e){var n=e.text,a=e.trigger;return(0,l.jsx)("button",{className:"green-btn",onClick:a,children:n})}},45214:function(e,n,a){a.d(n,{Z:function(){return t}});a(47313);var l=a(97477),i=a(46417);function t(e){var n=e.text,a=e.trigger;return(0,i.jsxs)("div",{className:"green-btn-container",children:[(0,i.jsx)("button",{className:"red-button",onClick:a,children:n}),(0,i.jsx)("img",{className:"green-plus",src:l})]})}},75652:function(e,n,a){a.r(n),a.d(n,{default:function(){return f}});var l=a(47313),i=a(1413),t=a(4942),s=a(29439),r=a(79325),o=a(46495),c=a(97890),d=a(80034),u=a(46417);function p(e){var n=e.getInputs,a=e.userData,l=function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()};return(0,u.jsxs)("div",{className:"application-body",children:[(0,u.jsx)("h4",{children:"Land Records Details"}),(0,u.jsxs)("div",{className:"form-fields-grid",children:[(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Survey No"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onKeyDown:l,onChange:n,name:"surveyNo",type:"number",min:"0",value:a.surveyNo})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Reservoir"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,name:"reservoir",value:a.reservoir})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"District Name"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,name:"districtName",value:a.districtName})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Strategic area"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onKeyDown:l,onChange:n,type:"number",min:"0",name:"strategicArea",value:a.strategicArea})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Village Name"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,name:"villageName",value:a.villageName})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Account Number"}),(0,u.jsx)("input",{placeholder:"Enter here",type:"number",min:"0",className:"inputField",onKeyDown:l,onChange:n,name:"accountNumber",value:a.accountNumber})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Mandal"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,name:"zoneName",value:a.zoneName})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Graduate Name"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,name:"graduateName",value:a.graduateName})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Father/Husband Name"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,name:"fatherHusbandSpouseName",value:a.fatherHusbandSpouseName})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Area Units"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,onKeyDown:l,type:"number",min:"0",name:"areaUnits",value:a.areaUnits})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Experience area"}),(0,u.jsx)("input",{placeholder:"Enter here",type:"number",min:"0",className:"inputField",onKeyDown:l,onChange:n,name:"experienceArea",value:a.experienceArea})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Non cultivatable area"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,name:"nonCultivableArea",value:a.nonCultivableArea})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Cultivatable area"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,onKeyDown:l,type:"number",min:"0",name:"cultivableArea",value:a.cultivableArea})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Nature of experience"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,name:"natureOfExperience",value:a.natureOfExperience})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Nature of the Earth"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,name:"natureOfEarth",value:a.natureOfEarth})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Discipline (Rs.)"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onKeyDown:l,onChange:n,type:"number",min:"0",name:"discipline",value:a.discipline})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Land Description"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,name:"landDescription",value:a.landDescription})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Document Number"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onKeyDown:l,onChange:n,name:"documentNumber",type:"number",min:"0",value:a.documentNumber})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Land Rate"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onKeyDown:l,onChange:n,type:"number",min:"0",name:"landRate",value:a.landRate})]}),(0,u.jsxs)("div",{className:"form-field",children:[(0,u.jsx)("label",{children:"Land Type"}),(0,u.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:n,name:"landType",value:a.landType})]})]})]})}var h=a(1084),m=a(9038),v=a(8512),A=(a(88282),a(90501));var x=function(e){var n=(0,c.s0)(),a=(0,c.TH)().state,h=(0,l.useState)({}),m=(0,s.Z)(h,2),A=m[0],x=m[1],j=(0,l.useState)(0),f=(0,s.Z)(j,2),N=f[0],g=f[1],b=(0,l.useState)(""),C=(0,s.Z)(b,2),w=C[0],Z=C[1],E=(0,l.useState)("individual"),R=(0,s.Z)(E,2),U=R[0],S=R[1],B=(0,l.useState)({}),D=(0,s.Z)(B,2),y=D[0],k=D[1],F=function(e){S(e)};return(0,l.useEffect)((function(){null!==a&&void 0!==a&&a.data&&k(a.data)}),[]),(0,u.jsxs)("div",{className:"application-main",children:[(0,u.jsx)(v.Ix,{}),(0,u.jsx)(r.Z,{title:"Upload New Land Records",path:"/report-compilation"}),(0,u.jsxs)("div",{className:"tabButton-container",children:[(0,u.jsx)("button",{className:"individual"===U?"green-btn right-noOutline":"outlined-btn right-noOutline",onClick:function(){return F("individual")},children:"Individual Upload"}),(0,u.jsx)("button",{className:"bulk"===U?"green-btn left-noOutline":"outlined-btn left-noOutline",onClick:function(){return F("bulk")},children:"Bulk Upload"})]}),"bulk"===U?(0,u.jsx)(d.Z,{selectFile:function(e){x(e.target.files[0]),Z(e.target.files[0].name)},uploadProgress:N,uploadFileName:w,title:"New Land Records"}):(0,u.jsx)(p,{getInputs:function(e){var n=(0,t.Z)({},e.target.name,e.target.value);k((0,i.Z)((0,i.Z)({},y),n))},userData:y}),(0,u.jsxs)("div",{className:"button-container",children:[(0,u.jsx)("p",{className:"cancel-btn",onClick:function(){return n("/report-compilation")},children:"Cancel"}),(0,u.jsx)(o.Z,{text:null!==a&&void 0!==a&&a.data?"Update":"Save and Update",trigger:function(){if("individual"===U)if(Object.keys(y).forEach((function(e){return void 0===y[e]&&delete y[e]})),a){var l={id:y._id};e.updateLand(l,y).then((function(e){v.Am.success("Land Record Updated"),setTimeout((function(){n("/report-compilation")}),1e3)})).catch((function(e){v.Am.error(e.error,{autoClose:1e3})}))}else e.addNewLand(y).then((function(e){v.Am.success("Land Record Added"),setTimeout((function(){n("/report-compilation")}),1e3)})).catch((function(e){v.Am.error(e.error,{autoClose:1e3})}));else{var i=new FormData;i.append("file",A);var t={onUploadProgress:function(e){var n=e.loaded,a=e.total,l=Math.floor(100*n/a);g(l)}};e.addBulkUpload(i,t).then((function(e){v.Am.success(e.message,{autoClose:1e3})})).catch((function(e){v.Am.error(e)}))}}})]})]})},j=(0,h.$j)(null,(function(e){return(0,m.DE)({addNewLand:A.j0,updateLand:A.jI,addBulkUpload:A.Yy},e)}))(x);function f(){return(0,u.jsx)(j,{})}},82295:function(e,n,a){a.d(n,{Z:function(){return x}});var l=a(63366),i=a(87462),t=a(47313),s=a(83061),r=a(50317),o=a(17551),c=a(88564),d=a(29394),u=a(22131);function p(e){return(0,u.Z)("MuiPaper",e)}(0,a(655).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=a(46417),m=["className","component","elevation","square","variant"],v=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},A=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,n){var a=e.ownerState;return[n.root,n[a.variant],!a.square&&n.rounded,"elevation"===a.variant&&n["elevation".concat(a.elevation)]]}})((function(e){var n=e.theme,a=e.ownerState;return(0,i.Z)({backgroundColor:n.palette.background.paper,color:n.palette.text.primary,transition:n.transitions.create("box-shadow")},!a.square&&{borderRadius:n.shape.borderRadius},"outlined"===a.variant&&{border:"1px solid ".concat(n.palette.divider)},"elevation"===a.variant&&(0,i.Z)({boxShadow:n.shadows[a.elevation]},"dark"===n.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,o.Fq)("#fff",v(a.elevation)),", ").concat((0,o.Fq)("#fff",v(a.elevation)),")")}))})),x=t.forwardRef((function(e,n){var a=(0,d.Z)({props:e,name:"MuiPaper"}),t=a.className,o=a.component,c=void 0===o?"div":o,u=a.elevation,v=void 0===u?1:u,x=a.square,j=void 0!==x&&x,f=a.variant,N=void 0===f?"elevation":f,g=(0,l.Z)(a,m),b=(0,i.Z)({},a,{component:c,elevation:v,square:j,variant:N}),C=function(e){var n=e.square,a=e.elevation,l=e.variant,i=e.classes,t={root:["root",l,!n&&"rounded","elevation"===l&&"elevation".concat(a)]};return(0,r.Z)(t,p,i)}(b);return(0,h.jsx)(A,(0,i.Z)({as:c,ownerState:b,className:(0,s.Z)(C.root,t),ref:n},g))}))},82763:function(e,n,a){e.exports=a.p+"static/media/TransposeDoc.23df78db17541b42d695.pdf"},24323:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACsSURBVHgBnZHBDQIhEEXBtQBvBLjYglCQlOBWoG14WluwA+2AEvQC3NyjF4J/oiZqXIP7k2FmEl4m84ezDxlj1pxzl3NeeO97NqDJF2iD8vgLepO1dokoiB2r1RiIE4RMgMdebSV3IvCCYsb+Uz8tpbQwpKOJyFUT8e9uHNx0jx07VqmGnhijl1Ke6RRKqTn6fRX4hLXWHOWqBm5emxDCgWDs7YQQ25TSdQi8ARteRXW+qdqtAAAAAElFTkSuQmCC"},32945:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANNSURBVHgB7VhNSBRhGH5m3Mw0YkGsi+DsxYMGblBEh9rVU+xuNBRZt1ZPUYFEFHQIlG5FRZjSKfWYoiu0esyVLqEnIz102Q26ZAgd2pVUZnrfr11bzW9mdGbSgw+M8/347Tzzvs/37Lsf4DGiKT0YG9bDcAkFLqGndG3FQLRCRYtBvOgDBanKSlUbi499wQ4RwDbB0VAqEFWLRNYAjdow4cFbOiXGaTm8RhEIIMJd/IlGkOe8JrIZGz5blpb/DXpuTomN6kkiEikS0eAVTLyg60fZ04J0dVErAwPT0nUqLtLfcID0MeBHWioPqs/LxX+eskG66WJS6cvj3bJ18TFdUxSEVexRbHtXOsXKsnEiMaKHSn3DIJnw7lXRQONR2TpTQQPflURKN7EH4VvEKEIdpN9c2RDbTMo0MUQaGrRYyhtElxKrDlSLe2GtsKP5qip1agvxQzGRS18az0ACEn+SiEMq/muN7Xh27glqigQ2g+cenLwHvyCN2My3GSRCMbQ3XsHAwtCGudb6KI4eqsPU14xsOVZ+GXcSo/pfHzOFj3EoIjTeLV2ooMWS2KelBSI3iwuhOGbpzn1GHRG6SmQXC4t483kEFg/okphjlMhFYQNL8b+eH0RzbTM6mpK4+/6+GGNSHK0b725ZLf2nuihqLEsG22NjsIOkseuWBru4/J2iMozQEQ0JLSZS2EbX2+yEmPMTtnaRzk7i9LFTIlJ52oGcwgka8xuODJYj9vTsY9Hunesj0U/DATLlHXpIkKsVrhyonbNYJ0orR9+VP1fz6+38agEOESzvECGxQw2bRWbx/xw5/6Mz3UQoL67O5iTml+ZFWq1A4te3Er9iYMhO/PQWmm3ESp6Vzk3i5cd+0WZv8xuWxDZ7Vrm3Ha9tgp+wFP/tlpvCHtizSvZQc6AGr9r6BNmSt/kBqcZknsU6Y2/rJNNlb+MUbwm3pbVsnlMl86ySt7XWR6TE3JbWUmK9c/2ispDtvocfeqSVhxewtAs7S7Ca3y+ttwvfSmu38K203m34pzGXPqbEU3rW0zMLD8BlkajKYymdzwo0epMwMeYfAyzU9SOnncDtwZ3lWYo4HyOCJofWJOLKBtK7R8wKdlF2S8xziMPhlPvD4d8exnXDVcx1nAAAAABJRU5ErkJggg=="},71255:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHcSURBVHgB5VOxbhNBEJ0du0PI5/wAK1d0sb+AowEhIcUp6UhHFyKRWFS+VJFIJNxShQ5R2ZRUuXyBjw/IZVPSXUEkpNgzvDnfWZZFpNTJSLZ2bnbevfdmjujehrut4I98zE3eIiWvTiNHLhOR8zAIkzsB+U/+LTseohIhndCcrspCgzYB2i2b1B1eHFx8Xe1rLAESH2283vjmnHuH9Itcyxsw+Y3cW13m8v1ycLnXftEGOTpqv2w/bb1qnRc/i79W50qG50c8VVUvN9LL9/OEH/MupJ0p6zNjY+fOcWeI2khm0gO7mGc8td6SZQmCS3hLJn9kJySh8Mfwh/hMVHrhIGSV5C4kTwHyPHwMqf/sI57zqcmVpvTYNd1YSYv8Q75tICVN4RjsftQgFnbGvZSZ4zLfC4U0ZMd63cyNTVrZbG9YG0NrbQ7EysVqbmDVMWJt6jbci/iGT2swYUnxLDY5K9Pswvw+ViCth9M56YytV2eGUZttPhnIwoMAYxOkQ3gwqfYoJqHDfJAndt8sMZD6/nKPjA20jlDcqhpGpenwq2ZJ15RhuruQ/R6P0no4CyfWYrmQFkoZfr9osXFP8N9HXvxvIW//RE58v5ye000sZQGWV+JkEvZDSg8r/gG3kuwaIKd5hAAAAABJRU5ErkJggg=="},77874:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC0klEQVRoge2ZTUhUURiGnxnHwsZsNLOckhiVodCgv0WhKynKjRCEoRTRJugH3SRZQasW2kaKijQihAiUCtJ2GSaUYEGCVBKWVvQjESakqc3PbfExDDXk6L3neCeYd3O+Odxz3u+Z7957DudCUklZkiPeBca+fEOLs0Gjo3243uo0ThW5zFdGVi44OGlU5jdYncsWgFDtZYzlXiUQtgCQuZJQzSUlEPYAgDII+wBACYS9AGAZwn4AsASRGABgGiJxAMAURGIBQAxEvMtdC5FTjGlNibK5Eq8C81QSwG7pAdhQCk1dcGMAKg5rsYhID8CRRsj1QZobquoga5UWG9ABkO6JJvyqDxxO8BUpt4lIPcD0JIRDEmdkKZ/+b6kHCAbgw2uJVxdIOzaq3CYiPc9A731pHU4IheDzsBYb0AXQ3Q6BGYnfvYSZKS02oAvgx3d40StxKAiOuIcfpqUHwJkCvmKJ/ZthR5UWG9AFULQdPCvkgQaoroecPC1WegBKK6TtbIFnD2RBO90Ky7KVW6nfTi/NhG3lshY8bIOpCVmV1xRCXTO0NYE3H7w+cC2CcBiGnsOTDnlj2Q6w+yAsXgL93fDtE+T5YbBPAAo3wpnW2DE7q6G4BK6cmLedWoA0N+w6ILHbAxcf/XnvBwPgSo3+/jIifXl+qZqtAK5U2FsreyEA/yZpP76RavR3w1A/lB+CPccENtcXHT/41JSt9dNphxPKKiWpbK/0TU1Cbyd03YKRl7Fj0j2wpQzWrpfn4P0gPO6AmZ+x07cNz5qjtQp4C+Doebm3I3o7AOf2C8S/NDEOPXctWUdkHmDdVqi7Bu6MaF8wAM31syevWObWAWcKHG+S5Me/ghGW/tsXojvRBZK5CrhSZaUF8ORI23MH7l1VlNbcZa4Cv6bh+ln598dG4WYDtJwCQ8/XqNlk3zeyOSreWyh5rGK3kgB2678HSCopi/oNdqPUmdYNR/YAAAAASUVORK5CYII="},97477:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK4SURBVHgBrVZNbhMxFH52ghBsOukFcKYH6HACgoRAYtNwArJllWZBBasmK0QDCjlBwwmgy0ogpidILtB2OEG9AQpqbL7nzESZZmbyozwp8djv+X3Pfn8WVECqrTy6RzVZkntkqUaCPIwe8yzZkRBiJIw4Oz84HxTpEXkMv+sfgrvvlArS1jqlUcLHXGEexKC8Prh4fdFZCkS9U0qUxRdBIoC1IX4d+kWjqB3pLAXqSDUA1mR5BjM35nH0NopyQbAhkFL+mJhKHVj2iZYkBpNC9vjbWAAdRKM5ED6BvCOHUK6zrFkKiHWUnZEedDxMdMhEIGbSugBMvI/3O+tx5cl6if/8j3Cypbqw4tXlm8uQCizdfrZ9vPV861Sf6ussGf1d68rTyl/4qFF5UhFX367CyUkMNTgkF4UilUnhgut0TUGRGPuSgwb31FQ95Ul2GBsprezTBslFJXxD/5BnoEeY6IWnWJXKxNGlEXF7EpCcDyPaMEWtSDu9gmplzAM4fHBbyJWUu+m7h1W7MIojMUAQzOmdi0pDP+GXoEw5VLpfOrbC1lOLdvrVA1CaZe0JhnqGKo9BMsvFeDxu4V5TwSBJ8sk4q1uGTPqKf1PulTsQWKxuM+KjR7NrqqsYiBN2BH5Ii0jSA/aLtMaecXHjeKYNE+vldiBtyX4ljucFCbYqxfnncb+RKCwhJhq15pA2SFz+MUScf5LjGZM+jlbz3/v7hTs5wQTxyaMiMddjuL8Y+uwAE0a1Wx2CoWZL9Do02zJQw6q8Ng12e2NfuAWUfBakNWimn1BS8lMgrhdYx/AgONw52mnQCuR/8JvuBHhsGJPuSaLAGjWJcdnPK55J6eGgYZ+yPN9IYY9PWdb12xhesq6FrxXwMfbhg3aWrlyQqbWT10gNn7vxi4RipRpjaMbmhP5QmPeaYfoPxL9GyMP66mAAAAAASUVORK5CYII="}}]);