import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchToken } from '../actions'
import './LinkPageGame.css';

class LinkPageGame extends React.Component {
  componentDidMount() {
    const { getToken } = this.props;
    getToken();
  }

  render() {
    const { disable } = this.props;
    if (!disable) return <h3>Preencha os campos selecionados</h3>;
    return (
      <Link to="/game" className="link-game" data-testid="btn-play" disabled={disable}>
        Iniciar o jogo
      </Link>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(fetchToken())
}) 


export default connect(null, mapDispatchToProps)(LinkPageGame);

LinkPageGame.propTypes = {
  disable: PropTypes.bool.isRequired,
};
