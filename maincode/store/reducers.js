import { combineReducers } from "redux";

import { ADD_TODO, COMPELETE_TODO, REMOVE_TODO } from "./actiontypes";

const initialState = {
	todos: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case COMPELETE_TODO:
		case REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => state.todos.indexOf(todo) != action.payload),
			};
		default:
			return state;
	}
};

export default rootReducer;
