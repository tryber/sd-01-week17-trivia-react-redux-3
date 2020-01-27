import {
  REQUEST_QUESTION,
  RECEIVE_QUESTION_SUCCESS,
  RECEIVE_QUESTION_FAILURE,
  RESET,
} from '../actions';

const INITIAL_QUESTION = {
  isFetching: false,
};

const Questions = (state = INITIAL_QUESTION, action) => {
  switch (action.type) {
    case REQUEST_QUESTION:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_QUESTION_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    case RECEIVE_QUESTION_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    case RESET:
      return INITIAL_QUESTION;
    default:
      return state;
  }
};

export default Questions;
