import {combineReducers} from 'redux';
import mooviesReducer from './mooviesReducer';
import authReducer from "./authReducer";

export default combineReducers({
  moovies: mooviesReducer,
  auth: authReducer
});
