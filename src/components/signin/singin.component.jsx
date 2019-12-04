import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';

import { signInWithGoogle } from '../../firebase/firebase.util';

import './signin.style.scss';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.setState({ email: '', password: '' });
	}

	handleChange(evt) {
		const { name, value } = evt.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have a account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						label='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>

					<FormInput
						type='password'
						name='password'
						label='password'
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>

					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
