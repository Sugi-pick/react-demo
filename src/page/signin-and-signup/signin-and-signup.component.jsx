import React from 'react';
import SignIn from '../../components/signin/singin.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signin-and-signup.style.scss';

const SignInAndSignUpPage = () => {
	return (
		<div className='sign-in-and-sign-up'>
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInAndSignUpPage;
