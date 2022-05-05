import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../../api';
import { UserContext } from '../../../context/userContext';
import { getResource } from '../../../models/resource';

function Home() {
	const [user, setUser] = useState('');
	const { username, setUsername } = useContext(UserContext);

	const handleChange = (event: any) => {
		setUser(event.target.value);
		setUsername(event.target.value);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
	};

	useEffect(() => {
		if (user === '') return;
		const timeOutId = setTimeout(() => {
			Api(getResource('user'), user).then(response => { return response; });
		}, 2000);
		return () => clearTimeout(timeOutId);
	}, [user]);

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<input type="text" value={user} onChange={handleChange} />
				<p>oi sou o home {user} - {username} </p>
				<button type='submit'>submit</button>
				<Link to={'/stars'}>asdasd</Link>
			</form>
		</main>
	);
}

export default Home;
