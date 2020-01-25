import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Question from './Question';
import Answers from './Answers';
import NextButton from './NextButton';
import { fetchQuestion } from '../actions';
import './Game.css';

class Game extends React.Component {
  componentWillMount() {
    const { url, getQuestions } = this.props;
    getQuestions(url);
  }

  render() {
    return (
      <div className="Game_screen">
        <Header />
        <div className="Game_playing">
          <Question />
          <div className="Game_answers-and-next">
            <Answers />
            <NextButton />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ Url: { state } }) => ({
  url: state,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (url) => dispatch(fetchQuestion(url)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);

Dropdown.propTypes = {
  url: PropTypes.string.isRequired,
  getQuestions: PropTypes.func.isRequired,
};
