export const setNewPlayer = (player) => {
  const itemJson = JSON.stringify(player);
  localStorage.setItem('player', itemJson);
};

export const setRanking = (rank=[]) => {
  const itemJson = JSON.stringify(rank);
  localStorage.setItem('ranking', itemJson);
};

export const getRanking = () => {
  const rank = localStorage.getItem('ranking');
  return JSON.parse(rank);
};

export const UpdateRanking = (value) => {
  const ranking = getRanking();
  ranking.push(value)
  setRanking(ranking);
};

export const setLocalTokenRanking = (token) => {
  localStorage.setItem('token', token);
};

export const getLocalTokenRanking = () => {
  localStorage.getItem('token');
};

// export const AllItens = () => {
//   const arrKeys = Object.keys(localStorage).filter((keys) => keys.includes('MLB'));
//   const itens = arrKeys.map((key) => getItem(key));
//   return itens;
// };

// export const valueTotal = () => (
//   AllItens().reduce((acc, item) => {
//     let total = acc;
//     total += item.price * item.qtd;
//     return total;
//   }, 0)
// );

// export const getQtd = (id) => {
//   if (getItem(id)) {
//     return getItem(id).qtd;
//   }
//   return 1;
// };

// export const qtdTotal = () => (
//   AllItens().reduce((acc, item) => {
//     let total = acc;
//     total += item.qtd;
//     return total;
//   }, 0)
// );
