import {  Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Dashboadrs from "../../DemoPages/Dashboards/index";

const AppMian = () =>{

  

    return (
      <Fragment>
        <Dashboadrs></Dashboadrs>
      </Fragment>
    );
   
    };


export default AppMian