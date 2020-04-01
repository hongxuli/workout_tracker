import React, { Fragment } from "react";
import cx from "classnames";

import { connect } from "react-redux";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import HeaderLogo from "../AppLogo";

import UserBox from "./components/UserBox";
// import SearchBox from "./components/SearchBox";


class Header extends React.Component {
  render() {
    let {
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow
    } = this.props;
    return (
      <Fragment>
        <div
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow
          })}
        >
         <HeaderLogo/>
          <div className="app-header__content">
            {/* <div className="app-header-left">
                <SearchBox/>
            </div> */}
            <div className="app-header-right">
              <UserBox />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);