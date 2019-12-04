import React from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './page/signin-and-signup/signin-and-signup.component.jsx';

import { auth } from './firebase/firebase.util';

import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			console.log(user);
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className=''>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' render={routeProps => <HomePage />} />
					<Route path='/shop' render={routeProps => <ShopPage />} />
					<Route
						path='/signin'
						render={routeProps => <SignInAndSignUpPage />}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
