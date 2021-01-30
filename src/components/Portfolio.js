import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import opentabs from '../assets/opentabs.png';
import aboutgc from '../assets/about-gc.jpg';
import featuresgc from '../assets/features-gc.jpg';
import researchgc from '../assets/research-gc.jpg';
import homegc from '../assets/home-gc.jpg';
import explorew from '../assets/explore-1.jpg';
import homew from '../assets/home-1.jpg';
import notificationsw from '../assets/notifications-1.jpg';
import postw from '../assets/post-1.jpg';
import profilew from '../assets/profile-1.jpg';
import settingsw from '../assets/settings-1.jpg';
import covid from '../assets/covid.png';
import tgw from '../assets/tgw.png';
import kakashi from '../assets/artwork/kakashi.jpg';
import bvs from '../assets/artwork/bvs.jpg';
import svb from '../assets/artwork/svb.jpg';
import deathstroke from '../assets/artwork/deathstroke.jpg';
import joker from '../assets/artwork/joker.jpg';
import flashpoint from '../assets/artwork/flashpoint.jpg';
import atom from '../assets/artwork/atom.jpg';
import bvillains from '../assets/artwork/bvillains.jpg';
import lantern from '../assets/artwork/lantern.jpg';
import wolverine from '../assets/artwork/Wolverine.jpg';
import cold from '../assets/artwork/cold.jpg';
import dent from '../assets/artwork/Dent.jpg';
import ftlogo from '../assets/graphics/logo.mp4';
import avatar from '../assets/graphics/myAvatar.png';
import redlogo from '../assets/graphics/redlogo.png';
import { GoGlobe } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa';

const Styles = styled.div`
#portfolio{
    text-align: center;
}
.col{
    display: flex;
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
a{
    color: #ec0024;
}
img{
    margin: 0.5rem 0;
}
.nav-tabs{
    display: flex;
    border-bottom: 1px solid transparent;
    justify-content: center;
}
.nav-link{
    color: #99824c;
    background: transparent;
    margin: 0 1rem;
}
.nav-link.active{
    color: #99824c;
    background: transparent;
    border: 1px solid #99824c;
}
.tab-content{
    margin-top: -1px;
    padding: 1rem;
    border: 1px solid lightgray;
    border-radius: 0.25rem;
}
.nav-link:hover{
    color: #ec0024;
    background: transparent;
    border: 1px solid #ec0024;
}
h6{
    color: #113476;
}
.action-buttons .col{
    padding: 0;
}
.action-buttons{
    width: 100%;
    margin: 0.25rem 0;
}
// .action-buttons a:last-child{
//     margin-left: 0.5rem;
// }
.first-row .img-container:nth-child(1), .img-container:nth-child(2), .img-container:nth-child(3){
    height: 300px;
    transform: translate(0, 25%)
}
.second-row .img-container:nth-child(1), .img-container:nth-child(2), .img-container:nth-child(3){
    height: 600px;
    transform: translate(0, 25%)
}
a svg{
    margin-right: 0.25rem;
}
`;

