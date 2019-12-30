import { createSelector } from 'reselect';

const selectCart = state => {
	return state.cart;
};

export const selectCartItem = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItem],
	cartItems => {
		return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
	}
);

export const selectCartTotal = createSelector([selectCartItem], cartItems => {
	return cartItems.reduce(
		(acc, cartItem) => acc + cartItem.quantity * cartItem.price,
		0
	);
});
