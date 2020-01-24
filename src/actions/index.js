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

const receiveQuestionSuccess = ({ results }) => ({
  type: RECEIVE_QUESTION_SUCCESS,
  data: results,
});

const receiveQuestionFailure = (error) => ({
  type: RECEIVE_QUESTION_FAILURE,
  error,
});

export function fetchQuestion(NumberAsks, Token) {
  return (dispatch) => {
    dispatch(requestQuestion());
    return getQuestionTriviaApi(NumberAsks, Token)
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
