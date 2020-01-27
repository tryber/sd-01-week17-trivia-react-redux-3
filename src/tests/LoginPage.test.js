import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import { render, fireEvent, cleanup } from '@testing-library/react';
import store from '../store/index';

describe('Elements at the screen / ', () => {
  afterEach(cleanup);
  
  test('texts in the screen, (Email do gravatar, Nome do jogador, Jogar', () => {
    const { getByText,debug, getAllByAltText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByText(/Email do Gravatar/i)).toBeInTheDocument();
    expect(getByText('Nome do jogador')).toBeInTheDocument();

    const input = document.getElementsByTagName('input');

    fireEvent.change(input[0], { target: { value: 'Player'} });
    expect(input[0].value).toBe('Player');

    fireEvent.change(input[1], { target: { value: 'player@gmail.com'} });
    expect(input[1].value).toBe('player@gmail.com');

    fireEvent.click(getByText('Jogar'));
    expect(getByText(/Carregando/i)).toBeInTheDocument();
    debug()

    //falta colocar o teste demonstrando que o esta sendo redirecionado para a pagina de '/game'

    // const img = getAllByAltText(`${nomeDoJogador} gravatar`);
    // expect(img).toBeInTheDocument();
    // expect(img.src).toBe(`https://www.gravatar.com/avatar/${tokenDoJogador}`);
    // expect(getByText(`Jogador: ${nomeDoJogador}`)).toBeInTheDocument();
    // expect(getByText(`Pontos: ${pontosDoJogador}`)).toBeInTheDocument();
  });

  test('redirect to settings page', () => {
    const { getByText, debug } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const buttonSettings = document.getElementsByClassName('button-settings')[0];

    fireEvent.click(buttonSettings);
    expect(getByText(/Configurações/i)).toBeInTheDocument();
  });
});
