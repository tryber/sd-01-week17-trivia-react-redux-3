import React from 'react';
import App from '../App';
import { Router } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';

function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

describe('Elements at the screen / ', () => {
  afterEach(cleanup);
  
  test('texts in the screen, (Email do gravatar, Nome do jogador, Jogar', () => {
    const { getByText } = renderWithRouter(<App />);
    
    expect(getByText(/Email/i)).toBeInTheDocument();
  });
});
