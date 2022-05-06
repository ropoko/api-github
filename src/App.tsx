import React from 'react';
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
import { UserContextProvider } from './context/userContext';

function App() {
	return (
		<UserContextProvider>
			<div className="container">
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/details" element={<Details />}></Route>
						<Route path="/stars" element={<Stars />}></Route>
					</Routes>
					<Footer />
				</Router>
			</div>
		</UserContextProvider>
	);
}

export default App;
