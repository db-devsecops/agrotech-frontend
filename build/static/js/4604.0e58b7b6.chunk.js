"use strict";(self.webpackChunkagrotech_frontend=self.webpackChunkagrotech_frontend||[]).push([[4604],{84604:function(t,i,e){e.r(i),e.d(i,{CalciteAccordionItem:function(){return f},defineCustomElement:function(){return v}});var o=e(4942),c=e(15671),n=e(43144),a=e(97326),r=e(60136),s=e(29388),l=e(12718),m=e(70931),d=e(44158),u=e(92582),h=(0,l.GH)(function(t){(0,r.Z)(e,t);var i=(0,s.Z)(e);function e(){var t;return(0,c.Z)(this,e),(t=i.call(this)).__registerHost(),t.__attachShadow(),t.calciteAccordionItemKeyEvent=(0,l.yM)((0,a.Z)(t),"calciteAccordionItemKeyEvent",7),t.calciteAccordionItemSelect=(0,l.yM)((0,a.Z)(t),"calciteAccordionItemSelect",7),t.calciteAccordionItemClose=(0,l.yM)((0,a.Z)(t),"calciteAccordionItemClose",7),t.calciteAccordionItemRegister=(0,l.yM)((0,a.Z)(t),"calciteAccordionItemRegister",7),t.active=!1,t.guid=(0,d.g)(),t.iconPosition="end",t.itemHeaderClickHandler=function(){return t.emitRequestedItem()},t}return(0,n.Z)(e,[{key:"connectedCallback",value:function(){this.parent=this.el.parentElement,this.selectionMode=(0,m.g)(this.el,"selection-mode","multi"),this.iconType=(0,m.g)(this.el,"icon-type","chevron"),this.iconPosition=(0,m.g)(this.el,"icon-position",this.iconPosition)}},{key:"componentDidLoad",value:function(){this.itemPosition=this.getItemPosition(),this.calciteAccordionItemRegister.emit({parent:this.parent,position:this.itemPosition})}},{key:"render",value:function(){var t,i=(0,m.a)(this.el),e=(0,l.h)("calcite-icon",{class:"accordion-item-icon",icon:this.icon,scale:"s"}),c=this.guid,n="".concat(c,"-region"),a="".concat(c,"-button");return(0,l.h)(l.AA,{tabindex:"0"},(0,l.h)("div",{class:(t={},(0,o.Z)(t,"icon-position--".concat(this.iconPosition),!0),(0,o.Z)(t,"icon-type--".concat(this.iconType),!0),t)},(0,l.h)("div",{"aria-controls":n,class:(0,o.Z)({"accordion-item-header":!0},m.C.rtl,"rtl"===i),id:a,onClick:this.itemHeaderClickHandler,role:"button"},this.icon?e:null,(0,l.h)("div",{class:"accordion-item-header-text"},(0,l.h)("span",{class:"accordion-item-title"},this.itemTitle),this.itemSubtitle?(0,l.h)("span",{class:"accordion-item-subtitle"},this.itemSubtitle):null),(0,l.h)("calcite-icon",{class:"accordion-item-expand-icon",icon:"chevron"===this.iconType?"chevronDown":"caret"===this.iconType?"caretDown":this.active?"minus":"plus",scale:"s"})),(0,l.h)("div",{"aria-expanded":(0,m.t)(this.active),"aria-labelledby":a,class:"accordion-item-content",id:n,role:"region"},(0,l.h)("slot",null))))}},{key:"keyDownHandler",value:function(t){if(t.target===this.el)switch(t.key){case" ":case"Enter":this.emitRequestedItem(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"Home":case"End":this.calciteAccordionItemKeyEvent.emit({parent:this.parent,item:t}),t.preventDefault()}}},{key:"updateActiveItemOnChange",value:function(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.el.parentNode===this.requestedAccordionItem.parentNode&&this.determineActiveItem()}},{key:"determineActiveItem",value:function(){switch(this.selectionMode){case"multi":this.el===this.requestedAccordionItem&&(this.active=!this.active);break;case"single":this.active=this.el===this.requestedAccordionItem&&!this.active;break;case"single-persist":this.active=this.el===this.requestedAccordionItem}}},{key:"emitRequestedItem",value:function(){this.calciteAccordionItemSelect.emit({requestedAccordionItem:this.el})}},{key:"getItemPosition",value:function(){return Array.prototype.indexOf.call(this.parent.querySelectorAll("calcite-accordion-item"),this.el)}},{key:"el",get:function(){return this}}],[{key:"style",get:function(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-3);-webkit-text-decoration-line:none;text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;background-color:var(--calcite-accordion-item-background, var(--calcite-ui-foreground-1))}:host .accordion-item-header{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) .accordion-item-header{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([active]){color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-content{display:block;color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-header{border-bottom-color:transparent}:host .accordion-item-header{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-direction:var(--calcite-accordion-item-flex-direction);flex-direction:var(--calcite-accordion-item-flex-direction)}:host .accordion-item-icon{position:relative;margin:0px;display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-margin-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);-webkit-margin-start:var(--calcite-accordion-item-icon-spacing-end);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}:host .accordion-item-content,:host .accordion-item-header{padding:var(--calcite-accordion-item-padding);border-bottom:1px solid var(--calcite-accordion-item-border, var(--calcite-ui-border-2))}:host .accordion-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .accordion-item-content{display:none;padding-top:0px;color:var(--calcite-ui-text-3);text-align:initial}:host .accordion-item-expand-icon{color:var(--calcite-ui-text-3);-webkit-margin-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);-webkit-margin-end:var(--calcite-accordion-item-icon-spacing-end);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation));transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .accordion-item-expand-icon{-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([active]) .accordion-item-expand-icon{color:var(--calcite-ui-text-1);-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation));transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([active]) .calcite--rtl .accordion-item-expand-icon{-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .accordion-item-header-text{margin-top:0px;margin-bottom:0px;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;padding-top:0px;padding-bottom:0px;text-align:initial;-webkit-margin-end:auto;margin-inline-end:auto}:host .accordion-item-title,:host .accordion-item-subtitle{display:-ms-flexbox;display:flex;width:100%}:host .accordion-item-title{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .accordion-item-subtitle{margin-top:0.25rem;color:var(--calcite-ui-text-3)}:host(:focus) .accordion-item-title,:host(:hover) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-icon,:host(:hover) .accordion-item-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-expand-icon,:host(:hover) .accordion-item-expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:hover) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}:host(:focus) .accordion-item-title,:host(:active) .accordion-item-title,:host([active]) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-icon,:host(:active) .accordion-item-icon,:host([active]) .accordion-item-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-expand-icon,:host(:active) .accordion-item-expand-icon,:host([active]) .accordion-item-expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:active) .accordion-item-subtitle,:host([active]) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}"}}]),e}(l.mv),[1,"calcite-accordion-item",{active:[1540],itemTitle:[1,"item-title"],itemSubtitle:[1,"item-subtitle"],icon:[513]},[[0,"keydown","keyDownHandler"],[16,"calciteAccordionChange","updateActiveItemOnChange"]]]);function p(){if("undefined"!==typeof customElements){["calcite-accordion-item","calcite-icon"].forEach((function(t){switch(t){case"calcite-accordion-item":customElements.get(t)||customElements.define(t,h);break;case"calcite-icon":customElements.get(t)||(0,u.d)()}}))}}p();var f=h,v=p},44158:function(t,i,e){e.d(i,{g:function(){return o}});var o=function(){return[2,1,1,1,3].map((function(t){for(var i="",e=0;e<t;e++)i+=(65536*(1+Math.random())|0).toString(16).substring(1);return i})).join("-")}}}]);