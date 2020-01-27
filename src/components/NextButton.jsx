import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPoints, addAssertion } from '../actions';
import './Answers.css';

const sendPoints = (values) => {
  const { changeCont, Counter, choice, correct } = values;
  const { addCorrect, setNewPoints } = values;
  const obj = { easy: 1, medium: 2, hard: 3 };
  if (choice === correct) {
    const { difficulty, time } = Counter;
    const point = 10 + (obj[difficulty] * time);
    setNewPoints(point);
    addCorrect();
  }
  changeCont();
};

const NextButton = (props) => (
  <button
    className="Button_next-answer"
    onClick={() => sendPoints(props)}
    data-testid="btn-next"
  >
    Próximo
  </button >
);

const mapStateToProps = ({ Counter }) => ({
  Counter,
});

const mapDispatchToProps = (dispatch) => ({
  addCorrect: () => dispatch(addAssertion()),
  setNewPoints: (value) => dispatch(addPoints(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);

NextButton.propTypes = {
  changeCont: PropTypes.func.isRequired,
  choice: PropTypes.string.isRequired,
  Counter: PropTypes.shape({
    difficulty: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
  correct: PropTypes.string.isRequired,
  addCorrect: PropTypes.func.isRequired,
  setNewPoints: PropTypes.func.isRequired,
};
