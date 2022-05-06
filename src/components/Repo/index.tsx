import React from 'react';
import { Repo as RepoModel } from '../../models/repo';
import './repo.style.css';

function Repo({ repo }: { repo: RepoModel }) {
	return (
		<div className='card'>
			<div className='header-repo'>
				<a href={repo.html_url} className='repo-name'>
					<strong>{repo.name}</strong>
				</a>
			</div>
			<div className='info-repo'>
				{ repo.language !== null ? <p>{repo.language}</p> : <></> }
				<p>Issues: {repo.open_issues}</p>
				<p>Stars: {repo.stargazers_count}</p>
			</div>
			<div className='about-repo'>
				{ repo.description !== null ? <p>{repo.description}</p> : <p>*Não possui descrição</p> }
			</div>
		</div>
	);
}

export default Repo;
