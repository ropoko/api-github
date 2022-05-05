import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';

function Details() {
	const user = useContext(UserContext);
	
	return (
		<header>
			<p>oi sou o details - {user}</p>
		</header>
	);
}

export default Details;