export default class Portfolio extends Component {
    render() {
        return (
            <Styles>
                <div id="portfolio">
                    <h2>MY <span style={{color: '#ec0024'}}>PORTFOLIO</span></h2>
                    <Tabs defaultActiveKey="web">
                    <Tab eventKey="all" title="All">                        
                        <Row>
                            <Col md={4} xs={12}>
                                <img src={opentabs} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={homegc} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={aboutgc} width="100%"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} xs={12}>
                            <video playsInline muted width="100%" autoPlay loop src={ftlogo}/>
                            </Col>
                            <Col md={4} xs={12}>
                            <img src={avatar} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                            <img src={redlogo} width="100%"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} xs={12}>
                                <img src={featuresgc} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={researchgc} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={homew} width="100%"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} xs={12}>
                                <img src={kakashi} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={atom} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={bvs} width="100%"/>
                                {/* <p>Batman vs Superman</p> */}
                            </Col>                            
                        </Row>
                        <Row>
                            <Col md={4} xs={12}>
                            <img src={explorew} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                            <img src={postw} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                            <img src={notificationsw} width="100%"/>
                            </Col>
                        </Row>
                        <Row>                            
                            <Col md={4} xs={12}>
                                <img src={deathstroke} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={flashpoint} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={svb} width="100%"/>
                            </Col>                            
                        </Row>
                        <Row>
                            <Col md={4} xs={12}>
                            <img src={profilew} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                            <img src={settingsw} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                            {/* <img src={homew} width="100%"/> */}
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="web" title="Websites">
                        <Row className="first-row">
                            <Col md={4} xs={12}>
                                <div className="img-container"><img src={opentabs} width="100%"/></div>
                                <Row className="action-buttons">
                                    <Col><a href="https://app.opentabs.org/tabbing" target="_blank"><GoGlobe />Live Version</a></Col>
                                    <Col><a href="https://github.com/greco-paro-association/open-tabs" target="_blank"><FaGithub/>GitHub</a></Col>
                                </Row>
                            </Col>
                            <Col md={4} xs={12}>
                                <div className="img-container"><img src={tgw} width="100%"/></div>
                                <Row className="action-buttons">
                                    <Col><a href="https://the-gooners-world.web.app/" target="_blank"><GoGlobe />Live Version</a></Col>
                                    <Col><a href="https://github.com/bhavikbhoir/the-gooners-world" target="_blank"><FaGithub/>GitHub</a></Col>
                                </Row>
                            </Col>
                            <Col md={4} xs={12}>
                            <div className="img-container"><img src={covid} width="100%"/></div>
                                <Row className="action-buttons">
                                    <Col><a href="http://www.covid19-tracker.s3-website.ap-south-1.amazonaws.com/" target="_blank"><GoGlobe />Live Version</a></Col>
                                    <Col><a href="https://github.com/bhavikbhoir/Covid-Tracker" target="_blank"><FaGithub/>GitHub</a></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="second-row">
                            <Col md={4} xs={12}>
                            <div className="img-container"><video playsInline muted width="100%" autoPlay loop src={ftlogo}/></div>
                                <Row className="action-buttons">
                                    <Col><a href="https://footytabs.herokuapp.com/" target="_blank"><GoGlobe />Live Version</a></Col>
                                    <Col><a href="https://github.com/bhavikbhoir/FootyTabs" target="_blank"><FaGithub/>GitHub</a></Col>
                                </Row>
                            </Col>
                            <Col md={4} xs={12}>
                            <div className="img-container"><img src={homegc} width="100%"/></div>
                                <Row className="action-buttons">
                                    <Col><a href="https://gamechip.herokuapp.com/" target="_blank"><GoGlobe />Live Version</a></Col>
                                    <Col><a href="https://github.com/bhavikbhoir/GameChip" target="_blank"><FaGithub/>GitHub</a></Col>
                                </Row>
                            </Col>
                            <Col md={4} xs={12}>
                            <div className="img-container"><img src={homew} width="100%"/></div>
                                <Row className="action-buttons">
                                    <Col><a href="https://whatyallthink.herokuapp.com/" target="_blank"><GoGlobe />Live Version</a></Col>
                                    <Col><a href="https://github.com/bhavikbhoir/Whatyallthink" target="_blank"><FaGithub/>GitHub</a></Col>
                                </Row>
                            </Col>
                        </Row>
                            <Row>
                                <Col style={{padding: "1rem 0", justifyContent: "center"}}>
                                <a href="https://bbhoir-portfolio.web.app/" target="_blank" style={{color: "#114476"}}>👉 Full Portfolio</a>
                                </Col>
                            </Row>
                        {/* <Row> 
                            <Col>
                                <img src={featuresgc} width="100%"/>
                            </Col>
                            <Col>
                                <img src={researchgc} width="100%"/>
                            </Col>
                            <Col>
                                <img src={aboutgc} width="100%"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <img src={explorew} width="100%"/>
                            </Col>
                            <Col>
                            <img src={postw} width="100%"/>
                            </Col>
                            <Col>
                            <img src={notificationsw} width="100%"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <img src={profilew} width="100%"/>
                            </Col>
                            <Col>
                            <img src={settingsw} width="100%"/>
                            </Col>
                            <Col>
                            <img src={homew} width="100%"/>
                            </Col>
                        </Row> */}
                    </Tab>
                    <Tab eventKey="graphic" title="Graphics">
                        <Row>
                            <Col md={4} xs={12}>
                            <video playsInline muted width="100%" autoPlay loop src={ftlogo}/>
                            </Col>
                            <Col md={4} xs={12}>
                            <img src={avatar} width="100%"/>
                            </Col>
                            <Col md={4} xs={12}>
                            <img src={redlogo} width="100%"/>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="artwork" title="Artwork">
                        <Row>
                            <Col md={4} xs={12}>
                                <img src={kakashi} width="100%"/>
                                <p>Kakashi Hatake - 2020</p>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={atom} width="100%"/>
                                <p>The Atom - 2016</p>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={bvs} width="100%"/>
                                <p>Batman vs Superman - 2015</p>
                            </Col>                            
                        </Row>
                        <Row>                            
                            <Col md={4} xs={12}>
                                <img src={deathstroke} width="100%"/>
                                <p>Deathstroke - 2015</p>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={flashpoint} width="100%"/>
                                <p>Thomas Wayne vs Reverse Flash - 2016</p>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={svb} width="100%"/>
                                <p>Superman vs Batman - 2017</p>
                            </Col>                            
                        </Row>
                        <Row>                            
                            <Col md={4} xs={12}>
                                <img src={wolverine} width="100%"/>
                                <p>Wolverine - 2016</p>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={cold} width="100%"/>
                                <p>Captain Cold vs The Flash - 2016</p>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={dent} width="100%"/>
                                <p>Harvey Dent - 2015</p>
                            </Col>                            
                        </Row>
                        <Row>
                            <Col md={4} xs={12}>
                                <img src={joker} width="100%"/>
                                <p>The Joker - 2016</p>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={bvillains} width="100%"/>
                                <p>Batman Villains - 2015</p>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={lantern} width="100%"/>
                                <p>Hal Jordan - 2015</p>
                            </Col>
                        </Row>
                    </Tab>
                    </Tabs>
                </div>
            </Styles>
        )
    }
}
