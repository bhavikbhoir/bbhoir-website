import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import DP from '../assets/dp.png';
import PP from '../assets/pika.gif';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaMedium, FaSuitcase } from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';
var ReactRotatingText = require('react-rotating-text');

const Styles = styled.div`
// .row{
//     border-bottom: 1px solid #99824c;
// }
.summary{
    color: #113476;
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
	-webkit-align-content: center;
	-ms-flex-line-pack: center;
    align-content: center;
}
li{
    list-style: none;
}
.icons{
    display: flex;
    // text-align: center;
    // justify-content: center;
    margin: 0.2rem;
}
.icons svg{
    font-size: 1.4rem;
    font-weight: bolder;
    // background: rgb(0 0 0 / 8%);
    color: #99824c;
    margin-right: 0.8rem;
    // border-radius: 25px;
    // box-shadow: 0px 3px 10px rgba(0,0,0,.25);
}
.icons svg:hover{
    // color: #ec0024;
    opacity: 0.7;
}
#linkedin svg{
    color: #007bb5;
}
#github svg{
    color: purple;
    border-radius: 25px;
}
#medium svg{
    color: black;
}
#facebook svg{
    color: #3B5998;
    border-radius: 25px;
}
#instagram svg{
    color: #DD2A7B;
    border-radius: 5px;
}
#website svg{
    // background: #0e90b8;
    color: #077e4e;
    border-radius: 25px;
}
.social-icon{
    width: 1.5rem!important;
    height: 1.5rem!important;
    margin-right: 0.8rem;
}
.react-rotating-text-cursor {
    animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
  }
  
  @keyframes blinking-cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

// var sectionStyle = {
//     backgroundImage: `url(${PP})`
//  }

export default class Introduction extends Component {
    render() {
        return (
            <Styles>
                <Row id="#introduction">
                    <Col className="summary" lg={6} xs={12}>
                        <div>
                        <h3>Hello, This is <span style={{color: "#ec0024"}}>Bhavik Bhoir</span>!</h3>
                        <h1 style={{color: "black"}}><ReactRotatingText items={['Web Developer', 'Graphic Designer', 'Engineer', 'Sketch Artist', 'Blogger', 'Gamer']} /></h1>
                        </div>
                        <div className="icons">
                            <li id="linkedin"><a href="https://www.linkedin.com/in/bhavikbhoir/" target="_blank"><FaLinkedin /></a></li>
                            <li id="github"><a href="https://github.com/bhavikbhoir" target="_blank"><FaGithub /></a></li>
                            <li id="medium"><a href="https://medium.com/@bhvkbhoir95" target="_blank"><FaMedium /></a></li>
                            <li id="facebook"><a href="https://www.facebook.com/bbhoir" target="_blank"><FaFacebook /></a></li>
                            <li id="instagram"><a href="https://www.instagram.com/bhavik_08/" target="_blank"><FaInstagram /></a></li>
                            <li id="website"><a href="https://bbhoir-portfolio.web.app/" target="_blank"><GoGlobe /></a></li>                                 
                        </div>
                    </Col>
                    <Col className="dp" lg={6} xs={0} style={{textAlign: "right"}}>
                        <img src={PP} width="50%" height="100%" />
                    </Col>
                </Row>
            </Styles>
        )
    }
}
