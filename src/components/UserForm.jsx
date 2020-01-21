import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../trivia.png';

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
          <Link to="/settings">
            <button>Configurações</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserForm;
