(this.webpackJsonpticketapp=this.webpackJsonpticketapp||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(1),c=n.n(a),s=n(19),i=n.n(s),u=(n(27),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),c(t),s(t)}))}),l=n(4),o=n(5),j=n(7),b=n(6),h=n(12),d=n(2),O=[{title:"Dashboard",url:"/dashboard",class:"nav-links"},{title:"Add Ticket",url:"/addticket",class:"nav-links"},{title:"About",url:"/about",class:"nav-links"}],p=(n(28),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsx)("div",{className:"vertical-menu",children:Object(r.jsx)("ul",{children:O.map((function(t,e){return Object(r.jsx)("li",{children:Object(r.jsx)(h.b,{to:t.url,className:t.class,children:t.title})},e)}))})})})}}]),n}(a.Component));n(34);function x(t,e){return 32-new Date(e,t,32).getDate()}var m=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var r;Object(l.a)(this,n),(r=e.call(this,t)).getDay=function(t){console.log(t.target.value)},r.prevMonth=function(){var t=r.state.currentMonth-1;t<0?r.setState({currentMonth:11,currentYear:r.state.currentYear-1},(function(){r.formatCalendar(r.state.currentMonth,r.state.currentYear)})):r.setState({currentMonth:t},(function(){r.formatCalendar(r.state.currentMonth,r.state.currentYear)}))},r.nextMonth=function(){var t=r.state.currentMonth+1;t>11?r.setState({currentMonth:0,currentYear:r.state.currentYear+1},(function(){r.formatCalendar(r.state.currentMonth,r.state.currentYear)})):r.setState({currentMonth:t},(function(){r.formatCalendar(r.state.currentMonth,r.state.currentYear)}))},r.formatCalendar=function(t,e){for(var n=[],a=new Date(e,t,1),c=x(t-1,e)-(a.getDay()-1),s=1;s<=a.getDay();s++)n.push({active:2,day:c}),c++;for(var i=1;i<=x(t,e);i++)r.state.currentDay===i&&r.state.currentDate.getMonth()===t&&r.state.currentDate.getFullYear()===e?n.push({active:1,day:i}):n.push({active:0,day:i});for(var u=1,l=n.length;l<42;l++,u++)n.push({active:3,day:u});r.setState({calendar:n})};var a=new Date,c=a.getMonth(),s=a.getFullYear(),i=a.getDate();return r.state={dayName:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthName:["January","February","March","April","May","June","July","August","September","October","November","December"],currentDate:a,currentMonth:c,currentDay:i,currentYear:s,calendar:[]},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.formatCalendar(this.state.currentMonth,this.state.currentYear)}},{key:"render",value:function(){var t=this;return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsxs)("div",{className:"calendar",children:[Object(r.jsx)("div",{className:"month",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("button",{onClick:this.prevMonth,className:"prev",children:"\u276e"}),Object(r.jsx)("button",{onClick:this.nextMonth,className:"next",children:"\u276f"}),Object(r.jsx)("li",{children:this.state.monthName[this.state.currentMonth]}),Object(r.jsx)("span",{className:"year",children:this.state.currentYear})]})}),Object(r.jsx)("div",{children:Object(r.jsx)("ul",{className:"weekdays",children:this.state.dayName.map((function(t){return Object(r.jsx)("li",{children:t},t)}))})}),Object(r.jsx)("div",{children:Object(r.jsx)("ul",{className:"day-container",children:this.state.calendar.map((function(e,n){return 3===e.active?Object(r.jsx)("button",{onClick:t.nextMonth,value:e,className:"inactive",children:e.day},n):2===e.active?Object(r.jsx)("button",{onClick:t.prevMonth,value:e,className:"inactive",children:e.day},n):1===e.active?Object(r.jsx)("button",{onClick:t.getDay,value:e.day,className:"active",children:e.day},n):Object(r.jsx)("button",{onClick:t.getDay,value:e.day,className:"item",children:e.day},n)}))})})]})})}}]),n}(a.Component),v=(n(35),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(l.a)(this,n),(r=e.call(this,t)).state={tableHeader:["Issue","Date","User","Priority"],requests:t.requests},r}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("table",{className:"requests",children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:this.state.tableHeader.map((function(t){return Object(r.jsx)("th",{children:t},t)}))})}),Object(r.jsx)("tbody",{children:this.state.requests.map((function(t,e,n){return Object(r.jsx)("tr",{children:[Object(r.jsx)("td",{children:n[n.length-1-e].Issue},"Issue"+e),Object(r.jsx)("td",{children:n[n.length-1-e].Date},"Date"+e),Object(r.jsx)("td",{children:n[n.length-1-e].User},"User"+e),Object(r.jsx)("td",{children:n[n.length-1-e].Priority},"Priority"+e)]},t+e)}))})]})}}]),n}(a.Component)),f=(n(36),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(p,{}),Object(r.jsxs)("div",{className:"main-row",children:[Object(r.jsx)("div",{className:"req-table",children:Object(r.jsx)(v,{requests:this.props.requests})}),Object(r.jsx)("div",{className:"calendar",children:Object(r.jsx)(m,{})})]})]})}}]),n}(a.Component)),y=n(21),g=(n(37),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;Object(l.a)(this,n),(a=e.call(this,t)).inputChange=function(t){t.preventDefault(),a.setState(Object(y.a)({},t.target.name,t.target.value))},a.addTicket=function(t){if(t.preventDefault(),null!=a.state.issue&&null!=a.state.priority&&null!=a.state.user){var e=a.state.date.getMonth()+1+"/"+a.state.date.getDate()+"/"+a.state.date.getFullYear(),n={Issue:a.state.issue,Date:e,User:a.state.user,Priority:a.state.priority};return a.props.requests.push(n),0}return Object(r.jsx)("br",{})};var c=new Date;return a.state={issue:null,date:c,user:null,priority:null},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(p,{}),Object(r.jsx)("div",{className:"ticket-submit",children:Object(r.jsxs)("form",{id:"ticket",onSubmit:this.addTicket,children:["Issue: ",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"issue",onChange:this.inputChange,placeholder:"Enter your issue"}),Object(r.jsx)("br",{}),"User: ",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"user",onChange:this.inputChange,placeholder:"Enter your name/username"}),Object(r.jsx)("br",{}),"Priority: ",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"priority",onChange:this.inputChange,placeholder:"Enter priority level"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"submit",value:"Submit"})]})})]})}}]),n}(a.Component)),k=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsx)(p,{})})}}]),n}(a.Component),C=(n(38),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(l.a)(this,n),(r=e.call(this,t)).state={requests:[]},r}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsx)(h.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(d.b,{exact:!0,path:"/ticketapp",children:Object(r.jsx)(d.a,{to:"/dashboard"})}),Object(r.jsx)(d.b,{path:"/dashboard",component:function(){return Object(r.jsx)(f,{requests:t.state.requests})}}),Object(r.jsx)(d.b,{path:"/addticket",component:function(){return Object(r.jsx)(g,{requests:t.state.requests})}}),Object(r.jsx)(d.b,{path:"/about",component:k})]})})}}]),n}(a.Component));i.a.render(Object(r.jsx)(C,{}),document.getElementById("root")),u()}},[[39,1,2]]]);
//# sourceMappingURL=main.5302bfce.chunk.js.map