import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Answers from './Answers';
import NextButton from './NextButton';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      choice: '',
    };

    this.changeClicked = this.changeClicked.bind(this);
    this.returnClicked = this.returnClicked.bind(this);
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

  renderGame() {
    const { question, allAnswers } = this.props;
    const { clicked } = this.state;
    return (
      <div className="Game_playing">
        <Question category={question.category} text={question.question} />
        <div className="Game_answers-and-next">
          <Answers
            allAnswers={allAnswers}
            correct={question.correct_answer}
            click={clicked}
            changeClicked={() => this.changeClicked()}
          />
          {clicked && <NextButton changeCont={() => this.returnClicked()} />}
        </div>
      </div>
    );
  }

  render() {
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
