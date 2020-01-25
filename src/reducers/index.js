import { combineReducers } from 'redux';
import Questions from './Questions';
import Token from './Token';
import Settings from './Settings';
import Url from './Url';
import User from './User';

const rootReducer = combineReducers({
  Questions,
  Token,
  Settings,
  Url,
  User,
});

export default rootReducer;
