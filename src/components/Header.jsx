import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({
  srcLink = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  player = 'João',
  score = 20,
}) => (
  <div className="Header_background-header">
    <div className="Header_photo-and-name-player">
      <img 
      className="Header_photo"
      src={srcLink}
      alt={`${player} gravatar`}
    />
      <p
      className="Header_paragraph"
      data-testid="header-player-name"
    >
      {`Jogador: ${player}`}
      </p>
    </div>
    <p className="Header_paragraph"
    data-testid="header-score"
    >
    {`Pontos: ${score}`}
    </p>
  </div>
  );

export default Header;

Header.propTypes = {
  srcLink: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
