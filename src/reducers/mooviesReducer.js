import {API_FETCH_DATA, FAVORITE_ADDED, FAVORITE_REMOVED} from '../actions/types';

const INTIAL_STATE = {
  movies: [],
  apiError: null,
  loading: true,
  favorite: false
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case API_FETCH_DATA:
      return { ...state, movies: action.payload.items, apiError: action.payload.errorMessage, loading: false};
    case FAVORITE_ADDED:
      return { ...state, favorite: true};
    case FAVORITE_REMOVED:
      return { ...state, favorite: false};
    default:
      return state;
  }
};
