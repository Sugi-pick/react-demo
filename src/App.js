import React from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import CheckoutPage from './page/checkout/checkout.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './page/signin-and-signup/signin-and-signup.component.jsx';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

import { Route, Switch, Redirect } from 'react-router-dom';

import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					console.log(snapShot.data());
					setCurrentUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className=''>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact
						path='/signin'
						render={() => {
							return this.props.currentUser ? (
								<Redirect to='/' />
							) : (
								<SignInAndSignUpPage />
							);
						}}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProp = createStructuredSelector({
	currentUser: selectCurrentUser
});
const mapDispatchToProp = dispatch => {
	return {
		setCurrentUser: user => dispatch(setCurrentUser(user))
	};
};

export default connect(mapStateToProp, mapDispatchToProp)(App);
