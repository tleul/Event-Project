import { filter } from 'lodash';
import { toast } from 'react-toastify';
import API from '../../services/api';

import {
	EVENTCREATESUCCESS,
	EVENTDELETESUCCESS,
	EVENTUPDATESUCCESS,
	LOADEVENT,
} from './types';

export const loadevent = () => async (dispatch) => {
	const response = await API.get('/event');

	dispatch({ type: LOADEVENT, payload: response.data });
};
export const filterevent = (categoryID) => async (dispatch) => {
	const response = await API.get('/event');
	const filteredEvent = response.data.filter(
		(event) => event.event_category._id === categoryID,
	);
	dispatch({ type: LOADEVENT, payload: filteredEvent });
	console.log(filteredEvent);
};

export const deleteevent = (eventId) => async (dispatch) => {
	try {
		const response = await API.delete(`/event/${eventId}`);

		toast(response.data.msg, {
			preventDuplicate: true,
		});
		dispatch(loadevent());
	} catch (error) {
		toast('Netowork Error', {
			preventDuplicate: true,
		});
	}
};
