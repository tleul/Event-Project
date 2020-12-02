import {
	LOGINSUCCESS,
	LOGINFAIL,
	REGISTERSUCCESS,
	REGISTERFAIL,
	LOGOUT,
	LOADUSER,
} from './../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	user: null,
	loading: false,
};

export default (state = initialState, action) => {
	const { payload, type } = action;

	switch (type) {
		case LOGINSUCCESS:
		case REGISTERSUCCESS:
		case LOADUSER:
			return {
				...state,
				token: localStorage.getItem('token'),
				isAuthenticated: true,
				user: payload,
				loading: true,
			};
		case LOGOUT:
		case LOGINFAIL:
		case REGISTERFAIL:
			return {
				...state,
				token: null,
				isAuthenticated: false,
				user: null,
				loading: true,
			};
		default:
			return state;
	}
};
