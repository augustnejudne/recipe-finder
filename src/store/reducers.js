import { combineReducers } from 'redux';
import {
  SET_RECIPES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from './actions.js';

const recipes = (state = [], action) => {
  switch (action.type) {
    case SET_RECIPES:
      return action.payload;
    default:
      return state;
  }
};

const favorites = (state = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter(e => e.recipe.label !== action.payload.recipe.label);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  recipes,
  favorites,
});

export default rootReducer;
