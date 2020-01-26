import React from 'react';
import './Answers.css';

const NextButton = ({ changeCont }) => (
  <button
    className="Button_next-answer"
    onClick={() => changeCont()}
  >
    Próximo
  </button>
);

export default NextButton;
