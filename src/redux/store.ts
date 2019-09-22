import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { layoutReducer } from './layout/reducer';

const rootReducer = combineReducers({
	layout: layoutReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export function initializeStore () {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware()));
}
