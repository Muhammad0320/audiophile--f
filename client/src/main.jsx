import React from "react";
import App from "./App.jsx";
import store from "../store.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/ErrorFallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/home")}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
