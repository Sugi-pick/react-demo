import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cart.selector.js';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import CustomButton from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { createStructuredSelector } from 'reselect';

import './cart-dropdown.style.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCartHidden());
				}}
			>
				Go to Checkout
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItem
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
