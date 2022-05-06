import React from 'react';
import { User } from '../../models/user';
import './infoUser.style.css';

function InfoUser( { user } : { user: User}) {
	return (
		<>
			{user.login !== undefined && 
			<section className='info'>
				<div className='person'>
					<img src={user.avatar_url} alt={`foto de ${user.name}`} />
					<div className='about'>
						<strong>{user.name} - {user.login}</strong>
						<p>{user.bio}</p>
						<a className='link-perfil' href={user.html_url}>Veja o perfil completo</a>
					</div>
				</div>
				<section className='statistics'>
					<div className='group'>
						<strong>Website: </strong> <p> <a href={`http://${user.blog}`}>{user.blog}</a> </p>
					</div>
					<div className='group'>
						<strong>followers: </strong> <p>{user.followers}</p>
					</div>
					<div className='group'>
						<strong>following: </strong> <p>{user.following}</p>
					</div>
				</section>
			</section>
			}
		</>

	);
}

export default InfoUser;
