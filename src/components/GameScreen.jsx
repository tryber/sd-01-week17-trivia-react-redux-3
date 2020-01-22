import React from 'react';

const Question = (category, question) => (
  <div className="question-camp">
    <div className="category">
      <p data-testid="question-category">{`Categoria: ${category}`}</p>
    </div>
    <div className="question">
      <p data-testid="question-text">{question}</p>
    </div>
  </div>
);

export default Question;

