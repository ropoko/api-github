import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [message, setMessage] = useState('');

	useEffect(() => {
		axios
			.get('https://api.github.com/zen')
			.then((res) => {
				const { data } = res;
				setMessage(data);
			});
	});

	return (
		<div className="container">
			<h1>{message}</h1>
		</div>
	);
}

export default App;
