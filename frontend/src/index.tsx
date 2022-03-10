import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "mapbox-gl/dist/mapbox-gl.css";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
