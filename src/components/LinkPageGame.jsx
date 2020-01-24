import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchToken } from '../actions';
import './LinkPageGame.css';

class LinkPageGame extends React.Component {
  render() {
    const { disable, getToken, isFetching, token } = this.props;
    if (token) return <Redirect to="/game" />
    return (
      <div>
        <input
          type="button"
          value={(isFetching ? "Carregando" : "Jogar")}
          className="link-game"
          onClick={() => getToken()}
          data-testid="btn-play"
          disabled={!disable}
        />
      </div >
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(fetchToken()),
});

const mapStateToProps = ({ Token: { token, isFetching } }) => ({
  token,
  isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkPageGame);

LinkPageGame.propTypes = {
  disable: PropTypes.bool.isRequired,
  getToken: PropTypes.func.isRequired,
};
