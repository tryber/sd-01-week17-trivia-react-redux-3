const URL = 'https://opentdb.com/api_token.php?command=request';

export const getTokenTriviaApi = () => (
  fetch(`${URL}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

const QUESTIONTRIVIA_API = (valueToken, value) => `https://opentdb.com/api.php?amount=${value}&token=${valueToken}`;

export const getQuestionTriviaApi = (tokenPlayer, numQuestions = 5) => (
  fetch(`${QUESTIONTRIVIA_API(tokenPlayer, numQuestions)}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
