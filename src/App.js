// Notes: 
// https://www.kubera.com/?utm_source=benzinga&utm_campaign=best-portfolio-tracker
// https://www.altrady.com/
// https://www.sharesight.com/

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

import logo from './images/logo.png'


function App() {

  const padding = {
    padding: 5
  }

  return (

    <Router>
    
      <div>
        <div className="section navbar-container">
          <div className="container">
              <span className="float-left">
                  <Link className="remove-decoration logo-name vertical-center" style={padding} to="/">
                    <img src={logo} alt="Logo"></img>
                    <span>Crypto Tracker</span>
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
  );
}

export default App;
