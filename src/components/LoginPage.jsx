import React from 'react';
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



export default LoginPage;
