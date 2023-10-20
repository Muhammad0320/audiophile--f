import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "../store.js";
import ScrollToTop from "./utils/ScrollToTop.js";
import { Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
