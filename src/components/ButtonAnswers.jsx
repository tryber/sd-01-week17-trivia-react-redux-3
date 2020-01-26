import React from 'react';
import PropTypes from 'prop-types';
import './Answers.css';

const verifyCorrect = (value, correctValue) => (
  (value === correctValue ? 'green' : 'red')
);

const verifyData = (data) => (
  (data === -1 ? 'correct-answer' : `wrong-answer-${data}`)
);

const ButtonAnswers = ({ value, correctAnswer, clicked, changeClicked, data }) => (
  <button
    data-testid={verifyData(data)}
    className={`Answer-button ${verifyCorrect(value, correctAnswer)}${(clicked) ? 'border' : ''}`}
    disabled={clicked}
    value={value}
    onClick={(e) => changeClicked(e.target.value)}
  >
    {value}
  </button>
);

export default ButtonAnswers;

ButtonAnswers.propTypes = {
  value: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  clicked: PropTypes.bool.isRequired,
  changeClicked: PropTypes.func.isRequired,
  data: PropTypes.number.isRequired,
};
