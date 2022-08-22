(this["webpackJsonpaskia-lite-app"]=this["webpackJsonpaskia-lite-app"]||[]).push([[0],{102:function(e,t,n){},104:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(91),s=n.n(a),r=n(15),c=(n(102),n(2)),o=n(3),i=n(20),l=n(4),d=n(5),u=n(0),j=n(7),h=(n(103),n(104),n(22)),m=n.n(h),b="https://8dd0d497-6cca-40d8-9835-5ca72559da33.mock.pstmn.io/AskiaPortal/api/",O=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"login",value:function(e,t){return m.a.post(b+"Account/SignIn",{userName:e,password:t}).then((function(){return!0})).catch((function(e){return console.log(e.response.data.error),!1}))}},{key:"getInfo",value:function(){return m.a.get(b+"Account/Info").then((function(e){if(e.data.login){var t={};return t.id=e.data.guid,t.username=e.data.login,t.email=e.data.email,localStorage.setItem("user",JSON.stringify(t)),console.log(t),t}}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"getCurrentUser",value:function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null}}]),e}()),v=n.p+"static/media/logo.b197ed51.svg",p=n(26),g=n(46),f=n(1),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleLogin=a.handleLogin.bind(Object(i.a)(a)),a.state={username:"",password:"",loading:!1,message:""},a}return Object(o.a)(n,[{key:"validationSchema",value:function(){return g.a().shape({username:g.b().required("This field is required!"),password:g.b().required("This field is required!")})}},{key:"handleLogin",value:function(e){var t=this,n=e.username,a=e.password;this.setState({message:"",loading:!0}),O.login(n,a).then((function(){return O.getInfo().then((function(){t.props.history.push("/profile"),window.location.reload()}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:n})})).catch((function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();console.log(n),t.setState({loading:!1,message:n})}))}))}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.message;return Object(f.jsx)("div",{className:"col-md-12",children:Object(f.jsxs)("div",{className:"card card-container",children:[Object(f.jsx)("img",{src:v,alt:"profile-img",className:"profile-img-card"}),Object(f.jsx)(p.d,{initialValues:{username:"",password:""},validationSchema:this.validationSchema,onSubmit:this.handleLogin,children:Object(f.jsxs)(p.c,{children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"username",children:"Username"}),Object(f.jsx)(p.b,{name:"username",type:"text",className:"form-control"}),Object(f.jsx)(p.a,{name:"username",component:"div",className:"alert alert-danger"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"password",children:"Password"}),Object(f.jsx)(p.b,{name:"password",type:"password",className:"form-control"}),Object(f.jsx)(p.a,{name:"password",component:"div",className:"alert alert-danger"})]}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:[t&&Object(f.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(f.jsx)("span",{children:"Login"})]})}),n&&Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("div",{className:"alert alert-danger",role:"alert",children:n})})]})})]})})}}]),n}(u.Component),N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:"This is a PoC for SignalR"},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("header",{className:"jumbotron",children:Object(f.jsx)("h3",{children:this.state.content})})})}}]),n}(u.Component),k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={redirect:null,userReady:!1,currentUser:{accessToken:""}},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=O.getCurrentUser();e||this.setState({redirect:"/home"}),this.setState({currentUser:e,userReady:!0})}},{key:"render",value:function(){if(this.state.redirect)return Object(f.jsx)(j.a,{to:this.state.redirect});var e=this.state.currentUser;return Object(f.jsx)("div",{className:"container",children:this.state.userReady?Object(f.jsxs)("div",{children:[Object(f.jsx)("header",{className:"jumbotron",children:Object(f.jsxs)("h3",{children:[Object(f.jsx)("strong",{children:e.username})," Profile"]})}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(f.jsx)("strong",{children:"Authorities:"}),Object(f.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(f.jsx)("li",{children:e},t)}))})]}):null})}}]),n}(u.Component);function y(){var e=localStorage.getItem("user"),t=null;return e&&(t=JSON.parse(e)),t&&t.accessToken?{Authorization:"Bearer "+t.accessToken}:{Authorization:""}}var S="http://localhost:8080/api/test/",w=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"getPublicContent",value:function(){return m.a.get(S+"all")}},{key:"getUserBoard",value:function(){return m.a.get(S+"user",{headers:y()})}},{key:"getModeratorBoard",value:function(){return m.a.get(S+"mod",{headers:y()})}},{key:"getAdminBoard",value:function(){return m.a.get(S+"admin",{headers:y()})}}]),e}()),B={on:function(e,t){document.addEventListener(e,(function(e){return t(e)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}},C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;w.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&B.dispatch("logout")}))}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("header",{className:"jumbotron",children:Object(f.jsx)("h3",{children:this.state.content})})})}}]),n}(u.Component),U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;w.getModeratorBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&B.dispatch("logout")}))}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("header",{className:"jumbotron",children:Object(f.jsx)("h3",{children:this.state.content})})})}}]),n}(u.Component),A=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;w.getAdminBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&B.dispatch("logout")}))}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("header",{className:"jumbotron",children:Object(f.jsx)("h3",{children:this.state.content})})})}}]),n}(u.Component),L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).logOut=a.logOut.bind(Object(i.a)(a)),a.state={showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=O.getCurrentUser();e&&this.setState({currentUser:e,showModeratorBoard:!1,showAdminBoard:!1}),B.on("logout",this.logOut)}},{key:"componentWillUnmount",value:function(){B.remove("logout",this.logOut)}},{key:"logOut",value:function(){O.logout(),this.setState({showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0})}},{key:"render",value:function(){var e=this.state,t=e.currentUser,n=e.showModeratorBoard,a=e.showAdminBoard;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(f.jsx)(r.b,{to:"/",className:"navbar-brand",children:"Askia Lite"}),Object(f.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/home",className:"nav-link",children:"Home"})}),n&&Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/mod",className:"nav-link",children:"Moderator Board"})}),a&&Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/admin",className:"nav-link",children:"Admin Board"})}),t&&Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/user",className:"nav-link",children:"User"})})]}),t?Object(f.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/profile",className:"nav-link",children:t.username})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)("a",{href:"/login",className:"nav-link",onClick:this.logOut,children:"LogOut"})})]}):Object(f.jsx)("div",{className:"navbar-nav ml-auto",children:Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/login",className:"nav-link",children:"Login"})})})]}),Object(f.jsx)("div",{className:"container mt-3",children:Object(f.jsxs)(j.d,{children:[Object(f.jsx)(j.b,{exact:!0,path:["/","/home"],component:N}),Object(f.jsx)(j.b,{exact:!0,path:"/login",component:x}),Object(f.jsx)(j.b,{exact:!0,path:"/profile",component:k}),Object(f.jsx)(j.b,{path:"/user",component:C}),Object(f.jsx)(j.b,{path:"/mod",component:U}),Object(f.jsx)(j.b,{path:"/admin",component:A})]})})]})}}]),n}(u.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};s.a.render(Object(f.jsx)(r.a,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),M()}},[[231,1,2]]]);
//# sourceMappingURL=main.3a68a315.chunk.js.map