(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(3),o=n.n(i),r=n(4),s=n(5),l=n(10),d=n(9),u=(n(15),n(6)),b=n.n(u),j=n(0),h=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,i=e.positivePercentage;return Object(j.jsxs)("div",{className:"Statistics",children:[Object(j.jsxs)("p",{children:["Good: ",t]}),Object(j.jsxs)("p",{children:["Neutral: ",n]}),Object(j.jsxs)("p",{children:["Bad: ",a]}),Object(j.jsxs)("p",{children:["Total: ",c]}),Object(j.jsxs)("p",{children:["Positive feedback: ",i,"%"]})]})},v=n(7),O=n.n(v),p=function(e){var t=e.title,n=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:O.a.title,children:t}),n]})},x=n(8),f=n.n(x),g=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("ul",{className:f.a.list,children:t.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:n,children:e.label})},e.id)}))})},k=[{id:"id-1",label:"Good"},{id:"id-2",label:"Neutral"},{id:"id-3",label:"Bad"}],m=function(e){var t=e.message;return Object(j.jsx)("div",{children:t})},F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.target.textContent;"Good"===n?e.setState((function(e){return{good:e.good+1}})):"Neutral"===n?e.setState((function(e){return{neutral:e.neutral+1}})):"Bad"===n&&e.setState((function(e){return{bad:e.bad+1}}))},e}return Object(s.a)(n,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state,t=e.good,n=t+e.neutral+e.bad,a=Math.floor(t/n*100);return isNaN(a)?0:a}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:b.a.container,children:[Object(j.jsx)(p,{title:"Please leave feedback",children:Object(j.jsx)(g,{options:k,onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(p,{title:"Statistics",children:this.countTotalFeedback()<1?Object(j.jsx)(m,{message:"No feedback given"}):Object(j.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})})}}]),n}(a.Component);n(17);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={container:"Container_container__1cXJQ"}},7:function(e,t,n){e.exports={title:"Title_title__2yp1r"}},8:function(e,t,n){e.exports={list:"FeedbackOptions_list__30u1n"}}},[[18,1,2]]]);
//# sourceMappingURL=main.12a9bb22.chunk.js.map