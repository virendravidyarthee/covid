(this["webpackJsonpdashboard-react"]=this["webpackJsonpdashboard-react"]||[]).push([[0],{148:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(30),o=n.n(c),i=(n(83),n(84),n(150)),s=n(14),l=Object(s.a)(),u=n(73);function d(e){var t=e.component,n=(e.isPrivate,Object(u.a)(e,["component","isPrivate"]));return r.a.createElement(i.b,Object.assign({},n,{component:t}))}d.defaultProps={isPrivate:!1};var p=n(62),h=n(63),f=n(32),m=n(71),g=n(74),v=n(6),y=n(16),b=n(19),w=n.n(b);function _(e,t){var n;return{type:"fetch_data",payload:{country:e,historicalDates:(n=t,Array.from({length:n},(function(e,t){return w()().subtract(t,"days")})))}}}var x={lastWeek:[],nextWeek:[],graphData:[],height:800,width:400,isPredictionsLoading:!0,isCurrenDataLoading:!0,crosshairValues:[],failureMessage:"",currentTotalCases:null,currentRecoveredCases:null,currentDeceasedCases:null};function j(e){return e.loginReducer.lastWeek}function E(e){return e.loginReducer.nextWeek}function O(e){return e.loginReducer.isPredictionsLoadingoading}function k(e){return e.loginReducer.graphData}function D(e){return e.loginReducer.width}function C(e){return e.loginReducer.height}function W(e){return e.loginReducer.crosshairValues}function R(e){return e.loginReducer.currentTotalCases}function M(e){return e.loginReducer.currentRecoveredCases}function T(e){return e.loginReducer.currentDeceasedCases}var P=n(33),L=n(7);function Y(){var e=Object(v.a)(["\n  font-size: 9px;\n  margin-top: 32px;\n  text-align: center;\n"]);return Y=function(){return e},e}function z(){var e=Object(v.a)(["\n  color: white;\n  margin-top: 16px;\n"]);return z=function(){return e},e}function I(){var e=Object(v.a)(["\n  color: white;\n  text-align: center;\n  font-size: 0.5rem;\n"]);return I=function(){return e},e}function V(){var e=Object(v.a)(["\n  color: yellow;\n  text-align: center;\n  font-size: 0.8rem;\n  margin-bottom: 16px;\n"]);return V=function(){return e},e}function A(){var e=Object(v.a)(["\n  flex-direction: column;\n"]);return A=function(){return e},e}function F(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin-left: 2px;\n  margin-right: 2px;\n"]);return F=function(){return e},e}function S(){var e=Object(v.a)(["\n  margin: auto;\n"]);return S=function(){return e},e}function B(){var e=Object(v.a)(["\n  color: white;\n  text-align: center;\n"]);return B=function(){return e},e}function H(){var e=Object(v.a)(["\n  margin-top: 16px;\n  color: white;\n  text-align: center;\n  font-size: 11px;\n"]);return H=function(){return e},e}function J(){var e=Object(v.a)(["\n  color: white;\n  text-align: center;\n  margin-left: 4px;\n  margin-right: 4px;\n"]);return J=function(){return e},e}function U(){var e=Object(v.a)(["\n  flex-direction: column;\n"]);return U=function(){return e},e}function q(){var e=Object(v.a)(["\n  margin-right: 16px;\n  margin-left: 16px;\n  width: '100%';\n  border-radius: 8px;\n  border: 0.5px solid yellow;\n"]);return q=function(){return e},e}function N(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin-right: 16px;\n  margin-left: 16px;\n  width: '100%';\n  border-radius: 8px;\n  border: 0.5px solid yellow;\n"]);return N=function(){return e},e}function X(){var e=Object(v.a)(["\n  font-size: 1.2rem;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n"]);return X=function(){return e},e}function $(){var e=Object(v.a)(["\n  margin-left: 16px;\n  margin-right: 16px;\n  width: '100%';\n"]);return $=function(){return e},e}var G=L.a.div($()),K=L.a.p(X()),Q=L.a.div(N()),Z=L.a.div(q()),ee=L.a.div(U()),te=L.a.h5(J()),ne=L.a.p(H()),ae=L.a.p(B()),re=L.a.div(S()),ce=L.a.div(F()),oe=L.a.div(A()),ie=L.a.p(V()),se=L.a.p(I()),le=L.a.div(z()),ue=L.a.div(Y()),de=n(68),pe=n.n(de),he=n(21);n(130);function fe(){var e=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background: ",";\n  overflow-y: scroll;\n"]);return fe=function(){return e},e}var me=L.a.div(fe(),"#212121"),ge=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).updateWindowDimensions=a.updateWindowDimensions.bind(Object(f.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"get_current_data",payload:{country:"india"}}),this.props.dispatch(_("india",10)),window.addEventListener("resize",this.updateWindowDimensions.bind(this)),this.updateWindowDimensions()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions.bind(this))}},{key:"updateWindowDimensions",value:function(){var e,t;this.props.dispatch((e=window.innerWidth,t=window.innerHeight,{type:"update_dimensions",payload:{width:e,height:t}}))}},{key:"render",value:function(){var e=this,t=this.props.lastWeek[this.props.lastWeek.length-1];return r.a.createElement(me,null,r.a.createElement(G,null,r.a.createElement(K,null,"Covid-19 predictions in India")),r.a.createElement(Q,null,r.a.createElement(ee,null,r.a.createElement(te,null,"Total cases"),r.a.createElement(ae,null,this.props.currentTotalCases)),r.a.createElement(ee,null,r.a.createElement(te,null,"Recovered"),r.a.createElement(ae,null,this.props.currentRecoveredCases)),r.a.createElement(ee,null,r.a.createElement(te,null,"Deceased"),r.a.createElement(ae,null,this.props.currentDeceasedCases))),t?r.a.createElement("div",null,r.a.createElement(ne,null,"Confirmed total cases projections over the coming week: (\xb170 cases)"),r.a.createElement(ce,null,this.props.nextWeek.map((function(e,t){return r.a.createElement(oe,{key:t},r.a.createElement(ie,null,e.total_cases),r.a.createElement(se,null,e.date.format("ddd,D/M")))}))),r.a.createElement(le,null,r.a.createElement(he.e,{onMouseLeave:function(){e.props.dispatch({type:"clear_crosshair_values",payload:{}})},margin:{left:.11*this.props.width,right:10,top:50,bottom:25},xType:"time",height:.45*this.props.height,width:.95*this.props.width},r.a.createElement(he.c,{onNearestX:function(t){e.props.dispatch({type:"set_crosshair_values",payload:{values:[{x:t.x.toDate(),y:t.y}]}})},style:{fill:"none"},color:"yellow",data:this.props.graphData}),r.a.createElement(he.b,null),r.a.createElement(he.a,{values:this.props.crosshairValues}),r.a.createElement(he.d,{tickFormat:function(e){return"".concat(e.getDate(),"/").concat(e.getMonth()+1)},tickTotal:5}),r.a.createElement(he.f,{tickSize:1}))),r.a.createElement(Z,{style:{marginTop:"16px"}},r.a.createElement(te,null,"How it works"),r.a.createElement(te,null,"The past week's data is analysed to determine the growth rate of total confirmed cases. A mean of that growth rate is then used to project the coming week's outcome"),r.a.createElement(ne,null,"Source: https://en.wikipedia.org/wiki/Exponential_growth")),r.a.createElement("div",null,r.a.createElement(ne,null," Disclaimer"),r.a.createElement(ne,null,"The developer holds no responsibility of the data displayed on this website. This data is merely speculative and is just a projection based on the current trend of change. For educational puposes only. Do your part. STAY HOME."),r.a.createElement(ue,null,"Icons made by"," ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," ","from"," ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))):r.a.createElement(re,null,r.a.createElement(pe.a,{type:"MutatingDots",color:"yellow",height:100,width:100}),r.a.createElement(te,null,"Analysing."),r.a.createElement(ne,null,"Please stay on this page...")))}}]),n}(r.a.Component),ve=Object(P.b)((function(e){return{lastWeek:j(e),nextWeek:E(e),is_loading:O(e),graphData:k(e),height:C(e),width:D(e),crosshairValues:W(e),currentTotalCases:R(e),currentRecoveredCases:M(e),currentDeceasedCases:T(e)}}))(ge);function ye(){return r.a.createElement(i.d,null,r.a.createElement(d,{path:"/covid",exact:!0,component:ve}))}var be=function(){return r.a.createElement(i.c,{history:l},r.a.createElement(ye,null))},we=n(72),_e=n(18),xe=n(13),je=n.n(xe),Ee=n(9),Oe=n(70),ke=n.n(Oe),De={"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"5aa871fb55msha1efb1e49628ad0p15ec67jsn429c11038010"},Ce=function(e,t,n){return ke.a.request({method:e,baseURL:"https://coronavirus-monitor.p.rapidapi.com/",url:t,timeout:3e3,headers:De,params:n})},We=je.a.mark(Te),Re=je.a.mark(Pe),Me=je.a.mark(Ye);function Te(e){var t,n,a,r,c,o,i,s,l,u,d,p,h,f,m;return je.a.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,t=[],n=[],a=[],r=null,g.next=7,Object(Ee.b)(Ce,"get","coronavirus/cases_by_particular_country.php",{country:e.payload.country});case 7:for(c=g.sent,c.data.stat_by_country.forEach((function(e,n,a){if(n+1<a.length){var c=a[n+1],o=w()(e.record_date);w()(c.record_date).isSameOrBefore(o,"day")||(r=e)}else r=e;null!=r&&(t.push(r),r=null)})),t=t.reverse(),o=t[t.length-1].total_cases,i=t.length-2;i>-1;i--)s=t[i],l=s.total_cases,u=Math.log(parseInt(l.replace(/,/g,"")))-Math.log(parseInt(o.replace(/,/g,""))),d=u/(t.length-1-i),p=Math.exp(d)-1,a.push(p);return h=Le(a),Array.from({length:7},(function(e,a){var r=o*Math.pow(1+h,a+t.length);return n.push(Math.ceil(r)),null})),n=n.map((function(e,t){return{total_cases:e,date:(n=t+1,w()().add(n,"days"))};var n})),f=t.map((function(e){return{total_cases:parseInt(e.total_cases.replace(/,/g,"")),date:w()(e.record_date,"YYYY-MM-DD")}})),m=f.reverse().concat(n),console.log("Mean R: ".concat(h)),g.next=21,Object(Ee.d)({type:"fetch_data_success",payload:{lastWeekData:f,nextWeekPredictions:n,graphData:m.map((function(e){return{x:e.date,y:e.total_cases}})),is_loading:!1}});case 21:g.next=27;break;case 23:return g.prev=23,g.t0=g.catch(0),g.next=27,Object(Ee.d)({type:"fetch_data_failure",payload:{is_loading:!1,message:"Something went wrong, Please refresh."}});case 27:case"end":return g.stop()}}),We,null,[[0,23]])}function Pe(e){var t,n;return je.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Ee.b)(Ce,"get","coronavirus/history_by_country_and_date.php",{country:e.payload.country,date:w()().format("YYYY-MM-DD")});case 3:if(0===(t=a.sent).data.stat_by_country.length){a.next=8;break}return n=t.data.stat_by_country[t.data.stat_by_country.length-1],a.next=8,Object(Ee.d)({type:"get_current_data_success",payload:{currentTotalCases:n.total_cases,currentRecoveredCases:n.total_recovered,currentDeceasedCases:n.total_deaths}});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(0),a.next=14,Object(Ee.d)({type:"fetch_data_failure",payload:{message:"Current record loading failed. Please refresh"}});case 14:case"end":return a.stop()}}),Re,null,[[0,10]])}var Le=function(e){return e.reduce((function(e,t){return e+t}),0)/e.length};function Ye(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.a)([Object(Ee.e)("fetch_data",Te),Object(Ee.e)("get_current_data",Pe)]);case 2:case"end":return e.stop()}}),Me)}var ze=je.a.mark(Ie);function Ie(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.a)([Object(Ee.c)(Ye)]);case 2:case"end":return e.stop()}}),ze)}var Ve=Object(we.a)(),Ae=Object(_e.c)({loginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_data":return Object(y.a)({},e,{is_loading:!0});case"fetch_data_success":return Object(y.a)({},e,{lastWeek:t.payload.lastWeekData,nextWeek:t.payload.nextWeekPredictions,graphData:t.payload.graphData,isPredictionsLoading:!1});case"fetch_data_failure":return Object(y.a)({},e,{is_loading:!1,failureMessage:t.payload.message});case"update_dimensions":return Object(y.a)({},e,{height:t.payload.height,width:t.payload.width});case"set_crosshair_values":return Object(y.a)({},e,{crosshairValues:t.payload.values});case"clear_crosshair_values":return Object(y.a)({},e,{crosshairValues:[]});case"get_current_data":return Object(y.a)({},e,{isCurrenDataLoading:!0});case"get_current_data_success":return Object(y.a)({},e,{currentTotalCases:t.payload.currentTotalCases,currentRecoveredCases:t.payload.currentRecoveredCases,currentDeceasedCases:t.payload.currentDeceasedCases,isCurrenDataLoading:!1});default:return e}}}),Fe=Object(_e.e)(Ae,Object(_e.a)(Ve));Ve.run(Ie);var Se=Fe;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P.a,{store:Se},r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,n){e.exports=n(148)},83:function(e,t,n){},84:function(e,t,n){}},[[78,1,2]]]);
//# sourceMappingURL=main.845f377b.chunk.js.map