import imdb from "../apis/imdb";
import {
  API_FETCH_DATA,
  FAVORITE_ADDED,
  FAVORITE_REMOVED
} from './types';

export const apiFetchData = () => async dispatch => {
  const response = await imdb.get('');
  dispatch({type: API_FETCH_DATA, payload: response.data});
};

export const favoriteAdded = () => {
  return {
    type: FAVORITE_ADDED
  };
};

export const favoriteRemoved = () => {
  return {
    type: FAVORITE_REMOVED
  };
};
