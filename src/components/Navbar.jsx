import React from 'react';
import logo from '../images/logo.png'

function Link(props) {
    return(
        <a href={props.link} >
            <button className="each-link remove-decoration">
                {props.name}
            </button>
        </a>
    );
}

function Navbar() {
  return (
    <div className="section navbar-container">
        <div className="container">
            <span className="float-left">
                <img src={logo} alt="Logo"></img>
                <a className="remove-decoration logo-name vertical-center" href="#home">Crypto Tracker</a>
            </span>
            <span className="float-right">
                <Link name="Help" link="#help" />
                <Link name="Search" link="#search" />
                <Link name="Features" link="#features" />
                <Link name="Portfolio" link="#portfolio" />
            </span>
        </div>
    </div>
  );
}

export default Navbar;
