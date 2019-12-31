import React from 'react';

import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const pk = 'pk_test_yOgng5C8S93vYfVDZxnh98rx00LsB2vPVp';

	const onToken = token => {
		console.log(token);
		alert('payment successful');
	};

	return (
		<StripeCheckOut
			label='PayNow'
			name='Crwn cloating ltd'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your totol is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={pk}
		/>
	);
};

export default StripeCheckOutButton;
