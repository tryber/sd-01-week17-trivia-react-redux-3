import React from 'react';
import PropTypes from 'prop-types';
import './Answers.css';

const NextButton = ({ changeCont }) => (
  <button
    className="Button_next-answer"
    onClick={() => changeCont()}
    data-testid="btn-next"
  >
    Próximo
  </button>
);

export default NextButton;

NextButton.propTypes = {
  changeCont: PropTypes.func.isRequired,
};
