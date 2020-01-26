import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Answers.css';
import store from '../store'


const sendPoints = (changeCont, Counter, choice, correct) => {
  const obj = {
    easy: 1,
    medium: 2,
    hard: 3
  }
  if (choice === correct) {
    const { difficulty, time } = Counter;
    const point = 10 + (obj[difficulty] * time);
    // addPoints(point);
  } else {
    // addPoints(0);
  }
  changeCont()
}

const NextButton = ({ changeCont, Counter, choice, correct }) => {
  console.log(store.getState())
  console.log(Counter)
  console.log(choice)
  return (
    <button
      className="Button_next-answer"
      onClick={() => sendPoints(changeCont, Counter, choice, correct)}
      data-testid="btn-next"
    >
      Próximo
  </button>
  )
};

const mapStateToProps = ({ Counter }) => ({
  Counter,
});

// const mapDispatchToProps = (dispatch) => ({
//   setSettings: (value) => dispatch(addSettings(value)),
// });

export default connect(mapStateToProps)(NextButton);

NextButton.propTypes = {
  changeCont: PropTypes.func.isRequired,
};
