export const setNewPlayer = (player) => {
  const itemJson = JSON.stringify(player);
  localStorage.setItem('player', itemJson);
};

export const setRanking = (rank = []) => {
  const itemJson = JSON.stringify(rank);
  localStorage.setItem('ranking', itemJson);
};

export const getRanking = () => {
  const rank = localStorage.getItem('ranking');
  return JSON.parse(rank);
};

export const UpdateRanking = (value) => {
  const ranking = getRanking();
  ranking.push(value);
  setRanking(ranking);
};

export const setLocalTokenRanking = (token) => {
  localStorage.setItem('token', token);
};
