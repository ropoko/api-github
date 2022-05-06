import React, { useContext, useEffect, useState } from 'react';
import Api from '../../../api';
import { UserContext } from '../../../context/userContext';
import { getResource } from '../../../models/resource';
import './home.style.css';

function Home() {
	const [user, setUser] = useState('');
	const { setUsername } = useContext(UserContext);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleChange = (event: any) => {
		setUser(event.target.value);
		setUsername(event.target.value);
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
		<main className='container'>
			<form onSubmit={handleSubmit}>
				<label className='label-search' htmlFor="username">Digite o nome do usuário: </label>
				<div className='search'>
					<input id="username" type="text" value={user} onChange={handleChange} />
					<button type='submit'> 
						<img src="/icon-search.png" alt="search" />
					</button>
				</div>
			</form>
		</main>
	);
}

export default Home;
