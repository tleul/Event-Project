import {
	CATEGORYCREATESUCCESS,
	CATEGORYDELETESUCCESS,
	CATEGORYUPDATESUCCESS,
	LOADCATEGORY,
} from './../actions/types';

const initialState = {
	category: null,
	loading: false,
};

export default (state = initialState, action) => {
	const { payload, type } = action;

	switch (type) {
		case CATEGORYCREATESUCCESS:
		case CATEGORYDELETESUCCESS:
		case CATEGORYUPDATESUCCESS:
		case LOADCATEGORY:
			return {
				...state,
				category: payload,
				loading: true,
			};

		default:
			return state;
	}
};
