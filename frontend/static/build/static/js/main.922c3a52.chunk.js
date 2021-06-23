(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),i=n(13),o=n.n(i),r=(n(19),n(8)),c=n.n(r),u=n(11),h=n(4),l=n(5),d=n(1),p=n(7),j=n(6),b=(n(21),n(10)),g=n(9),m=n(3),f=n.n(m),O=n(0),v=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={userinput:[],messages:[]},a.addMessage=a.addMessage.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"addMessage",value:function(e){var t=this,n={message:this.state.message},a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(n)};fetch("/api/v1/chatmessages/",a).then((function(e){var n=Object(b.a)(t.state.messages);t.setState({messages:n})}))}},{key:"render",value:function(){var e=this.state.userinput.map((function(t){return Object(O.jsx)("li",{children:Object(O.jsx)("p",{children:e.input})},t.id)}));return Object(O.jsxs)("form",{className:"input_field",onSubmit:this.addMessage,children:[Object(O.jsx)("input",{className:"type_input",type:"textarea",name:"message",value:this.state.message,onChange:this.handleInput}),Object(O.jsx)("button",{className:"button_input",type:"submit",children:"Send"})]})}}]),n}(s.a.Component),y=n(14),x=n.n(y),k=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={messages:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/chatmessages/").then((function(e){return e.json()})).then((function(t){return e.setState({messages:t})}))}},{key:"removeMessage",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")}};fetch("/api/v1/chatmessages/",n).then((function(n){var a=Object(b.a)(t.state.messages),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({messages:a})}))}},{key:"editMessage",value:function(e){var t={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify({title:"Message"})};fetch("/api/v1/chatmessages/",t).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.messages.map((function(t){return Object(O.jsx)("ul",{children:Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{className:"username",children:t.username}),Object(O.jsx)("p",{className:"message_display",children:JSON.stringify(t.message)}),Object(O.jsx)(x.a,{format:"MM/DD/YYYY hh:mm:ss",className:"date-field",children:t.created_at}),Object(O.jsx)("button",{type:"button",onClick:function(){return e.editMessage(t.id)},children:"Edit"}),Object(O.jsx)("button",{type:"button",onClick:function(){return e.removeMessage(t.id)},children:"Delete"})]},t.id)})}));return Object(O.jsxs)(O.Fragment,{children:[t,Object(O.jsx)(v,{addmessage:this.addMessage})]})}}]),n}(s.a.Component),S=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(O.jsx)("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(O.jsx)("input",{type:"password",placeholder:"password",name:"password1",value:this.state.password1,onChange:this.handleInput}),Object(O.jsx)("input",{type:"password",placeholder:"enter password again",name:"password2",value:this.state.password2,onChange:this.handleInput}),Object(O.jsx)("button",{type:"Submit",children:"Register"})]})}}]),n}(s.a.Component),w=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(O.jsx)("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(O.jsx)("input",{type:"password",placeholder:"password",name:"password",value:this.state.password1,onChange:this.handleInput}),Object(O.jsx)("button",{type:"Submit",children:"Login"})]})}}]),n}(s.a.Component);var C=function(e){return Object(O.jsxs)("nav",{children:[Object(O.jsx)("button",{className:"login",onClick:function(){return e.handleNavigation("login")},children:"Login"}),Object(O.jsx)("button",{className:"registration",onClick:function(){return e.handleNavigation("registration")},children:"Register"}),Object(O.jsx)("button",{className:"logout",onClick:function(){return e.handleLogout("logout")},children:"Logout"})]})},N=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={selection:f.a.get("Authorization")?"chatwindow":"login"},a.handleNavigation=a.handleNavigation.bind(Object(d.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(d.a)(a)),a.handleLogin=a.handleLogin.bind(Object(d.a)(a)),a.handleLogout=a.handleLogout.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleNavigation",value:function(e){this.setState({selection:e})}},{key:"handleRegistration",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=11;break}return e.next=8,s.json().catch(a);case 8:i=e.sent,f.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"chatwindow"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogin",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=11;break}return e.next=8,s.json().catch(a);case 8:i=e.sent,f.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"chatwindow"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(f.a.remove("Authorization"),this.setState({selection:"login"}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(C,{handleNavigation:this.handleNavigation,isAuth:"chatwindow"===this.state.selection,handleLogout:this.handleLogout}),Object(O.jsxs)("div",{className:"container",children:["login"===this.state.selection&&Object(O.jsx)(w,{handleNavigation:this.handleNavigation,handleLogin:this.handleLogin}),"registration"===this.state.selection&&Object(O.jsx)(S,{handleNavigation:this.handleNavigation,handleRegistration:this.handleRegistration}),"chatwindow"===this.state.selection&&Object(O.jsx)(k,{})]})]})}}]),n}(s.a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};o.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root")),T()}},[[25,1,2]]]);
//# sourceMappingURL=main.922c3a52.chunk.js.map