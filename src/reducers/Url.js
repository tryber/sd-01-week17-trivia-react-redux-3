import {
  ADD_URL,
  RESET,
} from '../actions';

const INITIAL_URL = '';

const Url = (state = INITIAL_URL, action) => {
  switch (action.type) {
    case ADD_URL:
      return { state: action.URL };
    case RESET:
      return INITIAL_URL;
    default:
      return state;
  }
};

export default Url;
