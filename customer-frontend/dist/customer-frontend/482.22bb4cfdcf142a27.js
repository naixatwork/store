"use strict";(self.webpackChunkcustomer_frontend=self.webpackChunkcustomer_frontend||[]).push([[482],{8482:(U,g,o)=>{o.r(g),o.d(g,{AuthModule:()=>q});var h=o(9808),s=o(4521),r=o(3075),Z=o(590),t=o(5e3),c=o(629),p=o(9224),u=o(7322),d=o(7531),f=o(3874),m=o(7423);const A=[{path:"",children:[{path:"sign-in",component:(()=>{class e{constructor(n,i,l){this.formBuilder=n,this.authService=i,this.router=l}ngOnInit(){this.initializeForm()}initializeForm(){this.form=this.formBuilder.group({username:["",[r.kI.required]],password:["",[r.kI.required]]})}login(){this.authService.login(this.form.value).pipe((0,Z.P)()).subscribe(n=>{this.authService.storeCredentials(n),this.router.navigate(["/store"])})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu),t.Y36(c.e),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sign-in"]],decls:26,vars:4,consts:[[1,"flex","p-5","justify-center","items-center","h-full","w-full"],[1,"w-full","sm:w-auto"],[1,"font-bold"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","text","formControlName","username"],["matSuffix",""],["matInput","","type","password","formControlName","password"],[1,"flex","gap-3"],["type","submit","mat-raised-button","",3,"disabled","color"],["routerLink","/auth/sign-up","mat-button","",3,"color"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-card",1),t.TgZ(2,"h1",2),t._uU(3,"Welcome Back!"),t.qZA(),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return i.login()}),t.TgZ(5,"mat-form-field",4),t.TgZ(6,"mat-label"),t._uU(7,"username"),t.qZA(),t._UZ(8,"input",5),t.TgZ(9,"mat-icon",6),t._uU(10,"sentiment_very_satisfied"),t.qZA(),t.TgZ(11,"mat-error"),t._uU(12,"username is required"),t.qZA(),t.qZA(),t.TgZ(13,"mat-form-field",4),t.TgZ(14,"mat-label"),t._uU(15,"password"),t.qZA(),t._UZ(16,"input",7),t.TgZ(17,"mat-icon",6),t._uU(18,"password"),t.qZA(),t.TgZ(19,"mat-error"),t._uU(20,"username is required"),t.qZA(),t.qZA(),t.TgZ(21,"div",8),t.TgZ(22,"button",9),t._uU(23,"sign in"),t.qZA(),t.TgZ(24,"a",10),t._uU(25,"sign up"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(4),t.Q6J("formGroup",i.form),t.xp6(18),t.Q6J("disabled",i.form.invalid)("color","primary"),t.xp6(2),t.Q6J("color","warn"))},directives:[p.a8,r._Y,r.JL,r.sg,u.KE,u.hX,d.Nt,r.Fj,r.JJ,r.u,f.Hw,u.R9,u.TO,m.lW,s.yS,m.zs],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),e})()},{path:"sign-up",component:(()=>{class e{constructor(n,i,l){this.formBuilder=n,this.authService=i,this.router=l}ngOnInit(){this.initializeForm()}initializeForm(){this.form=this.formBuilder.group({username:["",[r.kI.required]],password:["",[r.kI.required]],name:["",[r.kI.required]],address:["",[r.kI.required]],phoneNumber:["",[r.kI.required]],products:[[],[]]})}login(){this.authService.signUp(this.form.value).pipe((0,Z.P)()).subscribe(n=>{this.authService.storeCredentials(n),this.router.navigate(["/store"])})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu),t.Y36(c.e),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sign-up"]],decls:50,vars:4,consts:[[1,"flex","p-5","justify-center","items-center","h-full","w-full"],[1,"w-full","sm:w-auto"],[1,"font-bold"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","text","formControlName","username"],["matSuffix",""],["matInput","","type","password","formControlName","password"],["matInput","","type","text","formControlName","name"],["matInput","","type","text","formControlName","address"],["matInput","","type","text","formControlName","phoneNumber"],[1,"flex","gap-3"],["type","submit","mat-raised-button","",3,"disabled","color"],["routerLink","/auth/sing-in","mat-button","",3,"color"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-card",1),t.TgZ(2,"h1",2),t._uU(3,"Welcome!"),t.qZA(),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return i.login()}),t.TgZ(5,"mat-form-field",4),t.TgZ(6,"mat-label"),t._uU(7,"username"),t.qZA(),t._UZ(8,"input",5),t.TgZ(9,"mat-icon",6),t._uU(10,"sentiment_very_satisfied"),t.qZA(),t.TgZ(11,"mat-error"),t._uU(12,"username is required"),t.qZA(),t.qZA(),t.TgZ(13,"mat-form-field",4),t.TgZ(14,"mat-label"),t._uU(15,"password"),t.qZA(),t._UZ(16,"input",7),t.TgZ(17,"mat-icon",6),t._uU(18,"password"),t.qZA(),t.TgZ(19,"mat-error"),t._uU(20,"password is required"),t.qZA(),t.qZA(),t.TgZ(21,"mat-form-field",4),t.TgZ(22,"mat-label"),t._uU(23,"full-name"),t.qZA(),t._UZ(24,"input",8),t.TgZ(25,"mat-icon",6),t._uU(26,"sentiment_very_satisfied"),t.qZA(),t.TgZ(27,"mat-error"),t._uU(28,"full-name is required"),t.qZA(),t.qZA(),t.TgZ(29,"mat-form-field",4),t.TgZ(30,"mat-label"),t._uU(31,"address"),t.qZA(),t._UZ(32,"input",9),t.TgZ(33,"mat-icon",6),t._uU(34,"sentiment_very_satisfied"),t.qZA(),t.TgZ(35,"mat-error"),t._uU(36,"address is required"),t.qZA(),t.qZA(),t.TgZ(37,"mat-form-field",4),t.TgZ(38,"mat-label"),t._uU(39,"phoneNumber"),t.qZA(),t._UZ(40,"input",10),t.TgZ(41,"mat-icon",6),t._uU(42,"sentiment_very_satisfied"),t.qZA(),t.TgZ(43,"mat-error"),t._uU(44,"phoneNumber is required"),t.qZA(),t.qZA(),t.TgZ(45,"div",11),t.TgZ(46,"button",12),t._uU(47,"sign up"),t.qZA(),t.TgZ(48,"a",13),t._uU(49,"sign in"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(4),t.Q6J("formGroup",i.form),t.xp6(42),t.Q6J("disabled",i.form.invalid)("color","primary"),t.xp6(2),t.Q6J("color","warn"))},directives:[p.a8,r._Y,r.JL,r.sg,u.KE,u.hX,d.Nt,r.Fj,r.JJ,r.u,f.Hw,u.R9,u.TO,m.lW,s.yS,m.zs],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),e})()},{path:"**",redirectTo:"sign-in"}]}];let T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(A)],s.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[],imports:[[h.ez,T,p.QW,r.UX,u.lN,d.c,f.Ps,m.ot]]}),e})()}}]);