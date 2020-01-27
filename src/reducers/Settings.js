import {
  ADD_SETTINGS,
  RESET,
} from '../actions';

const INITIAL_SETTING = {};

const Settings = (state = INITIAL_SETTING, action) => {
  switch (action.type) {
    case ADD_SETTINGS:
      return {
        ...state,
        ...action.value,
      };
    case RESET:
      return INITIAL_SETTING;
    default:
      return state;
  }
};

export default Settings;
