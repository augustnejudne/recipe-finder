import { combineReducers } from 'redux';
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FETCH_RECIPES,
  APPEND_TO_RECIPES,
} from './actions.js';

const recipes = (
  state = {
    isLoading: false,
    currentDish: '',
    list: [],
    start: 0,
    end: 12,
    error: '',
    perPage: 12
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_RECIPES_START':
      return {
        ...state,
        isLoading: true,
        list: []
      };
    case 'FETCH_RECIPES_ERROR':
      return {
        ...state,
        isLoading: false,
        error: 'Something went wrong',
      };
    case FETCH_RECIPES:
      return {
        ...state,
        isLoading: false,
        currentDish: action.currentDish,
        list: action.payload,
        start: state.end,
        end: state.end + state.perPage,
      };
    case 'APPEND_TO_RECIPES_START':
      return {
        ...state,
        isLoading: true,
      };
    case 'APPEND_TO_RECIPES_ERROR':
      return {
        ...state,
        isLoading: false,
        error: 'Something went wrong',
      };
    case APPEND_TO_RECIPES:
      return {
        ...state,
        isLoading: false,
        list: state.list.concat(action.payload),
        start: state.end,
        end: state.end + state.perPage,
      };
    default:
      return state;
  }
};

const favorites = (state = [], action) => {
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
