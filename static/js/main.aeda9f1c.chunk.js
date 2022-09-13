(this["webpackJsonpaskia-lite-app"]=this["webpackJsonpaskia-lite-app"]||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(90),s=a.n(n),r=a(15),c=(a(101),a(2)),o=a(3),i=a(20),l=a(4),d=a(5),u=a(0),j=a(7),h=(a(102),a(103),a(23)),m=a.n(h),b="https://8dd0d497-6cca-40d8-9835-5ca72559da33.mock.pstmn.io/AskiaPortal/api/",p=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"login",value:function(e,t){return m.a.post(b+"Account/SignIn",{userName:e,password:t}).then((function(){return!0})).catch((function(e){return console.log(e.response.data.error),!1}))}},{key:"getInfo",value:function(){return m.a.get(b+"Account/Info").then((function(e){if(e.data.login){var t={};return t.id=e.data.guid,t.username=e.data.login,t.email=e.data.email,localStorage.setItem("user",JSON.stringify(t)),console.log(t),t}}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"getCurrentUser",value:function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null}}]),e}()),O=a.p+"static/media/logo.b197ed51.svg",v=a(27),g=a(46),f=a(1),x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleLogin=n.handleLogin.bind(Object(i.a)(n)),n.state={username:"",password:"",loading:!1,message:""},n}return Object(o.a)(a,[{key:"validationSchema",value:function(){return g.a().shape({username:g.b().required("This field is required!"),password:g.b().required("This field is required!")})}},{key:"handleLogin",value:function(e){var t=this,a=e.username,n=e.password;this.setState({message:"",loading:!0}),p.login(a,n).then((function(){return p.getInfo().then((function(){t.props.history.push("/askia-lite-app/profile"),window.location.reload()}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:a})})).catch((function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();console.log(a),t.setState({loading:!1,message:a})}))}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.message;return Object(f.jsx)("div",{className:"col-md-12",children:Object(f.jsxs)("div",{className:"card card-container",children:[Object(f.jsx)("img",{src:O,alt:"profile-img",className:"profile-img-card"}),Object(f.jsx)(v.d,{initialValues:{username:"",password:""},validationSchema:this.validationSchema,onSubmit:this.handleLogin,children:Object(f.jsxs)(v.c,{children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"username",children:"Username"}),Object(f.jsx)(v.b,{name:"username",type:"text",className:"form-control"}),Object(f.jsx)(v.a,{name:"username",component:"div",className:"alert alert-danger"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"password",children:"Password"}),Object(f.jsx)(v.b,{name:"password",type:"password",className:"form-control"}),Object(f.jsx)(v.a,{name:"password",component:"div",className:"alert alert-danger"})]}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:[t&&Object(f.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(f.jsx)("span",{children:"Login"})]})}),a&&Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("div",{className:"alert alert-danger",role:"alert",children:a})})]})})]})})}}]),a}(u.Component),k=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={content:"This is a PoC for SignalR"},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("header",{className:"jumbotron",children:Object(f.jsx)("h3",{children:this.state.content})})})}}]),a}(u.Component),N=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={redirect:null,userReady:!1,currentUser:{accessToken:""}},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=p.getCurrentUser();e||this.setState({redirect:"/home"}),this.setState({currentUser:e,userReady:!0})}},{key:"render",value:function(){if(this.state.redirect)return Object(f.jsx)(j.a,{to:this.state.redirect});var e=this.state.currentUser;return Object(f.jsx)("div",{className:"container",children:this.state.userReady?Object(f.jsxs)("div",{children:[Object(f.jsx)("header",{className:"jumbotron",children:Object(f.jsxs)("h3",{children:[Object(f.jsx)("strong",{children:e.username})," Profile"]})}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(f.jsx)("strong",{children:"Authorities:"}),Object(f.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(f.jsx)("li",{children:e},t)}))})]}):null})}}]),a}(u.Component);function y(){var e=localStorage.getItem("user"),t=null;return e&&(t=JSON.parse(e)),t&&t.accessToken?{Authorization:"Bearer "+t.accessToken}:{Authorization:""}}var S="http://localhost:8080/api/test/",w=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"getPublicContent",value:function(){return m.a.get(S+"all")}},{key:"getUserBoard",value:function(){return m.a.get(S+"user",{headers:y()})}},{key:"getModeratorBoard",value:function(){return m.a.get(S+"mod",{headers:y()})}},{key:"getAdminBoard",value:function(){return m.a.get(S+"admin",{headers:y()})}}]),e}()),B={on:function(e,t){document.addEventListener(e,(function(e){return t(e)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}},C=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&B.dispatch("logout")}))}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("header",{className:"jumbotron",children:Object(f.jsx)("h3",{children:this.state.content})})})}}]),a}(u.Component),U=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.getModeratorBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&B.dispatch("logout")}))}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("header",{className:"jumbotron",children:Object(f.jsx)("h3",{children:this.state.content})})})}}]),a}(u.Component),A=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.getAdminBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}),t.response&&401===t.response.status&&B.dispatch("logout")}))}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("header",{className:"jumbotron",children:Object(f.jsx)("h3",{children:this.state.content})})})}}]),a}(u.Component),L=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).logOut=n.logOut.bind(Object(i.a)(n)),n.state={showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=p.getCurrentUser();e&&this.setState({currentUser:e,showModeratorBoard:!1,showAdminBoard:!1}),B.on("logout",this.logOut)}},{key:"componentWillUnmount",value:function(){B.remove("logout",this.logOut)}},{key:"logOut",value:function(){p.logout(),this.setState({showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0})}},{key:"render",value:function(){var e=this.state,t=e.currentUser,a=e.showModeratorBoard,n=e.showAdminBoard;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(f.jsx)(r.b,{to:"/askia-lite-app",className:"navbar-brand",children:"Askia Lite"}),Object(f.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/askia-lite-app/home",className:"nav-link",children:"Home"})}),a&&Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/askia-lite-app/mod",className:"nav-link",children:"Moderator Board"})}),n&&Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/askia-lite-app/admin",className:"nav-link",children:"Admin Board"})}),t&&Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/askia-lite-app/user",className:"nav-link",children:"User"})})]}),t?Object(f.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/askia-lite-app/profile",className:"nav-link",children:t.username})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)("a",{href:"/askia-lite-app/login",className:"nav-link",onClick:this.logOut,children:"LogOut"})})]}):Object(f.jsx)("div",{className:"navbar-nav ml-auto",children:Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(r.b,{to:"/askia-lite-app/login",className:"nav-link",children:"Login"})})})]}),Object(f.jsx)("div",{className:"container mt-3",children:Object(f.jsxs)(j.d,{children:[Object(f.jsx)(j.b,{exact:!0,path:["/askia-lite-app","/askia-lite-app/home"],component:k}),Object(f.jsx)(j.b,{exact:!0,path:"/askia-lite-app/login",component:x}),Object(f.jsx)(j.b,{exact:!0,path:"/askia-lite-app/profile",component:N}),Object(f.jsx)(j.b,{path:"/askia-lite-app/user",component:C}),Object(f.jsx)(j.b,{path:"/askia-lite-app/mod",component:U}),Object(f.jsx)(j.b,{path:"/askia-lite-app/admin",component:A})]})})]})}}]),a}(u.Component),M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,234)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};s.a.render(Object(f.jsx)(r.a,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),M()}},[[233,1,2]]]);
//# sourceMappingURL=main.aeda9f1c.chunk.js.map