import { getTokenTriviaApi, getQuestionTriviaApi } from '../services/TriviaApi';

export const RECEIVE_TOKEN_SUCCESS = 'RECEIVE_TOKEN_SUCCESS';
export const RECEIVE_TOKEN_FAILURE = 'RECEIVE_TOKEN_FAILURE';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';

const requestToken = () => ({
  type: REQUEST_TOKEN,
});

const receiveTokenSuccess = ({ token }) => ({
  type: RECEIVE_TOKEN_SUCCESS,
  token,
});

const receiveTokenFailure = (error) => ({
  type: RECEIVE_TOKEN_FAILURE,
  error,
});

export function fetchToken() {
  return (dispatch) => {
    dispatch(requestToken());
    return getTokenTriviaApi()
      .then(
        (data) => dispatch(receiveTokenSuccess(data)),
        (error) => dispatch(receiveTokenFailure(error.message)),
      );
  };
}

export const RECEIVE_QUESTION_SUCCESS = 'RECEIVE_QUESTION_SUCCESS';
export const RECEIVE_QUESTION_FAILURE = 'RECEIVE_QUESTION_FAILURE';
export const REQUEST_QUESTION = 'REQUEST_QUESTION';

const requestQuestion = () => ({
  type: REQUEST_QUESTION,
});

const receiveQuestionSuccess = (data) => ({
  type: RECEIVE_QUESTION_SUCCESS,
  data,
});

const receiveQuestionFailure = (error) => ({
  type: RECEIVE_QUESTION_FAILURE,
  error,
});

export function fetchQuestion(url) {
  return (dispatch) => {
    dispatch(requestQuestion());
    return getQuestionTriviaApi(url)
      .then(
        (data) => dispatch(receiveQuestionSuccess(data)),
        (error) => dispatch(receiveQuestionFailure(error.message)),
      );
  };
}

export const ADD_SETTINGS = 'ADD_SETTINGS';

export const addSettings = (value) => ({
  type: ADD_SETTINGS,
  value,
});

export const ADD_URL = 'ADD_URL';

export const addURL = (URL) => ({
  type: ADD_URL,
  URL,
});

export const ADD_NAME = 'ADD_NAME';
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_LINK_IMAGE = 'ADD_LINK_IMAGE';

export const addName = (name) => ({
  type: ADD_NAME,
  name,
});

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addLinkImage = (linkImage) => ({
  type: ADD_LINK_IMAGE,
  linkImage,
});

export const ADD_VALUE_DIFFICULTY = 'ADD_VALUE_DIFFICULTY';
export const ADD_TIME = 'ADD_TIME';

export const addDifficulty = (difficulty) => ({
  type: ADD_VALUE_DIFFICULTY,
  difficulty,
});

export const addTime = (time) => ({
  type: ADD_TIME,
  time,
});

export const ADD_POINTS = 'ADD_POINTS';
export const ADD_ASSERTION = 'ADD_ASSERTION';

export const addPoints = (points) => ({
  type: ADD_POINTS,
  points,
});

export const addAssertion = () => ({
  type: ADD_ASSERTION,
});
