import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

const Header = ({
  srcLink,
  player,
  score,
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
      <p
        className="Header_paragraph"
        data-testid="header-score"
      >
        {`Pontos: ${score}`}
      </p>
    </div>
  );

const mapStateToProps = ({ User: { name, linkImage, score } }) => ({
  player: name,
  srcLink: linkImage,
  score,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  srcLink: PropTypes.string,
  player: PropTypes.string,
  score: PropTypes.number,
};

Header.defaultProps = {
  srcLink: '',
  player: '',
  score: 0,
};
