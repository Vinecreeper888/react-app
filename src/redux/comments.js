import * as ActionTypes from './ActionTypes';


export const Comments = (state= {
	errMess: null,
	comments: []
}, action) => {
	switch(action.type) {
		case ActionTypes.ADD_COMMENTS: 
			return {...state, isLoading: false, errMess: null, comments: action.payload};


		case ActionTypes.COMMENTS_FAILED:
			return {...state, isLoading: false, errMess: action.payload, comments: []};

		//if incoming action is ADD_COMMENT
		//do something to state
		case ActionTypes.ADD_COMMENT:
			var comment = action.payload;
			//generating comments length
			//comments is a JS array
			
			//pushes into the array, the pushed-in element 
			//is a new objext
			return {...state, comments: state.comments.concat(comment)};
		default: 
			return state;
	}
}