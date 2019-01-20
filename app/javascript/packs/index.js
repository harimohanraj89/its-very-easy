import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import AppContainer from "../containers/AppContainer"
import store from "../stores"

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById("application"),
  )
});
