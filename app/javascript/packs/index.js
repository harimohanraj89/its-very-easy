import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import AppContainer from "./appContainer"
import store from "../redux/store"

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById("application"),
  )
});
