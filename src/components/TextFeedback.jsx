import React from 'react';

const ShowProps = (value) => {
  const couch = ['Pessimo', 'Ruim', 'Razoavel', 'Bom', 'Show'];
  return couch[value]
}

const renderTitleFeedback = (contCorrect) => (
  <h2>
    {ShowProps(contCorrect)}
  </h2>
);

const renderPointsFeedback = (points) => (
  <p data-testid="feedback-total-score">
    {`Um total de ${points} pontos`}
  </p>
);

const renderCorrectFeedback = (contCorrect) => (
  <p data-testid="feedback-total-question">
    {`Você acertou ${contCorrect} questões!`}
  </p>
);

const TextFeedback = ({contCorrect=2, points=40}) => (
  <div data-testid="feedback-text" className="text-feedback">
    {renderTitleFeedback(contCorrect)}
    {renderCorrectFeedback(contCorrect)}
    {renderPointsFeedback(points)}
  </div>
);

export default TextFeedback;
