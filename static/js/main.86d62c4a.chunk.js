(this["webpackJsonpdashboard-react"]=this["webpackJsonpdashboard-react"]||[]).push([[0],{152:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(31),c=t.n(i),o=(t(85),t(86),t(154)),u=t(15),s=t(26),l=Object(u.a)();l.listen((function(e){s.a.set({page:e.pathname}),s.a.pageview(e.pathname)}));var d=l,p=t(77);function h(e){var n=e.component,t=(e.isPrivate,Object(p.a)(e,["component","isPrivate"]));return r.a.createElement(o.b,Object.assign({},t,{component:n}))}h.defaultProps={isPrivate:!1};var f=t(66),g=t(67),v=t(33),b=t(76),m=t(74),x=t(6),y=t(8);var j={lastWeek:[],nextWeek:[],lastWeekGraphData:[],nextWeekGraphData:[],height:800,width:400,isPredictionsLoading:!0,isCurrenDataLoading:!0,crosshairValues:[],failureMessage:"",currentTotalCases:null,currentRecoveredCases:null,currentDeceasedCases:null,didApiCallFail:!1};function w(e){return e.loginReducer.lastWeek}function O(e){return e.loginReducer.nextWeek}function _(e){return e.loginReducer.isPredictionsLoadingoading}function k(e){return e.loginReducer.lastWeekGraphData}function W(e){return e.loginReducer.nextWeekGraphData}function D(e){return e.loginReducer.width}function C(e){return e.loginReducer.height}function R(e){return e.loginReducer.crosshairValues}function E(e){return e.loginReducer.currentTotalCases}function M(e){return e.loginReducer.currentRecoveredCases}function G(e){return e.loginReducer.currentDeceasedCases}function P(e){return e.loginReducer.didApiCallFail}function L(e){return e.loginReducer.failureMessage}var z=t(34),A=t(7);function T(){var e=Object(x.a)(["\n  font-size: 9px;\n  margin-top: 32px;\n  text-align: center;\n"]);return T=function(){return e},e}function F(){var e=Object(x.a)(["\n  color: white;\n  margin-top: 16px;\n"]);return F=function(){return e},e}function V(){var e=Object(x.a)(["\n  color: white;\n  text-align: center;\n  font-size: 0.5rem;\n"]);return V=function(){return e},e}function B(){var e=Object(x.a)(["\n  color: yellow;\n  text-align: center;\n  font-size: 0.8rem;\n  margin-bottom: 16px;\n"]);return B=function(){return e},e}function I(){var e=Object(x.a)(["\n  flex-direction: column;\n"]);return I=function(){return e},e}function Y(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin-left: 2px;\n  margin-right: 2px;\n"]);return Y=function(){return e},e}function U(){var e=Object(x.a)(["\n  /* This renders the buttons above... Edit me! */\n  display: inline-block;\n  border-radius: 8px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 11rem;\n  color: black;\n  text-align: center;\n  border: 2px solid black;\n  background: #c4c431;\n  :hover {\n    cursor: pointer;\n  }\n"]);return U=function(){return e},e}function J(){var e=Object(x.a)(["\n  width: 100%;\n"]);return J=function(){return e},e}function S(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return S=function(){return e},e}function q(){var e=Object(x.a)(["\n  margin: auto;\n"]);return q=function(){return e},e}function H(){var e=Object(x.a)(["\n  color: white;\n  text-align: center;\n"]);return H=function(){return e},e}function $(){var e=Object(x.a)(["\n  margin-top: 16px;\n  color: white;\n  text-align: center;\n  font-size: 11px;\n"]);return $=function(){return e},e}function K(){var e=Object(x.a)(["\n  color: white;\n  text-align: center;\n  margin-left: 4px;\n  margin-right: 4px;\n"]);return K=function(){return e},e}function N(){var e=Object(x.a)(["\n  flex-direction: column;\n"]);return N=function(){return e},e}function Q(){var e=Object(x.a)(["\n  margin-right: 16px;\n  margin-left: 16px;\n  width: '100%';\n  border-radius: 8px;\n  border: 0.5px solid yellow;\n"]);return Q=function(){return e},e}function X(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin-right: 16px;\n  margin-left: 16px;\n  width: '100%';\n  border-radius: 8px;\n  border: 0.5px solid yellow;\n"]);return X=function(){return e},e}function Z(){var e=Object(x.a)(["\n  font-size: 1.2rem;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n"]);return Z=function(){return e},e}function ee(){var e=Object(x.a)(["\n  margin-left: 16px;\n  margin-right: 16px;\n  width: '100%';\n"]);return ee=function(){return e},e}A.a.div(ee()),A.a.p(Z()),A.a.div(X()),A.a.div(Q()),A.a.div(N()),A.a.h5(K()),A.a.p($());var ne=A.a.p(H()),te=A.a.div(q()),ae=A.a.div(S()),re=(A.a.div(J()),A.a.a(U()),A.a.div(Y()),A.a.div(I()),A.a.p(B()),A.a.p(V()),A.a.div(F()),A.a.div(T()),t(92),t(151),t(132),t(19)),ie=t.n(re);function ce(){var e=Object(x.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background: ",";\n  overflow-y: scroll;\n"]);return ce=function(){return e},e}var oe=A.a.div(ce(),"#212121"),ue=function(e){Object(b.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(f.a)(this,t),(a=n.call(this,e)).updateWindowDimensions=a.updateWindowDimensions.bind(Object(v.a)(a)),a}return Object(g.a)(t,[{key:"componentDidMount",value:function(){this.fetchData(),window.addEventListener("resize",this.updateWindowDimensions.bind(this)),this.updateWindowDimensions()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions.bind(this))}},{key:"updateWindowDimensions",value:function(){var e,n;this.props.dispatch((e=window.innerWidth,n=window.innerHeight,{type:"update_dimensions",payload:{width:e,height:n}}))}},{key:"fetchData",value:function(){this.props.dispatch({type:"get_current_data",payload:{country:"india"}}),this.props.dispatch(function(e){return{type:"fetch_data",payload:{country:e}}}("india"))}},{key:"render",value:function(){this.props.lastWeek[this.props.lastWeek.length-1];return r.a.createElement(oe,null,r.a.createElement(te,null,r.a.createElement(ae,null,r.a.createElement(ne,null,"Busy developers don't maintain hobby projects."))))}}]),t}(r.a.Component),se=Object(z.b)((function(e){return{lastWeek:w(e),nextWeek:O(e),is_loading:_(e),lastWeekGraphData:k(e),nextWeekGraphData:W(e),height:C(e),width:D(e),crosshairValues:R(e),currentTotalCases:E(e),currentRecoveredCases:M(e),currentDeceasedCases:G(e),didApiCallFail:P(e),failureMessage:L(e)}}))(ue);function le(){return r.a.createElement(o.d,null,r.a.createElement(h,{path:"/covid",exact:!0,component:se}))}var de=function(){return s.a.initialize("UA-162083533-1"),r.a.createElement(o.c,{history:d},r.a.createElement(le,null))},pe=t(75),he=t(18),fe=t(14),ge=t.n(fe),ve=t(10),be=t(73),me=t.n(be),xe={"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"5aa871fb55msha1efb1e49628ad0p15ec67jsn429c11038010"},ye=function(e,n,t){return me.a.request({method:e,baseURL:"https://coronavirus-monitor.p.rapidapi.com/",url:n,timeout:6e4,headers:xe,params:t})};var je=ge.a.mark(_e),we=ge.a.mark(ke),Oe=ge.a.mark(De);function _e(e){var n,t,a,r,i,c,o,u,s,l,d,p,h,f,g,v;return ge.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,n=[],t=[],a=[],r=null,b.next=7,Object(ve.b)(ye,"get","coronavirus/cases_by_particular_country.php",{country:e.payload.country});case 7:for(i=b.sent,i.data.stat_by_country.forEach((function(e,t,a){if(t+1<a.length){var i=a[t+1],c=ie()(e.record_date);ie()(i.record_date).isSameOrBefore(c,"day")||(r=e)}else r=e;null!=r&&(n.push(r),r=null)})),n=n.reverse(),c=parseInt(n[n.length-1].total_cases.replace(/,/g,"")),o=n.length-2;o>-1;o--)u=n[o],s=parseInt(u.total_cases.replace(/,/g,"")),l=Math.log(s)-Math.log(c),d=l/(n.length-1-o),p=Math.exp(d)-1,a.push(p);return h=We(a),Array.from({length:8},(function(e,a){var r,i=c*Math.pow(1+h,a+n.length);return t.push({y:Math.ceil(i),x:(r=a,ie()().add(r,"days"))}),null})),f=n.map((function(e){return{y:parseInt(e.total_cases.replace(/,/g,"")),x:ie()(e.record_date,"YYYY-MM-DD")}})),g=f.reverse(),(v=t.slice(0)).unshift(f[f.length-1]),console.log(a),console.log("Mean R: ".concat(h)),b.next=23,Object(ve.d)({type:"fetch_data_success",payload:{lastWeekData:f,nextWeekPredictions:t,lastWeekGraphData:g,nextWeekGraphData:v,is_loading:!1}});case 23:b.next=29;break;case 25:return b.prev=25,b.t0=b.catch(0),b.next=29,Object(ve.d)({type:"fetch_data_failure",payload:{is_loading:!1,message:"Something went wrong, please refresh."}});case 29:case"end":return b.stop()}}),je,null,[[0,25]])}function ke(e){var n,t;return ge.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(ve.b)(ye,"get","coronavirus/latest_stat_by_country.php",{country:e.payload.country});case 3:return n=a.sent,t=n.data.latest_stat_by_country[0],a.next=7,Object(ve.d)({type:"get_current_data_success",payload:{currentTotalCases:t.total_cases,currentRecoveredCases:t.total_recovered,currentDeceasedCases:t.total_deaths}});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(ve.d)({type:"fetch_data_failure",payload:{message:"Current record loading failed. Please refresh"}});case 13:case"end":return a.stop()}}),we,null,[[0,9]])}var We=function(e){return e.reduce((function(e,n){return e+n}),0)/e.length};function De(){return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.a)([Object(ve.e)("fetch_data",_e),Object(ve.e)("get_current_data",ke)]);case 2:case"end":return e.stop()}}),Oe)}var Ce=ge.a.mark(Re);function Re(){return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.a)([Object(ve.c)(De)]);case 2:case"end":return e.stop()}}),Ce)}var Ee=Object(pe.a)(),Me=Object(he.c)({loginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"fetch_data":return Object(y.a)(Object(y.a)({},e),{},{is_loading:!0,didApiCallFail:!1});case"fetch_data_success":return Object(y.a)(Object(y.a)({},e),{},{lastWeek:n.payload.lastWeekData,nextWeek:n.payload.nextWeekPredictions,lastWeekGraphData:n.payload.lastWeekGraphData,nextWeekGraphData:n.payload.nextWeekGraphData,isPredictionsLoading:!1});case"fetch_data_failure":return Object(y.a)(Object(y.a)({},e),{},{is_loading:!1,failureMessage:n.payload.message,didApiCallFail:!0});case"update_dimensions":return Object(y.a)(Object(y.a)({},e),{},{height:n.payload.height,width:n.payload.width});case"set_crosshair_values":return Object(y.a)(Object(y.a)({},e),{},{crosshairValues:n.payload.values});case"clear_crosshair_values":return Object(y.a)(Object(y.a)({},e),{},{crosshairValues:[]});case"get_current_data":return Object(y.a)(Object(y.a)({},e),{},{isCurrenDataLoading:!0,didApiCallFail:!1});case"get_current_data_success":return Object(y.a)(Object(y.a)({},e),{},{currentTotalCases:n.payload.currentTotalCases,currentRecoveredCases:n.payload.currentRecoveredCases,currentDeceasedCases:n.payload.currentDeceasedCases,isCurrenDataLoading:!1});default:return e}}}),Ge=Object(he.e)(Me,Object(he.a)(Ee));Ee.run(Re);var Pe=Ge;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z.a,{store:Pe},r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,n,t){e.exports=t(152)},85:function(e,n,t){},86:function(e,n,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.86d62c4a.chunk.js.map