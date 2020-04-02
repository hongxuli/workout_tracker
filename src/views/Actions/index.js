import React, { Fragment } from "react";
// import { Route } from "react-router-dom";

// DASHBOARDS

import TypeContainer from "./components/TypeContainer";

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';


const Actions = () => (
  <Fragment>
    <AppHeader></AppHeader>
    <div className="app-main">
      <AppSidebar></AppSidebar>
      <div className="app-main__outer">
        <div className="app-main__inner">
          <TypeContainer></TypeContainer>
        </div>
        <AppFooter></AppFooter>
      </div>
    </div>
  </Fragment>
);


export default Actions;