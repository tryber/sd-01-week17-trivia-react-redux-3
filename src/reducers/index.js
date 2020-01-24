import { combineReducers } from 'redux';
import Questions from './Questions';
import Token from './Token';
import User from './User';

const rootReducer = combineReducers({
  Questions,
  Token,
  User,
});

export default rootReducer;
