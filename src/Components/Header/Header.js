import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MenuItems} from './MenuItems.js';
import './Header.scss';
import LogoPic from './logo.jpg';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
	}
	
	toggleMenu = () => {
		this.setState({clicked: !this.state.clicked})
	}

	render() {
		return (
			<div className="header">
				<div>
					<div className="header__logo">
							<img src={LogoPic} alt="Logo"/>
					</div>
					<div
						className={`header__burger ${this.state.clicked ? 'header__burger_active' : ''}`}
						onClick={this.toggleMenu}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div
						className={`header__menu ${this.state.clicked ? 'header__menu_active' : ''}`}
						onClick={this.toggleMenu}>
						<ul>
							{MenuItems.map(item => {
								return (
									<li key={item.id} className = "header__menu-item">
										<Link to={item.url}>{item.title}</Link>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
