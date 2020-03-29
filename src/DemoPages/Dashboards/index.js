import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS

import BasicDashboard from './Basic/';

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';


const Dashboadrs = ()=>(
    <Fragment>
        <AppHeader></AppHeader>
        <div className="app-main">
            <AppSidebar></AppSidebar>
            <div className="app-main_outer">
                <div className="app-main_inner">
                   <BasicDashboard></BasicDashboard>
                </div>
                <AppFooter></AppFooter>
            </div>
        </div>
    </Fragment>
)


export default Dashboadrs