function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{c6BM:function(n,e,t){"use strict";t.r(e);var o=t("ofXK"),i=t("3Pt+"),r=t("TEn/"),c=t("tyNb"),a=t("mrSG"),s=t("2Vo4"),l=t("4Gbf"),b=t("fXoL"),u=function(n){return["/detachments",n]};function f(n,e){if(1&n){var t=b.Pb();b.Ob(0,"ion-item",6),b.Kb(1,"ion-img",7),b.Ob(2,"ion-label"),b.nc(3),b.Ob(4,"ion-note"),b.nc(5),b.Nb(),b.Ob(6,"p"),b.nc(7),b.Nb(),b.Nb(),b.Ob(8,"ion-button",8),b.Wb("click",(function(n){return b.ic(t),b.Yb(2).noClick(n)})),b.Kb(9,"ion-icon",9),b.Nb(),b.Nb()}if(2&n){var o=e.$implicit;b.dc("routerLink",b.fc(6,u,o.detachmentId)),b.zb(1),b.dc("src",o.logo),b.zb(2),b.pc(" ",o.name," "),b.zb(2),b.pc("#",o.detachmentId,""),b.zb(2),b.oc(o.url),b.zb(1),b.dc("href",o.url)}}function m(n,e){if(1&n&&(b.Mb(0),b.lc(1,f,10,8,"ion-item",5),b.Lb()),2&n){var t=e.ngIf;b.zb(1),b.dc("ngForOf",t)}}function p(n,e){1&n&&(b.Ob(0,"ion-item"),b.Kb(1,"div",11),b.Ob(2,"ion-label"),b.Kb(3,"ion-skeleton-text",12),b.Ob(4,"p"),b.Kb(5,"ion-skeleton-text",13),b.Nb(),b.Nb(),b.Nb())}var d=function(){return[0,1,2,3,4,5,6,7,8]};function h(n,e){1&n&&b.lc(0,p,6,0,"ion-item",10),2&n&&b.dc("ngForOf",b.ec(1,d))}var g,k,v=[{path:"",component:(g=function(){function n(e){_classCallCheck(this,n),this.memberApiService=e,this.detachments$=new s.a(null)}return _createClass(n,[{key:"ngOnInit",value:function(){this.getDetachments()}},{key:"noClick",value:function(n){n.stopPropagation()}},{key:"getDetachments",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.memberApiService.getDetachments().toPromise();case 2:e=n.sent,console.log(e),this.detachments$.next(e);case 4:case"end":return n.stop()}}),n,this)})))}}]),n}(),g.\u0275fac=function(n){return new(n||g)(b.Jb(l.a))},g.\u0275cmp=b.Db({type:g,selectors:[["app-detachments"]],decls:13,vars:4,consts:[["color","primary"],["slot","start"],["defaultHref","home"],[4,"ngIf","ngIfElse"],["loading",""],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],["slot","start",1,"start-img",3,"src"],["slot","end","size","large","shape","round","fill","clear","color","dark","ref","nofollow noopener","target","_blank",3,"href","click"],["slot","icon-only","name","globe"],[4,"ngFor","ngForOf"],["slot","start",1,"start-img","loading-back"],["animated","",2,"height","16px","width","300px"],["animated","",2,"width","70px"]],template:function(n,e){if(1&n&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-buttons",1),b.Kb(3,"ion-menu-button"),b.Kb(4,"ion-back-button",2),b.Nb(),b.Ob(5,"ion-title"),b.nc(6,"Detachments"),b.Nb(),b.Nb(),b.Nb(),b.Ob(7,"ion-content"),b.Ob(8,"ion-list"),b.lc(9,m,2,1,"ng-container",3),b.Zb(10,"async"),b.lc(11,h,1,2,"ng-template",null,4,b.mc),b.Nb(),b.Nb()),2&n){var t=b.hc(12);b.zb(9),b.dc("ngIf",b.ac(10,2,e.detachments$))("ngIfElse",t)}},directives:[r.n,r.I,r.e,r.y,r.b,r.c,r.H,r.l,r.v,o.k,o.j,r.r,r.L,c.h,r.p,r.u,r.A,r.d,r.o,r.D],pipes:[o.b],styles:[""]}),g)}],O=((k=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:k}),k.\u0275inj=b.Gb({factory:function(n){return new(n||k)},imports:[[c.j.forChild(v)],c.j]}),k);t.d(e,"DetachmentsPageModule",(function(){return y}));var w,y=((w=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:w}),w.\u0275inj=b.Gb({factory:function(n){return new(n||w)},imports:[[o.c,i.a,r.J,O]]}),w)}}]);