(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{VBDK:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=function(){return function(){}}(),i=t("pMnS"),o=t("ZYCi"),r=t("Ip0R"),a=t("AytR"),c=function(){function l(l){this.httpClient=l,this.baseUrl=a.a.baseUrl+"api/events"}return l.prototype.recuperaEventi=function(){return this.httpClient.get(this.baseUrl)},l.prototype.recuperaEvento=function(l){return this.httpClient.get(this.baseUrl+"/"+l)},l.prototype.creaEvento=function(l){return this.httpClient.post(this.baseUrl,l)},l.prototype.modificaEvento=function(l){return this.httpClient.put(this.baseUrl+"/"+l.id,l)},l.prototype.eliminaEvento=function(l){return this.httpClient.delete(this.baseUrl+"/"+l)},l}(),s=t("Vh/1"),b=function(){function l(l,n,t){this.messageBroker=l,this.activatedRoute=n,this.dettaglioVisibile=!1,this.listaEventiService=t,this.messageBroker.sendMessage("menu","lista eventi caricata!")}return l.prototype.ngOnInit=function(){this.listaEventi=this.activatedRoute.snapshot.data.lista},l.prototype.mostraDettaglio=function(){this.dettaglioVisibile=!0},l.prototype.nascondiDettaglio=function(){this.dettaglioVisibile=!1},l.prototype.creaNuovoEvento=function(){this.eventoSelezionato={},this.eventoSelezionato.visible=!0,this.mostraDettaglio()},l.prototype.modificaEvento=function(l){var n=Object.assign({},l);this.eventoSelezionato=n,this.mostraDettaglio()},l.prototype.salvaEvento=function(){var l=this;if(this.eventoSelezionato.id)this.listaEventiService.modificaEvento(this.eventoSelezionato).subscribe(function(){l.caricaEventi()},function(){return alert("errore durtante la modifica")});else{var n=this.listaEventi.length>0?Math.max.apply(Math,this.listaEventi.map(function(l){return l.id})):0;this.eventoSelezionato.id=n+1,this.listaEventi.push(this.eventoSelezionato)}this.nascondiDettaglio()},l.prototype.eliminaEvento=function(l){var n=this.listaEventi.indexOf(l);this.listaEventi.splice(n,1)},l.prototype.caricaEventi=function(){var l=this;this.listaEventi=null,this.listaEventiService.recuperaEventi().subscribe(function(n){return l.listaEventi=n},function(l){return alert(l)})},l}(),p=u.nb({encapsulation:2,styles:[],data:{}});function v(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,22,"tr",[],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Fb(2,null,["",""])),(l()(),u.pb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Fb(4,null,["",""])),(l()(),u.pb(5,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),u.Fb(6,null,["",""])),u.Bb(7,2),(l()(),u.pb(8,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),u.Fb(9,null,["",""])),u.Bb(10,2),(l()(),u.pb(11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Fb(12,null,["",""])),(l()(),u.pb(13,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Fb(14,null,["",""])),(l()(),u.pb(15,0,null,null,7,"td",[],null,null,null,null,null)),(l()(),u.pb(16,0,null,null,3,"button",[["class","btn btn-warning"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.xb(l,17).onClick()&&e),e},null,null)),u.ob(17,16384,null,0,o.p,[o.o,o.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.yb(18,2),(l()(),u.Fb(-1,null,[" Modifica "])),(l()(),u.Fb(-1,null,[" \xa0 "])),(l()(),u.pb(21,0,null,null,1,"button",[["class","btn btn-danger"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.eliminaEvento(l.context.$implicit)&&u),u},null,null)),(l()(),u.Fb(-1,null,[" Elimina "]))],function(l,n){var t=l(n,18,0,"/evento",n.context.$implicit.id);l(n,17,0,t)},function(l,n){l(n,2,0,n.context.$implicit.id),l(n,4,0,n.context.$implicit.name);var t=u.Gb(n,6,0,l(n,7,0,u.xb(n.parent,0),n.context.$implicit.startDate,"dd-MM-yyyy"));l(n,6,0,t);var e=u.Gb(n,9,0,l(n,10,0,u.xb(n.parent,0),n.context.$implicit.endDate,"dd-MM-yyyy"));l(n,9,0,e),l(n,12,0,n.context.$implicit.location),l(n,14,0,n.context.$implicit.visible)})}function d(l){return u.Hb(0,[u.zb(0,r.d,[u.u]),(l()(),u.pb(1,0,null,null,24,"div",[],null,null,null,null,null)),(l()(),u.pb(2,0,null,null,2,"button",[["class","btn btn-primary"],["routerLink","/evento"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.xb(l,3).onClick()&&e),e},null,null)),u.ob(3,16384,null,0,o.p,[o.o,o.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),(l()(),u.Fb(-1,null,[" Crea nuovo evento "])),(l()(),u.pb(5,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.caricaEventi()&&u),u},null,null)),(l()(),u.Fb(-1,null,[" Ricarica "])),(l()(),u.pb(7,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.pb(8,0,null,null,17,"table",[["class","table table-responsive table-striped table-hover"]],null,null,null,null,null)),(l()(),u.pb(9,0,null,null,16,"tbody",[],null,null,null,null,null)),(l()(),u.pb(10,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),u.pb(11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Id"])),(l()(),u.pb(13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Nome"])),(l()(),u.pb(15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Data Inizio"])),(l()(),u.pb(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Data Fine"])),(l()(),u.pb(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Location"])),(l()(),u.pb(21,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Visibile"])),(l()(),u.pb(23,0,null,null,0,"th",[],null,null,null,null,null)),(l()(),u.gb(16777216,null,null,1,null,v)),u.ob(25,278528,null,0,r.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,"/evento"),l(n,25,0,t.listaEventi)},null)}function h(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-lista-eventi",[],null,null,null,d,p)),u.ob(1,114688,null,0,b,[s.a,o.a,c],null,null)],function(l,n){l(n,1,0)},null)}var f=u.lb("app-lista-eventi",b,h,{},{},[]),g=t("gIcY"),m=function(){function l(l,n,t){this.activatedRoute=l,this.router=n,this.listaEventiService=t,this.evento={},this.qualcunoHaCliccatoSuSalva=new u.m,this.qualcunoHaCliccatoSuAnnulla=new u.m}return l.prototype.ngOnInit=function(){var l=this;this.activatedRoute.params.subscribe(function(n){n.id&&l.listaEventiService.recuperaEvento(n.id).subscribe(function(n){return l.evento=n},function(){return alert("impossibile caricare l'evento "+n.id)})})},l.prototype.salva=function(){var l=this;if(console.log(this.formEvento),this.formEvento.valid)this.evento.id?this.listaEventiService.modificaEvento(this.evento).subscribe(function(){return l.router.navigateByUrl("/eventi")},function(){return alert("errore durante la modifica")}):this.listaEventiService.creaEvento(this.evento).subscribe(function(){return l.router.navigateByUrl("/eventi")},function(){return alert("errore durante la creazione")}),this.qualcunoHaCliccatoSuSalva.emit();else for(var n in this.formEvento.controls)this.formEvento.controls.hasOwnProperty(n)&&this.formEvento.controls[n].markAsDirty()},l.prototype.annulla=function(){this.qualcunoHaCliccatoSuAnnulla.emit()},l}(),x=u.nb({encapsulation:2,styles:[],data:{}});function C(l){return u.Hb(0,[u.Db(402653184,1,{formEvento:0}),(l()(),u.pb(1,0,null,null,40,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var e=!0;return"submit"===n&&(e=!1!==u.xb(l,3).onSubmit(t)&&e),"reset"===n&&(e=!1!==u.xb(l,3).onReset()&&e),e},null,null)),u.ob(2,16384,null,0,g.n,[],null,null),u.ob(3,4210688,[[1,4],["formEvento",4]],0,g.j,[[8,null],[8,null]],null,null),u.Cb(2048,null,g.b,null,[g.j]),u.ob(5,16384,null,0,g.i,[[4,g.b]],null,null),(l()(),u.pb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Fb(7,null,["Dettaglio Evento ",""])),(l()(),u.pb(8,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u.pb(9,0,null,null,1,"label",[["for","nome"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Nome Evento:"])),(l()(),u.pb(11,0,null,null,7,"input",[["class","form-control"],["id","nome"],["name","nome"],["placeholder","Inserisci qui un nome per l'evento"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,i=l.component;return"input"===n&&(e=!1!==u.xb(l,12)._handleInput(t.target.value)&&e),"blur"===n&&(e=!1!==u.xb(l,12).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.xb(l,12)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.xb(l,12)._compositionEnd(t.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.evento.name=t)&&e),e},null,null)),u.ob(12,16384,null,0,g.c,[u.D,u.k,[2,g.a]],null,null),u.ob(13,16384,null,0,g.l,[],{required:[0,"required"]},null),u.Cb(1024,null,g.e,function(l){return[l]},[g.l]),u.Cb(1024,null,g.f,function(l){return[l]},[g.c]),u.ob(16,671744,[["nomeModel",4]],0,g.k,[[2,g.b],[6,g.e],[8,null],[6,g.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Cb(2048,null,g.g,null,[g.k]),u.ob(18,16384,null,0,g.h,[[4,g.g]],null,null),(l()(),u.pb(19,0,null,null,1,"div",[["class","alert alert-danger"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(-1,null,[" Il nome \xe8 obbligatorio "])),(l()(),u.pb(21,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u.pb(22,0,null,null,1,"label",[["for","descrizione"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Descrizione Evento:"])),(l()(),u.pb(24,0,null,null,7,"input",[["class","form-control"],["id","descrizione"],["name","descrizione"],["placeholder","Inserisci qui un descrizione per l'evento"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,i=l.component;return"input"===n&&(e=!1!==u.xb(l,25)._handleInput(t.target.value)&&e),"blur"===n&&(e=!1!==u.xb(l,25).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.xb(l,25)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.xb(l,25)._compositionEnd(t.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.evento.description=t)&&e),e},null,null)),u.ob(25,16384,null,0,g.c,[u.D,u.k,[2,g.a]],null,null),u.ob(26,16384,null,0,g.l,[],{required:[0,"required"]},null),u.Cb(1024,null,g.e,function(l){return[l]},[g.l]),u.Cb(1024,null,g.f,function(l){return[l]},[g.c]),u.ob(29,671744,[["descrizioneModel",4]],0,g.k,[[2,g.b],[6,g.e],[8,null],[6,g.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Cb(2048,null,g.g,null,[g.k]),u.ob(31,16384,null,0,g.h,[[4,g.g]],null,null),(l()(),u.pb(32,0,null,null,1,"div",[["class","alert alert-danger"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(-1,null,[" La descrizione \xe8 obbligatoria "])),(l()(),u.pb(34,0,null,null,1,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.salva()&&u),u},null,null)),(l()(),u.Fb(-1,null,[" Salva "])),(l()(),u.pb(36,0,null,null,2,"button",[["class","btn btn-default"],["routerLink","/eventi"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.xb(l,37).onClick()&&e),e},null,null)),u.ob(37,16384,null,0,o.p,[o.o,o.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),(l()(),u.Fb(-1,null,[" Annulla "])),(l()(),u.pb(39,0,null,null,2,"button",[["routerLink","/evento/85"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.xb(l,40).onClick()&&e),e},null,null)),u.ob(40,16384,null,0,o.p,[o.o,o.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),(l()(),u.Fb(-1,null,[" vai al 85 "]))],function(l,n){var t=n.component;l(n,13,0,""),l(n,16,0,"nome",t.evento.name),l(n,26,0,""),l(n,29,0,"descrizione",t.evento.description),l(n,37,0,"/eventi"),l(n,40,0,"/evento/85")},function(l,n){var t=n.component;l(n,1,0,u.xb(n,5).ngClassUntouched,u.xb(n,5).ngClassTouched,u.xb(n,5).ngClassPristine,u.xb(n,5).ngClassDirty,u.xb(n,5).ngClassValid,u.xb(n,5).ngClassInvalid,u.xb(n,5).ngClassPending),l(n,7,0,null==t.evento?null:t.evento.name),l(n,11,0,u.xb(n,13).required?"":null,u.xb(n,18).ngClassUntouched,u.xb(n,18).ngClassTouched,u.xb(n,18).ngClassPristine,u.xb(n,18).ngClassDirty,u.xb(n,18).ngClassValid,u.xb(n,18).ngClassInvalid,u.xb(n,18).ngClassPending),l(n,19,0,u.xb(n,16).valid||u.xb(n,16).pristine),l(n,24,0,u.xb(n,26).required?"":null,u.xb(n,31).ngClassUntouched,u.xb(n,31).ngClassTouched,u.xb(n,31).ngClassPristine,u.xb(n,31).ngClassDirty,u.xb(n,31).ngClassValid,u.xb(n,31).ngClassInvalid,u.xb(n,31).ngClassPending),l(n,32,0,u.xb(n,29).valid||u.xb(n,29).pristine)})}function E(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-dettaglio-evento",[],null,null,null,C,x)),u.ob(1,114688,null,0,m,[o.a,o.o,c],null,null)],function(l,n){l(n,1,0)},null)}var y=u.lb("app-dettaglio-evento",m,E,{evento:"evento"},{qualcunoHaCliccatoSuAnnulla:"qualcunoHaCliccatoSuAnnulla",qualcunoHaCliccatoSuSalva:"qualcunoHaCliccatoSuSalva"},[]),k=t("t/Na"),w=function(){function l(){}return l.prototype.canActivate=function(l,n){return confirm("Posso navigare verso Eventi?")},l}(),S=function(){function l(){}return l.prototype.canDeactivate=function(l,n,t){return confirm("Sicuro di voler uscire?")},l}(),F=function(){function l(l){this.service=l}return l.prototype.resolve=function(l,n){return this.service.recuperaEventi()},l}();t.d(n,"EventiModuleNgFactory",function(){return D});var D=u.mb(e,[],function(l){return u.vb([u.wb(512,u.j,u.bb,[[8,[i.a,f,y]],[3,u.j],u.x]),u.wb(4608,r.l,r.k,[u.u,[2,r.r]]),u.wb(4608,g.o,g.o,[]),u.wb(4608,k.i,k.o,[r.c,u.B,k.m]),u.wb(4608,k.p,k.p,[k.i,k.n]),u.wb(5120,k.a,function(l){return[l]},[k.p]),u.wb(4608,k.l,k.l,[]),u.wb(6144,k.j,null,[k.l]),u.wb(4608,k.h,k.h,[k.j]),u.wb(6144,k.b,null,[k.h]),u.wb(4608,k.f,k.k,[k.b,u.q]),u.wb(4608,k.c,k.c,[k.f]),u.wb(4608,c,c,[k.c]),u.wb(4608,w,w,[]),u.wb(4608,S,S,[]),u.wb(4608,F,F,[c]),u.wb(1073742336,r.b,r.b,[]),u.wb(1073742336,o.s,o.s,[[2,o.y],[2,o.o]]),u.wb(1073742336,g.m,g.m,[]),u.wb(1073742336,g.d,g.d,[]),u.wb(1073742336,k.e,k.e,[]),u.wb(1073742336,k.d,k.d,[]),u.wb(1073742336,e,e,[]),u.wb(256,k.m,"XSRF-TOKEN",[]),u.wb(256,k.n,"X-XSRF-TOKEN",[]),u.wb(1024,o.m,function(){return[[{path:"lista",component:b,resolve:{lista:F}},{path:"dettaglio",component:m},{path:"dettaglio/:id",component:m},{path:"",redirectTo:"lista",pathMatch:"full"}]]},[])])})}}]);