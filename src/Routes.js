import {  Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Dashboards from "./views/Dashboards";
import Actions from "./views/Actions";


const Routes = () =>{

    return (
      <Fragment>
        <Route path="/actions" component={Actions} />
        <Route path="/dashboards" component={Dashboards} />
        <Route
          exact
          path="/"
          render={() => <Redirect to="/dashboards/basic" />}
        />
      </Fragment>
    );
   
    };


export default Routes;