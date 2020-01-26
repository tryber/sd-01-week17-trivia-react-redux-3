import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTime, addDifficulty } from '../actions';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
    };
  }

  componentDidMount() {
    const { timer } = this.state;
    const { clicked } = this.props;
    return (timer > 0 && !clicked) && setTimeout(() => this.changeCounter(), 1000);
  }

  componentDidUpdate() {
    const { timer } = this.state;
    const { clicked } = this.props;
    return (timer > 0 && !clicked) && setTimeout(() => this.changeCounter(), 1000);
  }

  changeCounter() {
    this.setState(({ timer }) => ({
      timer: timer - 1,
    }));
  }

  sendValues(valueDifficulty, valueTimer) {
    const { addDifficulty, addTime } = this.props;
    addDifficulty(valueDifficulty);
    addTime(valueTimer);
  }

  render() {
    const { timer } = this.state;
    const { clicked, difficulty } = this.props;
    (clicked || this.sendValues(difficulty, timer));
    return (
      <div>
        {clicked || <p data-testid="timer">{`Time: ${timer}`}</p>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTime: (value) => dispatch(addTime(value)),
  addDifficulty: (value) => dispatch(addDifficulty(value)),
});

export default connect(null, mapDispatchToProps)(Counter);

Counter.propTypes = {
  clicked: PropTypes.bool.isRequired,
  difficulty: PropTypes.string.isRequired,
};
