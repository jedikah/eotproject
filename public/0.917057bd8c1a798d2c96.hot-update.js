exports.id=0,exports.modules={1:function(e,t){e.exports=require("react-native-electron")},5:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),a=r(2),l=r.n(a),o=r(3);r(1);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true";class c extends s.a.Component{constructor(e){super(e),i(this,"componentDidMount",()=>{this.setState({loading:!1});new(r(4).verbose().Database)("eotdb.sqlite")}),i(this,"_handleClick",()=>{var e=o.ipcRenderer.sendSync("get-result",{name:"react"});alert(e)}),this.showAlert=this.showAlert.bind(this),this.state={text:""}}showAlert(){alert("Hello world!")}render(){return s.a.createElement("div",{className:"App",style:"display: flex, flex-flow: row, height: 100% "})}}var u=c;process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true",l.a.render(s.a.createElement("div",null,s.a.createElement(u,null)),document.getElementById("app")),e.hot.accept()}};
//# sourceMappingURL=0.917057bd8c1a798d2c96.hot-update.js.map