const TOKENTRIVIA_API = 'https://opentdb.com/api_token.php?command=request';

export const getTokenTriviaApi = () => (
  fetch(`${TOKENTRIVIA_API}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

const Token = '9baac3a971523f8c946f196ae27b91d99e0f7fbf6c29e400c7c7017s0f3e5529d';
const NumberAsks = 5;
const QUESTIONTRIVIA_API = (value, valueToken) => `https://opentdb.com/api.php?amount=${value}&token=${valueToken}`;

export const getQuestionTriviaApi = () => (
  fetch(`${QUESTIONTRIVIA_API(NumberAsks, Token)}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
