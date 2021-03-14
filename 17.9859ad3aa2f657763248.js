(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{GCxG:function(t,e,o){"use strict";o.r(e),o.d(e,"LoginModule",function(){return M});var i=o("ofXK"),n=o("tyNb"),r=o("3Pt+"),s=o("Wp6s"),a=o("qFsG"),l=o("kmnG"),c=o("0IaG"),d=o("dNgK"),b=o("bSwM"),p=o("NFeN"),g=o("fXoL"),u=o("lJxs"),m=o("9Q/d"),f=o("xCwu");function h(t,e){if(1&t&&(g.Tb(0,"mat-error",12),g.Ec(1),g.Sb()),2&t){const t=g.ec();g.Cb(1),g.Fc(null==t.displayMessage?null:t.displayMessage.email)}}let w=(()=>{class t{constructor(t,e,o){this.fb=t,this.snackbar=e,this.dialogRef=o,this.displayMessage={},this.genericValidator=new m.a({email:{required:"This field is required.",pattern:"Please enter valid email address"}})}ngOnInit(){this.initForm()}initForm(){this.forgotPasswordForm=this.fb.group({id:0,email:[null,[r.q.required,r.q.pattern(f.a.emailRegex)]]})}ngAfterViewInit(){this.validation()}validation(){this.genericValidator.initValidationProcess(this.forgotPasswordForm,this.formInputElements).subscribe({next:t=>this.displayMessage=t})}sumbit(){setTimeout(()=>{this.dialogRef.close(),this.snackbar.open("Please check your email.","Close",{duration:1e3,horizontalPosition:"right",verticalPosition:"top"})},1500)}cancel(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(g.Nb(r.d),g.Nb(d.b),g.Nb(c.g))},t.\u0275cmp=g.Hb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&g.Kc(r.e,!0,g.l),2&t){let t;g.pc(t=g.bc())&&(e.formInputElements=t)}},decls:18,vars:3,consts:[[1,"row","p-3"],[1,"col-md-12","text-center"],[2,"font-size","13px"],["autocomplete","off",1,"pt-4",3,"formGroup","ngSubmit"],[1,"login_field","pb-3",2,"width","90%"],[1,"input_label"],["formControlName","email","type","email","matInput","","placeholder","Enter your email"],["class","font-danger",4,"ngIf"],[1,"row"],[1,"col-md-12"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-danger","ml-3",3,"click"],[1,"font-danger"]],template:function(t,e){1&t&&(g.Tb(0,"div",0),g.Tb(1,"div",1),g.Tb(2,"h3"),g.Ec(3," Forgot Your Password?"),g.Sb(),g.Tb(4,"p",2),g.Ec(5,"Don't worry! Just fill in your email and we will send you a link to reset your password."),g.Sb(),g.Tb(6,"form",3),g.ac("ngSubmit",function(){return e.sumbit()}),g.Tb(7,"mat-form-field",4),g.Tb(8,"mat-label",5),g.Ec(9,"Email"),g.Sb(),g.Ob(10,"input",6),g.Dc(11,h,2,1,"mat-error",7),g.Sb(),g.Tb(12,"div",8),g.Tb(13,"div",9),g.Tb(14,"button",10),g.Ec(15,"Submit"),g.Sb(),g.Tb(16,"button",11),g.ac("click",function(){return e.cancel()}),g.Ec(17,"Cancel"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb()),2&t&&(g.Cb(6),g.lc("formGroup",e.forgotPasswordForm),g.Cb(5),g.lc("ngIf",null==e.displayMessage?null:e.displayMessage.email),g.Cb(3),g.lc("disabled",e.forgotPasswordForm.invalid))},directives:[r.r,r.m,r.g,l.c,l.f,r.c,a.b,r.l,r.e,i.l,l.b],styles:[""]}),t})();var v=o("t8So"),x=o("XNiG"),y=o("TcFV"),_=o("sSZD");function S(t,e){if(1&t&&(g.Tb(0,"mat-error",27),g.Ec(1),g.Sb()),2&t){const t=g.ec();g.Cb(1),g.Fc(null==t.displayMessage?null:t.displayMessage.userName)}}function C(t,e){if(1&t&&(g.Tb(0,"mat-error",27),g.Ec(1),g.Sb()),2&t){const t=g.ec();g.Cb(1),g.Fc(null==t.displayMessage?null:t.displayMessage.password)}}function T(t,e){1&t&&(g.Tb(0,"span"),g.Ec(1,"LOGIN"),g.Sb())}function P(t,e){1&t&&(g.Tb(0,"div",28),g.Ob(1,"div"),g.Ob(2,"div"),g.Sb())}let O=(()=>{class t{constructor(t,e,o,i,n,r){this.fb=t,this.dialog=e,this.router=o,this.snackbarService=i,this.authService=n,this.db=r,this.toDestroy$=new x.a,this.horizontalPosition="right",this.verticalPosition="top",this.isLoading=!1,this.users=[],this.hide=!0,this.displayMessage={},this.genericValidator=new m.a({userName:{required:"This field is required."},password:{required:"This field is required."}})}ngOnInit(){this.initForm(),this.getListOfUsers()}getListOfUsers(){this.authService.getAllUsers().pipe(Object(u.a)(t=>t.map(t=>Object.assign({key:t.payload.key},t.payload.val())))).subscribe(t=>{this.users=t})}initForm(){this.loginForm=this.fb.group({id:0,userName:[null,r.q.required],password:[null,r.q.required]})}ngAfterViewInit(){this.validation()}validation(){this.genericValidator.initValidationProcess(this.loginForm,this.formInputElements).subscribe({next:t=>this.displayMessage=t})}saveChanges(){this.isLoading=!0;let t=this.users.find(t=>t.content.email===this.loginForm.value.userName&&t.content.password===this.loginForm.value.password);void 0!==t?setTimeout(()=>{this.snackbarService.openFromComponent(v.a,{data:"User Login Successfully.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"}),this.authService.currentUser=!0,this.authService.logged=t.key,localStorage.setItem("logged",JSON.stringify(t)),this.router.navigate(["profile"]),setTimeout(()=>{window.location.reload()},600)},400):setTimeout(()=>{this.snackbarService.openFromComponent(v.a,{data:"Login username or password incorrect.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"}),this.isLoading=!1},400)}forgotPassword(){this.dialog.open(w,{height:"330px",width:"530px"})}signUp(){setTimeout(()=>{this.router.navigate(["/register"])},400)}ngOnDestroy(){this.toDestroy$.next(),this.toDestroy$.complete()}}return t.\u0275fac=function(e){return new(e||t)(g.Nb(r.d),g.Nb(c.b),g.Nb(n.b),g.Nb(d.b),g.Nb(y.a),g.Nb(_.a))},t.\u0275cmp=g.Hb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&g.Kc(r.e,!0,g.l),2&t){let t;g.pc(t=g.bc())&&(e.formInputElements=t)}},decls:41,vars:10,consts:[["id","home",1,"login_page","pb-4"],[1,"row","m_o"],[1,"col-md-4"],[1,"login_card"],[1,"text-center"],["src","assets/logo/e-logo.png",1,"login_img"],[1,"row"],[1,"col-md-12","text-center","login_form"],["autocomplete","off",1,"example-form",3,"formGroup","ngSubmit"],[1,"login_field"],[1,"input_label"],["formControlName","userName","type","email","matInput","","placeholder","Enter username"],["class","font-danger",4,"ngIf"],["formControlName","password","type","password","matInput","","placeholder","Enter Your Password",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],[1,"row","pt-3"],[1,"col-md-6","text-left","pl-4"],[1,"m_checkbox"],[1,"col-md-6","text-left","login_card_footer"],["href","Javascript:;",1,"forgot_password",3,"click"],[1,"col-md","12","text-center","pt-3"],[1,"login_btn","login_btn-5",3,"disabled"],[4,"ngIf"],["class","spinner",4,"ngIf"],[1,"col-md-12","text-center","pt-4"],[1,"f_text"],["id","reg","href","Javascript:;",3,"click"],[1,"font-danger"],[1,"spinner"]],template:function(t,e){1&t&&(g.Tb(0,"header",0),g.Tb(1,"div",1),g.Ob(2,"div",2),g.Tb(3,"div",2),g.Tb(4,"mat-card",3),g.Tb(5,"div",4),g.Ob(6,"img",5),g.Sb(),g.Tb(7,"div",6),g.Tb(8,"div",7),g.Tb(9,"form",8),g.ac("ngSubmit",function(){return e.saveChanges()}),g.Tb(10,"mat-form-field",9),g.Tb(11,"mat-label",10),g.Ec(12,"Username"),g.Sb(),g.Ob(13,"input",11),g.Dc(14,S,2,1,"mat-error",12),g.Sb(),g.Tb(15,"mat-form-field",9),g.Tb(16,"mat-label",10),g.Ec(17,"Password"),g.Sb(),g.Ob(18,"input",13),g.Tb(19,"span",14),g.ac("click",function(){return e.hide=!e.hide}),g.Tb(20,"mat-icon"),g.Ec(21),g.Sb(),g.Sb(),g.Dc(22,C,2,1,"mat-error",12),g.Sb(),g.Tb(23,"div",15),g.Tb(24,"div",16),g.Tb(25,"mat-checkbox",17),g.Ec(26," Remember me"),g.Sb(),g.Sb(),g.Tb(27,"div",18),g.Tb(28,"a",19),g.ac("click",function(){return e.forgotPassword()}),g.Ec(29," Forgot password ?"),g.Sb(),g.Sb(),g.Sb(),g.Tb(30,"div",6),g.Tb(31,"div",20),g.Tb(32,"button",21),g.Dc(33,T,2,0,"span",22),g.Dc(34,P,3,0,"div",23),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(35,"div",24),g.Tb(36,"p",25),g.Ec(37,"Don't have an account? "),g.Tb(38,"a",26),g.ac("click",function(){return e.signUp()}),g.Ec(39,"Register"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Ob(40,"div",2),g.Sb(),g.Sb()),2&t&&(g.Cb(9),g.lc("formGroup",e.loginForm),g.Cb(5),g.lc("ngIf",null==e.displayMessage?null:e.displayMessage.userName),g.Cb(4),g.lc("type",e.hide?"password":"text"),g.Cb(1),g.Db("aria-label","Hide password")("aria-pressed",e.hide),g.Cb(2),g.Fc(e.hide?"visibility_off":"visibility"),g.Cb(1),g.lc("ngIf",null==e.displayMessage?null:e.displayMessage.password),g.Cb(10),g.lc("disabled",e.loginForm.invalid||e.isLoading),g.Cb(1),g.lc("ngIf",!e.isLoading),g.Cb(1),g.lc("ngIf",e.isLoading))},directives:[s.a,r.r,r.m,r.g,l.c,l.f,r.c,a.b,r.l,r.e,i.l,l.g,p.a,b.a,l.b],styles:[".login_card[_ngcontent-%COMP%]{background-color:#343a40!important;background-repeat:no-repeat;justify-content:center;background-size:cover}.login_img[_ngcontent-%COMP%]{height:120px;border-radius:100%}.img[_ngcontent-%COMP%]{height:100px;margin:0;background-repeat:no-repeat;justify-content:center;background-image:url(e-logo.8ee22f6cab3aad6d7b87.png)}.login_form[_ngcontent-%COMP%]{padding:30px 50px 0!important}.login_field[_ngcontent-%COMP%]{width:90%}.login_card_footer[_ngcontent-%COMP%]{padding-left:33px}.login_page[_ngcontent-%COMP%]{padding-top:100px;min-height:105vh;background:url(https://image.freepik.com/free-photo/shiny-lights_385-19321244.jpg);background-size:cover}.login_btn[_ngcontent-%COMP%]{color:#000;cursor:pointer;display:block;font-size:16px;font-weight:400;line-height:45px;max-width:160px;margin:0 auto 2em;position:relative;text-transform:uppercase;vertical-align:middle;width:100%}.login_btn-5[_ngcontent-%COMP%]{border:0 solid;box-shadow:inset 0 0 20px hsla(0,0%,100%,0);outline:1px solid;outline-color:hsla(0,0%,100%,0);text-shadow:none;transition:all 1.25s cubic-bezier(.19,1,.22,1);outline-color:hsla(0,0%,100%,.5);outline-offset:0}.login_btn-5[_ngcontent-%COMP%]:hover{border:1px solid;box-shadow:inset 0 0 20px hsla(0,0%,100%,.5),0 0 20px hsla(0,0%,100%,.2);outline-offset:15px;outline-color:hsla(0,0%,100%,0);text-shadow:1px 1px 2px #427388}.forgot_password[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-style:italic;font-family:serif}.forgot_password[_ngcontent-%COMP%]:hover{text-decoration:none;transition:color .8s ease-in;color:#00e676}.input_label[_ngcontent-%COMP%]{color:#fff}.m_o[_ngcontent-%COMP%]{margin:0!important}.m_checkbox[_ngcontent-%COMP%]{font-size:12px!important;color:#fff}.f_text[_ngcontent-%COMP%]{color:#fff}#reg[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#0272f1!important}#reg[_ngcontent-%COMP%]:hover, #reg[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none}#reg[_ngcontent-%COMP%]:hover{color:#00e676!important;transition:color .8s ease-in-out}.spinner[_ngcontent-%COMP%]{padding:0 auto;width:40px;height:40px;position:relative}.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-left:50px;position:absolute;width:100%;height:100%;border:10px solid transparent;border-top-color:#00e676;border-radius:50%;animation:spinnerOne 1.2s linear infinite}.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){border:10px solid transparent;border-bottom-color:#00e676;animation:spinnerTwo 1.2s linear infinite}@keyframes spinnerOne{0%{transform:rotate(0deg);border-width:10px}50%{transform:rotate(180deg);border-width:1px}to{transform:rotate(1turn);border-width:10px}}@keyframes spinnerTwo{0%{transform:rotate(0deg);border-width:1px}50%{transform:rotate(180deg);border-width:10px}to{transform:rotate(1turn);border-width:1px}}"]}),t})(),M=(()=>{class t{}return t.\u0275mod=g.Lb({type:t}),t.\u0275inj=g.Kb({factory:function(e){return new(e||t)},imports:[[i.c,n.d.forChild([{path:"",component:O}]),s.b,r.h,r.p,l.e,a.c,c.f,d.c,b.b,p.b]]}),t})()}}]);