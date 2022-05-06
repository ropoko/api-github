import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';
import './stars.style.css';

function Stars() {
	const { username } = useContext(UserContext);

	return (
		<main className='stars'>
			<p>oi sou a pagina de stars - {username}</p>
		</main>
	);
}

export default Stars;
