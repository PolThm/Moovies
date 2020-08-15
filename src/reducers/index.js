import {combineReducers} from 'redux';
import mooviesReducer from './mooviesReducer';
import firebaseReducer from "./firebaseReducer";

export default combineReducers({
  moovies: mooviesReducer,
  firebase: firebaseReducer
});
