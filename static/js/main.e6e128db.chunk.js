(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{67:function(t,e,n){},68:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r),i=n(27),c=n.n(i),s=(n(67),n.p,n(68),n(5)),l=n(6),o=n(4),u=n(7),d=n(8),h=n(3),m=n.n(h),f=n(10),y=n(0),p=n(1),v=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).svgRef=a.a.createRef(),r.state={year:1800},r.setyear=r.setyear.bind(Object(o.a)(r)),r.tick=r.tick.bind(Object(o.a)(r)),r}return Object(l.a)(n,[{key:"updatechart",value:function(){var t=this,e=this.median_childmortality.filter((function(e){return e.year<=t.state.year})),n=this.median_income.filter((function(e){return e.year<=t.state.year})),r=y.e().domain([1800,2040]).range([0,700]),a=y.e().domain([0,500]).range([300,0]),i=y.f().domain([200,179e3]).range([300,0]);y.g("#scatter").html(""),y.g("#scatter").append("g").attr("transform","translate(50,50)").selectAll("circle").data(e).enter().append("circle").attr("cx",(function(t,e){return r(t.year)})).attr("cy",(function(t,e){return a(t.median_val)})).attr("r",(function(t,e){return 1.5})).attr("fill",(function(t,e){return t.year>2021?"red":"lightblue"})),y.g("#scatter").append("g").attr("transform","translate(50,50)").call(y.b(a).tickFormat(y.d("~s"))),y.g("svg").append("g").attr("transform","translate(50,350)").call(y.a(r)),y.g("#scatter").append("g").attr("transform","translate(50,450)").selectAll("circle").data(n).enter().append("circle").attr("cx",(function(t,e){return r(t.year)})).attr("cy",(function(t,e){return i(t.median_val)})).attr("r",(function(t,e){return 1.5})).attr("fill",(function(t,e){return t.year>2021?"red":"lightblue"})),y.g("#scatter").append("g").attr("transform","translate(50,450)").call(y.b(i).tickValues([300,1e3,3e3,1e4,3e4,1e5]).tickFormat(y.d("~s"))),y.g("svg").append("g").attr("transform","translate(50,750)").call(y.a(r))}},{key:"componentDidMount",value:function(){var t=Object(f.a)(m.a.mark((function t(){var e,n,r=this;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("chart mounted"),t.next=3,y.c("/income_processed.csv");case 3:return this.incomedata=t.sent,t.next=6,y.c("/child_mortality_0_5_year_olds_dying_per_1000_born.csv");case 6:for(this.cm_data=t.sent,this.median_childmortality=[],this.median_income=[],e=function(t){var e=r.incomedata.map((function(e){var n=r.cm_data.find((function(t){return t.country===e.country}));return void 0===n||isNaN(e[t])||isNaN(n[t])?null:{country:e.country,income:e[t],child_mortality:n[[t]]}})).filter((function(t){return t.child_mortality>0})),n=function(t,e){return t+parseFloat(e)},a=e.map((function(t){return t.child_mortality})).reduce(n,0);r.median_childmortality.push({year:t,median_val:a/e.length});var i=e.map((function(t){return t.income})).reduce(n,0);r.median_income.push({year:t,median_val:i/e.length})},n=1800;n<2041;n++)e(n);console.log(this.median_childmortality),console.log(this.median_income),this.updatechart(),this.timerID=setInterval((function(){return r.tick()}),25);case 15:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){console.log("Unmounting"),clearInterval(this.timerID),this.timerID=null,y.g("#scatter").html("")}},{key:"componentDidUpdate",value:function(){this.updatechart()}},{key:"tick",value:function(){if(this.state.year>=2040)return clearInterval(this.timerID),void(this.timerID=null);this.setState((function(t,e){return{year:t.year+1}}))}},{key:"setyear",value:function(t){clearInterval(this.timerID),this.timerID=null,this.setState({year:t.target.value})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{children:[Object(p.jsx)("label",{for:"year",children:"Please select a year: "}),Object(p.jsx)("input",{type:"range",min:1800,max:2040,step:1,id:"year",value:this.state.year,onInput:this.setyear}),Object(p.jsx)("output",{name:"selected_year",id:"selected_year",children:this.state.year})]}),Object(p.jsx)("svg",{id:"scatter",width:800,height:800,ref:this.svgRef})]})}}]),n}(r.Component),g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).svgRef=a.a.createRef(),r.state={year:1800},r.setyear=r.setyear.bind(Object(o.a)(r)),r.tick=r.tick.bind(Object(o.a)(r)),r}return Object(l.a)(n,[{key:"updatechart",value:function(){var t=this,e=this.incomedata.map((function(e){var n=t.cm_data.find((function(t){return t.country===e.country}));return void 0===n||isNaN(e[t.state.year])||isNaN(n[t.state.year])?null:{country:e.country,income:e[t.state.year],child_mortality:n[[t.state.year]]}})).filter((function(t){return t.child_mortality>0})),n=1e3,r=1.5;null===this.timerID&&(2021==this.state.year&&(n=150),r=3);var a=y.f().domain([200,179e3]).range([0,700]),i=y.e().domain([0,n]).range([700,0]);y.g("#scatter").html(""),y.g("#scatter").append("g").attr("transform","translate(50,50)").selectAll("circle").data(e).enter().append("circle").attr("cx",(function(t,e){return a(t.income)})).attr("cy",(function(t,e){return i(t.child_mortality)})).attr("r",(function(t,e){return r})).attr("fill","lightblue"),y.g("#scatter").append("g").attr("transform","translate(50,50)").call(y.b(i).tickFormat(y.d("~s"))),y.g("svg").append("g").attr("transform","translate(50,750)").call(y.a(a).tickValues([300,1e3,3e3,1e4,3e4,1e5]).tickFormat(y.d("~s")))}},{key:"componentDidMount",value:function(){var t=Object(f.a)(m.a.mark((function t(){var e=this;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.c("/income_processed.csv");case 2:return this.incomedata=t.sent,t.next=5,y.c("/child_mortality_0_5_year_olds_dying_per_1000_born.csv");case 5:this.cm_data=t.sent,this.updatechart(),this.timerID=setInterval((function(){return e.tick()}),25);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){console.log("Unmounting"),clearInterval(this.timerID),this.timerID=null,y.g("#scatter").html("")}},{key:"componentDidUpdate",value:function(){this.updatechart()}},{key:"tick",value:function(){if(this.state.year>=2040)return clearInterval(this.timerID),this.timerID=null,void this.setState((function(t,e){return{year:2021}}));this.setState((function(t,e){return{year:t.year+1}}))}},{key:"setyear",value:function(t){clearInterval(this.timerID),this.timerID=null,this.setState({year:t.target.value})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{children:[Object(p.jsx)("label",{for:"year",children:"Please select a year: "}),Object(p.jsx)("input",{type:"range",min:1800,max:2040,step:1,id:"year",value:this.state.year,onInput:this.setyear}),Object(p.jsx)("output",{name:"selected_year",id:"selected_year",children:this.state.year})]}),Object(p.jsx)("svg",{id:"scatter",width:800,height:800,ref:this.svgRef})]})}}]),n}(r.Component),j=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).svgRef=a.a.createRef(),r.state={year:1800},r.setyear=r.setyear.bind(Object(o.a)(r)),r.tick=r.tick.bind(Object(o.a)(r)),r}return Object(l.a)(n,[{key:"updatechart",value:function(){var t=this,e=this.median_childmortality.filter((function(e){return e.year<=t.state.year})),n=this.median_income.filter((function(e){return e.year<=t.state.year})),r=y.e().domain([1800,2040]).range([0,700]),a=y.e().domain([0,500]).range([300,0]),i=y.f().domain([200,179e3]).range([300,0]);y.g("#scatter").html(""),y.g("#scatter").append("g").attr("transform","translate(50,50)").selectAll("circle").data(e).enter().append("circle").attr("cx",(function(t,e){return r(t.year)})).attr("cy",(function(t,e){return a(t.median_val)})).attr("r",(function(t,e){return 1.5})).attr("fill",(function(t,e){return t.year>2021?"red":"lightblue"})),y.g("#scatter").append("g").attr("transform","translate(50,50)").call(y.b(a).tickFormat(y.d("~s"))),y.g("svg").append("g").attr("transform","translate(50,350)").call(y.a(r)),y.g("#scatter").append("g").attr("transform","translate(50,450)").selectAll("circle").data(n).enter().append("circle").attr("cx",(function(t,e){return r(t.year)})).attr("cy",(function(t,e){return i(t.median_val)})).attr("r",(function(t,e){return 1.5})).attr("fill",(function(t,e){return t.year>2021?"red":"lightblue"})),y.g("#scatter").append("g").attr("transform","translate(50,450)").call(y.b(i).tickValues([300,1e3,3e3,1e4,3e4,1e5]).tickFormat(y.d("~s"))),y.g("svg").append("g").attr("transform","translate(50,750)").call(y.a(r))}},{key:"componentDidMount",value:function(){var t=Object(f.a)(m.a.mark((function t(){var e,n,r=this;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("chart mounted"),t.next=3,y.c("/income_processed.csv");case 3:return this.incomedata=t.sent,t.next=6,y.c("/child_mortality_0_5_year_olds_dying_per_1000_born.csv");case 6:for(this.cm_data=t.sent,this.median_childmortality=[],this.median_income=[],e=function(t){var e=r.incomedata.map((function(e){var n=r.cm_data.find((function(t){return t.country===e.country}));return void 0===n||isNaN(e[t])||isNaN(n[t])?null:{country:e.country,income:e[t],child_mortality:n[[t]]}})).filter((function(t){return t.child_mortality>0})),n=function(t,e){return t+parseFloat(e)},a=e.map((function(t){return t.child_mortality})).reduce(n,0);r.median_childmortality.push({year:t,median_val:a/e.length});var i=e.map((function(t){return t.income})).reduce(n,0);r.median_income.push({year:t,median_val:i/e.length})},n=1800;n<2041;n++)e(n);console.log(this.median_childmortality),console.log(this.median_income),this.updatechart(),this.timerID=setInterval((function(){return r.tick()}),25);case 15:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){console.log("Unmounting"),clearInterval(this.timerID),this.timerID=null,y.g("#scatter").html("")}},{key:"componentDidUpdate",value:function(){this.updatechart()}},{key:"tick",value:function(){if(this.state.year>=2040)return clearInterval(this.timerID),void(this.timerID=null);this.setState((function(t,e){return{year:t.year+1}}))}},{key:"setyear",value:function(t){clearInterval(this.timerID),this.timerID=null,this.setState({year:t.target.value})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{children:[Object(p.jsx)("label",{for:"year",children:"Please select a year: "}),Object(p.jsx)("input",{type:"range",min:1800,max:2040,step:1,id:"year",value:this.state.year,onInput:this.setyear}),Object(p.jsx)("output",{name:"selected_year",id:"selected_year",children:this.state.year})]}),Object(p.jsx)("svg",{id:"scatter",width:800,height:800,ref:this.svgRef})]})}}]),n}(r.Component),b=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).svgRef=a.a.createRef(),r.state={scene:0},r.setscene=r.setscene.bind(Object(o.a)(r)),r}return Object(l.a)(n,[{key:"setscene",value:function(){this.setState({scene:(this.state.scene+1)%3})}},{key:"render",value:function(){return 0==this.state.scene?Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:this.setscene,children:"Change"}),Object(p.jsx)(g,{})]}):1==this.state.scene?Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:this.setscene,children:"Change"}),Object(p.jsx)(v,{})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:this.setscene,children:"Change"}),Object(p.jsx)(j,{})]})}}]),n}(r.Component);var _=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(b,{})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),i(t),c(t)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root")),O()}},[[71,1,2]]]);
//# sourceMappingURL=main.e6e128db.chunk.js.map