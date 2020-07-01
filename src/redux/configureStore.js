import {createStore} from 'redux';
//allows to create a redux store

import {Reducer, initialState} from './reducer';

export const ConfigureStore = () => {
	const store = createStore(
		Reducer,
		initialState
	);

	return store;
}