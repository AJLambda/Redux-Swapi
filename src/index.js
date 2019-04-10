import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

// needed dependancies

// applyMiddleware from redux
import { applyMiddleware, createStore } from "redux";
// thunk from redux-thunk
import thunk from "redux-thunk";
// logger from redux-logger
import logger from "redux-logger";
// rootReducer from ./reducers
import charsReducer from "./reducers";
//We're going to use applyMiddleware to inject middleware into the store, specifically we'll add the redux-thunk and redux-logger middleware packages.
const store = createStore(
  charsReducer,
  /* applyMiddleware goes here */ applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
