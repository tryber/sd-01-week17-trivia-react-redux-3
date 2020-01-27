import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

const Header = ({ srcLink, player, points, }) => (
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
    <p
      className="Header_paragraph"
      data-testid="header-score"
    >
      {`Pontos: ${points}`}
    </p>
  </div>
);

const mapStateToProps = ({ User: { name, linkImage }, Score: { points } }) => ({
  player: name,
  srcLink: linkImage,
  points,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  srcLink: PropTypes.string,
  player: PropTypes.string,
  points: PropTypes.number,
};

Header.defaultProps = {
  srcLink: '',
  player: '',
  points: 0,
};
