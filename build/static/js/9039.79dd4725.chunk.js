"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[9039],{63232:function(n,e,t){t.d(e,{E2:function(){return o},p_:function(){return u},aq:function(){return c},E9:function(){return l},W3:function(){return s},jP:function(){return d},$H:function(){return f},Iu:function(){return m},Cp:function(){return v},ap:function(){return h},o_:function(){return p},NA:function(){return A},RL:function(){return b}});var i=t(1413),a=t(83684),r=t(11979),o=function(n,e){return function(t,o,u){var c=u.api;return new Promise((function(t,o){(0,r.DI)(n,a.Sb.getAllAdmin),c((0,i.Z)((0,i.Z)({},a.Sb.getAllAdmin),{},{body:e})).then((function(n){var e=n.data;t(e)})).catch((function(n){var e=n.message;o(e)}))}))}},u=function(n){return function(e,t,o){var u=o.api;return new Promise((function(e,t){(0,r.DI)(n,a.Sb.getAdminByID),u((0,i.Z)({},a.Sb.getAdminByID)).then((function(n){var t=n.data;e(t)})).catch((function(n){var e=n.message;t(e)}))}))}},c=function(n,e){return function(t,o,u){var c=u.api;return new Promise((function(t,o){(0,r.DI)(n,a.Sb.updateAdminDetails),c((0,i.Z)((0,i.Z)({},a.Sb.updateAdminDetails),{},{body:e})).then((function(n){t(n)})).catch((function(n){o(n)}))}))}},l=function(n){return function(e,t,r){var o=r.api;return new Promise((function(e,t){o((0,i.Z)((0,i.Z)({},a.Sb.createApplication),{},{body:n})).then((function(n){var t=n.data;e(t)})).catch((function(n){t(n)}))}))}},s=function(n){return function(e,t,r){var o=r.api;return new Promise((function(e,t){o((0,i.Z)((0,i.Z)({},a.Sb.addApplication),{},{body:n})).then((function(n){var t=n.data;e(t)})).catch((function(n){t(n)}))}))}},d=function(n){return function(e,t,o){var u=o.api;return new Promise((function(e,t){(0,r.DI)(n,a.Sb.deleteAdmin),u((0,i.Z)({},a.Sb.deleteAdmin)).then((function(n){e(n)})).catch((function(n){var e=n.message;t(e)}))}))}},f=function(){return function(n,e,t){var r=t.api;return new Promise((function(n,e){r((0,i.Z)({},a.Sb.getAllBranchCodes)).then((function(e){n(e)})).catch((function(n){var t=n.message;e(t)}))}))}},m=function(n){return function(e,t,o){var u=o.api;return new Promise((function(e,t){(0,r.DI)(n,a.Sb.downloadAdmin),u((0,i.Z)({},a.Sb.downloadAdmin)).then((function(n){e(n)})).catch((function(n){var e=n.message;t(e)}))}))}},v=function(n){return function(e,t,o){var u=o.api;return new Promise((function(e,t){(0,r.DI)(n,a.Sb.changePassword),u((0,i.Z)({},a.Sb.changePassword)).then((function(n){e(n)})).catch((function(n){t(n)}))}))}},h=function(n){return function(e,t,r){var o=r.api;return new Promise((function(e,t){o((0,i.Z)((0,i.Z)({},a.Sb.createBranch),{},{body:n})).then((function(n){e(n)})).catch((function(n){t(n)}))}))}},p=function(n){return function(e,t,r){var o=r.api;return new Promise((function(e,t){o((0,i.Z)((0,i.Z)({},a.Sb.updateBranch),{},{body:n,api:"".concat(a.Sb.updateBranch.url,"?id=").concat(n.id)})).then((function(n){e(n)})).catch((function(n){t(n)}))}))}},A=function(n){return function(e,t,o){var u=o.api;return new Promise((function(e,t){(0,r.DI)(n,a.Sb.deleteBranch),u((0,i.Z)({},a.Sb.deleteBranch)).then((function(n){e(n)})).catch((function(n){t(n)}))}))}},b=function(n){return function(e,t,r){var o=r.api;return new Promise((function(e,t){o((0,i.Z)((0,i.Z)({},a.Sb.adminToggle),{},{body:n})).then((function(n){e(n)})).catch((function(n){t(n)}))}))}}},59385:function(n,e,t){t.d(e,{O9:function(){return o},ul:function(){return u},xJ:function(){return c},xQ:function(){return l},IN:function(){return s},ZV:function(){return d}});var i=t(1413),a=t(83684),r=t(11979),o=function(n){return function(e,t,r){var o=r.api;return new Promise((function(e,t){o((0,i.Z)((0,i.Z)({},a.vT.addRoles),{},{body:n})).then((function(n){var t=n.data;e(t)})).catch((function(n){t(n)}))}))}},u=function(n,e){return function(t,r,o){var u=o.api;return new Promise((function(t,r){a.vT.updateRoles.id=e,u((0,i.Z)((0,i.Z)({},a.vT.updateRoles),{},{body:n})).then((function(n){var e=n.data;t(e)})).catch((function(n){var e=n.message;r(e)}))}))}},c=function(n,e){return function(t,o,u){var c=u.api;return new Promise((function(t,o){(0,r.DI)(n,a.vT.getRoles),c((0,i.Z)((0,i.Z)({},a.vT.getRoles),{},{body:e})).then((function(n){var e=n.data;t(e)})).catch((function(n){var e=n.message;o(e)}))}))}},l=function(n,e){return function(t,o,u){var c=u.api;return new Promise((function(t,o){(0,r.DI)(n,a.vT.getRoleById),c((0,i.Z)((0,i.Z)({},a.vT.getRoleById),{},{body:e})).then((function(n){var e=n.data;t(e)})).catch((function(n){var e=n.message;o(e)}))}))}},s=function(n){return function(e,t,r){var o=r.api;return new Promise((function(e,t){o((0,i.Z)((0,i.Z)({},a.vT.getPermissions),{},{body:n})).then((function(n){var t=n.data;e(t)})).catch((function(n){var e=n.message;t(e)}))}))}},d=function(n,e){return function(t,o,u){var c=u.api;return new Promise((function(t,o){(0,r.DI)(n,a.vT.deleteRoles),c((0,i.Z)((0,i.Z)({},a.vT.deleteRoles),{},{body:e})).then((function(n){var e=n.data;t(e)})).catch((function(n){var e=n.message;o(e)}))}))}}},79325:function(n,e,t){t.d(e,{Z:function(){return o}});t(47313);var i=t(97890),a=t(24323),r=t(46417);function o(n){var e=n.title,t=n.path,o=n.activeTab,u=(0,i.s0)();return(0,r.jsxs)("div",{className:"report-header",children:[(0,r.jsx)("img",{src:a,alt:"backIcon",className:"backIcon",onClick:function(){u(t,{state:{activeTab:o}})}}),(0,r.jsx)("span",{children:e})]})}},46495:function(n,e,t){t.d(e,{Z:function(){return a}});t(47313);var i=t(46417);function a(n){var e=n.text,t=n.trigger;return(0,i.jsx)("button",{className:"green-btn",onClick:t,children:e})}},49039:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var i=t(47313),a=t(4942),r=t(1413),o=t(29439),u=t(79325),c=(t(94230),t(46495)),l=t(97890),s=t(1084),d=t(9038),f=t(63232),m=t(59385),v=t(8512),h=t(70816),p=t.n(h),A=t(7861),b=(t(88282),t(46417));var g=function(n){var e=(0,l.s0)(),t=(0,l.TH)().state,s=sessionStorage.getItem("token"),d=(0,A.Z)(s),f=(0,i.useState)(""),m=(0,o.Z)(f,2),h=m[0],g=m[1],x=(0,i.useState)(""),j=(0,o.Z)(x,2),Z=j[0],I=j[1],N=(0,i.useState)([]),S=(0,o.Z)(N,2),C=S[0],w=S[1],P=(0,i.useState)([{value:"1",name:"APPROVED"},{value:"2",name:"REJECTED"}]),D=(0,o.Z)(P,2),R=D[0],E=D[1],y=(0,i.useState)({status:"1"}),B=(0,o.Z)(y,2),T=B[0],k=B[1];function F(n){return n[0].toUpperCase()+n.slice(1)}(0,i.useEffect)((function(){if(null!==t&&void 0!==t&&t.data){var n=null===t||void 0===t?void 0:t.data;g(null===t||void 0===t?void 0:t.data.role),I(null===t||void 0===t?void 0:t.data.status);var e=R.filter((function(n){return n.name!==(null===t||void 0===t?void 0:t.data.status)}));E(e),k((0,r.Z)({},n))}}),[]);var Q=function(n){var e=(0,a.Z)({},n.target.name,n.target.value);k((0,r.Z)((0,r.Z)({},T),e))};return(0,i.useEffect)((function(){n.getAllRoles().then((function(n){var e,i=null===n||void 0===n||null===(e=n.list)||void 0===e?void 0:e.filter((function(n){return n.roleName!==(null===t||void 0===t?void 0:t.data.role)}));w(i)})).catch((function(n){console.log(n)}))}),[]),(0,b.jsxs)("div",{children:[(0,b.jsx)(v.Ix,{}),(0,b.jsx)(u.Z,{title:"Admin Users Management",path:"/admin-users"}),(0,b.jsxs)("div",{className:"application-body",children:[(0,b.jsx)("h4",{children:"Admin Details"}),(0,b.jsxs)("div",{className:"form-fields",children:[(0,b.jsxs)("div",{className:"form-field",children:[(0,b.jsx)("label",{children:"Name"}),(0,b.jsx)("input",{placeholder:"Enter here",className:"inputField",value:T.name,onChange:Q,maxLength:25,name:"name"})]}),(0,b.jsxs)("div",{className:"form-field",children:[(0,b.jsx)("label",{children:"Email ID"}),(0,b.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:Q,value:T.emailId,disabled:!(null===t||void 0===t||!t.data),name:"emailId",maxLength:50})]})]}),(0,b.jsxs)("div",{className:"form-fields",children:[(0,b.jsxs)("div",{className:"form-field",children:[(0,b.jsx)("label",{children:"Branch Code"}),(0,b.jsx)("input",{placeholder:"Enter here",className:"inputField",onChange:Q,value:T.branchCode,onInput:function(n){return n.target.value=n.target.value.slice(0,20)},name:"branchCode",disabled:!(null===t||void 0===t||!t.data),maxLength:50,type:"text"})]}),(0,b.jsxs)("div",{className:"form-field",children:[(0,b.jsx)("label",{children:"Mobile Number"}),(0,b.jsx)("input",{placeholder:"Enter here",onChange:Q,className:"inputField",onKeyDown:function(n){return["e","E","+","-"].includes(n.key)&&n.preventDefault()},value:T.mobileNumber,onInput:function(n){return n.target.value=n.target.value.slice(0,10)},type:"number",name:"mobileNumber",min:"0"})]})]}),(0,b.jsxs)("div",{className:"form-fields",children:[(0,b.jsxs)("div",{className:"form-field",children:[(0,b.jsx)("label",{children:"Status"}),(0,b.jsx)("select",{className:"inputField",name:"status",id:"status",onChange:Q,children:null!==t&&void 0!==t&&t.data?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("option",{value:Z||"",children:Z||"Select an option"}),(0,b.jsx)(b.Fragment,{children:null===R||void 0===R?void 0:R.map((function(n){return(0,b.jsx)("option",{value:n.value,children:n.name})}))})]}):(0,b.jsx)("option",{value:"1",children:"APPROVED"})})]}),(0,b.jsxs)("div",{className:"form-field",children:[(0,b.jsx)("label",{children:"Role"}),(0,b.jsxs)("select",{className:"inputField",name:"roleId",id:"roleId",onChange:Q,children:[(0,b.jsx)("option",{value:h||"",children:h||"Select a Role"}),C.map((function(n){return(0,b.jsx)("option",{value:n.roleId,children:n.roleName},n.roleId)}))]})]})]})]}),(0,b.jsxs)("div",{className:"button-container",children:[(0,b.jsx)("p",{className:"cancel-btn",onClick:function(){return e("/admin-users")},children:"Cancel"}),(0,b.jsx)(c.Z,{text:"edit"===(null===t||void 0===t?void 0:t.type)?"Update":"Add",trigger:function(){if("edit"===(null===t||void 0===t?void 0:t.type)){var i={id:t.data._id},a={userId:null===d||void 0===d?void 0:d.id,userName:null===d||void 0===d?void 0:d.name,roleName:null===d||void 0===d?void 0:d.roleId,editTime:p()().format("LLL")};T.lastEditInfo=a,n.updateAdmin(i,T).then((function(){v.Am.success(F("Admin Updated"),{autoClose:1e3}),setTimeout((function(){e("/admin-users")}),1e3)})).catch((function(n){v.Am.error(F(n.error),{autoClose:2e3})}))}else n.addApplication(T).then((function(){v.Am.success(F("Admin Created"),{autoClose:1e3}),setTimeout((function(){e("/admin-users")}),1e3)})).catch((function(n){v.Am.error(F(n.error?n.error:n.data),{autoClose:2e3})}))}})]})]})},x=(0,s.$j)(null,(function(n){return(0,d.DE)({addApplication:f.E9,updateAdmin:f.aq,getAllRoles:m.xJ},n)}))(g);function j(){return(0,b.jsx)(x,{})}},94230:function(){},24323:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACsSURBVHgBnZHBDQIhEEXBtQBvBLjYglCQlOBWoG14WluwA+2AEvQC3NyjF4J/oiZqXIP7k2FmEl4m84ezDxlj1pxzl3NeeO97NqDJF2iD8vgLepO1dokoiB2r1RiIE4RMgMdebSV3IvCCYsb+Uz8tpbQwpKOJyFUT8e9uHNx0jx07VqmGnhijl1Ke6RRKqTn6fRX4hLXWHOWqBm5emxDCgWDs7YQQ25TSdQi8ARteRXW+qdqtAAAAAElFTkSuQmCC"}}]);