(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{vYYH:function(n,t,e){"use strict";e.r(t);var o=e("ofXK"),i=e("3Pt+"),c=e("TEn/"),r=e("tyNb"),b=e("mrSG"),a=e("2Vo4"),l=e("4Gbf"),s=e("fXoL"),f=e("w2GZ");function m(n,t){1&n&&(s.Mb(0),s.Ob(1,"p"),s.nc(2,"No website"),s.Nb(),s.Lb())}function d(n,t){if(1&n&&(s.Ob(0,"p"),s.Ob(1,"a",9),s.nc(2),s.Nb(),s.Nb()),2&n){const n=s.Yb().ngIf;s.zb(1),s.dc("href",n.url,s.jc),s.zb(1),s.oc(n.url)}}const p=function(n){return["/member",n]};function u(n,t){if(1&n&&(s.Ob(0,"ion-item",10),s.Kb(1,"ion-img",11),s.Ob(2,"ion-label"),s.nc(3),s.Ob(4,"ion-note"),s.nc(5),s.Zb(6,"htmlDecode"),s.Nb(),s.Ob(7,"p"),s.nc(8),s.Nb(),s.Nb(),s.Ob(9,"ion-button",12),s.Kb(10,"ion-icon",13),s.Nb(),s.Nb()),2&n){const n=t.$implicit;s.dc("routerLink",s.fc(9,p,n.legionId)),s.zb(1),s.dc("src",n.primaryThumbnail),s.zb(2),s.pc(" ",n.fullName," "),s.zb(2),s.oc(s.ac(6,7,n.formattedLegionId)),s.zb(3),s.qc("",n.office," (",n.officeAcronym,")"),s.zb(1),s.dc("href",n.profileUrl)}}function g(n,t){if(1&n&&(s.Mb(0),s.Ob(1,"ion-card"),s.Ob(2,"ion-item"),s.Kb(3,"ion-img",5),s.Ob(4,"ion-label"),s.nc(5),s.Ob(6,"ion-note"),s.nc(7),s.Nb(),s.lc(8,m,3,0,"ng-container",3),s.lc(9,d,3,2,"ng-template",null,6,s.mc),s.Nb(),s.Nb(),s.Nb(),s.Ob(11,"ion-list"),s.Ob(12,"ion-item-group"),s.Ob(13,"ion-item-divider",7),s.nc(14,"Officers"),s.Nb(),s.lc(15,u,11,11,"ion-item",8),s.Nb(),s.Nb(),s.Lb()),2&n){const n=t.ngIf,e=s.hc(10);s.zb(3),s.dc("src",n.logo),s.zb(2),s.pc(" ",n.name," "),s.zb(2),s.pc("#",n.detachmentId,""),s.zb(1),s.dc("ngIf","http://"===n.url)("ngIfElse",e),s.zb(7),s.dc("ngForOf",n.officers)}}function h(n,t){1&n&&(s.Ob(0,"ion-item"),s.Kb(1,"ion-spinner",15),s.Ob(2,"ion-label"),s.Kb(3,"ion-skeleton-text",16),s.Ob(4,"p"),s.Kb(5,"ion-skeleton-text",17),s.Nb(),s.Nb(),s.Nb())}const O=function(){return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]};function N(n,t){1&n&&(s.Ob(0,"ion-list"),s.lc(1,h,6,0,"ion-item",14),s.Nb()),2&n&&(s.zb(1),s.dc("ngForOf",s.ec(1,O)))}const w=[{path:"",component:(()=>{class n{constructor(n,t){this.activatedRoute=n,this.memberApiService=t,this.detachment$=new a.a(null)}ngOnInit(){const n=parseInt(this.activatedRoute.snapshot.paramMap.get("id"),10);this.getDetachment(n)}getDetachment(n){return Object(b.a)(this,void 0,void 0,(function*(){const t=yield this.memberApiService.getDetachment(n).toPromise();console.log(t),this.detachment$.next(t)}))}}return n.\u0275fac=function(t){return new(t||n)(s.Jb(r.a),s.Jb(l.a))},n.\u0275cmp=s.Db({type:n,selectors:[["app-detachment"]],decls:12,vars:4,consts:[["color","primary"],["slot","start"],["defaultHref","detachments"],[4,"ngIf","ngIfElse"],["loading",""],["slot","start",1,"logo",3,"src"],["detLink",""],["sticky","true"],[3,"routerLink",4,"ngFor","ngForOf"],["target","_blank","rel","nofollow noopener",1,"secondary",3,"href"],[3,"routerLink"],["slot","start",1,"start-img",3,"src"],["slot","end","size","large","shape","round","fill","clear","color","dark","ref","nofollow noopener","target","_blank",3,"href"],["slot","icon-only","name","globe"],[4,"ngFor","ngForOf"],["slot","start",1,"start-img"],["animated","",2,"height","16px","width","300px"],["animated","",2,"width","70px"]],template:function(n,t){if(1&n&&(s.Ob(0,"ion-header"),s.Ob(1,"ion-toolbar",0),s.Ob(2,"ion-buttons",1),s.Kb(3,"ion-menu-button"),s.Kb(4,"ion-back-button",2),s.Nb(),s.Ob(5,"ion-title"),s.nc(6,"Detachment"),s.Nb(),s.Nb(),s.Nb(),s.Ob(7,"ion-content"),s.lc(8,g,16,6,"ng-container",3),s.Zb(9,"async"),s.lc(10,N,2,2,"ng-template",null,4,s.mc),s.Nb()),2&n){const n=s.hc(11);s.zb(8),s.dc("ngIf",s.ac(9,2,t.detachment$))("ngIfElse",n)}},directives:[c.n,c.I,c.e,c.y,c.b,c.c,c.H,c.l,o.k,c.f,c.r,c.p,c.u,c.A,c.v,c.t,c.s,o.j,c.L,r.h,c.d,c.o,c.E,c.D],pipes:[o.b,f.a],styles:[".logo[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:16px;width:125px;min-height:125px;display:flex;align-items:center;justify-content:center}.logo[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:64px;height:64px}"]}),n})()}];let y=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[r.j.forChild(w)],r.j]}),n})();var z=e("PCNd");e.d(t,"DetachmentPageModule",(function(){return k}));let k=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[o.c,i.a,c.J,y,z.a]]}),n})()}}]);