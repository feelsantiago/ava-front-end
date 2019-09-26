export interface Layout {
	padding: boolean;
}

export interface LayoutState {
	state: Layout;
}

export const ADD_PADDING = 'ADD_PADDING';
export const REMOVE_PADDING = 'REMOVE_PADDING';

interface AddLauyoutAction {
	type: typeof ADD_PADDING;
	payload: Layout;
}

interface RemoveLayoutAction {
	type: typeof REMOVE_PADDING;
	payload: Layout;
}

export type LayoutActionTypes = AddLauyoutAction | RemoveLayoutAction;
