import React from 'react';
import { Link } from 'react-router-dom';
import RankPlayer from './RankPlayer';
import { getRanking } from '../services/LocalStorage';
import './Ranking.css';

const Ranking = () => (
  <div className="Ranking">
    <h1>Ranking</h1>
    {getRanking()
      .filter((player) => player.name)
      .sort((a, b) => b.score - a.score)
      .map(({ name, score, picture }, index) => (
        <RankPlayer
          index={index}
          key={`${index + name}`}
          name={name}
          score={score}
          picture={picture}
        />
      ))}
    <Link to="/" className="back" >Back</Link>
  </div>
);

export default Ranking;
