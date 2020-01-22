import React from 'react';
import { Link } from 'react-router-dom';
import './LinkPageGame.css';

const linkPageGame = (props) => {
  const { disable } = props;
  console.log(disable)
  if (!disable) return <h3>Preencha os campos selecionados</h3>
  return (
  <Link to="/game" className="link-game" data-testid="btn-play" disabled={disable}>
    Iniciar o jogo
  </Link>
  );
}

export default linkPageGame;
