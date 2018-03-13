import React, { Component } from 'react';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App burguer">
				<div className="bgColor">
					<nav className="nav-extended">
						<div className="nav-wrapper">
						  <div className="container-Nav">
									<a href="#" className="brand-logo flex">
										<img className="img-logo" src="http://choicemediaworks.com/wp-content/uploads/2017/01/DansSoulFoodRestaurantLogo.png" alt=""/>
									</a>
									<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
									<ul id="nav-mobile" className="right hide-on-med-and-down">
									  <li><a href="sass.html">NOSOTROS</a></li>
										<li><a href="badges.html">NUESTROS COMBOS</a></li>
										<li><a href="collapsible.html">CONTACTANOS</a></li>
									</ul>
							</div>
						</div>
					</nav>
					<div className="flex1">
						<a class="waves-effect waves-light btn-large transparent btn-n">DESAYUNOS</a> 
						<a class="waves-effect waves-light btn-large transparent btn-n">ALMUERZOS</a> 
					</div>
				</div>   
      </div>
    );
  }
}

export default Header;
