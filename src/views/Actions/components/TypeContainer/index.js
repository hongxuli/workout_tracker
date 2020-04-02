import React, {Fragment} from 'react';

import Tabs from 'react-responsive-tabs';

//Action examples
import cardsTemplate from "./cardsTemplate";
// import Dumbbell from './examples/Dumbbell';



//获取全部动作信息 分类型(barbells,dumbbells.etc)[] 传入模板组件







const tabsContent = [
  {
    title: "Barbells",
    content: <cardsTemplate />
  }
  // {
  //     title:'Dumbbell',
  //     content:<Dumbbell/>
  // },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class TypeContainer extends React.Component {

    render() {

        return (
            <Fragment>
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}