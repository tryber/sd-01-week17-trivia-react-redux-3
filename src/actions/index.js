import { getTokenTriviaApi, } from '../services/TriviaApi';

export const RECEIVE_TOKEN_SUCCESS = 'RECEIVE_TOKEN_SUCCESS';
export const RECEIVE_TOKEN_FAILURE = 'RECEIVE_TOKEN_FAILURE';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';

const requestToken = () => ({
  type: REQUEST_TOKEN,
});

const receiveTokenSuccess = ({ results }) => ({
  type: RECEIVE_TOKEN_SUCCESS,
  data: results,
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
