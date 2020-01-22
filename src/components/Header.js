import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({
  srcLink = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  player = 'João',
  score = 20,
}) => (
  <div className="background-header">
    <div className="photo-and-name-player">
      <img src={srcLink} alt={`${player} gravatar`} />
      <p data-testid="header-player-name">{`Jogador: ${player}`}</p>
    </div>
    <p data-testid="header-score">{`Pontos: ${score}`}</p>
  </div>
);


export default Header;

Header.propTypes = {
  srcLink: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
