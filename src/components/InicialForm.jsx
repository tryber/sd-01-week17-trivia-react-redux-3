import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ADD_NAME, ADD_EMAIL, ADD_LINK_IMAGE } from '../actions';
import imageLink from '../services/gravatarAPI';

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
  login: dispatch({type: ADD_NAME, type: ADD_EMAIL, type: ADD_LINK_IMAGE})
});

const mapStateToProps = (state) => ({
  name: state.valueName,
  email: state.valueEmail,
  linkImage: state.imageLink
});

export default connect(mapStateToProps, mapDispatchToProps)(inicialForm);

inicialForm.propTypes = {
  onChangeValueEmail: PropTypes.func.isRequired,
  onChangeValueName: PropTypes.func.isRequired,
  valueEmail: PropTypes.string.isRequired,
  valueName: PropTypes.string.isRequired,
};
