(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),i=n(14),o=n.n(i),r=(n(19),n(9)),c=n.n(r),u=n(11),h=n(4),l=n(5),d=n(1),p=n(7),g=n(6),b=(n(21),n(10)),j=n(8),m=n(3),f=n.n(m),v=n(0),O=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={userinput:[],messages:[]},a.addMessage=a.addMessage.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"addMessage",value:function(e){var t=this,n={message:this.state.message},a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(n)};fetch("/api/v1/chatmessages/",a).then((function(e){var n=Object(b.a)(t.state.messages);t.setState({messages:n})}))}},{key:"render",value:function(){var e=this.state.userinput.map((function(t){return Object(v.jsx)("li",{children:Object(v.jsx)("p",{children:e.input})},t.id)}));return Object(v.jsxs)("form",{className:"input_field",onSubmit:this.addMessage,children:[Object(v.jsx)("input",{className:"type_input",type:"textarea",name:"message",value:this.state.message,onChange:this.handleInput}),Object(v.jsx)("button",{className:"button_input",type:"submit",children:"Send"})]})}}]),n}(s.a.Component),y=n(13),k=n.n(y),x=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isEditing:!1,message:a.props.chatMessage.message},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.saveMessage=a.saveMessage.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"saveMessage",value:function(){var e=this.props.chatMessage;e.message=this.state.message,this.props.updateMessage(e),this.setState({isEditing:!1})}},{key:"render",value:function(){var e=this,t=this.props.chatMessage;return Object(v.jsxs)("li",{children:[Object(v.jsx)("p",{className:"username",children:t.username}),this.state.isEditing?Object(v.jsx)("input",{type:"text",name:"message",value:this.state.message,onChange:this.handleInput}):Object(v.jsx)("p",{className:"message_display",children:t.message}),this.state.isEditing?Object(v.jsx)("button",{type:"button",onClick:this.saveMessage,children:"Save"}):Object(v.jsx)("button",{type:"button",onClick:function(){return e.setState({isEditing:!0})},children:"Edit"}),Object(v.jsx)("button",{type:"button",onClick:function(){return e.props.removeMessage(t.id)},children:"Delete"}),Object(v.jsx)(k.a,{format:"MM/DD/YYYY hh:mm:ss",className:"date-field",children:t.created_at})]})}}]),n}(s.a.Component),S=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={messages:[],isEditing:null,text:""},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.updateMessage=a.updateMessage.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/chatmessages/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({messages:t})}))}},{key:"updateMessage",value:function(e){var t=this,n={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/chatmessages/".concat(e.id,"/"),n).then((function(e){return e.json()})).then((function(n){var a=Object(b.a)(t.state.messages),s=a.findIndex((function(t){return t.id===e.id}));a[s]=n,t.setState({messages:a})}))}},{key:"removeMessage",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")}};fetch("/api/v1/chatmessages/".concat(e,"/"),n).then((function(n){var a=Object(b.a)(t.state.messages),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({messages:a})}))}},{key:"render",value:function(){var e=this,t=this.state.messages.map((function(t){return Object(v.jsx)(x,{chatMessage:t,updateMessage:e.updateMessage},t.id)}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("ul",{children:t}),Object(v.jsx)(O,{addmessage:this.addMessage})]})}}]),n}(s.a.Component),w=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){return Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(v.jsx)("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(v.jsx)("input",{type:"password",placeholder:"password",name:"password1",value:this.state.password1,onChange:this.handleInput}),Object(v.jsx)("input",{type:"password",placeholder:"enter password again",name:"password2",value:this.state.password2,onChange:this.handleInput}),Object(v.jsx)("button",{type:"Submit",children:"Register"})]})}}]),n}(s.a.Component),C=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){return Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(v.jsx)("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(v.jsx)("input",{type:"password",placeholder:"password",name:"password",value:this.state.password1,onChange:this.handleInput}),Object(v.jsx)("button",{type:"Submit",children:"Login"})]})}}]),n}(s.a.Component);var I=function(e){return Object(v.jsxs)("nav",{children:[Object(v.jsx)("button",{className:"login",onClick:function(){return e.handleNavigation("login")},children:"Login"}),Object(v.jsx)("button",{className:"registration",onClick:function(){return e.handleNavigation("registration")},children:"Register"}),Object(v.jsx)("button",{className:"logout",onClick:function(){return e.handleLogout("logout")},children:"Logout"})]})},N=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={selection:f.a.get("Authorization")?"chatwindow":"login"},a.handleNavigation=a.handleNavigation.bind(Object(d.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(d.a)(a)),a.handleLogin=a.handleLogin.bind(Object(d.a)(a)),a.handleLogout=a.handleLogout.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleNavigation",value:function(e){this.setState({selection:e})}},{key:"handleRegistration",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=11;break}return e.next=8,s.json().catch(a);case 8:i=e.sent,f.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"chatwindow"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogin",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=11;break}return e.next=8,s.json().catch(a);case 8:i=e.sent,f.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"chatwindow"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(f.a.remove("Authorization"),this.setState({selection:"login"}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I,{handleNavigation:this.handleNavigation,isAuth:"chatwindow"===this.state.selection,handleLogout:this.handleLogout}),Object(v.jsxs)("div",{className:"container",children:["login"===this.state.selection&&Object(v.jsx)(C,{handleNavigation:this.handleNavigation,handleLogin:this.handleLogin}),"registration"===this.state.selection&&Object(v.jsx)(w,{handleNavigation:this.handleNavigation,handleRegistration:this.handleRegistration}),"chatwindow"===this.state.selection&&Object(v.jsx)(S,{})]})]})}}]),n}(s.a.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};o.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),M()}},[[25,1,2]]]);
//# sourceMappingURL=main.671a9546.chunk.js.map