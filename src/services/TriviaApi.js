const URL = 'https://opentdb.com/api_token.php?command=request';

export const getTokenTriviaApi = () => (
  fetch(`${URL}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const getQuestionTriviaApi = (url) => (
  fetch(url)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
