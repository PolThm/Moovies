import {combineReducers} from 'redux';
import mooviesReducer from './mooviesReducer';

export default combineReducers({
  moovies: mooviesReducer
});
