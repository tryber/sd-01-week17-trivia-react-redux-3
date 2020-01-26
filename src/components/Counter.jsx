import React from 'react';

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
    return (timer > 0 && !clicked) || setTimeout(() => this.changeCounter(), 1000);
  }

  componentDidUpdate() {
    const { timer } = this.state;
    const { clicked } = this.props;
    return (timer > 0 && !clicked) || setTimeout(() => this.changeCounter(), 1000);
  }

  changeCounter() {
    this.setState(({ timer }) => ({
      timer: timer - 1,
    }));
  }


  render() {
    const { timer } = this.state;
    const { clicked } = this.props;
    return (
      <div>
        {clicked || <p>{`Time: ${timer}`}</p>}
      </div>
    );
  }
}

export default Counter;
