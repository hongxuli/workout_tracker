import React, { Fragment } from "react";
import AppMain from "../../Layout/AppMain";


class Main extends React.Component {
    constructor(props){
         super(props);
    }

    render(){
        return (
          <Fragment>
            <div className="app-container app-theme-white fixed-header fixed-sidebar fixed-footer closed-sidebar closed-sidebar-mobile">
              <AppMain></AppMain>
            </div>
          </Fragment>
        );
    }
}


export default Main;