import React from 'react';
import PropTypes from 'prop-types';

const ButtonAnswers = ({ value, correctAnswer }) => {
return <button className="Answer_button">{value}</button>
}

export default ButtonAnswers;

ButtonAnswers.propTypes = {
  value: PropTypes.string,
  correctAnswer: PropTypes.string,
}
