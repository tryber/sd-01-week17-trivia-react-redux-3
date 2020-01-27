import {
  ADD_ASSERTION,
  ADD_POINTS,
} from '../actions';

const INITIAL_STATE = {
  points: 0,
  assertion: 0,
};

const Score = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POINTS:
      return {
        ...state,
        points: state.points + action.points,
      };
    case ADD_ASSERTION:
      return {
        ...state,
        assertion: state.assertion + 1,
      };
    default:
      return state;
  }
};

export default Score;
