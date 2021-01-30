import React, { Component } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'
import Counter from '../assets/React Decimal Counter.png';
import Comingsoon from '../assets/coming soon.png';
import { Row, Col, Button } from 'react-bootstrap';

const Styles = styled.div`
#blog h2{
    text-align: center;
    // margin-top: 2rem;
}
.card{
    background: none;
}
#blog1, #blog2{
    display: inline-grid;
    -webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-justify-content: flex-start;
	-ms-flex-pack: distribute;
	justify-content: flex-start;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-align-content: end;
	-ms-flex-line-pack: end;
    align-content: end;
    margin: 1rem 0;
    // padding: 4rem 3rem;
}
.content {
    height: 30%;
}
.btn {
    color: #99824c;
    background: none;
    border-color: #99824c; 
    border-radius: 10px;
    padding: 0.5rem 0.8rem;
}
.btn a{
    text-decoration: none;
    color: #99824c;
}
.btn:hover, .btn:active, .btn:focus ~ .btn a{
    background: #ec0024;
    border-radius: 10px;
    color: white;
}
.btn a:hover{
    color: white;
}
p{
    margin: 1rem 0;
}
`;

export default class Blog extends Component {
    btnClick() {
        window.open("https://medium.com/@bhvkbhoir95/react-decimal-counter-f4034a0917a1");
    }
    render() {
        return (
            <Styles>
                <div id="blog">
                    <h2>MY <span style={{color: '#ec0024'}}>BLOG</span></h2>
                <Row>
                    <Col lg={6} md={12}>
                    <Card id="blog1">
                        <Card.Img variant="top" src={Counter} />
                        <Card.Body>
                        <Card.Text>
                            <h3>React Decimal Counter</h3>
                            <h6>Got a React Interview? Better start preparing for a counter task.</h6>
                            <p>The decimal counter increases the initial count by decimal places. Also, we will be saving the count in our local storage so that we don't lose the count on page refresh or when we close the browser/window.</p>
                            <Button variant="default" onClick={this.btnClick} target="_blank">Read More</Button>
                            <p><i>Posted on: 22 July 2020</i></p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg={6} md={12}>
                    <Card id="blog2">
                        <Card.Img variant="top" src={Comingsoon} />
                        <Card.Body>
                        <Card.Text>
                            Stay tuned for the next blog.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </div>
            </Styles>
        )
    }
}
