(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{NlOH:function(t,e,n){"use strict";n.r(e),n.d(e,"UserModule",function(){return C});var c=n("ofXK"),o=n("tyNb"),a=n("+0xr"),i=n("STbY"),s=n("lJxs"),b=n("3E0/"),r=n("t8So"),u=n("fXoL"),d=n("TcFV"),l=n("dNgK");function m(t,e){1&t&&(u.Sb(0,"th",11),u.vc(1," No. "),u.Rb())}function f(t,e){if(1&t&&(u.Sb(0,"td",12),u.vc(1),u.Rb()),2&t){const t=e.$implicit;u.Bb(1),u.xc(" ",t.content.sn," ")}}function p(t,e){1&t&&(u.Sb(0,"th",11),u.vc(1," User Name "),u.Rb())}function h(t,e){if(1&t&&(u.Sb(0,"td",12),u.vc(1),u.Rb()),2&t){const t=e.$implicit;u.Bb(1),u.xc(" ",t.content.email," ")}}function S(t,e){1&t&&(u.Sb(0,"th",11),u.vc(1," Password "),u.Rb())}function g(t,e){if(1&t&&(u.Sb(0,"td",12),u.vc(1),u.Rb()),2&t){const t=e.$implicit;u.Bb(1),u.xc(" ",t.content.password," ")}}function v(t,e){1&t&&(u.Sb(0,"th",11),u.vc(1," Action "),u.Rb())}function w(t,e){if(1&t){const t=u.Tb();u.Sb(0,"td",12),u.Sb(1,"button",13),u.Nb(2,"i",14),u.Rb(),u.Sb(3,"mat-menu",null,15),u.Sb(5,"button",16),u.Zb("click",function(){u.mc(t);const n=e.$implicit;return u.dc().delete(n.content.id)}),u.Nb(6,"i",17),u.vc(7," Delete "),u.Rb(),u.Rb(),u.Rb()}if(2&t){const t=u.kc(4);u.Bb(1),u.gc("matMenuTriggerFor",t)}}function R(t,e){1&t&&u.Nb(0,"tr",18)}function k(t,e){1&t&&u.Nb(0,"tr",19)}let y=(()=>{class t{constructor(t,e){this.authService=t,this.snackbar=e,this.dataSource=new a.k(null),this.displayedColumns=["sn","userName","password","action"]}ngOnInit(){this.getUsers()}getUsers(){this.authService.getAllUsers().pipe(Object(s.a)(t=>t.map(t=>Object.assign({key:t.payload.key},t.payload.val())))).subscribe(t=>{this.dataSource.data=t})}delete(t){const e=this.dataSource.data.find(e=>e.content.id===t);this.authService.deleteUser(e.key).pipe(Object(b.a)(400)).subscribe(t=>{this.snackbar.openFromComponent(r.a,{data:"Team Deleted Successfully.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"})})}ngAfterViewInit(){}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(d.a),u.Mb(l.b))},t.\u0275cmp=u.Gb({type:t,selectors:[["ng-component"]],decls:19,vars:3,consts:[[2,"background-color","rgb(124, 112, 112)","padding-top","100px","padding-bottom","20px","height","100vh"],[1,"container"],["mat-table","",1,"mat-elevation-z8",2,"width","100%",3,"dataSource"],["matColumnDef","sn",2,"width","100px"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","userName"],["matColumnDef","password"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["type","button",1,"btn","btn-label-info","btn-sm","btn-icon","btn-circle",3,"matMenuTriggerFor"],[1,"fa","fa-align-center"],["menu","matMenu"],["type","button",1,"dropdown-item",3,"click"],[1,"flaticon-delete","kt-font-danger","mr-1"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"h3"),u.vc(3,"List of Users"),u.Rb(),u.Sb(4,"table",2),u.Qb(5,3),u.uc(6,m,2,0,"th",4),u.uc(7,f,2,1,"td",5),u.Pb(),u.Qb(8,6),u.uc(9,p,2,0,"th",4),u.uc(10,h,2,1,"td",5),u.Pb(),u.Qb(11,7),u.uc(12,S,2,0,"th",4),u.uc(13,g,2,1,"td",5),u.Pb(),u.Qb(14,8),u.uc(15,v,2,0,"th",4),u.uc(16,w,8,1,"td",5),u.Pb(),u.uc(17,R,1,0,"tr",9),u.uc(18,k,1,0,"tr",10),u.Rb(),u.Rb(),u.Rb()),2&t&&(u.Bb(4),u.gc("dataSource",e.dataSource),u.Bb(13),u.gc("matHeaderRowDef",e.displayedColumns),u.Bb(1),u.gc("matRowDefColumns",e.displayedColumns))},directives:[a.j,a.c,a.e,a.b,a.g,a.i,a.d,a.a,i.c,i.a,a.f,a.h],styles:[""]}),t})(),C=(()=>{class t{}return t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({factory:function(e){return new(e||t)},providers:[],imports:[[c.b,o.c.forChild([{path:"",component:y}]),a.l,i.b]]}),t})()},t8So:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var c=n("dNgK"),o=n("fXoL");let a=(()=>{class t{constructor(t,e){this.sbRef=t,this.data=e}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(c.d),o.Mb(c.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-basic-snackbar"]],decls:6,vars:1,consts:[[1,"snack"],[1,"mb-4"],[1,"dismiss"],["mat-icon-button","",1,"btn","btn-danger","btn-sm",3,"click"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.vc(2),o.Rb(),o.Sb(3,"div",2),o.Sb(4,"button",3),o.Zb("click",function(){return e.sbRef.dismiss()}),o.vc(5," Close "),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.Bb(2),o.wc(e.data))},styles:[".snack[_ngcontent-%COMP%]{text-align:center}"]}),t})()}}]);