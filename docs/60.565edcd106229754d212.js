(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"ct+p":function(e,n,t){"use strict";t.r(n),t.d(n,"HomePageModule",function(){return d});var o=t("ofXK"),i=t("TEn/"),b=t("3Pt+"),l=t("tyNb"),a=t("fXoL"),r=t("bz1P");const c=[{path:"",component:(()=>{class e{constructor(e,n){this.routerSvc=e,this.tcaFlipCoins=n,this.form=[{val:"Albert calls HEAD",isChecked:!1},{val:"Albert calls TAIL",isChecked:!0},{val:"OPPONENT calls HEAD",isChecked:!0},{val:"OPPONENT calls TAIL",isChecked:!1}]}gamePlayed(){this.routerSvc.navigateByUrl("/record-result")}get albertCoinsUsed(){return this.tcaFlipCoins.gameResults.filter(e=>"nickel"==e.albertCoin||"quarter"==e.albertCoin).length}get albertChoicesMade(){return this.tcaFlipCoins.gameResults.filter(e=>"heads"==e.albertCalled||"tails"==e.albertCalled).length}}return e.\u0275fac=function(n){return new(n||e)(a.Jb(l.g),a.Jb(r.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-home"]],decls:54,vars:6,consts:[[3,"translucent"],["size","large"],[3,"fullscreen"],["src","assets/head-or-tail.jpg","alt","coins"],["size","large","shape","round",3,"click"],["color","danger"],[3,"ngModel","ngModelChange"],["slot","end","color","tertiary","value","heads"],["slot","end","color","success","value","tails"],["color","primary"],["slot","end","color","warning","value","quarter"],["slot","end","color","danger","value","nickel"]],template:function(e,n){1&e&&(a.Mb(0,"ion-header",0),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-title",1),a.dc(3," tca-flip-coins "),a.Lb(),a.Lb(),a.Lb(),a.Mb(4,"ion-content",2),a.Mb(5,"ion-card"),a.Mb(6,"ion-card-header"),a.Kb(7,"img",3),a.Lb(),a.Kb(8,"ion-tabs"),a.Mb(9,"ion-tab-button"),a.Mb(10,"ion-button",4),a.Tb("click",function(){return n.gamePlayed()}),a.dc(11,"FLIP COINS HERE"),a.Lb(),a.Lb(),a.Lb(),a.Mb(12,"ion-list"),a.Mb(13,"ion-list-header",5),a.dc(14),a.Lb(),a.Mb(15,"ion-radio-group",6),a.Tb("ngModelChange",function(e){return n.tcaFlipCoins.albertCalled=e}),a.Mb(16,"ion-item"),a.Mb(17,"ion-label"),a.Mb(18,"div"),a.Mb(19,"p"),a.Mb(20,"b"),a.dc(21,"ALBERT calls HEAD"),a.Lb(),a.Lb(),a.Mb(22,"ion-text",5),a.Mb(23,"p"),a.dc(24,"VS"),a.Lb(),a.Lb(),a.Mb(25,"p"),a.Mb(26,"b"),a.dc(27,"OPPONENT calls Tail"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Kb(28,"ion-radio",7),a.Lb(),a.Mb(29,"ion-item"),a.Mb(30,"ion-label"),a.Mb(31,"div"),a.Mb(32,"p"),a.Mb(33,"b"),a.dc(34,"ALBERT calls TAIL"),a.Lb(),a.Lb(),a.Mb(35,"ion-text",5),a.Mb(36,"p"),a.dc(37,"VS"),a.Lb(),a.Lb(),a.Mb(38,"p"),a.Mb(39,"b"),a.dc(40,"OPPONENT calls HEAD"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Kb(41,"ion-radio",8),a.Lb(),a.Lb(),a.Lb(),a.Mb(42,"ion-list"),a.Mb(43,"ion-list-header",5),a.dc(44),a.Lb(),a.Mb(45,"ion-radio-group",6),a.Tb("ngModelChange",function(e){return n.tcaFlipCoins.albertCoin=e}),a.Mb(46,"ion-item"),a.Mb(47,"ion-label",9),a.dc(48," Quarter "),a.Lb(),a.Kb(49,"ion-radio",10),a.Lb(),a.Mb(50,"ion-item"),a.Mb(51,"ion-label",5),a.dc(52," Nickel "),a.Lb(),a.Kb(53,"ion-radio",11),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&e&&(a.Zb("translucent",!0),a.zb(4),a.Zb("fullscreen",!0),a.zb(10),a.fc(" PICK HEAD or TAIL (",n.albertChoicesMade,") "),a.zb(1),a.Zb("ngModel",n.tcaFlipCoins.albertCalled),a.zb(29),a.fc(" CHOOSE YOUR COINS (",n.albertCoinsUsed,") "),a.zb(1),a.Zb("ngModel",n.tcaFlipCoins.albertCoin))},directives:[i.h,i.t,i.s,i.f,i.d,i.e,i.q,i.p,i.c,i.k,i.l,i.n,i.x,b.d,b.e,i.i,i.j,i.r,i.m,i.w],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})()}];let s=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(n){return new(n||e)},imports:[[l.i.forChild(c)],l.i]}),e})(),d=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(n){return new(n||e)},imports:[[o.b,b.a,i.u,s]]}),e})()}}]);