import API from '../../services/api';
import {
	LOGINSUCCESS,
	LOGINFAIL,
	REGISTERSUCCESS,
	REGISTERFAIL,
	LOGOUT,
	LOADUSER,
} from './types';

export const loginuser = (user, admin) => async (dispatch) => {
	try {
		const admininfo = {
			admin: admin.admin,
			adminPin: admin.adminPin,
		};
		const body = { ...user, ...admininfo };
		console.log(body, admin);
		const response = await API.post('admin', body);
		localStorage.setItem('token', response.headers['x-auth-token']);
		dispatch({ type: REGISTERSUCCESS, payload: response.data });
	} catch (error) {
		console.log(error);
	}
};

export const logoutuser = () => {};

export const registeruser = () => {};

export const loaduser = () => async (dispatch) => {
	const response = await API.get('auth');
	console.log(response);
};
