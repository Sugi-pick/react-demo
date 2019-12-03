import React from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';

import { Route, Link } from 'react-router-dom';

function App() {
	return (
		<div>
			<Route exact path='/' render={routeProps => <HomePage />} />
			<Route path='/shop' render={routeProps => <ShopPage />} />
		</div>
	);
}

export default App;
