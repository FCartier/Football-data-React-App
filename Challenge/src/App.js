import React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import Standings from "./components/Standings";
import store from "./store";
import "./App.scss";

export const App = () => (
  <Provider store={store}>
    <Standings />
  </Provider>
);

export default hot(module)(App);
