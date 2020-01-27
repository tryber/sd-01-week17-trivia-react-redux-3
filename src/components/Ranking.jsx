import React from 'react';
import RankPlayer from './RankPlayer';
import { getRanking } from '../services/LocalStorage';

const compare = (a, b) => {
  if (a.score > b.score) {
    return 1;
  }
  if (a.score < b.score) {
    return -1;
  }
  return 0;
};

const Ranking = () => {
  return (
    <div className="Ranking">
      {getRanking()
        .filter((player) => player.name)
        .sort((a, b) => b.score - a.score)
        .map(({
          name,
          score,
          picture, }, index) => (
            <RankPlayer key={index} name={name} score={score} picture={picture} />
          ))}
    </div>
  )
};

export default Ranking;
