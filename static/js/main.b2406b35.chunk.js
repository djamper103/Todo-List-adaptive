(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(7),r=n.n(i),o=(n(12),n(6)),s=n(4),u=(n(13),n(0));var d=function(t){var e=t.state,n=t.removeTask;return Object(u.jsxs)("div",{className:"todo-container",children:[Object(u.jsx)("div",{children:e.task}),Object(u.jsx)("div",{className:"item-delete",onClick:function(){return n(e.id)},children:"X"})]},e.id)};var j=function(t){var e=t.addTask,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],r=a[1],o=function(t){t.preventDefault(),e(i),r("")};return Object(u.jsxs)("form",{onSubmit:o,children:[Object(u.jsx)("input",{value:i,type:"text",onChange:function(t){r(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&o(t)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435..."}),Object(u.jsx)("button",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var b=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1],i=function(t){a(Object(o.a)(n.filter((function(e){return e.id!==t}))))};return Object(u.jsxs)("div",{className:"todo-app",children:[Object(u.jsxs)("h3",{children:["\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447: ",n.length," "]}),Object(u.jsxs)("div",{className:"todo",children:[Object(u.jsx)(j,{addTask:function(t){if(t){var e={id:Math.random().toString(36).substr(1,10),task:t};a([].concat(Object(o.a)(n),[e]))}}}),n.map((function(t){return Object(u.jsx)(d,{state:t,removeTask:i},t.id)}))]})]})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.b2406b35.chunk.js.map