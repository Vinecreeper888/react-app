import * as ActionTypes from './ActionTypes';


//function that creates an action objedt
export const addComment = (dishId, rating, author, comment) => ({
	//returns plain JS object
	type: ActionTypes.ADD_COMMENT,
	payload: {
		//data that is sent back
		dishId: dishId,
		rating: rating,
		author: author,
		comment: comment
	}
});

//standardized way to create an action type