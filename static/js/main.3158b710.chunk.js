(this["webpackJsonpmjml2json-web"]=this["webpackJsonpmjml2json-web"]||[]).push([[0],{1155:function(e,n){},1157:function(e,n){},1167:function(e,n){},1169:function(e,n){},1196:function(e,n){},1197:function(e,n){},1202:function(e,n){},1204:function(e,n){},1211:function(e,n){},1230:function(e,n){},1299:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(39),o=t.n(r),i=(t(599),t(600),t(311)),s=t.n(i),l=t(584),u=t(219),d=t(1302),j=t(592),b=t(1305),f=t(1303),m=t(1304),h=t(1306),x=t(591),p=(t(601),t(585)),O=t.n(p),g=0,y=function(e){var n=O()(e);return console.log(n),{layout:v(n)}};function v(e){var n,t=e.tagName,a=e.attributes,c=e.children,r=e.content,o={name:t+"-"+String(g++),tag:t,contentType:w(t),parameters:Object.entries(a).map((function(e){var n=Object(u.a)(e,2),t=n[0],a=n[1],c={};switch(c.name=t,console.log(t),t){case"font-size":case"width":case"border-radius":case"height":case"inner-padding":case"letter-spacing":case"line-height":a.includes("px")?(c.floatValue=Number(a.replace("px","")),c.valueSuffix="px"):a.includes("%")&&(c.floatValue=Number(a.replace("%","")),c.valueSuffix="%"),c.changeable="Float";break;case"text-align":case"align":c.changeable="Align",c.alignValue=a;break;case"color":case"background-color":c.changeable="Color",c.colorValue=a;break;default:c.value=a}return c})),children:null!==(n=null===c||void 0===c?void 0:c.map(v))&&void 0!==n?n:[]};return function(e,n){switch(console.log(e),e.tag){case"mj-text":e.textContent=n;break;default:;}}(o,r),o}function w(e){switch(e){case"mj-text":return"text";case"mj-image":return"image";case"mj-button":return"button";default:return"none"}}var k=t(586),M=t.n(k),J=t(30),N=d.a.Header,S=d.a.Content,C=d.a.Footer,L=function(){var e=Object(a.useState)(null),n=Object(u.a)(e,2),t=n[0],c=n[1];return Object(J.jsxs)(d.a,{className:"layout",children:[Object(J.jsxs)(N,{children:[Object(J.jsx)("h3",{style:{color:"white"},children:"MJML2JSON"}),Object(J.jsx)(b.a,{theme:"dark",mode:"horizontal"})]}),Object(J.jsx)(S,{style:{padding:"0 50px"},children:Object(J.jsxs)("div",{className:"site-layout-content",children:[Object(J.jsx)("h1",{children:"Convert your MJML to our JSON:"}),Object(J.jsxs)(f.a,{name:"mjml2json",onFinish:function(e){console.log(e),j.b.success("Generated JSON!"),c(y(e.json))},requiredMark:!1,children:[Object(J.jsx)(f.a.Item,{name:"json",label:"MJML",rules:[{required:!0,message:"Please input your MJML!"}],children:Object(J.jsx)(m.a.TextArea,{id:"text-area",autoSize:{minRows:10,maxRows:20},placeholder:"Paste in your MJML"})}),Object(J.jsxs)(h.b,{style:{paddingBottom:"20px"},align:"center",children:[Object(J.jsx)(f.a.Item,{style:{padding:0,margin:0},children:Object(J.jsx)(x.a,{type:"primary",htmlType:"submit",children:"Generate"})}),t?Object(J.jsx)(x.a,{onClick:Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(JSON.stringify(t,null,2));case 2:j.b.success("Copied to clipboard!");case 3:case"end":return e.stop()}}),e)}))),type:"secondary",children:"Copy JSON"}):Object(J.jsx)("div",{})]})]}),t?Object(J.jsx)(M.a,{name:null,src:t}):Object(J.jsx)("div",{})]})}),Object(J.jsx)(C,{style:{textAlign:"center"},children:"Anton Wyrowski \xa92021 Created for iPraktikum"})]})};o.a.render(Object(J.jsx)(c.a.StrictMode,{children:Object(J.jsx)(L,{})}),document.getElementById("root"))},369:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=369},599:function(e,n,t){},601:function(e,n,t){},619:function(e,n){},625:function(e,n){},688:function(e,n){},746:function(e,n){},855:function(e,n){}},[[1299,1,2]]]);
//# sourceMappingURL=main.3158b710.chunk.js.map