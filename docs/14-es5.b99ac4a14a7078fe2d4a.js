function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{vYYH:function(e,n,t){"use strict";t.r(n);var o=t("ofXK"),i=t("3Pt+"),r=t("TEn/"),c=t("tyNb"),a=t("mrSG"),b=t("2Vo4"),s=t("4Gbf"),l=t("fXoL"),f=t("w2GZ"),u=function(e){return["/member",e]};function m(e,n){if(1&e&&(l.Ob(0,"ion-item",7),l.Kb(1,"ion-img",8),l.Ob(2,"ion-label"),l.nc(3),l.Ob(4,"ion-note"),l.nc(5),l.Zb(6,"htmlDecode"),l.Nb(),l.Ob(7,"p"),l.nc(8),l.Nb(),l.Nb(),l.Ob(9,"ion-button",9),l.Kb(10,"ion-icon",10),l.Nb(),l.Nb()),2&e){var t=n.$implicit;l.dc("routerLink",l.fc(9,u,t.legionId)),l.zb(1),l.dc("src",t.primaryThumbnail),l.zb(2),l.pc(" ",t.fullName," "),l.zb(2),l.oc(l.ac(6,7,t.formattedLegionId)),l.zb(3),l.qc("",t.office," (",t.officeAcronym,")"),l.zb(1),l.dc("href",t.profileUrl)}}function p(e,n){if(1&e&&(l.Mb(0),l.Ob(1,"ion-list"),l.Ob(2,"ion-list-header"),l.Ob(3,"ion-label"),l.nc(4),l.Ob(5,"ion-note"),l.nc(6),l.Nb(),l.Ob(7,"p"),l.nc(8),l.Nb(),l.Nb(),l.Nb(),l.Ob(9,"ion-item-group"),l.Ob(10,"ion-item-divider",5),l.nc(11,"Officers"),l.Nb(),l.lc(12,m,11,11,"ion-item",6),l.Nb(),l.Nb(),l.Lb()),2&e){var t=n.ngIf;l.zb(4),l.pc(" ",t.name," "),l.zb(2),l.pc("#",t.detachmentId,""),l.zb(2),l.oc(t.url),l.zb(4),l.dc("ngForOf",t.officers)}}function d(e,n){1&e&&(l.Ob(0,"ion-item"),l.Kb(1,"ion-spinner",12),l.Ob(2,"ion-label"),l.Kb(3,"ion-skeleton-text",13),l.Ob(4,"p"),l.Kb(5,"ion-skeleton-text",14),l.Nb(),l.Nb(),l.Nb())}var h=function(){return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]};function g(e,n){1&e&&(l.Ob(0,"ion-list"),l.lc(1,d,6,0,"ion-item",11),l.Nb()),2&e&&(l.zb(1),l.dc("ngForOf",l.ec(1,h)))}var O,v,N=[{path:"",component:(O=function(){function e(n,t){_classCallCheck(this,e),this.activatedRoute=n,this.memberApiService=t,this.detachment$=new b.a(null)}return _createClass(e,[{key:"ngOnInit",value:function(){var e=parseInt(this.activatedRoute.snapshot.paramMap.get("id"),10);this.getDetachment(e)}},{key:"getDetachment",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.memberApiService.getDetachment(e).toPromise();case 2:t=n.sent,console.log(t),this.detachment$.next(t);case 4:case"end":return n.stop()}}),n,this)})))}}]),e}(),O.\u0275fac=function(e){return new(e||O)(l.Jb(c.a),l.Jb(s.a))},O.\u0275cmp=l.Db({type:O,selectors:[["app-detachment"]],decls:12,vars:4,consts:[["color","primary"],["slot","start"],["defaultHref","/detachments"],[4,"ngIf","ngIfElse"],["loading",""],["sticky","true"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],["slot","start",1,"start-img",3,"src"],["slot","end","size","large","shape","round","fill","clear","color","dark","ref","nofollow noopener","target","_blank",3,"href"],["slot","icon-only","name","globe"],[4,"ngFor","ngForOf"],["slot","start","name","circles",1,"start-img"],["animated","",2,"height","16px","width","300px"],["animated","",2,"width","70px"]],template:function(e,n){if(1&e&&(l.Ob(0,"ion-header"),l.Ob(1,"ion-toolbar",0),l.Ob(2,"ion-buttons",1),l.Kb(3,"ion-menu-button"),l.Kb(4,"ion-back-button",2),l.Nb(),l.Ob(5,"ion-title"),l.nc(6,"Detachment"),l.Nb(),l.Nb(),l.Nb(),l.Ob(7,"ion-content"),l.lc(8,p,13,4,"ng-container",3),l.Zb(9,"async"),l.lc(10,g,2,2,"ng-template",null,4,l.mc),l.Nb()),2&e){var t=l.hc(11);l.zb(8),l.dc("ngIf",l.ac(9,2,n.detachment$))("ngIfElse",t)}},directives:[r.n,r.I,r.e,r.y,r.b,r.c,r.H,r.l,o.k,r.v,r.w,r.u,r.A,r.t,r.s,o.j,r.r,r.L,c.h,r.p,r.d,r.o,r.E,r.D],pipes:[o.b,f.a],styles:[""]}),O)}],k=((v=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:v}),v.\u0275inj=l.Gb({factory:function(e){return new(e||v)},imports:[[c.j.forChild(N)],c.j]}),v),w=t("PCNd");t.d(n,"DetachmentPageModule",(function(){return C}));var y,C=((y=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:y}),y.\u0275inj=l.Gb({factory:function(e){return new(e||y)},imports:[[o.c,i.a,r.J,k,w.a]]}),y)}}]);