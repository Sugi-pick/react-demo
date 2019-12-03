import React from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';

import { Route, Link } from 'react-router-dom';

const Hats = () => (
	<div>
		<h1>Hats</h1>
	</div>
);

function App() {
	return (
		<div>
			<Route exact path='/' render={routeProps => <HomePage />} />
			<Route exact path='/hats' render={routeProps => <Hats />} />
		</div>
	);
}

export default App;
