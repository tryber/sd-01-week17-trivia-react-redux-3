import React from 'react';
import PropTypes from 'prop-types';

const inicialForm = (props) => {
  const { valueEmail, valueName, onChangeValueEmail, onChangeValueName } = props;
  return (
    <div>
      <p>Email do Gravatar</p>
      <input
        type="text"
        placeholder="email"
        data-testid="input-gravatar-email"
        value={valueEmail}
        required
        onChange={(e) => onChangeValueEmail(e.target.value)}
      />
      <p>Nome do jogador</p>
      <input
        type="text"
        placeholder="nome"
        data-testid="input-player-name"
        value={valueName}
        required
        onChange={(e) => onChangeValueName(e.target.value)}
      />
    </div>
  );
};

export default inicialForm;

inicialForm.propTypes = {
  onChangeValueEmail: PropTypes.func.isRequired,
  onChangeValueName: PropTypes.func.isRequired,
  valueEmail: PropTypes.string.isRequired,
  valueName: PropTypes.string.isRequired,
};
