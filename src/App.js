import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.scss';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import { Container } from 'react-bootstrap';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Footer from './components/Footer';
import About from './components/About';

export default class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render(){
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
  return (
    <div className="App">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="circle"></div> 
      <div className="circle"></div> 
      <div className="circle"></div> 
      <div className="circle"></div> 
      <div className="circle"></div> 
      <div className="circle"></div>
      <div className="circle"></div> 
      <div className="circle"></div> 
      <div className="circle"></div> 
      <div className="circle"></div> 
      <div className="circle"></div> 
      <div className="circle"></div>
      <div className="triangle-topleft"></div>
      <div className="triangle-topright"></div>
      <div className="triangle-bottomleft"></div>
      <div className="triangle-bottomright"></div>
      <Container>
      <header>
        <Navigation />
      </header>
      <React.Fragment>
        <Introduction />
        <About />
        <Portfolio />
        <Blog />
      </React.Fragment>
      <footer>
        <Footer />
      </footer>
      </Container>
    </div>
  );
}
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

