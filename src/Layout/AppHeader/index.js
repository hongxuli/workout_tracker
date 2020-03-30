import React, { Fragment } from "react";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import UserBox from "./components/UserBox";

class Header extends React.Component {

    render(){
        return (
          <Fragment>
            <div className="app-header bg-strong-bliss header-text-light header-shadow ">
             <div className="log">logo</div>
             <div className="app-header_content">
               <div className="app-header-left">
                 search box
               </div>
               <div className="app-header-right">
                 <UserBox/>
               </div>
             </div>
            </div>
          </Fragment>
        );
    }
}


export default Header;
