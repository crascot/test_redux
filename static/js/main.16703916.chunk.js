(this.webpackJsonpticker=this.webpackJsonpticker||[]).push([[0],{130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(15),c=a.n(n),s=a(9),i=a(184),o=a(186),l=a(187),u=a(188),d=a(201),j=a(195),b=a(189),h=a(28),x=a(19),m=a(182),O=Object(m.a)({body:{margin:"20px 0",paddingBottom:5,borderTop:"3px solid #0dcaf0","& *":{width:"100%",marginTop:7}},register:{"& *":{textDecoration:"none",color:"inherit"}},hide:{display:"none",margin:30}});var f=a(2),p=function(e){var t=e.nickname,a=e.targetName,n=e.password,c=e.targetPassword,m=e.disabled,p=e.setDisabled,g=e.errorName,F=e.errorPassword,w=e.helperTextName,y=e.helperTextPassword,v=e.checkName,S=e.checkPassword,k=e.clear,C=e.clearType,N=O(),T=Object(r.useState)(N.hide),D=Object(s.a)(T,2),P=D[0],E=D[1],A=Object(r.useState)(""),I=Object(s.a)(A,2),B=I[0],W=I[1],J=Object(r.useState)(!1),z=Object(s.a)(J,2),L=z[0],_=z[1];Object(r.useEffect)((function(){!0===L&&(t?+t?v(!0)("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440"):v()():v(!0)("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f"),n.length<8?S(!0)("\u041f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439"):S()())}));return Object(f.jsx)(i.a,{maxWidth:"sm",children:Object(f.jsxs)(o.a,{className:"form",children:[Object(f.jsxs)(l.a,{className:"form-register head",container:!0,direction:"row",justify:"space-between",children:[Object(f.jsx)(u.a,{variant:"h5",children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),Object(f.jsx)(u.a,{variant:"h5",children:"\u0438\u043b\u0438"}),Object(f.jsx)(h.b,{to:"/register",onClick:k,style:{textDecoration:"none"},children:Object(f.jsx)(d.a,{className:N.register,onClick:C,disabled:m,variant:"outlined",color:"primary",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}),Object(f.jsxs)(l.a,{className:"form-register ".concat(N.body),container:!0,children:[Object(f.jsx)(j.a,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:t,onChange:a,disabled:m,type:"text",error:g,helperText:w}),Object(f.jsx)(j.a,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:n,onChange:c,disabled:m,type:"password",error:F,helperText:y})]}),Object(f.jsxs)(l.a,{className:"form-register footer",container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(f.jsxs)(d.a,{id:"login",size:"small",disabled:m,variant:"contained",onClick:function(){_(!0),p(!0),E(null),function(e,t){var a=JSON.parse(localStorage.getItem("database"));return new Promise((function(r,n){!e||+e?n(e):!t||t.length<8?n(t):setTimeout((function(){a.users.find((function(a){return a.name===e&&a.password===t}))?r():n(alert("\u0414\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043b\u0438 \u0432\u044b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u043b\u0438 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"))}),3e3)}))}(t,n).then((function(){localStorage.setItem("auth_token",!0),W("/feed"),k()})).catch((function(e){switch(e){case t:0===t&&v(!0)("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f");break;case n:S(!0)("\u041f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439")}})).finally((function(){p(!1),E(N.hide)}))},type:"submit",children:[Object(f.jsx)(x.a,{to:B}),"\u0412\u043e\u0439\u0442\u0438"]}),Object(f.jsx)(b.a,{id:"loader",className:"".concat(P," + visible")}),Object(f.jsx)(d.a,{onClick:k,type:"submit",disabled:m,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})})},g=function(e){var t=e.nickname,a=e.targetName,n=e.email,c=e.targetEmail,m=e.password,p=e.targetPassword,g=e.confirmPassword,F=e.targetConfirmPassword,w=e.disabled,y=e.setDisabled,v=e.errorName,S=e.errorEmail,k=e.errorPassword,C=e.errorConfirmPassword,N=e.helperTextName,T=e.helperTextEmail,D=e.helperTextPassword,P=e.helperConfirmPassword,E=e.checkName,A=e.checkEmail,I=e.checkPassword,B=e.checkConfirmPassword,W=e.clear,J=e.clearType,z=O(),L=Object(r.useState)(z.hide),_=Object(s.a)(L,2),M=_[0],$=_[1],R=Object(r.useState)("/register"),q=Object(s.a)(R,2),G=q[0],H=q[1],K=Object(r.useState)(!1),Q=Object(s.a)(K,2),U=Q[0],V=Q[1];Object(r.useEffect)((function(){!0===U&&(t?+t?E(!0)("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440"):E()():E(!0)("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f"),n&&/^(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])+(\.(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])+)*)|("(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+"))@(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])+\.)+(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S]){2,})$/i.test(n)?A()():A(!0)("\u041f\u043e\u0447\u0442\u0430 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430"),m.length<8?I(!0)("\u041f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439"):I()(),m!==g?B(!0)("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"):B()())}));return Object(f.jsx)(i.a,{maxWidth:"sm",children:Object(f.jsxs)(o.a,{className:"form",children:[Object(f.jsxs)(l.a,{className:"form-register head",container:!0,direction:"row",justify:"space-between",children:[Object(f.jsx)(u.a,{variant:"h5",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(f.jsx)(u.a,{variant:"h5",children:"\u0438\u043b\u0438"}),Object(f.jsx)(h.b,{to:"/",onClick:W,style:{textDecoration:"none"},children:Object(f.jsx)(d.a,{className:z.register,onClick:J,disabled:w,variant:"outlined",color:"primary",children:"\u0412\u043e\u0439\u0442\u0438"})})]}),Object(f.jsxs)(l.a,{className:"form-register ".concat(z.body),container:!0,children:[Object(f.jsx)(j.a,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:t,onChange:a,disabled:w,type:"text",error:v,helperText:N}),Object(f.jsx)(j.a,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443",value:n,onChange:c,disabled:w,type:"email",error:S,helperText:T}),Object(f.jsx)(j.a,{label:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:m,onChange:p,disabled:w,type:"password",error:k,helperText:D}),Object(f.jsx)(j.a,{label:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:g,onChange:F,disabled:w,type:"password",error:C,helperText:P})]}),Object(f.jsxs)(l.a,{className:"form-register footer",container:!0,direction:"row",justify:"space-between",children:[Object(f.jsxs)(d.a,{id:"register",size:"small",disabled:w,variant:"contained",onClick:function(){V(!0),y(!0),$(null),function(e,t,a,r){return new Promise((function(n,c){var s={name:e,email:t,password:a};!e||+e?c(e):t&&/^(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])+(\.(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])+)*)|("(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+"))@(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])+\.)+(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S]){2,})$/i.test(t)?!a||a.length<8?c(a):a!==r?c(r):setTimeout((function(){n(s)}),3e3):c(t)})).then((function(e){return new Promise((function(a,r){var n=JSON.parse(localStorage.getItem("database"));n.users.find((function(e){return e.email===t}))?r(alert("\u0414\u0430\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u0437\u0430\u043d\u044f\u0442\u0430")):(localStorage.setItem("database",JSON.stringify(e)),n.users.push(e),localStorage.setItem("database",JSON.stringify(n)),a())}))}))}(t,n,m,g).then((function(){localStorage.setItem("auth_token",!0),H("/feed"),W()})).catch((function(e){switch(e){case t:0===t&&E(!0)("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f");break;case n:A()("\u041f\u043e\u0447\u0442\u0430 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430");break;case m:m!==g&&(I(!0)("\u041f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u0439 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439"),B(!0)("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"))}})).finally((function(){y(!1),$(z.hide)}))},type:"submit",children:[Object(f.jsx)(x.a,{to:G}),"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0433\u043e\u0432\u0430\u0442\u044c\u0441\u044f"]}),Object(f.jsx)(b.a,{id:"loader",className:M}),Object(f.jsx)(d.a,{onClick:W,disabled:w,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})})},F=a(197),w=a(190),y=a(98),v=a.n(y),S=Object(m.a)({pagination:{width:"100%",marginTop:"2rem",display:"flex",flexWrap:"wrap",justifyContent:"center"},num:{width:30,margin:"10px 3px",boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"}}),k=function(e){for(var t=e.cardsLength,a=e.totalCards,r=e.paginate,n=S(),c=[],s=1;s<=Math.ceil(a/t);s++)c.push(s);return Object(f.jsx)("div",{className:n.pagination,children:c.map((function(e){return Object(f.jsx)(d.a,{onClick:function(){return r(e)},className:n.num,size:"small",children:e},e)}))})},C=Object(m.a)({block:{display:"flex",flexWrap:"wrap",justifyContent:"center"},card:{minWidth:280,maxWidth:280,marginTop:"2rem",margin:"0 14px"},icon:{marginTop:"9px",marginLeft:"88%",cursor:"pointer"},body:{borderTop:"3px solid #0dcaf0",paddingTop:4},save:{display:"flex",justifyContent:"flex-end",alignItems:"flex-end",marginTop:5},pagination:{marginTop:"2rem",display:"flex",justifyContent:"center"}}),N=function(e){var t=e.cards,a=e.setCards,n=C(),c=Object(r.useState)(null),i=Object(s.a)(c,2),l=i[0],b=i[1],h=Object(r.useState)(""),x=Object(s.a)(h,2),m=x[0],O=x[1],p=Object(r.useState)(""),g=Object(s.a)(p,2),y=g[0],S=g[1],N=Object(r.useState)(1),T=Object(s.a)(N,2),D=T[0],P=T[1],E=8*D,A=E-8;return Object(f.jsxs)(F.a,{className:n.block,children:[t.map((function(e){return Object(f.jsxs)(o.a,{className:n.card,id:e.id,children:[Object(f.jsx)(v.a,{className:n.icon,onClick:function(){return r=e.id,void a(t.filter((function(e){return e.id!==r})));var r}}),Object(f.jsxs)(w.a,{children:[Object(f.jsx)("div",{children:l===e.id?Object(f.jsx)("div",{children:Object(f.jsx)(j.a,{value:m,onChange:function(e){return O(e.target.value)},fullWidth:!0,multiline:!0})}):Object(f.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title})}),Object(f.jsx)("div",{className:n.body,children:l===e.id?Object(f.jsx)("div",{children:Object(f.jsx)(j.a,{value:y,onChange:function(e){return S(e.target.value)},fullWidth:!0,multiline:!0})}):Object(f.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",children:e.body})}),Object(f.jsx)(u.a,{className:n.save,variant:"button",children:l===e.id?Object(f.jsx)(d.a,{onClick:function(){return function(e){var r=t.map((function(t){return t.id===e&&(t.title=m,t.body=y),t}));a(r),b(null)}(e.id)},size:"small",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}):Object(f.jsx)(d.a,{onClick:function(){return t=e.id,a=e.title,r=e.body,b(t),O(a),void S(r);var t,a,r},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]})]},e.id)})).slice(A,E),Object(f.jsx)(k,{cardsLength:8,totalCards:t.length,paginate:function(e){return P(e)}})]})},T=a(198),D=a(196),P=a(200),E=Object(m.a)({block:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",backgroundColor:"#0dcaf0",margin:"0 -15xp",padding:"15px"},center:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",width:"30%",textAlign:"center"}}),A=function(e){var t=e.setToken,a=E(),n=Object(r.useState)(null),c=Object(s.a)(n,2),i=c[0],o=c[1],l=Boolean(i),j=function(){o(null),t(localStorage.removeItem("auth_token"))};return Object(f.jsxs)(F.a,{className:a.block,children:[Object(f.jsx)("div",{style:{width:"100%"},children:Object(f.jsx)(T.a,{severity:"warning",style:{width:"max-content",margin:"0 auto"},children:"\u0414\u0430\u043d\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"})}),Object(f.jsx)(u.a,{variant:"h4",children:"Test-Form"}),Object(f.jsx)(h.a,{basename:"/feed",children:Object(f.jsxs)("div",{className:a.center,children:[Object(f.jsx)(h.b,{to:"/posts",children:Object(f.jsx)(u.a,{children:"\u041f\u043e\u0441\u0442\u044b"})}),Object(f.jsx)(h.b,{to:"/countries",children:Object(f.jsx)(u.a,{children:"\u0421\u0442\u0440\u0430\u043d\u044b"})}),Object(f.jsx)(h.b,{to:"/drinks",children:Object(f.jsx)(u.a,{children:"\u041d\u0430\u043f\u0438\u0442\u043a\u0438"})})]})}),Object(f.jsxs)("div",{children:[Object(f.jsx)(d.a,{style:{textTransform:"capitalize"},id:"basic-button","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":l?"true":void 0,onClick:function(e){o(e.currentTarget)},children:Object(f.jsx)(u.a,{variant:"body1",children:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}),Object(f.jsx)(D.a,{style:{textAlign:"center"},id:"basic-menu",anchorEl:i,open:l,onClose:j,MenuListProps:{"aria-labelledby":"basic-button"},children:Object(f.jsx)(P.a,{onClick:j,children:"\u0412\u044b\u0439\u0442\u0438"})})]})]})},I=Object(m.a)({header:{marginLeft:"0",marginRight:"0"},footer:{maxWidth:"100%",width:"100%",marginTop:"2rem"}}),B=function(){var e=I(),t=Object(r.useState)([]),a=Object(s.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)(localStorage.getItem("auth_token")),l=Object(s.a)(o,2),d=l[0],j=l[1];return Object(r.useEffect)((function(){new Promise((function(e){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){return e(JSON.stringify(t))}))})).then((function(e){c(JSON.parse(e))}))}),[]),d?Object(f.jsxs)(F.a,{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",children:[Object(f.jsx)(A,{setToken:j}),Object(f.jsxs)(i.a,{children:[Object(f.jsx)(N,{cards:n,setCards:c}),Object(f.jsx)(F.a,{className:e.footer,children:Object(f.jsx)(u.a,{children:"footer"})})]})]}):Object(x.a)("/")},W=(a(130),function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),i=Object(s.a)(c,2),o=i[0],l=i[1],u=Object(r.useState)(""),d=Object(s.a)(u,2),j=d[0],b=d[1],m=Object(r.useState)(""),O=Object(s.a)(m,2),F=O[0],w=O[1],y=Object(r.useState)(!1),v=Object(s.a)(y,2),S=v[0],k=v[1],C=Object(r.useState)(!1),N=Object(s.a)(C,2),T=N[0],D=N[1],P=Object(r.useState)(!1),E=Object(s.a)(P,2),A=E[0],I=E[1],W=Object(r.useState)(!1),J=Object(s.a)(W,2),z=J[0],L=J[1],_=Object(r.useState)(!1),M=Object(s.a)(_,2),$=M[0],R=M[1],q=Object(r.useState)(""),G=Object(s.a)(q,2),H=G[0],K=G[1],Q=Object(r.useState)(""),U=Object(s.a)(Q,2),V=U[0],X=U[1],Y=Object(r.useState)(""),Z=Object(s.a)(Y,2),ee=Z[0],te=Z[1],ae=Object(r.useState)(""),re=Object(s.a)(ae,2),ne=re[0],ce=re[1];function se(e){n(e.target.value)}function ie(e){b(e.target.value)}var oe=function(e){return function(t){D(e),K(t)}},le=function(e){return function(t){I(e),X(t)}},ue=function(e){return function(t){L(e),te(t)}},de=function(e){return function(t){R(e),ce(t)}},je=function(){oe()(),le()(),ue()(),de()()},be=function(){n(""),l(""),b(""),w("")};return Object(f.jsx)("div",{style:{margin:-8},children:Object(f.jsx)(h.a,{basename:"/test_form",children:Object(f.jsxs)(x.d,{children:[Object(f.jsx)(x.b,{path:"/",exact:!0,children:Object(f.jsx)(p,{nickname:a,targetName:se,password:j,targetPassword:ie,disabled:S,setDisabled:k,errorName:T,errorPassword:z,helperTextName:H,helperTextPassword:ee,checkName:oe,checkPassword:ue,clear:be,clearType:je})}),Object(f.jsx)(x.b,{path:"/register",children:Object(f.jsx)(g,{nickname:a,targetName:se,email:o,targetEmail:function(e){l(e.target.value)},password:j,targetPassword:ie,confirmPassword:F,targetConfirmPassword:function(e){w(e.target.value)},disabled:S,setDisabled:k,errorName:T,errorEmail:A,errorPassword:z,errorConfirmPassword:$,helperTextName:H,helperTextEmail:V,helperTextPassword:ee,helperConfirmPassword:ne,checkName:oe,checkEmail:le,checkPassword:ue,checkConfirmPassword:de,clear:be,clearType:je})}),Object(f.jsx)(x.b,{path:"/feed",component:B})]})})})}),J={users:[]},z=function(){return Object(r.useEffect)((function(){localStorage.getItem("database")||localStorage.setItem("database",JSON.stringify(J))}),[]),Object(f.jsx)(W,{})};c.a.render(Object(f.jsx)(z,{}),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.16703916.chunk.js.map