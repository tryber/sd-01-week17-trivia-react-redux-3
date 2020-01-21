import React from 'react';

class UserForm extends React.Component {
  render() {
    return (
      <div>
        <p>Email do Gravatar</p>
        <input type="text" placeholder="email" required />
        <p>Nome do jogador</p>
        <input type="text" placeholder="nome" required />
      </div>
    );
  }
}

export default UserForm;
