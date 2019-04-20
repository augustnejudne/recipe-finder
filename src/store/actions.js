import axios from 'axios';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const APPEND_TO_RECIPES = 'APPEND_TO_RECIPES';

export const fetchRecipes = (dish, start = 0, end = 12) => {
  const appId = 'ce7efbb9';
  const appKey = 'caf7060e4870099c0383dadb0cd72895';
  const url = `https://api.edamam.com/search?q=${dish}&app_id=${appId}&app_key=${appKey}&from=${start}&to=${end}`;
  const request = axios.get(url);

  return dispatch => {
    dispatch({type: 'FETCH_RECIPES_START'})
    request.then(({ data }) => {
      dispatch({
        type: FETCH_RECIPES,
        currentDish: dish,
        payload: data.hits,
      });
    }).catch(e => {
      dispatch({
        type: 'FETCH_RECIPES_ERROR',
      })
    })
  };
};

export const appendToRecipes = (dish, start, end) => {
  const appId = 'ce7efbb9';
  const appKey = 'caf7060e4870099c0383dadb0cd72895';
  const url = `https://api.edamam.com/search?q=${dish}&app_id=${appId}&app_key=${appKey}&from=${start}&to=${end}`;
  const request = axios.get(url);

  return dispatch => {
    dispatch({ type: 'APPEND_TO_RECIPES_START'});
    request.then(({ data }) => {
      dispatch({
        type: APPEND_TO_RECIPES,
        payload: data.hits,
      });
    }).catch(e => {
      dispatch({ type: 'APPEND_TO_RECIPES_ERROR'})
    })
  };
};

export const addToFavorites = item => {
  return {
    type: ADD_TO_FAVORITES,
    payload: item,
  };
};

export const removeFromFavorites = item => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: item,
  };
};
