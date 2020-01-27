import React from 'react';
import PropTypes from 'prop-types';

const RankPlayer = ({ name, score, picture }) => (
  <div className="RankPlayer">
    <img src={picture} />
    <p>
      {`${name} - ${score} Points`}
    </p>
  </div>
);

export default RankPlayer;

RankPlayer.propTypes = {
  name: PropTypes.string.isRequired,
  linkImage: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
};

