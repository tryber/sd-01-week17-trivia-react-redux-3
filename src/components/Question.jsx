import React from 'react';
import { PropTypes } from 'prop-types';
import './Question.css';

const Question = ({
  category = 'Mágica',
  question = 'Um Ninho de mafagafos com sete mafagafinhos. Quem desmafaguifar o ninho dos mafagagos, bom desmafaguifador...?',
}) => (
  <div className="Question_camp">
    <div className="Question_category">
      <p data-testid="question-category">{`Categoria: ${category}`}</p>
    </div>
    <div className="Question_text">
      <p data-testid="question-text">{question}</p>
    </div>
  </div>
);

export default Question;

Question.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};