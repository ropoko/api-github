import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.css';

function Header() {
	return (
		<header>
			<div className='logo'>
				<Link to={'/'}>
					<img src="/github-icon.png" alt="github icon" />
				</Link>
				<strong>API Github</strong>
			</div>
			<div className='menu'>
				<Link to={'/'}>Home</Link>
				<Link to={'/details'}>Repositórios</Link>
				<Link to={'/stars'}>Favoritos</Link>
			</div>
		</header>
	);
}

export default Header;
