(this.webpackJsonpleader=this.webpackJsonpleader||[]).push([[0],{130:function(e,t,a){e.exports=a(168)},159:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),o=a.n(r),l=a(20),i=a.n(l),s=a(32),m=a.n(s),u=a(26),d=a(49),p=a.n(d),h=a(48),f=a.n(h),E=(a(136),a(25)),b=a.n(E),g=a(22),v=a.n(g),w=a(43),k=a.n(w),j=a(33),O=a.n(j),x=a(40),y=a.n(x),C=a(42),P=a.n(C),U=a(41),_=a.n(U),A=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(b.a,{id:t},c.a.createElement(v.a,null,"Example"),n&&c.a.createElement(O.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(y.a,{before:n.photo_200?c.a.createElement(_.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(O.a,{title:"Navigation Example"},c.a.createElement(P.a,null,c.a.createElement(k.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},I=a(34),K=a(47),S=a.n(K),V=a(44),N=a.n(V),W=a(45),z=a.n(W),B=a(46),J=a.n(B),T=(a(159),Object(I.b)()),D=function(e){return c.a.createElement(b.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(S.a,{onClick:e.go,"data-to":"home"},T===I.a?c.a.createElement(N.a,null):c.a.createElement(z.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:J.a,alt:"Persik The Cat"}))},F=function(){var e=Object(n.useState)("home"),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),l=Object(u.a)(o,2),s=l[0],d=l[1],h=Object(n.useState)(c.a.createElement(f.a,{size:"large"})),E=Object(u.a)(h,2),b=E[0],g=E[1];Object(n.useEffect)((function(){i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){var e;m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(i.a.send("VKWebAppGetUserInfo"));case 2:e=t.sent,d(e),g(null);case 5:case"end":return t.stop()}}))}()}),[]);var v=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(p.a,{activePanel:a,popout:b},c.a.createElement(A,{id:"home",fetchedUser:s,go:v}),c.a.createElement(D,{id:"persik",go:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.send("VKWebAppInit"),o.a.render(c.a.createElement(F,null),document.getElementById("root"))},46:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[130,1,2]]]);
//# sourceMappingURL=main.8f549699.chunk.js.map