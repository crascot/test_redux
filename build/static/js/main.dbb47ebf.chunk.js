(this.webpackJsonpticker=this.webpackJsonpticker||[]).push([[0],{67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(9),n=a.n(c),r=a(106),i=a(15),o=a(101),l=a(103),d=a(104),b=a(108),j=a(107),u=a(105),O=a(24),m=a(11),h=a(98),f=Object(h.a)({body:{margin:"20px 0",paddingBottom:5,borderTop:"3px solid #0dcaf0","& *":{width:"100%",marginTop:7}},register:{"& *":{textDecoration:"none",color:"inherit"}},hide:{display:"none",margin:30},success:{color:"#4caf50"}}),x=a(5),g=function(){var e=f(),t=Object(s.useState)(""),a=Object(i.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(""),h=Object(i.a)(r,2),g=h[0],p=h[1],v=Object(s.useState)(!1),w=Object(i.a)(v,2),y=w[0],S=w[1],N=Object(s.useState)(e.hide),C=Object(i.a)(N,2),k=C[0],I=C[1],J=Object(s.useState)(""),T=Object(i.a)(J,2),E=T[0],z=T[1];return Object(x.jsxs)(o.a,{className:"form",children:[Object(x.jsxs)(l.a,{className:"form-register head",container:!0,direction:"row",justify:"space-between",children:[Object(x.jsx)(d.a,{variant:"h5",children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),Object(x.jsx)(d.a,{variant:"h5",children:"\u0438\u043b\u0438"}),Object(x.jsx)(b.a,{className:e.register,disabled:y,variant:"outlined",color:"primary",children:Object(x.jsx)(O.b,{to:"/register",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}),Object(x.jsxs)(l.a,{className:"form-register ".concat(e.body),container:!0,children:[Object(x.jsx)(j.a,{id:"standard-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:c,onChange:function(e){n(e.target.value)},disabled:y,type:"text"}),Object(x.jsx)(j.a,{id:"standard-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:g,onChange:function(e){p(e.target.value)},disabled:y,type:"password"})]}),Object(x.jsxs)(l.a,{className:"form-register footer",container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(x.jsxs)(b.a,{id:"login",size:"small",disabled:y,variant:"contained",onClick:function(){return new Promise((function(t,a){var s=JSON.parse(localStorage.getItem("database"));c?+c?a(alert("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440")):g?g.length<8?a(alert("\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439")):(S(!0),I(),setTimeout((function(){s.users.forEach((function(s){s.name===c&&s.password===g?(z("/main"),t(alert("\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c"))):a(alert("\u0414\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043b\u0438 \u0432\u044b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u043b\u0438 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c")),S(!1),I(e.hide)}))}),3e3)):a(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")):a(alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f"))}))},type:"submit",children:[Object(x.jsx)(m.a,{to:E}),"\u0412\u043e\u0439\u0442\u0438"]}),Object(x.jsx)(u.a,{id:"loader",className:k}),Object(x.jsx)(b.a,{onClick:function(){n(""),p("")},type:"submit",disabled:y,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})},p={users:[]},v=function(){var e=f(),t=Object(s.useState)(""),a=Object(i.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(""),m=Object(i.a)(r,2),h=m[0],g=m[1],p=Object(s.useState)(""),v=Object(i.a)(p,2),w=v[0],y=v[1],S=Object(s.useState)(""),N=Object(i.a)(S,2),C=N[0],k=N[1],I=Object(s.useState)(!1),J=Object(i.a)(I,2),T=J[0],E=J[1],z=Object(s.useState)(e.hide),B=Object(i.a)(z,2),P=B[0],D=B[1];function W(){n(""),g(""),y(""),k("")}return Object(x.jsxs)(o.a,{className:"form",children:[Object(x.jsxs)(l.a,{className:"form-register head",container:!0,direction:"row",justify:"space-between",children:[Object(x.jsx)(d.a,{variant:"h5",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(x.jsx)(d.a,{variant:"h5",children:"\u0438\u043b\u0438"}),Object(x.jsx)(b.a,{className:e.register,disabled:T,variant:"outlined",color:"primary",children:Object(x.jsx)(O.b,{to:"/",children:"\u0412\u043e\u0439\u0442\u0438"})})]}),Object(x.jsxs)(l.a,{className:"form-register ".concat(e.body),container:!0,children:[Object(x.jsx)(j.a,{id:"standard-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:c,onChange:function(e){n(e.target.value)},disabled:T,type:"text"}),Object(x.jsx)(j.a,{id:"standard-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443",value:h,onChange:function(e){g(e.target.value)},disabled:T,type:"email"}),Object(x.jsx)(j.a,{id:"standard-basic",label:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:w,onChange:function(e){y(e.target.value)},disabled:T,type:"password"}),Object(x.jsx)(j.a,{id:"standard-basic",label:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:C,onChange:function(e){k(e.target.value)},disabled:T,type:"password"})]}),Object(x.jsxs)(l.a,{className:"form-register footer",container:!0,direction:"row",justify:"space-between",children:[Object(x.jsx)(b.a,{id:"register",size:"small",disabled:T,variant:"contained",onClick:function(){return new Promise((function(){var t=JSON.parse(localStorage.getItem("database")),a=t.users.find((function(e){return e.email===h})),s={name:c,email:h,password:w};c?+c?alert("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440"):h?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(h)?w?w.length<8?alert("\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439"):w!==C?alert("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"):(E(!0),D(),setTimeout((function(){a?alert("\u0414\u0430\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u0437\u0430\u043d\u044f\u0442\u0430"):(localStorage.setItem("database",JSON.stringify(s)),t.users.push(s),localStorage.setItem("database",JSON.stringify(t)),E(!1),D(e.hide),W())}),3e3)):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"):alert("\u041f\u043e\u0447\u0442\u0430 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430"):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443"):alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f")}))},type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(x.jsx)(u.a,{id:"loader",className:P}),Object(x.jsx)(b.a,{onClick:W,disabled:T,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})},w=(a(67),function(){return Object(x.jsx)(r.a,{fixed:!0,children:Object(x.jsx)(d.a,{variant:"h5",children:"\u0414\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0435\u0449\u0435 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"})})}),y=(a(68),function(){return Object(x.jsx)(r.a,{maxWidth:"sm",children:Object(x.jsxs)(O.a,{basename:"/test_form",children:[Object(x.jsx)(m.b,{exact:!0,path:"/",component:g}),Object(x.jsx)(m.b,{exact:!0,path:"/register",component:v}),Object(x.jsx)(m.b,{exact:!0,path:"/main",component:w})]})})}),S=function(){return Object(s.useEffect)((function(){localStorage.getItem("database")||localStorage.setItem("database",JSON.stringify(p))}),[]),Object(x.jsx)(y,{})};n.a.render(Object(x.jsx)(S,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.dbb47ebf.chunk.js.map