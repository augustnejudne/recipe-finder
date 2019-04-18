export const SET_RECIPES = 'SET_RECIPES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const setRecipes = (items) => {
  return {
    type: SET_RECIPES,
    payload: items
  }
}

export const addToFavorites = (item) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: item
  }
}

export const removeFromFavorites = (item) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: item
  }
}