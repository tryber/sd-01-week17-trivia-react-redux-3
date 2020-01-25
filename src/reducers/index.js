import { combineReducers } from 'redux';
import Questions from './Questions';
import Token from './Token';
import Settings from './Settings';
import Url from './Url';

const rootReducer = combineReducers({
  Questions,
  Token,
  Settings,
  Url,
});

export default rootReducer;
