import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Answers.css';

const sendPoints = (changeCont, Counter, choice, correct) => {
  const obj = {
    easy: 1,
    medium: 2,
    hard: 3,
  };
  if (choice === correct) {
    const { difficulty, time } = Counter;
    const point = 10 + (obj[difficulty] * time);
    console.log(point);
    // addPoints(point);
  } else {
    console.log(0);
    // addPoints(0);
  };
  changeCont();
};

const NextButton = ({ changeCont, Counter, choice, correct }) => (
  < button
    className="Button_next-answer"
    onClick={() => sendPoints(changeCont, Counter, choice, correct)}
    data-testid="btn-next"
  >
    Próximo
  </button >
);

const mapStateToProps = ({ Counter }) => ({
  Counter,
});

// const mapDispatchToProps = (dispatch) => ({
//   setSettings: (value) => dispatch(addSettings(value)),
// });

export default connect(mapStateToProps)(NextButton);

NextButton.propTypes = {
  changeCont: PropTypes.func.isRequired,
  choice: PropTypes.string.isRequired,
  Counter: PropTypes.shape({
    difficulty: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
  correct: PropTypes.string.isRequired,
};
