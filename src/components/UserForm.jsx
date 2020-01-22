import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../trivia.png';

class UserForm extends React.Component {
  render() {
    const { name, email } = this.props;
    return (
      <div className="App">
        <div className="initial-page">
          <img src={logo} className="App-logo" alt="logo" />
          <p>SUA VEZ</p>
          <p>Email do Gravatar</p>
          <input type="text" placeholder="email" required value={email}/>
          <p>Nome do jogador</p>
          <input type="text" placeholder="nome" required value={name}/>
          <Link to="/settings">
            <button type="button">Configurações</button>
          </Link>
          <Link to="/game">
            <button type="button">Jogar</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserForm;
