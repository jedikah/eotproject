exports.id=0,exports.modules={5:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),l=a.n(s),i=a(3),o=a(1);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true";class d extends r.a.Component{constructor(e){super(e),c(this,"componentDidMount",()=>{this.setState({loading:!1});new(a(4).verbose().Database)("eotdb.sqlite")}),c(this,"_handleClick",()=>{var e=i.ipcRenderer.sendSync("get-result",{name:"react"});alert(e)}),this.showAlert=this.showAlert.bind(this),this.state={text:""}}showAlert(){alert("Hello world!")}render(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.View,{style:{padding:10}},r.a.createElement(o.TextInput,{style:{height:40,width:"10vh"},placeholder:"Type here to translate!",onChangeText:e=>this.setState({text:e}),value:this.state.text}),r.a.createElement(o.Text,{style:{padding:10,fontSize:42}},this.state.text.split(" ").map(e=>e&&"🍕").join(" "))),r.a.createElement("header",{className:"App-header"},r.a.createElement("button",{onClick:this.showAlert},"Click me!")))}}var h=d;process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true",l.a.render(r.a.createElement("div",null,r.a.createElement(h,null)),document.getElementById("app")),e.hot.accept()}};
//# sourceMappingURL=0.3ae5c331cbb15becde3a.hot-update.js.map