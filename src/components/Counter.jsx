import React from 'react';
import PropTypes from 'prop-types';
import './Answers.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer = 30,
    }
  }

  render() {
    const { timer } = this.props;
    return (
      <div>
        <p>
          {`Time: ${timer}`}
        </p>
      </div>
    )
  }
}

export default Counter;
