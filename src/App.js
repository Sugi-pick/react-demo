import React from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component.jsx';

import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className=''>
			<Header />
			<Switch>
				<Route exact path='/' render={routeProps => <HomePage />} />
				<Route path='/shop' render={routeProps => <ShopPage />} />
			</Switch>
		</div>
	);
}

export default App;
