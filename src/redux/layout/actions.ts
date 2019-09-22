import { Layout, LayoutActionTypes, ADD_PADDING, REMOVE_PADDING } from './types';

export function addLayoutPadding (layout: Layout): LayoutActionTypes {
	return {
		type: ADD_PADDING,
		payload: layout
	};
}

export function removeLayoutPadding (layout: Layout): LayoutActionTypes {
	return {
		type: REMOVE_PADDING,
		payload: layout
	};
}
