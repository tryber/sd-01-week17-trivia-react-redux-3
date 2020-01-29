import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTime, addDifficulty } from '../actions';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
      paused: true,
    };
  }

  componentDidMount() {
    this.changePausedFalse();
  }

  componentDidUpdate() {
    const { timer, paused } = this.state;
    const { clicked } = this.props;

    if (paused && !clicked) (this.changePausedFalse());
    if (!paused && !clicked) (setTimeout(() => this.changeCounter(), 1000));
    if (timer !== 30 && clicked) this.changePausedTrue();
  }

  changePausedTrue() {
    this.setState({ paused: true, timer: 30 });
  }

  changePausedFalse() {
    this.setState({ paused: false });
  }

  changeCounter() {
    const { timer, paused } = this.state;
    const { changeClicked } = this.props;
    if (timer !== 0 && !paused) {
      this.setState((state) => ({
        timer: state.timer - 1,
      }));
    } else {
      this.changePausedTrue();
    }
    if (timer === 0) (changeClicked(''));
  }

  sendValues(valueDifficulty, valueTimer) {
    const { addDif, addTimer } = this.props;
    addDif(valueDifficulty);
    addTimer(valueTimer);
  }

  render() {
    const { timer, paused } = this.state;
    const { clicked, difficulty } = this.props;
    if (clicked && !paused) (this.sendValues(difficulty, timer));
    return (
      <div>
        {clicked || <p data-testid="timer">{`Time: ${timer}`}</p>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTimer: (value) => dispatch(addTime(value)),
  addDif: (value) => dispatch(addDifficulty(value)),
});

export default connect(null, mapDispatchToProps)(Counter);

Counter.propTypes = {
  clicked: PropTypes.bool.isRequired,
  difficulty: PropTypes.string.isRequired,
  addTimer: PropTypes.func.isRequired,
  addDif: PropTypes.func.isRequired,
  changeClicked: PropTypes.func.isRequired,
};
