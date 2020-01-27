import {
  ADD_TIME,
  ADD_VALUE_DIFFICULTY,
  RESET,
} from '../actions';

const INITIAL_STATE = {};

const Counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TIME:
      return {
        ...state,
        time: action.time,
      };
    case ADD_VALUE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.difficulty,
      };
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default Counter;
