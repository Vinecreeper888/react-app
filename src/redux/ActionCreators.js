import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';



//function that creates an action object
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

//thunk
export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading(true));

	setTimeout(() => {
		dispatch(addDishes(DISHES));
	},2000);
}

export const dishesLoading = () => ({
	type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
	type: ActionTypes.DISHES_FAILED,
	payload: errmess
});

export const addDishes = (dishes) => ({
	type: ActionTypes.ADD_DISHES,
	payload: dishes
})
//standardized way to create an action type