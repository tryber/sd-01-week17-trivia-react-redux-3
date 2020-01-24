import { ADD_NAME, ADD_EMAIL, ADD_LINK_IMAGE } from '../actions';

const INITIAL_VALUE = {};

const User = (state = INITIAL_VALUE, action) => {
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
    default:
      return state;
  }
};

export default User;
