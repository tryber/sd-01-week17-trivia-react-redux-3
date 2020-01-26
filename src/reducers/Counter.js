import {
  ADD_TIME,
  ADD_VALUE_DIFFICULTY,
} from '../actions';

const INITIAL_STATE = {};

const Counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TIME:
      return {
        ...state,
        time: action.time
      };
    case ADD_VALUE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.difficulty
      };
    default:
      return state;
  }
};

export default Counter;
