import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';

function Details() {
	const { username } = useContext(UserContext);
	
	return (
		<header>
			<p>oi sou o details - {username} </p>
		</header>
	);
}

export default Details;
