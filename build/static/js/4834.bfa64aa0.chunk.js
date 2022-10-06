"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[4834],{49845:function(e,t,a){a.d(t,{Z:function(){return i}});a(47313);var n=a(57829),s=a(61113),l=a(33286),o=(a(45214),a(46417)),c={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,outline:"none",p:4};function i(e){var t=e.openModal,a=e.handleCloseModal,i=e.text,r=e.deleteModal;return(0,o.jsx)("div",{children:(0,o.jsx)(l.Z,{open:t,onClose:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,o.jsxs)(n.Z,{sx:c,children:[(0,o.jsx)(s.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:i}),(0,o.jsxs)("div",{className:"delete-modal-btns",children:[(0,o.jsx)("button",{onClick:r,className:"confirm",children:"Yes"}),(0,o.jsx)("button",{onClick:a,className:"delete",children:"No"})]})]})})})}},46495:function(e,t,a){a.d(t,{Z:function(){return s}});a(47313);var n=a(46417);function s(e){var t=e.text,a=e.trigger;return(0,n.jsx)("button",{className:"green-btn",onClick:a,children:t})}},45214:function(e,t,a){a.d(t,{Z:function(){return l}});a(47313);var n=a(97477),s=a(46417);function l(e){var t=e.text,a=e.trigger;return(0,s.jsxs)("div",{className:"green-btn-container",children:[(0,s.jsx)("button",{className:"red-button",onClick:a,children:t}),(0,s.jsx)("img",{className:"green-plus",src:n})]})}},62274:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(1413),s=a(47313),l=a(4942),o=a(93433),c=a(29439),i=a(97890),r=a(46495),d=a(44648),u=a(36605),h=a(24554),m=a(1084),p=a(9038),x=a(61378),j=a.n(x),g=a(56605),A=a(4660),v=a.n(A),f=a(49845),N=(a(72632),a(90501)),S=a(77703),b=a(7861),C=a(70816),Z=a.n(C),M=a(8512),y=(a(88282),a(57864)),w=a(46417);var D=function(e){var t=sessionStorage.getItem("token"),a=(0,b.Z)(t),n=(0,i.TH)().state,m=(0,s.useState)([]),p=(0,c.Z)(m,2),x=p[0],A=p[1],N=(0,s.useState)(""),S=(0,c.Z)(N,2),C=S[0],D=S[1],R=(0,s.useState)(localStorage.getItem("Report Status")?Number(localStorage.getItem("Report Status")):1),k=(0,c.Z)(R,2),B=k[0],I=k[1],P=(0,s.useState)(1),Y=(0,c.Z)(P,2),E=Y[0],F=Y[1],L=(0,s.useState)(new Date),U=(0,c.Z)(L,2),T=U[0],W=U[1],q=(0,s.useState)(new Date),K=(0,c.Z)(q,2),G=K[0],X=K[1],H=(0,s.useState)(1),V=(0,c.Z)(H,2),Q=V[0],J=V[1],O=(0,s.useState)(""),z=(0,c.Z)(O,2),_=z[0],$=z[1],ee=(0,s.useState)([]),te=(0,c.Z)(ee,2),ae=te[0],ne=te[1],se=(0,s.useState)(null!==n&&void 0!==n&&n.commentId?null===n||void 0===n?void 0:n.commentId:null),le=(0,c.Z)(se,2),oe=le[0],ce=le[1],ie=(0,s.useState)(""),re=(0,c.Z)(ie,2),de=re[0],ue=re[1],he=(0,s.useState)(1),me=(0,c.Z)(he,2),pe=me[0],xe=me[1],je=(0,s.useState)((null===n||void 0===n?void 0:n.id)||""),ge=(0,c.Z)(je,2),Ae=ge[0],ve=(ge[1],(0,s.useState)("10")),fe=(0,c.Z)(ve,2),Ne=fe[0],Se=fe[1],be=(0,s.useState)([]),Ce=(0,c.Z)(be,2),Ze=Ce[0],Me=Ce[1],ye=s.useState(!1),we=(0,c.Z)(ye,2),De=we[0],Re=we[1],ke=(0,s.useState)(""),Be=(0,c.Z)(ke,2),Ie=Be[0],Pe=Be[1],Ye=(0,s.useState)(!0),Ee=(0,c.Z)(Ye,2),Fe=Ee[0],Le=(Ee[1],(0,s.useState)(!0)),Ue=(0,c.Z)(Le,2),Te=Ue[0],We=Ue[1],qe=function(){return Re(!1)},Ke=((0,i.s0)(),function(){var t,n=Z().duration(Z()(G).diff(Z()(T)));(n=Math.ceil(n.asDays()))<=0&&T.setDate(T.getDate()-90);var s=Z()(T).format("YYYY-MM-DD"),o=Z()(G).format("YYYY-MM-DD"),c=(t={page:B,branchCode:a.branchCode,limit:Ne,search:C,status:Ae,startDate:s,endDate:o,headerType:oe||"",searchType:oe?1:0},(0,l.Z)(t,de,pe),(0,l.Z)(t,"isReportCreated",!0),t);e.getAllApplications(c).then((function(e){I(e.data.pageMeta.page),F(e.data.pageMeta.totalPages),J(e.data.pageMeta.total),A(e.data.list),$(e.data.list.length),ne(e.data.pageMeta.sNo)})).catch((function(e){console.log(e)}))});return(0,s.useEffect)((function(){Ke()}),[C,B,T,oe,G,Ae,Ne,pe,de]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(M.Ix,{}),(0,w.jsxs)("div",{className:"landRecords-container",children:[(0,w.jsx)("h3",{children:"Report Status"}),(0,w.jsx)("div",{className:"btn-container",children:(0,w.jsx)("div",{style:{marginTop:30,marginRight:20,display:"flex",gap:20},children:(0,w.jsx)(r.Z,{text:Ze.length>0?"Download Selected":"Download",trigger:Ze.length>0?function(){var t={applicationId:Ze};e.downloadSelectedLands(t).then((function(e){e.data.map((function(e){new(v())({url:e})})),M.Am.success("Files Downloaded",{autoClose:1e3}),Ke()})).catch((function(e){console.log(e),M.Am.error(e,{autoClose:1e3})}))}:function(){M.Am.error("Please Select the Report to Download",{autoClose:2e3})}})})})]}),(0,w.jsxs)("div",{className:"search-container search-items space-between",children:[(0,w.jsx)("div",{children:Fe&&(0,w.jsx)("div",{className:"landRecords-container",children:(0,w.jsxs)("div",{className:"search-flex",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)(d.Z,{title:"Search",search:D,value:C}),C?(0,w.jsx)(y.oHP,{className:"close-icon",onClick:function(){xe(1),ue(""),Se(""),D("")}}):(0,w.jsx)(y.RB5,{className:"close-icon"})]}),(0,w.jsxs)("div",{className:"searchby-search",style:{marginTop:-23},children:[(0,w.jsx)("span",{className:"role-text",children:"Search By"}),(0,w.jsxs)("select",{className:"select",name:"searchType",id:"searchType",onChange:function(e){ce(e.target.value)},children:[(0,w.jsx)("option",{value:"",selected:!0,children:"Select an Option"}),(0,w.jsx)("option",{value:"0",children:"Branch Code"}),(0,w.jsx)("option",{value:"1",children:"CIF Account Number"}),(0,w.jsx)("option",{value:"2",children:"Survey Number"}),(0,w.jsx)("option",{value:"3",children:"Village"}),(0,w.jsx)("option",{value:"4",children:"Mandal"}),(0,w.jsx)("option",{value:"5",children:"District"}),(0,w.jsx)("option",{value:"7",selected:!(null===n||void 0===n||!n.commentId),children:"Comments"}),(0,w.jsx)("option",{value:"8",children:"Filter by Resolved"})]})]})]})})}),(0,w.jsxs)("div",{className:"flex-container",children:[(0,w.jsxs)("div",{className:"date-picker-container",children:[(0,w.jsx)("span",{className:"role-text",children:"Start Date"}),(0,w.jsxs)("div",{className:"date-picker",children:[(0,w.jsx)(j(),{className:"select",selected:T,placeholderText:"Start Date",dateFormat:"dd/MM/yyyy",onChange:function(e){return function(e){W(e);var t=Z().duration(Z()(G).diff(Z()(e)));Math.ceil(t.asDays())<=0&&X(e)}(e)}}),(0,w.jsx)("img",{src:g,alt:"calendar-icon",className:"calendar-icon"})]})]}),(0,w.jsxs)("div",{className:"date-picker-container",children:[(0,w.jsx)("span",{className:"role-text",children:"End Date"}),(0,w.jsxs)("div",{className:"date-picker",children:[(0,w.jsx)(j(),{className:"select",selected:G,minDate:T,placeholderText:"End Date",dateFormat:"dd/MM/yyyy",onChange:function(e){return function(e){X(e)}(e)}}),(0,w.jsx)("img",{src:g,alt:"calendar-icon",className:"calendar-icon"})]})]})]})]}),(0,w.jsxs)("div",{className:"table-container",children:[(0,w.jsx)(u.Z,{landRecords:x,deleteRecord:function(e){Re(!0),Pe(e)},tabName:"Report Status",changeApplicationStatus:function(t){var a={id:t};e.editApplications(a,{reportApprovalStatus:"APPROVED"}).then((function(e){M.Am.success(e.message,{autoClose:1e3}),Ke()})).catch((function(e){M.Am.error(e.data,{autoClose:1e3})}))},upperLimit:B*_-10,lowerLimit:B,page:B,totalItemsCount:Q,pageNumbers:E,filter:function(e){ue(e),xe(1===pe?-1:1)},getCheckboxID:function(e,t){var a=(0,o.Z)(Ze);t.target.checked?a=[].concat((0,o.Z)(Ze),[e]):a.splice(Ze.indexOf(e),1),Me(a)},sNo:ae,decoded:a,selectAll:function(){var e;e=(0,o.Z)(x.map((function(e){return e.id}))),We(!Te),Me(e)},isCheckboxVisible:Te}),(null===x||void 0===x?void 0:x.length)>0?(0,w.jsxs)("div",{className:"table-footer",children:["".concat(ae[0]," - ").concat(ae[_-1]," of ").concat(Q),(0,w.jsxs)("div",{children:[(0,w.jsx)("span",{className:"role-text",children:"Show"}),(0,w.jsxs)("select",{className:"select",name:"limit",id:"limit",onChange:function(e){Se(e.target.value)},children:[(0,w.jsx)("option",{value:"5",children:"5"}),(0,w.jsx)("option",{value:"10",selected:!0,children:"10"}),(0,w.jsx)("option",{value:"15",children:"15"}),(0,w.jsx)("option",{value:"20",children:"20"}),(0,w.jsx)("option",{value:"25",children:"25"}),(0,w.jsx)("option",{value:"50",children:"50"}),(0,w.jsx)("option",{value:"100",children:"100"}),(0,w.jsx)("option",{value:"0",children:"All"})]}),(0,w.jsx)("span",{className:"role-text",children:"Per Page"})]}),"0"===Ne?(0,w.jsx)(w.Fragment,{}):(0,w.jsx)(h.Z,{pageNumbers:E>3?3:E,totalItemsCount:Q,selectPage:function(e){I(e)},pageName:"Report Status",isPrevPage:!0})]}):(0,w.jsx)(w.Fragment,{})]}),(0,w.jsx)(f.Z,{text:"Are you sure you want to delete this Report?",openModal:De,handleCloseModal:qe,deleteModal:function(){var t={id:Ie};e.deleteLands(t).then((function(e){Ke(),qe(),M.Am.error("Report Deleted",{autoClose:1e3})})).catch((function(e){}))}})]})},R=(0,m.$j)(null,(function(e){return(0,p.DE)({getAllLands:N.Kb,deleteLands:N.V3,downloadLands:N.g3,getAllApplications:S.Rl,editApplications:S.Ll,downloadSelectedLands:N.RG},e)}))(D);function k(e){return(0,w.jsx)(R,(0,n.Z)({},e))}},97477:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK4SURBVHgBrVZNbhMxFH52ghBsOukFcKYH6HACgoRAYtNwArJllWZBBasmK0QDCjlBwwmgy0ogpidILtB2OEG9AQpqbL7nzESZZmbyozwp8djv+X3Pfn8WVECqrTy6RzVZkntkqUaCPIwe8yzZkRBiJIw4Oz84HxTpEXkMv+sfgrvvlArS1jqlUcLHXGEexKC8Prh4fdFZCkS9U0qUxRdBIoC1IX4d+kWjqB3pLAXqSDUA1mR5BjM35nH0NopyQbAhkFL+mJhKHVj2iZYkBpNC9vjbWAAdRKM5ED6BvCOHUK6zrFkKiHWUnZEedDxMdMhEIGbSugBMvI/3O+tx5cl6if/8j3Cypbqw4tXlm8uQCizdfrZ9vPV861Sf6ussGf1d68rTyl/4qFF5UhFX367CyUkMNTgkF4UilUnhgut0TUGRGPuSgwb31FQ95Ul2GBsprezTBslFJXxD/5BnoEeY6IWnWJXKxNGlEXF7EpCcDyPaMEWtSDu9gmplzAM4fHBbyJWUu+m7h1W7MIojMUAQzOmdi0pDP+GXoEw5VLpfOrbC1lOLdvrVA1CaZe0JhnqGKo9BMsvFeDxu4V5TwSBJ8sk4q1uGTPqKf1PulTsQWKxuM+KjR7NrqqsYiBN2BH5Ii0jSA/aLtMaecXHjeKYNE+vldiBtyX4ljucFCbYqxfnncb+RKCwhJhq15pA2SFz+MUScf5LjGZM+jlbz3/v7hTs5wQTxyaMiMddjuL8Y+uwAE0a1Wx2CoWZL9Do02zJQw6q8Ng12e2NfuAWUfBakNWimn1BS8lMgrhdYx/AgONw52mnQCuR/8JvuBHhsGJPuSaLAGjWJcdnPK55J6eGgYZ+yPN9IYY9PWdb12xhesq6FrxXwMfbhg3aWrlyQqbWT10gNn7vxi4RipRpjaMbmhP5QmPeaYfoPxL9GyMP66mAAAAAASUVORK5CYII="}}]);