import { combineReducers } from 'redux';
import Questions from './Questions';
import Token from './Token';
import Settings from './Settings';
import Url from './Url';
import Counter from './Counter';

const rootReducer = combineReducers({
  Questions,
  Token,
  Settings,
  Url,
  Counter,
});

export default rootReducer;
