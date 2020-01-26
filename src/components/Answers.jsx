import React from 'react';
import PropTypes from 'prop-types';
import ButtonAnswer from './ButtonAnswers';
import './Answers.css';

const verifyIncorrects = (incorrects, answer) => (
  incorrects.indexOf(answer)
);

const Answers = (props) => {
  const { allAnswers, correct, click, changeClicked, incorrects } = props;
  return (
    <div className="Answers_all">
      {allAnswers.map((answer) => (
        <ButtonAnswer
          data={verifyIncorrects(incorrects, answer)}
          key={answer}
          value={answer}
          changeClicked={changeClicked}
          correctAnswer={correct}
          clicked={click}
        />
      ))}
    </div>
  );
};

export default Answers;

Answers.propTypes = {
  allAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correct: PropTypes.string.isRequired,
  changeClicked: PropTypes.func.isRequired,
  click: PropTypes.bool.isRequired,
  incorrects: PropTypes.arrayOf(PropTypes.string).isRequired,
};
