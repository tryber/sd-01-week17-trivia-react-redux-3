import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addName, addEmail, addLinkImage } from '../actions';

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
        onChange={onChangeValueEmail}
      />
      <p>Nome do jogador</p>
      <input
        type="text"
        placeholder="nome"
        data-testid="input-player-name"
        value={valueName}
        required
        onChange={onChangeValueName}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveName: (name) => dispatch(addName(name)),
  saveEmail: (email) => dispatch(addEmail(email)),
  saveImage: (image) => dispatch(addLinkImage(image)),
});

const mapStateToProps = (state) => ({ teste: state });

export default connect(mapStateToProps, mapDispatchToProps)(inicialForm);

inicialForm.propTypes = {
  onChangeValueEmail: PropTypes.func.isRequired,
  onChangeValueName: PropTypes.func.isRequired,
  valueEmail: PropTypes.string.isRequired,
  valueName: PropTypes.string.isRequired,
};
