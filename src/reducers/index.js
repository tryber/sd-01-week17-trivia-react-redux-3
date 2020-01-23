import { combineReducers } from 'redux';
import Questions from './Questions';
import Token from './Token';

const rootReducer = combineReducers({
  Questions,
  Token,
});

export default rootReducer;
