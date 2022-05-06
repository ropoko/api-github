import React, { useContext, useEffect, useState } from 'react';
import Api from '../../../api';
import { UserContext } from '../../../context/userContext';
import './stars.style.css';
import { Repo as RepoModel } from '../../../models/repo';
import { getResource } from '../../../models/resource';
import Repo from '../../Repo';

function Stars() {
	const { username } = useContext(UserContext);
	const [response, setResponse] = useState([] as RepoModel[]);

	useEffect(() => {
		if (username === '') return;
		const timeOutId = setTimeout(() => {

			Api(getResource('favorites'), username).then(response => {
				setResponse(response);
			});

		}, 2000);
		return () => clearTimeout(timeOutId);
	}, [username]);

	return (
		<main className='repos'>
			{response.map((repo) => (
				<Repo key={repo.name} repo={repo} />
			))}
		</main>
	);
}

export default Stars;
