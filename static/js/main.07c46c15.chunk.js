(this["webpackJsonpelecciones-app"]=this["webpackJsonpelecciones-app"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),s=n(16),r=n.n(s),a=n(18),i=Object(o.createContext)(),l=n(8),j="[auth] login",u="[auth] logout",b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},t.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},d=n(12),g=n(2),m=n(19),O=function(e){var t=e.isAuthenticated,n=e.component,o=e.redirect,s=Object(m.a)(e,["isAuthenticated","component","redirect"]);return Object(c.jsx)(g.b,Object(l.a)(Object(l.a)({},s),{},{component:function(e){return t?Object(c.jsx)(g.a,{to:o}):Object(c.jsx)(n,Object(l.a)({},e))}}))},h=function(){return Object(c.jsx)("div",{className:"login__main",children:Object(c.jsxs)("div",{className:"login__box-content",children:[Object(c.jsx)("div",{className:"login__box-img",children:Object(c.jsx)("img",{src:"assets/icons/icon-login.svg",alt:"Logo Vote"})}),Object(c.jsx)("h2",{children:"Elecciones 2021"}),Object(c.jsx)("h3",{children:"Sistema de conteo"}),Object(c.jsxs)("form",{className:"login__box-form",children:[Object(c.jsx)("input",{type:"text",placeholder:"Usuario",className:"login__box-form__userName",autoComplete:"off",name:"userLogin",autoFocus:"on",maxLength:"50",minLength:"2"}),Object(c.jsx)("input",{className:"login__box-form__userPassword",placeholder:"Contrase\xf1a",name:"userPassword",maxLength:"50",minLength:"2",type:"password"}),Object(c.jsx)("button",{className:"login__box-form__submit",type:"submit",children:"Ingresar"})]})]})})},x=function(){var e=Object(o.useContext)(i).user;return Object(c.jsx)(d.a,{children:Object(c.jsx)("div",{children:Object(c.jsx)(g.d,{children:Object(c.jsx)(O,{isAuthenticated:e.logged,path:"/login",redirect:"/login",component:h})})})})},p=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},f=function(){var e=Object(o.useReducer)(b,{},p),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(o.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n))}),[n]),Object(c.jsx)(i.Provider,{value:{user:n,dispatch:s},children:Object(c.jsx)(x,{})})};n(30);r.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.07c46c15.chunk.js.map