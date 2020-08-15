import imdb from "../apis/imdb";
import {
  SIGN_IN,
  SIGN_OUT,
  API_FETCH_DATA,
  FAVORITE_ADDED,
  FAVORITE_REMOVED,
  MOVIES_SEARCHED
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const apiFetchData = () => async dispatch => {
  const response = await imdb.get('');
  dispatch({type: API_FETCH_DATA, payload: response.data});
};

export const favoriteAdded = (id) => {
  return {
    type: FAVORITE_ADDED,
    payload: {id}
  };
};

export const favoriteRemoved = (id) => {
  return {
    type: FAVORITE_REMOVED,
    payload: {id}
  };
};

export const moviesSearched = (text) => {
  return {
    type: MOVIES_SEARCHED,
    payload: {text}
  };
};
