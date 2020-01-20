import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import Welcome from "./redux/containers/WelcomeCtn";

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

ReactDOM.render(
  <Provider store={store}>
    <Welcome />
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
