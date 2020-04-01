import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

//  mock data
const names = [
  {
    title: "飞鸟",
    id: "chest-0",
    content: "abcd"
  },
   {
    title: "卧推",
    id: "chest-1",
    content: "abcd"
  }
]

const cards = (action,index)=>{
    const title = action.title
    const content = action.content;
    const id = action.id;

    return (
      <Col lg="6">
        <Card className="main-card mb-3" key={id}>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <div>{content}</div>
          </CardBody>
        </Card>
      </Col>
    );
}

class Barbells extends Component {
    
    renderCards(){

    }

    render(){
        return (

            <Fragment>
                <div>
                    <Row>
                            {names.map((action,index)=>{
                                return cards(action, index);
                            })}
                    </Row>
                </div>
            </Fragment>
        )
    }
}


export default Barbells;