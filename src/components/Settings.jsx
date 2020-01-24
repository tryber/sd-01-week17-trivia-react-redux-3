import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSettings } from '../actions';
import Dropdown from './Dropdown';
import './Settings.css';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      difficulty: '',
      category: '',
    };

    this.changeCategory = this.changeCategory.bind(this);
    this.changeDifficulty = this.changeDifficulty.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  componentWillUnmount() {
    const { setSettings } = this.props;
    setSettings({ ...this.state });
  }

  changeType(newValue) {
    this.setState({
      type: newValue,
    });
  }

  changeDifficulty(newValue) {
    this.setState({
      difficulty: newValue,
    });
  }

  changeCategory(newValue) {
    this.setState({
      category: newValue,
    });
  }

  render() {
    return (
      <div className="Settings">
        <h1 className="title-Settings">Configurações</h1>
        <Dropdown type="category" onChange={(value) => this.changeCategory(value)} />
        <Dropdown type="difficulty" onChange={(value) => this.changeDifficulty(value)} />
        <Dropdown type="type" onChange={(value) => this.changeType(value)} />
        <Link to="/" className="back" >Back</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSettings: (value) => dispatch(addSettings(value)),
});

export default connect(null, mapDispatchToProps)(Settings);

Settings.propTypes = {
  setSettings: PropTypes.func.isRequired,
};
