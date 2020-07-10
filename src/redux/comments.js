import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';


export const Comments = (state=COMMENTS, action) => {
	switch(action.type) {
		//if incoming action is ADD_COMMENT
		//do something to state
		case ActionTypes.ADD_COMMENT:
			var comment = action.payload;
			//generating comments length
			//comments is a JS array
			comment.id =  state.length;
			comment.date = new Date().toISOString();
			//pushes into the array, the pushed-in element 
			//is a new objext
			return state.concat(comment);
		default: 
			return state;
	}
}