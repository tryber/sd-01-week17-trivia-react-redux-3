import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchToken, addName, addEmail, addLinkImage } from '../actions';
import imageLink from '../services/gravatarAPI'
import './LinkPageGame.css';

class LinkPageGame extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }

  sendData() {
    const {
      getToken,
      saveName,
      saveEmail,
      saveImage,
      name,
      email,
    } = this.props;
    saveName(name);
    saveEmail(email);
    saveImage(imageLink(email))
    getToken();
  }

  render() {
    const { disable, isFetching, token } = this.props;
    if (token) return <Redirect to="/game" />;
    return (
      <div>
        <input
          type="button"
          value={(isFetching ? 'Carregando' : 'Jogar')}
          className="link-game"
          onClick={() => this.sendData()}
          data-testid="btn-play"
          disabled={!disable}
        />
      </div >
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(fetchToken()),
  saveName: (name) => dispatch(addName(name)),
  saveEmail: (email) => dispatch(addEmail(email)),
  saveImage: (image) => dispatch(addLinkImage(image)),
});

const mapStateToProps = ({ Token: { token, isFetching } }) => ({
  token,
  isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkPageGame);

LinkPageGame.propTypes = {
  disable: PropTypes.bool.isRequired,
  getToken: PropTypes.func.isRequired,
  token: PropTypes.string,
  isFetching: PropTypes.bool,
};

LinkPageGame.defaultProps = {
  token: '',
  isFetching: false,
};
