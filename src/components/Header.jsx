import '../App.css';

const Header = (
  srcLink = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  player = 'João',
  score = 20
  ) => {
  return (
    <div className='background-header'>
      <img src={srcLink} alt={`${player} picture`}></img>
      <p>{`Jogador: ${player}`}</p>
      <p>{`Pontos: ${score}`}</p>
    </div>
  );
}

export default Header;
