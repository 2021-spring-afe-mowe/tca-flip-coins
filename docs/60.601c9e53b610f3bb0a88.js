(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"ct+p":function(e,n,t){"use strict";t.r(n),t.d(n,"HomePageModule",function(){return d});var o=t("ofXK"),i=t("TEn/"),l=t("3Pt+"),a=t("tyNb"),r=t("fXoL"),b=t("bz1P");const c=[{path:"",component:(()=>{class e{constructor(e,n){this.routerSvc=e,this.tcaFlipCoins=n,this.form=[{val:"Albert calls HEAD",isChecked:!1},{val:"Albert calls TAIL",isChecked:!0},{val:"OPPONENT calls HEAD",isChecked:!0},{val:"OPPONENT calls TAIL",isChecked:!1}]}gamePlayed(){this.routerSvc.navigateByUrl("/record-result")}get albertCoinsUsed(){return this.tcaFlipCoins.gameResults.filter(e=>"nickel"==e.albertCoin||"quarter"==e.albertCoin).length}get albertChoicesMade(){return this.tcaFlipCoins.gameResults.filter(e=>"heads"==e.albertCalled||"tails"==e.albertCalled).length}}return e.\u0275fac=function(n){return new(n||e)(r.Jb(a.g),r.Jb(b.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-home"]],decls:48,vars:6,consts:[[3,"translucent"],["size","large"],[3,"fullscreen"],["src","assets/head-or-tail.jpg","alt","coins"],["size","large","shape","round",3,"click"],["color","danger"],[3,"ngModel","ngModelChange"],["slot","end","color","tertiary","value","heads"],["slot","end","color","success","value","tails"],["slot","end","color","warning","value","quarter"],["slot","end","color","danger","value","nickel"]],template:function(e,n){1&e&&(r.Mb(0,"ion-header",0),r.Mb(1,"ion-toolbar"),r.Mb(2,"ion-title",1),r.dc(3," tca-flip-coins "),r.Lb(),r.Lb(),r.Lb(),r.Mb(4,"ion-content",2),r.Mb(5,"ion-card"),r.Mb(6,"ion-card-header"),r.Kb(7,"img",3),r.Lb(),r.Kb(8,"ion-tabs"),r.Mb(9,"ion-tab-button"),r.Mb(10,"ion-button",4),r.Tb("click",function(){return n.gamePlayed()}),r.dc(11,"FLIP COINS HERE"),r.Lb(),r.Lb(),r.Lb(),r.Mb(12,"ion-list"),r.Mb(13,"ion-list-header",5),r.dc(14),r.Lb(),r.Mb(15,"ion-radio-group",6),r.Tb("ngModelChange",function(e){return n.tcaFlipCoins.albertCalled=e}),r.Mb(16,"ion-item"),r.Mb(17,"ion-label"),r.Mb(18,"div"),r.Mb(19,"p"),r.dc(20,"ALBERT calls head"),r.Lb(),r.Mb(21,"p"),r.dc(22,"VS"),r.Lb(),r.Mb(23,"p"),r.dc(24,"OPPONENT calls Tail"),r.Lb(),r.Lb(),r.Lb(),r.Kb(25,"ion-radio",7),r.Lb(),r.Mb(26,"ion-item"),r.Mb(27,"ion-label"),r.Mb(28,"div"),r.Mb(29,"p"),r.dc(30,"ALBERT calls Tail"),r.Lb(),r.Mb(31,"p"),r.dc(32,"VS"),r.Lb(),r.Mb(33,"p"),r.dc(34,"OPPONENT calls Head"),r.Lb(),r.Lb(),r.Lb(),r.Kb(35,"ion-radio",8),r.Lb(),r.Lb(),r.Lb(),r.Mb(36,"ion-list"),r.Mb(37,"ion-list-header",5),r.dc(38),r.Lb(),r.Mb(39,"ion-radio-group",6),r.Tb("ngModelChange",function(e){return n.tcaFlipCoins.albertCoin=e}),r.Mb(40,"ion-item"),r.Mb(41,"ion-label"),r.dc(42," Quarter "),r.Lb(),r.Kb(43,"ion-radio",9),r.Lb(),r.Mb(44,"ion-item"),r.Mb(45,"ion-label"),r.dc(46," Nickel "),r.Lb(),r.Kb(47,"ion-radio",10),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&e&&(r.Zb("translucent",!0),r.zb(4),r.Zb("fullscreen",!0),r.zb(10),r.fc(" PICK HEAD or TAIL (",n.albertChoicesMade,") "),r.zb(1),r.Zb("ngModel",n.tcaFlipCoins.albertCalled),r.zb(23),r.fc(" CHOOSE YOUR COINS (",n.albertCoinsUsed,") "),r.zb(1),r.Zb("ngModel",n.tcaFlipCoins.albertCoin))},directives:[i.h,i.t,i.s,i.f,i.d,i.e,i.q,i.p,i.c,i.k,i.l,i.n,i.x,l.d,l.e,i.i,i.j,i.m,i.w],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})()}];let s=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(n){return new(n||e)},imports:[[a.i.forChild(c)],a.i]}),e})(),d=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(n){return new(n||e)},imports:[[o.b,l.a,i.u,s]]}),e})()}}]);