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
    if (timer > 0 && !clicked) (setTimeout(() => this.changeCounter(), 1000));
  }

  componentDidUpdate() {
    const { timer } = this.state;
    const { clicked } = this.props;
    if (timer > 0 && !clicked) (setTimeout(() => this.changeCounter(), 1000));
    if (timer === 0) (this.verifyReset());
  }

  changeCounter() {
    this.setState(({ timer }) => ({
      timer: timer - 1,
    }));
  }

  sendValues(valueDifficulty, valueTimer) {
    const { addDif, addTimer } = this.props;
    addDif(valueDifficulty);
    addTimer(valueTimer);
  }

  verifyReset() {
    const { changeClicked } = this.props;
    this.setState({
      timer: 30,
    });
    changeClicked();
  }

  render() {
    const { timer } = this.state;
    const { clicked, difficulty } = this.props;
    if (clicked) (this.sendValues(difficulty, timer));
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
