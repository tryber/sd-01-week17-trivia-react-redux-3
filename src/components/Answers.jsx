import React from 'react';
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
