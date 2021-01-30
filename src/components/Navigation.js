import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'

const Styles = styled.div`
.Navigation{
    display: flex;
    justify-content: flex-end;
}
.navbar-light .navbar-nav .nav-link {
    color: #99824c!important;
    border-bottom: 2px solid whitesmoke;
    margin: 0 1rem;
}
.navbar-light .navbar-nav .nav-link:hover {
    border-bottom: 2px solid #ec0024;
}
.navbar-light .navbar-toggler {
    color: #99824c;
    border-color: #99824c;
}
.navbar-light .navbar-toggler-icon {
    // background-image: url("../assets/bars.png");
    // background-color: #ec0024;
}
@media screen and (max-width: 991px){
    .Navigation{
        display: block;
        justify-content: center;
    }
    .navbar-dark .navbar-nav .nav-link {
        width: min-content;
        color: #99824c!important;
    }
}
`;

export default class Navigation extends Component {
    render() {
        return (
            <Styles>
            <div className="Navigation">
                <Navbar className="justify-content-center" collapseOnSelect expand="lg" variant="light">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/#introduction">ABOUT</Nav.Link>
                    <Nav.Link href="/#portfolio">PORTFOLIO</Nav.Link>
                    <Nav.Link href="/#blog">BLOG</Nav.Link>
                    <Nav.Link href="/#footer">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
            </Styles>
        )
    }
}
