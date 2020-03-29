import React, { Fragment } from "react";
import AppMain from "../../Layout/AppMain";


class Main extends React.Component {
    constructor(props){
         super(props);
    }

    render(){
        return (
            <Fragment>
                <AppMain></AppMain>
            </Fragment>
        )
    }
}


export default Main;