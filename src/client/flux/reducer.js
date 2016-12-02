import defaultState from './defaultState.js';

export default ( ( state = defaultState, action ) => {
	console.log(action.type)
	return state;
} );