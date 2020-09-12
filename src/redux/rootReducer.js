// The object that represent all of the state of the app
// It combines all of the states together

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});