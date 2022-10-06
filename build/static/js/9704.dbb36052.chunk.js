"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[9704],{19704:function(e,t,i){i.r(t),i.d(t,{CalcitePanel:function(){return ee},defineCustomElement:function(){return te}});var a=i(4942),n=i(15861),l=i(15671),c=i(43144),r=i(97326),o=i(60136),s=i(29388),d=i(87757),m=i.n(d),h=i(12718),u=i(70931),f=i(17886),p=i(80350),b=i(96338),g=i(2936),k=i(28614),v=i(49343),w=i(92582),x=i(40990),y=i(34618),D=i(13545),z="back-button",C="container",H="header",B="heading",E="summary",S="header-content",Z="header-actions",P="header-actions--end",_="header-actions--start",O="content-wrapper",F="content-container",R="content-height",M="fab-container",A="footer",N="x",j="ellipsis",K="chevron-left",T="chevron-right",I="header-actions-start",L="header-actions-end",G="header-menu-actions",Y="header-content",q="fab",J="footer",Q="footer-actions",U="Back",V="Close",W="Options",X=(0,h.GH)(function(e){(0,o.Z)(i,e);var t=(0,s.Z)(i);function i(){var e;return(0,l.Z)(this,i),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.calcitePanelDismiss=(0,h.yM)((0,r.Z)(e),"calcitePanelDismiss",7),e.calcitePanelDismissedChange=(0,h.yM)((0,r.Z)(e),"calcitePanelDismissedChange",7),e.calcitePanelScroll=(0,h.yM)((0,r.Z)(e),"calcitePanelScroll",7),e.calcitePanelBackClick=(0,h.yM)((0,r.Z)(e),"calcitePanelBackClick",7),e.dismissed=!1,e.disabled=!1,e.dismissible=!1,e.showBackButton=!1,e.loading=!1,e.menuOpen=!1,e.resizeObserver=(0,k.c)("resize",(function(){return e.resizeHandler()})),e.resizeHandler=function(){var t=(0,r.Z)(e).panelScrollEl;t&&"number"===typeof t.scrollHeight&&"number"===typeof t.offsetHeight&&(t.tabIndex=t.scrollHeight>t.offsetHeight?0:-1)},e.setContainerRef=function(t){e.containerEl=t},e.setDismissRef=function(t){e.dismissButtonEl=t},e.setBackRef=function(t){e.backButtonEl=t},e.panelKeyDownHandler=function(t){"Escape"===t.key&&e.dismiss()},e.dismiss=function(){e.dismissed=!0,e.calcitePanelDismiss.emit()},e.panelScrollHandler=function(){e.calcitePanelScroll.emit()},e.backButtonClick=function(){e.calcitePanelBackClick.emit()},e.setPanelScrollEl=function(t){var i,a;e.panelScrollEl=t,null===(i=e.resizeObserver)||void 0===i||i.disconnect(),t&&(null===(a=e.resizeObserver)||void 0===a||a.observe(t),e.resizeHandler())},e}return(0,c.Z)(i,[{key:"dismissedHandler",value:function(){this.calcitePanelDismissedChange.emit()}},{key:"componentDidRender",value:function(){(0,g.u)(this)}},{key:"connectedCallback",value:function(){(0,b.c)(this)}},{key:"disconnectedCallback",value:function(){var e;(0,b.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}},{key:"setFocus",value:function(){var e=(0,n.Z)(m().mark((function e(t){var i,a,n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("dismiss-button"!==t){e.next=3;break}return null===(i=this.dismissButtonEl)||void 0===i||i.setFocus(),e.abrupt("return");case 3:if("back-button"!==t){e.next=6;break}return null===(a=this.backButtonEl)||void 0===a||a.setFocus(),e.abrupt("return");case 6:null===(n=this.containerEl)||void 0===n||n.focus();case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"scrollContentTo",value:function(){var e=(0,n.Z)(m().mark((function e(t){var i;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(i=this.panelScrollEl)||void 0===i||i.scrollTo(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderBackButton",value:function(){var e=this.el,t="rtl"===(0,u.a)(e),i=this.showBackButton,a=this.intlBack,n=this.backButtonClick,l=a||U,c=t?T:K;return i?(0,h.h)("calcite-action",{"aria-label":l,class:z,icon:c,key:"back-button",onClick:n,ref:this.setBackRef,scale:"s",slot:I,text:l}):null}},{key:"renderHeaderContent",value:function(){var e=this.heading,t=this.headingLevel,i=this.summary,a=e?(0,h.h)(f.H,{class:B,level:t||3},e):null,n=i?(0,h.h)("span",{class:E},i):null;return a||n?(0,h.h)("div",{class:S,key:"header-content"},a,n):null}},{key:"renderHeaderSlottedContent",value:function(){return(0,h.h)("div",{class:S,key:"slotted-header-content"},(0,h.h)("slot",{name:Y}))}},{key:"renderHeaderStartActions",value:function(){var e,t=this.el;return(0,u.b)(t,I)?(0,h.h)("div",{class:(e={},(0,a.Z)(e,_,!0),(0,a.Z)(e,Z,!0),e),key:"header-actions-start"},(0,h.h)("slot",{name:I})):null}},{key:"renderHeaderActionsEnd",value:function(){var e,t=this.dismiss,i=this.dismissible,n=this.el,l=this.intlClose||V,c=i?(0,h.h)("calcite-action",{"aria-label":l,icon:N,onClick:t,ref:this.setDismissRef,text:l}):null,r=(0,h.h)("slot",{name:L});return(0,u.b)(n,L)||c?(0,h.h)("div",{class:(e={},(0,a.Z)(e,P,!0),(0,a.Z)(e,Z,!0),e),key:"header-actions-end"},r,c):null}},{key:"renderMenu",value:function(){var e=this.el,t=this.intlOptions,i=this.menuOpen;return(0,u.b)(e,G)?(0,h.h)("calcite-action-menu",{flipPlacements:["top","bottom"],key:"menu",label:t||W,open:i,placement:"bottom-end"},(0,h.h)("calcite-action",{icon:j,slot:p.S.trigger,text:t||W}),(0,h.h)("slot",{name:G})):null}},{key:"renderHeaderNode",value:function(){var e=this.el,t=this.showBackButton,i=this.renderBackButton(),a=(0,u.b)(e,Y)?this.renderHeaderSlottedContent():this.renderHeaderContent(),n=this.renderHeaderStartActions(),l=this.renderHeaderActionsEnd(),c=this.renderMenu();return n||a||l||c||t?(0,h.h)("header",{class:H},i,n,a,l,c):null}},{key:"renderFooterNode",value:function(){var e=this.el,t=(0,u.b)(e,J),i=(0,u.b)(e,Q);return t||i?(0,h.h)("footer",{class:A,key:"footer"},t?(0,h.h)("slot",{key:"footer-slot",name:J}):null,i?(0,h.h)("slot",{key:"footer-actions-slot",name:Q}):null):null}},{key:"renderContent",value:function(){var e,t,i=this.el,n=(0,u.b)(i,q),l=(0,h.h)("slot",{key:"default-slot"}),c="content-wrapper";return n?(0,h.h)("div",{class:(e={},(0,a.Z)(e,O,!0),(0,a.Z)(e,R,!0),e),key:c,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},(0,h.h)("section",{class:F},l),this.renderFab()):(0,h.h)("section",{class:(t={},(0,a.Z)(t,O,!0),(0,a.Z)(t,F,!0),t),key:c,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},l)}},{key:"renderFab",value:function(){return(0,h.h)("div",{class:M},(0,h.h)("slot",{name:q}))}},{key:"render",value:function(){var e=this.dismissed,t=this.dismissible,i=this.loading,a=this.panelKeyDownHandler,n=(0,h.h)("article",{"aria-busy":(0,u.t)(i),class:C,hidden:t&&e,onKeyDown:a,ref:this.setContainerRef,tabIndex:t?0:-1},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return(0,h.h)(h.HY,null,i?(0,h.h)("calcite-scrim",{loading:i}):null,n)}},{key:"el",get:function(){return this}}],[{key:"watchers",get:function(){return{dismissed:["dismissedHandler"]}}},{key:"style",get:function(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:-ms-flexbox;display:flex;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-max-height:unset;--calcite-panel-width:100%;--calcite-panel-min-width:unset;--calcite-panel-max-width:unset}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-align:center;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{-ms-flex:1 1 auto;flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.container{margin:0px;display:-ms-flexbox;display:flex;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;max-height:var(--calcite-panel-max-height);width:var(--calcite-panel-width);max-width:var(--calcite-panel-max-width);min-width:var(--calcite-panel-min-width);-webkit-transition:max-height var(--calcite-animation-timing), width var(--calcite-animation-timing);transition:max-height var(--calcite-animation-timing), width var(--calcite-animation-timing)}:host([height-scale=s]){--calcite-panel-max-height:40vh}:host([height-scale=m]){--calcite-panel-max-height:60vh}:host([height-scale=l]){--calcite-panel-max-height:80vh}:host([width-scale=s]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 12vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 300px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 150px)}:host([width-scale=m]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 20vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 420px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 240px)}:host([width-scale=l]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 45vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 680px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 340px)}.container[hidden]{display:none}:host([loading]) .container,:host([disabled]) .container{position:relative}.header{border-bottom:1px solid;position:-webkit-sticky;position:sticky;top:0px;width:100%;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:start;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-bottom-color:var(--calcite-ui-border-3);-ms-flex:0 0 auto;flex:0 0 auto}.header-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.875rem;padding-bottom:0.875rem;-webkit-margin-end:auto;margin-inline-end:auto}.header-content .heading,.header-content .summary{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-bottom:0px}.header-content .summary{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:stretch;align-items:stretch}.header-actions--end,.menu-container:only-child{-webkit-margin-start:auto;margin-inline-start:auto}.menu-button{position:relative;height:100%;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch}.menu{min-width:10rem;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.content-wrapper{overflow:auto}.content-height{height:100%}.content-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-top:1px solid;position:-webkit-sticky;position:sticky;bottom:0px;display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:space-evenly;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-top-color:var(--calcite-ui-border-3);-ms-flex:0 0 auto;flex:0 0 auto;min-height:3rem;padding:0.5rem}.fab-container{position:-webkit-sticky;position:sticky;bottom:0px;left:0px;right:0px;margin-top:0px;margin-bottom:0px;margin-left:auto;margin-right:auto;display:block;padding:0.5rem;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}"}}]),i}(h.mv),[1,"calcite-panel",{dismissed:[1540],beforeBack:[16],disabled:[516],dismissible:[516],headingLevel:[2,"heading-level"],showBackButton:[516,"show-back-button"],intlBack:[1,"intl-back"],heightScale:[513,"height-scale"],widthScale:[513,"width-scale"],loading:[516],intlClose:[1,"intl-close"],intlOptions:[1,"intl-options"],heading:[1],summary:[1],menuOpen:[516,"menu-open"],setFocus:[64],scrollContentTo:[64]}]);function $(){if("undefined"!==typeof customElements){["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((function(e){switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,X);break;case"calcite-action":customElements.get(e)||(0,v.d)();break;case"calcite-action-menu":customElements.get(e)||(0,p.d)();break;case"calcite-icon":customElements.get(e)||(0,w.d)();break;case"calcite-loader":customElements.get(e)||(0,x.d)();break;case"calcite-popover":customElements.get(e)||(0,y.d)();break;case"calcite-scrim":customElements.get(e)||(0,D.d)()}}))}}$();var ee=X,te=$}}]);