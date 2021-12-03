import React from 'react';
import Home from './components/home/Home.jsx';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

import Features from './components/features/Features.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'; 
import Search from './components/search/Search';
import Help from './components/help/Help.jsx';

import logo2 from './images/logo2.png'


function App() {

  const padding = {
    padding: 5
  }

  return (
    <div>

      <Router>
        <div>
          <div className="section navbar-container">
            <div className="container">
                <span className="float-left">
                    <Link className="remove-decoration home-page vertical-center" style={padding} to="/">
                      <img src={logo2} alt="Logo"></img>
                      <span className="logo-name">CRYPTO TRACKER</span>
                    </Link>
                </span>
                <span className="float-right">
                  <Link className="each-link remove-decoration" style={padding} to="/help">Help</Link>
                  <Link className="each-link remove-decoration" style={padding} to="/search">Search</Link>
                  <Link className="each-link remove-decoration" style={padding} to="/portfolio">Portfolio</Link>
                  <Link className="each-link remove-decoration" style={padding} to="/features">Features</Link>
                </span>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>

    
  );
}

export default App;
