import { combineReducers } from 'redux';
import Questions from './Questions';
import Token from './Token';
import Settings from './Settings';

const rootReducer = combineReducers({
  Questions,
  Token,
  Settings,
});

export default rootReducer;
