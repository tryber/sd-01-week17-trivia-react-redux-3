import React from 'react';
import PropTypes from 'prop-types';
import './RankPlayer.css';

const RankPlayer = ({ index, name, score, picture }) => (
  <div className="RankPlayer">
    <img
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
  linkImage: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

