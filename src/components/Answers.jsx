import React from 'react';
import { PropTypes } from 'prop-types';
import ButtonAnswer from './ButtonAnswers';
import './Answers.css';

const Answers = ({
  correct = 'Será',
  incorrects = ['Ele é', 'Voará', 'As pessoas boas devem amar seus inimigos'],
}) => {
  const allAnswers = [...incorrects];
  const randomIndex = Math.floor(Math.random() * 3.49);
  allAnswers.splice(randomIndex, 0, correct);
  return (
    <div className="Answers_all">
      {allAnswers.map((answer) => (
        <ButtonAnswer key={answer} value={answer} correctAnswer={correct} />
      ))}
    </div>
  );
};

export default Answers;

Answers.propTypes = {
  correct: PropTypes.string.isRequired,
  incorrects: PropTypes.arrayOf.isRequired,
};
