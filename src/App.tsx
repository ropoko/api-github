import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import Stars from './components/pages/Stars';

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
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<Home />}>
					</Route>
					<Route path="/details" element={<Details />}>
					</Route>
					<Route path="/stars" element={<Stars />}>
					</Route>
				</Routes>
			</Router>
			
			<h1>{message}</h1>
			<Footer />
		</div>
	);
}

export default App;
