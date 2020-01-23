import React from 'react';
import ButtonAnswer from './ButtonAnswers';
import './Answers.css'

const Answers = ({
  correct = 'Será',
  incorrects = ['Ele é', 'Voará', 'Desmafaguifou'],
}) => {
  const allAnswers = [...incorrects]
  const randomIndex = Math.floor(Math.random() * 3.49);
  allAnswers.splice(randomIndex, 0, correct);
  return (
    <div className="Answers_all">
      {allAnswers.map((answer) => (
        <ButtonAnswer key={answer} value={answer} correctAnswer={correct}/>
      ))}
    </div>
  );
}

export default Answers;
