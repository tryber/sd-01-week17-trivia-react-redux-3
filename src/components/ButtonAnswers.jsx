import React from 'react';
import PropTypes from 'prop-types';
import './Answers.css';

const verifyCorrect = (value, correctValue) => (
  (value === correctValue ? 'green' : 'red')
)

const ButtonAnswers = ({ value, correctAnswer, clicked, changeClicked }) => (
  <button
    className={`Answer-button ${verifyCorrect(value, correctAnswer)}${(clicked) ? 'border' : ''}`}
    disabled={clicked}
    onClick={(e) => changeClicked(e.target.value)}
  >
    {value}
  </button>
);

export default ButtonAnswers;

ButtonAnswers.propTypes = {
  value: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
};
