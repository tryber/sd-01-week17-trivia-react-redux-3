import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import TextFeedback from './TextFeedback';
import { reset } from '../actions';
import {
  setLocalTokenRanking,
  setNewPlayer,
  setRanking,
  UpdateRanking,
  getRanking,
} from '../services/LocalStorage';
import './Feedback.css';

const Feedback = ({
  resetAll,
  name,
  linkImage,
  email,
  assertion,
  points,
  token,
}) => {
  const player = {
    name,
    assertion,
    score: points,
    email,
  };
  const ranking = {
    name,
    score: points,
    picture: linkImage,
  };
  setLocalTokenRanking(token);
  if (!getRanking()) {
    setRanking();
  }
  UpdateRanking(ranking);
  setNewPlayer(player);
  return (
    <div className="Feedback" >
      <Header />
      <div className="sub-div">
        <TextFeedback />
        <Link to="/game/ranking" >VER RANKING</Link>
        <Link onClick={() => resetAll()} to="/" className="green">JOGAR NOVAMENTE</Link>
      </div>
    </div >
  );
};

const mapDispatchToProps = (dispatch) => ({
  resetAll: () => dispatch(reset()),
});

const mapStateToProps = ({
  User: { name, email, linkImage },
  Score: { points, assertion },
  Token: { token },
}) => ({
  name,
  linkImage,
  email,
  assertion,
  points,
  token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

Feedback.propTypes = {
  resetAll: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  linkImage: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  assertion: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
};
