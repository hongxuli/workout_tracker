import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import MetisMenu from "react-metismenu";
import { Dashboard, Actions } from "./NavItems";

class Nav extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <h5 className="app-sidebar__heading">Welcome Hongxu</h5>
        <MetisMenu
          content={Dashboard}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
        <h5 className="app-sidebar__heading">Actions Library</h5>
        <MetisMenu
          content={Actions}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      </Fragment>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}


export default withRouter(Nav);