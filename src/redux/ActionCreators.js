import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';


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

	// setTimeout(() => {
	// 	dispatch(addDishes(DISHES));
	// },2000);

	//for fetching the information about the dishes
	return fetch(baseUrl+'dishes')
		.then(response => {
			//error handling using fetch
			if(response.ok) {
				return response;
			}
			else {
				var error = new Error('Error '+response.status + ': '+response.statusText)
				error.response = response;
				throw error;
			}
		},
		error => {
			//error handler
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(dishes => dispatch(addDishes(dishes)))
		.catch(error => dispatch(dishesFailed(error.message)));
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
});

export const fetchComments = () => (dispatch) => {

	return fetch(baseUrl+'comments')
		.then(response => {
			//error handling using fetch
			if(response.ok) {
				return response;
			}
			else {
				var error = new Error('Error '+response.status + ': '+response.statusText)
				error.response = response;
				throw error;
			}
		},
		error => {
			//error handler
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(comments => dispatch(addComments(comments)))
		.catch(error => dispatch(commentsFailed(error.message)));
;

}

export const commentsFailed = (errmess) => ({
	type: ActionTypes.COMMENTS_FAILED,
	payload: errmess
});

export const addComments = (comments) => ({
	type: ActionTypes.ADD_COMMENTS,
	payload: comments
})




export const fetchPromos = () => (dispatch) => {
	dispatch(promosLoading(true));

	// setTimeout(() => {
	// 	dispatch(addDishes(DISHES));
	// },2000);

	//for fetching the information about the dishes
	return fetch(baseUrl+'promotions')
		.then(response => {
			//error handling using fetch
			if(response.ok) {
				return response;
			}
			else {
				var error = new Error('Error '+response.status + ': '+response.statusText)
				error.response = response;
				throw error;
			}
		},
		error => {
			//error handler
			var errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(promos => dispatch(addPromos(promos)))
		.catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
	type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
	type: ActionTypes.PROMOS_FAILED,
	payload: errmess
});

export const addPromos = (promos) => ({
	type: ActionTypes.ADD_PROMOS,
	payload: promos
});

































//standardized way to create an action type