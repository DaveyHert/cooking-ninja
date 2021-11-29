(this["webpackJsonpcooking-ninja"]=this["webpackJsonpcooking-ninja"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(21),r=c.n(s),i=(c(28),c(11)),o=c(4),j=(c(29),c(30),c(5)),l=(c(31),c(1));function u(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(o.f)();return Object(l.jsx)("div",{className:"searchbar",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s("/search?q=".concat(c)),a("")},children:[Object(l.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(l.jsx)("input",{type:"text",id:"search",value:c,onChange:function(e){return a(e.target.value)}})]})})}var d=c(10),b=Object(n.createContext)();function O(e,t){switch(t.type){case"CHANGE_COLOR":return Object(d.a)(Object(d.a)({},e),{},{color:t.payload});case"CHANGE_MODE":return Object(d.a)(Object(d.a)({},e),{},{nightMode:t.payload});default:return e}}function h(e){var t=e.children,c=Object(n.useReducer)(O,{color:"#58249c",nightMode:!1}),a=Object(j.a)(c,2),s=a[0],r=a[1];return Object(l.jsx)(b.Provider,{value:Object(d.a)(Object(d.a)({},s),{},{changeColor:function(e){return r({type:"CHANGE_COLOR",payload:e})},changeMode:function(e){console.log(s.nightMode),r({type:"CHANGE_MODE",payload:e})}}),children:t})}function f(){var e=Object(n.useContext)(b);if(void 0===e)throw new Error("useTheme() function must be used inside a ThemeProvider");return e}var p=function(){var e=f().color;return Object(l.jsx)("div",{className:"navbar",style:{backgroundColor:e},children:Object(l.jsxs)("nav",{children:[Object(l.jsx)(i.b,{to:"/",className:"brand",children:Object(l.jsx)("h1",{children:"Cooking Ninja"})}),Object(l.jsx)(u,{}),Object(l.jsx)(i.b,{to:"/create",children:"Create"})]})})},x=(c(33),c(34),c(17));c(42);x.a.initializeApp({apiKey:"AIzaSyCGwvo7Qz8dXd_SGvG4GTsUzeDW2aM5wJw",authDomain:"cooking-ninja-site-a7b92.firebaseapp.com",projectId:"cooking-ninja-site-a7b92",storageBucket:"cooking-ninja-site-a7b92.appspot.com",messagingSenderId:"254491150943",appId:"1:254491150943:web:fe80ba8e52cd7bd85ea9ea"});var m=x.a.firestore();var v=function(e){var t=e.recipes,c=f().nightMode;return 0===t.length?Object(l.jsx)("div",{className:"error",children:"No recipe found..."}):Object(l.jsx)("div",{className:"recipe-list",children:t.map((function(e){return Object(l.jsxs)("div",{className:"card ".concat(c&&"dark-mode"),children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsxs)("p",{children:[e.cookingTime," to make."]}),Object(l.jsxs)("div",{children:[e.method.substring(0,100),"..."]}),Object(l.jsx)(i.b,{to:"/recipes/".concat(e.id),children:"Cook This"}),Object(l.jsx)("div",{className:"delete",onClick:function(){return t=e.id,void m.collection("recipes").doc(t).delete();var t},children:Object(l.jsx)("i",{className:"far fa-trash-alt"})})]},e.id)}))})};function g(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(j.a)(s,2),i=r[0],o=r[1],u=Object(n.useState)(null),b=Object(j.a)(u,2),O=b[0],h=b[1];return Object(n.useEffect)((function(){o(!0);var e=m.collection("recipes").onSnapshot((function(e){if(e.empty)h("No recipes found");else{var t=[];e.docs.forEach((function(e){t.push(Object(d.a)({id:e.id},e.data()))})),o(!1),a(t)}}),(function(e){h(e.message)}));return function(){return e()}}),[]),Object(l.jsxs)("div",{className:"home",children:[O&&Object(l.jsx)("p",{className:"error",children:O}),i&&Object(l.jsx)("p",{className:"loading",children:"Loading..."}),c&&Object(l.jsx)(v,{recipes:c})]})}var N=c(23),C=c(19),k=c.n(C),S=c(22);c(37);var y=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(j.a)(s,2),i=r[0],u=r[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),O=b[0],h=b[1],f=Object(n.useState)(""),p=Object(j.a)(f,2),x=p[0],v=p[1],g=Object(n.useState)([]),C=Object(j.a)(g,2),y=C[0],w=C[1],M=Object(n.useRef)(null),E=Object(o.f)(),L=function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:c,method:i,ingredients:y,cookingTime:O+" minutes"},e.prev=2,e.next=5,m.collection("recipes").add(n);case 5:E("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("Failed to upload recipe");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"create",children:[Object(l.jsx)("h2",{className:"page-title",children:"Add a New Recipe"}),Object(l.jsxs)("form",{onSubmit:L,children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Recipe Title:"}),Object(l.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)},value:c,required:!0})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Recipe Ingredients:"}),Object(l.jsxs)("div",{className:"ingredients",children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return v(e.target.value)},value:x,ref:M}),Object(l.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault();var t=x.trim();t&&!y.includes(t)&&w((function(e){return[].concat(Object(N.a)(e),[t])})),v(""),M.current.focus()},children:"Add"})]})]}),y&&Object(l.jsxs)("p",{children:["Current Ingredients:"," ",y.map((function(e){return Object(l.jsxs)("em",{children:[e,", "]},e)}))]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Method"}),Object(l.jsx)("textarea",{onChange:function(e){return u(e.target.value)},value:i,required:!0})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Cooking Time (minutes):"}),Object(l.jsx)("input",{type:"number",onChange:function(e){return h(e.target.value)},value:O})]}),Object(l.jsx)("button",{className:"btn",children:"Submit"})]})]})};c(38);function w(){var e=Object(o.e)().search,t=new URLSearchParams(e).get("q"),c=Object(n.useState)([]),a=Object(j.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(!1),u=Object(j.a)(i,2),b=u[0],O=u[1],h=Object(n.useState)(null),f=Object(j.a)(h,2),p=f[0],x=f[1];return Object(n.useEffect)((function(){try{O(!0),m.collection("recipes").get().then((function(e){console.log(e),e.empty&&(O(!1),x("No recipe found"));var c=[];e.docs.forEach((function(e){c.push(Object(d.a)({id:e.id},e.data()))}));var n=c.filter((function(e){var c=e.title.toLocaleLowerCase(),n=t.toLocaleLowerCase();if(c.includes(n))return e}));r(n),O(!1)}))}catch(e){O(!1),x(e.message)}}),[t]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{className:"page-title",children:['Recipes including "',t,'"']}),p&&Object(l.jsx)("p",{className:"error",children:p}),b&&Object(l.jsx)("p",{className:"loading",children:"Loading..."}),s&&Object(l.jsx)(v,{recipes:s})]})}c(39);function M(){var e=Object(o.g)().id,t=Object(o.f)(),c=f().nightMode,a=Object(n.useState)(null),s=Object(j.a)(a,2),r=s[0],i=s[1],u=Object(n.useState)(!1),d=Object(j.a)(u,2),b=d[0],O=d[1],h=Object(n.useState)(null),p=Object(j.a)(h,2),x=p[0],v=p[1];return Object(n.useEffect)((function(){O(!0),m.collection("recipes").doc(e).get().then((function(e){e.exists?i(e.data()):v("Recipe not found"),O(!1)})).catch((function(e){O(!1),v(e.message)}))}),[e]),Object(l.jsxs)("div",{children:[x&&Object(l.jsx)("p",{className:"error",children:x}),b&&Object(l.jsx)("p",{className:"loading",children:"Loading..."}),r&&Object(l.jsxs)("div",{className:"recipe ".concat(c?"dark-mode":""),children:[Object(l.jsx)("button",{className:"go-back",onClick:function(){return t(-1)},children:"Back"}),Object(l.jsx)("div",{className:"delete",onClick:function(){m.collection("recipes").doc(e).delete().then((function(){return t("/")}))},children:Object(l.jsx)("i",{class:"far fa-trash-alt"})}),Object(l.jsx)("h2",{className:"page-title",children:r.title}),Object(l.jsxs)("p",{children:[r.cookingTime," to cook"]}),Object(l.jsx)("h4",{children:"Ingredients"}),Object(l.jsx)("ul",{children:r.ingredients.map((function(e){return Object(l.jsx)("li",{children:e},e)}))}),Object(l.jsx)("h4",{children:"Method:"}),Object(l.jsx)("p",{className:"method",children:r.method})]})]})}c(40);function E(){var e=f(),t=e.nightMode,c=e.changeMode,n=e.changeColor;return Object(l.jsxs)("div",{className:"theme-selector",children:[Object(l.jsx)("div",{className:"switch",onClick:function(){return c(!t)},children:t?Object(l.jsx)("i",{className:"fas fa-sun"}):Object(l.jsx)("i",{className:"fas fa-moon"})}),Object(l.jsxs)("div",{className:"colors",children:[Object(l.jsx)("span",{className:"purple",onClick:function(){return n("#58249c")}}),Object(l.jsx)("span",{className:"green",onClick:function(){return n("seagreen")}}),Object(l.jsx)("span",{className:"red",onClick:function(){return n("#b41111")}})]})]})}var L=function(){var e=f().nightMode;return Object(l.jsx)("div",{className:"App ".concat(e?"night-mode":""),children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(p,{}),Object(l.jsx)(E,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",element:Object(l.jsx)(g,{})}),Object(l.jsx)(o.a,{path:"/create",element:Object(l.jsx)(y,{})}),Object(l.jsx)(o.a,{path:"/recipes/:id",element:Object(l.jsx)(M,{})}),Object(l.jsx)(o.a,{path:"/search",element:Object(l.jsx)(w,{})})]})]})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{children:Object(l.jsx)(L,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bc570f5a.chunk.js.map