import React from 'react';
// import PropTypes from 'prop-types';

const inicialForm = (props) => {
  const { valueEmail, valueName, onChangeValueEmail, onChangeValueName } = props;
  return (
    <div>
      <p>Email do Gravatar</p>
      <input type="text" placeholder="email" data-testid="input-gravatar-email" value={valueEmail} required onChange={onChangeValueEmail} />
      <p>Nome do jogador</p>
      <input type="text" placeholder="nome" data-testid="input-gravatar-email" value={valueName} required onChange={onChangeValueName} />
    </div>
  );
}

export default inicialForm;

// inicialForm.PropTypes = {
//   onChangeValueEmail: PropTypes.string.isRequired,
//   onChangeValueName: PropTypes.string.isRequired,
// };
