(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{34:function(e,t,n){e.exports=n(63)},39:function(e,t,n){},40:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(6),i=n.n(o),s=(n(39),n(40),n(23)),c=n(24),l=n(32),m=n(25),u=n(33),h=function(){return fetch("https://randomuser.me/api/?results=50&nat=us",{method:"GET"}).then((function(e){return e.json()}))},d=n(31),p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={columns:[{label:"Image",field:"image",sort:"asc",width:150},{label:"Name",field:"name",sort:"asc",width:270},{label:"Phone",field:"phone",sort:"asc",width:200},{label:"Email",field:"email",sort:"asc",width:100},{label:"DOB",field:"DOB",sort:"asc",width:150}],rows:[{name:"Krin",email:"krin.steward@example.com",image:"https://randomuser.me/api/portraits/women/34.jpg",phone:"(877)-580-1684",DOB:"1964-07-02T01:13:47.389Z"},{name:"Kent",email:"kent.ferguson@example.com",image:"https://randomuser.me/api/portraits/men/89.jpg",phone:"(805)-018-4976",DOB:"1992-10-25T11:12:19.284Z"}]},n.componentDidMount=function(){h().then((function(e){var t=[];e.results.forEach((function(e){return t.push({name:"".concat(e.name.first," ").concat(e.name.last),email:e.email,image:[r.a.createElement("img",{src:e.picture.thumbnail,className:"img-fluid",class:"rounded-circle",alt:""})],phone:e.phone,DOB:e.dob.date.substring(0,10)})})),n.setState({rows:t})})).catch((function(e){return console.error(e)}))},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.c,{striped:!0,bordered:!0,hover:!0,data:{columns:this.state.columns,rows:this.state.rows}})}}]),t}(r.a.Component);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Header"},r.a.createElement("h1",null,"Employee Directory "),r.a.createElement("h8",null,"Click on carrots to filter by heading or use the search box to narrow your results")),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(62);i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.b11516be.chunk.js.map