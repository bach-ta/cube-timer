(this["webpackJsonpcube-timer"]=this["webpackJsonpcube-timer"]||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(10),c=a.n(r),i=a(8),s=a(13),l=(a(118),a(119),a(105)),o=a(2),j=function(e){var t=e.time,a=e.active;return Object(o.jsx)("div",{className:a?"activeDisplay":"inactiveDisplay",children:Object(o.jsx)(l.a,{variant:"h1",className:"stopwatch",children:Object(o.jsx)("strong",{children:t})})})},d=a(259),b=a(238),u=a(260),m=a(261),O=a(262),v=a(263),f=a(264),x=a(270),h=a(269),p=a(254),g=a(255),y=a(256),N=a(257),S=a(258),w=a(101),A=a.n(w),F=function(e){var t=e.result,a=e.deleteSolve,r=t.id,c=t.time,i=t.date,l=t.scramble,j=Object(n.useState)(!1),d=Object(s.a)(j,2),b=d[0],u=d[1],m=function(){u(!1)};return Object(o.jsxs)("div",{children:[Object(o.jsx)(x.a,{onClick:function(){u(!0)},children:r+1}),Object(o.jsxs)(h.a,{open:b,onClose:m,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(o.jsx)(p.a,{id:"alert-dialog-title",children:"Details"}),Object(o.jsx)(g.a,{children:Object(o.jsx)(y.a,{id:"alert-dialog-description",children:Object(o.jsxs)(N.a,{container:!0,spacing:3,children:[Object(o.jsxs)(N.a,{item:!0,xs:2,align:"center",children:["Solve #",t.id+1]}),Object(o.jsx)(N.a,{item:!0,xs:2,align:"center",children:c}),Object(o.jsx)(N.a,{item:!0,xs:6,align:"center",children:i}),Object(o.jsx)(N.a,{item:!0,xs:2,align:"right",children:Object(o.jsx)(x.a,{size:"small",color:"secondary",onClick:function(){m(),a(r)},children:Object(o.jsx)(A.a,{})})}),Object(o.jsxs)(N.a,{item:!0,xs:12,children:["Scramble: ",l]})]})})}),Object(o.jsx)(S.a,{children:Object(o.jsx)(x.a,{onClick:m,color:"secondary",autoFocus:!0,children:"Close"})})]})]})},k=function(e){var t=e.results,a=e.deleteSolve;return t[0]?Object(o.jsx)(d.a,{component:b.a,children:Object(o.jsxs)(u.a,{size:"small","aria-label":"a dense table",children:[Object(o.jsx)(m.a,{children:Object(o.jsxs)(O.a,{children:[Object(o.jsx)(v.a,{align:"center",children:" # "}),Object(o.jsx)(v.a,{align:"center",children:"Time"})]})}),Object(o.jsx)(f.a,{children:t.map((function(e){return Object(o.jsxs)(O.a,{color:"primary",children:[Object(o.jsx)(v.a,{align:"center",component:"th",scope:"row",children:Object(o.jsx)(F,{result:e,deleteSolve:a})}),Object(o.jsx)(v.a,{align:"center",children:e.time})]},e.id)}))})]})}):Object(o.jsx)(l.a,{variant:"body1",children:"No history"})},D=function(e){var t=e.scramble,a=e.newScramble;return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)(x.a,{variant:"contained",onClick:function(){return a()},children:"New Scramble"})]})},L=a(265),C=a(266),E=function(e){var t=e.ao5,a=e.pb;return Object(o.jsx)(L.a,{children:Object(o.jsxs)(C.a,{children:[Object(o.jsx)(l.a,{variant:"h5",children:"Average of 5:"}),Object(o.jsx)(l.a,{variant:"h6",color:"primary",children:"N/A"===t?t:t.time}),Object(o.jsx)(l.a,{variant:"body2",children:"N/A"===t?null:t.details}),Object(o.jsx)(l.a,{variant:"h5",children:"Best:"}),Object(o.jsx)(l.a,{variant:"h6",color:"primary",children:"N/A"===a?a:a.time})]})})},B=a(104),I=function(e){var t=e.results,a=e.ao5;return t[0]?Object(o.jsx)(B.a,{data:{labels:t.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:t.map((function(e){return e.time})),label:"Time",borderColor:"#ff7961",fill:!1},{data:a.map((function(e){return"N/A"===e?null:e.time})),label:"Average of 5",borderColor:"#3f50b5",fill:!1}],reverse:!0},options:{scales:{x:{reverse:!0}}}}):null},J=function(){var e="",t=-1,a=["U","U'","U2","D","D'","D2"],n=["R","R'","R2","L","L'","L2"],r=["F","F'","F2","B","B'","B2"],c="",i=Math.floor(18*Math.random());i<6?(c=a[i],t=0):i<12?(c=n[i-6],t=1):(c=r[i-12],t=2);for(var s=0;s<20;s++){var l=Math.floor(12*Math.random());0===t?l<6?(c=n[l],t=1):(c=r[l-6],t=2):1===t?l<6?(c=a[l],t=0):(c=r[l-6],t=2):l<6?(c=a[l],t=0):(c=n[l-6],t=1),e+="  "+c}return e},M=a(268),R=function(e,t){var a=Object(n.useState)((function(){if("undefined"!==typeof window){var a=window.localStorage.getItem(e);if(null!==a)return JSON.parse(a)}return t})),r=Object(s.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(c))}),[c]),[c,i]},T=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),l=Object(s.a)(c,2),d=l[0],b=l[1],u=Object(n.useState)(-1),m=Object(s.a)(u,2),O=m[0],v=m[1],f=Object(n.useState)(0),h=Object(s.a)(f,2),p=h[0],g=h[1],y=Object(n.useState)(!1),S=Object(s.a)(y,2),w=S[0],A=S[1],F=Object(n.useState)(J()),L=Object(s.a)(F,2),C=L[0],B=L[1],T=R("totalSolves",0),U=Object(s.a)(T,2),z=U[0],P=U[1],q=R("results",[]),G=Object(s.a)(q,2),H=G[0],K=G[1],Q=R("ao5",["N/A","N/A","N/A","N/A"]),V=Object(s.a)(Q,2),W=V[0],X=V[1],Y=R("pb","N/A"),Z=Object(s.a)(Y,2),$=Z[0],_=Z[1],ee=function e(t){t.preventDefault(),t.stopPropagation(),clearInterval(O),r((function(e){return!e}));var a=new Date,n=((a.getTime()-p)/1e3).toFixed(2);b(n),g(0);var c={id:z,time:n,date:a.toLocaleString(),scramble:C},s=Object(i.a)(H);if(s.unshift(c),K(s),P((function(e){return e+1})),("N/A"===$||n<=$.time)&&_(c),z+1>=5){for(var l=0,o=0,j=0,d=0;d<5;d++){var u=parseFloat(s[d].time);l+=u,u<parseFloat(s[o].time)&&(o=d),u>=parseFloat(s[j].time)&&(j=d)}for(var m="",v=4;v>=0;v--)m+=" ",m+=v===o||v===j?"("+s[v].time+")":s[v].time;X((function(e){var t=Object(i.a)(e);return t.unshift({time:((l-parseFloat(s[o].time)-parseFloat(s[j].time))/3).toFixed(2),details:m}),t}))}B(J()),document.removeEventListener("keydown",e)},te=function e(t){if(-1===O)if(32===t.keyCode){t.preventDefault(),t.stopPropagation();var a=new Date;g(a.getTime()),b(0);var n=setInterval((function(){b((function(e){return((10*e+1)/10).toFixed(1)}))}),100);v(n),r((function(e){return!e})),document.removeEventListener("keyup",e)}else"Escape"===t.key&&(t.preventDefault(),b(0));else v(-1),A((function(e){return!e})),document.removeEventListener("keydown",ee),document.removeEventListener("keyup",e)};Object(n.useEffect)((function(){a?document.addEventListener("keydown",ee):document.addEventListener("keyup",te)}),[a,w]);return-1===O?Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(N.a,{container:!0,spacing:3,justify:"center",children:[Object(o.jsx)(N.a,{item:!0,xs:12,children:Object(o.jsx)(D,{scramble:C,newScramble:function(){return B(J())}})}),Object(o.jsxs)(N.a,{item:!0,xs:3,children:[Object(o.jsx)(M.a,{mb:2,children:Object(o.jsx)(x.a,{variant:"contained",color:"secondary",onClick:function(){H[0]?window.confirm("Do you want to remove all solves?")&&(P(0),K([]),b(0),X(["N/A","N/A","N/A","N/A"]),_("N/A")):alert("No solves available")},children:"Reset All"})}),Object(o.jsx)(M.a,{className:"results-table",children:Object(o.jsx)(k,{results:H,deleteSolve:function(e){for(var t=Object(i.a)(H),a=z-e-1;a>=1;a--)t[a]=t[a-1],t[a].id--;t.shift(),K(t);var n=z-1;console.log(n),P(n);for(var r=t[0],c=1;c<n;c++)t[c].time<r.time&&(r=t[c]);_(r||"N/A");for(var s=[],l=0;l<n-4;l++){for(var o=0,j=0,d=0,b=l;b<l+5;b++){var u=parseFloat(t[b].time);o+=u,u<parseFloat(t[j].time)&&(j=b),u>=parseFloat(t[d].time)&&(d=b)}for(var m="",O=l+4;O>=l;O--)m+=" ",m+=O===j||O===d?"("+t[O].time+")":t[O].time;s.push({time:((o-parseFloat(t[j].time)-parseFloat(t[d].time))/3).toFixed(2),details:m})}for(var v=0;v<4;v++)s.push("N/A");console.log(s),X(s)}})})]}),Object(o.jsxs)(N.a,{item:!0,xs:6,children:[Object(o.jsx)(M.a,{mb:2,children:Object(o.jsx)(j,{time:d,active:0})}),Object(o.jsx)(I,{results:H,ao5:W})]}),Object(o.jsx)(N.a,{item:!0,xs:3,children:Object(o.jsx)(E,{ao5:W[0],pb:$})})]})}):Object(o.jsx)(j,{time:d,active:1})};c.a.render(Object(o.jsx)(T,{}),document.getElementById("root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.6786c04f.chunk.js.map