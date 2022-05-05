import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';

function Stars() {
	const { username } = useContext(UserContext);

	return (
		<header>
			<p>oi sou a pagina de stars - {username}</p>
		</header>
	);
}

export default Stars;
