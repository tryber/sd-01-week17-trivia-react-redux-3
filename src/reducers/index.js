import { combineReducers } from 'redux';
import Questions from './Questions';
import Token from './Token';
import Settings from './Settings';
import Url from './Url';
import User from './User';
import Counter from './Counter';


const rootReducer = combineReducers({
  Questions,
  Token,
  Settings,
  Url,
  User,
  Counter,
  Score,
});

export default rootReducer;
