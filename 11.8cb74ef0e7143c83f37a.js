(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3E0/":function(t,e,i){"use strict";i.d(e,"a",function(){return s});var o=i("D0XW"),n=i("7o/Q"),r=i("WMd4");function s(t,e=o.a){var i;const n=(i=t)instanceof Date&&!isNaN(+i)?+t-e.now():Math.abs(t);return t=>t.lift(new a(n,e))}class a{constructor(t,e){this.delay=t,this.scheduler=e}call(t,e){return e.subscribe(new c(t,this.delay,this.scheduler))}}class c extends n.a{constructor(t,e,i){super(t),this.delay=e,this.scheduler=i,this.queue=[],this.active=!1,this.errored=!1}static dispatch(t){const e=t.source,i=e.queue,o=t.scheduler,n=t.destination;for(;i.length>0&&i[0].time-o.now()<=0;)i.shift().notification.observe(n);if(i.length>0){const e=Math.max(0,i[0].time-o.now());this.schedule(t,e)}else this.unsubscribe(),e.active=!1}_schedule(t){this.active=!0,this.destination.add(t.schedule(c.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))}scheduleNotification(t){if(!0===this.errored)return;const e=this.scheduler,i=new b(e.now()+this.delay,t);this.queue.push(i),!1===this.active&&this._schedule(e)}_next(t){this.scheduleNotification(r.a.createNext(t))}_error(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()}_complete(){this.scheduleNotification(r.a.createComplete()),this.unsubscribe()}}class b{constructor(t,e){this.time=t,this.notification=e}}},FCti:function(t,e,i){"use strict";i.r(e),i.d(e,"ContactUSModule",function(){return p});var o=i("ofXK"),n=i("3E0/"),r=i("t8So"),s=i("fXoL"),a=i("3Pt+"),c=i("LRne"),b=i("sSZD");let u=(()=>{class t{constructor(t){this.db=t}postUserResponse(t){let e=Math.floor(8889*Math.random())+100;return t.id=e,t.sn=e,this.db.list("userResponse").push({content:t}),Object(c.a)(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(b.a))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=i("dNgK");let d=(()=>{class t{constructor(t,e,i){this.fb=t,this.cService=e,this.snackbar=i}ngOnInit(){this.initForm()}initForm(){this.contactForm=this.fb.group({id:0,fullName:[null],email:[null],subject:[null],message:[null]})}saveChanges(){this.cService.postUserResponse(this.contactForm.value).pipe(Object(n.a)(400)).subscribe(t=>{t&&(this.snackbar.openFromComponent(r.a,{data:"Thank you for your review.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"}),this.contactForm.reset())})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(a.c),s.Mb(u),s.Mb(l.b))},t.\u0275cmp=s.Gb({type:t,selectors:[["ng-component"]],decls:56,vars:1,consts:[[1,"row",2,"background-color","#6f42c1","margin","0 !important"],[1,"col-md-12"],[1,"container",2,"padding-top","150px"],[1,"row"],[1,"col-sm-12","mb-4","col-md-5"],[1,"card","border-primary","rounded-0"],["autocomplete","off",1,"form",3,"formGroup","ngSubmit"],[1,"card-header","p-0"],[1,"bg-primary","text-white","text-center","py-2"],[1,"fa","fa-envelope"],[1,"m-0"],[1,"card-body","p-3"],[1,"form-group"],[1,"input-group"],["formControlName","fullName","value","","type","text","name","data[name]","id","inlineFormInputGroupUsername","placeholder","Your name","autocomplete","off",1,"form-control"],[1,"input-group","mb-2","mb-sm-0"],["formControlName","email","type","email","value","","name","data[email]","id","inlineFormInputGroupUsername","placeholder","Email","autocomplete","off",1,"form-control"],["formControlName","subject","type","text","name","data[subject]","id","inlineFormInputGroupUsername","placeholder","Subject","autocomplete","off",1,"form-control"],["formControlName","message","placeholder","Enter your mesage..",1,"form-control"],[1,"text-center"],["type","submit","name","submit","value","submit",1,"btn","btn-primary","btn-block","rounded-0","py-2"],[1,"col-sm-12","col-md-7"],[1,"mb-4"],["src",s.Bc("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9662087016386!2d85.34783945083718!3d27.718329582702772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19635470597b%3A0x33913fefbf2adcaf!2sKL%20Tower!5e0!3m2!1sen!2snp!4v1614045048052!5m2!1sen!2snp"),"width","100%","height","450","loading","lazy",2,"border","0"],[1,"row","text-center"],[1,"col-md-4"],[1,"bg-primary","px-3","py-2","rounded","text-white","mb-2","d-inline-block"],[1,"fa","fa-map-marker"],[1,"fa","fa-phone"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"div",1),s.Sb(2,"section",2),s.Sb(3,"div",3),s.Sb(4,"div",4),s.Sb(5,"div",5),s.Sb(6,"form",6),s.Zb("ngSubmit",function(){return e.saveChanges()}),s.Sb(7,"div",7),s.Sb(8,"div",8),s.Sb(9,"h3"),s.Nb(10,"i",9),s.xc(11," Write to us:"),s.Rb(),s.Sb(12,"p",10),s.xc(13,"We\u2019ll write rarely, but only the best content."),s.Rb(),s.Rb(),s.Rb(),s.Sb(14,"div",11),s.Sb(15,"div",12),s.Sb(16,"label"),s.xc(17," Your name "),s.Rb(),s.Sb(18,"div",13),s.Nb(19,"input",14),s.Rb(),s.Rb(),s.Sb(20,"div",12),s.Sb(21,"label"),s.xc(22,"Your email"),s.Rb(),s.Sb(23,"div",15),s.Nb(24,"input",16),s.Rb(),s.Rb(),s.Sb(25,"div",12),s.Sb(26,"label"),s.xc(27,"Subject"),s.Rb(),s.Sb(28,"div",15),s.Nb(29,"input",17),s.Rb(),s.Rb(),s.Sb(30,"div",12),s.Sb(31,"label"),s.xc(32,"Message"),s.Rb(),s.Sb(33,"div",15),s.Nb(34,"textarea",18),s.Rb(),s.Rb(),s.Sb(35,"div",19),s.Nb(36,"input",20),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(37,"div",21),s.Sb(38,"div",22),s.Nb(39,"iframe",23),s.Rb(),s.Sb(40,"div",24),s.Sb(41,"div",25),s.Sb(42,"a",26),s.Nb(43,"i",27),s.Rb(),s.Sb(44,"p"),s.xc(45," Kathmandu, Nepal "),s.Rb(),s.Rb(),s.Sb(46,"div",25),s.Sb(47,"a",26),s.Nb(48,"i",28),s.Rb(),s.Sb(49,"p"),s.xc(50,"+977-9884011879"),s.Rb(),s.Rb(),s.Sb(51,"div",25),s.Sb(52,"a",26),s.Nb(53,"i",9),s.Rb(),s.Sb(54,"p"),s.xc(55," umeshthapa539@gmail.com"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.Bb(6),s.ic("formGroup",e.contactForm))},directives:[a.p,a.l,a.f,a.b,a.k,a.d],styles:[""]}),t})();var m=i("tyNb");let p=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},providers:[u],imports:[[o.b,m.c.forChild([{path:"",component:d}]),a.g,a.n,l.c]]}),t})()},t8So:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var o=i("dNgK"),n=i("fXoL");let r=(()=>{class t{constructor(t,e){this.sbRef=t,this.data=e}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(o.d),n.Mb(o.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-basic-snackbar"]],decls:6,vars:1,consts:[[1,"snack"],[1,"mb-4"],[1,"dismiss"],["mat-icon-button","",1,"btn","btn-danger","btn-sm",3,"click"]],template:function(t,e){1&t&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.xc(2),n.Rb(),n.Sb(3,"div",2),n.Sb(4,"button",3),n.Zb("click",function(){return e.sbRef.dismiss()}),n.xc(5," Close "),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.Bb(2),n.yc(e.data))},styles:[".snack[_ngcontent-%COMP%]{text-align:center}"]}),t})()}}]);