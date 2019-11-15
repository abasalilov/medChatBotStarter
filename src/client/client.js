// Startup point for the client side application
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import axios from "axios";
import Routes from "./Routes";
import reducers from "./reducers";
import Favicon from "react-favicon";

const axiosInstance = axios.create({
  baseURL: "178.128.190.63:5000"
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);
// client-side rehydrate

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#FFFFFF"
        }}
      >
        <Favicon url="https://res.cloudinary.com/dbfv0bfmw/image/upload/v1571169450/favicon-96x96.png" />
        {renderRoutes(Routes)}
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
