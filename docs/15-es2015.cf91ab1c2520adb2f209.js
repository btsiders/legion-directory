(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{c6BM:function(n,t,e){"use strict";e.r(t);var o=e("ofXK"),i=e("3Pt+"),c=e("TEn/"),r=e("tyNb"),s=e("mrSG"),b=e("2Vo4"),a=e("4Gbf"),l=e("fXoL");const m=function(n){return["/detachments",n]};function u(n,t){if(1&n&&(l.Ob(0,"ion-item",5),l.Kb(1,"ion-img",6),l.Ob(2,"ion-label"),l.nc(3),l.Ob(4,"ion-note"),l.nc(5),l.Nb(),l.Ob(6,"p"),l.nc(7),l.Nb(),l.Nb(),l.Ob(8,"ion-button",7),l.Kb(9,"ion-icon",8),l.Nb(),l.Nb()),2&n){const n=t.$implicit;l.dc("routerLink",l.fc(6,m,n.detachmentId)),l.zb(1),l.dc("src",n.logo),l.zb(2),l.pc(" ",n.name," "),l.zb(2),l.pc("#",n.detachmentId,""),l.zb(2),l.oc(n.url),l.zb(1),l.dc("href",n.url)}}function f(n,t){if(1&n&&(l.Mb(0),l.lc(1,u,10,8,"ion-item",4),l.Lb()),2&n){const n=t.ngIf;l.zb(1),l.dc("ngForOf",n)}}function d(n,t){1&n&&(l.Ob(0,"ion-item"),l.Kb(1,"ion-spinner",10),l.Ob(2,"ion-label"),l.Kb(3,"ion-skeleton-text",11),l.Ob(4,"p"),l.Kb(5,"ion-skeleton-text",12),l.Nb(),l.Nb(),l.Nb())}const p=function(){return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]};function h(n,t){1&n&&l.lc(0,d,6,0,"ion-item",9),2&n&&l.dc("ngForOf",l.ec(1,p))}const g=[{path:"",component:(()=>{class n{constructor(n){this.memberApiService=n,this.detachments$=new b.a(null)}ngOnInit(){this.getDetachments()}getDetachments(){return Object(s.a)(this,void 0,void 0,(function*(){const n=yield this.memberApiService.getDetachments().toPromise();console.log(n),this.detachments$.next(n)}))}}return n.\u0275fac=function(t){return new(t||n)(l.Jb(a.a))},n.\u0275cmp=l.Db({type:n,selectors:[["app-detachments"]],decls:12,vars:4,consts:[["color","primary"],["slot","start"],[4,"ngIf","ngIfElse"],["loading",""],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],["slot","start",1,"start-img",3,"src"],["slot","end","size","large","shape","round","fill","clear","color","dark","ref","nofollow noopener","target","_blank",3,"href"],["slot","icon-only","name","globe"],[4,"ngFor","ngForOf"],["slot","start","name","circles",1,"start-img"],["animated","",2,"height","16px","width","300px"],["animated","",2,"width","70px"]],template:function(n,t){if(1&n&&(l.Ob(0,"ion-header"),l.Ob(1,"ion-toolbar",0),l.Ob(2,"ion-buttons",1),l.Kb(3,"ion-menu-button"),l.Nb(),l.Ob(4,"ion-title"),l.nc(5,"Detachments"),l.Nb(),l.Nb(),l.Nb(),l.Ob(6,"ion-content"),l.Ob(7,"ion-list"),l.lc(8,f,2,1,"ng-container",2),l.Zb(9,"async"),l.lc(10,h,1,2,"ng-template",null,3,l.mc),l.Nb(),l.Nb()),2&n){const n=l.hc(11);l.zb(8),l.dc("ngIf",l.ac(9,2,t.detachments$))("ngIfElse",n)}},directives:[c.n,c.I,c.e,c.y,c.H,c.l,c.v,o.k,o.j,c.r,c.L,r.h,c.p,c.u,c.A,c.d,c.o,c.E,c.D],pipes:[o.b],styles:[""]}),n})()}];let O=(()=>{class n{}return n.\u0275mod=l.Hb({type:n}),n.\u0275inj=l.Gb({factory:function(t){return new(t||n)},imports:[[r.j.forChild(g)],r.j]}),n})();e.d(t,"DetachmentsPageModule",(function(){return N}));let N=(()=>{class n{}return n.\u0275mod=l.Hb({type:n}),n.\u0275inj=l.Gb({factory:function(t){return new(t||n)},imports:[[o.c,i.a,c.J,O]]}),n})()}}]);