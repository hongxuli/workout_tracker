import React, {Fragment} from 'react';

import Tabs from 'react-responsive-tabs';

//Action examples
import Barbells from './examples/Barbells';
// import Dumbbell from './examples/Dumbbell';


const tabsContent = [
    {
        title:'Barbells',
        content:<Barbells/>
    },
    // {
    //     title:'Dumbbell',
    //     content:<Dumbbell/>
    // },
    ]

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class CardsContainer extends React.Component {

    render() {

        return (
            <Fragment>
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}