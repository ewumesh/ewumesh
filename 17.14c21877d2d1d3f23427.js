(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{GCxG:function(t,e,o){"use strict";o.r(e),o.d(e,"LoginModule",function(){return R});var i=o("ofXK"),n=o("tyNb"),r=o("3Pt+"),a=o("Wp6s"),s=o("qFsG"),l=o("kmnG"),c=o("0IaG"),d=o("dNgK"),b=o("bSwM"),g=o("fXoL"),u=o("lJxs"),p=o("9Q/d"),m=o("xCwu");function f(t,e){if(1&t&&(g.Sb(0,"mat-error",12),g.xc(1),g.Rb()),2&t){const t=g.dc();g.Bb(1),g.yc(null==t.displayMessage?null:t.displayMessage.email)}}let h=(()=>{class t{constructor(t,e,o){this.fb=t,this.snackbar=e,this.dialogRef=o,this.displayMessage={},this.genericValidator=new p.a({email:{required:"This field is required.",pattern:"Please enter valid email address"}})}ngOnInit(){this.initForm()}initForm(){this.forgotPasswordForm=this.fb.group({id:0,email:[null,[r.o.required,r.o.pattern(m.a.emailRegex)]]})}ngAfterViewInit(){this.validation()}validation(){this.genericValidator.initValidationProcess(this.forgotPasswordForm,this.formInputElements).subscribe({next:t=>this.displayMessage=t})}sumbit(){setTimeout(()=>{this.dialogRef.close(),this.snackbar.open("Please check your email.","Close",{duration:1e3,horizontalPosition:"right",verticalPosition:"top"})},1500)}cancel(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(r.c),g.Mb(d.b),g.Mb(c.d))},t.\u0275cmp=g.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&g.Cc(r.d,!0,g.l),2&t){let t;g.lc(t=g.ac())&&(e.formInputElements=t)}},decls:18,vars:3,consts:[[1,"row","p-3"],[1,"col-md-12","text-center"],[2,"font-size","13px"],["autocomplete","off",1,"pt-4",3,"formGroup","ngSubmit"],[1,"login_field","pb-3",2,"width","90%"],[1,"input_label"],["formControlName","email","type","email","matInput","","placeholder","Enter your email"],["class","font-danger",4,"ngIf"],[1,"row"],[1,"col-md-12"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-danger","ml-3",3,"click"],[1,"font-danger"]],template:function(t,e){1&t&&(g.Sb(0,"div",0),g.Sb(1,"div",1),g.Sb(2,"h3"),g.xc(3," Forgot Your Password?"),g.Rb(),g.Sb(4,"p",2),g.xc(5,"Don't worry! Just fill in your email and we will send you a link to reset your password."),g.Rb(),g.Sb(6,"form",3),g.Zb("ngSubmit",function(){return e.sumbit()}),g.Sb(7,"mat-form-field",4),g.Sb(8,"mat-label",5),g.xc(9,"Email"),g.Rb(),g.Nb(10,"input",6),g.wc(11,f,2,1,"mat-error",7),g.Rb(),g.Sb(12,"div",8),g.Sb(13,"div",9),g.Sb(14,"button",10),g.xc(15,"Submit"),g.Rb(),g.Sb(16,"button",11),g.Zb("click",function(){return e.cancel()}),g.xc(17,"Cancel"),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb()),2&t&&(g.Bb(6),g.ic("formGroup",e.forgotPasswordForm),g.Bb(5),g.ic("ngIf",null==e.displayMessage?null:e.displayMessage.email),g.Bb(3),g.ic("disabled",e.forgotPasswordForm.invalid))},directives:[r.p,r.l,r.f,l.c,l.f,r.b,s.a,r.k,r.d,i.j,l.b],styles:[""]}),t})();var x=o("t8So"),w=o("TcFV");function v(t,e){if(1&t&&(g.Sb(0,"mat-error",25),g.xc(1),g.Rb()),2&t){const t=g.dc();g.Bb(1),g.yc(null==t.displayMessage?null:t.displayMessage.userName)}}function _(t,e){if(1&t&&(g.Sb(0,"mat-error",25),g.xc(1),g.Rb()),2&t){const t=g.dc();g.Bb(1),g.yc(null==t.displayMessage?null:t.displayMessage.password)}}function y(t,e){1&t&&(g.Sb(0,"span"),g.xc(1,"LOGIN"),g.Rb())}function S(t,e){1&t&&(g.Sb(0,"span"),g.Nb(1,"i",26),g.Rb())}let M=(()=>{class t{constructor(t,e,o,i,n){this.fb=t,this.dialog=e,this.router=o,this.snackbarService=i,this.authService=n,this.horizontalPosition="right",this.verticalPosition="top",this.isLoading=!1,this.users=[],this.displayMessage={},this.genericValidator=new p.a({userName:{required:"This field is required."},password:{required:"This field is required."}})}ngOnInit(){this.initForm(),this.getListOfUsers()}getListOfUsers(){this.authService.getAllUsers().pipe(Object(u.a)(t=>t.map(t=>Object.assign({key:t.payload.key},t.payload.val())))).subscribe(t=>{this.users=t})}initForm(){this.loginForm=this.fb.group({id:0,userName:[null,r.o.required],password:[null,r.o.required]})}ngAfterViewInit(){this.validation()}validation(){this.genericValidator.initValidationProcess(this.loginForm,this.formInputElements).subscribe({next:t=>this.displayMessage=t})}saveChanges(){this.isLoading=!0,void 0!==this.users.find(t=>t.content.email===this.loginForm.value.userName&&t.content.password===this.loginForm.value.password)?setTimeout(()=>{this.snackbarService.openFromComponent(x.a,{data:"User Login Successfully.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"}),this.authService.currentUser=!0,this.router.navigate(["/profile"])},400):setTimeout(()=>{this.snackbarService.openFromComponent(x.a,{data:"Login username or password incorrect.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"})},400)}forgotPassword(){this.dialog.open(h,{height:"330px",width:"530px"})}signUp(){setTimeout(()=>{this.router.navigate(["/register"])},400)}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(r.c),g.Mb(c.b),g.Mb(n.a),g.Mb(d.b),g.Mb(w.a))},t.\u0275cmp=g.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&g.Cc(r.d,!0,g.l),2&t){let t;g.lc(t=g.ac())&&(e.formInputElements=t)}},decls:38,vars:6,consts:[["id","home",1,"login_page","pb-4"],[1,"row","m_o"],[1,"col-md-4"],[1,"login_card"],[1,"text-center"],["src","assets/logo/e-logo.png",1,"login_img"],[1,"row"],[1,"col-md-12","text-center","login_form"],["autocomplete","off",1,"example-form",3,"formGroup","ngSubmit"],[1,"login_field"],[1,"input_label"],["formControlName","userName","type","email","matInput","","placeholder","Enter username"],["class","font-danger",4,"ngIf"],["formControlName","password","type","password","matInput","","placeholder","Enter Your Password"],[1,"row","pt-3"],[1,"col-md-6","text-left","pl-4"],[1,"m_checkbox"],[1,"col-md-6","text-left","login_card_footer"],["href","Javascript:;",1,"forgot_password",3,"click"],[1,"col-md","12","text-center","pt-3"],[1,"login_btn","login_btn-5",3,"disabled"],[4,"ngIf"],[1,"col-md-12","text-center","pt-4"],[1,"f_text"],["id","reg","href","Javascript:;",3,"click"],[1,"font-danger"],[1,"fa","fa-cog","fa-spin",2,"font-size","22px"]],template:function(t,e){1&t&&(g.Sb(0,"header",0),g.Sb(1,"div",1),g.Nb(2,"div",2),g.Sb(3,"div",2),g.Sb(4,"mat-card",3),g.Sb(5,"div",4),g.Nb(6,"img",5),g.Rb(),g.Sb(7,"div",6),g.Sb(8,"div",7),g.Sb(9,"form",8),g.Zb("ngSubmit",function(){return e.saveChanges()}),g.Sb(10,"mat-form-field",9),g.Sb(11,"mat-label",10),g.xc(12,"Username"),g.Rb(),g.Nb(13,"input",11),g.wc(14,v,2,1,"mat-error",12),g.Rb(),g.Sb(15,"mat-form-field",9),g.Sb(16,"mat-label",10),g.xc(17,"Password"),g.Rb(),g.Nb(18,"input",13),g.wc(19,_,2,1,"mat-error",12),g.Rb(),g.Sb(20,"div",14),g.Sb(21,"div",15),g.Sb(22,"mat-checkbox",16),g.xc(23," Remember me"),g.Rb(),g.Rb(),g.Sb(24,"div",17),g.Sb(25,"a",18),g.Zb("click",function(){return e.forgotPassword()}),g.xc(26," Forgot password ?"),g.Rb(),g.Rb(),g.Rb(),g.Sb(27,"div",6),g.Sb(28,"div",19),g.Sb(29,"button",20),g.wc(30,y,2,0,"span",21),g.wc(31,S,2,0,"span",21),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Sb(32,"div",22),g.Sb(33,"p",23),g.xc(34,"Don't have an account? "),g.Sb(35,"a",24),g.Zb("click",function(){return e.signUp()}),g.xc(36,"Register"),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Nb(37,"div",2),g.Rb(),g.Rb()),2&t&&(g.Bb(9),g.ic("formGroup",e.loginForm),g.Bb(5),g.ic("ngIf",null==e.displayMessage?null:e.displayMessage.userName),g.Bb(5),g.ic("ngIf",null==e.displayMessage?null:e.displayMessage.password),g.Bb(10),g.ic("disabled",e.loginForm.invalid||e.isLoading),g.Bb(1),g.ic("ngIf",!e.isLoading),g.Bb(1),g.ic("ngIf",e.isLoading))},directives:[a.a,r.p,r.l,r.f,l.c,l.f,r.b,s.a,r.k,r.d,i.j,b.a,l.b],styles:[".login_card[_ngcontent-%COMP%]{background-image:url(lo.52202e5a6a813f126375.jpg);background-repeat:no-repeat;justify-content:center;background-size:cover}.login_img[_ngcontent-%COMP%]{height:120px;border-radius:100%}.img[_ngcontent-%COMP%]{height:100px;margin:0;background-repeat:no-repeat;justify-content:center;background-image:url(e-logo.8ee22f6cab3aad6d7b87.png)}.login_form[_ngcontent-%COMP%]{padding:30px 50px 0!important}.login_field[_ngcontent-%COMP%]{width:90%}.login_card_footer[_ngcontent-%COMP%]{padding-left:33px}.login_page[_ngcontent-%COMP%]{padding-top:100px;min-height:105vh;animation:myanimation 10s infinite}@keyframes myanimation{25%{background-color:#4e4e47}50%{background-color:#375537}75%{background-color:#3a2828}to{background-color:#3d3535}75%{background-color:#525055}50%{background-color:#794871}25%{background-color:#210527}0%{background-color:#501818}}.login_btn[_ngcontent-%COMP%]{color:#000;cursor:pointer;display:block;font-size:16px;font-weight:400;line-height:45px;max-width:160px;margin:0 auto 2em;position:relative;text-transform:uppercase;vertical-align:middle;width:100%}.login_btn-5[_ngcontent-%COMP%]{border:0 solid;box-shadow:inset 0 0 20px hsla(0,0%,100%,0);outline:1px solid;outline-color:hsla(0,0%,100%,0);text-shadow:none;transition:all 1.25s cubic-bezier(.19,1,.22,1);outline-color:hsla(0,0%,100%,.5);outline-offset:0}.login_btn-5[_ngcontent-%COMP%]:hover{border:1px solid;box-shadow:inset 0 0 20px hsla(0,0%,100%,.5),0 0 20px hsla(0,0%,100%,.2);outline-offset:15px;outline-color:hsla(0,0%,100%,0);text-shadow:1px 1px 2px #427388}.forgot_password[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-style:italic;font-family:serif}.forgot_password[_ngcontent-%COMP%]:hover{text-decoration:none;transition:color .8s ease-in;color:#00e676}.input_label[_ngcontent-%COMP%]{color:#fff}.m_o[_ngcontent-%COMP%]{margin:0!important}.m_checkbox[_ngcontent-%COMP%]{font-size:12px!important;color:#fff}.f_text[_ngcontent-%COMP%]{color:#fff}#reg[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#0272f1!important}#reg[_ngcontent-%COMP%]:hover, #reg[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none}#reg[_ngcontent-%COMP%]:hover{color:#00e676!important;transition:color .8s ease-in-out}"]}),t})(),R=(()=>{class t{}return t.\u0275mod=g.Kb({type:t}),t.\u0275inj=g.Jb({factory:function(e){return new(e||t)},imports:[[i.b,n.c.forChild([{path:"",component:M}]),a.b,r.g,r.n,l.e,s.b,c.c,d.c,b.b]]}),t})()}}]);