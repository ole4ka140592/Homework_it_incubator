(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={content:"Affairs_content__1F2zR",name:"Affairs_name__XImby",priority:"Affairs_priority__rNLwC",button:"Affairs_button__2H4Sf",buttonActive:"Affairs_buttonActive__2Np1b"}},,,,,,function(e,t,n){e.exports={messageAll:"Message_messageAll__1zrhu",avatar:"Message_avatar__fjzXu",messageDetails:"Message_messageDetails__1f_R3",name:"Message_name__1Nds9",textMessage:"Message_textMessage__1mL8o",time:"Message_time__1QCdE",detail:"Message_detail__ANhLr"}},,,function(e,t,n){e.exports={all:"Greeting_all__3LYV-",add:"Greeting_add__2rhBb",count:"Greeting_count__aHhMe",error:"Greeting_error__2YLXG",errorInput:"Greeting_errorInput__3EemZ",input:"Greeting_input__3oNMH"}},function(e,t,n){e.exports={navbar:"Header_navbar__1dvuQ",noActive:"Header_noActive__MFhCI",circle:"Header_circle__1PpSm"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3KRW3",errorInput:"SuperInputText_errorInput__qb7fi",error:"SuperInputText_error__Di6Vh",input:"SuperInputText_input__26A71"}},,function(e,t,n){e.exports={select:"SuperSelect_select__P6DLm"}},function(e,t,n){e.exports={blue:"HW4_blue__1ot23",column:"HW4_column__L553C",testSpanError:"HW4_testSpanError__TE2UW"}},,,function(e,t,n){e.exports={default:"SuperButton_default__17bCp",red:"SuperButton_red__2NZeL"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__2PzGx",checkbox:"SuperCheckbox_checkbox__x4P-L",spanClassName:"SuperCheckbox_spanClassName__1fE2Q"}},,,,function(e,t,n){e.exports={App:"App_App__34Wd0"}},function(e,t,n){e.exports={span:"SuperEditableSpan_span__5Xo-X"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__SfY27"}},function(e,t,n){e.exports={avatar:"Error404_avatar__3Vlqo"}},,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(28),s=n.n(c),i=(n(40),n(29)),o=n.n(i),l=n(12),j=n(2),u=n(11),b=n.n(u),d=n(0);var h=function(e){return Object(d.jsxs)("div",{className:b.a.messageAll,children:[Object(d.jsx)("img",{alt:"ava",src:e.avatar,className:b.a.avatar}),Object(d.jsx)("div",{className:b.a.detail}),Object(d.jsxs)("div",{className:b.a.messageDetails,children:[Object(d.jsx)("div",{className:b.a.name,children:e.name}),Object(d.jsx)("div",{className:b.a.textMessage,children:e.message}),Object(d.jsx)("div",{className:b.a.time,children:e.time})]})]})},O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Some Name",p="some text",m="22:00";var f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)("div",{children:Object(d.jsx)(h,{avatar:O,name:x,message:p,time:m})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},_=n(4),v=n(5),g=n.n(v);var N=function(e){return Object(d.jsxs)("div",{className:g.a.content,children:[Object(d.jsx)("div",{className:g.a.name,children:e.affair.name}),Object(d.jsx)("div",{className:g.a.priority,children:e.affair.priority}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var C=function(e){var t=e.data.map((function(t){return Object(d.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:g.a.buttons,children:[t,Object(d.jsx)("span",{children:Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},className:"all"===e.filter?g.a.buttonActive:g.a.button,children:"All"})}),Object(d.jsx)("span",{children:Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},className:"high"===e.filter?g.a.buttonActive:g.a.button,children:"High"})}),Object(d.jsx)("span",{children:Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},className:"middle"===e.filter?g.a.buttonActive:g.a.button,children:"Middle"})}),Object(d.jsx)("span",{children:Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},className:"low"===e.filter?g.a.buttonActive:g.a.button,children:"Low"})})]})},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(a.useState)(k),t=Object(_.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(_.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(C,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!=t}))}(n,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},y=n(35),A=n(14),w=n.n(A),E=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.onEnter,i=r?w.a.errorInput:w.a.input;return Object(d.jsxs)("div",{className:w.a.all,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:i,onKeyDown:s}),r&&Object(d.jsx)("div",{className:w.a.error,children:r})]}),Object(d.jsx)("button",{onClick:a,disabled:!t,className:w.a.add,children:"add"}),Object(d.jsx)("div",{className:w.a.count,children:c})]})},I=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(_.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),l=Object(_.a)(o,2),j=l[0],u=l[1],b=function(){n(s),alert("Hello, ".concat(s," !")),i("")},h=t.length;return Object(d.jsx)(E,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u("")):u("Name is required")},addUser:b,onEnter:function(e){"Enter"===e.key&&s&&(b(),i(""))},error:j,totalUsers:h})},T=n(49);var M=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),n=t[0],r=t[1],c={_id:Object(T.a)(),name:"name"};return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(I,{users:n,addUserCallback:function(e){r([c].concat(Object(y.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},F=n(8),P=n(7),H=n(18),L=n.n(H),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(L.a.error," ").concat(i||""),j="".concat(L.a.input," ").concat(c?L.a.errorInput:L.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},o)),c&&Object(d.jsx)("span",{className:l,children:c})]})},B=n(21),D=n.n(B),G=n(24),U=n.n(G),J=function(e){var t=e.red,n=e.className,a=Object(P.a)(e,["red","className"]),r="".concat(t?U.a.red:U.a.default," ").concat(n);return Object(d.jsx)("button",Object(F.a)({className:r},a))},R=n(25),X=n.n(R),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(F.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(d.jsx)("span",{className:X.a.spanClassName,children:r})]})};var K=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(_.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:D.a.column,children:[Object(d.jsx)(W,{value:n,onChangeText:r,onEnter:s,error:c,spanClassName:D.a.testSpanError}),Object(d.jsx)(W,{className:D.a.blue}),Object(d.jsx)(J,{children:"default"}),Object(d.jsx)(J,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(J,{disabled:!0,children:"disabled"}),Object(d.jsx)(z,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(z,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},q=n(30),Y=n.n(q),Q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(P.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(_.a)(s,2),o=i[0],l=i[1],j=r||{},u=j.children,b=j.onDoubleClick,h=j.className,O=Object(P.a)(j,["children","onDoubleClick","className"]),x="".concat(Y.a.span," ").concat(h||"");return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(W,Object(F.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(d.jsx)("span",Object(F.a)(Object(F.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:x},O),{},{children:u||c.value}))})};function V(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function Z(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}V("test",{x:"A",y:1});Z("test",{x:"",y:0});var $=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(Q,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(J,{onClick:function(){V("editable-span-value",n)},children:"save"}),Object(d.jsx)(J,{onClick:function(){r(Z("editable-span-value",""))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ee=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)(S,{}),Object(d.jsx)(M,{}),Object(d.jsx)(K,{}),Object(d.jsx)($,{})]})};var te=function(){return Object(d.jsx)("div",{children:"JuniorPlus"})},ne=n(20),ae=n.n(ne),re=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(P.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(d.jsx)("option",{className:ae.a.select,value:e,children:e},e+"-"+t)})):[];return Object(d.jsx)("select",Object(F.a)(Object(F.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:c}))},ce=n(31),se=n.n(ce),ie=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(P.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{className:se.a.radio,type:"radio",name:t,checked:e===a,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:i})},oe=["x","y","z"];var le=function(){var e=Object(a.useState)(oe[1]),t=Object(_.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(re,{className:ae.a.select,options:oe,value:n,onChangeOption:r})}),Object(d.jsx)("div",{children:Object(d.jsx)(ie,{name:"radio",options:oe,value:n,onChangeOption:r})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var je=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(le,{})})},ue=n(32),be=n.n(ue);var de=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://www.prestashop.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln",className:be.a.avatar})})},he="/pre-junior",Oe="/junior-plus",xe="/junior";var pe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.d,{children:["\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 '/' \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR exact \u043d\u0443\u0436\u0435\u043d \u0447\u0442\u043e\u0431 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u0441\u043e\u0432\u043f\u043e\u0434\u0435\u043d\u0438\u0435 (\u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 '/' \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442)",Object(d.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(j.a,{to:he})}}),Object(d.jsx)(j.b,{path:he,render:function(){return Object(d.jsx)(ee,{})}}),Object(d.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(j.a,{to:Oe})}}),Object(d.jsx)(j.b,{path:Oe,render:function(){return Object(d.jsx)(te,{})}}),Object(d.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(j.a,{to:xe})}}),Object(d.jsx)(j.b,{path:xe,render:function(){return Object(d.jsx)(je,{})}}),"\u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",Object(d.jsx)(j.b,{render:function(){return Object(d.jsx)(de,{})}})]})})},me=n(15),fe=n.n(me);var _e=function(){return Object(d.jsxs)("div",{className:fe.a.navbar,children:[Object(d.jsx)(l.b,{to:he,className:fe.a.noActive,children:"pre_junior"}),Object(d.jsx)(l.b,{to:Oe,className:fe.a.noActive,children:"junior_plus"}),Object(d.jsx)(l.b,{to:xe,className:fe.a.noActive,children:"junior"}),Object(d.jsx)("div",{className:fe.a.circle})]})};var ve=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(_e,{}),Object(d.jsx)(pe,{})]})})};var ge=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(ve,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ge,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[47,1,2]]]);
//# sourceMappingURL=main.57627085.chunk.js.map