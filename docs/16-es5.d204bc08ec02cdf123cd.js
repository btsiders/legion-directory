function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{IXZI:function(n,e,t){"use strict";t.r(e);var i=t("ofXK"),o=t("3Pt+"),r=t("TEn/"),c=t("tyNb"),b=t("mrSG"),a=t("2Vo4"),s=t("4Gbf"),l=t("fXoL"),f=t("w2GZ"),u=function(n){return["/member",n]};function m(n,e){if(1&n&&(l.Ob(0,"ion-item",8),l.Kb(1,"ion-img",9),l.Ob(2,"ion-label"),l.nc(3),l.Ob(4,"ion-note"),l.nc(5),l.Zb(6,"htmlDecode"),l.Nb(),l.Ob(7,"p"),l.nc(8),l.Nb(),l.Nb(),l.Ob(9,"ion-button",10),l.Kb(10,"ion-icon",11),l.Nb(),l.Nb()),2&n){var t=e.$implicit;l.dc("routerLink",l.fc(9,u,t.legionId)),l.zb(1),l.dc("src",t.primaryThumbnail),l.zb(2),l.pc(" ",t.fullName," "),l.zb(2),l.oc(l.ac(6,7,t.formattedLegionId)),l.zb(3),l.qc("",t.office," (",t.officeAcronym,")"),l.zb(1),l.dc("href",t.profileUrl)}}function p(n,e){if(1&n&&(l.Ob(0,"p"),l.nc(1),l.Nb()),2&n){var t=l.Yb().$implicit;l.zb(1),l.oc(t.squad)}}function d(n,e){if(1&n&&(l.Ob(0,"ion-item",12),l.Kb(1,"ion-img",9),l.Ob(2,"ion-label"),l.nc(3),l.Ob(4,"ion-note"),l.nc(5),l.Zb(6,"htmlDecode"),l.Nb(),l.lc(7,p,2,1,"p",13),l.Nb(),l.Ob(8,"ion-button",10),l.Kb(9,"ion-icon",11),l.Nb(),l.Nb()),2&n){var t=e.$implicit;l.dc("href","/member/"+t.legionId),l.zb(1),l.dc("src",t.thumbnail),l.zb(2),l.pc(" ",t.fullName," "),l.zb(2),l.oc(l.ac(6,6,t.formattedLegionId)),l.zb(2),l.dc("ngIf",t.squadId),l.zb(1),l.dc("href",t.link)}}function g(n,e){if(1&n&&(l.Mb(0),l.Ob(1,"ion-list"),l.Ob(2,"ion-list-header"),l.Ob(3,"ion-label"),l.nc(4),l.Ob(5,"ion-note"),l.nc(6),l.Nb(),l.Ob(7,"p"),l.nc(8),l.Nb(),l.Nb(),l.Nb(),l.Ob(9,"ion-item-group"),l.Ob(10,"ion-item-divider",5),l.nc(11),l.Nb(),l.lc(12,m,11,11,"ion-item",6),l.Nb(),l.Ob(13,"ion-item-group"),l.Ob(14,"ion-item-divider",5),l.nc(15),l.Nb(),l.lc(16,d,10,8,"ion-item",7),l.Nb(),l.Nb(),l.Lb()),2&n){var t=e.ngIf;l.zb(4),l.pc(" ",t.name," "),l.zb(2),l.qc("",t.unitType," #",t.id,""),l.zb(2),l.oc("http://"===t.url?"No website":t.url),l.zb(3),l.pc("Officers: ",t.officers.length,""),l.zb(1),l.dc("ngForOf",t.officers),l.zb(3),l.pc("Members: ",t.members.length,""),l.zb(1),l.dc("ngForOf",t.members)}}function h(n,e){1&n&&(l.Ob(0,"ion-item"),l.Kb(1,"ion-spinner",15),l.Ob(2,"ion-label"),l.Kb(3,"ion-skeleton-text",16),l.Ob(4,"p"),l.Kb(5,"ion-skeleton-text",17),l.Nb(),l.Nb(),l.Nb())}var O=function(){return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]};function N(n,e){1&n&&(l.Ob(0,"ion-list"),l.lc(1,h,6,0,"ion-item",14),l.Nb()),2&n&&(l.zb(1),l.dc("ngForOf",l.ec(1,O)))}var v,k,w=[{path:"",component:(v=function(){function n(e,t){_classCallCheck(this,n),this.activatedRoute=e,this.memberApiService=t,this.unit$=new a.a(null)}return _createClass(n,[{key:"ngOnInit",value:function(){var n=parseInt(this.activatedRoute.snapshot.paramMap.get("id"),10);this.getUnit(n)}},{key:"getUnit",value:function(n){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.memberApiService.getUnitMembers(n).toPromise();case 2:(t=e.sent).id=n,console.log(t),this.unit$.next(t);case 4:case"end":return e.stop()}}),e,this)})))}}]),n}(),v.\u0275fac=function(n){return new(n||v)(l.Jb(c.a),l.Jb(s.a))},v.\u0275cmp=l.Db({type:v,selectors:[["app-garrison"]],decls:12,vars:4,consts:[["color","primary"],["slot","start"],["defaultHref","/garrisons"],[4,"ngIf","ngIfElse"],["loading",""],["sticky","true"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"href",4,"ngFor","ngForOf"],[3,"routerLink"],["slot","start",1,"start-img",3,"src"],["slot","end","size","large","shape","round","fill","clear","color","dark","ref","nofollow noopener","target","_blank",3,"href"],["slot","icon-only","name","globe"],[3,"href"],[4,"ngIf"],[4,"ngFor","ngForOf"],["slot","start","name","circles",1,"start-img"],["animated","",2,"height","16px","width","300px"],["animated","",2,"width","70px"]],template:function(n,e){if(1&n&&(l.Ob(0,"ion-header"),l.Ob(1,"ion-toolbar",0),l.Ob(2,"ion-buttons",1),l.Kb(3,"ion-menu-button"),l.Kb(4,"ion-back-button",2),l.Nb(),l.Ob(5,"ion-title"),l.nc(6,"Garrison"),l.Nb(),l.Nb(),l.Nb(),l.Ob(7,"ion-content"),l.lc(8,g,17,8,"ng-container",3),l.Zb(9,"async"),l.lc(10,N,2,2,"ng-template",null,4,l.mc),l.Nb()),2&n){var t=l.hc(11);l.zb(8),l.dc("ngIf",l.ac(9,2,e.unit$))("ngIfElse",t)}},directives:[r.n,r.I,r.e,r.y,r.b,r.c,r.H,r.l,i.k,r.v,r.w,r.u,r.A,r.t,r.s,i.j,r.r,r.L,c.h,r.p,r.d,r.o,r.E,r.D],pipes:[i.b,f.a],styles:[""]}),v)}],y=((k=function n(){_classCallCheck(this,n)}).\u0275mod=l.Hb({type:k}),k.\u0275inj=l.Gb({factory:function(n){return new(n||k)},imports:[[c.j.forChild(w)],c.j]}),k),z=t("PCNd");t.d(e,"GarrisonPageModule",(function(){return C}));var I,C=((I=function n(){_classCallCheck(this,n)}).\u0275mod=l.Hb({type:I}),I.\u0275inj=l.Gb({factory:function(n){return new(n||I)},imports:[[i.c,o.a,r.J,y,z.a]]}),I)}}]);