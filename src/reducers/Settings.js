import {
  ADD_SETTINGS,
} from '../actions';

const INITIAL_QUESTION = {};

const Settings = (state = INITIAL_QUESTION, action) => {
  switch (action.type) {
    case ADD_SETTINGS:
      return {
        ...state,
        ...action.value,
      };
    default:
      return state;
  }
};

export default Settings;
