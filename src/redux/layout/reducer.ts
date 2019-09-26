import { LayoutState, LayoutActionTypes, ADD_PADDING, REMOVE_PADDING } from './types';

const initialState: LayoutState = {
	state: { padding: true }
};

export function layoutReducer (state = initialState, action: LayoutActionTypes): LayoutState {
	switch (action.type) {
		case ADD_PADDING:
			return { state: { ...action.payload } };
		case REMOVE_PADDING:
			return { state: { ...action.payload } };
		default:
			return state;
	}
}
