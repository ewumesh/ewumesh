(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{XUkN:function(n,e,i){"use strict";i.r(e),i.d(e,"SignUpModule",function(){return P});var t=i("ofXK"),o=i("tyNb"),r=i("3Pt+"),s=i("qFsG"),a=i("kmnG"),l=i("Wp6s"),c=i("bSwM"),d=i("dNgK"),g=i("fXoL"),p=i("9Q/d"),u=i("xCwu"),b=i("t8So"),m=i("lJxs"),f=i("3E0/"),h=i("TcFV");function w(n,e){if(1&n&&(g.Tb(0,"mat-error",23),g.Cc(1),g.Sb()),2&n){const n=g.ec();g.Cb(1),g.Dc(null==n.displayMessage?null:n.displayMessage.email)}}function C(n,e){if(1&n&&(g.Tb(0,"mat-error",23),g.Cc(1),g.Sb()),2&n){const n=g.ec();g.Cb(1),g.Dc(null==n.displayMessage?null:n.displayMessage.password)}}function v(n,e){if(1&n&&(g.Tb(0,"mat-error",23),g.Cc(1),g.Sb()),2&n){const n=g.ec();g.Cb(1),g.Dc(null==n.displayMessage?null:n.displayMessage.confirmPassword)}}function _(n,e){1&n&&(g.Tb(0,"p",24),g.Cc(1," Password doesn't match "),g.Sb())}function y(n,e){1&n&&(g.Tb(0,"span"),g.Cc(1,"REGISTER"),g.Sb())}function x(n,e){1&n&&(g.Tb(0,"span"),g.Ob(1,"i",25),g.Sb())}let S=(()=>{class n{constructor(n,e,i,t){this.fb=n,this.router=e,this.snackbarService=i,this.authService=t,this.isLoading=!1,this.users=[],this.displayMessage={},this.genericValidator=new p.a({email:{required:"This field is required.",pattern:"Please enter valid email address."},password:{required:"This field is required."},confirmPassword:{required:"This field is required."}})}ngOnInit(){this.initForm(),this.getListOfUsers()}getListOfUsers(){this.authService.getAllUsers().pipe(Object(m.a)(n=>n.map(n=>Object.assign({key:n.payload.key},n.payload.val())))).subscribe(n=>{this.users=n})}initForm(){this.signupForm=this.fb.group({id:0,email:[null,[r.q.required,r.q.pattern(u.a.emailRegex)]],role:"user",password:[null,r.q.required],confirmPassword:[null,r.q.required]},{validator:this.passwordConfirming})}validation(){this.genericValidator.initValidationProcess(this.signupForm,this.formInputElements).subscribe({next:n=>this.displayMessage=n})}passwordConfirming(n){if(n.get("password").value!==n.get("confirmPassword").value)return{invalid:!0}}ngAfterViewInit(){this.validation()}saveChanges(){this.isLoading=!0,void 0===this.users.find(n=>n.content.email===this.signupForm.value.email)?this.authService.addUser(this.signupForm.value).pipe(Object(f.a)(400)).subscribe(n=>{this.router.navigate(["/home"]),this.snackbarService.openFromComponent(b.a,{data:"User registered successfully.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"}),this.isLoading=!1,this.router.navigate(["/login"])}):(this.snackbarService.openFromComponent(b.a,{data:"User already registered.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"}),this.isLoading=!1)}login(){setTimeout(()=>{this.router.navigate(["/login"])},400)}}return n.\u0275fac=function(e){return new(e||n)(g.Nb(r.d),g.Nb(o.b),g.Nb(d.b),g.Nb(h.a))},n.\u0275cmp=g.Hb({type:n,selectors:[["ng-component"]],viewQuery:function(n,e){if(1&n&&g.Hc(r.e,!0,g.l),2&n){let n;g.oc(n=g.bc())&&(e.formInputElements=n)}},decls:37,vars:8,consts:[["id","home",1,"signup_page","pb-4"],[1,"row","m_0"],[1,"col-md-4"],[1,"signup_card"],[1,"text-center"],["src","assets/logo/e-logo.png",1,"login_img"],[1,"row"],[1,"col-md-12","text-center","signup_form"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"max-width"],[1,"input_label"],["formControlName","email","type","email","matInput","","placeholder","Enter username"],["class","font-danger",4,"ngIf"],[1,"max-width","pt-3"],["formControlName","password","type","password","matInput","","placeholder","Enter Your Password"],["formControlName","confirmPassword","type","password","matInput","","placeholder","Re-enter your password"],["class","wrong_password",4,"ngIf"],[1,"col-md","12","text-center","pt-3"],[1,"signup_btn","signup_btn-5",3,"disabled"],[4,"ngIf"],[1,"col-md-12","text-center","pt-4"],[1,"already"],["href","Javascript:;",1,"s_login",3,"click"],[1,"font-danger"],[1,"wrong_password"],[1,"fa","fa-cog","fa-spin",2,"font-size","22px"]],template:function(n,e){1&n&&(g.Tb(0,"header",0),g.Tb(1,"div",1),g.Ob(2,"div",2),g.Tb(3,"div",2),g.Tb(4,"mat-card",3),g.Tb(5,"div",4),g.Ob(6,"img",5),g.Sb(),g.Tb(7,"div",6),g.Tb(8,"div",7),g.Tb(9,"form",8),g.ac("ngSubmit",function(){return e.saveChanges()}),g.Tb(10,"mat-form-field",9),g.Tb(11,"mat-label",10),g.Cc(12,"Email"),g.Sb(),g.Ob(13,"input",11),g.Bc(14,w,2,1,"mat-error",12),g.Sb(),g.Tb(15,"mat-form-field",13),g.Tb(16,"mat-label",10),g.Cc(17,"Password"),g.Sb(),g.Ob(18,"input",14),g.Bc(19,C,2,1,"mat-error",12),g.Sb(),g.Tb(20,"mat-form-field",13),g.Tb(21,"mat-label",10),g.Cc(22,"Confirm Password"),g.Sb(),g.Ob(23,"input",15),g.Bc(24,v,2,1,"mat-error",12),g.Sb(),g.Bc(25,_,2,0,"p",16),g.Tb(26,"div",6),g.Tb(27,"div",17),g.Tb(28,"button",18),g.Bc(29,y,2,0,"span",19),g.Bc(30,x,2,0,"span",19),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(31,"div",20),g.Tb(32,"p",21),g.Cc(33,"Already have an account? "),g.Tb(34,"a",22),g.ac("click",function(){return e.login()}),g.Cc(35,"Login"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Ob(36,"div",2),g.Sb(),g.Sb()),2&n&&(g.Cb(9),g.kc("formGroup",e.signupForm),g.Cb(5),g.kc("ngIf",null==e.displayMessage?null:e.displayMessage.email),g.Cb(5),g.kc("ngIf",null==e.displayMessage?null:e.displayMessage.password),g.Cb(5),g.kc("ngIf",null==e.displayMessage?null:e.displayMessage.confirmPassword),g.Cb(1),g.kc("ngIf",null==e.signupForm.errors?null:e.signupForm.errors.invalid),g.Cb(3),g.kc("disabled",e.signupForm.invalid||e.isLoading),g.Cb(1),g.kc("ngIf",!e.isLoading),g.Cb(1),g.kc("ngIf",e.isLoading))},directives:[l.a,r.r,r.m,r.g,a.c,a.f,r.c,s.b,r.l,r.e,t.k,a.b],styles:[".signup_img[_ngcontent-%COMP%]{height:120px;border-radius:100%}.signup_card[_ngcontent-%COMP%]{background-image:url(lo.52202e5a6a813f126375.jpg);background-size:cover}.img[_ngcontent-%COMP%], .signup_card[_ngcontent-%COMP%]{background-repeat:no-repeat;justify-content:center}.img[_ngcontent-%COMP%]{height:100px;margin:0;background-image:url(e-logo.8ee22f6cab3aad6d7b87.png)}.signup_page[_ngcontent-%COMP%]{padding-top:100px;min-height:100vh;animation:myanimation 10s infinite}@keyframes myanimation{25%{background-color:#4e4e47}50%{background-color:#375537}75%{background-color:#3a2828}to{background-color:#3d3535}75%{background-color:#525055}50%{background-color:#794871}25%{background-color:#210527}0%{background-color:#501818}}.input_label[_ngcontent-%COMP%]{color:#fff}.signup_btn[_ngcontent-%COMP%]{color:#000;cursor:pointer;display:block;font-size:16px;font-weight:400;line-height:45px;max-width:160px;margin:0 auto 2em;position:relative;text-transform:uppercase;vertical-align:middle;width:100%}@media (min-width:400px){.signup_btn[_ngcontent-%COMP%]{display:inline-block;margin-right:2.5em}.signup_btn[_ngcontent-%COMP%]:nth-of-type(2n){margin-right:0}}@media (min-width:600px){.signup_btn[_ngcontent-%COMP%]:nth-of-type(2n){margin-right:2.5em}.signup_btn[_ngcontent-%COMP%]:nth-of-type(5){margin-right:0}}.signup_btn-5[_ngcontent-%COMP%]{border:0 solid;box-shadow:inset 0 0 20px hsla(0,0%,100%,0);outline:1px solid;outline-color:hsla(0,0%,100%,0);text-shadow:none;transition:all 1.25s cubic-bezier(.19,1,.22,1);outline-color:hsla(0,0%,100%,.5);outline-offset:0}.signup_btn-5[_ngcontent-%COMP%]:hover{border:1px solid;box-shadow:inset 0 0 20px hsla(0,0%,100%,.5),0 0 20px hsla(0,0%,100%,.2);outline-offset:15px;outline-color:hsla(0,0%,100%,0);text-shadow:1px 1px 2px #427388}.m_0[_ngcontent-%COMP%]{margin:0}.max-width[_ngcontent-%COMP%]{width:90%!important}.wrong_password[_ngcontent-%COMP%]{text-align:left!important;padding-left:10%!important;color:#f44336;font-size:12px;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.already[_ngcontent-%COMP%]{color:#fff!important}.s_login[_ngcontent-%COMP%]{color:#0272f1!important;text-decoration:none}.s_login[_ngcontent-%COMP%]:hover{color:#00e676!important;text-decoration:none;transition:color .8s ease-in-out}"]}),n})(),P=(()=>{class n{}return n.\u0275mod=g.Lb({type:n}),n.\u0275inj=g.Kb({factory:function(e){return new(e||n)},imports:[[t.b,o.d.forChild([{path:"",component:S}]),r.h,r.p,s.c,a.e,l.b,c.b,d.c]]}),n})()}}]);