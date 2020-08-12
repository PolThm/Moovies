import {combineReducers} from 'redux';
import marmitonReducer from './marmitonReducer';

export default combineReducers({
  marmiton: marmitonReducer
});
