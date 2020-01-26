import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Game from './Game';
import Loading from './Loading';
import { fetchQuestion } from '../actions';
import './PageGame.css';

class PageGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contQuestion: 0,
    };

    this.changeContQuestion = this.changeContQuestion.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.setQuestions = this.setQuestions.bind(this);
    this.allAnswers = this.allAnswers.bind(this);
  }

  componentWillMount() {
    const { url, getQuestions } = this.props;
    getQuestions(url);
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setQuestions();
    }
  }

  setQuestions() {
    const { data } = this.props;
    if (data === undefined) return;
    this.setState({
      questions: data.results,
      response: data.response_code,
    });
  }

  changeContQuestion() {
    this.setState(({ contQuestion }) => ({
      contQuestion: contQuestion + 1,
    }));
  }

  allAnswers() {
    const { questions, contQuestion } = this.state;
    const question = questions[contQuestion];
    const allAnswers = [...question.incorrect_answers];
    const randomIndex = Math.floor(Math.random() * 5);
    allAnswers.splice(randomIndex, 0, question.correct_answer);
    return allAnswers;
  }


  renderBody() {
    const { isFetching } = this.props;
    const { questions, contQuestion } = this.state;
    if (isFetching || questions === undefined) return <Loading />;
    return (
      <Game
        question={questions[contQuestion]}
        allAnswers={this.allAnswers()}
        changeCont={() => this.changeContQuestion()}
      />
    );
  }

  render() {
    const { history: { action } } = this.props;
    const { contQuestion, response } = this.state;
    if (action === 'POP') return <Redirect to="/" />;
    if (response === 3) return <Redirect to="/" />;
    if (contQuestion === 4) return <Redirect to="/Game/Feedback" />;
    return (
      <div className="Game_screen">
        <Header />
        {this.renderBody()}
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


export default connect(mapStateToProps, mapDispatchToProps)(PageGame);

PageGame.propTypes = {
  url: PropTypes.string.isRequired,
  getQuestions: PropTypes.func.isRequired,
  data: PropTypes.shape({
    response_code: PropTypes.number.isRequired,
    results: PropTypes.shape().isRequired,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
  }).isRequired,
};
