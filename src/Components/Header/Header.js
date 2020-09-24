import React from 'react';
import './Header.css';
import LogoPic from './logo.jpg';

const Logo = ({src}) => {
	return (
		<div className="header__logo">
			<img src={src} alt="Logo"/>
		</div>
	)
}

const Menu = () => {
	return (
		<div className="header__menu">
			<ul>
				<li className="header__menu-item header__menu-item_active">Home</li>
				<li className="header__menu-item">About Us</li>
			</ul>
		</div>
	)
}

const Header = () => {
  return (
	  <div className="header">
			<Logo src = {LogoPic}/>
			<Menu/>
	  </div>
  )
}

export default Header;
