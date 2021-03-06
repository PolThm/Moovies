import {
  API_FETCH_DATA,
  FAVORITE_ADDED,
  FAVORITE_REMOVED,
  MOVIES_SEARCHED,
  SIGN_OUT
} from '../actions/types';

const INTIAL_STATE = {
  movies: [],
  apiError: null,
  searchBar: '',
  loading: true,
  favorites: {}
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case API_FETCH_DATA:
      return { ...state, movies: action.payload.items, apiError: action.payload.errorMessage, loading: false};
    case FAVORITE_ADDED:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [action.payload.id]: true
        }
      };
    case FAVORITE_REMOVED:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [action.payload.id]: false
        }
      };
    case MOVIES_SEARCHED:
      return {...state, searchBar: action.payload.text};

    case SIGN_OUT:
      return {...state, favorites: {}};
    default:
      return state;
  }
};
