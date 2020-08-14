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

export const favoriteAdded = (id) => {
  return {
    type: FAVORITE_ADDED,
    payload: {
      id
    }
  };
};

export const favoriteRemoved = (id) => {
  return {
    type: FAVORITE_REMOVED,
    payload: {
      id
    }
  };
};
