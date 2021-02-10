(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{GCxG:function(t,o,e){"use strict";e.r(o),e.d(o,"LoginModule",function(){return R});var n=e("ofXK"),i=e("tyNb"),r=e("3Pt+"),a=e("Wp6s"),s=e("qFsG"),l=e("kmnG"),c=e("0IaG"),b=e("dNgK"),d=e("bSwM"),g=e("fXoL"),u=e("9Q/d"),p=e("xCwu");function f(t,o){if(1&t&&(g.Rb(0,"mat-error",12),g.uc(1),g.Qb()),2&t){const t=g.cc();g.Ab(1),g.vc(null==t.displayMessage?null:t.displayMessage.email)}}let m=(()=>{class t{constructor(t,o,e){this.fb=t,this.snackbar=o,this.dialogRef=e,this.displayMessage={},this.genericValidator=new u.a({email:{required:"This field is required.",pattern:"Please enter valid email address"}})}ngOnInit(){this.initForm()}initForm(){this.forgotPasswordForm=this.fb.group({id:0,email:[null,[r.o.required,r.o.pattern(p.a.emailRegex)]]})}ngAfterViewInit(){this.validation()}validation(){this.genericValidator.initValidationProcess(this.forgotPasswordForm,this.formInputElements).subscribe({next:t=>this.displayMessage=t})}sumbit(){setTimeout(()=>{this.dialogRef.close(),this.snackbar.open("Please check your email.","Close",{duration:1e3,horizontalPosition:"right",verticalPosition:"top"})},1500)}cancel(){this.dialogRef.close()}}return t.\u0275fac=function(o){return new(o||t)(g.Lb(r.c),g.Lb(b.b),g.Lb(c.d))},t.\u0275cmp=g.Fb({type:t,selectors:[["ng-component"]],viewQuery:function(t,o){if(1&t&&g.zc(r.d,!0,g.l),2&t){let t;g.ic(t=g.Zb())&&(o.formInputElements=t)}},decls:18,vars:3,consts:[[1,"row","p-3"],[1,"col-md-12","text-center"],[2,"font-size","13px"],["autocomplete","off",1,"pt-4",3,"formGroup","ngSubmit"],[1,"login_field","pb-3",2,"width","90%"],[1,"input_label"],["formControlName","email","type","email","matInput","","placeholder","Enter your email"],["class","font-danger",4,"ngIf"],[1,"row"],[1,"col-md-12"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-danger","ml-3",3,"click"],[1,"font-danger"]],template:function(t,o){1&t&&(g.Rb(0,"div",0),g.Rb(1,"div",1),g.Rb(2,"h3"),g.uc(3," Forgot Your Password?"),g.Qb(),g.Rb(4,"p",2),g.uc(5,"Don't worry! Just fill in your email and we will send you a link to reset your password."),g.Qb(),g.Rb(6,"form",3),g.Yb("ngSubmit",function(){return o.sumbit()}),g.Rb(7,"mat-form-field",4),g.Rb(8,"mat-label",5),g.uc(9,"Email"),g.Qb(),g.Mb(10,"input",6),g.tc(11,f,2,1,"mat-error",7),g.Qb(),g.Rb(12,"div",8),g.Rb(13,"div",9),g.Rb(14,"button",10),g.uc(15,"Submit"),g.Qb(),g.Rb(16,"button",11),g.Yb("click",function(){return o.cancel()}),g.uc(17,"Cancel"),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb()),2&t&&(g.Ab(6),g.fc("formGroup",o.forgotPasswordForm),g.Ab(5),g.fc("ngIf",null==o.displayMessage?null:o.displayMessage.email),g.Ab(3),g.fc("disabled",o.forgotPasswordForm.invalid))},directives:[r.p,r.l,r.f,l.c,l.f,r.b,s.a,r.k,r.d,n.j,l.b],styles:[""]}),t})();var h=e("t8So"),v=e("TcFV");function w(t,o){if(1&t&&(g.Rb(0,"mat-error",25),g.uc(1),g.Qb()),2&t){const t=g.cc();g.Ab(1),g.vc(null==t.displayMessage?null:t.displayMessage.userName)}}function _(t,o){if(1&t&&(g.Rb(0,"mat-error",25),g.uc(1),g.Qb()),2&t){const t=g.cc();g.Ab(1),g.vc(null==t.displayMessage?null:t.displayMessage.password)}}function x(t,o){1&t&&(g.Rb(0,"span"),g.uc(1,"LOGIN"),g.Qb())}function M(t,o){1&t&&(g.Rb(0,"span"),g.Mb(1,"i",26),g.Qb())}let y=(()=>{class t{constructor(t,o,e,n,i){this.fb=t,this.dialog=o,this.router=e,this.snackbarService=n,this.authService=i,this.horizontalPosition="right",this.verticalPosition="top",this.isLoading=!1,this.displayMessage={},this.genericValidator=new u.a({userName:{required:"This field is required."},password:{required:"This field is required."}})}ngOnInit(){this.initForm()}initForm(){this.loginForm=this.fb.group({id:0,userName:[null,r.o.required],password:[null,r.o.required]})}ngAfterViewInit(){this.validation()}validation(){this.genericValidator.initValidationProcess(this.loginForm,this.formInputElements).subscribe({next:t=>this.displayMessage=t})}saveChanges(){this.isLoading=!0,this.authService.getUserDetail(this.loginForm.value).subscribe(t=>{setTimeout(()=>{void 0!==t?(this.snackbarService.openFromComponent(h.a,{data:"User Login Successfully.",duration:1e4,verticalPosition:"top",horizontalPosition:"right"}),this.isLoading=!1,this.router.navigate(["/profile"])):(this.snackbarService.openFromComponent(h.a,{data:"You entered username and password not matched.",duration:1e4,verticalPosition:"top",horizontalPosition:"right"}),this.isLoading=!1)},1e3)})}forgotPassword(){this.dialog.open(m,{height:"330px",width:"530px"})}signUp(){setTimeout(()=>{this.router.navigate(["/register"])},400)}}return t.\u0275fac=function(o){return new(o||t)(g.Lb(r.c),g.Lb(c.b),g.Lb(i.a),g.Lb(b.b),g.Lb(v.a))},t.\u0275cmp=g.Fb({type:t,selectors:[["ng-component"]],viewQuery:function(t,o){if(1&t&&g.zc(r.d,!0,g.l),2&t){let t;g.ic(t=g.Zb())&&(o.formInputElements=t)}},decls:38,vars:6,consts:[["id","home",1,"login_page","pb-4"],[1,"row","m_o"],[1,"col-md-4"],[1,"login_card"],[1,"text-center"],["src","assets/logo/e-logo.png",1,"login_img"],[1,"row"],[1,"col-md-12","text-center","login_form"],["autocomplete","off",1,"example-form",3,"formGroup","ngSubmit"],[1,"login_field"],[1,"input_label"],["formControlName","userName","type","email","matInput","","placeholder","Enter username"],["class","font-danger",4,"ngIf"],["formControlName","password","type","password","matInput","","placeholder","Enter Your Password"],[1,"row","pt-3"],[1,"col-md-6","text-left","pl-4"],[1,"m_checkbox"],[1,"col-md-6","text-left","login_card_footer"],["href","Javascript:;",1,"forgot_password",3,"click"],[1,"col-md","12","text-center","pt-3"],[1,"login_btn","login_btn-5",3,"disabled"],[4,"ngIf"],[1,"col-md-12","text-center","pt-4"],[1,"f_text"],["id","reg","href","Javascript:;",3,"click"],[1,"font-danger"],[1,"fa","fa-cog","fa-spin",2,"font-size","22px"]],template:function(t,o){1&t&&(g.Rb(0,"header",0),g.Rb(1,"div",1),g.Mb(2,"div",2),g.Rb(3,"div",2),g.Rb(4,"mat-card",3),g.Rb(5,"div",4),g.Mb(6,"img",5),g.Qb(),g.Rb(7,"div",6),g.Rb(8,"div",7),g.Rb(9,"form",8),g.Yb("ngSubmit",function(){return o.saveChanges()}),g.Rb(10,"mat-form-field",9),g.Rb(11,"mat-label",10),g.uc(12,"Username"),g.Qb(),g.Mb(13,"input",11),g.tc(14,w,2,1,"mat-error",12),g.Qb(),g.Rb(15,"mat-form-field",9),g.Rb(16,"mat-label",10),g.uc(17,"Password"),g.Qb(),g.Mb(18,"input",13),g.tc(19,_,2,1,"mat-error",12),g.Qb(),g.Rb(20,"div",14),g.Rb(21,"div",15),g.Rb(22,"mat-checkbox",16),g.uc(23," Remember me"),g.Qb(),g.Qb(),g.Rb(24,"div",17),g.Rb(25,"a",18),g.Yb("click",function(){return o.forgotPassword()}),g.uc(26," Forgot password ?"),g.Qb(),g.Qb(),g.Qb(),g.Rb(27,"div",6),g.Rb(28,"div",19),g.Rb(29,"button",20),g.tc(30,x,2,0,"span",21),g.tc(31,M,2,0,"span",21),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Rb(32,"div",22),g.Rb(33,"p",23),g.uc(34,"Don't have an account? "),g.Rb(35,"a",24),g.Yb("click",function(){return o.signUp()}),g.uc(36,"Register"),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Mb(37,"div",2),g.Qb(),g.Qb()),2&t&&(g.Ab(9),g.fc("formGroup",o.loginForm),g.Ab(5),g.fc("ngIf",null==o.displayMessage?null:o.displayMessage.userName),g.Ab(5),g.fc("ngIf",null==o.displayMessage?null:o.displayMessage.password),g.Ab(10),g.fc("disabled",o.loginForm.invalid||o.isLoading),g.Ab(1),g.fc("ngIf",!o.isLoading),g.Ab(1),g.fc("ngIf",o.isLoading))},directives:[a.a,r.p,r.l,r.f,l.c,l.f,r.b,s.a,r.k,r.d,n.j,d.a,l.b],styles:[".login_card[_ngcontent-%COMP%]{background-image:url(lo.a1c1b04ef83bd4004a2c.jpg);background-repeat:no-repeat;justify-content:center;background-size:cover}.login_img[_ngcontent-%COMP%]{height:120px;border-radius:100%}.img[_ngcontent-%COMP%]{height:100px;margin:0;background-repeat:no-repeat;justify-content:center;background-image:url(e-logo.8ee22f6cab3aad6d7b87.png)}.login_form[_ngcontent-%COMP%]{padding:30px 50px 0!important}.login_field[_ngcontent-%COMP%]{width:90%}.login_card_footer[_ngcontent-%COMP%]{padding-left:33px}.login_page[_ngcontent-%COMP%]{padding-top:100px;min-height:105vh;animation:myanimation 10s infinite}@keyframes myanimation{25%{background-color:#4e4e47}50%{background-color:#375537}75%{background-color:#3a2828}to{background-color:#3d3535}75%{background-color:#525055}50%{background-color:#794871}25%{background-color:#210527}0%{background-color:#501818}}.login_btn[_ngcontent-%COMP%]{color:#000;cursor:pointer;display:block;font-size:16px;font-weight:400;line-height:45px;max-width:160px;margin:0 auto 2em;position:relative;text-transform:uppercase;vertical-align:middle;width:100%}.login_btn-5[_ngcontent-%COMP%]{border:0 solid;box-shadow:inset 0 0 20px hsla(0,0%,100%,0);outline:1px solid;outline-color:hsla(0,0%,100%,0);text-shadow:none;transition:all 1.25s cubic-bezier(.19,1,.22,1);outline-color:hsla(0,0%,100%,.5);outline-offset:0}.login_btn-5[_ngcontent-%COMP%]:hover{border:1px solid;box-shadow:inset 0 0 20px hsla(0,0%,100%,.5),0 0 20px hsla(0,0%,100%,.2);outline-offset:15px;outline-color:hsla(0,0%,100%,0);text-shadow:1px 1px 2px #427388}.forgot_password[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-style:italic;font-family:serif}.forgot_password[_ngcontent-%COMP%]:hover{text-decoration:none;transition:color .8s ease-in;color:#00e676}.input_label[_ngcontent-%COMP%]{color:#fff}.m_o[_ngcontent-%COMP%]{margin:0!important}.m_checkbox[_ngcontent-%COMP%]{font-size:12px!important;color:#fff}.f_text[_ngcontent-%COMP%]{color:#fff}#reg[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#0272f1!important}#reg[_ngcontent-%COMP%]:hover, #reg[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none}#reg[_ngcontent-%COMP%]:hover{color:#00e676!important;transition:color .8s ease-in-out}"]}),t})(),R=(()=>{class t{}return t.\u0275mod=g.Jb({type:t}),t.\u0275inj=g.Ib({factory:function(o){return new(o||t)},imports:[[n.b,i.c.forChild([{path:"",component:y}]),a.b,r.g,r.n,l.e,s.b,c.c,b.c,d.b]]}),t})()}}]);