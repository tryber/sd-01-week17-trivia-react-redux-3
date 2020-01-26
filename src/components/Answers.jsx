import React from 'react';
import PropTypes from 'prop-types';
import ButtonAnswer from './ButtonAnswers';
import './Answers.css';

const Answers = (props) => {
  const { allAnswers, correct, click, changeClicked } = props;
  return (
    <div className="Answers_all">
      {allAnswers.map((answer) => (
        <ButtonAnswer
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
};
