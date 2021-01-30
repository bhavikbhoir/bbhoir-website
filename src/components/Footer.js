import React, { Component } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaUser, FaMedium, FaPhone, FaAt, FaMapMarkerAlt } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import { GoGlobe } from 'react-icons/go';

const Styles = styled.div`
#footer{
    text-align: center;
    border-top: 2px solid #99824c;
    padding: 1rem;
}
.row{
    text-align: center;
    padding: 0.5rem;
}
#phone svg, #email svg{
    margin: 0.2em 0.3rem;
}
#phone a, #email a{
    color: black;
    text-decoration: none;
}
.signoff{
    color: #113476;
}
#phone{
    display: flex;
    justify-content: flex-end;
}
#email{
    display: flex;
    justify-content: flex-start;
}
#phone, #email{

}
li{
    list-style: none;
}
.icons{
    display: flex;
    text-align: center;
    justify-content: center;
}
.icons svg{
    font-size: 1.2rem;
    color: #99824c;
    margin-right: 0.8rem;
}
.icons svg:hover{
    color: #113476;
}  
.love {
    display: inline-block;
    position: relative;
    top: .1em;
    font-size: 2em;
    color: red;
    -webkit-transform: scale(.9);
    -moz-transform: scale(.9);
    transform: scale(.9);
    -webkit-animation: love .5s infinite linear alternate-reverse;
    -moz-animation: love .5s infinite linear alternate-reverse;
    animation: love .5s infinite linear alternate-reverse;
  }
  @-webkit-keyframes love {
    to {-webkit-transform: scale(1.2);}
  }
  @-moz-keyframes love {
    to {-moz-transform: scale(1.2);}
  }
  @keyframes love {
    to {transform: scale(1.2);}
  }
  @media screen and (max-width: 992px){
    #phone{
        display: flex;
        justify-content: center;
    }
    #email{
        display: flex;
        justify-content: center;s
    }
  }
`;

export default class Footer extends Component {
    render() {
        return (
            <Styles>
                <div id="footer">
                    <h2><span style={{color: '#ec0024'}}>CONTACT</span></h2>
                <Row>
                    <Col lg={4} md={12} id="phone"><FaPhone /> <a href="tel:1-571-635-7991">+1-(571)-635-7991</a></Col>
                    <Col lg={4} md={12} id="location"><FaMapMarkerAlt /> Morrisville, NC </Col>
                    <Col lg={4} md={12} id="email"><FaAt /> <a href = "mailto: bhvkbhoir95@gmail.com">bhvkbhoir95@gmail.com</a></Col>
                </Row>
                <Row>
                    <Col>
                        <div className="icons">
                            <li><a target="_blank" href="https://www.linkedin.com/in/bhavikbhoir/"><FaLinkedin /></a></li>
                            <li><a target="_blank" href="https://github.com/bhavikbhoir"><FaGithub /></a></li>
                            <li><a target="_blank" href="https://medium.com/@bhvkbhoir95"><FaMedium /></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/bbhoir"><FaFacebook /></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/bhavik_08/"><FaInstagram /></a></li>
                            <li><a target="_blank" href="https://bbhoir-portfolio.web.app/"><GoGlobe /></a></li>                                 
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="signoff">Created with <span class="love">&hearts;</span> by Bhavik Bhoir</Col>
                </Row>
            </div>
            </Styles>
        )
    }
}
