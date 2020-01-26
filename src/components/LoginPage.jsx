import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addURL } from '../actions';
import logo from '../trivia.png';
import InicialForm from './InicialForm';
import LinkPageSettings from './LinkPageSettings';
import LinkPageGame from './LinkPageGame';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueEmail: '',
      valueName: '',
    };
    this.verifyCamps = this.verifyCamps.bind(this);
    this.registrationData = this.registrationData.bind(this);
    this.categoryUrl = this.categoryUrl.bind(this);
    this.difficultyUrl = this.difficultyUrl.bind(this);
    this.typeUrl = this.typeUrl.bind(this);
    this.createUrl = this.createUrl.bind(this);
    this.verifySettings = this.verifySettings.bind(this);
  }

  categoryUrl() {
    const { Settings: { category } } = this.props;
    if (category === undefined || category === '') return '';
    return `&category=${category}`;
  }

  difficultyUrl() {
    const { Settings: { difficulty } } = this.props;
    if (difficulty === undefined || difficulty === '') return '';
    return `&difficulty=${difficulty}`;
  }

  typeUrl() {
    const { Settings: { type } } = this.props;
    if (type === undefined || type === '') return '';
    return `&type=${type}`;
  }

  verifySettings() {
    const { Settings } = this.props;
    return (Settings.difficulty === '') && (Settings.category === '') && (Settings.type === '');
  }

  createUrl() {
    const { setUrl, token } = this.props;
    const Url = `https://opentdb.com/api.php?amount=5&token=${token}${this.categoryUrl()}${this.difficultyUrl()}${this.typeUrl()}`;
    setUrl(Url);
  }

  registrationData(event, data) {
    const { value } = event.target;
    this.setState({
      [data]: value,
    });
  }

  verifyCamps() {
    return (this.state.valueEmail !== '') && (this.state.valueName !== '');
  }

  render() {
    const { valueEmail, valueName } = this.state;
    this.createUrl();
    return (
      <div className="App">
        <div className="initial-page">
          <img src={logo} className="App-logo" alt="logo" />
          <p>SUA VEZ</p>
          <LinkPageSettings />
          <InicialForm
            valueEmail={valueEmail}
            onChangeValueEmail={(event) => this.registrationData(event, 'valueEmail')}
            valueName={valueName}
            onChangeValueName={(event) => this.registrationData(event, 'valueName')}
          />
          <LinkPageGame disable={this.verifyCamps()} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ Settings, Token: { token } }) => ({
  Settings,
  token,
});

const mapDispatchToProps = (dispatch) => ({
  setUrl: (value) => dispatch(addURL(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

LoginPage.propTypes = {
  setUrl: PropTypes.func.isRequired,
  Settings: PropTypes.shape({
    category: PropTypes.string,
    type: PropTypes.string,
    difficulty: PropTypes.string,
  }).isRequired,
  token: PropTypes.string,
};

LoginPage.defaultProps = {
  token: '',
}
