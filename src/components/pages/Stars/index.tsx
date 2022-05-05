import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';

function Stars() {
	const user = useContext(UserContext);

	return (
		<header>
			<p>oi sou a pagina de stars {user}</p>
		</header>
	);
}

export default Stars;
