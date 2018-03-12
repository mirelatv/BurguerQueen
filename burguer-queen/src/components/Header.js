import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png'
// import  burguer from "./hamburguesa-de-carne.jpg"



class Header extends Component {
    
    
  render() {
    return (
      <div className="App  burguer">
				<div className="bgColor">
					<nav className="nav-extended">
						<div className="nav-wrapper">
							<a href="#" className="brand-logo">
							<img src={logo}alt=""/>
							</a>
							<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
							<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li><a href="sass.html">Sass</a></li>
								<li><a href="badges.html">Components</a></li>
								<li><a href="collapsible.html">JavaScript</a></li>
							</ul>
						</div>
					</nav> 
				</div>   
      </div>
    );
  }
}

export default Header;
