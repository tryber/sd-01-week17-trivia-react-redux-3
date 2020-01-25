import {
  ADD_URL,
} from '../actions';

const INITIAL_QUESTION = '';

const Url = (state = INITIAL_QUESTION, action) => {
  switch (action.type) {
    case ADD_URL:
      return { state: action.URL };
    default:
      return state;
  }
};

export default Url;
