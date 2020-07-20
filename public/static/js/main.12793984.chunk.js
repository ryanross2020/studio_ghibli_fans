(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,a){e.exports=a(57)},47:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(36),c=a.n(l),i=(a(47),a(17)),o=a(18),s=a(21),m=a(20),u=a(59),d=a(60),p=a(22),E=a(7),f=a(19),h=a(6),b=a(24),v=a(25),y=a.n(v),g=a(61);function N(e){var t=e.film,a=t.id,n=t.title,l=t.release_date;t.rt_score,t.director,t.producer,t.description;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h4",null,"Title: ",n),r.a.createElement("p",null,"Release Date: ",l)),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(f.b,{to:"/film/".concat(a),className:"btn btn-secondary"},"Film Details"))))}function O(){var e=Object(b.a)(["\n  query FilmsQuery {\n    films {\n      id\n      title\n      release_date\n      director\n      producer\n      rt_score\n      description\n    }\n  }\n"]);return O=function(){return e},e}var j=y()(O()),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 my-3"},"Films"),r.a.createElement(g.a,{query:j},(function(e){var t=e.loading,a=e.error,l=e.data;return t?r.a.createElement("h4",null,"Loading..."):(a&&console.log(a),console.log(l),r.a.createElement(n.Fragment,null,l.films.map((function(e){return r.a.createElement(N,{key:e.id,film:e})}))))})))}}]),a}(n.Component);a(54);function k(){var e=Object(b.a)(["\n  query FilmQuery($id: ID!) {\n    film(id: $id) {\n      id\n      title\n      release_date\n      director\n      producer\n      rt_score\n      description\n    }\n  }\n"]);return k=function(){return e},e}var F=y()(k()),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.match.params.id;return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{query:F,variables:{id:e}},(function(e){var t=e.loading,a=e.error,n=e.data;if(t)return r.a.createElement("h4",null,"Loading...");a&&console.log(a);var l=n.film,c=l.title,i=l.release_date,o=l.director,s=l.producer,m=l.rt_score,u=l.description;return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 my-3"},r.a.createElement("span",{className:"text-primary"},"Title:")," ",c),r.a.createElement("h4",{className:"mb-3"},"Film Details"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Release Date: ",i),r.a.createElement("li",{className:"list-group-item"},"TOMATOMETER: ",m,"%"),r.a.createElement("li",{className:"list-group-item"},"Director: ",o),r.a.createElement("li",{className:"list-group-item"},"Producer: ",s),r.a.createElement("li",{className:"list-group-item"},"Description: ",u)),r.a.createElement("hr",null),r.a.createElement(f.b,{to:"/",className:"btn btn-outline-secondary"},"Back"))})))}}]),a}(n.Component),D=(a(55),new u.a),q=new d.a({uri:"/graphql"}),T=new p.a({cache:D,link:q}),x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{client:T},r.a.createElement(f.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Studio Ghilbi Fans"),r.a.createElement(h.a,{exact:!0,path:"/",component:w}),r.a.createElement(h.a,{exact:!0,path:"/film/:id",component:_}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.12793984.chunk.js.map