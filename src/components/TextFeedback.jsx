import React from 'react';
import PropTypes from 'prop-types';

const ShowProps = (value) => (value < 3 ? 'Podia ser melhor...' : 'Mandou bem!');

const renderTitleFeedback = (contCorrect) => (
  <h2 className="title-feedback">
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

const TextFeedback = ({ contCorrect = 2, points = 40 }) => (
  <div data-testid="feedback-text" className="text-feedback">
    {renderTitleFeedback(contCorrect)}
    {renderCorrectFeedback(contCorrect)}
    {renderPointsFeedback(points)}
  </div>
);

export default TextFeedback;

TextFeedback.propTypes = {
  contCorrect: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
};
