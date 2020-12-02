import API from '../../services/api';

import {
	CATEGORYCREATESUCCESS,
	CATEGORYDELETESUCCESS,
	CATEGORYUPDATESUCCESS,
	LOADCATEGORY,
} from './types';

export const loadcategory = () => async (dispatch) => {
	const { data } = await API.get('/catagory');
	console.log(data);
	dispatch({ type: LOADCATEGORY, payload: data });
};
