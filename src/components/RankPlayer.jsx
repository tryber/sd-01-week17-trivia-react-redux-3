import React from 'react';
import PropTypes from 'prop-types';
import './RankPlayer.css';

const RankPlayer = ({ index, name, score, picture }) => (
  <div className="RankPlayer">
    <img
      alt={`profileImg-${name}`}
      src={picture}
      data-testid={`profile-picture-${index}`}
    />
    <p data-testid={`${name}-${index}`}>
      {`${name} - ${score} Points`}
    </p>
  </div>
);

export default RankPlayer;

RankPlayer.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

