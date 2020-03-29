import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./DemoPages/Main";
import "./assets/base.scss";

// import configureStore from "./config/configureStore";

// const store = configureStore();
const rootElement = document.getElementById("root");


// ReactDOM.render(element, container[, callback])
const renderApp = (Component) =>{
  ReactDOM.render(
      // <Provider store={store}>
        <HashRouter>
          <Component></Component>
        </HashRouter>
      // </Provider>
      ,rootElement
  )
}


renderApp(Main);

