(this.webpackJsonpintro_to_react=this.webpackJsonpintro_to_react||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),s=c(6),i=c.n(s),j=c(5),l=c(2),o=c(4),b=c.n(o),h=function(e){var t=e.rgb,c=e.weight,a=e.index,s=e.hex,i=e.type,j=Object(r.useState)(!1),o=Object(l.a)(j,2),b=o[0],h=o[1],d=t.join(","),O="#".concat(s);return Object(r.useEffect)((function(){var e=setTimeout((function(){h(!1)}),3e3);return function(){clearTimeout(e)}}),[b]),Object(n.jsxs)("article",{style:{backgroundColor:"rgb(".concat(d,")")},className:"".concat(a>10&&"color-light"),onClick:function(){h(!0),navigator.clipboard.writeText(O)},children:[Object(n.jsxs)("p",{className:"percent-value",children:[c,"%"]}),Object(n.jsxs)("p",{className:"color-value",children:["#",s]}),Object(n.jsx)("p",{className:"color-type",children:i}),b&&Object(n.jsx)("span",{className:"alert",children:"copied to clipboard"})]})},d=(c(12),function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(!1),i=Object(l.a)(s,2),o=i[0],d=i[1],O=Object(r.useState)(new b.a("#333333").all(5)),u=Object(l.a)(O,2),x=u[0],p=u[1];return Object(n.jsx)("main",{children:Object(n.jsxs)("section",{children:[Object(n.jsxs)("h1",{children:[Object(n.jsx)("span",{children:"Color"})," ",Object(n.jsx)("span",{children:"Shade"})," ",Object(n.jsx)("span",{children:"And"}),Object(n.jsx)("span",{children:"Tint"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:"G"}),Object(n.jsx)("span",{children:"e"}),Object(n.jsx)("span",{children:"n"}),Object(n.jsx)("span",{children:"e"}),Object(n.jsx)("span",{children:"r"}),Object(n.jsx)("span",{children:"a"}),Object(n.jsx)("span",{children:"t"}),Object(n.jsx)("span",{children:"o"}),Object(n.jsx)("span",{children:"r"})]})]}),Object(n.jsx)("div",{className:"form-container",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();try{var t=new b.a(c).all(5);p(t)}catch(o){d(!0)}},children:[Object(n.jsx)("label",{htmlFor:"hex",children:"Enter Hex color: "}),Object(n.jsx)("input",{type:"text",id:"hex",name:"hex",value:c,placeholder:"#333333",onChange:function(e){return a(e.target.value)},className:o?"error":null}),Object(n.jsx)("button",{type:"submit",children:"Generate"})]})}),Object(n.jsx)("div",{className:"content-container",children:x.map((function(e,t){return Object(r.createElement)(h,Object(j.a)(Object(j.a)({},e),{},{index:t,key:t,hex:e.hex}))}))})]})})}),O=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(d,{})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),u()}},[[13,1,2]]]);
//# sourceMappingURL=main.1c7c9764.chunk.js.map