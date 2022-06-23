import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
  counter: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "plus":
      return { ...state, counter: state.counter + 1 };
    case "minus":
      if (state.counter > 0) return { ...state, counter: state.counter - 1 };

    case "reset":
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
