import React, { Component } from 'react';
import { createStore} from "redux";
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App"
import "./assets/base.scss";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
const rootElement = document.getElementById("root");


// ReactDOM.render(element, container[, callback])
const renderApp = (Component) =>{
  ReactDOM.render(
      <Provider store={store}>
        <HashRouter>
          <Component></Component>
        </HashRouter>
       </Provider>
      ,rootElement
  )
}


renderApp(App);

