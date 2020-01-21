import React from 'react';
import logo from '../trivia.png';
import '../App.css';

class UserForm extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="initial-page">
          <img src={logo} className="App-logo" alt="logo" />
          <p>SUA VEZ</p>
          <p>Email do Gravatar</p>
          <input type="text" placeholder="email" required />
          <p>Nome do jogador</p>
          <input type="text" placeholder="nome" required />
        </div>
      </div>
    );
  }
}

export default UserForm;
