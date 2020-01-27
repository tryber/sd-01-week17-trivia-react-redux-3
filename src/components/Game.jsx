import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Answers from './Answers';
import NextButton from './NextButton';
import Counter from './Counter';
import store from '../store';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      choice: '',
    };

    this.changeClicked = this.changeClicked.bind(this);
    this.returnClicked = this.returnClicked.bind(this);
    this.renderCounter = this.renderCounter.bind(this);
  }

  changeClicked(value) {
    this.setState(({ clicked }) => ({
      clicked: !clicked,
      choice: value,
    }));
  }

  returnClicked() {
    const { changeCont } = this.props;
    this.setState(({ clicked }) => ({
      clicked: !clicked,
    }));
    changeCont();
  }

  renderCounter() {
    const { question } = this.props;
    const { clicked } = this.state;
    return (
      <Counter
        clicked={clicked}
        difficulty={question.difficulty}
        changeClicked={(value) => this.changeClicked(value)}
      />
    );
  }

  renderGame() {
    const { question, allAnswers } = this.props;
    const { clicked, choice } = this.state;
    return (
      <div className="Game_playing">
        <Question category={question.category} text={question.question} />
        {this.renderCounter()}
        <div className="Game_answers-and-next">
          <Answers
            incorrects={question.incorrect_answers}
            allAnswers={allAnswers}
            correct={question.correct_answer}
            click={clicked}
            changeClicked={(value) => this.changeClicked(value)}
          />
          {clicked && <NextButton
            choice={choice}
            correct={question.correct_answer}
            changeCont={() => this.returnClicked()}
          />}
        </div>
      </div>
    );
  }

  render() {
    console.log(store.getState());
    return (this.renderGame());
  }
}

export default Game;

Game.propTypes = {
  question: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  allAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeCont: PropTypes.func.isRequired,
};
