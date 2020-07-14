import * as ActionTypes from './ActionTypes';

export const Leaders = (state = {
	errMess: null,
	leaders: []
},action) => {
	switch(action.type) {
		case ActionTypes.ADD_LEADERS:
			return {...state, isLoading: false, errMess: null, leaders: action.payload}
		
		case ActionTypes.LEADERS_LOADING:
			return {...state, isLoading: true, errMess: null, leaders: []}

		case ActionTypes.LEADERS_FAILED:
			return {...state, isLoading:false, errMess:action.payload, leaders: []}
			
		case ActionTypes.ADD_LEADER:
			var leader = action.payload;
			return {...state, leaders: state.leaders.concat(leader)};
		default: 
			return state;
	}
}