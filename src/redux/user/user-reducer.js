import { UserActionTypes } from './user.types';
const InitailState = {
	currentUser: null
};

const userReducer = (state = InitailState, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return { ...state, currentUser: action.payload };

		default:
			return state;
	}
};

export default userReducer;
