(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9q6C":function(t,a,i){"use strict";i.d(a,"a",function(){return o});var r=i("LRne"),e=i("fXoL"),n=i("sSZD");let o=(()=>{class t{constructor(t){this.db=t}getBlogById(t){return t?Object(r.a)(t):Object(r.a)([])}getAllBlogs(){return this.blogsList=this.db.list("blogs"),this.blogsList.snapshotChanges()}postBlog(t){let a=Math.floor(8889*Math.random())+100;return t.id=a,t.sn=a,this.db.list("blogs").push({content:t}),Object(r.a)(t)}editBlog(t,a,i){return a.id=i.id,a.sn=i.sn,this.blogsList.update(t,{content:a}),Object(r.a)(a)}deleteBlog(t){let a=t;return this.db.list("blogs").remove(a),Object(r.a)(!0)}}return t.\u0275fac=function(a){return new(a||t)(e.Wb(n.a))},t.\u0275prov=e.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Wp6s:function(t,a,i){"use strict";i.d(a,"a",function(){return c}),i.d(a,"b",function(){return s});var r=i("R1ws"),e=i("FKr1"),n=i("fXoL");const o=["*",[["mat-card-footer"]]],d=["*","mat-card-footer"];let c=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(a){return new(a||t)(n.Mb(r.a,8))},t.\u0275cmp=n.Gb({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,a){2&t&&n.Eb("_mat-animation-noopable","NoopAnimations"===a._animationMode)},exportAs:["matCard"],ngContentSelectors:d,decls:2,vars:0,template:function(t,a){1&t&&(n.hc(o),n.gc(0),n.gc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),s=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(a){return new(a||t)},imports:[[e.f],e.f]}),t})()},szbo:function(t,a,i){"use strict";i.d(a,"a",function(){return o});var r=i("LRne"),e=i("fXoL"),n=i("sSZD");let o=(()=>{class t{constructor(t){this.db=t}getAllTeams(){return this.teamList=this.db.list("teams"),this.teamList.snapshotChanges()}getTeamById(t){let a;return this.teamList.valueChanges().subscribe(i=>{let r=i.find(a=>a.content.id===t);a=r.content}),Object(r.a)(a)}updateTeam(t,a,i){return a.id=i.id,a.sn=i.sn,this.teamList.update(t,{content:a}),Object(r.a)(a)}addTeam(t){let a=Math.floor(8889*Math.random())+100;return t.id=a,t.sn=a,this.db.list("teams").push({content:t}),Object(r.a)(t)}deleteTeam(t){let a=t;return this.db.list("teams").remove(a),Object(r.a)(!0)}addLinks(t){return Object(r.a)()}}return t.\u0275fac=function(a){return new(a||t)(e.Wb(n.a))},t.\u0275prov=e.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xCwu:function(t,a,i){"use strict";i.d(a,"a",function(){return r});let r=(()=>{class t{}return t.emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,t})()}}]);