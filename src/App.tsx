import React, { useContext, useState } from 'react';
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
import { UserContext, UserContextProvider } from './context/userContext';

function App() {
	const [ username, setUsername ] = useState('');

	return (
		<UserContextProvider>
			<div className="container">
				<Header />
				<Router>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/details" element={<Details />}></Route>
						<Route path="/stars" element={<Stars />}></Route>
					</Routes>
				</Router>
				<Footer />
			</div>
		</UserContextProvider>
	);
}

export default App;
