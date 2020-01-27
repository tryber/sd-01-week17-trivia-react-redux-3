import {
  ADD_NAME,
  ADD_EMAIL,
  ADD_LINK_IMAGE,
  RESET,
} from '../actions';


const INITIAL_STATE = {};

const User = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.name,
      };
    case ADD_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case ADD_LINK_IMAGE:
      return {
        ...state,
        linkImage: action.linkImage,
      };
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default User;
