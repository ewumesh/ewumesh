(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2/Cs":function(t,e,i){"use strict";i.r(e),i.d(e,"TeamModule",function(){return lt});var a=i("ofXK"),n=i("0EQZ"),s=i("fXoL"),o=i("8LU1"),r=i("FKr1"),c=(i("FtGj"),i("XNiG"));i("VRyK"),i("R0Ic"),i("u47x");class l{}const b=Object(r.w)(Object(r.u)(l));let d=(()=>{class t extends b{constructor(){super(...arguments),this.sortables=new Map,this._stateChanges=new c.a,this.start="asc",this._direction="",this.sortChange=new s.o}get direction(){return this._direction}set direction(t){this._direction=t}get disableClear(){return this._disableClear}set disableClear(t){this._disableClear=Object(o.c)(t)}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return"";let e=function(t,e){let i=["asc","desc"];return"desc"==t&&i.reverse(),e||i.push(""),i}(t.start||this.start,null!=t.disableClear?t.disableClear:this.disableClear),i=e.indexOf(this.direction)+1;return i>=e.length&&(i=0),e[i]}ngOnInit(){this._markInitialized()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return t.\u0275fac=function(e){return m(e||t)},t.\u0275dir=s.Ib({type:t,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"],active:["matSortActive","active"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[s.zb,s.Ab]}),t})();const m=s.Vb(d);let u=(()=>{class t{constructor(){this.changes=new c.a,this.sortButtonLabel=t=>"Change sorting for "+t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(s.Jb)({factory:function(){return new t},token:t,providedIn:"root"}),t})();const p={provide:u,deps:[[new s.C,new s.L,u]],useFactory:function(t){return t||new u}};let f=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},providers:[p],imports:[[a.c,r.i]]}),t})();var h=i("+0xr"),g=i("lJxs"),S=i("1G5W"),v=i("3E0/"),C=i("t8So"),T=i("0IaG"),y=i("3Pt+"),w=i("szbo"),k=i("kmnG"),N=i("qFsG");function O(t,e){1&t&&(s.Tb(0,"span"),s.Ec(1,"LOGIN"),s.Sb())}function D(t,e){1&t&&(s.Tb(0,"span"),s.Ob(1,"i",14),s.Sb())}let F=(()=>{class t{constructor(t,e,i,a){this.fb=t,this.tService=e,this.dialogRef=i,this.data=a,this.isLoading=!1}ngOnInit(){this.initForm()}initForm(){this.sForm=this.fb.group({id:0,facebook:null,instagram:null,twitter:null,linkedin:null})}patchForm(t){this.sForm.patchValue({id:t.id,facebook:t.facebook,twitter:t.twitter,linkedin:t.linkedin,instagram:t.instagram})}ngAfterViewInit(){this.data.id>0&&this.tService.getTeamById(this.data.id).pipe(Object(v.a)(500)).subscribe(t=>{let e=t.links.find(t=>t);this.patchForm(e)})}saveChanges(){let t=this.sForm.value;t.id=this.data.id,this.tService.addLinks(t).pipe().subscribe(t=>{console.log(t)})}cancel(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(y.d),s.Nb(w.a),s.Nb(T.g),s.Nb(T.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["ng-component"]],decls:30,vars:4,consts:[["mat-dialog-title",""],["autocomplete","off",1,"form",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-6"],["appearance","outline",2,"width","100%"],[1,"input_label"],["formControlName","facebook","type","facebook","matInput","","placeholder","Url"],["formControlName","instagram","type","instagram","matInput","","placeholder","Url"],["formControlName","twitter","type","twitter","matInput","","placeholder","Urls"],["formControlName","linkedin","type","linkedin","matInput","","placeholder","Urls"],[1,"text-center"],["type","submit",1,"btn","btn-primary","mr-2",3,"disabled","click"],[4,"ngIf"],[1,"btn","btn-danger","ml-2",3,"click"],[1,"fa","fa-cog","fa-spin",2,"font-size","22px"]],template:function(t,e){1&t&&(s.Tb(0,"h1",0),s.Ec(1,"Form"),s.Sb(),s.Tb(2,"form",1),s.ac("ngSubmit",function(){return e.saveChanges()}),s.Tb(3,"div",2),s.Tb(4,"div",3),s.Tb(5,"mat-form-field",4),s.Tb(6,"mat-label",5),s.Ec(7,"Facebook"),s.Sb(),s.Ob(8,"input",6),s.Sb(),s.Sb(),s.Tb(9,"div",3),s.Tb(10,"mat-form-field",4),s.Tb(11,"mat-label",5),s.Ec(12,"Instagram"),s.Sb(),s.Ob(13,"input",7),s.Sb(),s.Sb(),s.Tb(14,"div",3),s.Tb(15,"mat-form-field",4),s.Tb(16,"mat-label",5),s.Ec(17,"Twitter"),s.Sb(),s.Ob(18,"input",8),s.Sb(),s.Sb(),s.Tb(19,"div",3),s.Tb(20,"mat-form-field",4),s.Tb(21,"mat-label",5),s.Ec(22,"Linkedin"),s.Sb(),s.Ob(23,"input",9),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(24,"div",10),s.Tb(25,"button",11),s.ac("click",function(){return e.saveChanges()}),s.Dc(26,O,2,0,"span",12),s.Dc(27,D,2,0,"span",12),s.Sb(),s.Tb(28,"button",13),s.ac("click",function(){return e.cancel()}),s.Ec(29,"Cancel"),s.Sb(),s.Sb()),2&t&&(s.Cb(2),s.lc("formGroup",e.sForm),s.Cb(23),s.lc("disabled",e.sForm.invalid||e.isLoading),s.Cb(1),s.lc("ngIf",!e.isLoading),s.Cb(1),s.lc("ngIf",e.isLoading))},directives:[T.h,y.r,y.m,y.g,k.c,k.f,y.c,N.b,y.l,y.e,a.l],styles:["table[_ngcontent-%COMP%]{width:100%}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]}),t})();var E=i("pLZG"),j=i("zajI"),I=i("9Q/d"),M=i("tyNb"),x=i("dNgK"),L=i("/1cH");function q(t,e){if(1&t&&(s.Tb(0,"mat-error",19),s.Ec(1),s.Sb()),2&t){const t=s.ec();s.Cb(1),s.Fc(null==t.displayMessage?null:t.displayMessage.firstName)}}function _(t,e){if(1&t&&(s.Tb(0,"mat-error",19),s.Ec(1),s.Sb()),2&t){const t=s.ec();s.Cb(1),s.Fc(null==t.displayMessage?null:t.displayMessage.lastName)}}function R(t,e){if(1&t&&(s.Tb(0,"mat-error",19),s.Ec(1),s.Sb()),2&t){const t=s.ec();s.Cb(1),s.Fc(null==t.displayMessage?null:t.displayMessage.position)}}function P(t,e){if(1&t&&(s.Tb(0,"mat-option",20),s.Ec(1),s.Sb()),2&t){const t=e.$implicit;s.lc("value",t.value),s.Cb(1),s.Gc(" ",t.value," ")}}function A(t,e){1&t&&(s.Tb(0,"span"),s.Ec(1,"Save"),s.Sb())}function G(t,e){1&t&&(s.Tb(0,"span"),s.Ob(1,"i",21),s.Sb())}let U=(()=>{class t{constructor(t,e,i,a,n,s,o){this.fb=t,this.router=e,this.tService=i,this.dialog=a,this.snackbar=n,this.dialogRef=s,this.data=o,this.displayMessage={},this.isLoading=!1,this.imageUrls=[{id:1,value:"assets/images/umesh.jpg"},{id:2,value:"assets/images/pujan.jpg"},{id:3,value:"assets/images/bijen-1.jpg"},{id:4,value:"assets/images/dharmendra.jpg"},{id:5,value:"assets/images/deepika.jpg"},{id:6,value:"assets/images/kanchan-1.jpg"},{id:7,value:"assets/images/prajwol.jpg"},{id:8,value:"assets/images/sagar.jpg"},{id:9,value:"assets/images/suren.jpg"},{id:10,value:"assets/images/saraswoti.jpg"},{id:11,value:"assets/images/team-1.jpg"},{id:12,value:"assets/images/team-2.jpg"},{id:13,value:"assets/images/team-4.jpg"},{id:14,value:"assets/images/team-3.jpg"},{id:15,value:"assets/images/rabin.jpg"},{id:18,value:"assets/images/aadarsa.jpg"}],this.genericValidator=new I.a({firstName:{required:"This field is required."},lastName:{required:"This field is required."},position:{required:"This field is required."},about:{required:"This field is required."},imgUrl:{required:"This field is required."}})}ngOnInit(){this.initForm(),this.data.key&&this.tService.getAllTeams().pipe(Object(g.a)(t=>t.map(t=>Object.assign({key:t.payload.key},t.payload.val())))).subscribe(t=>{this.teamData=t;let e=t.find(t=>t.key===this.data.key);this.patchForm(e.content)})}initForm(){this.teamForm=this.fb.group({id:0,firstName:[null,y.q.required],lastName:[null,y.q.required],position:[null,y.q.required],about:[null,y.q.required],imgUrl:[null,y.q.required]})}patchForm(t){this.teamForm.patchValue({id:t.id,firstName:t.firstName,lastName:t.lastName,position:t.position,about:t.about,imgUrl:t.imgUrl})}validation(){this.genericValidator.initValidationProcess(this.teamForm,this.formInputElements).subscribe({next:t=>this.displayMessage=t})}saveChanges(){if(this.data.key){let t={};t.id=this.data.content.id,t.sn=this.data.content.sn,this.tService.updateTeam(this.data.key,this.teamForm.value,t).pipe(Object(v.a)(400)).subscribe(t=>{this.dialogRef.close(),this.snackbar.openFromComponent(C.a,{data:"Team Updated Successfully.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"})})}else this.tService.addTeam(this.teamForm.value).pipe(Object(v.a)(400)).subscribe(t=>{this.snackbar.openFromComponent(C.a,{data:"Team Added Successfully.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"}),this.dialogRef.close()})}cancel(){this.teamForm.dirty?this.dialog.open(j.a).afterClosed().pipe(Object(E.a)(t=>t)).subscribe(t=>this.dialogRef.close()):this.dialogRef.close()}ngAfterViewInit(){this.validation()}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(y.d),s.Nb(M.b),s.Nb(w.a),s.Nb(T.b),s.Nb(x.b),s.Nb(T.g),s.Nb(T.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&s.Kc(y.e,!0,s.l),2&t){let t;s.pc(t=s.bc())&&(e.formInputElements=t)}},decls:41,vars:9,consts:[["mat-dialog-title",""],["autocomplete","off",1,"form",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-6"],["appearance","outline",2,"width","100%"],[1,"input_label"],["formControlName","firstName","type","firstName","matInput","","placeholder","Enter First name"],["class","text-danger",4,"ngIf"],["formControlName","lastName","type","lastName","matInput","","placeholder","Enter last name"],["formControlName","position","type","position","matInput","","placeholder","Enter Position"],["type","text","placeholder","Select or Enter Urls(https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)","aria-label","Number","matInput","","formControlName","imgUrl",3,"matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-12"],["formControlName","about","matInput","","placeholder",""],[1,"text-center"],["type","submit",1,"btn","btn-primary","mr-2",3,"disabled","click"],[4,"ngIf"],[1,"btn","btn-danger","ml-2",3,"click"],[1,"text-danger"],[3,"value"],[1,"fa","fa-cog","fa-spin",2,"font-size","22px"]],template:function(t,e){if(1&t&&(s.Tb(0,"h1",0),s.Ec(1,"Form"),s.Sb(),s.Tb(2,"form",1),s.ac("ngSubmit",function(){return e.saveChanges()}),s.Tb(3,"div",2),s.Tb(4,"div",3),s.Tb(5,"mat-form-field",4),s.Tb(6,"mat-label",5),s.Ec(7,"First Name"),s.Sb(),s.Ob(8,"input",6),s.Dc(9,q,2,1,"mat-error",7),s.Sb(),s.Sb(),s.Tb(10,"div",3),s.Tb(11,"mat-form-field",4),s.Tb(12,"mat-label",5),s.Ec(13,"Last Name"),s.Sb(),s.Ob(14,"input",8),s.Dc(15,_,2,1,"mat-error",7),s.Sb(),s.Sb(),s.Tb(16,"div",3),s.Tb(17,"mat-form-field",4),s.Tb(18,"mat-label",5),s.Ec(19,"Position"),s.Sb(),s.Ob(20,"input",9),s.Dc(21,R,2,1,"mat-error",7),s.Sb(),s.Sb(),s.Tb(22,"div",3),s.Tb(23,"mat-form-field",4),s.Tb(24,"mat-label"),s.Ec(25,"Image"),s.Sb(),s.Ob(26,"input",10),s.Tb(27,"mat-autocomplete",null,11),s.Dc(29,P,2,2,"mat-option",12),s.Sb(),s.Sb(),s.Sb(),s.Tb(30,"div",13),s.Tb(31,"mat-form-field",4),s.Tb(32,"mat-label",5),s.Ec(33,"About"),s.Sb(),s.Ob(34,"textarea",14),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(35,"div",15),s.Tb(36,"button",16),s.ac("click",function(){return e.saveChanges()}),s.Dc(37,A,2,0,"span",17),s.Dc(38,G,2,0,"span",17),s.Sb(),s.Tb(39,"button",18),s.ac("click",function(){return e.cancel()}),s.Ec(40,"Cancel"),s.Sb(),s.Sb()),2&t){const t=s.qc(28);s.Cb(2),s.lc("formGroup",e.teamForm),s.Cb(7),s.lc("ngIf",null==e.displayMessage?null:e.displayMessage.firstName),s.Cb(6),s.lc("ngIf",null==e.displayMessage?null:e.displayMessage.lastName),s.Cb(6),s.lc("ngIf",null==e.displayMessage?null:e.displayMessage.position),s.Cb(5),s.lc("matAutocomplete",t),s.Cb(3),s.lc("ngForOf",e.imageUrls),s.Cb(7),s.lc("disabled",e.teamForm.invalid||e.isLoading),s.Cb(1),s.lc("ngIf",!e.isLoading),s.Cb(1),s.lc("ngIf",e.isLoading)}},directives:[T.h,y.r,y.m,y.g,k.c,k.f,y.c,N.b,y.l,y.e,a.l,L.c,L.a,a.k,k.b,r.k],styles:["table[_ngcontent-%COMP%]{width:100%}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]}),t})();var $=i("GXuD"),z=i("hrLY"),Q=i("STbY");function V(t,e){1&t&&(s.Tb(0,"th",13),s.Ec(1," No. "),s.Sb())}function K(t,e){if(1&t&&(s.Tb(0,"td",14),s.Ec(1),s.Sb()),2&t){const t=e.$implicit;s.Cb(1),s.Gc(" ",t.content.sn," ")}}function H(t,e){1&t&&(s.Tb(0,"th",13),s.Ec(1," Name "),s.Sb())}function J(t,e){if(1&t&&(s.Tb(0,"td",14),s.Ec(1),s.Sb()),2&t){const t=e.$implicit;s.Cb(1),s.Hc(" ",t.content.firstName," ",t.content.lastName," ")}}function X(t,e){1&t&&(s.Tb(0,"th",13),s.Ec(1," Position "),s.Sb())}function Y(t,e){if(1&t&&(s.Tb(0,"td",14),s.Ec(1),s.Sb()),2&t){const t=e.$implicit;s.Cb(1),s.Gc(" ",t.content.position," ")}}function B(t,e){1&t&&(s.Tb(0,"th",13),s.Ec(1," About "),s.Sb())}function Z(t,e){if(1&t&&(s.Tb(0,"td",14),s.Ec(1),s.Sb()),2&t){const t=e.$implicit;s.Cb(1),s.Gc(" ",t.content.about," ")}}function W(t,e){1&t&&(s.Tb(0,"th",13),s.Ec(1," Action "),s.Sb())}function tt(t,e){if(1&t){const t=s.Ub();s.Tb(0,"td",14),s.Tb(1,"button",15),s.Ob(2,"i",16),s.Sb(),s.Tb(3,"mat-menu",null,17),s.Tb(5,"button",18),s.ac("click",function(){s.uc(t);const i=e.$implicit;return s.ec().edit(i.content.id)}),s.Ob(6,"i",19),s.Ec(7," Edit "),s.Sb(),s.Tb(8,"button",18),s.ac("click",function(){s.uc(t);const i=e.$implicit;return s.ec().socialLink(i.content.id)}),s.Ob(9,"i",19),s.Ec(10," Social links "),s.Sb(),s.Tb(11,"button",18),s.ac("click",function(){s.uc(t);const i=e.$implicit;return s.ec().delete(i.content.id)}),s.Ob(12,"i",20),s.Ec(13," Delete "),s.Sb(),s.Sb(),s.Sb()}if(2&t){const t=s.qc(4);s.Cb(1),s.lc("matMenuTriggerFor",t)}}function et(t,e){1&t&&s.Ob(0,"tr",21)}function it(t,e){1&t&&s.Ob(0,"tr",22)}let at=(()=>{class t{constructor(t,e,i){this.tService=t,this.dialog=e,this.snackbar=i,this.dataSource=new h.k(null),this.displayedColumns=["sn","name","position","about","action"],this.toDestroy$=new c.a,this.selection=new n.c(!0,[])}ngOnInit(){this.tService.getAllTeams().pipe(Object(g.a)(t=>t.map(t=>Object.assign({key:t.payload.key},t.payload.val())))).pipe(Object(S.a)(this.toDestroy$),Object(v.a)(100)).subscribe(t=>{this.dataSource.data=t,this.dataSource._updateChangeSubscription()})}ngAfterViewInit(){}delete(t){this.dialog.open($.a).afterClosed().subscribe(e=>{if(e){const e=this.dataSource.data.find(e=>e.content.id===t);this.tService.deleteTeam(e.key).pipe(Object(v.a)(400)).subscribe(t=>{this.snackbar.openFromComponent(C.a,{data:"Team Deleted Successfully.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"})})}})}edit(t){let e;const i=this.dataSource.data.find(e=>e.content.id===t);e=this.dialog.open(U,{width:"900px",data:i||{},autoFocus:!1}),e.afterClosed().pipe(Object(v.a)(500)).subscribe(t=>{this.dataSource._updateChangeSubscription()})}socialLink(t){let e;const i=this.dataSource.data.find(e=>e.id===t);e=this.dialog.open(F,{width:"900px",data:i||{},autoFocus:!1})}ngOnDestroy(){this.toDestroy$.next(),this.toDestroy$.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(w.a),s.Nb(T.b),s.Nb(x.b))},t.\u0275cmp=s.Hb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&s.Kc(d,!0),2&t){let t;s.pc(t=s.bc())&&(e.sort=t.first)}},decls:24,vars:4,consts:[[2,"background-color","rgb(124, 112, 112)","padding-top","100px","padding-bottom","20px"],[1,"container"],[1,"btn","btn-primary","float-right","m-2",3,"click"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","sn",2,"width","100px"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","position"],["matColumnDef","about"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["type","button",1,"btn","btn-label-info","btn-sm","btn-icon","btn-circle",3,"matMenuTriggerFor"],[1,"fa","fa-align-center"],["menu","matMenu"],["type","button",1,"dropdown-item",3,"click"],[1,"flaticon-edit","kt-font-info","mr-1"],[1,"flaticon-delete","kt-font-danger","mr-1"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"h3"),s.Ec(3,"List of Team"),s.Sb(),s.Tb(4,"button",2),s.ac("click",function(){return e.edit(0)}),s.Ec(5,"Add new"),s.Sb(),s.Tb(6,"table",3),s.Rb(7,4),s.Dc(8,V,2,0,"th",5),s.Dc(9,K,2,1,"td",6),s.Qb(),s.Rb(10,7),s.Dc(11,H,2,0,"th",5),s.Dc(12,J,2,2,"td",6),s.Qb(),s.Rb(13,8),s.Dc(14,X,2,0,"th",5),s.Dc(15,Y,2,1,"td",6),s.Qb(),s.Rb(16,9),s.Dc(17,B,2,0,"th",5),s.Dc(18,Z,2,1,"td",6),s.Qb(),s.Rb(19,10),s.Dc(20,W,2,0,"th",5),s.Dc(21,tt,14,1,"td",6),s.Qb(),s.Dc(22,et,1,0,"tr",11),s.Dc(23,it,1,0,"tr",12),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Cb(6),s.lc("dataSource",e.dataSource)("@collectionInOut",null==e.dataSource.data?null:e.dataSource.data.length),s.Cb(16),s.lc("matHeaderRowDef",e.displayedColumns),s.Cb(1),s.lc("matRowDefColumns",e.displayedColumns))},directives:[h.j,h.c,h.e,h.b,h.g,h.i,h.d,h.a,Q.d,Q.a,h.f,h.h],styles:["table[_ngcontent-%COMP%]{width:100%}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"],data:{animation:[z.d,z.b,z.c,z.a]}}),t})();var nt=i("bSwM"),st=i("d3UM"),ot=i("9YTP"),rt=i("Qu3c");let ct=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[a.c,T.f,rt.b]]}),t})(),lt=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},providers:[w.a],imports:[[a.c,M.d.forChild([{path:"",component:at}]),y.h,y.p,k.e,N.c,T.f,st.b,h.l,nt.b,f,Q.c,x.c,L.b,ot.a,ct]]}),t})()}}]);