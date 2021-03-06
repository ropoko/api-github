import React, { useContext, useEffect, useState } from 'react';
import Api from '../../../api';
import { UserContext } from '../../../context/userContext';
import { getResource } from '../../../models/resource';
import { User } from '../../../models/user';
import InfoUser from '../../InfoUser';
import Loading from '../../Loading';
import './home.style.css';

function Home() {
	const [user, setUser] = useState('');
	const { setUsername } = useContext(UserContext);

	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState({} as User);

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
		setLoading(true);
		const timeOutId = setTimeout(() => {
			Api(getResource('user'), user).then(response => {
				setResponse(response);
				setLoading(false);
			});
		}, 2000);
		return () => {
			clearTimeout(timeOutId);
		};
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
			{
				loading
					? <Loading /> 
					: <>
						<section className='response'>
							<InfoUser user={response}/>
						</section>
					</>
			}
		</main>
	);
}

export default Home;
