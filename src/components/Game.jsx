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
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    const { url, getQuestions } = this.props;
    getQuestions(url);
  }

  renderGame() {
    return (
      <div className="Game_playing">
        <Question />
        <div className="Game_answers-and-next">
          <Answers />
          <NextButton />
        </div>
      </div>
    );
  }

  renderLoadingScreen() {
    return (
      <div className="Loading">
        <h2>Carregando</h2>
      </div>
    );
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div className="Game_screen">
        <Header />
        {(isFetching ? renderLoadingScreen() : renderGame())}
      </div>
    );
  }
}

const mapStateToProps = ({ Url: { state }, Questions: { isFetching, data } }) => ({
  url: state,
  isFetching,
  data,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (url) => dispatch(fetchQuestion(url)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);

Game.propTypes = {
  url: PropTypes.string.isRequired,
  getQuestions: PropTypes.func.isRequired,
  data: PropTypes.shape({
    response_code: PropTypes.number.isRequired,
    results: PropTypes.shape().isRequired,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
};
