exports.id=0,exports.modules={5:function(e,t,l){"use strict";l.r(t);var r=l(0),a=l.n(r),n=l(2),s=l.n(n),o=l(3),c=l(1);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true";class u extends a.a.Component{constructor(e){super(e),i(this,"componentDidMount",()=>{this.setState({loading:!1});new(l(4).verbose().Database)("eotdb.sqlite")}),i(this,"_handleClick",()=>{var e=o.ipcRenderer.sendSync("get-result",{name:"react"});alert(e)}),this.showAlert=this.showAlert.bind(this),this.state={text:""}}showAlert(){alert("Hello world!")}render(){return a.a.createElement("div",{className:"App",style:{display:"flex",flexFlow:"row",width:"100%"}},a.a.createElement(c.View,{style:{flex:1,backgroundColor:"blue"}},a.a.createElement("p",null,"dsf")),a.a.createElement(c.View,{style:{flex:4,backgroundColor:"skyblue"}},a.a.createElement(c.View,{style:{flex:1,flexDirection:"col"}},a.a.createElement(c.View,{style:{flex:1}}),a.a.createElement(c.View,{style:{flex:4}}),a.a.createElement(c.View,{style:{flex:1}}))),a.a.createElement(c.View,{style:{flex:1,backgroundColor:"steelblue"}},a.a.createElement("p",null,"dsf")))}}var d=u;process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true",s.a.render(a.a.createElement("div",null,a.a.createElement(d,null)),document.getElementById("app")),e.hot.accept()}};
//# sourceMappingURL=0.b9da621182bdcb8c3e9e.hot-update.js.map