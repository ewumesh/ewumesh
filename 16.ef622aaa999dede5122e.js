(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2/Cs":function(t,e,i){"use strict";i.r(e),i.d(e,"TeamModule",function(){return it});var a=i("ofXK"),n=i("R0Ic"),s=i("0EQZ"),o=i("fXoL"),r=i("8LU1"),c=i("FKr1"),l=(i("FtGj"),i("XNiG"));i("VRyK"),i("u47x");class b{}const d=Object(c.r)(Object(c.p)(b));let m=(()=>{class t extends d{constructor(){super(...arguments),this.sortables=new Map,this._stateChanges=new l.a,this.start="asc",this._direction="",this.sortChange=new o.o}get direction(){return this._direction}set direction(t){this._direction=t}get disableClear(){return this._disableClear}set disableClear(t){this._disableClear=Object(r.c)(t)}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return"";let e=function(t,e){let i=["asc","desc"];return"desc"==t&&i.reverse(),e||i.push(""),i}(t.start||this.start,null!=t.disableClear?t.disableClear:this.disableClear),i=e.indexOf(this.direction)+1;return i>=e.length&&(i=0),e[i]}ngOnInit(){this._markInitialized()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return t.\u0275fac=function(e){return u(e||t)},t.\u0275dir=o.Hb({type:t,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"],active:["matSortActive","active"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[o.yb,o.zb]}),t})();const u=o.Ub(m);let p=(()=>{class t{constructor(){this.changes=new l.a,this.sortButtonLabel=t=>"Change sorting for "+t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(o.Ib)({factory:function(){return new t},token:t,providedIn:"root"}),t})();const f={provide:p,deps:[[new o.B,new o.K,p]],useFactory:function(t){return t||new p}};let g=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},providers:[f],imports:[[a.b,c.f]]}),t})();var h=i("+0xr"),S=i("lJxs"),v=i("3E0/"),R=i("t8So"),w=i("0IaG"),y=i("3Pt+"),k=i("szbo"),C=i("kmnG"),x=i("qFsG");function N(t,e){1&t&&(o.Sb(0,"span"),o.xc(1,"LOGIN"),o.Rb())}function j(t,e){1&t&&(o.Sb(0,"span"),o.Nb(1,"i",14),o.Rb())}let M=(()=>{class t{constructor(t,e,i,a){this.fb=t,this.tService=e,this.dialogRef=i,this.data=a,this.isLoading=!1}ngOnInit(){this.initForm()}initForm(){this.sForm=this.fb.group({id:0,facebook:null,instagram:null,twitter:null,linkedin:null})}patchForm(t){this.sForm.patchValue({id:t.id,facebook:t.facebook,twitter:t.twitter,linkedin:t.linkedin,instagram:t.instagram})}ngAfterViewInit(){this.data.id>0&&this.tService.getTeamById(this.data.id).pipe(Object(v.a)(500)).subscribe(t=>{let e=t.links.find(t=>t);this.patchForm(e)})}saveChanges(){let t=this.sForm.value;t.id=this.data.id,this.tService.addLinks(t).pipe().subscribe(t=>{console.log(t)})}cancel(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(y.c),o.Mb(k.a),o.Mb(w.d),o.Mb(w.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["ng-component"]],decls:30,vars:4,consts:[["mat-dialog-title",""],["autocomplete","off",1,"form",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-6"],["appearance","outline",2,"width","100%"],[1,"input_label"],["formControlName","facebook","type","facebook","matInput","","placeholder","Url"],["formControlName","instagram","type","instagram","matInput","","placeholder","Url"],["formControlName","twitter","type","twitter","matInput","","placeholder","Urls"],["formControlName","linkedin","type","linkedin","matInput","","placeholder","Urls"],[1,"text-center"],["type","submit",1,"btn","btn-primary","mr-2",3,"disabled","click"],[4,"ngIf"],[1,"btn","btn-danger","ml-2",3,"click"],[1,"fa","fa-cog","fa-spin",2,"font-size","22px"]],template:function(t,e){1&t&&(o.Sb(0,"h1",0),o.xc(1,"Form"),o.Rb(),o.Sb(2,"form",1),o.Zb("ngSubmit",function(){return e.saveChanges()}),o.Sb(3,"div",2),o.Sb(4,"div",3),o.Sb(5,"mat-form-field",4),o.Sb(6,"mat-label",5),o.xc(7,"Facebook"),o.Rb(),o.Nb(8,"input",6),o.Rb(),o.Rb(),o.Sb(9,"div",3),o.Sb(10,"mat-form-field",4),o.Sb(11,"mat-label",5),o.xc(12,"Instagram"),o.Rb(),o.Nb(13,"input",7),o.Rb(),o.Rb(),o.Sb(14,"div",3),o.Sb(15,"mat-form-field",4),o.Sb(16,"mat-label",5),o.xc(17,"Twitter"),o.Rb(),o.Nb(18,"input",8),o.Rb(),o.Rb(),o.Sb(19,"div",3),o.Sb(20,"mat-form-field",4),o.Sb(21,"mat-label",5),o.xc(22,"Linkedin"),o.Rb(),o.Nb(23,"input",9),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(24,"div",10),o.Sb(25,"button",11),o.Zb("click",function(){return e.saveChanges()}),o.wc(26,N,2,0,"span",12),o.wc(27,j,2,0,"span",12),o.Rb(),o.Sb(28,"button",13),o.Zb("click",function(){return e.cancel()}),o.xc(29,"Cancel"),o.Rb(),o.Rb()),2&t&&(o.Bb(2),o.ic("formGroup",e.sForm),o.Bb(23),o.ic("disabled",e.sForm.invalid||e.isLoading),o.Bb(1),o.ic("ngIf",!e.isLoading),o.Bb(1),o.ic("ngIf",e.isLoading))},directives:[w.e,y.p,y.l,y.f,C.c,C.f,y.b,x.a,y.k,y.d,a.j],styles:["table[_ngcontent-%COMP%]{width:100%}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]}),t})();var F=i("9Q/d"),I=i("tyNb"),O=i("dNgK"),B=i("/1cH");function P(t,e){if(1&t&&(o.Sb(0,"mat-error",19),o.xc(1),o.Rb()),2&t){const t=o.dc();o.Bb(1),o.yc(null==t.displayMessage?null:t.displayMessage.firstName)}}function T(t,e){if(1&t&&(o.Sb(0,"mat-error",19),o.xc(1),o.Rb()),2&t){const t=o.dc();o.Bb(1),o.yc(null==t.displayMessage?null:t.displayMessage.lastName)}}function D(t,e){if(1&t&&(o.Sb(0,"mat-error",19),o.xc(1),o.Rb()),2&t){const t=o.dc();o.Bb(1),o.yc(null==t.displayMessage?null:t.displayMessage.position)}}function _(t,e){if(1&t&&(o.Sb(0,"mat-option",20),o.xc(1),o.Rb()),2&t){const t=e.$implicit;o.ic("value",t.value),o.Bb(1),o.zc(" ",t.value," ")}}function L(t,e){1&t&&(o.Sb(0,"span"),o.xc(1,"Save"),o.Rb())}function A(t,e){1&t&&(o.Sb(0,"span"),o.Nb(1,"i",21),o.Rb())}let q=(()=>{class t{constructor(t,e,i,a,n,s,o){this.fb=t,this.router=e,this.tService=i,this.dialog=a,this.snackbar=n,this.dialogRef=s,this.data=o,this.displayMessage={},this.isLoading=!1,this.imageUrls=[{id:1,value:"assets/images/umesh.jpg"},{id:2,value:"assets/images/pujan.jpg"},{id:3,value:"assets/images/bijen-1.jpg"},{id:4,value:"assets/images/dharmendra.jpg"},{id:5,value:"assets/images/deepika.jpg"},{id:6,value:"assets/images/kanchan-1.jpg"},{id:7,value:"assets/images/prajwol.jpg"},{id:8,value:"assets/images/sagar.jpg"},{id:9,value:"assets/images/suren.jpg"},{id:10,value:"assets/images/saraswoti.jpg"},{id:11,value:"assets/images/team-1.jpg"},{id:12,value:"assets/images/team-2.jpg"},{id:13,value:"assets/images/team-4.jpg"},{id:14,value:"assets/images/team-3.jpg"},{id:15,value:"assets/images/rabin.jpg"},{id:18,value:"assets/images/aadarsa.jpg"}],this.genericValidator=new F.a({firstName:{required:"This field is required."},lastName:{required:"This field is required."},position:{required:"This field is required."},about:{required:"This field is required."},imgUrl:{required:"This field is required."}})}ngOnInit(){this.initForm(),this.data.key&&this.tService.getAllTeams().pipe(Object(S.a)(t=>t.map(t=>Object.assign({key:t.payload.key},t.payload.val())))).subscribe(t=>{this.teamData=t;let e=t.find(t=>t.key===this.data.key);this.patchForm(e.content)})}initForm(){this.teamForm=this.fb.group({id:0,firstName:[null,y.o.required],lastName:[null,y.o.required],position:[null,y.o.required],about:[null,y.o.required],imgUrl:[null,y.o.required]})}patchForm(t){this.teamForm.patchValue({id:t.id,firstName:t.firstName,lastName:t.lastName,position:t.position,about:t.about,imgUrl:t.imgUrl})}validation(){this.genericValidator.initValidationProcess(this.teamForm,this.formInputElements).subscribe({next:t=>this.displayMessage=t})}saveChanges(){if(this.data.key){let t={};t.id=this.data.content.id,t.sn=this.data.content.sn,this.tService.updateTeam(this.data.key,this.teamForm.value,t).pipe(Object(v.a)(400)).subscribe(t=>{this.dialogRef.close(),this.snackbar.openFromComponent(R.a,{data:"Team Updated Successfully.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"})})}else this.tService.addTeam(this.teamForm.value).pipe(Object(v.a)(400)).subscribe(t=>{this.snackbar.openFromComponent(R.a,{data:"Team Added Successfully.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"}),this.dialogRef.close()})}cancel(){this.dialogRef.close()}ngAfterViewInit(){this.validation()}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(y.c),o.Mb(I.a),o.Mb(k.a),o.Mb(w.b),o.Mb(O.b),o.Mb(w.d),o.Mb(w.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&o.Cc(y.d,!0,o.l),2&t){let t;o.lc(t=o.ac())&&(e.formInputElements=t)}},decls:41,vars:9,consts:[["mat-dialog-title",""],["autocomplete","off",1,"form",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-6"],["appearance","outline",2,"width","100%"],[1,"input_label"],["formControlName","firstName","type","firstName","matInput","","placeholder","Enter First name"],["class","text-danger",4,"ngIf"],["formControlName","lastName","type","lastName","matInput","","placeholder","Enter last name"],["formControlName","position","type","position","matInput","","placeholder","Enter Position"],["type","text","placeholder","Select or Enter Urls(https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)","aria-label","Number","matInput","","formControlName","imgUrl",3,"matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-12"],["formControlName","about","matInput","","placeholder",""],[1,"text-center"],["type","submit",1,"btn","btn-primary","mr-2",3,"disabled","click"],[4,"ngIf"],[1,"btn","btn-danger","ml-2",3,"click"],[1,"text-danger"],[3,"value"],[1,"fa","fa-cog","fa-spin",2,"font-size","22px"]],template:function(t,e){if(1&t&&(o.Sb(0,"h1",0),o.xc(1,"Form"),o.Rb(),o.Sb(2,"form",1),o.Zb("ngSubmit",function(){return e.saveChanges()}),o.Sb(3,"div",2),o.Sb(4,"div",3),o.Sb(5,"mat-form-field",4),o.Sb(6,"mat-label",5),o.xc(7,"First Name"),o.Rb(),o.Nb(8,"input",6),o.wc(9,P,2,1,"mat-error",7),o.Rb(),o.Rb(),o.Sb(10,"div",3),o.Sb(11,"mat-form-field",4),o.Sb(12,"mat-label",5),o.xc(13,"Last Name"),o.Rb(),o.Nb(14,"input",8),o.wc(15,T,2,1,"mat-error",7),o.Rb(),o.Rb(),o.Sb(16,"div",3),o.Sb(17,"mat-form-field",4),o.Sb(18,"mat-label",5),o.xc(19,"Position"),o.Rb(),o.Nb(20,"input",9),o.wc(21,D,2,1,"mat-error",7),o.Rb(),o.Rb(),o.Sb(22,"div",3),o.Sb(23,"mat-form-field",4),o.Sb(24,"mat-label"),o.xc(25,"Image"),o.Rb(),o.Nb(26,"input",10),o.Sb(27,"mat-autocomplete",null,11),o.wc(29,_,2,2,"mat-option",12),o.Rb(),o.Rb(),o.Rb(),o.Sb(30,"div",13),o.Sb(31,"mat-form-field",4),o.Sb(32,"mat-label",5),o.xc(33,"About"),o.Rb(),o.Nb(34,"textarea",14),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(35,"div",15),o.Sb(36,"button",16),o.Zb("click",function(){return e.saveChanges()}),o.wc(37,L,2,0,"span",17),o.wc(38,A,2,0,"span",17),o.Rb(),o.Sb(39,"button",18),o.Zb("click",function(){return e.cancel()}),o.xc(40,"Cancel"),o.Rb(),o.Rb()),2&t){const t=o.mc(28);o.Bb(2),o.ic("formGroup",e.teamForm),o.Bb(7),o.ic("ngIf",null==e.displayMessage?null:e.displayMessage.firstName),o.Bb(6),o.ic("ngIf",null==e.displayMessage?null:e.displayMessage.lastName),o.Bb(6),o.ic("ngIf",null==e.displayMessage?null:e.displayMessage.position),o.Bb(5),o.ic("matAutocomplete",t),o.Bb(3),o.ic("ngForOf",e.imageUrls),o.Bb(7),o.ic("disabled",e.teamForm.invalid||e.isLoading),o.Bb(1),o.ic("ngIf",!e.isLoading),o.Bb(1),o.ic("ngIf",e.isLoading)}},directives:[w.e,y.p,y.l,y.f,C.c,C.f,y.b,x.a,y.k,y.d,a.j,B.c,B.a,a.i,C.b,c.g],styles:["table[_ngcontent-%COMP%]{width:100%}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]}),t})();var U=i("STbY");function z(t,e){1&t&&(o.Sb(0,"th",13),o.xc(1," No. "),o.Rb())}function G(t,e){if(1&t&&(o.Sb(0,"td",14),o.xc(1),o.Rb()),2&t){const t=e.$implicit;o.Bb(1),o.zc(" ",t.content.sn," ")}}function Z(t,e){1&t&&(o.Sb(0,"th",13),o.xc(1," Name "),o.Rb())}function E(t,e){if(1&t&&(o.Sb(0,"td",14),o.xc(1),o.Rb()),2&t){const t=e.$implicit;o.Bb(1),o.Ac(" ",t.content.firstName," ",t.content.lastName," ")}}function Q(t,e){1&t&&(o.Sb(0,"th",13),o.xc(1," Position "),o.Rb())}function V(t,e){if(1&t&&(o.Sb(0,"td",14),o.xc(1),o.Rb()),2&t){const t=e.$implicit;o.Bb(1),o.zc(" ",t.content.position," ")}}function $(t,e){1&t&&(o.Sb(0,"th",13),o.xc(1," About "),o.Rb())}function K(t,e){if(1&t&&(o.Sb(0,"td",14),o.xc(1),o.Rb()),2&t){const t=e.$implicit;o.Bb(1),o.zc(" ",t.content.about," ")}}function H(t,e){1&t&&(o.Sb(0,"th",13),o.xc(1," Action "),o.Rb())}function J(t,e){if(1&t){const t=o.Tb();o.Sb(0,"td",14),o.Sb(1,"button",15),o.Nb(2,"i",16),o.Rb(),o.Sb(3,"mat-menu",null,17),o.Sb(5,"button",18),o.Zb("click",function(){o.oc(t);const i=e.$implicit;return o.dc().edit(i.content.id)}),o.Nb(6,"i",19),o.xc(7," Edit "),o.Rb(),o.Sb(8,"button",18),o.Zb("click",function(){o.oc(t);const i=e.$implicit;return o.dc().socialLink(i.content.id)}),o.Nb(9,"i",19),o.xc(10," Social links "),o.Rb(),o.Sb(11,"button",18),o.Zb("click",function(){o.oc(t);const i=e.$implicit;return o.dc().delete(i.content.id)}),o.Nb(12,"i",20),o.xc(13," Delete "),o.Rb(),o.Rb(),o.Rb()}if(2&t){const t=o.mc(4);o.Bb(1),o.ic("matMenuTriggerFor",t)}}function X(t,e){1&t&&o.Nb(0,"tr",21)}function Y(t,e){if(1&t){const t=o.Tb();o.Sb(0,"tr",22),o.Zb("click",function(){o.oc(t);const i=e.$implicit;return o.dc().selection.toggle(i)}),o.Rb()}}let W=(()=>{class t{constructor(t,e,i){this.tService=t,this.dialog=e,this.snackbar=i,this.dataSource=new h.k(null),this.displayedColumns=["sn","name","position","about","action"],this.selection=new s.c(!0,[])}ngOnInit(){this.tService.getAllTeams().pipe(Object(S.a)(t=>t.map(t=>Object.assign({key:t.payload.key},t.payload.val())))).subscribe(t=>{this.dataSource.data=t})}ngAfterViewInit(){}delete(t){const e=this.dataSource.data.find(e=>e.content.id===t);this.tService.deleteTeam(e.key).pipe(Object(v.a)(400)).subscribe(t=>{this.snackbar.openFromComponent(R.a,{data:"Team Deleted Successfully.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"})})}edit(t){let e;const i=this.dataSource.data.find(e=>e.content.id===t);e=this.dialog.open(q,{width:"900px",data:i||{},autoFocus:!1}),e.afterClosed().pipe(Object(v.a)(500)).subscribe(t=>{this.dataSource._updateChangeSubscription()})}socialLink(t){let e;const i=this.dataSource.data.find(e=>e.id===t);e=this.dialog.open(M,{width:"900px",data:i||{},autoFocus:!1})}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(k.a),o.Mb(w.b),o.Mb(O.b))},t.\u0275cmp=o.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&o.Cc(m,!0),2&t){let t;o.lc(t=o.ac())&&(e.sort=t.first)}},decls:24,vars:3,consts:[[2,"background-color","rgb(124, 112, 112)","padding-top","100px","padding-bottom","20px"],[1,"container"],[1,"btn","btn-primary","float-right","m-2",3,"click"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","sn",2,"width","100px"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","position"],["matColumnDef","about"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["type","button",1,"btn","btn-label-info","btn-sm","btn-icon","btn-circle",3,"matMenuTriggerFor"],[1,"fa","fa-align-center"],["menu","matMenu"],["type","button",1,"dropdown-item",3,"click"],[1,"flaticon-edit","kt-font-info","mr-1"],[1,"flaticon-delete","kt-font-danger","mr-1"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"h3"),o.xc(3,"List of Team"),o.Rb(),o.Sb(4,"button",2),o.Zb("click",function(){return e.edit(0)}),o.xc(5,"Add new"),o.Rb(),o.Sb(6,"table",3),o.Qb(7,4),o.wc(8,z,2,0,"th",5),o.wc(9,G,2,1,"td",6),o.Pb(),o.Qb(10,7),o.wc(11,Z,2,0,"th",5),o.wc(12,E,2,2,"td",6),o.Pb(),o.Qb(13,8),o.wc(14,Q,2,0,"th",5),o.wc(15,V,2,1,"td",6),o.Pb(),o.Qb(16,9),o.wc(17,$,2,0,"th",5),o.wc(18,K,2,1,"td",6),o.Pb(),o.Qb(19,10),o.wc(20,H,2,0,"th",5),o.wc(21,J,14,1,"td",6),o.Pb(),o.wc(22,X,1,0,"tr",11),o.wc(23,Y,1,0,"tr",12),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.Bb(6),o.ic("dataSource",e.dataSource),o.Bb(16),o.ic("matHeaderRowDef",e.displayedColumns),o.Bb(1),o.ic("matRowDefColumns",e.displayedColumns))},directives:[h.j,h.c,h.e,h.b,h.g,h.i,h.d,h.a,U.c,U.a,h.f,h.h],styles:["table[_ngcontent-%COMP%]{width:100%}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"],data:{animation:[Object(n.m)("detailExpand",[Object(n.j)("collapsed",Object(n.k)({height:"0px",minHeight:"0"})),Object(n.j)("expanded",Object(n.k)({height:"*"})),Object(n.l)("expanded <=> collapsed",Object(n.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),t})();var tt=i("bSwM"),et=i("d3UM");let it=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},providers:[k.a],imports:[[a.b,I.c.forChild([{path:"",component:W}]),y.g,y.n,C.e,x.b,w.c,et.a,h.l,tt.b,g,U.b,O.c,B.b]]}),t})()}}]);