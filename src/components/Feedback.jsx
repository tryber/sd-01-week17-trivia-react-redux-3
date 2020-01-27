import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import TextFeedback from './TextFeedback';
import { reset } from '../actions';
import './Feedback.css';

const Feedback = ({ resetAll }) => (
  <div className="Feedback">
    <Header />
    <div className="sub-div">
      <TextFeedback />
      <Link to="/game/ranking" >VER RANKING</Link>
      <Link onClick={() => resetAll()} to="/" className="green">JOGAR NOVAMENTE</Link>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  resetAll: () => dispatch(reset()),
});

export default connect(null, mapDispatchToProps)(Feedback);

Feedback.propTypes = {
  resetAll: PropTypes.func.isRequired,
};
